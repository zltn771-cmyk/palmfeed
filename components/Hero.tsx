"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative w-full h-screen min-h-[900px] flex items-center bg-transparent overflow-hidden">
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none z-0 rotate-[-2deg] scale-110">
        <div className="whitespace-nowrap flex font-editorial text-[15rem] font-bold tracking-tighter uppercase animate-marquee">
          <span className="mx-8">MASA DEPAN PETERNAKAN ORGANIK</span>
          <span className="mx-8">MASA DEPAN PETERNAKAN ORGANIK</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-20">
          
          {/* Left: Huge Typography (Spans 7 cols) */}
          <div className="lg:col-span-7 relative z-20 flex flex-col justify-center mix-blend-plus-lighter text-primary">
            <ScrollReveal type="mask" delay={0.2} duration={1.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-secondary"></div>
                <span className="font-sans uppercase tracking-[0.3em] text-xs font-semibold text-secondary">PalmFeed Premium</span>
              </div>
            </ScrollReveal>

            <ScrollReveal type="mask" delay={0.4} duration={1.2}>
              <h1 className="font-editorial text-[5rem] sm:text-[7rem] lg:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Evolusi <br />
                <span className="italic font-serif text-secondary opacity-100 font-light text-[6rem] sm:text-[8rem] lg:text-[10rem] drop-shadow-[0_0_20px_rgba(0,255,163,0.5)]">Nutrisi</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.8} duration={1}>
              <p className="mt-10 font-sans text-lg sm:text-xl md:max-w-md font-light leading-relaxed text-primary/80">
                Memadukan kemurnian limbah daun sawit dengan sains peternakan modern. Sebuah mahakarya pakan organik untuk hasil yang tidak tertandingi.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1} duration={1}>
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Link 
                  href="/shop" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold uppercase tracking-widest text-xs bg-secondary text-background overflow-hidden rounded-md shadow-[0_0_20px_rgba(0,255,163,0.4)]"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    Beli Sekarang
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                </Link>
                
                <Link 
                  href="/tentang" 
                  className="group inline-flex items-center justify-center px-8 py-4 font-sans font-bold uppercase tracking-widest text-xs border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-colors duration-500 rounded-md backdrop-blur-sm"
                >
                  Pelajari Formulasi
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Editorial Image (Spans 5 cols) */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] lg:min-h-0 flex items-center justify-center lg:justify-end z-10">
            <ScrollReveal type="scale" delay={0.2} className="w-full h-[70vh] lg:h-[85vh] relative max-w-md ml-auto">
              {/* Parallax Container */}
              <motion.div style={{ y, opacity }} className="w-full h-full relative overflow-hidden">
                <Image 
                  src="/images/hero_concept_2_final.png" 
                  alt="PalmFeed Concept" 
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105"
                  priority
                  quality={100}
                />
                {/* Vintage overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F20]/40 to-transparent mix-blend-multiply"></div>
              </motion.div>

              {/* Vertical floating text indicator */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-primary/50">Gulir Ke Bawah</span>
                <div className="w-12 h-[1px] bg-primary/50"></div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
