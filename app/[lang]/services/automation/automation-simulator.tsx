'use client';
import React, { useState } from 'react';
import { RotateCcw, TrendingUp, Zap, BarChart3, Clock, Wallet } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

// Import extracted logic and components
import { useAutomationRoi, workloadConfig, type Complexity, type Timeframe } from '@/components/simulators/automation/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

const theme = {
  primary: 'text-aetox-accent',
  success: 'text-emerald-400',
  error: 'text-rose-400',
  botGrad: 'linear-gradient(to right,#059669,#34d399)',
  botGlow: '0 0 20px rgba(52,211,153,0.3)',
  botBorder: 'border-emerald-500/30',
  botBg: 'bg-emerald-500/10'
};

export default function AutomationSimulator({ dict }: { dict: any }) {
  const { currency, exchangeRate } = useCurrency();
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [timeframe, setTimeframe] = useState<Timeframe>(6);

  const [volume, setVolume] = useState(10000);
  const [staffCount, setStaffCount] = useState(6);
  
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
    timeframe,
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
    let result = '';
    if (value >= 1000000 && short) {
      result = `${symbol}${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000 && short) {
      result = `${symbol}${(value / 1000).toFixed(1)}K`;
    } else {
      result = `${symbol}${Math.round(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return showLabel ? `${result}` : result;
  };

  const toCurrentDisplay = (valTHB: number) => currency === 'USD' ? valTHB / exchangeRate : valTHB;
  const fmt = (n: number) => (n || 0).toLocaleString('th-TH', { maximumFractionDigits: 0 });

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-20">
      {/* PART 1: SIMULATOR & PARAMETERS — Refactored to use .aetox-card */}
      <div className="aetox-card overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-aetox-border bg-white/[0.02]">
          <div className="text-center md:text-left">
            <h2 className="text-fluid-h3 font-display leading-none mb-1 text-aetox-text-main">
              {dict.title.split(' — ')[0]} — <span className="text-aetox-accent">Automation Simulator</span>
            </h2>
            <p className="text-fluid-sm text-aetox-text-muted uppercase tracking-[0.2em]">{dict.subTitle}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* CONTROL PANEL — Refactored colors to use tokens */}
          <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-aetox-border p-6 sm:p-8 space-y-10 bg-aetox-surface-lowest">
            <div className="flex justify-between items-center pb-6 border-b border-aetox-border">
              <span className="text-fluid-sm text-aetox-text-muted uppercase tracking-[0.2em]">Currency Control</span>
              <div className="flex items-center gap-3">
                <CurrencySwitcher />
                <button onClick={() => updateComplexity('medium')} className="p-2 aetox-btn-glass"><RotateCcw size={14} /></button>
              </div>
            </div>
            
            <section className="space-y-5">
              <h3 className="text-fluid-sm text-aetox-text-soft border-l-4 border-aetox-accent pl-4 uppercase tracking-widest font-bold">{dict.workloadTitle}</h3>
              <div className="flex flex-col gap-3">
                {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                  const active = complexity === lvl;
                  const cfg = workloadConfig[lvl];
                  const dictLevel = dict.levels.find((l: any) => l.id === lvl);
                  return (
                    <button key={lvl} onClick={() => updateComplexity(lvl)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-fluid-sm font-bold transition-all duration-300 border text-left active:scale-95 ${active ? 'bg-aetox-accent/10 text-aetox-text-main border-aetox-accent/40 shadow-aetox-glow/10' : 'text-aetox-text-soft border-transparent bg-white/[0.01]'}`}>
                      <span className={active ? 'text-aetox-accent' : ''}><SimulatorIcon name={cfg.icon} size={20} /></span>
                      <div className="flex-1">
                        <p className="font-bold mb-0.5">{dictLevel?.label || cfg.label}</p>
                        <p className="text-[10px] opacity-50 font-bold uppercase tracking-tighter">{dictLevel?.sublabel || cfg.sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-fluid-sm font-bold text-aetox-text-soft border-l-4 border-aetox-accent pl-4 uppercase tracking-widest">{dict.params.title}</h3>
              <div className="grid grid-cols-1 gap-7">
                <SliderGroup label={dict.params.volume} min={100} max={100000} step={100} value={volume} onChange={setVolume} accent="accent-aetox-accent" displayValue={volume.toLocaleString()} />
                <SliderGroup label={dict.params.staff} min={1} max={30} step={1} value={staffCount} onChange={setStaffCount} accent="accent-indigo-400" displayValue={staffCount.toString()} />
                <SliderGroup label={dict.params.hourlyRate} min={50} max={500} step={10} value={hourlyRateTHB} onChange={setHourlyRateTHB} accent="accent-rose-400" displayValue={formatMoney(toCurrentDisplay(hourlyRateTHB))} />
                <SliderGroup label={dict.params.unitCost} min={0} max={500} step={5} value={unitCostManualTHB} onChange={setUnitCostManualTHB} accent="accent-amber-400" displayValue={formatMoney(toCurrentDisplay(unitCostManualTHB))} />
                <SliderGroup label={dict.params.botPrice} min={7500} max={150000} step={500} value={botPriceTHB} onChange={setBotPriceTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(botPriceTHB))} />
                <SliderGroup label={dict.params.maintCost} min={500} max={15000} step={100} value={maintCostTHB} onChange={setMaintCostTHB} accent="accent-amber-400" displayValue={formatMoney(toCurrentDisplay(maintCostTHB))} />
              </div>
            </section>
          </div>

          {/* MAIN KPIs AREA — Using Base THB Logic but Standardized UI */}
          <div className="lg:w-[65%] p-6 sm:p-8 space-y-8 bg-aetox-surface">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <KpiCard label={dict.kpis.monthlySaving} valInCurrency={calc.monthlySaving} accent color="text-emerald-400" detail={dict.kpis.monthlySavingDetail} currency={currency} formatMoney={formatMoney} unitLabel={dict.labels.unit} />
              <div className="p-6 rounded-3xl border bg-aetox-card-bg border-aetox-card-border min-h-[140px] flex flex-col justify-between relative group shadow-sm">
                <div className="absolute top-4 right-4 z-20 opacity-30">
                  <SimulatorIcon name="help" size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-aetox-text-muted font-bold mb-3 tracking-wide uppercase">{dict.kpis.payback}</p>
                  <div className="space-y-2">
                    <p className="text-fluid-h2 text-emerald-400 leading-none font-display">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                    <p className="text-fluid-p text-emerald-400 opacity-70 tracking-wide">{dict.labels.unit}: {dict.kpis.paybackUnit}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem] p-8 space-y-4">
                <p className="text-fluid-sm font-bold text-rose-400 mb-2 uppercase tracking-widest">{dict.comparison.manual}</p>
                <div className="space-y-4 text-fluid-sm">
                  <div className="flex justify-between items-center"><span className="text-aetox-text-soft font-medium">{dict.comparison.totalHours}</span><span className="font-bold text-aetox-text-main">{calc.manualHours.toFixed(1)} {dict.unitHours}</span></div>
                  <div className="flex justify-between items-center border-b border-rose-500/10 pb-3"><span className="text-aetox-text-soft font-medium">{dict.comparison.totalCost}</span><span className="font-bold text-rose-300">{formatMoney(calc.totalBefore)}</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-aetox-text-muted font-bold text-[10px] uppercase">{dict.comparison.costPerUnit}</span><span className="font-bold text-aetox-text-main text-2xl font-display">{formatMoney(calc.costPerUnitBefore)}</span></div>
                </div>
              </div>
              <div className={`${theme.botBg} border ${theme.botBorder} rounded-[2.5rem] p-8 space-y-4 shadow-xl`}>
                <p className={`text-fluid-sm font-bold flex items-center gap-2 mb-2 ${theme.success} uppercase tracking-widest`}>{dict.comparison.bot}</p>
                <div className="space-y-4 text-fluid-sm">
                  <div className="flex justify-between items-center"><span className="text-aetox-text-soft font-medium">{dict.comparison.invest}</span><span className="font-bold text-aetox-text-main">{formatMoney(calc.botPrice)}</span></div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-aetox-text-soft font-medium">{dict.comparison.maint}</span><span className={`font-bold ${theme.success}`}>{formatMoney(calc.maintCost)}/ด.</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-aetox-text-muted font-bold text-[10px] uppercase">{dict.comparison.costPerUnit}</span><span className={`font-bold text-2xl font-display ${theme.success}`}>{formatMoney(calc.costPerUnitAfter)}</span></div>
                </div>
              </div>
            </div>

            <div className="aetox-card p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Zap size={100} /></div>
              <p className="text-[11px] sm:text-xs font-black text-aetox-text-muted border-b border-aetox-border pb-4 tracking-widest uppercase">{dict.benchmark.title}</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-fluid-sm font-bold text-aetox-text-main uppercase tracking-widest">{dict.benchmark.botLabel}</span><span className={`text-lg font-bold ${theme.success}`}>{calc.botHours.toFixed(1)} {dict.unitTime}</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-aetox-border"><div className="h-full rounded-full transition-all duration-1000" style={{ width: `${calc.botBarPct}%`, background: theme.botGrad, boxShadow: theme.botGlow }} /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-fluid-sm font-bold text-aetox-text-soft uppercase tracking-widest">{dict.benchmark.manualLabel} ({staffCount} {dict.labels.people || 'คน'})</span><span className="text-lg font-bold text-rose-400">{calc.manualHours.toFixed(1)} {dict.unitTime}</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-aetox-border"><div className="h-full w-full rounded-full" style={{ background: 'linear-gradient(to right,#9f1239,#f43f5e)' }} /></div>
                </div>
              </div>
              <div className="flex justify-center gap-10 pt-4 border-t border-aetox-border font-bold text-fluid-sm uppercase tracking-wider">
                <span className="text-emerald-400">{dict.benchmark.savedHours} {fmt(calc.savedHours)} {dict.unitTime}</span>
                <span className={theme.success}>{dict.benchmark.speedX} {calc.speedX} {dict.unitTimes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: PROJECTION & STRATEGIC INSIGHTS — Fully Refactored */}
      <div className="aetox-card overflow-hidden">
        <div className="bg-white/[0.01] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <p className="text-fluid-h3 text-aetox-text-main flex items-center gap-3 mb-1 font-display"><TrendingUp size={24} className="text-aetox-accent" /> {dict.title}</p>
              <p className="text-fluid-sm text-aetox-text-muted ml-9 uppercase tracking-widest font-bold">{dict.projectionDesc.replace('{timeframe}', timeframe.toString())}</p>
            </div>
            <div className="bg-aetox-surface-lowest p-1.5 rounded-2xl border border-aetox-border flex items-center gap-1 w-full sm:w-auto shadow-inner">
              {[{ val: 6, label: dict.timeframes.m6 }, { val: 12, label: dict.timeframes.y1 }, { val: 36, label: dict.timeframes.y3 }].map((t) => (
                <button key={t.val} onClick={() => setTimeframe(t.val as Timeframe)} className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-fluid-sm font-bold transition-all ${timeframe === t.val ? 'bg-aetox-accent text-white shadow-lg' : 'text-aetox-text-soft hover:text-aetox-text-main'}`}>{t.label}</button>
              ))}
            </div>
          </div>

          <div className="relative overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-aetox-border">
            <div className="flex gap-4 sm:gap-6 pr-6 min-w-[700px] sm:min-w-full relative">
              <div className="absolute inset-0 left-[80px] right-6 h-[400px] pointer-events-none z-0">
                {[0.25, 0.5, 0.75, 1].map((lvl) => (
                  <div key={lvl} className="absolute w-full border-t border-aetox-border/50" style={{ bottom: `${lvl * 100}%`, marginBottom: '40px' }} />
                ))}
              </div>

              <div className="flex flex-col justify-between text-[10px] font-black text-aetox-text-muted py-6 h-[400px] border-r border-aetox-border pr-6 sticky left-0 bg-aetox-bg z-30">
                <div className="text-aetox-accent bg-aetox-accent/10 px-3 py-1.5 rounded-lg border border-aetox-accent/40 whitespace-nowrap">{formatMoney(calc.maxProjectionValue, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.75, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.5, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.25, true, true)}</div>
                <div className="text-aetox-text-muted">0</div>
              </div>

              <div className="flex-1 relative min-w-[600px]">
                <div className="grid h-[400px] items-end relative" style={{ gridTemplateColumns: `repeat(${calc.projection.length}, 1fr)`, gap: timeframe === 36 ? '4px' : '16px' }}>
                  {calc.projection.map((p) => {
                    const pct = Math.min((p.cumSaving / Math.max(calc.maxProjectionValue, 1)) * 100, 100);
                    const isBreakEvenPoint = p.breakEven && (p.month === 1 || !calc.projection.find(prev => prev.month < p.month && prev.breakEven));
                    
                    let label = p.label;
                    if (label.includes('Year 1')) label = dict.labels.year1;
                    else if (label.includes('Year 2')) label = dict.labels.year2;
                    else if (label.includes('Year 3')) label = dict.labels.year3;
                    else if (label.includes('Month 1')) label = dict.labels.firstMonth || 'เดือนแรก';
                    else if (label.includes('Month') || label.includes('M.')) label = `${dict.labels.month} ${p.month}`;

                    return (
                      <div key={p.month} className="flex flex-col items-center h-full justify-end group relative z-10">
                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                          <div className="bg-aetox-text-main text-aetox-bg px-3 py-1.5 rounded-lg text-[10px] font-black shadow-2xl">{formatMoney(p.cumSaving, true, false)}</div>
                        </div>
                        {label && <div className={`px-2.5 py-1 rounded-full text-[10px] font-black mb-3 whitespace-nowrap transition-all border ${label.includes('ปี') ? 'bg-aetox-accent/10 text-aetox-accent border-aetox-accent/20' : 'bg-white/5 text-aetox-text-muted border-aetox-border'}`}>{label}</div>}
                        <div className="w-full bg-aetox-surface-lowest rounded-t-2xl overflow-hidden transition-all duration-500 border border-aetox-border hover:border-aetox-accent/30 relative" style={{ height: `${Math.max(pct, 4)}%` }}>
                          <div className="w-full h-full rounded-t-2xl transition-all duration-1000" style={{ background: p.breakEven ? theme.botGrad : 'var(--aetox-surface-high)', boxShadow: p.breakEven ? theme.botGlow : 'none' }} />
                        </div>
                        <div className="mt-4 min-h-[40px] flex flex-col items-center">
                          {isBreakEvenPoint && <div className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-sm animate-bounce tracking-tighter">🚀 {dict.labels.breakEven}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-[40px] inset-x-0 h-px bg-aetox-border" />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-aetox-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-aetox-surface-lowest border border-aetox-border rounded-[2.5rem] p-10 space-y-6 hover:bg-aetox-surface transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><BarChart3 size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-inner"><BarChart3 size={28} /></div>
                <div><p className="text-fluid-h4 font-display text-aetox-text-main">{dict.summary.monthlyTitle}</p><p className="text-[10px] text-aetox-text-muted uppercase tracking-widest font-black">{dict.summary.monthlySub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-aetox-border pb-4"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.summary.netProfitMonth}</span><span className="text-2xl font-display font-bold text-emerald-400 tabular-nums">{formatMoney(calc.monthlySaving)}</span></div>
                <div className="flex justify-between items-end"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.summary.maintOpex}</span><span className="text-lg font-display font-bold text-aetox-text-soft tabular-nums">{formatMoney(calc.maintCost)}</span></div>
              </div>
            </div>

            <div className="bg-aetox-surface-lowest border border-aetox-border rounded-[2.5rem] p-10 space-y-6 hover:bg-aetox-surface transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Wallet size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-aetox-accent-subtle flex items-center justify-center text-aetox-accent group-hover:scale-110 transition-transform shadow-inner"><Wallet size={28} /></div>
                <div><p className="text-fluid-h4 font-display text-aetox-text-main">{dict.summary.longTermTitle}</p><p className="text-[10px] text-aetox-text-muted uppercase tracking-widest font-black">{dict.summary.longTermSub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-aetox-border pb-4"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.summary.netProfitLong.replace('{time}', timeframe.toString())}</span><span className="text-2xl font-display font-bold text-aetox-text-main tabular-nums">{formatMoney(calc.netProfitAfterInvestment)}</span></div>
                <div className="flex justify-between items-end"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.summary.costReduction}</span><span className="text-lg font-display font-bold text-aetox-accent tabular-nums">{calc.costReductionPct}%</span></div>
              </div>
            </div>

            <div className="bg-aetox-surface-lowest border border-aetox-border rounded-[2.5rem] p-10 space-y-6 hover:bg-aetox-surface transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Clock size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-inner"><Clock size={28} /></div>
                <div><p className="text-fluid-h4 font-display text-aetox-text-main">{dict.summary.capacityTitle}</p><p className="text-[10px] text-aetox-text-muted uppercase tracking-widest font-black">{dict.summary.capacitySub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-aetox-border pb-4"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.summary.totalSaved}</span><span className="text-2xl font-display font-bold text-indigo-400 tabular-nums">{fmt(calc.totalHoursSavedLongTerm)} {dict.unitTime}</span></div>
                <div className="flex justify-between items-end"><span className="text-aetox-text-soft text-fluid-sm font-medium">{dict.benchmark.errorRate}</span><span className="text-lg font-display font-bold text-aetox-text-main tabular-nums">5.0%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
