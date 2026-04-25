'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ChevronDown, X } from 'lucide-react';

export default function Navbar({ dict }: { dict?: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('TH');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  
  const menuItems = dict?.menu || [
    { label: "หน้าแรก", href: "/" },
    { label: "บริการ", href: "/services" },
    { label: "ผลงาน", href: "/authority" },
    { label: "เรียนรู้กับเรา", href: "/academy" },
    { label: "ติดต่อ", href: "/contact" }
  ];
  const ctaLabel = dict?.cta || "ปรึกษาปัญหา";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-ultra-dark/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto relative flex items-center z-[110]">
        
        {/* Left: Logo (Flex-1 เพื่อกันพื้นที่) */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.svg" alt="Aetox Logo" width={40} height={40} className="h-10 w-auto" priority />
            <span className="text-xl font-black tracking-tighter text-white">
              AETO<span className="text-cyber-blue drop-shadow-cyber-glow">X</span>
            </span>
          </Link>
        </div>

        {/* Center: Menu (Absolute Center เพื่อให้ตรงกลางเป๊ะ) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {menuItems.map((item: any) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-bold text-gray-400 hover:text-white hover:drop-shadow-cyber-glow transition-all uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions (Flex-1 เพื่อกันพื้นที่) */}
        <div className="flex-1 flex justify-end items-center gap-6">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border transition-all duration-300 group ${
                isLangOpen ? 'border-cyber-blue/50 bg-cyber-blue/5 text-white' : 'border-white/5 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Globe className={`w-4 h-4 transition-colors ${isLangOpen ? 'text-cyber-blue' : 'group-hover:text-cyber-blue'}`} />
              <span className="text-[11px] font-black tracking-widest">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-3 w-48 glass-card rounded-2xl border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <div className="flex flex-col gap-1">
                  <button 
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-cyber-blue/10 text-white border border-cyber-blue/20 transition-all text-xs font-bold"
                    onClick={() => setIsLangOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🇹🇭</span>
                      <span>ภาษาไทย (TH)</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                  </button>
                  
                  <div className="px-4 py-3 text-[10px] font-black text-gray-600 uppercase tracking-widest mt-2 border-t border-white/5">
                    More languages coming
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link 
            href="/contact" 
            className="hidden md:block px-6 py-2.5 rounded-xl bg-white text-black text-sm font-black hover:bg-cyber-blue hover:text-white transition-all hover:shadow-cyber-glow transform active:scale-95"
          >
            {ctaLabel}
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col items-end">
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
                <div className="w-4 h-0.5 bg-white transition-all" />
              </div>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A0F1C]/98 backdrop-blur-2xl lg:hidden flex flex-col animate-in fade-in duration-300">
          <div className="flex-1 flex flex-col justify-center px-8 gap-8">
            {menuItems.map((item: any) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-gray-400 hover:text-white hover:text-cyber-blue transition-colors uppercase tracking-widest border-b border-white/5 pb-4 text-center"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 mx-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-cyber-blue text-black text-xl font-black hover:shadow-cyber-glow transition-all active:scale-95"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
