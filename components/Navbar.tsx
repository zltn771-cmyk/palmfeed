"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kalkulator Pakan", href: "/kalkulator" },
    { name: "E-Shop", href: "/shop" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-black/[0.03] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
              {/* If user drops logo.png in public/images/ it will load here */}
              <div className="relative h-10 w-32 hidden sm:block">
                <Image 
                  src="/images/logo.jpg" 
                  alt="PalmFeed Logo" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span className="sm:hidden">PalmFeed.</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-primary font-medium text-sm uppercase tracking-wide hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right: Cart & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setIsCartOpen(true)} className="relative text-primary hover:text-secondary transition-colors focus:outline-none">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Link 
              href="/kontak" 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative text-primary mr-2 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Keranjang"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-20 bg-[#F7F5F0] z-[100] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary text-lg font-medium border-b border-primary/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/kontak"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-xl font-medium mt-4 shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
