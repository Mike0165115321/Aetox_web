'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/images/1001.svg" alt="Aetox Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-black tracking-widest text-white">
            AETO<span className="text-cyber-blue drop-shadow-cyber-glow">X</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-base font-medium text-gray-300 hover:text-white hover:drop-shadow-cyber-glow transition-all">หน้าแรก</Link>
          <Link href="/services" className="text-base font-medium text-gray-300 hover:text-white hover:drop-shadow-cyber-glow transition-all">บริการ</Link>
          <Link href="/authority" className="text-base font-medium text-gray-300 hover:text-white hover:drop-shadow-cyber-glow transition-all">ผลงาน</Link>
          <Link href="/contact" className="text-base font-medium text-gray-300 hover:text-white hover:drop-shadow-cyber-glow transition-all">ติดต่อ</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all border border-white/20 hover:border-transparent hover:shadow-cyber-glow">
            เริ่มวางระบบ
          </Link>
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
