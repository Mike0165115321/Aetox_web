'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ dict }: { dict: any }) {
  if (!dict) return null;
  const content = dict;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden border-b border-aetox-border">
      {/* 1. Subtle Bottom Fade for smooth transition */}
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
          {/* Primary CTA — Using centralized styles/aetox-styles.css */}
          <Link href="/services" className="group aetox-btn-main">
            {content.cta.primary}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Secondary CTA — Using centralized styles/aetox-styles.css */}
          <Link href="/authority" className="aetox-btn-outline">
            {content.cta.secondary}
          </Link>
        </motion.div>

        {/* Minimalist Industrial Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 z-30"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-aetox-text-soft">{content.scrollLabel}</span>

          <div className="w-[1px] h-10 bg-gradient-to-b from-aetox-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
