'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';

export default function HeroSection({ dict }: { dict: any }) {
  const content = dict || {
    headline: { white: "Turn Problems Into", accent: "Efficient Systems." },
    description: "เราไม่ได้สร้างแค่ Web Application แต่เราเปลี่ยนปัญหาเดิม ให้กลายเป็นระบบที่ทำงานได้เร็วขึ้น แม่นยำขึ้น และใช้คนน้อยลง",
    cta: { primary: "สำรวจระบบอัจฉริยะ", secondary: "เล่าปัญหาธุรกิจของคุณ" }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center container mx-auto">
        {/* Aetox Logo Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 mt-12"
        >
          <Image 
            src="/images/logo.svg" 
            alt="Aetox Logo" 
            width={160}
            height={160}
            className="w-32 md:w-40 h-auto mx-auto drop-shadow-cyber-glow"
            priority
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1.1]"
        >
          {content.headline.white} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-deep-blue to-cyber-blue bg-[length:200%_auto] animate-gradient-x">
            {content.headline.accent}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium"
        >
          {content.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row justify-center gap-6 w-full md:w-auto"
        >
          <button 
            onClick={() => scrollToSection('roi-calculator')}
            className="group px-10 py-5 rounded-2xl bg-cyber-blue text-black font-black text-lg transition-all shadow-cyber-glow transform active:scale-95 flex items-center justify-center gap-3 hover:shadow-deep-glow"
          >
            {content.cta.primary}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <Link 
            href="/contact" 
            className="px-10 py-5 rounded-2xl border border-white/10 hover:border-cyber-blue/50 text-white font-black text-lg transition-all transform active:scale-95 bg-white/5 backdrop-blur-sm"
          >
            {content.cta.secondary}
          </Link>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
