"use client";

import React, { useState } from "react";
import { Calculator, ShoppingBag, Info } from "lucide-react";
import { useCart } from "./CartContext";

export default function FeedCalculator() {
  const [livestockCount, setLivestockCount] = useState<number>(10);
  const [bodyWeight, setBodyWeight] = useState<number>(300);
  const [durationDays, setDurationDays] = useState<number>(30);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  // Formula Calculations
  const dailyFeedPerHead = bodyWeight * 0.02; // 2% of body weight
  const totalNeededKg = livestockCount * dailyFeedPerHead * durationDays;
  const bagsRecommended = Math.ceil(totalNeededKg / 30); // 30kg per bag

  const handleAddToCart = () => {
    addToCart({
      id: "palmfeed-30kg",
      name: "PalmFeed 30kg - Pakan Ruminansia Premium",
      price: 180000,
      quantity: bagsRecommended,
      weightPerItem: 30
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Kalkulator Pakan Ternak
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Hitung kebutuhan nutrisi harian ternak ruminansia Anda secara akurat berdasarkan berat badan dan durasi pemberian pakan.
          </p>
        </div>

        <div className="bg-background border border-primary/20 rounded-3xl shadow-lg p-6 md:p-10 relative overflow-hidden">
          {/* Decorative faint icon */}
          <Calculator className="absolute -bottom-10 -right-10 w-64 h-64 text-secondary/5 -z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Input Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary border-b border-primary/10 pb-4">
                Data Peternakan
              </h3>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary">Jumlah Ternak (Ekor)</label>
                <input
                  type="number"
                  min="1"
                  value={livestockCount}
                  onChange={(e) => setLivestockCount(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary">Rata-rata Berat Badan (Kg/Ekor)</label>
                <input
                  type="number"
                  min="1"
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                />
                <p className="text-xs text-primary/60 flex items-center gap-1 mt-1">
                  <Info className="w-3 h-3" /> Standar intake ruminansia: 2% dari Bobot Badan.
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary">Durasi Pemberian Pakan (Hari)</label>
                <input
                  type="number"
                  min="1"
                  value={durationDays}
                  onChange={(e) => setDurationDays(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                />
              </div>
            </div>

            {/* Results Column */}
            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full border border-primary/10">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  Hasil Kalkulasi
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-primary/10 pb-3">
                    <span className="text-primary/70">Kebutuhan per Ekor/Hari:</span>
                    <span className="font-semibold text-primary">{dailyFeedPerHead.toFixed(1)} Kg</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-primary/10 pb-3">
                    <span className="text-primary/70">Total Kebutuhan (Kg):</span>
                    <span className="font-semibold text-primary">{totalNeededKg.toLocaleString()} Kg</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-medium text-primary">Rekomendasi Pembelian:</span>
                    <span className="text-2xl font-bold text-secondary">{bagsRecommended.toLocaleString()} Sak</span>
                  </div>
                  <p className="text-right text-xs text-primary/50 mt-1">* 1 Sak = 30 Kg PalmFeed</p>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all shadow-md ${
                  added 
                  ? "bg-green-600 text-white" 
                  : "bg-primary text-white hover:bg-accent hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {added ? "Telah Ditambahkan!" : "Tambahkan Rekomendasi ke Keranjang"}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
