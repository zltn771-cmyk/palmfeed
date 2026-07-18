"use client";

import Process from "@/components/Process";
import Image from "next/image";
import { Leaf, Award, Recycle } from "lucide-react";

export default function TentangPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">Tentang Kami</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Dedikasi kami untuk peternakan Indonesia dengan mengubah limbah perkebunan kelapa sawit menjadi pakan ternak berkualitas tinggi yang berkelanjutan.
          </p>
        </div>

        {/* Visual & Typography Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <Image 
              src="/images/process_farm.png" 
              alt="Pabrik PalmFeed" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Visi Kami</h2>
              <p className="text-primary/80 leading-relaxed text-lg">
                Menjadi pelopor pakan ruminansia organik yang mampu mengatasi masalah kelangkaan hijauan pakan ternak di musim kemarau, sekaligus menekan limbah pelepah sawit di Indonesia.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Misi Kami</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-primary/80 pt-1">Menyediakan pakan ternak padat nutrisi tinggi dengan harga yang sangat terjangkau bagi peternak kecil maupun industri.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Recycle className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-primary/80 pt-1">Menerapkan prinsip ekonomi sirkular (Zero Waste) pada perkebunan kelapa sawit.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-primary/80 pt-1">Terus berinovasi bersama para ahli nutrisi hewan demi menghasilkan formula terbaik yang teruji laboratorium.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Process />
      </div>
    </main>
  );
}
