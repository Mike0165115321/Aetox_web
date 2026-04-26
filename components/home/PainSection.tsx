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
}

const PainCard = ({ title, impact, cost, index }: PainItemProps) => {
  const icons = [Clock, TrendingDown, AlertTriangle];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group p-10 rounded-[40px] border-aetox-border bg-aetox-surface/20 flex flex-col h-full hover:bg-aetox-surface/40 transition-all duration-500"
    >
      <div className="mb-10">
        <div className="w-14 h-14 rounded-2xl bg-aetox-bg border border-aetox-border flex items-center justify-center text-aetox-text-muted group-hover:border-aetox-accent/50 group-hover:text-aetox-accent transition-all duration-500">
          <Icon size={28} />
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <h3 className="text-xl font-black text-aetox-text-main uppercase tracking-tight">
          {title}
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-red-500/[0.03] border border-red-500/10">
            <p className="text-red-400/80 text-[10px] font-black uppercase tracking-widest mb-1">Observation</p>
            <p className="text-aetox-text-main text-sm font-bold leading-relaxed">{impact}</p>
          </div>
          
          <div className="p-4 rounded-xl bg-aetox-accent/[0.03] border border-aetox-accent/10">
            <p className="text-aetox-accent/80 text-[10px] font-black uppercase tracking-widest mb-1">Strategic Cost</p>
            <p className="text-aetox-text-soft text-sm font-medium leading-relaxed italic">{cost}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PainSection({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="pain" className="py-32 relative bg-aetox-bg overflow-hidden border-t border-aetox-border">
      {/* Subtle Blueprint Background */}
      <div className="absolute inset-0 bg-aetox-blueprint bg-[length:60px_60px] opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-aetox-accent font-black text-[10px] tracking-[0.2em] uppercase mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
            Critical Business Analysis
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-aetox-text-main mb-8 leading-[1.1] tracking-tighter uppercase"
          >
            {dict.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-aetox-text-soft text-sm md:text-xl font-bold uppercase tracking-widest leading-relaxed max-w-2xl"
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
          <div className="p-8 rounded-[40px] glass-card border-aetox-border bg-aetox-surface/20 flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-aetox-text-main font-black text-xl tracking-tight">Inefficiency is a deliberate cost.</p>
              <p className="text-aetox-text-soft text-sm mt-2 font-medium uppercase tracking-widest">
                Stop leaking revenue and deploy intelligence today.
              </p>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => scrollToSection('roi-calculator')}
                className="px-8 py-5 rounded-2xl bg-aetox-accent text-white font-black text-xs uppercase tracking-widest hover:bg-aetox-accent-hover shadow-aetox-glow transition-all transform active:scale-95 flex items-center gap-3"
              >
                คำนวณมูลค่าความเสียหาย <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
