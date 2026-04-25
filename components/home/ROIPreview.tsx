'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Wallet, ArrowRight, Zap, Globe } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

// --- Helper Component: Animated Number Counter ---
function NumberCounter({ value, prefix = "", suffix = "", className = "" }: { value: number, prefix?: string, suffix?: string, className?: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 800; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out expo for smooth finish
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (end - start) * easeProgress);
      
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

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

  // Sync salary when currency changes
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
    <section className="py-24 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Input Controls */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="inline-flex items-center gap-2 text-cyber-blue font-bold text-xs tracking-[0.2em] uppercase mb-4">
                <Calculator size={14} /> {dict.title}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
                Stop the Leaks, <br />
                <span className="text-cyber-blue">Turn Costs Into Revenue.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                {dict.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="space-y-8 glass-card p-8 rounded-[32px] border border-white/5 relative overflow-hidden"
            >
              {/* Currency Switcher */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-6 border-b border-white/5">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Calculator Settings</span>
                <CurrencySwitcher />
              </div>

              {/* Presets */}
              <div className="space-y-3">
                <p className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">เลือกขนาดธุรกิจของคุณ (Quick Presets)</p>
                <div className="grid grid-cols-3 gap-2">
                  {['startup', 'sme', 'enterprise'].map((id) => (
                    <button
                      key={id}
                      onClick={() => applyPreset(id as any)}
                      className="py-2.5 rounded-xl border border-white/10 bg-white/5 text-[10px] font-bold text-gray-400 hover:border-cyber-blue hover:text-white hover:bg-cyber-blue/10 transition-all active:scale-95 capitalize"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Staff Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{dict.inputs.staffCount}</label>
                  <span className="text-cyber-blue font-black text-xl">{staffCount} คน</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={staffCount}
                  onChange={(e) => setStaffCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue hover:accent-deep-blue transition-all"
                />
              </div>

              {/* Salary Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{dict.inputs.avgSalary}</label>
                  <span className="text-cyber-blue font-black text-xl">{formatCurrency(avgSalary)}</span>
                </div>
                <input 
                  type="range" 
                  min={currency === 'THB' ? 15000 : 500} 
                  max={currency === 'THB' ? 300000 : 10000} 
                  step={currency === 'THB' ? 5000 : 100} 
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
                />
              </div>

              {/* Hours Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{dict.inputs.hoursSpent}</label>
                  <span className="text-cyber-blue font-black text-xl">{hoursSpent} ชม. / วัน</span>
                </div>
                <input 
                  type="range" min="1" max="8" step="0.5" value={hoursSpent}
                  onChange={(e) => setHoursSpent(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Results Display */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-cyber-blue rounded-full blur-[120px] pointer-events-none" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="relative glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl bg-black/80 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                <TrendingUp size={240} className="text-cyber-blue" />
              </div>

              <div className="space-y-12 relative z-10">
                {/* Annual Impact */}
                <div>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-4">{dict.results.annualImpact}</p>
                  <div className="flex items-end gap-3 flex-wrap">
                    <NumberCounter 
                      value={results.annualImpact} 
                      className="text-5xl md:text-8xl font-black text-white tracking-tighter"
                    />
                    <span className="text-cyber-blue font-black text-lg md:text-2xl mb-2 md:mb-4 uppercase tracking-widest">
                      {currency === 'THB' ? 'บาท / ปี' : 'USD / Yr'}
                    </span>
                  </div>
                  <motion.p 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-red-400/80 font-black mt-6 flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest"
                  >
                    <Zap size={14} className="fill-red-400 shrink-0" /> นี่คือมูลค่าที่ธุรกิจของคุณสูญเสียไปในแต่ละปี
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5">
                  <div className="space-y-2">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{dict.results.monthlySavings}</p>
                    <div className="text-xl md:text-3xl font-black text-white">
                      <NumberCounter value={results.monthlyLoss} prefix={currency === 'THB' ? '฿' : '$'} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{dict.results.efficiencyBoost}</p>
                    <div className="text-xl md:text-3xl font-black text-cyber-blue">
                      <NumberCounter value={results.efficiencyBoost} suffix="%" />
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-6 rounded-[24px] bg-gradient-to-r from-cyber-blue to-deep-blue text-black font-black text-xl hover:shadow-cyber-glow transition-all active:scale-95 flex items-center justify-center gap-3 group/btn"
                  >
                    {dict.cta} <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-8">
                    *ผลการคำนวณเบื้องต้นอ้างอิงจากมาตรฐานค่าเสียโอกาสเชิงปฏิบัติการ
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
