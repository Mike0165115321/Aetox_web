'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import NumberCounter from '@/components/ui/NumberCounter';

export default function ROIPreview({ dict }: { dict: any }) {
  const { currency, formatCurrency, exchangeRate } = useCurrency();
  const [staffCount, setStaffCount] = useState<number>(10);
  const [avgSalary, setAvgSalary] = useState<number>(35000);
  const [hoursSpent, setHoursSpent] = useState<number>(3);
  
  const [results, setResults] = useState({
    monthlyLoss: 0,
    annualImpact: 0,
    efficiencyBoost: 0
  });

  useEffect(() => {
    if (currency === 'USD' && avgSalary > 5000) {
      setAvgSalary(Math.round(avgSalary / exchangeRate / 100) * 100);
    } else if (currency === 'THB' && avgSalary < 5000) {
      setAvgSalary(Math.round(avgSalary * exchangeRate / 1000) * 1000);
    }
  }, [currency]);

  useEffect(() => {
    const ratio = hoursSpent / 8;
    const monthly = Math.round(ratio * avgSalary * staffCount);
    const annual = monthly * 12;
    const boost = Math.round(ratio * 100);

    setResults({
      monthlyLoss: monthly,
      annualImpact: annual,
      efficiencyBoost: boost
    });
  }, [staffCount, avgSalary, hoursSpent]);

  const applyPreset = (type: 'startup' | 'sme' | 'enterprise') => {
    if (type === 'startup') {
      setStaffCount(5);
      setAvgSalary(currency === 'THB' ? 25000 : 800);
      setHoursSpent(2);
    } else if (type === 'sme') {
      setStaffCount(25);
      setAvgSalary(currency === 'THB' ? 35000 : 1200);
      setHoursSpent(4);
    } else if (type === 'enterprise') {
      setStaffCount(100);
      setAvgSalary(currency === 'THB' ? 55000 : 2000);
      setHoursSpent(3);
    }
  };

  if (!dict) return null;

  return (
    <section className="py-32 relative bg-aetox-bg border-t border-aetox-border">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Input Controls */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-aetox-accent font-black text-[10px] tracking-[0.2em] uppercase mb-6">
                <Calculator size={14} /> {dict.title}
              </div>
              <h2 className="text-fluid-h2 font-black text-aetox-text-main leading-tight tracking-tighter">
                Stop the Leaks, <br />
                <span className="text-aetox-accent">Turn Costs Into Revenue.</span>
              </h2>
              <p className="text-fluid-p text-aetox-text-soft font-medium leading-relaxed max-w-xl">
                {dict.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10 glass-card p-10 rounded-[40px] border-aetox-border bg-aetox-surface/20"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-aetox-border">
                <span className="text-[10px] font-black text-aetox-text-muted uppercase tracking-[0.2em]">Calculator Parameters</span>
                <CurrencySwitcher />
              </div>

              <div className="space-y-4">
                <p className="text-[9px] font-black text-aetox-accent uppercase tracking-widest">Business Model Presets</p>
                <div className="grid grid-cols-3 gap-3">
                  {['startup', 'sme', 'enterprise'].map((id) => (
                    <button
                      key={id}
                      onClick={() => applyPreset(id as any)}
                      className="py-3 rounded-xl border border-aetox-border bg-aetox-bg text-[10px] font-black text-aetox-text-soft hover:border-aetox-accent hover:text-aetox-text-main hover:bg-aetox-accent/10 transition-all uppercase tracking-widest"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-aetox-text-soft uppercase tracking-[0.2em]">{dict.inputs.staffCount}</label>
                    <span className="text-aetox-text-main font-black text-xl">{staffCount} คน</span>
                  </div>
                  <input type="range" min="1" max="100" value={staffCount} onChange={(e) => setStaffCount(parseInt(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-aetox-text-soft uppercase tracking-[0.2em]">{dict.inputs.avgSalary}</label>
                    <span className="text-aetox-text-main font-black text-xl">{formatCurrency(avgSalary)}</span>
                  </div>
                  <input type="range" min={currency === 'THB' ? 15000 : 500} max={currency === 'THB' ? 300000 : 10000} step={currency === 'THB' ? 5000 : 100} value={avgSalary} onChange={(e) => setAvgSalary(parseInt(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-aetox-text-soft uppercase tracking-[0.2em]">{dict.inputs.hoursSpent}</label>
                    <span className="text-aetox-text-main font-black text-xl">{hoursSpent} ชม. / วัน</span>
                  </div>
                  <input type="range" min="1" max="8" step="0.5" value={hoursSpent} onChange={(e) => setHoursSpent(parseFloat(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Results */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-aetox-accent/5 rounded-full blur-[120px] pointer-events-none" />
            
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
                  <p className="text-aetox-text-muted text-[10px] font-black uppercase tracking-[0.3em] mb-6">{dict.results.annualImpact}</p>
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <NumberCounter value={results.annualImpact} className="text-fluid-h1 font-black text-aetox-text-main" />
                    <span className="text-aetox-accent font-black text-lg md:text-2xl uppercase tracking-widest">{currency === 'THB' ? 'บาท / ปี' : 'USD / Yr'}</span>
                  </div>
                  <motion.p animate={{ x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-red-500/80 font-black mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    <Zap size={14} className="fill-red-500 shrink-0" /> นี่คือมูลค่าที่ธุรกิจของคุณสูญเสียไปในแต่ละปี
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-10 pt-16 border-t border-aetox-border">
                  <div className="space-y-3">
                    <p className="text-aetox-text-muted text-[9px] font-black uppercase tracking-[0.2em]">{dict.results.monthlySavings}</p>
                    <div className="text-fluid-h3 font-black text-aetox-text-main">
                      <NumberCounter value={results.monthlyLoss} prefix={currency === 'THB' ? '฿' : '$'} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-aetox-text-muted text-[9px] font-black uppercase tracking-[0.2em]">{dict.results.efficiencyBoost}</p>
                    <div className="text-fluid-h3 font-black text-aetox-accent">
                      <NumberCounter value={results.efficiencyBoost} suffix="%" />
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-6 rounded-2xl bg-aetox-accent text-white font-black text-xs uppercase tracking-widest hover:bg-aetox-accent-hover shadow-aetox-glow transition-all transform active:scale-95 flex items-center justify-center gap-3 group">
                    {dict.cta} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-aetox-text-muted text-[8px] font-black uppercase tracking-[0.4em] mt-10">
                    *Strategic operational impact analysis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

