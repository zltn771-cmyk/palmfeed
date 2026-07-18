"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
  type?: "fade" | "mask" | "scale";
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  className = "",
  staggerChildren,
  type = "fade"
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVariants = () => {
    if (type === "mask") {
      return {
        hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
        visible: { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
          opacity: 1,
          transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1], delay } 
        }
      };
    }
    
    if (type === "scale") {
      return {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay } 
        }
      };
    }

    // Default Fade
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like bezier
          staggerChildren
        }
      }
    };
    return variants;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
