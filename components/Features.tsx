"use client";

import { Leaf, Box, ShieldCheck, HeartPulse } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const features = [
    {
      title: "100% Organik Murni",
      description: "Bebas dari bahan kimia, hormon sintetis, atau pengawet. Kami menjaga kemurnian alam dari hulu ke hilir.",
      icon: <Leaf className="w-8 h-8 text-[#2E7D32]" />,
      span: "col-span-1 md:col-span-2 row-span-2",
      bgClass: "bg-white/70 backdrop-blur-xl border border-[#2E7D32]/10",
      large: true,
    },
    {
      title: "Sertifikasi Halal",
      description: "Jaminan halal penuh untuk keamanan konsumsi peternakan Anda.",
      icon: <ShieldCheck className="w-6 h-6 text-[#a68a35]" />,
      span: "col-span-1 md:col-span-1 row-span-1",
      bgClass: "bg-[#F7F5F0]/90 backdrop-blur-md border border-[#a68a35]/10",
      large: false,
    },
    {
      title: "Kemasan Berkelanjutan",
      description: "Ramah lingkungan dengan material yang mudah terurai.",
      icon: <Box className="w-6 h-6 text-[#2E7D32]" />,
      span: "col-span-1 md:col-span-1 row-span-1",
      bgClass: "bg-white/60 backdrop-blur-md border border-[#2E7D32]/10",
      large: false,
    },
    {
      title: "Nutrisi Ekstra Tinggi",
      description: "Kaya akan serat makro dan mikro, protein nabati berkualitas, dan formula rahasia yang mengoptimalkan bobot ruminansia.",
      icon: <HeartPulse className="w-8 h-8 text-[#a68a35]" />,
      span: "col-span-1 md:col-span-2 row-span-1",
      bgClass: "bg-[#a68a35]/10 backdrop-blur-xl border border-[#a68a35]/20",
      large: false,
    },
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-[#F7F5F0]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Lebih Dari Sekadar Pakan
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto text-lg">
              PalmFeed memadukan kearifan alam dan inovasi mutakhir. Setiap butir pelet dirancang khusus untuk menciptakan ternak yang lebih sehat, gemuk, dan berdaya jual tinggi.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-6 max-w-5xl mx-auto">
          {features.map((feat, idx) => (
            <ScrollReveal 
              key={feat.title} 
              direction="up" 
              delay={0.2 + idx * 0.15} 
              className={`h-full ${feat.span}`}
            >
              <div className={`h-full rounded-[2.5rem] p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group flex flex-col justify-between ${feat.bgClass} relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className={`rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    feat.large ? 'w-20 h-20 bg-white shadow-sm' : 'w-14 h-14 bg-white/80 shadow-sm'
                  }`}>
                    {feat.icon}
                  </div>
                  <h3 className={`font-bold text-primary mb-3 ${feat.large ? 'text-3xl' : 'text-xl'}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-primary/70 leading-relaxed ${feat.large ? 'text-lg max-w-md' : 'text-base'}`}>
                    {feat.description}
                  </p>
                </div>
                {feat.large && (
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <Leaf className="w-64 h-64 text-[#2E7D32]" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
