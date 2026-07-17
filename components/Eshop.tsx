"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "./CartContext";

const products = [
  {
    id: "palmfeed-30kg",
    name: "PalmFeed 30kg - Pakan Ruminansia Premium",
    price: 125000,
    weightPerItem: 30,
    image: "/images/real_product.png",
    rating: 4.8,
    reviews: 124,
    description: "Nutrisi lengkap untuk penggemukan sapi dan kambing. Mengandung protein tinggi dari limbah sawit terfermentasi."
  },
  {
    id: "palmfeed-50kg",
    name: "PalmFeed 50kg - Pakan Ruminansia Ekstra",
    price: 200000,
    weightPerItem: 50,
    image: "/images/real_product.png",
    rating: 4.9,
    reviews: 89,
    description: "Kemasan hemat untuk peternakan skala menengah hingga besar. Formula khusus kaya serat dan mineral."
  },
  {
    id: "palmfeed-starter-15kg",
    name: "PalmFeed Starter 15kg - Pedet & Cempe",
    price: 75000,
    weightPerItem: 15,
    image: "/images/real_product.png",
    rating: 4.7,
    reviews: 56,
    description: "Pakan masa awal pertumbuhan anak sapi dan kambing dengan tekstur lebih halus dan mudah dicerna."
  },
  {
    id: "palmfeed-dairy-30kg",
    name: "PalmFeed Dairy 30kg - Sapi Perah",
    price: 135000,
    weightPerItem: 30,
    image: "/images/real_product.png",
    rating: 5.0,
    reviews: 42,
    description: "Formulasi khusus untuk sapi perah guna meningkatkan kuantitas dan kualitas produksi susu harian."
  }
];

export default function Eshop() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<{[key: string]: boolean}>({});

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      weightPerItem: product.weightPerItem
    });
    
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Produk PalmFeed
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Pilih varian pakan terbaik yang disesuaikan dengan kebutuhan fase pertumbuhan dan jenis ternak ruminansia Anda.
          </p>
        </div>

        {/* Mobile-first grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-6 overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="text-sm font-medium text-primary">{product.rating}</span>
                  <span className="text-sm text-primary/50">({product.reviews})</span>
                </div>
                
                <h3 className="font-bold text-lg text-primary mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-sm text-primary/70 mb-4 line-clamp-3 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-secondary mb-4">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all ${
                      addedItems[product.id] 
                        ? 'bg-green-600 text-white shadow-md' 
                        : 'bg-primary text-white hover:bg-accent hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {addedItems[product.id] ? "Telah Ditambahkan" : "Beli Sekarang"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
