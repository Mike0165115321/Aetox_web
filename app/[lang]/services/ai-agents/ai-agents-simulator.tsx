'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Rocket, TrendingUp, Building2,
  ShieldCheck, Zap, Plus, Clock,
  Users, BarChart3
} from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { useRoiCalculator } from './hooks/use-roi-calculator';
import { useSimulatorState } from './hooks/use-simulator-state';
import { FeaturesDashboard } from './components/simulator-components';
import SliderGroup from '@/components/ui/simulator/SliderGroup';
import StatCard from '@/components/ui/simulator/StatCard';

// ─── Tier Definitions ──────────────────────────────────────────────
const TIERS = [
  {
    id: 'personal',
    icon: User,
    color: 'text-aetox-accent',
    glow: 'shadow-aetox-glow',
    border: 'border-aetox-accent/30',
    bg: 'bg-aetox-accent-subtle',
    preset: { queriesPerDay: 50, avgSalary: 25000, staffCount: 1, minutesPerCase: 10, valuePerCase: 200, aiMonthlyFee: 5000, setupCost: 15000 },
  },
  {
    id: 'early',
    icon: Rocket,
    color: 'text-aetox-accent',
    glow: 'shadow-aetox-glow',
    border: 'border-aetox-accent/30',
    bg: 'bg-aetox-accent-subtle',
    preset: { queriesPerDay: 500, avgSalary: 30000, staffCount: 3, minutesPerCase: 15, valuePerCase: 800, aiMonthlyFee: 15000, setupCost: 45000 },
  },
  {
    id: 'growth',
    icon: TrendingUp,
    color: 'text-emerald-500',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    preset: { queriesPerDay: 3000, avgSalary: 35000, staffCount: 8, minutesPerCase: 12, valuePerCase: 1500, aiMonthlyFee: 35000, setupCost: 120000 },
  },
  {
    id: 'enterprise',
    icon: Building2,
    color: 'text-violet-500',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    preset: { queriesPerDay: 20000, avgSalary: 45000, staffCount: 25, minutesPerCase: 10, valuePerCase: 3000, aiMonthlyFee: 80000, setupCost: 350000 },
  },
];

export default function AiAgentsSimulator({ dict, compact = false }: { dict: any, compact?: boolean }) {
  const { currency, formatCurrency, exchangeRate } = useCurrency();
  const simulator = dict.simulator;
  const [tierId, setTierId] = useState('early');
  
  const activeTier = TIERS.find(t => t.id === tierId)!;

  // Use modular state hook
  const { params, setters } = useSimulatorState({ tierId, tiers: TIERS, currency, exchangeRate });
  
  const {
    queriesPerDay, avgSalary, staffCount, minutesPerCase,
    aiMonthlyFee, setupCost, valuePerCase, dropRate
  } = params;

  const {
    setQueriesPerDay, setAvgSalary, setStaffCount, setMinutesPerCase,
    setAiMonthlyFee, setSetupCost, setValuePerCase
  } = setters;

  const calc = useRoiCalculator({
    useCase: tierId, queriesPerDay, avgSalary, staffCount,
    minutesPerCase, aiMonthlyFee, setupCost, dropRate, valuePerCase,
  });

  function replaceParams(text: string, params: any) {
    if (!text) return "";
    return text.replace(/{{(\w+)}}/g, (_, key) => params[key] || "");
  }

  return (
    <div className={compact ? 'space-y-8' : 'space-y-24'}>
      {/* ─── ROI Calculator ─── */}
      <div className="space-y-8">
        {/* Header */}
        {!compact && (
          <div className="space-y-3 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold text-aetox-text-main leading-tight tracking-tight">
              {simulator.title.white} <span className="text-aetox-accent drop-shadow-aetox-glow">{simulator.title.accent}</span>
            </h2>
            <p className="text-aetox-text-soft max-w-xl text-base font-medium leading-relaxed border-l-2 border-aetox-accent/30 pl-5">{simulator.description}</p>
          </div>
        )}

        {/* ─── Tier Selector ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const active = tierId === tier.id;
            const dictTierItem = simulator.tiers.find((t: any) => t.id === tier.id);
            return (
              <motion.button
                key={tier.id}
                onClick={() => setTierId(tier.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                  active
                    ? `${tier.bg} ${tier.border} shadow-lg ${tier.glow}`
                    : 'bg-aetox-surface-lowest/50 border-aetox-border hover:border-aetox-accent/40'
                }`}
              >
                <div className={`p-2 rounded-xl ${active ? tier.bg : 'bg-aetox-surface-low'} ${active ? tier.color : 'text-aetox-text-muted'}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold truncate ${active ? 'text-aetox-text-main' : 'text-aetox-text-soft'}`}>{dictTierItem?.label || tier.id}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-tight ${active ? tier.color : 'text-aetox-text-muted'}`}>{dictTierItem?.sublabel || dictTierItem?.sub || tier.id}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Controls Panel */}
          <div className="lg:col-span-4 aetox-card p-6 rounded-3xl border border-aetox-border space-y-6 bg-aetox-surface-lowest/50 font-sans shadow-xl">
            <div className="flex justify-between items-center pb-4 border-b border-aetox-border">
              <span className="text-[10px] font-bold text-aetox-text-muted uppercase tracking-widest">Currency Setting</span>
              <CurrencySwitcher />
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-aetox-border">
                <span className="text-[10px] font-bold text-aetox-text-muted tracking-widest uppercase">{simulator.labels.info}</span>
                <Plus size={12} className={activeTier.color + ' opacity-50'} />
              </div>

              <SliderGroup label={simulator.labels.queries}     value={queriesPerDay}  onChange={setQueriesPerDay}  min={10}    max={50000} step={10}   unit="" />
              <SliderGroup label={simulator.labels.staff}       value={staffCount}     onChange={setStaffCount}     min={1}     max={100}   step={1}    unit={` ${simulator.labels.unitStaff || 'คน'}`} />
              <SliderGroup 
                label={simulator.labels.salary} 
                value={avgSalary} 
                onChange={setAvgSalary} 
                min={currency === 'THB' ? 15000 : 500} 
                max={currency === 'THB' ? 200000 : 6000} 
                step={currency === 'THB' ? 1000 : 50} 
                unit="" 
                displayValue={formatCurrency(avgSalary)}
              />
              <SliderGroup label={simulator.labels.time}       value={minutesPerCase} onChange={setMinutesPerCase} min={1}     max={120}   step={1}    unit={` ${simulator.labels.unitTime || 'นาที'}`} />
              <SliderGroup 
                label={simulator.labels.value} 
                value={valuePerCase} 
                onChange={setValuePerCase} 
                min={0} 
                max={currency === 'THB' ? 10000 : 300} 
                step={currency === 'THB' ? 100 : 5} 
                unit="" 
                displayValue={formatCurrency(valuePerCase)}
              />
            </div>

            <div className="pt-5 border-t border-aetox-border space-y-5">
              <div className={`flex items-center justify-between mb-2 ${activeTier.color}`}>
                <span className="text-[10px] font-bold uppercase tracking-wider">{simulator.labels.aetoxBudget}</span>
                <Zap size={12} />
              </div>
              <SliderGroup 
                label={simulator.labels.setup} 
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
                label={simulator.labels.monthly} 
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
            <StatCard
              label={simulator.labels.capacity}
              value={`${calc.aiVsHumanMultiplier.toLocaleString()} ${simulator.labels.unitMultiplier || 'เท่า'}`}
              desc={replaceParams(simulator.labels.capacityDesc, { staffCount, humanCapacity: Math.round(calc.humanCapacityDaily).toLocaleString() })}
              icon={<Users size={18} />}
              color={activeTier.color}
              bg={activeTier.bg}
              border={activeTier.border}
            />
            <StatCard
              label={simulator.labels.monthlySaving}
              value={formatCurrency(calc.monthlySaving)}
              desc={replaceParams(simulator.labels.monthlySavingDesc, { humanCost: formatCurrency(calc.totalHumanCostMonthly) })}
              icon={<BarChart3 size={18} />}
              color="text-emerald-400"
              bg="bg-emerald-500/10"
              border="border-emerald-500/20"
              isPositive
            />
            <StatCard
              label={simulator.labels.hoursRecovered}
              value={`${calc.hoursRecoveredMonthly.toLocaleString()} ${simulator.labels.unitHour || 'ชม.'}`}
              desc={simulator.labels.hoursRecoveredDesc}
              icon={<Clock size={18} />}
              color="text-violet-400"
              bg="bg-violet-500/10"
              border="border-violet-500/20"
            />

             {/* Hero card: Yearly Saving */}
            <div className={`md:col-span-3 aetox-card p-8 rounded-[32px] border ${activeTier.border} bg-gradient-to-br ${activeTier.bg.replace('bg-', 'from-').replace('/10', '/[0.05]')} to-transparent relative overflow-hidden font-sans shadow-2xl transition-all hover:scale-[1.01]`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} className={activeTier.color} />
              </div>
              <div className="relative z-10">
                <p className={`${activeTier.color} text-xs font-bold mb-3 uppercase tracking-widest`}>{simulator.labels.yearlySaving}</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl font-bold text-aetox-text-main tracking-tighter">
                    {formatCurrency(calc.totalYearlySaving).replace('฿', '').replace('$', '')}
                  </span>
                  <span className={`text-2xl font-bold ${activeTier.color}`}>
                    {currency === 'THB' ? '฿ / ปี' : 'USD / Year'}
                  </span>
                </div>
                <p className="text-aetox-text-soft font-medium text-sm border-l-2 border-aetox-accent/20 pl-4">{simulator.labels.yearlySavingDesc}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-aetox-border/50 grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-aetox-text-muted uppercase tracking-wider">{simulator.labels.breakEvenLabel}</span>
                  <div className="text-2xl font-bold text-aetox-text-main tracking-tight">
                    {calc.breakEvenMonth > 0 ? `${calc.breakEvenMonth.toFixed(1)}` : (simulator.labels.instantly || 'ทันที')}
                    <span className="text-xs text-aetox-text-muted font-bold ml-1 uppercase">{calc.breakEvenMonth > 0 ? (simulator.labels.unitMonth || 'เดือน') : ''}</span>
                  </div>
                </div>
                 <div className="space-y-1">
                  <span className="text-[11px] font-bold text-aetox-text-muted uppercase tracking-wider">{simulator.labels.roiPerYear || 'ROI ต่อปี'}</span>
                  <div className="text-2xl font-bold text-emerald-400 tracking-tight">
                    {Math.round(calc.roi).toLocaleString()}%
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-aetox-text-muted uppercase tracking-wider">{simulator.labels.status || 'สถานะ'}</span>
                  <div className="text-2xl font-bold text-aetox-text-main tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 24/7
                  </div>
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
