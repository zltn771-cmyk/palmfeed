"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden z-10 bg-black">
      
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image 
          src="/images/hero_concept_2.png" 
          alt="Modern Agritech PalmFeed" 
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A140B] via-transparent to-[#0A140B]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A140B]/90 via-black/40 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Typography & CTAs (Left Aligned for cinematic feel) */}
        <div className="flex flex-col items-start text-left mt-16 lg:mt-0">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 w-max mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Leaf className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-semibold tracking-wide uppercase text-white/90">Masa Depan Peternakan</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
              Kemewahan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Nutrisi Alami.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-sans leading-relaxed drop-shadow-md">
              Formulasi eksklusif pakan ternak dari limbah daun sawit organik. Dirancang untuk hasil maksimal dengan standar agrikultur berteknologi tinggi.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/shop"
                className="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#a68a35] to-[#8c742c] transition-transform duration-500 group-hover:scale-105"></div>
                <span className="relative z-10 text-white flex items-center gap-2">
                  Pesan Sekarang
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/tentang"
                className="px-8 py-4 rounded-full font-bold transition-all text-white border border-white/30 backdrop-blur-md hover:bg-white/10 hover:border-white/60"
              >
                Pelajari Prosesnya
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right side is intentionally empty to let the beautiful background (the glowing pedestal and bag) shine through */}
        <div className="hidden lg:block w-full h-full"></div>

      </div>
    </section>
  );
}
