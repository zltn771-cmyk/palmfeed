"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 100px
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      href="https://wa.me/6281234567890?text=Halo%20PalmFeed,%20saya%20tertarik%20untuk%20informasi%20pakan%20sapi"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Link>
  );
}
