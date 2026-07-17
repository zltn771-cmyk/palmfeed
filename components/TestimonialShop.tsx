"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialShop() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "palmfeed-30kg",
      name: "PalmFeed 30kg - Pakan Ruminansia Premium",
      price: 180000,
      quantity: 1,
      weightPerItem: 30
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="shop" className="py-32 relative z-10 bg-[#0A140B] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Testimonial & Value Prop (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] w-max mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold tracking-wide uppercase">Pilihan Peternak Profesional</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Hasil Nyata, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Kualitas Premium.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              {/* Elegant Testimonial Card */}
              <div className="relative mt-8">
                {/* Quotation Mark Decoration */}
                <div className="absolute -top-10 -left-6 text-8xl font-serif text-white/5 select-none">"</div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 relative z-10 shadow-2xl">
                  <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                    "Semenjak beralih ke PalmFeed, bobot sapi limousin saya naik drastis dengan serat yang sangat mudah dicerna. Kualitas premium yang terbuat dari bahan organik membuat saya tenang, dan hasilnya sangat memuaskan."
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 relative">
                        <Image 
                          src="/images/farmer_testimonial.png" 
                          alt="Bapak Soleh" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Bapak Soleh</h4>
                        <p className="text-[#D4AF37] text-sm">Pemilik Peternakan Lembu Suro</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: E-Shop Product Showcase (Spans 5 cols) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="bg-gradient-to-b from-[#152317] to-[#0A140B] rounded-[2.5rem] p-1 border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.05)] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]"></div>
                
                <div className="bg-[#0e1c10] rounded-[2.4rem] p-8 h-full relative z-10 flex flex-col">
                  
                  {/* Floating Product Image */}
                  <div className="relative w-full aspect-[4/5] mb-8 flex justify-center items-center">
                    <div className="absolute w-3/4 h-3/4 bg-[#D4AF37]/20 blur-[60px] rounded-full"></div>
                    <Image 
                      src="/images/hero_final_bag.png" 
                      alt="PalmFeed 30kg" 
                      fill
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 relative z-10"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">PalmFeed Premium</h3>
                    <p className="text-white/50 text-sm mb-4">Kemasan Eksklusif 30 KG</p>
                    <div className="text-[#D4AF37] text-4xl font-bold font-sans">
                      Rp 180.000
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <button 
                      onClick={handleAddToCart}
                      disabled={added}
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        added 
                        ? "bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" 
                        : "bg-[#D4AF37] text-[#0A140B] hover:bg-[#F3E5AB] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                      }`}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      {added ? "Masuk Keranjang!" : "Tambah ke Keranjang"}
                    </button>
                    
                    <button className="w-full py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group/btn">
                      Beli Langsung via WhatsApp
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
