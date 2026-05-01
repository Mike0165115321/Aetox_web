'use client';
import { motion } from 'framer-motion';

export default function AuthorityHero({ content }: { content: any }) {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden bg-aetox-bg">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aetox-grid-overlay" />
        <div className="aetox-aura-primary -top-[10%] -left-[5%] opacity-10" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
            <span className="text-[11px] font-bold text-aetox-accent uppercase tracking-[0.2em]">{content.hero.badge}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-fluid-h1 font-black text-aetox-text-main mb-8 tracking-tighter leading-[1.1]"
          >
            {content.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-fluid-p text-aetox-text-soft max-w-2xl leading-relaxed font-medium"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
