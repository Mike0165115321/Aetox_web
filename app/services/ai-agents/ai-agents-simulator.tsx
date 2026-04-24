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
    label: 'ใช้งานในทีมขนาดเล็ก',
    sub: '1-3 คน (~50 queries/วัน)',
    icon: User,
    color: 'text-sky-400',
    glow: 'shadow-sky-500/20',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    preset: { queriesPerDay: 50, avgSalary: 25000, staffCount: 1, minutesPerCase: 10, valuePerCase: 200, aiMonthlyFee: 5000, setupCost: 15000 },
  },
  {
    id: 'early',
    label: 'ระดับเริ่มต้น (Early Launch)',
    sub: 'Startup (~500 queries/วัน)',
    icon: Rocket,
    color: 'text-cyber-blue',
    glow: 'shadow-cyber-glow/20',
    border: 'border-cyber-blue/30',
    bg: 'bg-cyber-blue/10',
    preset: { queriesPerDay: 500, avgSalary: 30000, staffCount: 3, minutesPerCase: 15, valuePerCase: 800, aiMonthlyFee: 15000, setupCost: 45000 },
  },
  {
    id: 'growth',
    label: 'ระดับขยายตัว (Growth)',
    sub: 'SME / ธุรกิจโต (~3,000 queries/วัน)',
    icon: TrendingUp,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    preset: { queriesPerDay: 3000, avgSalary: 35000, staffCount: 8, minutesPerCase: 12, valuePerCase: 1500, aiMonthlyFee: 35000, setupCost: 120000 },
  },
  {
    id: 'enterprise',
    label: 'แพลตฟอร์มระดับองค์กร',
    sub: 'Enterprise (~20,000 queries/วัน)',
    icon: Building2,
    color: 'text-violet-400',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    preset: { queriesPerDay: 20000, avgSalary: 45000, staffCount: 25, minutesPerCase: 10, valuePerCase: 3000, aiMonthlyFee: 80000, setupCost: 350000 },
  },
];

export default function AiAgentsSimulator({ dict }: { dict: any }) {
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

  // Sync presets on tier change
  useEffect(() => {
    const p = activeTier.preset;
    setQueriesPerDay(p.queriesPerDay);
    setAvgSalary(p.avgSalary);
    setStaffCount(p.staffCount);
    setMinutesPerCase(p.minutesPerCase);
    setValuePerCase(p.valuePerCase);
    setAiMonthlyFee(p.aiMonthlyFee);
    setSetupCost(p.setupCost);
  }, [tierId]);

  const calc = useRoiCalculator({
    useCase: tierId, queriesPerDay, avgSalary, staffCount,
    minutesPerCase, aiMonthlyFee, setupCost, dropRate, valuePerCase,
  });

  return (
    <div className="space-y-32">
      {/* ─── ROI Calculator ─── */}
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {simulator.title.white}<br />
            <span className="text-cyber-blue">{simulator.title.accent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg font-medium">{simulator.description}</p>
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
                className={`relative flex flex-col items-start gap-3 p-6 rounded-[24px] border transition-all text-left ${
                  active
                    ? `${tier.bg} ${tier.border} shadow-lg ${tier.glow}`
                    : 'bg-white/[0.03] border-white/5 hover:border-white/15'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${active ? tier.bg : 'bg-white/5'} ${active ? tier.color : 'text-gray-500'}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className={`text-[15px] font-bold ${active ? 'text-white' : 'text-gray-400'}`}>{tier.label}</p>
                  <p className={`text-[12px] font-medium mt-1 ${active ? tier.color : 'text-gray-600'}`}>{tier.sub}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-4 glass-card p-8 rounded-[32px] border border-white/10 space-y-8 bg-black/40">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-sm font-bold text-gray-400 tracking-wide">ข้อมูลการดำเนินงานจริง</span>
                <Plus size={14} className={activeTier.color + ' opacity-60'} />
              </div>

              <SliderGroup label="Queries ที่ต้องจัดการ / วัน"     value={queriesPerDay}  onChange={setQueriesPerDay}  min={10}    max={50000} step={10}   unit="" />
              <SliderGroup label="จำนวนพนักงานตอบคำถาม"       value={staffCount}     onChange={setStaffCount}     min={1}     max={100}   step={1}    unit=" คน" />
              <SliderGroup label="เงินเดือนพนักงานเฉลี่ย"            value={avgSalary}      onChange={setAvgSalary}      min={15000} max={150000} step={1000} unit=" ฿" />
              <SliderGroup label="เวลาที่ใช้ต่อ 1 เคส (นาที)"       value={minutesPerCase} onChange={setMinutesPerCase} min={1}     max={120}   step={1}    unit=" นาที" />
              <SliderGroup label="มูลค่าทางธุรกิจต่อ 1 เคส"         value={valuePerCase}   onChange={setValuePerCase}   min={0}     max={10000} step={100}  unit=" ฿" />
            </div>
            
            <div className="pt-6 border-t border-white/5 space-y-6">
              <div className={`flex items-center justify-between mb-4 ${activeTier.color}`}>
                <span className="text-xs font-bold uppercase tracking-wider">งบประมาณระบบ AETOX</span>
                <Zap size={14} />
              </div>
              <SliderGroup label="ค่าติดตั้งระบบ (Setup Fee)" value={setupCost} onChange={setSetupCost} min={0} max={1000000} step={5000} unit=" ฿" isAccent />
              <SliderGroup label="ค่าบริการรายเดือน" value={aiMonthlyFee} onChange={setAiMonthlyFee} min={5000} max={200000} step={5000} unit=" ฿" isAccent />
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1: AI vs Human */}
            <StatCard
              label="ศักยภาพเมื่อเทียบกับทีม"
              value={`${calc.aiVsHumanMultiplier.toLocaleString()} เท่า`}
              desc={`ทีม ${staffCount} คน รองรับได้ ~${Math.round(calc.humanCapacityDaily).toLocaleString()} เคส/วัน แต่ AI รองรับได้ทันที`}
              icon={<Users size={20} />}
              color={activeTier.color}
              bg={activeTier.bg}
              border={activeTier.border}
            />

            {/* Card 2: Cost Saved */}
            <StatCard
              label="ลดต้นทุนดำเนินงาน/เดือน"
              value={`฿${calc.monthlySaving.toLocaleString()}`}
              desc={`เปลี่ยนต้นทุนแรงงาน ฿${calc.totalHumanCostMonthly.toLocaleString()} เป็นระบบอัตโนมัติที่เสถียรกว่า`}
              icon={<BarChart3 size={20} />}
              color="text-emerald-400"
              bg="bg-emerald-500/10"
              border="border-emerald-500/20"
              isPositive
            />

            {/* Card 3: Hours Recovered */}
            <StatCard
              label="เวลาที่ทีมได้รับคืน/เดือน"
              value={`${calc.hoursRecoveredMonthly.toLocaleString()} ชม.`}
              desc={`เวลาที่ทีมสามารถนำไปทำงานเชิงกลยุทธ์อื่น แทนการตอบคำถามซ้ำๆ`}
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
                <p className={`${activeTier.color} text-[15px] font-bold mb-4`}>ผลประโยชน์ที่ประหยัดได้ต่อปี (Annual Benefit)</p>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-6xl font-bold text-white tracking-tight">
                    {calc.totalYearlySaving.toLocaleString()}
                  </span>
                  <span className={`text-2xl font-bold ${activeTier.color}`}>฿ / ปี</span>
                </div>
                <p className="text-gray-400 font-medium text-base">คำนวณจากต้นทุนที่ลดได้รวมกับรายรับที่ระบบช่วยรักษาไว้ (Opportunity Loss Recovery)</p>
              </div>
              
              <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-[13px] font-bold text-gray-500">ระยะเวลาคืนทุน</span>
                  <div className="text-3xl font-bold text-white">
                    {calc.breakEvenMonth > 0 ? `${calc.breakEvenMonth.toFixed(1)}` : 'ทันที'}
                    <span className="text-[15px] text-gray-400 font-bold ml-1.5">{calc.breakEvenMonth > 0 ? 'เดือน' : ''}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[13px] font-bold text-gray-500">อัตราความคุ้มค่า (ROI)</span>
                  <div className="text-3xl font-bold text-emerald-400">
                    {Math.round(calc.roi).toLocaleString()}%
                    <span className="text-[15px] text-gray-400 font-bold ml-1.5">ต่อปี</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[13px] font-bold text-gray-500">สถานะระบบ</span>
                  <div className="text-3xl font-bold text-white">24/7<span className="text-[15px] text-gray-400 font-bold ml-1.5">ทำงานต่อเนื่อง</span></div>
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

function SliderGroup({ label, value, onChange, min, max, step = 1, unit, isAccent = false }: any) {
  return (
    <div className="space-y-3.5">
      <div className="flex justify-between items-center">
        <label className="text-[12px] font-bold text-gray-400 tracking-wide">{label}</label>
        <span className={`text-[15px] font-bold ${isAccent ? 'text-cyber-blue' : 'text-white'}`}>
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
    <div className={`glass-card p-8 rounded-[28px] border ${border} ${bg} relative group`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`p-2.5 rounded-xl bg-white/5 ${color}`}>{icon}</div>
      </div>
      <div className="space-y-1.5">
        <p className="text-[12px] font-bold text-gray-500 tracking-wide">{label}</p>
        <div className={`text-3xl font-bold ${isPositive ? 'text-emerald-400' : 'text-white'}`}>{value}</div>
        <p className="text-[13px] text-gray-400 font-medium leading-relaxed mt-2">{desc}</p>
      </div>
    </div>
  );
}
