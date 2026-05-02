'use client';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck } from 'lucide-react';
import BackgroundIcon from '@/components/visuals/BackgroundIcon';

export default function AuthorityHero({ content }: { content: any }) {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden bg-aetox-bg">
      <BackgroundIcon Icon={Trophy} position="top-left" size={500} />
      <BackgroundIcon Icon={ShieldCheck} position="bottom-right" size={500} opacity={0.06} />
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aetox-grid-overlay" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
            <span className="text-fluid-label font-bold text-aetox-accent uppercase tracking-[0.2em]">{content.hero.badge}</span>
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
