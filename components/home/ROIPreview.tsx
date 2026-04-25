'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Wallet, ArrowRight, Zap } from 'lucide-react';

export default function ROIPreview({ dict }: { dict: any }) {
  const [staffCount, setStaffCount] = useState<number>(10);
  const [avgSalary, setAvgSalary] = useState<number>(35000);
  const [hoursSpent, setHoursSpent] = useState<number>(3);
  
  const [results, setResults] = useState({
    monthlyLoss: 0,
    annualImpact: 0,
    efficiencyBoost: 0
  });

  useEffect(() => {
    // Logic: (Hours Spent / 8 hours per day) * Avg Salary * Staff Count
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      maximumFractionDigits: 0
    }).format(value);
  };

  if (!dict) return null;

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Input Controls */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-cyber-blue font-bold text-[10px] tracking-[0.2em] uppercase mb-4"
              >
                <Calculator size={14} /> {dict.title}
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
                Stop the Leaks, <br />
                <span className="text-cyber-blue">Turn Costs Into Revenue.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                {dict.description}
              </p>
            </div>

            <div className="space-y-8 glass-card p-8 rounded-[32px] border border-white/5">
              {/* Staff Count Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">{dict.inputs.staffCount}</label>
                  <span className="text-cyber-blue font-black text-xl">{staffCount} คน</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={staffCount}
                  onChange={(e) => setStaffCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
                />
              </div>

              {/* Avg Salary Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">{dict.inputs.avgSalary}</label>
                  <span className="text-cyber-blue font-black text-xl">{formatCurrency(avgSalary)}</span>
                </div>
                <input 
                  type="range" min="15000" max="150000" step="5000" value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
                />
              </div>

              {/* Hours Spent Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">{dict.inputs.hoursSpent}</label>
                  <span className="text-cyber-blue font-black text-xl">{hoursSpent} ชม. / วัน</span>
                </div>
                <input 
                  type="range" min="1" max="8" step="0.5" value={hoursSpent}
                  onChange={(e) => setHoursSpent(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
                />
              </div>
            </div>
          </div>

          {/* Right: Results Display */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl bg-black/60 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <TrendingUp size={160} className="text-cyber-blue" />
              </div>

              <div className="space-y-12 relative z-10">
                {/* Annual Impact */}
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">{dict.results.annualImpact}</p>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                      {formatCurrency(results.annualImpact).replace('฿', '')}
                    </span>
                    <span className="text-cyber-blue font-bold text-xl mb-2">บาท / ปี</span>
                  </div>
                  <p className="text-red-400 font-bold mt-4 flex items-center gap-2 text-sm">
                    <Zap size={14} className="fill-red-400" /> นี่คือมูลค่าที่ธุรกิจของคุณสูญเสียไปในแต่ละปี
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-12 border-t border-white/5">
                  <div className="space-y-2">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{dict.results.monthlySavings}</p>
                    <p className="text-2xl font-bold text-white">{formatCurrency(results.monthlyLoss)}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{dict.results.efficiencyBoost}</p>
                    <p className="text-2xl font-bold text-cyber-blue">+{results.efficiencyBoost}%</p>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyber-blue to-deep-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    รับรายงานวิเคราะห์ความคุ้มค่าฟรี <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-6 font-medium">
                    *ผลการคำนวณเบื้องต้นอ้างอิงจากมาตรฐานค่าเสียโอกาสเชิงปฏิบัติการ
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
