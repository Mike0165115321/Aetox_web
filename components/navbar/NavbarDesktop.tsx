'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

export default function NavbarDesktop({ 
  menuItems, 
  ctaLabel, 
  currentLang, 
  isLangOpen, 
  setIsLangOpen, 
  langRef,
  dict,
  switchLanguage
}: any) {
  return (
    <div className="container mx-auto relative flex items-center justify-between z-[110] px-6">
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <Link href={`/${currentLang.toLowerCase()}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
          <Image 
            src="/images/logo.svg" 
            alt="Aetox Logo" 
            width={48} 
            height={48} 
            className="h-10 w-auto animate-aetox-breathe dark:brightness-0 dark:invert" 
            priority 
          />
          <span className="text-2xl font-bold tracking-tighter text-aetox-text-main">
            AETO<span className="text-aetox-accent">X</span>
          </span>
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-10 mx-4">
        {menuItems.map((item: any) => (
          <Link 
            key={item.href} 
            href={`/${currentLang.toLowerCase()}${item.href}`} 
            className="text-[11px] xl:text-xs font-black uppercase text-aetox-text-soft hover:text-aetox-text-main hover:scale-105 transition-all tracking-[0.1em] whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex-1 flex justify-end items-center gap-4 xl:gap-6">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Language Selector */}
        <div className="relative hidden md:block" ref={langRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-300 group ${
              isLangOpen ? 'text-aetox-text-main bg-aetox-accent/5' : 'text-aetox-text-soft hover:text-aetox-text-main'
            }`}
          >
            <Globe className={`w-4 h-4 transition-colors ${isLangOpen ? 'text-aetox-accent' : 'group-hover:text-aetox-accent'}`} />
            <span className="text-[11px] font-black tracking-widest uppercase">{currentLang}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-3 w-56 aetox-card p-2 z-[120] shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  <button 
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${
                      currentLang === 'TH' ? 'bg-aetox-accent/10 text-aetox-accent' : 'text-aetox-text-soft hover:bg-aetox-surface hover:text-aetox-text-main'
                    }`}
                    onClick={() => { switchLanguage('th'); setIsLangOpen(false); }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🇹🇭</span>
                      <span>{dict?.languages?.th || "ภาษาไทย (TH)"}</span>
                    </div>
                    {currentLang === 'TH' && <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />}
                  </button>
                  <button 
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${
                      currentLang === 'EN' ? 'bg-aetox-accent/10 text-aetox-accent' : 'text-aetox-text-soft hover:bg-aetox-surface hover:text-aetox-text-main'
                    }`}
                    onClick={() => { switchLanguage('en'); setIsLangOpen(false); }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🇺🇸</span>
                      <span>{dict?.languages?.en || "English (EN)"}</span>
                    </div>
                    {currentLang === 'EN' && <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <Link 
          href="/contact" 
          className="hidden md:block px-8 py-3 rounded-xl bg-aetox-accent text-white text-[11px] font-black uppercase tracking-widest hover:bg-aetox-accent-hover transition-all shadow-aetox-glow transform active:scale-95"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
