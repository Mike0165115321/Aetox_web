'use client';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

export default function NavbarMobile({ 
  menuItems, 
  ctaLabel, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  currentLang, 
  switchLanguage,
  dict
}: any) {
  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] bg-aetox-bg lg:hidden flex flex-col"
        >
          {/* Subtle Blueprint Grid */}
          <div className="absolute inset-0 bg-aetox-blueprint bg-[length:40px_40px] opacity-20 pointer-events-none" />
          
          <div className="flex-1 flex flex-col pt-32 px-8 pb-12 relative z-10 overflow-y-auto">
            {/* Menu Links */}
            <div className="flex flex-col gap-4 mb-12">
              {menuItems.map((item: any, index: number) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    href={`/${currentLang.toLowerCase()}${item.href}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-2xl font-bold text-aetox-text-soft hover:text-aetox-text-main transition-all py-4 border-b border-aetox-border"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-bold text-aetox-accent/50 group-hover:text-aetox-accent">0{index + 1}</span>
                      <span className="tracking-tight">{item.label}</span>
                    </span>
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-aetox-accent" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Action Zone */}
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-black text-aetox-text-muted uppercase tracking-[0.2em]">Theme Mode</span>
                <ThemeToggle />
              </div>

              <div className="p-1 bg-aetox-surface rounded-2xl border border-aetox-border flex items-center gap-1">
                <button 
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-xs font-bold tracking-wider ${
                    currentLang === 'TH' ? 'bg-aetox-bg text-aetox-text-main shadow-xl border border-aetox-border' : 'text-aetox-text-muted'
                  }`}
                  onClick={() => switchLanguage('th')}
                >
                  🇹🇭 {dict?.languages?.th?.split(' ')[1] || "TH"}
                </button>
                <button 
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-xs font-bold tracking-wider ${
                    currentLang === 'EN' ? 'bg-aetox-bg text-aetox-text-main shadow-xl border border-aetox-border' : 'text-aetox-text-muted'
                  }`}
                  onClick={() => switchLanguage('en')}
                >
                  🇺🇸 {dict?.languages?.en?.split(' ')[1] || "EN"}
                </button>
              </div>

              <Link 
                href={`/${currentLang.toLowerCase()}/contact`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-aetox-accent text-white text-lg font-bold shadow-aetox-glow transition-all active:scale-[0.98]"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
