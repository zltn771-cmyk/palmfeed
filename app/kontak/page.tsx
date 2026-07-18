import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Kontak() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Hubungi Kami</h1>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Kami siap melayani kebutuhan pakan ternak Anda. Jangan ragu untuk berkonsultasi atau mengunjungi pusat produksi kami di Bengkulu.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info & Socials */}
          <ScrollReveal direction="left">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/5 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Pusat Produksi (Bengkulu)</h4>
                      <p className="text-primary/70 leading-relaxed">Jl. Lintas Barat Sumatera, Kec. Selebar, Kota Bengkulu, Bengkulu 38213</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Telepon & WhatsApp</h4>
                      <p className="text-primary/70">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Bisnis</h4>
                      <p className="text-primary/70">halo@palmfeed.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Sosial Media Kami</h3>
                <div className="flex gap-4">
                  <Link href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map Embed */}
          <ScrollReveal direction="right">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-primary/5 h-[600px] relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.43635749219!2d102.19318850684712!3d-3.820251789714399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b01e37dfdb45%3A0x1d141e17d6928da5!2sKota%20Bengkulu%2C%20Bengkulu!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full p-4"
              ></iframe>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}
