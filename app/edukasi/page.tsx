import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, GraduationCap, Megaphone } from "lucide-react";

export default function Edukasi() {
  const articles = [
    {
      type: "Nutrisi",
      icon: Leaf,
      title: "Mitos & Fakta: Pelepah Sawit Sebagai Pakan Sapi",
      desc: "Benarkah pelepah sawit sulit dicerna sapi? Pelajari bagaimana proses fermentasi kami mengubah serat kasar menjadi sumber energi yang mudah diserap.",
      date: "12 Ags 2026",
      image: "/images/concept_1.png"
    },
    {
      type: "Tips Peternakan",
      icon: GraduationCap,
      title: "Manajemen Pakan untuk Program Penggemukan",
      desc: "Panduan praktis mengatur rasio pakan hijauan dan pelet PalmFeed untuk mencapai kenaikan bobot harian (ADG) sapi potong secara maksimal.",
      date: "05 Ags 2026",
      image: "/images/concept_2.png"
    },
    {
      type: "Kegiatan",
      icon: Megaphone,
      title: "Sosialisasi PalmFeed di Koperasi Peternak Seluma",
      desc: "Tim Innofour mengadakan kunjungan langsung ke desa-desa di Seluma untuk memberikan edukasi mengenai efisiensi biaya pakan mandiri.",
      date: "28 Jul 2026",
      image: "/images/concept_3.png"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Ruang Edukasi & Kabar</h1>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Temukan wawasan terbaru seputar manajemen peternakan ruminansia, sains nutrisi pakan, dan pembaruan kegiatan dari tim PalmFeed.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Article */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-primary/5 mb-16 flex flex-col md:flex-row group cursor-pointer hover:shadow-xl transition-all duration-500">
            <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden">
              <Image 
                src="/images/concept_1.png" 
                alt="Featured Article" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-4">
                <Leaf className="w-4 h-4" /> ARTIKEL UTAMA
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                Mengapa Pelepah Sawit? Sains di Balik Pakan Organik Masa Depan
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Di Indonesia, jutaan ton pelepah sawit terbuang percuma setiap tahunnya saat masa panen. Dengan inokulan khusus, lignin yang kaku dapat dipecah...
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-primary/50">20 Ags 2026</span>
                <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 h-full flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <article.icon className="w-3 h-3" /> {article.type}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">{article.title}</h3>
                  <p className="text-primary/70 text-sm mb-6 line-clamp-3">{article.desc}</p>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-primary/5">
                    <span className="text-xs text-primary/50">{article.date}</span>
                    <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </main>
  );
}
