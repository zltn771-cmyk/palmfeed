import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { FlaskConical, FileCheck, Scale } from "lucide-react";

export default function TentangKami() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Innovation Story */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Kisah TriNova & Innofour</h1>
              <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
                Berangkat dari keresahan melihat melimpahnya limbah pelepah sawit di Bengkulu dan semakin mahalnya harga pakan ternak komersial, tim Innofour (TriNova) merumuskan sebuah inovasi. Kami melihat potensi besar dalam pelepah sawit yang, jika diproses dengan teknologi fermentasi dan fortifikasi yang tepat, dapat menjadi pakan ruminansia berkualitas premium.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/concept_3.png" 
                  alt="Inovasi PalmFeed" 
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Mengubah Limbah Menjadi Berkah</h3>
              <p className="text-primary/80 mb-6 leading-relaxed">
                Visi kami sederhana namun berdampak besar: mewujudkan peternakan berkelanjutan (*zero waste*) yang mandiri secara pakan. Dengan PalmFeed, peternak tidak perlu lagi menghabiskan waktu berjam-jam untuk mencari rumput (*ngarit*), namun tetap mendapatkan pakan bernutrisi tinggi yang menjamin kenaikan bobot ternak secara optimal.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-3xl text-secondary mb-1">2024</div>
                  <div className="text-sm text-primary/70">Tahun Pendirian</div>
                </div>
                <div>
                  <div className="font-bold text-3xl text-secondary mb-1">100%</div>
                  <div className="text-sm text-primary/70">Fokus Riset Organik</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Legality & Quality */}
        <section className="mb-24 bg-white p-12 rounded-3xl shadow-sm border border-primary/5">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Legalitas & Standar Mutu</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FlaskConical, title: "Uji Laboratorium Terstandar", desc: "Kandungan protein, serat, dan lemak kami telah diuji dan divalidasi oleh laboratorium independen." },
              { icon: FileCheck, title: "Izin Kementerian Pertanian", desc: "Dalam proses pengawasan dan standarisasi mutu pakan oleh dinas dan kementerian terkait." },
              { icon: Scale, title: "Formulasi Konsisten", desc: "Setiap butir pelet diproduksi dengan presisi untuk menjaga kestabilan nutrisi." }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl text-primary mb-3">{item.title}</h4>
                  <p className="text-primary/70">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Team Profile */}
        <section>
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Tim Inti TriNova</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ketua Tim", role: "CEO / Formulator" },
              { name: "Anggota 1", role: "Riset & Produksi" },
              { name: "Anggota 2", role: "Operasional & Distribusi" },
              { name: "Anggota 3", role: "Marketing & Kemitraan B2B" },
            ].map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 text-center group hover:border-secondary transition-colors">
                  <div className="w-32 h-32 mx-auto bg-primary/5 rounded-full mb-6 overflow-hidden relative">
                    {/* Placeholder image, user can replace with actual photos */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                      <Image 
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`} 
                        alt={member.name}
                        fill
                        className="object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-1">{member.name}</h4>
                  <p className="text-sm text-secondary font-medium">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
