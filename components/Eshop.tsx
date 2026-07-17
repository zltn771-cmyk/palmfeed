"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Star, Plus, Minus } from "lucide-react";
import { useCart, CartItem } from "./CartContext";

const products = [
  {
    id: "palmfeed-30kg",
    name: "PalmFeed 30kg - Pakan Ruminansia Premium",
    price: 180000,
    weightPerItem: 30,
    image: "/images/real_product.jpg",
    status: "Tersedia",
    features: ["100% Organik", "Bernutrisi Tinggi", "Ramah Lingkungan", "Halal"],
    rating: 4.8,
    reviews: 124,
    description: "Nutrisi lengkap untuk penggemukan sapi dan kambing. Mengandung protein tinggi dari limbah sawit terfermentasi."
  },
  {
    id: "palmfeed-50kg",
    name: "PalmFeed 50kg - Pakan Ruminansia Ekstra",
    price: 280000,
    weightPerItem: 50,
    image: "/images/real_product.jpg",
    status: "Tersedia",
    features: ["100% Organik", "Bernutrisi Tinggi", "Ramah Lingkungan", "Halal"],
    rating: 4.9,
    reviews: 89,
    description: "Kemasan hemat untuk peternakan skala menengah hingga besar. Formula khusus kaya serat dan mineral."
  },
  {
    id: "palmfeed-starter-15kg",
    name: "PalmFeed Starter 15kg - Pedet & Cempe",
    price: 95000,
    weightPerItem: 15,
    image: "/images/real_product.jpg",
    status: "Tersedia",
    features: ["100% Organik", "Bernutrisi Tinggi", "Mudah Dicerna", "Halal"],
    rating: 4.7,
    reviews: 56,
    description: "Pakan masa awal pertumbuhan anak sapi dan kambing dengan tekstur lebih halus dan mudah dicerna."
  },
  {
    id: "palmfeed-dairy-30kg",
    name: "PalmFeed Dairy 30kg - Sapi Perah",
    price: 195000,
    weightPerItem: 30,
    image: "/images/real_product.jpg",
    status: "Tersedia",
    features: ["100% Organik", "Kaya Kalsium", "Ramah Lingkungan", "Halal"],
    rating: 5.0,
    reviews: 42,
    description: "Formulasi khusus untuk sapi perah guna meningkatkan kuantitas dan kualitas produksi susu harian."
  }
];

function ProductCard({ product, onAddToCart }: { product: any, onAddToCart: (p: any, qty: number) => void }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-6 overflow-hidden">
        <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm border border-green-200">
          {product.status}
        </span>
        <Image 
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-primary mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.features?.map((feat: string) => (
            <span key={feat} className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2 py-1 rounded-full border border-secondary/20">
              {feat}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-primary/70 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="text-2xl font-bold text-secondary mb-4">
            Rp {product.price.toLocaleString('id-ID')}
          </div>
          
          <div className="flex items-center gap-4 mb-4 bg-background p-1.5 rounded-xl border border-primary/10 w-max">
             <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-primary hover:bg-primary/5 shadow-sm transition-colors"><Minus className="w-4 h-4"/></button>
             <span className="font-bold text-primary w-6 text-center">{quantity}</span>
             <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-primary hover:bg-primary/5 shadow-sm transition-colors"><Plus className="w-4 h-4"/></button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-1.5 ${
                added 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? "Ditambahkan" : "Keranjang"}
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-bold transition-all hover:bg-accent text-sm"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Eshop() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0], qty: number) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      weightPerItem: product.weightPerItem
    });
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
