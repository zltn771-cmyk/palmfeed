"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function Eshop() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = {
    id: "palmfeed-30kg-premium",
    name: "PalmFeed 30 kg Pakan Ruminai",
    price: 210000,
    weightPerItem: 30,
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
    <section id="shop" className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating Calf Decorative Image (Simulated with process_farm or generic if not available) */}
        <div className="absolute -top-12 -right-4 lg:-top-20 lg:-right-12 w-32 h-32 md:w-48 md:h-48 z-20 animate-float pointer-events-none">
          <Image 
            src="/images/process_farm.png" 
            alt="Decorative Calf" 
            fill
            className="object-contain filter drop-shadow-lg opacity-90"
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">
            E-SHOP
          </h2>
          <p className="text-primary/60 font-sans">
            Menyediakan pakan ruminansia berkualitas tinggi untuk hasil optimal.
          </p>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-primary/5 p-4 md:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Image Box */}
            <div className="bg-[#EFECE3] rounded-2xl p-8 flex items-center justify-center relative aspect-[4/5] md:aspect-square">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6 md:p-10 mix-blend-multiply hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col justify-center py-4 md:py-8 pr-4">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2 leading-tight">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-secondary font-medium text-lg">Pakan Daun Sawit</span>
                <span className="text-primary/30">•</span>
                <span className="flex items-center text-[#D4AF37] text-sm">
                  ★★★★★ <span className="text-primary/60 ml-1">(4.9/5)</span>
                </span>
              </div>
              
              <div className="bg-primary/5 p-3 rounded-lg mb-6 max-w-sm">
                <p className="text-sm text-primary/80"><strong>Kandungan Gizi Unggulan:</strong></p>
                <ul className="text-xs text-primary/70 list-disc list-inside mt-1">
                  <li>Protein Kasar (PK) 14.5% - 16%</li>
                  <li>Total Digestible Nutrients (TDN) &gt;68%</li>
                </ul>
              </div>
              
              {/* Price Pill */}
              <div className="inline-flex bg-secondary text-white font-bold text-xl md:text-2xl px-6 py-2 rounded-full mb-6 w-max shadow-md">
                Rp {product.price.toLocaleString('id-ID')}
              </div>
              
              {/* Stock */}
              <div className="mb-8">
                <span className="font-bold text-primary">Stok: </span>
                <span className="font-bold text-[#2E7D32]">Tersedia</span>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className={`px-8 py-4 rounded-full font-bold transition-all border-2 ${
                    added 
                    ? "bg-green-600 border-green-600 text-white"
                    : "border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {added ? "Telah Ditambahkan" : "Tambah ke Keranjang"}
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="px-8 py-4 rounded-full font-bold transition-all bg-secondary text-white border-2 border-secondary hover:bg-[#a68a35] hover:border-[#a68a35] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mini Testimonial Block */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary shrink-0">B</div>
            <div>
              <div className="flex text-[#D4AF37] text-xs mb-1">★★★★★</div>
              <p className="text-sm text-primary/80 italic mb-2">"Sapi saya lahap makannya dan bobot cepat naik. Sangat direkomendasikan!"</p>
              <p className="text-xs font-bold text-primary">Budi S. - Peternak Seluma</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary shrink-0">H</div>
            <div>
              <div className="flex text-[#D4AF37] text-xs mb-1">★★★★★</div>
              <p className="text-sm text-primary/80 italic mb-2">"Praktis tidak perlu ngarit tiap sore. Hemat tenaga dan hasil maksimal."</p>
              <p className="text-xs font-bold text-primary">Heri M. - BUMDes Maju</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
