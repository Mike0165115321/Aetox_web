'use client';
import React, { useState } from 'react';
import { RotateCcw, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { useAutomationRoi, workloadConfig, type Complexity } from '@/components/simulators/automation/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

export default function AutomationSimulatorHome({ dict }: { dict: any }) {
  const [current, setCurrent] = useState(0);
  const { currency, exchangeRate } = useCurrency();
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [volume, setVolume] = useState(10000);
  const [staffCount, setStaffCount] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(120);
  const [unitCostManual, setUnitCostManual] = useState(25);
  const [botPrice, setBotPrice] = useState(35000);
  const [maintCost, setMaintCost] = useState(2500);

  const calc = useAutomationRoi({
    volume,
    hourlyRate,
    unitCostManual,
    botPrice,
    maintCost,
    complexity,
    timeframe: 12,
    currency,
    exchangeRate
  });

  if (!dict || !dict.levels) {
    return (
      <div className="w-full p-20 text-center bg-aetox-surface-lowest/80 backdrop-blur-xl rounded-[40px] border border-aetox-border">
        <p className="text-aetox-text-soft animate-pulse font-bold tracking-widest uppercase">Initializing Simulator...</p>
      </div>
    );
  }

  const updateComplexity = (lvl: Complexity) => {
    const cfg = workloadConfig[lvl];
    setComplexity(lvl);
    setVolume(cfg.defaultVolume);
    setStaffCount(cfg.defaultStaff);
    if (currency === 'USD') {
      setHourlyRate(Math.round(cfg.defaultHourlyRate / exchangeRate));
      setUnitCostManual(Math.round(cfg.defaultUnitCost / exchangeRate));
      setBotPrice(Math.round(cfg.defaultBotPrice / exchangeRate / 100) * 100);
      setMaintCost(Math.round(cfg.defaultMaint / exchangeRate / 10) * 10);
    } else {
      setHourlyRate(cfg.defaultHourlyRate);
      setUnitCostManual(cfg.defaultUnitCost);
      setBotPrice(cfg.defaultBotPrice);
      setMaintCost(cfg.defaultMaint);
    }
  };

  const formatMoney = (value: number, showLabel = true, short = true) => {
    const symbol = currency === 'USD' ? '$' : '฿';
    let result = '';
    if (value >= 1000000 && short) {
      result = `${symbol}${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000 && short) {
      result = `${symbol}${(value / 1000).toFixed(1)}K`;
    } else {
      result = `${symbol}${Math.round(value).toLocaleString()}`;
    }
    return showLabel ? result : result;
  };

  return (
    <div className="w-full bg-aetox-surface-lowest/80 backdrop-blur-xl rounded-[24px] md:rounded-[40px] border border-aetox-border overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-5 md:px-8 py-5 md:py-6 border-b border-aetox-border bg-aetox-surface-low/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-aetox-text-main flex items-center justify-center md:justify-start gap-3">
            <TrendingUp size={20} className="text-aetox-accent" />
            {dict.title}
          </h3>
          <p className="text-[10px] md:text-xs text-aetox-text-soft uppercase tracking-widest mt-1">{dict.subTitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <CurrencySwitcher />
          <button onClick={() => updateComplexity('medium')} className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
            <RotateCcw size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: Inputs */}
        <div className="lg:w-[42%] p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5 space-y-8 md:space-y-10">
          <section className="space-y-4">
            <h4 className="text-[10px] md:text-[11px] font-bold text-aetox-text-soft uppercase tracking-[0.2em] border-l-4 border-aetox-accent pl-4">
              {dict.workloadTitle}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                const active = complexity === lvl;
                const cfg = workloadConfig[lvl];
                const d = dict.levels.find((l: any) => l.id === lvl);
                return (
                  <button 
                    key={lvl} 
                    onClick={() => updateComplexity(lvl)}
                    className={`flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl text-left transition-all border ${active ? 'bg-aetox-accent-subtle border-aetox-accent/40 text-aetox-text-main' : 'bg-aetox-surface border-transparent text-aetox-text-soft hover:bg-aetox-surface-high'}`}
                  >
                    <span className={active ? 'text-aetox-accent' : ''}><SimulatorIcon name={cfg.icon} size={18} /></span>
                    <div>
                      <p className="text-sm font-bold">{d?.label || cfg.label}</p>
                      <p className="text-[10px] opacity-50 uppercase tracking-tight">{d?.sublabel || cfg.sublabel}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <h4 className="text-[10px] md:text-[11px] font-bold text-aetox-text-soft uppercase tracking-[0.2em] border-l-4 border-aetox-accent pl-4">
              {dict.params.title}
            </h4>
            <div className="space-y-6 md:space-y-8">
              <SliderGroup label={dict.params.volume} min={100} max={50000} step={100} value={volume} onChange={setVolume} accent="accent-aetox-accent" displayValue={volume.toLocaleString()} />
              <SliderGroup label={dict.params.staff} min={1} max={20} step={1} value={staffCount} onChange={setStaffCount} accent="accent-indigo-400" displayValue={staffCount.toString()} />
              <SliderGroup label={dict.params.hourlyRate} min={50} max={500} step={10} value={hourlyRate} onChange={setHourlyRate} accent="accent-rose-400" displayValue={formatMoney(hourlyRate)} />
              <SliderGroup label={dict.params.botPrice} min={5000} max={100000} step={500} value={botPrice} onChange={setBotPrice} accent="accent-aetox-accent" displayValue={formatMoney(botPrice)} />
            </div>
          </section>
        </div>

        {/* Right: Results */}
        <div className="lg:w-[58%] p-5 md:p-8 bg-black/20 space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <KpiCard 
              label={dict.kpis.monthlySaving} 
              valInCurrency={calc.monthlySaving} 
              accent 
              color="text-emerald-400" 
              detail="กำไรสุทธิต่อเดือนหลังจากหักค่าบำรุงรักษาระบบแล้ว" 
              currency={currency} 
              formatMoney={formatMoney} 
              unitLabel="ประหยัดได้" 
            />
            <div className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col justify-between">
              <p className="text-[10px] md:text-[11px] text-gray-500 font-bold mb-2 md:mb-3 tracking-wide uppercase">{dict.kpis.payback}</p>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-emerald-400">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                <p className="text-[11px] md:text-sm text-gray-500 font-bold uppercase">{dict.kpis.paybackUnit}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 rounded-[24px] md:rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-3 md:space-y-4">
              <p className="text-[10px] md:text-xs font-bold text-rose-400 uppercase tracking-widest">{dict.comparison.manual}</p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-xs md:text-sm"><span className="text-gray-500">{dict.comparison.totalHours}</span><span className="text-white font-bold">{calc.manualHours.toFixed(0)} ชม.</span></div>
                <div className="flex justify-between text-xs md:text-sm border-t border-white/5 pt-2 md:pt-3"><span className="text-gray-500">{dict.comparison.totalCost}</span><span className="text-rose-400 font-bold">{formatMoney(calc.totalBefore)}</span></div>
              </div>
            </div>
            <div className="p-5 md:p-6 rounded-[24px] md:rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-3 md:space-y-4">
              <p className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-widest">{dict.comparison.bot}</p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-xs md:text-sm"><span className="text-gray-500">{dict.comparison.invest}</span><span className="text-white font-bold">{formatMoney(botPrice)}</span></div>
                <div className="flex justify-between text-xs md:text-sm border-t border-white/5 pt-2 md:pt-3"><span className="text-gray-500">{dict.comparison.maint}</span><span className="text-emerald-400 font-bold">{formatMoney(maintCost)}/ด.</span></div>
              </div>
            </div>
          </div>

          {/* Benchmark */}
          <div className="p-6 md:p-8 rounded-[24px] md:rounded-3xl bg-white/[0.03] border border-white/5 space-y-5 md:space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none"><Zap size={80} /></div>
            <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-white/5 pb-3 md:pb-4">{dict.benchmark.title}</h4>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-end text-xs md:text-sm"><span className="font-bold text-white">{dict.benchmark.botLabel}</span><span className="font-bold text-emerald-400">{calc.botHours.toFixed(1)} {dict.benchmark.unitTime}</span></div>
                <div className="w-full h-2.5 md:h-3 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-1000" style={{ width: `${calc.botBarPct}%` }} /></div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end text-xs md:text-sm"><span className="font-bold text-gray-500">{dict.benchmark.manualLabel}</span><span className="font-bold text-rose-400">{calc.manualHours.toFixed(1)} {dict.benchmark.unitTime}</span></div>
                <div className="w-full h-2.5 md:h-3 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-full bg-rose-500/50" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
