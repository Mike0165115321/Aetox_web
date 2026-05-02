'use client';
import React, { useState } from 'react';
import { RotateCcw, Zap, TrendingUp } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { useAutomationRoi, workloadConfig, type Complexity } from '@/components/simulators/automation/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

export default function AutomationSimulatorHome({ dict }: { dict: any }) {
  const { currency, exchangeRate } = useCurrency();
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [volume, setVolume] = useState(10000);
  const [staffCount, setStaffCount] = useState(6);
  
  // เก็บค่าเป็น THB เสมอ (Base Currency) เพื่อความเสถียรของ Slider
  const [hourlyRateTHB, setHourlyRateTHB] = useState(120);
  const [unitCostManualTHB, setUnitCostManualTHB] = useState(5);
  const [botPriceTHB, setBotPriceTHB] = useState(35000);
  const [maintCostTHB, setMaintCostTHB] = useState(2500);

  const calc = useAutomationRoi({
    volume,
    hourlyRateTHB,
    unitCostManualTHB,
    botPriceTHB,
    maintCostTHB,
    complexity,
    timeframe: 12,
    currency,
    exchangeRate
  });

  const updateComplexity = (lvl: Complexity) => {
    const cfg = workloadConfig[lvl];
    setComplexity(lvl);
    setVolume(cfg.defaultVolume);
    setStaffCount(cfg.defaultStaff);
    setHourlyRateTHB(cfg.defaultHourlyRate);
    setUnitCostManualTHB(cfg.defaultUnitCost);
    setBotPriceTHB(cfg.defaultBotPrice);
    setMaintCostTHB(cfg.defaultMaint);
  };

  const formatMoney = (value: number, showLabel = true, short = true) => {
    const symbol = currency === 'USD' ? '$' : '฿';
    if (value >= 1000000 && short) return `${symbol}${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000 && short) return `${symbol}${(value / 1000).toFixed(1)}K`;
    return `${symbol}${Math.round(value).toLocaleString()}`;
  };

  // ตัวช่วยแปลงค่าสำหรับ "แสดงผล" เท่านั้น (ไม่เกี่ยวกับ Logic ของ Slider)
  const toCurrentDisplay = (valTHB: number) => currency === 'USD' ? valTHB / exchangeRate : valTHB;

  if (!dict || !dict.levels) return null;

  return (
    <div className="w-full bg-aetox-surface-lowest/80 backdrop-blur-xl rounded-[24px] md:rounded-[40px] border border-aetox-border overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-5 md:px-8 py-5 md:py-6 border-b border-aetox-border bg-aetox-surface-low/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-aetox-text-main flex items-center justify-center md:justify-start gap-3">
            <TrendingUp size={20} className="text-aetox-accent" />
            {dict.title}
          </h3>
          <p className="text-fluid-label text-aetox-text-soft uppercase tracking-widest mt-1">{dict.subTitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <CurrencySwitcher />
          <button onClick={() => updateComplexity('medium')} className="p-2 bg-aetox-surface border border-aetox-border hover:bg-aetox-surface-high rounded-xl transition-all">
            <RotateCcw size={14} className="text-aetox-text-muted" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: Inputs */}
        <div className="lg:w-[42%] p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-aetox-border space-y-8 md:space-y-10">
          <section className="space-y-4">
            <h4 className="text-fluid-label font-bold text-aetox-text-soft uppercase tracking-[0.2em] border-l-4 border-aetox-accent pl-4">
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
                      <p className="text-fluid-sm font-bold">{d?.label || cfg.label}</p>
                      <p className="text-fluid-label opacity-50 uppercase tracking-tight">{d?.sublabel || cfg.sublabel}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <h4 className="text-fluid-label font-bold text-aetox-text-soft uppercase tracking-[0.2em] border-l-4 border-aetox-accent pl-4">
              {dict.params.title}
            </h4>
            <div className="space-y-6 md:space-y-8">
              {/* Slider ทุตัวใช้หน่วย THB เสมอเพื่อให้ค่าไม่กระโดดตอนสลับสกุลเงิน */}
              <SliderGroup label={dict.params.volume} min={100} max={50000} step={100} value={volume} onChange={setVolume} accent="accent-aetox-accent" displayValue={volume.toLocaleString()} />
              <SliderGroup label={dict.params.staff} min={1} max={20} step={1} value={staffCount} onChange={setStaffCount} accent="accent-aetox-accent" displayValue={staffCount.toString()} />
              
              <SliderGroup 
                label={dict.params.hourlyRate} 
                min={50} max={500} step={10} 
                value={hourlyRateTHB} 
                onChange={setHourlyRateTHB} 
                accent="accent-aetox-accent" 
                displayValue={formatMoney(toCurrentDisplay(hourlyRateTHB))} 
              />
              
              <SliderGroup 
                label={dict.params.botPrice} 
                min={5000} max={150000} step={1000} 
                value={botPriceTHB} 
                onChange={setBotPriceTHB} 
                accent="accent-aetox-accent" 
                displayValue={formatMoney(toCurrentDisplay(botPriceTHB))} 
              />
            </div>
          </section>
        </div>

        {/* Right: Results */}
        <div className="lg:w-[58%] p-5 md:p-8 bg-aetox-surface-lowest/50 space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <KpiCard 
              label={dict.kpis.monthlySaving} 
              valInCurrency={calc.monthlySaving} 
              accent 
              color="text-emerald-400" 
              detail="กำไรสุทธิต่อเดือนหลังหักค่าใช้จ่ายทั้งหมด" 
              currency={currency} 
              formatMoney={formatMoney} 
              unitLabel="ประหยัดได้" 
            />
            <div className="p-5 md:p-6 rounded-2xl border border-aetox-border bg-aetox-surface-lowest/50 flex flex-col justify-between">
              <p className="text-fluid-label text-aetox-text-muted font-bold mb-2 md:mb-3 tracking-wide uppercase">{dict.kpis.payback}</p>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-emerald-400">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                <p className="text-fluid-sm text-aetox-text-muted font-bold uppercase">{dict.kpis.paybackUnit}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 rounded-[24px] md:rounded-3xl bg-aetox-error-surface border border-aetox-error/20 space-y-3 md:space-y-4 shadow-sm">
              <p className="text-fluid-label font-bold text-aetox-error uppercase tracking-widest">{dict.comparison.manual}</p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-fluid-sm"><span className="text-aetox-text-muted">{dict.comparison.totalHours}</span><span className="text-aetox-text-main font-bold">{calc.manualHours.toFixed(0)} ชม.</span></div>
                <div className="flex justify-between text-fluid-sm border-t border-aetox-border pt-2 md:pt-3"><span className="text-aetox-text-muted">{dict.comparison.totalCost}</span><span className="text-aetox-error font-bold">{formatMoney(calc.totalBefore)}</span></div>
              </div>
            </div>
            <div className="p-5 md:p-6 rounded-[24px] md:rounded-3xl bg-aetox-accent-subtle border border-aetox-accent/20 space-y-3 md:space-y-4 shadow-sm">
              <p className="text-fluid-label font-bold text-aetox-accent uppercase tracking-widest">{dict.comparison.bot}</p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-fluid-sm"><span className="text-aetox-text-muted">{dict.comparison.invest}</span><span className="text-aetox-text-main font-bold">{formatMoney(calc.botPrice)}</span></div>
                <div className="flex justify-between text-fluid-sm border-t border-aetox-border pt-2 md:pt-3"><span className="text-aetox-text-muted">{dict.comparison.maint}</span><span className="text-aetox-accent font-bold">{formatMoney(calc.maintCost)}/ด.</span></div>
              </div>
            </div>
          </div>

          {/* Benchmark */}
          <div className="p-6 md:p-8 rounded-[24px] md:rounded-3xl bg-aetox-surface-lowest/50 border border-aetox-border space-y-5 md:space-y-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none text-aetox-accent"><Zap size={80} /></div>
            <h4 className="text-fluid-label font-bold text-aetox-text-muted uppercase tracking-widest border-b border-aetox-border pb-3 md:pb-4">{dict.benchmark.title}</h4>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-end text-fluid-sm"><span className="font-bold text-aetox-text-main uppercase tracking-widest">{dict.benchmark.botLabel}</span><span className="font-bold text-aetox-accent">{calc.botHours.toFixed(1)} {dict.benchmark.unitTime}</span></div>
                <div className="w-full h-2.5 md:h-3 bg-aetox-surface-high rounded-full overflow-hidden"><div className="h-full bg-aetox-accent shadow-aetox-glow transition-all duration-1000" style={{ width: `${calc.botBarPct}%` }} /></div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end text-fluid-sm"><span className="font-bold text-aetox-text-muted uppercase tracking-widest">{dict.benchmark.manualLabel}</span><span className="font-bold text-aetox-error">{calc.manualHours.toFixed(1)} {dict.benchmark.unitTime}</span></div>
                <div className="w-full h-2.5 md:h-3 bg-aetox-surface-high rounded-full overflow-hidden"><div className="h-full w-full bg-aetox-error" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
