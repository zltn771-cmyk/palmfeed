"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Kalkulator Pakan", href: "#calculator" },
    { name: "E-Shop", href: "#shop" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glassmorphism transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
              {/* If user drops logo.png in public/images/ it will load here */}
              <img 
                src="/images/logo.png" 
                alt="PalmFeed Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden">PalmFeed.</span>
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
              href="#contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsCartOpen(true)} className="relative text-primary mr-4 focus:outline-none">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-20 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
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
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-xl font-medium mt-4 shadow-md"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
