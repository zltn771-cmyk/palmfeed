"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if we are hovering over a clickable element
      const isClickable = window.getComputedStyle(target).cursor === "pointer" || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') !== null ||
                          target.closest('button') !== null;
      
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#D4AF37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      
      {/* Expanding outer circle */}
      <motion.div
        className="fixed top-0 left-0 border-2 border-[#D4AF37] rounded-full pointer-events-none z-[9998]"
        animate={{
          x: position.x - (isPointer ? 24 : 16),
          y: position.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isPointer ? 0.5 : 0.8,
          backgroundColor: isPointer ? "rgba(212, 175, 55, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
