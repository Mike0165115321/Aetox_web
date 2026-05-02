'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';

interface PainItemProps {
  id: string;
  title: string;
  impact: string;
  cost: string;
  index: number;
  observationLabel: string;
  costLabel: string;
}

const PainCard = ({ title, impact, cost, index, observationLabel, costLabel }: PainItemProps) => {
  const icons = [Clock, TrendingDown, AlertTriangle];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aetox-card group p-10 flex flex-col h-full"
    >
      <div className="mb-10">
        <div className="w-14 h-14 rounded-2xl bg-aetox-bg border border-aetox-border flex items-center justify-center text-aetox-text-muted group-hover:border-aetox-accent/50 group-hover:text-aetox-accent transition-all duration-500">
          <Icon size={28} />
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <h3 className="text-fluid-h3 font-bold text-aetox-text-main tracking-tight">
          {title}
        </h3>
        
        <div className="space-y-4">
          <div className="aetox-alert-error">
            <p className="text-fluid-label font-bold uppercase tracking-widest mb-1">{observationLabel}</p>
            <p className="text-aetox-text-main text-fluid-p font-bold leading-relaxed">{impact}</p>
          </div>
          
          <div className="aetox-alert-accent">
            <p className="text-fluid-label font-bold uppercase tracking-widest mb-1">{costLabel}</p>
            <p className="text-aetox-text-soft text-fluid-p font-medium leading-relaxed italic">{cost}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PainSection({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="pain" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Premium Atmosphere Integration */}
      <div className="aetox-grid-overlay opacity-30" />
      <div className="aetox-aura-primary -top-[20%] -left-[10%] opacity-10" />
      <div className="aetox-aura-secondary top-[40%] -right-[10%] opacity-5" />

      {/* Decorative Icons Layout */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute -top-10 -left-20 text-aetox-accent">
          <Clock size={400} strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 -right-20 text-aetox-accent">
          <TrendingDown size={450} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-aetox-accent font-black text-[10px] tracking-[0.2em] uppercase mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
            {dict.badge}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 font-bold text-aetox-text-main tracking-tight mb-6"
          >
            {dict.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-fluid-p text-aetox-text-soft font-bold max-w-2xl mt-4"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((item: any, index: number) => (
            <PainCard 
              key={item.id} 
              {...item} 
              index={index} 
              observationLabel={dict.observationLabel}
              costLabel={dict.costLabel}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="p-8 aetox-card flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-aetox-text-main font-bold text-fluid-h3 tracking-tight">{dict.footerTitle}</p>
              <p className="text-aetox-text-soft text-sm mt-2 font-medium tracking-wide">
                {dict.footerDesc}
              </p>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => scrollToSection('roi-calculator')}
                className="aetox-btn-main !rounded-2xl"
              >
                {dict.cta} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
