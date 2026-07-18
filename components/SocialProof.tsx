import ScrollReveal from "./ScrollReveal";
import { Users, Factory, Award, Building2 } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { icon: Factory, value: "10+", label: "Ton Produksi per Bulan" },
    { icon: Building2, value: "50+", label: "BUMDes Koperasi Mitra" },
    { icon: Users, value: "100+", label: "Peternak Terbantu" },
    { icon: Award, value: "100%", label: "Bahan Organik Alami" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold mb-4">Dipercaya oleh Peternak & Instansi</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Kami terus berkembang untuk mensuplai kebutuhan pakan ruminansia berkualitas ke seluruh penjuru desa.</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="text-center px-4">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10 text-secondary" />
              </div>
              <div className="text-4xl font-bold font-serif mb-2">{stat.value}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
