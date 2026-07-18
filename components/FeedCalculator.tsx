"use client";

import React, { useState } from "react";
import { Calculator, ShoppingBag, Info, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      price: 210000,
      quantity: bagsRecommended,
      weightPerItem: 30
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="calculator" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Kalkulator Pakan Ternak
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Hitung kebutuhan nutrisi harian ternak ruminansia Anda secara akurat berdasarkan berat badan dan durasi pemberian pakan.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-black/[0.03] rounded-[2.5rem] shadow-xl p-6 md:p-12 relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
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
                  <div className="flex justify-between items-center border-b border-white/50 pb-3">
                    <span className="text-primary/70 font-medium">Kebutuhan per Ekor/Hari:</span>
                    <span className="font-semibold text-primary">{dailyFeedPerHead.toFixed(1)} Kg</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/50 pb-3">
                    <span className="text-primary/70 font-medium">Total Kebutuhan (Kg):</span>
                    <span className="font-semibold text-primary">{totalNeededKg.toLocaleString()} Kg</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 bg-white/60 p-4 rounded-xl border border-white mt-4 shadow-sm">
                    <span className="text-lg font-bold text-primary">Rekomendasi Pembelian:</span>
                    <span className="text-3xl font-black text-secondary drop-shadow-sm">{bagsRecommended.toLocaleString()} Sak</span>
                  </div>
                  <p className="text-right text-xs text-primary/60 mt-2 italic">* 1 Sak = 30 Kg PalmFeed</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: added ? 1 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-bold transition-colors duration-300 shadow-lg relative overflow-hidden ${
                  added 
                  ? "bg-green-500 text-white" 
                  : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.div
                      key="added"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Berhasil Ditambahkan!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag className="w-6 h-6" />
                      <span>Masukkan ke Keranjang</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
