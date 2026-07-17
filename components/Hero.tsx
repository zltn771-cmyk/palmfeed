"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-24 pb-12 flex flex-col items-center bg-transparent overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Top: Typography & CTAs (Centered) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary w-max mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Inovasi Peternakan</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Pakan Ternak Organik <span className="text-secondary">Limbah Daun Sawit.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary/70 mb-8 max-w-2xl font-sans mx-auto">
            Tingkatkan kesehatan dan produktivitas hewan ternak Anda dengan nutrisi tinggi yang 100% organik, ramah lingkungan, dan bersertifikat Halal.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['100% Organik', 'Bernutrisi Tinggi', 'Ramah Lingkungan', '100% Halal'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-primary/10 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-sm font-bold text-primary">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: The restructured two-column split container (Scenery + Product Card) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: The Scenery & Visual Asset */}
          <div className="w-full lg:w-1/2 h-[450px] relative rounded-3xl overflow-hidden shadow-lg border border-primary/5 group">
            <Image 
              src="/images/hero_concept_2.png" 
              alt="Palm plantation, cow, and product" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left md:object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* RIGHT COLUMN: The Product Showcase Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl max-w-md w-full border border-black/[0.03] flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              
              {/* Image Insert */}
              <div className="bg-[#F7F5F0] rounded-2xl p-6 flex justify-center relative aspect-[4/5] mb-8 border border-black/[0.02]">
                <Image 
                  src="/images/hero_final_bag.png" 
                  alt="PalmFeed Packaging" 
                  fill
                  className="object-contain p-2 drop-shadow-lg transition-transform duration-500 hover:scale-[1.05]"
                />
              </div>

              {/* Product Info */}
              <div className="px-2">
                <h3 className="font-bold text-2xl text-primary mb-1">
                  PalmFeed 30kg
                </h3>
                
                <div className="mb-6 flex items-center gap-2">
                  <span className="font-bold text-primary">Stok:</span>
                  <span className="font-bold text-[#2E7D32]">Tersedia</span>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/shop"
                    className="flex-1 text-center px-4 py-3.5 rounded-xl font-bold transition-all duration-300 border border-primary/20 text-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                  >
                    Tambah Keranjang
                  </Link>
                  <Link 
                    href="/shop"
                    className="flex-1 text-center px-4 py-3.5 rounded-xl font-bold transition-all duration-300 bg-[#a68a35] text-white hover:bg-[#8c742c] shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    Beli Sekarang
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
