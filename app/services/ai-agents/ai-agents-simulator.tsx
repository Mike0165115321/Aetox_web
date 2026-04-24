'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Rocket, TrendingUp, Building2,
  ShieldCheck, Zap, Info, Plus, Clock,
  Users, BarChart3, Target
} from 'lucide-react';
import { useRoiCalculator } from './hooks/use-roi-calculator';
import { FeaturesDashboard } from './components/simulator-components';

// ─── Tier Definitions ──────────────────────────────────────────────
const TIERS = [
  {
    id: 'personal',
    label: 'ใช้เอง',
    sub: '~50 queries/วัน',
    icon: User,
    color: 'text-sky-400',
    glow: 'shadow-sky-500/20',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    preset: { queriesPerDay: 50, avgSalary: 25000, staffCount: 1, minutesPerCase: 10, valuePerCase: 200, aiMonthlyFee: 5000 },
  },
  {
    id: 'early',
    label: 'เริ่มเปิดให้ใช้',
    sub: '~500 queries/วัน',
    icon: Rocket,
    color: 'text-cyber-blue',
    glow: 'shadow-cyber-glow/20',
    border: 'border-cyber-blue/30',
    bg: 'bg-cyber-blue/10',
    preset: { queriesPerDay: 500, avgSalary: 30000, staffCount: 3, minutesPerCase: 15, valuePerCase: 800, aiMonthlyFee: 15000 },
  },
  {
    id: 'growth',
    label: 'ขยายตลาด',
    sub: '~3,000 queries/วัน',
    icon: TrendingUp,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    preset: { queriesPerDay: 3000, avgSalary: 35000, staffCount: 8, minutesPerCase: 12, valuePerCase: 1500, aiMonthlyFee: 35000 },
  },
  {
    id: 'enterprise',
    label: 'Enterprise Platform',
    sub: '~20,000 queries/วัน',
    icon: Building2,
    color: 'text-violet-400',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    preset: { queriesPerDay: 20000, avgSalary: 45000, staffCount: 25, minutesPerCase: 10, valuePerCase: 3000, aiMonthlyFee: 80000 },
  },
];

export default function AiAgentsSimulator({ dict }: { dict: any }) {
  const simulator = dict.simulator;
  const [tierId, setTierId] = useState('early');
  
  const activeTier = TIERS.find(t => t.id === tierId)!;

  // Slider states — seeded from preset
  const [queriesPerDay, setQueriesPerDay]   = useState(activeTier.preset.queriesPerDay);
  const [avgSalary, setAvgSalary]           = useState(activeTier.preset.avgSalary);
  const [staffCount, setStaffCount]         = useState(activeTier.preset.staffCount);
  const [minutesPerCase, setMinutesPerCase] = useState(activeTier.preset.minutesPerCase);
  const [aiMonthlyFee, setAiMonthlyFee]     = useState(activeTier.preset.aiMonthlyFee);
  const [valuePerCase, setValuePerCase]     = useState(activeTier.preset.valuePerCase);
  const [dropRate]                          = useState(20);

  // Sync presets on tier change
  useEffect(() => {
    const p = activeTier.preset;
    setQueriesPerDay(p.queriesPerDay);
    setAvgSalary(p.avgSalary);
    setStaffCount(p.staffCount);
    setMinutesPerCase(p.minutesPerCase);
    setValuePerCase(p.valuePerCase);
    setAiMonthlyFee(p.aiMonthlyFee);
  }, [tierId]);

  const calc = useRoiCalculator({
    useCase: tierId, queriesPerDay, avgSalary, staffCount,
    minutesPerCase, aiMonthlyFee, dropRate, valuePerCase,
  });

  return (
    <div className="space-y-32">
      {/* ─── ROI Calculator ─── */}
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {simulator.title.white}<br />
            <span className="text-cyber-blue drop-shadow-cyber-glow">{simulator.title.accent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">{simulator.description}</p>
        </div>

        {/* ─── Tier Selector ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const active = tierId === tier.id;
            return (
              <motion.button
                key={tier.id}
                onClick={() => setTierId(tier.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex flex-col items-start gap-3 p-5 rounded-2xl border transition-all text-left ${
                  active
                    ? `${tier.bg} ${tier.border} shadow-lg ${tier.glow}`
                    : 'bg-white/[0.03] border-white/5 hover:border-white/15'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${active ? tier.bg : 'bg-white/5'} ${active ? tier.color : 'text-gray-500'}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-sm font-black ${active ? 'text-white' : 'text-gray-400'}`}>{tier.label}</p>
                  <p className={`text-[11px] font-bold mt-0.5 ${active ? tier.color : 'text-gray-600'}`}>{tier.sub}</p>
                </div>
                {active && (
                  <motion.div
                    layoutId="tier-active-dot"
                    className={`absolute top-4 right-4 w-2 h-2 rounded-full ${tier.color.replace('text-', 'bg-')}`}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* ─── Main Grid ─── */}
        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-4 glass-card p-8 rounded-[32px] border border-white/10 space-y-8 bg-black/40">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-gray-400 uppercase tracking-widest">ข้อมูลองค์กรของคุณ</span>
                <Plus size={14} className={activeTier.color + ' opacity-60'} />
              </div>

              <SliderGroup label="Queries ที่รับมา / วัน"     value={queriesPerDay}  onChange={setQueriesPerDay}  min={10}    max={50000} step={10}   unit="" />
              <SliderGroup label="จำนวนพนักงานตอบคำถาม"       value={staffCount}     onChange={setStaffCount}     min={1}     max={100}   step={1}    unit=" คน" />
              <SliderGroup label="เงินเดือนเฉลี่ย"            value={avgSalary}      onChange={setAvgSalary}      min={15000} max={150000} step={1000} unit=" ฿" />
              <SliderGroup label="เวลาตอบ / เคส (นาที)"       value={minutesPerCase} onChange={setMinutesPerCase} min={1}     max={120}   step={1}    unit=" นาที" />
              <SliderGroup label="มูลค่าเฉลี่ย / เคส"         value={valuePerCase}   onChange={setValuePerCase}   min={0}     max={10000} step={100}  unit=" ฿" />
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className={`flex items-center justify-between mb-4 ${activeTier.color}`}>
                <span className="text-xs font-black uppercase tracking-widest italic">ค่าบริการระบบ AETOX</span>
                <Zap size={14} />
              </div>
              <SliderGroup label="ค่าธรรมเนียมรายเดือน" value={aiMonthlyFee} onChange={setAiMonthlyFee} min={5000} max={200000} step={5000} unit=" ฿" isAccent />
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1: AI vs Human */}
            <StatCard
              label="AI รองรับได้มากกว่าทีม"
              value={`${calc.aiVsHumanMultiplier.toLocaleString()}x`}
              desc={`ทีม ${staffCount} คน รองรับได้ ~${Math.round(calc.humanCapacityDaily).toLocaleString()} เคส/วัน — AI รับได้ทั้งหมด`}
              icon={<Users size={20} />}
              color={activeTier.color}
              bg={activeTier.bg}
              border={activeTier.border}
            />

            {/* Card 2: Cost Saved */}
            <StatCard
              label="ลดต้นทุนได้/เดือน"
              value={`฿${calc.monthlySaving.toLocaleString()}`}
              desc={`ต้นทุนคน ฿${calc.totalHumanCostMonthly.toLocaleString()} → ระบบ ฿${aiMonthlyFee.toLocaleString()}`}
              icon={<BarChart3 size={20} />}
              color="text-emerald-400"
              bg="bg-emerald-500/10"
              border="border-emerald-500/20"
              isPositive
            />

            {/* Card 3: Hours Recovered */}
            <StatCard
              label="เวลาที่ทีมได้คืน/เดือน"
              value={`${calc.hoursRecoveredMonthly.toLocaleString()} ชม.`}
              desc={`เวลาที่ไม่ต้องเสียไปกับการตอบ ${(queriesPerDay * 22).toLocaleString()} เคส/เดือน`}
              icon={<Clock size={20} />}
              color="text-violet-400"
              bg="bg-violet-500/10"
              border="border-violet-500/20"
            />

            {/* Hero card: Yearly Saving */}
            <div className={`md:col-span-3 glass-card p-10 rounded-[32px] border ${activeTier.border} bg-gradient-to-br ${activeTier.bg.replace('bg-', 'from-').replace('/10', '/[0.04]')} to-transparent relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} className={activeTier.color} />
              </div>
              <div className="relative z-10">
                <p className={`${activeTier.color} text-sm font-black uppercase tracking-[0.4em] mb-4`}>กำไรและต้นทุนที่ประหยัดได้ต่อปี</p>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-6xl font-black text-white tracking-tighter">
                    {calc.totalYearlySaving.toLocaleString()}
                  </span>
                  <span className={`text-2xl font-bold ${activeTier.color} italic`}>฿ / ปี</span>
                </div>
                <p className="text-gray-500 font-medium italic">คาดการณ์ผลประโยชน์รวม (ประหยัดต้นทุน + รายรับที่เพิ่มขึ้น)</p>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">ระยะเวลาคืนทุน</span>
                  <div className="text-2xl font-black text-white italic">
                    {calc.breakEvenMonth > 0 ? `${calc.breakEvenMonth.toFixed(1)}` : '< 1'}
                    <span className="text-sm text-gray-400 not-italic uppercase ml-1">เดือน</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">ROI</span>
                  <div className="text-2xl font-black text-emerald-400 italic">
                    {Math.round(calc.roi).toLocaleString()}%
                    <span className="text-sm text-gray-400 not-italic uppercase ml-1">ต่อปี</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">ทำงานต่อเนื่อง</span>
                  <div className="text-2xl font-black text-white italic">24/7<span className="text-sm text-gray-400 not-italic uppercase ml-1">ไม่หยุด</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Strategic Comparison ─── */}
      <section id="retrieval">
        <FeaturesDashboard features={simulator.features} comparisonRows={simulator.comparisonRows} />
      </section>
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────────────── */

function SliderGroup({ label, value, onChange, min, max, step = 1, unit, isAccent = false }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{label}</label>
        <span className={`text-sm font-black ${isAccent ? 'text-cyber-blue' : 'text-white'}`}>
          {value.toLocaleString()}{unit}
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
    <div className={`glass-card p-7 rounded-[28px] border ${border} ${bg} relative group`}>
      <div className="flex justify-between items-start mb-5">
        <div className={`p-2.5 rounded-xl bg-white/5 ${color}`}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
        <div className={`text-3xl font-black ${isPositive ? 'text-emerald-400' : 'text-white'}`}>{value}</div>
        <p className="text-xs text-gray-600 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
