'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, ArrowRight } from 'lucide-react';
import NumberCounter from '@/components/ui/NumberCounter';

interface ROIResultCardProps {
  results: {
    monthlyLoss: number;
    annualImpact: number;
    efficiencyBoost: number;
  };
  currency: string;
  dict: any;
}

export const ROIResultCard = ({ results, currency, dict }: ROIResultCardProps) => (
  <div className="w-full relative">
    {/* Clean Background - Removed Blur for performance */}
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative glass-card p-12 rounded-[48px] border-aetox-border bg-aetox-bg shadow-2xl overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
        <TrendingUp size={200} className="text-aetox-accent" />
      </div>

      <div className="space-y-16 relative z-10">
        <div>
          <p className="text-aetox-text-muted text-[10px] font-bold mb-6">{dict.results.annualImpact}</p>
          <div className="flex items-baseline gap-4 flex-wrap">
            <NumberCounter value={results.annualImpact} className="text-fluid-h1 font-black text-aetox-text-main" />
            <span className="text-aetox-accent font-bold text-lg md:text-2xl">{currency === 'THB' ? dict.common.units.bahtPerYear : dict.common.units.usdPerYear}</span>
          </div>
          <motion.p animate={{ x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-red-500/80 font-bold mt-10 flex items-center gap-2 text-[10px]">
            <Zap size={14} className="fill-red-500 shrink-0" /> {dict.results.lossWarning}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-16 border-t border-aetox-border">
          <div className="space-y-3">
            <p className="text-aetox-text-muted text-[9px] font-bold">{dict.results.monthlySavings}</p>
            <div className="text-fluid-h3 font-black text-aetox-text-main">
              <NumberCounter value={results.monthlyLoss} prefix={currency === 'THB' ? '฿' : '$'} />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-aetox-text-muted text-[9px] font-bold">{dict.results.efficiencyBoost}</p>
            <div className="text-fluid-h3 font-black text-aetox-accent">
              <NumberCounter value={results.efficiencyBoost} suffix={dict.common.units.percent} />
            </div>
          </div>
        </div>

        <div className="pt-10">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-6 rounded-2xl bg-aetox-accent text-white font-black text-xs hover:bg-aetox-accent-hover shadow-aetox-glow transition-all transform active:scale-95 flex items-center justify-center gap-3 group">
            {dict.cta} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="text-center text-aetox-text-muted text-[8px] font-black mt-10">
            {dict.results.footerNote}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);
