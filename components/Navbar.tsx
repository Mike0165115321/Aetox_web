'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ChevronDown, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => {
        if (prev !== scrolled) return scrolled;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
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
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'bg-transparent' // Remove background when menu is open to avoid backdrop-filter conflicts
          : isScrolled 
            ? 'bg-ultra-dark/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 relative flex items-center z-[110]">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.svg" alt="Aetox Logo" width={40} height={40} className="h-10 w-auto" priority />
            <span className="text-xl font-black tracking-tighter text-white">
              AETO<span className="text-cyber-blue drop-shadow-cyber-glow">X</span>
            </span>
          </Link>
        </div>

        {/* Center: Menu (Desktop) */}
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

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
          {/* Language Selector (Desktop) */}
          <div className="relative hidden md:block" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border transition-all duration-300 group ${
                isLangOpen ? 'border-cyber-blue/50 bg-cyber-blue/5 text-white' : 'border-white/5 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Globe className={`w-4 h-4 transition-colors ${isLangOpen ? 'text-cyber-blue' : 'group-hover:text-cyber-blue'}`} />
              <span className="text-xs font-black tracking-widest">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-3 w-48 glass-card rounded-2xl border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[120]"
                >
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
                    
                    <div className="px-4 py-3 text-xs font-black text-gray-600 uppercase tracking-widest mt-2 border-t border-white/5">
                      More languages coming
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA (Desktop) */}
          <Link 
            href="/contact" 
            className="hidden md:block px-6 py-2.5 rounded-xl bg-white text-black text-sm font-black hover:bg-cyber-blue hover:text-white transition-all hover:shadow-cyber-glow transform active:scale-95"
          >
            {ctaLabel}
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white relative z-[120] hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col items-end gap-1.5">
                <div className="w-6 h-0.5 bg-white transition-all" />
                <div className="w-4 h-0.5 bg-white transition-all" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            {/* Subtle Cyber Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(6, 182, 212, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Ambient Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyber-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyber-blue/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex-1 flex flex-col pt-32 px-8 pb-12 relative z-10 overflow-y-auto">
              {/* Menu Links */}
              <div className="flex flex-col gap-4 mb-12">
                {menuItems.map((item: any, index: number) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-2xl font-bold text-gray-400 hover:text-white transition-all py-3 border-b border-white/5"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-cyber-blue/50 group-hover:text-cyber-blue tracking-tighter">0{index + 1}</span>
                        <span className="tracking-tight">{item.label}</span>
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyber-blue" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Action Zone */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-auto flex flex-col gap-6"
              >
                {/* Mobile Language Selector */}
                <div className="p-1 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-1">
                  <button 
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-xs font-black tracking-widest ${
                      currentLang === 'TH' ? 'bg-white text-black shadow-xl' : 'text-gray-500 hover:text-white'
                    }`}
                    onClick={() => setCurrentLang('TH')}
                  >
                    <span className="text-sm">🇹🇭</span> TH
                  </button>
                  <button 
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-xs font-black tracking-widest cursor-not-allowed opacity-40`}
                    disabled
                  >
                    <span className="text-sm">🇺🇸</span> EN
                  </button>
                </div>

                {/* Primary Mobile CTA */}
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-cyber-blue text-black text-lg font-black hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all active:scale-[0.98]"
                >
                  <span>{ctaLabel}</span>
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
                
                <p className="text-center text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
                  Aetox Technology & Solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
