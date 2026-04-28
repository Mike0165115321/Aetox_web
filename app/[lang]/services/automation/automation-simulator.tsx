'use client';
import React, { useState } from 'react';
import { RotateCcw, TrendingUp, Zap, BarChart3, Clock, Wallet } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

// Import extracted logic and components
import { useAutomationRoi, workloadConfig, type Complexity, type Timeframe } from '@/components/simulators/automation/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

const theme = {
  primary: 'text-[#06B6D4]',
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
  const [hourlyRate, setHourlyRate] = useState(120);
  const [unitCostManual, setUnitCostManual] = useState(25);
  const [botPrice, setBotPrice] = useState(35000);
  const [maintCost, setMaintCost] = useState(1200);

  // Use the extracted logic hook
  const calc = useAutomationRoi({
    volume,
    hourlyRate,
    unitCostManual,
    botPrice,
    maintCost,
    complexity,
    timeframe,
    currency,
    exchangeRate
  });

  // Sync values when currency changes during render phase to avoid cascading renders
  const [prevCurrency, setPrevCurrency] = useState(currency);
  if (prevCurrency !== currency && exchangeRate) {
    setPrevCurrency(currency);
    if (currency === 'USD') {
      setHourlyRate(prev => Math.round(prev / exchangeRate));
      setUnitCostManual(prev => Math.round(prev / exchangeRate));
      setBotPrice(prev => Math.round(prev / exchangeRate / 100) * 100);
      setMaintCost(prev => Math.round(prev / exchangeRate / 10) * 10);
    } else {
      setHourlyRate(prev => Math.round(prev * exchangeRate));
      setUnitCostManual(prev => Math.round(prev * exchangeRate));
      setBotPrice(prev => Math.round(prev * exchangeRate / 1000) * 1000);
      setMaintCost(prev => Math.round(prev * exchangeRate / 100) * 100);
    }
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
      result = `${symbol}${Math.round(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return showLabel ? `${result}` : result;
  };

  const fmt = (n: number) => n.toLocaleString('th-TH', { maximumFractionDigits: 0 });

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-20">

      {/* PART 1: SIMULATOR & PARAMETERS */}
      <div className="bg-[#0A0F1C] text-white rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-white/5 bg-white/[0.02]">
          <div className="text-center md:text-left">
            <h2 className="text-fluid-h3 leading-none mb-1 text-white">
              {dict.title.split(' — ')[0]} — <span className="text-[#06B6D4]">Automation Simulator</span>
            </h2>
            <p className="text-fluid-sm text-gray-500 uppercase tracking-[0.2em] opacity-70">{dict.subTitle}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* CONTROL PANEL */}
          <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/5 p-6 sm:p-8 space-y-10 bg-black/20">
            <div className="flex justify-between items-center pb-6 border-b border-white/5">
              <span className="text-fluid-sm text-gray-500 uppercase tracking-[0.2em]">Currency Control</span>
              <div className="flex items-center gap-3">
                <CurrencySwitcher />
                <button onClick={() => updateComplexity('medium')} className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"><RotateCcw size={14} /></button>
              </div>
            </div>
            
            <section className="space-y-5">
              <h3 className="text-fluid-sm text-gray-400 border-l-4 border-[#06B6D4] pl-4 uppercase tracking-widest">{dict.workloadTitle}</h3>
              <div className="flex flex-col gap-3">
                {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                  const active = complexity === lvl;
                  const cfg = workloadConfig[lvl];
                  const dictLevel = dict.levels.find((l: any) => l.id === lvl);
                  return (
                    <button key={lvl} onClick={() => updateComplexity(lvl)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 border text-left active:scale-95 ${active ? 'bg-white/10 text-white border-[#06B6D4]/40 shadow-[0_0_20px_rgba(6,182,212,0.05)]' : 'text-gray-400 border-transparent bg-white/[0.01]'}`}>
                      <span className={active ? 'text-[#06B6D4]' : ''}><SimulatorIcon name={cfg.icon} size={20} /></span>
                      <div className="flex-1">
                        <p className="font-bold mb-0.5">{dictLevel?.label || cfg.label}</p>
                        <p className="text-[10px] opacity-50 font-medium uppercase">{dictLevel?.sublabel || cfg.sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-xs sm:text-sm font-bold text-gray-400 border-l-4 border-[#06B6D4] pl-4 uppercase tracking-widest">{dict.params.title}</h3>
              <div className="grid grid-cols-1 gap-7">
                <SliderGroup label={dict.params.volume} min={100} max={100000} step={100} value={volume} onChange={setVolume} accent="accent-[#06B6D4]" displayValue={volume.toLocaleString()} />
                <SliderGroup label={dict.params.staff} min={1} max={30} step={1} value={staffCount} onChange={setStaffCount} accent="accent-indigo-400" displayValue={staffCount.toString()} />
                <SliderGroup label={dict.params.hourlyRate} min={50} max={500} step={10} value={hourlyRate} onChange={setHourlyRate} accent="accent-rose-400" displayValue={formatMoney(hourlyRate)} />
                <SliderGroup label={dict.params.unitCost} min={0} max={500} step={5} value={unitCostManual} onChange={setUnitCostManual} accent="accent-amber-400" displayValue={formatMoney(unitCostManual)} />
                <SliderGroup label={dict.params.botPrice} min={7500} max={120000} step={500} value={botPrice} onChange={setBotPrice} accent="accent-[#06B6D4]" displayValue={formatMoney(botPrice)} />
                <SliderGroup label={dict.params.maintCost} min={500} max={15000} step={100} value={maintCost} onChange={setMaintCost} accent="accent-amber-400" displayValue={formatMoney(maintCost)} />
              </div>
            </section>
          </div>

          {/* MAIN KPIs AREA */}
          <div className="lg:w-[65%] p-6 sm:p-8 space-y-8 bg-black/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <KpiCard label={dict.kpis.monthlySaving} valInCurrency={calc.monthlySaving} accent color="text-emerald-400" detail={dict.kpis.monthlySavingDetail} currency={currency} formatMoney={formatMoney} unitLabel={dict.labels.unit} />
              <div className="p-6 rounded-2xl border bg-white/[0.03] border-white/10 min-h-[140px] flex flex-col justify-between relative group">
                <div className="absolute top-4 right-4 z-20">
                  <SimulatorIcon name="help" size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold mb-3 tracking-wide">{dict.kpis.payback}</p>
                  <div className="space-y-2">
                    <p className="text-fluid-h2 text-emerald-400 leading-none">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                    <p className="text-fluid-p text-emerald-400 opacity-70 tracking-wide">{dict.labels.unit}: {dict.kpis.paybackUnit}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-950/20 border border-rose-500/20 rounded-[2rem] p-8 space-y-4 shadow-xl">
                <p className="text-sm font-bold text-rose-400 mb-2">{dict.comparison.manual}</p>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center"><span className="text-gray-400 font-medium">{dict.comparison.totalHours}</span><span className="font-bold text-white">{calc.manualHours.toFixed(1)} {dict.unitHours}</span></div>
                  <div className="flex justify-between items-center border-b border-rose-500/10 pb-3"><span className="text-gray-400 font-medium">{dict.comparison.totalCost}</span><span className="font-bold text-rose-300">{formatMoney(calc.totalBefore)}</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-gray-400 font-bold text-xs">{dict.comparison.costPerUnit}</span><span className="font-bold text-white text-xl">{formatMoney(calc.costPerUnitBefore)}</span></div>
                </div>
              </div>
              <div className={`${theme.botBg} border ${theme.botBorder} rounded-[2rem] p-8 space-y-4 shadow-xl`}>
                <p className={`text-sm font-bold flex items-center gap-2 mb-2 ${theme.success}`}>{dict.comparison.bot}</p>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center"><span className="text-gray-400 font-medium">{dict.comparison.invest}</span><span className="font-bold text-white">{formatMoney(botPrice)}</span></div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-gray-400 font-medium">{dict.comparison.maint}</span><span className={`font-bold ${theme.success}`}>{formatMoney(maintCost)}/ด.</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-gray-400 font-bold text-xs">{dict.comparison.costPerUnit}</span><span className={`font-bold text-xl ${theme.success}`}>{formatMoney(calc.costPerUnitAfter)}</span></div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1321] border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Zap size={100} /></div>
              <p className="text-[11px] sm:text-xs font-extrabold text-gray-300 border-b border-white/5 pb-4 tracking-wide">{dict.benchmark.title}</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-sm font-bold text-white">{dict.benchmark.botLabel}</span><span className={`text-lg font-bold ${theme.success}`}>{calc.botHours.toFixed(1)} {dict.unitTime}</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5"><div className="h-full rounded-full transition-all duration-1000" style={{ width: `${calc.botBarPct}%`, background: theme.botGrad, boxShadow: theme.botGlow }} /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-sm font-bold text-gray-400">{dict.benchmark.manualLabel} ({staffCount} {dict.labels.people || 'คน'})</span><span className="text-lg font-bold text-rose-400">{calc.manualHours.toFixed(1)} {dict.unitTime}</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5"><div className="h-full w-full rounded-full" style={{ background: 'linear-gradient(to right,#9f1239,#f43f5e)' }} /></div>
                </div>
              </div>
              <div className="flex justify-center gap-10 pt-4 border-t border-white/5 font-bold text-[11px] sm:text-sm uppercase tracking-wider">
                <span className="text-emerald-400">{dict.benchmark.savedHours} {fmt(calc.savedHours)} {dict.unitTime}</span>
                <span className={theme.success}>{dict.benchmark.speedX} {calc.speedX} {dict.unitTimes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: PROJECTION & STRATEGIC INSIGHTS */}
      <div className="bg-[#0A0F1C] text-white rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
        <div className="bg-[#0D1321]/80 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <p className="text-fluid-h3 text-white flex items-center gap-3 mb-1"><TrendingUp size={24} className="text-[#06B6D4]" /> {dict.title}</p>
              <p className="text-fluid-sm text-gray-500 ml-9 uppercase tracking-widest font-bold">{dict.projectionDesc.replace('{timeframe}', timeframe.toString())}</p>
            </div>
            <div className="bg-black/40 p-1.5 rounded-2xl border border-white/10 flex items-center gap-1 w-full sm:w-auto shadow-inner">
              {[{ val: 6, label: dict.timeframes.m6 }, { val: 12, label: dict.timeframes.y1 }, { val: 36, label: dict.timeframes.y3 }].map((t) => (
                <button key={t.val} onClick={() => setTimeframe(t.val as Timeframe)} className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all ${timeframe === t.val ? 'bg-[#06B6D4] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>{t.label}</button>
              ))}
            </div>
          </div>

          <div className="relative overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-white/10">
            <div className="flex gap-4 sm:gap-6 pr-6 min-w-[700px] sm:min-w-full relative">
              {/* Horizontal Grid Lines */}
              <div className="absolute inset-0 left-[80px] right-6 h-[400px] pointer-events-none z-0">
                {[0.25, 0.5, 0.75, 1].map((lvl) => (
                  <div key={lvl} className="absolute w-full border-t border-white/5" style={{ bottom: `${lvl * 100}%`, marginBottom: '40px' }} />
                ))}
              </div>

              <div className="flex flex-col justify-between text-[11px] font-extrabold text-gray-500 py-6 h-[400px] border-r border-white/10 pr-6 sticky left-0 bg-[#0D1321]/95 z-30">
                <div className="text-white bg-[#06B6D4]/30 px-3 py-1.5 rounded-lg border border-[#06B6D4]/40 shadow-glow whitespace-nowrap">{formatMoney(calc.maxProjectionValue, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.75, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.5, true, true)}</div>
                <div className="whitespace-nowrap">{formatMoney(calc.maxProjectionValue * 0.25, true, true)}</div>
                <div className="text-gray-700">0</div>
              </div>

              <div className="flex-1 relative min-w-[600px]">
                <div className="grid h-[400px] items-end relative" style={{ gridTemplateColumns: `repeat(${calc.projection.length}, 1fr)`, gap: timeframe === 36 ? '4px' : '16px' }}>
                  {calc.projection.map((p) => {
                    const pct = Math.min((p.cumSaving / Math.max(calc.maxProjectionValue, 1)) * 100, 100);
                    const isBreakEvenPoint = p.breakEven && (p.month === 1 || !calc.projection.find(prev => prev.month < p.month && prev.breakEven));
                    
                    // Map labels from dict
                    let label = p.label;
                    if (label.includes('Year 1')) label = dict.labels.year1;
                    else if (label.includes('Year 2')) label = dict.labels.year2;
                    else if (label.includes('Year 3')) label = dict.labels.year3;
                    else if (label.includes('Month 1')) label = dict.labels.firstMonth || 'เดือนแรก';
                    else if (label.includes('Month') || label.includes('M.')) label = `${dict.labels.month} ${p.month}`;

                    return (
                      <div key={p.month} className="flex flex-col items-center h-full justify-end group relative z-10">
                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                          <div className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xl">{formatMoney(p.cumSaving, true, false)}</div>
                        </div>
                        {label && <div className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold mb-3 whitespace-nowrap transition-all border ${label.includes('ปี') ? 'bg-white/10 text-white border-white/20' : 'bg-white/5 text-gray-500 border-white/10'}`}>{label}</div>}
                        <div className="w-full bg-white/[0.02] rounded-t-2xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/20 relative" style={{ height: `${Math.max(pct, 4)}%` }}>
                          <div className="w-full h-full rounded-t-2xl transition-all duration-1000" style={{ background: p.breakEven ? theme.botGrad : '#374151', boxShadow: p.breakEven ? theme.botGlow : 'none' }} />
                        </div>
                        <div className="mt-4 min-h-[40px] flex flex-col items-center">
                          {isBreakEvenPoint && <div className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-sm animate-bounce">🚀 {dict.labels.breakEven}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-[40px] inset-x-0 h-px bg-white/10" />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><BarChart3 size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-inner"><BarChart3 size={28} /></div>
                <div><p className="text-base font-bold text-white">{dict.summary.monthlyTitle}</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{dict.summary.monthlySub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">{dict.summary.netProfitMonth}</span><span className="text-2xl font-bold text-emerald-400 tabular-nums">{formatMoney(calc.monthlySaving)}</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">{dict.summary.maintOpex}</span><span className="text-lg font-bold text-gray-400 tabular-nums">{formatMoney(maintCost)}</span></div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Wallet size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] group-hover:scale-110 transition-transform shadow-inner"><Wallet size={28} /></div>
                <div><p className="text-base font-bold text-white">{dict.summary.longTermTitle}</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{dict.summary.longTermSub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">{dict.summary.netProfitLong.replace('{time}', timeframe.toString())}</span><span className="text-2xl font-bold text-white tabular-nums">{formatMoney(calc.netProfitAfterInvestment)}</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">{dict.summary.costReduction}</span><span className="text-lg font-bold text-[#06B6D4] tabular-nums">{calc.costReductionPct}%</span></div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Clock size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-inner"><Clock size={28} /></div>
                <div><p className="text-base font-bold text-white">{dict.summary.capacityTitle}</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{dict.summary.capacitySub}</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">{dict.summary.totalSaved}</span><span className="text-2xl font-bold text-indigo-400 tabular-nums">{fmt(calc.totalHoursSavedLongTerm)} {dict.unitTime}</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">{dict.benchmark.errorRate}</span><span className="text-lg font-bold text-white tabular-nums">5.0%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
