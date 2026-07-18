"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Handshake, TrendingUp, BookOpen, Truck } from "lucide-react";
import { useState } from "react";

export default function Kemitraan() {
  const [formData, setFormData] = useState({
    nama: "",
    instansi: "",
    alamat: "",
    kebutuhan: "500",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo PalmFeed! Saya tertarik untuk bermitra.\n\n*Nama:* ${formData.nama}\n*Instansi/BUMDes:* ${formData.instansi}\n*Alamat Lengkap:* ${formData.alamat}\n*Estimasi Kebutuhan:* ${formData.kebutuhan} kg/bulan\n\nMohon info lebih lanjut mengenai skema harga kemitraan.`;
    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Program Kemitraan BUMDes & Distributor</h1>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah bersama kami untuk memajukan peternakan Indonesia. Kami membuka peluang kemitraan bagi BUMDes, Koperasi, dan Agen pakan ternak di seluruh daerah dengan keuntungan maksimal.
            </p>
          </ScrollReveal>
        </div>

        {/* Keuntungan Mitra */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Harga Khusus Grosir", desc: "Dapatkan margin keuntungan yang sangat menarik khusus untuk mitra terdaftar." },
              { icon: Truck, title: "Jaminan Pasokan", desc: "Prioritas suplai produk setiap bulannya tanpa takut kehabisan stok." },
              { icon: BookOpen, title: "Dukungan Edukasi", desc: "Pelatihan manajemen pakan gratis untuk anggota koperasi atau BUMDes Anda." },
              { icon: Handshake, title: "Sistem Transparan", desc: "Kerjasama jangka panjang dengan perjanjian yang saling menguntungkan." },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-[#F7F5F0] p-8 rounded-2xl h-full border border-primary/5 hover:border-secondary transition-colors">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                  <p className="text-primary/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Syarat & Formulir */}
        <div className="grid lg:grid-cols-2 gap-16 items-start bg-primary text-white rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Syarat & Ketentuan Kemitraan</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold shrink-0">1</div>
                  <p className="text-white/80">Merupakan Badan Usaha Milik Desa (BUMDes), Koperasi Desa (KOPDES), atau entitas usaha agen pakan yang sah.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold shrink-0">2</div>
                  <p className="text-white/80">Memiliki komitmen pembelian rutin (Minimal Order) sebesar <strong>500 KG per bulan</strong>.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold shrink-0">3</div>
                  <p className="text-white/80">Memiliki tempat penyimpanan (gudang) yang kering dan bersih untuk menjaga kualitas pelet PalmFeed.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white text-primary p-8 rounded-3xl relative z-10">
              <h3 className="text-2xl font-bold mb-6">Mulai Kemitraan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary/80">Nama Lengkap PIC</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 rounded-xl bg-[#F7F5F0] border-none focus:ring-2 focus:ring-secondary outline-none"
                    placeholder="Masukkan nama Anda"
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary/80">Nama Instansi / BUMDes</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 rounded-xl bg-[#F7F5F0] border-none focus:ring-2 focus:ring-secondary outline-none"
                    placeholder="Contoh: BUMDes Makmur Jaya"
                    value={formData.instansi}
                    onChange={(e) => setFormData({...formData, instansi: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary/80">Alamat Lengkap</label>
                  <textarea 
                    required
                    className="w-full p-4 rounded-xl bg-[#F7F5F0] border-none focus:ring-2 focus:ring-secondary outline-none h-24 resize-none"
                    placeholder="Masukkan alamat pengiriman lengkap"
                    value={formData.alamat}
                    onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary/80">Estimasi Kebutuhan per Bulan (KG)</label>
                  <select 
                    className="w-full p-4 rounded-xl bg-[#F7F5F0] border-none focus:ring-2 focus:ring-secondary outline-none font-medium"
                    value={formData.kebutuhan}
                    onChange={(e) => setFormData({...formData, kebutuhan: e.target.value})}
                  >
                    <option value="500">500 KG</option>
                    <option value="1000">1.000 KG (1 Ton)</option>
                    <option value="3000">3.000 KG (3 Ton)</option>
                    <option value="5000+">> 5.000 KG</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold mt-4 hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/30"
                >
                  Daftar via WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}
