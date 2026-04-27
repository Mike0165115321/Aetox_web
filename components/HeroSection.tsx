'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Maximize, Network } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';

export default function HeroSection({ dict }: { dict: any }) {
  if (!dict) return null;
  const content = dict;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden border-b border-aetox-border">
      {/* Background Architectural Elements - Simplified and Sharpened */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 text-aetox-accent/[0.04]">
          <Maximize size={600} strokeWidth={0.2} />
        </div>
        <div className="absolute -bottom-20 -right-20 text-aetox-accent/[0.04]">
          <Network size={700} strokeWidth={0.2} />
        </div>
      </div>

      {/* Subtle Bottom Fade for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-aetox-bg to-transparent pointer-events-none z-20" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center container">
        {/* Aetox Logo — Prestigious & Purposeful */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-16"
        >
          <Image 
            src="/images/logo.svg" 
            alt="Aetox Logo" 
            width={120}
            height={120}
            className="w-24 md:w-28 h-auto mx-auto animate-aetox-breathe"
            priority
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-h1 text-aetox-text-main"
        >
          <span className="block mb-2">{content.headline.white}</span>
          <span className="text-aetox-accent">
            {content.headline.accent}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-fluid-p text-aetox-text-soft max-w-2xl font-medium"
        >
          {content.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col md:flex-row justify-center gap-6 w-full md:w-auto"
        >
          {/* Primary CTA — The only glow allowed */}
          <Link 
            href="/services"
            className="group px-10 py-5 rounded-2xl bg-aetox-accent text-white text-fluid-sm transition-all shadow-aetox-glow hover:bg-aetox-accent-hover transform active:scale-95 flex items-center justify-center gap-3"
          >
            {content.cta.primary}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/authority" 
            className="px-10 py-5 rounded-2xl border border-aetox-border text-aetox-text-soft text-fluid-sm transition-all transform active:scale-95 bg-aetox-surface/50 hover:text-aetox-text-main hover:border-aetox-text-soft/30 flex items-center justify-center"
          >
            {content.cta.secondary}
          </Link>
        </motion.div>

        {/* Minimalist Industrial Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 z-30"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-aetox-text-soft">{content.scrollLabel}</span>

          <div className="w-[1px] h-10 bg-gradient-to-b from-aetox-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

