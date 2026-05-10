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
          initial={{ opacity: 0, x: '100%' }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[1000] bg-aetox-bg/95 backdrop-blur-3xl lg:hidden flex flex-col"
        >
          {/* Subtle Blueprint Grid */}
          <div className="absolute inset-0 bg-aetox-blueprint bg-[length:40px_40px] opacity-20 pointer-events-none" />
          
          <div className="flex-1 flex flex-col pt-24 px-6 pb-8 relative z-10 overflow-y-auto">
            {/* Menu Links */}
            <div className="flex flex-col gap-2 mb-8">
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
                    className="group flex items-center justify-between text-lg font-bold text-aetox-text-soft hover:text-aetox-text-main transition-all py-3 border-b border-aetox-border/30"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-aetox-accent/50 group-hover:text-aetox-accent">0{index + 1}</span>
                      <span className="tracking-tight">{item.label}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-aetox-accent" />
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

              <div className="p-1 bg-aetox-surface rounded-xl border border-aetox-border flex items-center gap-1">
                <button 
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all text-[10px] font-bold tracking-wider ${
                    currentLang === 'TH' ? 'bg-aetox-bg text-aetox-text-main shadow-lg border border-aetox-border' : 'text-aetox-text-muted'
                  }`}
                  onClick={() => switchLanguage('th')}
                >
                  🇹🇭 {dict?.languages?.th?.split(' ')[1] || "TH"}
                </button>
                <button 
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all text-[10px] font-bold tracking-wider ${
                    currentLang === 'EN' ? 'bg-aetox-bg text-aetox-text-main shadow-lg border border-aetox-border' : 'text-aetox-text-muted'
                  }`}
                  onClick={() => switchLanguage('en')}
                >
                  🇺🇸 {dict?.languages?.en?.split(' ')[1] || "EN"}
                </button>
              </div>

              <Link 
                href={`/${currentLang.toLowerCase()}/contact`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-aetox-accent text-white text-sm font-bold shadow-aetox-glow transition-all active:scale-[0.98]"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
