'use client';
import { motion } from 'framer-motion';
import CurrencySwitcher from '@/components/CurrencySwitcher';

interface ROIInputSectionProps {
  staffCount: number;
  setStaffCount: (v: number) => void;
  avgSalary: number;
  setAvgSalary: (v: number) => void;
  hoursSpent: number;
  setHoursSpent: (v: number) => void;
  applyPreset: (type: 'startup' | 'sme' | 'enterprise') => void;
  currency: string;
  formatCurrency: (v: number) => string;
  dict: any;
}

export const ROIInputSection = ({
  staffCount, setStaffCount,
  avgSalary, setAvgSalary,
  hoursSpent, setHoursSpent,
  applyPreset, currency, formatCurrency, dict
}: ROIInputSectionProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-10 glass-card p-10 rounded-[40px] border-aetox-border bg-aetox-surface/20"
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-aetox-border">
      <span className="text-[10px] font-bold text-aetox-text-muted">{dict.inputs.parametersLabel}</span>
      <CurrencySwitcher />
    </div>

    <div className="space-y-4">
      <p className="text-[9px] font-bold text-aetox-accent">{dict.inputs.presetsLabel}</p>
      <div className="grid grid-cols-3 gap-3">
        {['startup', 'sme', 'enterprise'].map((id) => (
          <button
            key={id}
            onClick={() => applyPreset(id as any)}
            className="py-3 rounded-xl border border-aetox-border bg-aetox-bg text-[10px] font-bold text-aetox-text-soft hover:border-aetox-accent hover:text-aetox-text-main hover:bg-aetox-accent/10 transition-all"
          >
            {dict.inputs.presets[id as keyof typeof dict.inputs.presets]}
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-aetox-text-soft">{dict.inputs.staffCount}</label>
          <span className="text-aetox-text-main font-bold text-xl">{staffCount} {dict.common.units.people}</span>
        </div>
        <input type="range" min="1" max="100" value={staffCount} onChange={(e) => setStaffCount(parseInt(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-aetox-text-soft">{dict.inputs.avgSalary}</label>
          <span className="text-aetox-text-main font-bold text-xl">{formatCurrency(avgSalary)}</span>
        </div>
        <input type="range" min={currency === 'THB' ? 15000 : 500} max={currency === 'THB' ? 300000 : 10000} step={currency === 'THB' ? 5000 : 100} value={avgSalary} onChange={(e) => setAvgSalary(parseInt(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-aetox-text-soft">{dict.inputs.hoursSpent}</label>
          <span className="text-aetox-text-main font-bold text-xl">{hoursSpent} {dict.common.units.hoursPerDay}</span>
        </div>
        <input type="range" min="1" max="8" step="0.5" value={hoursSpent} onChange={(e) => setHoursSpent(parseFloat(e.target.value))} className="w-full h-1.5 bg-aetox-surface rounded-lg appearance-none cursor-pointer accent-aetox-accent" />
      </div>
    </div>
  </motion.div>
);
