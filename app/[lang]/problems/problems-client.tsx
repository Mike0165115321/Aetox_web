'use client';

import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Cpu, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import PainSection from '@/components/home/PainSection';

interface ProblemsClientProps {
  dict: any;
  lang: 'th' | 'en';
}

export default function ProblemsClient({ dict, lang }: ProblemsClientProps) {
  const router = useRouter();
  const { hero, stats, pain, solution } = dict;

  const handleCTAClick = () => {
    router.push(`/${lang}/contact`);
  };

  return (
    <div className="pt-40 pb-24 overflow-hidden relative">
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-aetox-accent/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aetox-surface-low/30 border border-aetox-accent/20 text-aetox-accent text-xs font-bold mb-6 backdrop-blur-md shadow-lg"
          >
            <ShieldAlert size={14} className="animate-pulse" />
            <span>{hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-h1 font-bold text-aetox-text-main tracking-tight leading-[1.3] py-2 mb-8"
          >
            {hero.title} <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aetox-accent via-cyan-400 to-aetox-accent inline-block py-2 drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              {hero.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-p text-aetox-text-soft font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>
        </div>

        {/* 2. STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {stats.items.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="aetox-card p-8 bg-gradient-to-br from-aetox-surface-low/40 to-aetox-surface-low/10 border border-aetox-accent/10 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl backdrop-blur-lg hover:border-aetox-accent/30 transition-all duration-500 group"
            >
              <div className="text-5xl md:text-6xl font-black text-aetox-accent tracking-tighter mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(var(--aetox-accent-rgb),0.3)]">
                {stat.value}
              </div>
              <div className="text-aetox-text-muted font-bold text-sm md:text-base tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. DEDICATED PAIN SECTION INTEGRATION */}
        <div className="max-w-7xl mx-auto -mt-10 mb-16">
          <PainSection dict={pain} />
        </div>

        {/* 4. SOLUTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aetox-card p-8 md:p-16 max-w-5xl mx-auto bg-gradient-to-br from-aetox-surface-low/30 to-aetox-bg border border-aetox-accent/20 hover:border-aetox-accent/40 transition-all duration-500 rounded-3xl relative overflow-hidden shadow-2xl"
        >
          {/* Neon mesh overlay */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-aetox-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-fluid-h2 font-bold text-aetox-text-main tracking-tight">
                {solution.title}
              </h2>
              <p className="text-aetox-text-soft font-medium leading-relaxed">
                {solution.desc}
              </p>

              <div className="space-y-4 pt-4">
                {solution.features.map((feature: any, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-aetox-accent/10 flex items-center justify-center text-aetox-accent shrink-0 border border-aetox-accent/20 mt-1">
                      <Zap size={12} />
                    </div>
                    <div>
                      <h4 className="text-aetox-text-main font-bold text-sm tracking-wide mb-1">{feature.title}</h4>
                      <p className="text-aetox-text-muted text-xs font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-6 justify-center w-full lg:w-auto">
              <div className="w-24 h-24 rounded-full bg-aetox-surface-low border border-aetox-accent/30 flex items-center justify-center text-aetox-accent shadow-lg shadow-aetox-glow/20 animate-pulse">
                <Cpu size={40} />
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="aetox-btn-main !rounded-2xl px-8 py-4 font-black flex items-center gap-3 transition-transform hover:scale-105"
              >
                {solution.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
