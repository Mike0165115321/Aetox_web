'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavbarDesktop({ 
  menuItems, 
  ctaLabel, 
  isScrolled, 
  currentLang, 
  isLangOpen, 
  setIsLangOpen, 
  langRef 
}: any) {
  return (
    <div className="container mx-auto relative flex items-center z-[110]">
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
          <Image 
            src="/images/logo.svg" 
            alt="Aetox Logo" 
            width={48} 
            height={48} 
            className="h-10 w-auto animate-aetox-breathe" 
            priority 
          />
          <span className="text-2xl font-black tracking-tighter text-aetox-text-main">
            AETO<span className="text-aetox-accent">X</span>
          </span>
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        {menuItems.map((item: any) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className="text-[13px] font-black text-aetox-text-soft hover:text-aetox-text-main hover:scale-105 transition-all uppercase tracking-[0.2em]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex-1 flex justify-end items-center gap-6">
        {/* Language Selector */}
        <div className="relative hidden md:block" ref={langRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-300 group ${
              isLangOpen ? 'text-aetox-text-main' : 'text-aetox-text-soft hover:text-aetox-text-main'
            }`}
          >
            <Globe className={`w-4 h-4 transition-colors ${isLangOpen ? 'text-aetox-accent' : 'group-hover:text-aetox-accent'}`} />
            <span className="text-xs font-black tracking-widest">{currentLang}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-3 w-48 glass-card rounded-2xl p-2 z-[120]"
              >
                <div className="flex flex-col gap-1">
                  <button 
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-aetox-accent/10 text-aetox-text-main border border-aetox-accent/20 transition-all text-xs font-bold"
                    onClick={() => setIsLangOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🇹🇭</span>
                      <span>ภาษาไทย (TH)</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <Link 
          href="/contact" 
          className="hidden md:block px-8 py-3 rounded-xl bg-aetox-accent text-white text-sm font-black hover:bg-aetox-accent-hover transition-all shadow-aetox-glow transform active:scale-95 uppercase tracking-widest"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
