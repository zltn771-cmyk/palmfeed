import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SocialProof />
      
      {/* Testimonials Section Placeholder */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Kata Mereka Tentang PalmFeed</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">Bukti nyata dari peternak yang telah merasakan peningkatan bobot dan kesehatan sapi mereka.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={item * 0.2}>
                <div className="bg-[#F7F5F0] p-8 rounded-2xl">
                  <div className="flex text-[#D4AF37] mb-4">
                    {"★★★★★"}
                  </div>
                  <p className="text-primary/80 mb-6 italic">
                    "Sejak menggunakan PalmFeed, bobot sapi saya naik signifikan setiap bulannya. Pakannya juga praktis tidak perlu ngarit lagi setiap hari."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                      P{item}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Bapak Peternak {item}</h4>
                      <p className="text-sm text-primary/60">BUMDes Makmur Jaya</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
