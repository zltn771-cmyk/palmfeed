"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useCart } from "./CartContext";

export default function TestimonialShop() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = {
    id: "palmfeed-50kg-premium",
    name: "PalmFeed 50kg",
    price: 390000,
    weightPerItem: 50,
    image: "/images/real_product.jpg",
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      weightPerItem: product.weightPerItem
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section 
      id="testimonial-shop" 
      className="relative w-full py-20 bg-emerald-950/90 bg-blend-multiply"
      style={{
        backgroundImage: "url('/images/process_farm.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-white mb-16 tracking-wide">
          Testimonial
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Farmer Review & Photo */}
          <div className="flex flex-col lg:mt-12">
            <Quote className="w-12 h-12 text-white fill-white opacity-90 mb-6" />
            
            <p className="text-xl md:text-2xl text-white/90 font-sans italic leading-relaxed mb-8 font-light">
              "PalmFeed memberikan ketersediaan pakan secara konsisten dari limbah daun sawit, menjadikan ternak kami lebih sehat dan berbobot secara efisien."
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-md">
                <Image 
                  src="/images/farmer_testimonial.png" 
                  alt="Happy Farmer" 
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg leading-tight">Happy Farmer</h4>
                <p className="text-sm text-white/70">Nutrisi Ternak</p>
              </div>
            </div>

            {/* Bottom Visual Proof */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-auto">
              <Image 
                src="/images/farmer_testimonial.png" 
                alt="Indonesian farmer with cow" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: E-Shop Spotlight Card */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 lg:p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            {/* Cream Inner Box for Image */}
            <div className="bg-[#F7F5F0] rounded-2xl p-6 flex justify-center items-center relative aspect-[4/5] mb-8 border border-black/[0.02]">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 mix-blend-multiply drop-shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Product Info */}
            <div className="px-2">
              <h3 className="font-bold text-3xl text-primary mb-2">
                {product.name}
              </h3>
              
              <div className="mb-6 flex items-center gap-2 text-lg">
                <span className="font-bold text-primary">Stok:</span>
                <span className="font-bold text-[#2E7D32]">Tersedia</span>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 border border-primary/20 ${
                    added 
                    ? "bg-green-600 border-green-600 text-white shadow-lg"
                    : "text-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  {added ? "Ditambahkan" : "Tambah Keranjang"}
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 bg-[#a68a35] text-white hover:bg-[#8c742c] shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
