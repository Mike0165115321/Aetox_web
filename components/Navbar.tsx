'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ultra-dark/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-black tracking-widest text-white flex items-center gap-2">
          AETOX
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors">Services</a>
          <a href="#authority" className="text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors">Authority</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all border border-white/20 hover:border-transparent hover:shadow-cyber-glow">
            เริ่มวางระบบ
          </a>
        </div>
        
        {/* Mobile menu button (Simplified for now) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
