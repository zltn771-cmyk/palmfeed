import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sprout, ShieldCheck, TrendingUp, HandCoins } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight tracking-tight mb-6">
              Solusi Pakan Sapi Bernutrisi, Terjangkau, dan Berkelanjutan dari Bengkulu.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transformasi limbah pelepah sawit menjadi pakan ruminansia berkualitas tinggi untuk mendukung peternakan modern yang zero-waste.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="https://wa.me/6281234567890?text=Halo%20PalmFeed,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20pakan%20sapi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Sekarang
              </Link>
              <Link 
                href="/produk" 
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
              >
                Lihat Produk
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Sprout, title: "Kaya Nutrisi", desc: "Protein & mineral tinggi" },
            { icon: ShieldCheck, title: "Zero Waste", desc: "Ramah lingkungan" },
            { icon: HandCoins, title: "Harga Kompetitif", desc: "Hemat biaya operasional" },
            { icon: TrendingUp, title: "Sangat Praktis", desc: "Langsung diberikan ke sapi" }
          ].map((feature, idx) => (
            <ScrollReveal key={idx} delay={0.6 + (idx * 0.1)}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-primary/70">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
}
