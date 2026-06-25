"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="Atlas Logo" className="h-24 object-contain" onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-2xl font-bold tracking-widest text-white">ATLAS</span>');
          }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre</Link>
          <Link href="/servicos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Serviços</Link>
          <Link href="/portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfólio</Link>
          <Link href="/contato" className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors">
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/sobre" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
          <Link href="/servicos" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
          <Link href="/portfolio" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Portfólio</Link>
          <Link href="/contato" className="mt-4 text-center px-6 py-3 bg-white text-black font-bold rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
            Fale Conosco
          </Link>
        </div>
      )}
    </header>
  );
}
