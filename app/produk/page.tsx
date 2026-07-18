import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Info } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Produk() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Katalog Produk</h1>
            <p className="text-primary/70 max-w-2xl mx-auto">Sistem pembelian melayani Pre-Order (PO) dan Partai Besar (Curah).</p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Image */}
          <ScrollReveal direction="left">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 sticky top-32">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-8">
                <Image 
                  src="/images/real_product.jpg" 
                  alt="PalmFeed Premium 30kg" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">PalmFeed Premium Ruminansia</h2>
                  <p className="text-primary/60">Kemasan Karung 30 KG</p>
                </div>
                <div className="text-2xl font-bold text-secondary">Rp 210.000</div>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  href="https://wa.me/6281234567890?text=Halo%20Sales%20PalmFeed,%20saya%20ingin%20memesan%20pakan%20sapi%20kemasan%2030kg."
                  target="_blank"
                  className="flex-1 bg-primary text-white text-center py-4 rounded-full font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Hubungi Sales
                </Link>
              </div>
              <p className="text-xs text-primary/50 text-center mt-4">
                *Harga khusus tersedia untuk distributor & BUMDes mitra.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Product Details */}
          <div className="space-y-12">
            
            {/* Kandungan Nutrisi */}
            <ScrollReveal direction="right">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5 text-secondary" /> Spesifikasi & Kandungan Gizi
                </h3>
                
                <div className="mb-8">
                  <p className="text-primary/80 mb-4 text-sm leading-relaxed">
                    Diformulasikan secara khusus dari fermentasi limbah pelepah sawit unggulan, dicampur dengan konsentrat nabati (ampas tahu, dedak, jagung) untuk mencapai keseimbangan nutrisi sempurna bagi sapi potong dan perah.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-primary/80">
                    <thead className="bg-primary/5 text-primary">
                      <tr>
                        <th className="p-4 rounded-tl-lg">Komponen Nutrisi</th>
                        <th className="p-4 rounded-tr-lg">Hasil Uji Lab (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10">
                      <tr><td className="p-4 font-medium">Protein Kasar (PK)</td><td className="p-4 font-bold text-secondary">14.5% - 16%</td></tr>
                      <tr><td className="p-4 font-medium">Serat Kasar (SK)</td><td className="p-4">Maks 18%</td></tr>
                      <tr><td className="p-4 font-medium">Lemak Kasar</td><td className="p-4">4% - 6%</td></tr>
                      <tr><td className="p-4 font-medium">Total Digestible Nutrients (TDN)</td><td className="p-4 font-bold">Minimal 68%</td></tr>
                      <tr><td className="p-4 font-medium">Kadar Air</td><td className="p-4">Maks 12%</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* Panduan Pakan */}
            <ScrollReveal direction="right" delay={0.2}>
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-6">Panduan Pemberian Pakan</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-secondary">
                    <h4 className="font-bold text-primary mb-1">Sapi Penggemukan (Fattening)</h4>
                    <p className="text-sm text-primary/70">Berikan 2.5% hingga 3% dari total bobot badan (BB) sapi per hari. Tidak perlu tambahan hijauan.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-1">Sapi Pembibitan (Breeding)</h4>
                    <p className="text-sm text-primary/70">Berikan 1.5% hingga 2% dari bobot badan. Bisa dikombinasikan dengan rumput lapang segar.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-[#25D366]">
                    <h4 className="font-bold text-primary mb-1">Cara Penyajian</h4>
                    <p className="text-sm text-primary/70">Pakan pelet dapat langsung diberikan ke palungan tanpa perlu dicampur air (kering), pastikan ketersediaan air minum bersih selalu ada di kandang.</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </main>
  );
}
