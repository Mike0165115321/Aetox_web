'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Rocket, TrendingUp, Building2,
  ShieldCheck, Zap, Info, Plus, Clock,
  Users, BarChart3, Target
} from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { useRoiCalculator } from './hooks/use-roi-calculator';
import { FeaturesDashboard } from './components/simulator-components';

// ─── Tier Definitions ──────────────────────────────────────────────
const TIERS = [
  {
    id: 'personal',
    label: 'ใช้ในทีมเล็ก',
    sub: '1-3 คน',
    icon: User,
    color: 'text-sky-400',
    glow: 'shadow-sky-500/20',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    preset: { queriesPerDay: 50, avgSalary: 25000, staffCount: 1, minutesPerCase: 10, valuePerCase: 200, aiMonthlyFee: 5000, setupCost: 15000 },
  },
  {
    id: 'early',
    label: 'เริ่มต้น',
    sub: 'Startup',
    icon: Rocket,
    color: 'text-cyber-blue',
    glow: 'shadow-cyber-glow/20',
    border: 'border-cyber-blue/30',
    bg: 'bg-cyber-blue/10',
    preset: { queriesPerDay: 500, avgSalary: 30000, staffCount: 3, minutesPerCase: 15, valuePerCase: 800, aiMonthlyFee: 15000, setupCost: 45000 },
  },
  {
    id: 'growth',
    label: 'ขยายตัว',
    sub: 'SME / ธุรกิจโต',
    icon: TrendingUp,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    preset: { queriesPerDay: 3000, avgSalary: 35000, staffCount: 8, minutesPerCase: 12, valuePerCase: 1500, aiMonthlyFee: 35000, setupCost: 120000 },
  },
  {
    id: 'enterprise',
    label: 'ระดับองค์กร',
    sub: 'Enterprise',
    icon: Building2,
    color: 'text-violet-400',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    preset: { queriesPerDay: 20000, avgSalary: 45000, staffCount: 25, minutesPerCase: 10, valuePerCase: 3000, aiMonthlyFee: 80000, setupCost: 350000 },
  },
];

export default function AiAgentsSimulator({ dict }: { dict: any }) {
  const { currency, formatCurrency, convert, exchangeRate } = useCurrency();
  const simulator = dict.simulator;
  const [tierId, setTierId] = useState('early');
  
  const activeTier = TIERS.find(t => t.id === tierId)!;

  // Slider states
  const [queriesPerDay, setQueriesPerDay]   = useState(activeTier.preset.queriesPerDay);
  const [avgSalary, setAvgSalary]           = useState(activeTier.preset.avgSalary);
  const [staffCount, setStaffCount]         = useState(activeTier.preset.staffCount);
  const [minutesPerCase, setMinutesPerCase] = useState(activeTier.preset.minutesPerCase);
  const [aiMonthlyFee, setAiMonthlyFee]     = useState(activeTier.preset.aiMonthlyFee);
  const [setupCost, setSetupCost]           = useState(activeTier.preset.setupCost);
  const [valuePerCase, setValuePerCase]     = useState(activeTier.preset.valuePerCase);
  const [dropRate]                          = useState(20);

  // Sync presets on tier change or currency change during render phase
  const [prevTierId, setPrevTierId] = useState(tierId);
  const [prevCurrency, setPrevCurrency] = useState(currency);

  if (prevTierId !== tierId) {
    setPrevTierId(tierId);
    const p = activeTier.preset;
    setQueriesPerDay(p.queriesPerDay);
    setStaffCount(p.staffCount);
    setMinutesPerCase(p.minutesPerCase);
    
    if (currency === 'USD' && exchangeRate) {
      setAvgSalary(Math.round(p.avgSalary / exchangeRate / 100) * 100);
      setValuePerCase(Math.round(p.valuePerCase / exchangeRate / 5) * 5);
      setAiMonthlyFee(Math.round(p.aiMonthlyFee / exchangeRate / 50) * 50);
      setSetupCost(Math.round(p.setupCost / exchangeRate / 100) * 100);
    } else {
      setAvgSalary(p.avgSalary);
      setValuePerCase(p.valuePerCase);
      setAiMonthlyFee(p.aiMonthlyFee);
      setSetupCost(p.setupCost);
    }
  } else if (prevCurrency !== currency && exchangeRate) {
    setPrevCurrency(currency);
    if (currency === 'USD') {
      setAvgSalary(prev => Math.round(prev / exchangeRate / 100) * 100);
      setValuePerCase(prev => Math.round(prev / exchangeRate / 5) * 5);
      setAiMonthlyFee(prev => Math.round(prev / exchangeRate / 50) * 50);
      setSetupCost(prev => Math.round(prev / exchangeRate / 100) * 100);
    } else {
      setAvgSalary(prev => Math.round(prev * exchangeRate / 100) * 100);
      setValuePerCase(prev => Math.round(prev * exchangeRate / 100) * 100);
      setAiMonthlyFee(prev => Math.round(prev * exchangeRate / 1000) * 1000);
      setSetupCost(prev => Math.round(prev * exchangeRate / 1000) * 1000);
    }
  }

  const calc = useRoiCalculator({
    useCase: tierId, queriesPerDay, avgSalary, staffCount,
    minutesPerCase, aiMonthlyFee, setupCost, dropRate, valuePerCase,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20; // Very high alignment for aggressive scroll
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-24">
      {/* ─── ROI Calculator ─── */}
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {simulator.title.white} <span className="text-cyber-blue">{simulator.title.accent}</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-base font-medium">{simulator.description}</p>
        </div>

        {/* ─── Tier Selector ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const active = tierId === tier.id;
            return (
              <motion.button
                key={tier.id}
                onClick={() => setTierId(tier.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                  active
                    ? `${tier.bg} ${tier.border} shadow-md ${tier.glow}`
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`p-2 rounded-xl ${active ? tier.bg : 'bg-white/5'} ${active ? tier.color : 'text-gray-500'}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-400'}`}>{tier.label}</p>
                  <p className={`text-[11px] font-medium ${active ? tier.color : 'text-gray-600'}`}>{tier.sub}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 space-y-6 bg-black/40">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Currency</span>
              <CurrencySwitcher />
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-bold text-gray-400 tracking-wide uppercase">ข้อมูลการดำเนินงาน</span>
                <Plus size={12} className={activeTier.color + ' opacity-50'} />
              </div>

              <SliderGroup label="Queries / วัน"     value={queriesPerDay}  onChange={setQueriesPerDay}  min={10}    max={50000} step={10}   unit="" />
              <SliderGroup label="จำนวนพนักงาน"       value={staffCount}     onChange={setStaffCount}     min={1}     max={100}   step={1}    unit=" คน" />
              <SliderGroup 
                label="เงินเดือนเฉลี่ย" 
                value={avgSalary} 
                onChange={setAvgSalary} 
                min={currency === 'THB' ? 15000 : 500} 
                max={currency === 'THB' ? 200000 : 6000} 
                step={currency === 'THB' ? 1000 : 50} 
                unit="" 
                displayValue={formatCurrency(avgSalary)}
              />
              <SliderGroup label="เวลาต่อ 1 เคส"       value={minutesPerCase} onChange={setMinutesPerCase} min={1}     max={120}   step={1}    unit=" นาที" />
              <SliderGroup 
                label="มูลค่าต่อ 1 เคส" 
                value={valuePerCase} 
                onChange={setValuePerCase} 
                min={0} 
                max={currency === 'THB' ? 10000 : 300} 
                step={currency === 'THB' ? 100 : 5} 
                unit="" 
                displayValue={formatCurrency(valuePerCase)}
              />
            </div>
            
            <div className="pt-5 border-t border-white/5 space-y-5">
              <div className={`flex items-center justify-between mb-2 ${activeTier.color}`}>
                <span className="text-[10px] font-bold uppercase tracking-wider">งบประมาณระบบ AETOX</span>
                <Zap size={12} />
              </div>
              <SliderGroup 
                label="ค่าติดตั้งระบบ" 
                value={setupCost} 
                onChange={setSetupCost} 
                min={0} 
                max={currency === 'THB' ? 1000000 : 30000} 
                step={currency === 'THB' ? 5000 : 200} 
                unit="" 
                displayValue={formatCurrency(setupCost)}
                isAccent 
              />
              <SliderGroup 
                label="ค่าบริการรายเดือน" 
                value={aiMonthlyFee} 
                onChange={setAiMonthlyFee} 
                min={currency === 'THB' ? 5000 : 100} 
                max={currency === 'THB' ? 200000 : 6000} 
                step={currency === 'THB' ? 5000 : 100} 
                unit="" 
                displayValue={formatCurrency(aiMonthlyFee)}
                isAccent 
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: AI vs Human */}
            <StatCard
              label="ศักยภาพเทียบกับทีม"
              value={`${calc.aiVsHumanMultiplier.toLocaleString()} เท่า`}
              desc={`ทีม ${staffCount} คน รองรับได้ ~${Math.round(calc.humanCapacityDaily).toLocaleString()} เคส/วัน`}
              icon={<Users size={18} />}
              color={activeTier.color}
              bg={activeTier.bg}
              border={activeTier.border}
            />

            {/* Card 2: Cost Saved */}
            <StatCard
              label="ลดต้นทุน/เดือน"
              value={formatCurrency(calc.monthlySaving)}
              desc={`เปลี่ยนต้นทุนแรงงาน ${formatCurrency(calc.totalHumanCostMonthly)} เป็นระบบอัตโนมัติ`}
              icon={<BarChart3 size={18} />}
              color="text-emerald-400"
              bg="bg-emerald-500/10"
              border="border-emerald-500/20"
              isPositive
            />

            {/* Card 3: Hours Recovered */}
            <StatCard
              label="เวลาที่ได้รับคืน/เดือน"
              value={`${calc.hoursRecoveredMonthly.toLocaleString()} ชม.`}
              desc={`เวลาที่ทีมสามารถนำไปทำงานเชิงกลยุทธ์อื่นได้`}
              icon={<Clock size={18} />}
              color="text-violet-400"
              bg="bg-violet-500/10"
              border="border-violet-500/20"
            />

            {/* Hero card: Yearly Saving */}
            <div className={`md:col-span-3 glass-card p-8 rounded-3xl border ${activeTier.border} bg-gradient-to-br ${activeTier.bg.replace('bg-', 'from-').replace('/10', '/[0.03]')} to-transparent relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <ShieldCheck size={100} className={activeTier.color} />
              </div>
              <div className="relative z-10">
                <p className={`${activeTier.color} text-sm font-bold mb-3`}>ผลประโยชน์ที่ประหยัดได้ต่อปี</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tight">
                    {formatCurrency(calc.totalYearlySaving).replace('฿', '').replace('$', '')}
                  </span>
                  <span className={`text-xl font-bold ${activeTier.color}`}>
                    {currency === 'THB' ? '฿ / ปี' : 'USD / Year'}
                  </span>
                </div>
                <p className="text-gray-500 font-medium text-sm">คำนวณจากต้นทุนที่ลดได้และรายรับที่ระบบช่วยรักษาไว้</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">คืนทุนใน</span>
                  <div className="text-2xl font-bold text-white">
                    {calc.breakEvenMonth > 0 ? `${calc.breakEvenMonth.toFixed(1)}` : 'ทันที'}
                    <span className="text-xs text-gray-400 font-bold ml-1">{calc.breakEvenMonth > 0 ? 'เดือน' : ''}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">ROI ต่อปี</span>
                  <div className="text-2xl font-bold text-emerald-400">
                    {Math.round(calc.roi).toLocaleString()}%
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">สถานะ</span>
                  <div className="text-2xl font-bold text-white">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="retrieval">
        <FeaturesDashboard features={simulator.features} comparisonRows={simulator.comparisonRows} />
      </section>
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────────────── */

function SliderGroup({ label, value, onChange, min, max, step = 1, unit, displayValue, isAccent = false }: any) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <label className="text-[11px] font-bold text-gray-400">{label}</label>
        <span className={`text-sm font-bold ${isAccent ? 'text-cyber-blue' : 'text-white'}`}>
          {displayValue || value.toLocaleString() + unit}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyber-blue ${isAccent ? 'shadow-cyber-glow/20' : ''}`}
      />
    </div>
  );
}

function StatCard({ label, value, desc, icon, color, bg, border, isPositive }: any) {
  return (
    <div className={`glass-card p-6 rounded-2xl border ${border} ${bg} relative group`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl bg-white/5 ${color}`}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">{label}</p>
        <div className={`text-2xl font-bold ${isPositive ? 'text-emerald-400' : 'text-white'}`}>{value}</div>
        <p className="text-[11px] text-gray-400 font-medium leading-tight mt-1.5">{desc}</p>
      </div>
    </div>
  );
}
