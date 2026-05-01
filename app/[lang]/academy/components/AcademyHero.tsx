'use client';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, GraduationCap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { scrollToSection } from '@/lib/scroll-utils';

export default function AcademyHero({ dict }: { dict: any }) {
  return (
    <section id="academy-hero" className="relative pt-40 pb-32 overflow-hidden scroll-mt-20">
      {/* Atmosphere System */}
      <div className="aetox-aura-primary -top-[10%] -right-[5%] opacity-10" />
      <div className="aetox-aura-secondary top-[20%] -left-[10%] opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="aetox-btn-glass w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-fluid-sm tracking-wide">{dict.common?.labels?.backToHome || "Back to Home"}</span>
          </Link>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-aetox-accent/10 border-aetox-accent/20 text-aetox-accent text-fluid-label uppercase mb-10 tracking-[0.2em]"
          >
            <GraduationCap className="w-3.5 h-3.5" /> {dict.badge}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-fluid-h1 font-display leading-[1.1] text-aetox-text-main">
              {dict.title.white} <br />
              <span className="text-aetox-accent drop-shadow-aetox-glow">{dict.title.accent}</span>
            </h1>
            
            <div className="inline-block px-6 py-2.5 rounded-xl bg-aetox-surface-lowest border border-aetox-border backdrop-blur-xl">
              <p className="text-fluid-h4 font-bold text-aetox-text-soft">
                {dict.suffix}
              </p>
            </div>

            <p className="text-aetox-text-soft text-fluid-p max-w-xl mx-auto leading-relaxed border-l-2 border-aetox-accent/30 pl-8 text-left md:text-center md:pl-0 md:border-l-0">
              {dict.description}
            </p>

            <div className="flex flex-wrap justify-center gap-5 pt-6">
              <button 
                onClick={() => scrollToSection('waitlist-form')}
                className="aetox-btn-main !px-8 !py-4 !text-lg group"
              >
                {dict.cta}
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-aetox-surface-lowest border border-aetox-border">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-fluid-label text-aetox-text-muted uppercase tracking-widest">{dict.trustBadge}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
