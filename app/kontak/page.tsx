"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">Hubungi Kami</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-sans">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi tim PalmFeed untuk pertanyaan seputar produk atau kemitraan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-white/70 backdrop-blur-xl border border-black/[0.03] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">Telepon / WhatsApp</h3>
                  <p className="text-primary/70">+62 811-0000-0000</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-xl border border-black/[0.03] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">Email</h3>
                  <p className="text-primary/70">halo@palmfeed.id</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-xl border border-black/[0.03] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">Kantor Pusat</h3>
                  <p className="text-primary/70">Jl. Kelapa Sawit No. 1, Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-xl border border-black/[0.03] p-8 md:p-10 rounded-3xl shadow-lg">
            <h3 className="font-serif text-3xl font-bold text-primary mb-8">Kirim Pesan</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Masukkan email Anda" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Pesan</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl mt-2">
                Kirim Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
