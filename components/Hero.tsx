"use client";

import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-20 flex items-center bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col justify-center order-2 lg:order-1 pb-16 lg:pb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary w-max mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Inovasi Peternakan</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Mengubah Limbah Sawit Menjadi <span className="text-secondary">Nutrisi Premium.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl font-sans">
              Tingkatkan kesehatan dan produktivitas hewan ternak Anda sembari mendukung ekosistem pertanian yang berkelanjutan dan ramah lingkungan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#shop" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Belanja Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#process" 
                className="inline-flex justify-center items-center gap-2 bg-transparent text-primary border-2 border-primary px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-all"
              >
                Pelajari Proses
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Container with animations */}
          <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Split composite effect wrapper */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex">
              {/* We simulate the split image here. Assuming hero_split.png is available */}
              <img 
                src="/images/hero_split.png" 
                alt="PalmFeed Farm & Cow" 
                className="w-full h-full object-cover"
                onError={(e) => {
                   // Fallback gradient if image not found
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-secondary/20');
                }}
              />
              
              {/* Packaging element floating over the composite */}
              <div className="absolute -bottom-10 -right-4 md:-bottom-12 md:-right-8 w-1/2 max-w-[280px] animate-float z-20">
                <img 
                  src="/images/real_product.png" 
                  alt="PalmFeed 30kg Packaging" 
                  className="w-full h-auto drop-shadow-2xl filter"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
