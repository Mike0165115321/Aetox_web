'use client';
import React, { useState } from 'react';
import { RotateCcw, TrendingUp, Zap, BarChart3, Clock, Wallet, Info } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

// Import extracted logic and components
import { useAutomationRoi, workloadConfig, type Complexity, type Timeframe } from '@/app/[lang]/services/automation/hooks/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

export default function AutomationSimulatorHome({ dict }: { dict: any }) {
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
    staffCount,
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
      result = `${symbol}${Math.round(value).toLocaleString()}`;
    }
    return showLabel ? `${result}` : result;
  };

  const toCurrentDisplay = (valTHB: number) => currency === 'USD' ? valTHB / exchangeRate : valTHB;
  const fmt = (n: number) => (n || 0).toLocaleString('th-TH', { maximumFractionDigits: 0 });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-0 space-y-6">
      <div className="bg-aetox-surface-low/20 backdrop-blur-3xl rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500">
        {/* Mini Header */}
        <div className="px-4 md:px-5 py-3 md:py-4 bg-aetox-surface-low/30 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans">
          <div className="w-full sm:w-auto">
            <h2 className="text-xs md:text-base font-bold text-aetox-text-main tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <TrendingUp size={16} className="text-aetox-accent" />
              {dict.title.split(' — ')[0]} <span className="text-aetox-accent">Simulator</span>
            </h2>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <CurrencySwitcher />
            <button onClick={() => updateComplexity('medium')} className="p-2 bg-aetox-surface hover:bg-aetox-surface-high rounded-xl transition-all shrink-0">
              <RotateCcw size={14} className="text-aetox-text-muted" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Inputs - High Density */}
          <div className="lg:w-[32%] p-5 md:p-6 space-y-6 bg-aetox-surface-low/40">
            <section className="space-y-3 font-sans">
              <p className="text-xs font-bold text-aetox-text-muted tracking-tight px-1">{dict.workloadTitle}</p>
              <div className="grid grid-cols-1 gap-1.5 md:gap-2">
                {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                  const active = complexity === lvl;
                  const cfg = workloadConfig[lvl];
                  const d = dict.levels.find((l: any) => l.id === lvl);
                  return (
                    <button key={lvl} onClick={() => updateComplexity(lvl)}
                      className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-left transition-all ${active ? 'bg-aetox-accent text-white shadow-lg shadow-aetox-accent/20' : 'bg-aetox-surface text-aetox-text-soft hover:bg-aetox-surface-high'}`}>
                      <SimulatorIcon name={cfg.icon} size={14} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-[11px] font-bold truncate leading-none mb-0.5 md:mb-1">{d?.label || cfg.label}</p>
                        <p className={`text-[11px] md:text-[9px] font-bold tracking-tight opacity-60 ${active ? 'text-white' : ''}`}>{d?.sublabel || cfg.sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-6 pt-4 font-sans border-t border-white/[0.03]">
              <p className="text-xs font-black text-aetox-text-muted tracking-tight px-1">{dict.params.title}</p>
              <div className="space-y-8">
                <SliderGroup label={dict.params.volume} min={100} max={100000} step={100} value={volume} onChange={setVolume} accent="accent-aetox-accent" displayValue={volume.toLocaleString()} />
                <SliderGroup label={dict.params.staff} min={1} max={30} step={1} value={staffCount} onChange={setStaffCount} accent="accent-aetox-accent" displayValue={staffCount.toString()} />
                <SliderGroup label={dict.params.hourlyRate} min={50} max={500} step={10} value={hourlyRateTHB} onChange={setHourlyRateTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(hourlyRateTHB))} />
                <SliderGroup label={dict.params.unitCost} min={0} max={500} step={5} value={unitCostManualTHB} onChange={setUnitCostManualTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(unitCostManualTHB))} />
              </div>
            </section>
          </div>

          {/* Right: Dashboard Area */}
          <div className="lg:w-[68%] p-4 md:p-8 flex flex-col justify-between space-y-4 md:space-y-6 bg-aetox-surface-lowest/30">
            {/* Top KPI Grid - Balanced Size */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-2 font-sans">
              <div className="p-3 md:p-5 rounded-2xl md:rounded-[24px] bg-aetox-value/[0.18] text-center shadow-sm transition-all hover:bg-aetox-value/25">
                <p className="text-[11px] md:text-xs font-bold text-aetox-value mb-1">ต้นทุนที่ลดได้</p>
                <p className="text-lg md:text-3xl font-bold text-aetox-text-main leading-none">{calc.costReductionPct}%</p>
              </div>
              <div className="p-3 md:p-5 rounded-2xl md:rounded-[24px] bg-aetox-value/[0.18] text-center shadow-sm transition-all hover:bg-aetox-value/25">
                <p className="text-[11px] md:text-xs font-bold text-aetox-value mb-1">ROI ปีแรก</p>
                <p className="text-lg md:text-3xl font-bold text-aetox-text-main leading-none">{calc.roi}%</p>
              </div>
              <div className="p-3 md:p-5 rounded-2xl md:rounded-[24px] bg-emerald-500/[0.18] text-center shadow-sm transition-all hover:bg-emerald-500/25">
                <p className="text-xs font-bold text-emerald-500 mb-1">{dict.kpis?.monthlySaving || 'ประหยัดได้/เดือน'}</p>
                <p className="text-base md:text-2xl font-bold text-emerald-500 tracking-tight">{formatMoney(calc.monthlySaving)}</p>
              </div>
              <div className="p-3 md:p-5 rounded-2xl md:rounded-[24px] bg-aetox-accent/[0.18] text-center shadow-sm transition-all hover:bg-aetox-accent/25">
                <p className="text-xs font-bold text-aetox-accent mb-1">{dict.kpis?.payback || 'ระยะเวลาคืนทุน'}</p>
                <p className="text-base md:text-2xl font-bold text-aetox-accent tracking-tight">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                <p className="text-[10px] font-bold text-aetox-accent/70">{dict.kpis?.paybackUnit || 'เดือน (Payback)'}</p>
              </div>
            </div>

            {/* Direct Comparison Table */}
            <div className="bg-white/[0.03] rounded-2xl overflow-hidden flex flex-col font-sans">
              <div className="px-5 py-4 flex justify-between items-center bg-white/[0.02]">
                <h4 className="text-sm font-semibold text-aetox-text-main flex items-center gap-2">
                  <BarChart3 size={16} className="text-aetox-accent" />
                  การวัดผลประสิทธิภาพ <span className="text-aetox-text-muted text-xs ml-1 tracking-tight font-medium">(Efficiency Benchmark)</span>
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-aetox-text-muted tracking-tight">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> AI Efficiency
                </div>
              </div>

              <div className="p-2 space-y-3">
                {/* AI Row - Upscaled */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 md:p-6 bg-aetox-surface-low/40 rounded-xl md:rounded-[24px] transition-all hover:bg-aetox-surface-low group hover:shadow-xl hover:shadow-aetox-accent/5 gap-3">
                  <div className="flex items-center gap-3 md:gap-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-aetox-accent-subtle flex items-center justify-center text-aetox-accent font-bold text-base md:text-xl shadow-sm group-hover:scale-110 transition-transform">AI</div>
                    <div>
                      <p className="text-[11px] md:text-sm font-bold text-aetox-text-main tracking-tight">{dict.benchmark?.botLabel || 'บอท AETOX'}</p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[8px] md:text-[10px] font-bold rounded">เสถียรภาพ 24/7</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[8px] md:text-[10px] font-bold rounded">แม่นยำสูง</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between sm:justify-end gap-5 md:gap-12 items-center pt-3 sm:pt-0">
                    <div className="text-left sm:text-right">
                      <p className="text-[8px] md:text-[11px] font-bold text-aetox-text-muted mb-0.5 tracking-tight">ระยะเวลางาน</p>
                      <p className="text-base md:text-xl font-bold text-aetox-text-main tracking-tight">{calc.botHours.toFixed(1)} {dict.unitHours}</p>
                    </div>
                    <div className="text-right sm:border-l border-white/5 sm:pl-6 md:pl-12">
                      <p className="text-[8px] md:text-[11px] font-bold text-aetox-text-muted mb-0.5 tracking-tight">ต้นทุนรายเดือน</p>
                      <p className="text-lg md:text-2xl font-bold text-aetox-value tracking-tight leading-none">{formatMoney(calc.totalAfter)}</p>
                    </div>
                  </div>
                </div>

                {/* Human Row - Upscaled & Highlight Risks */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 bg-rose-500/[0.04] rounded-[24px] transition-all hover:bg-rose-500/[0.08] group hover:shadow-xl hover:shadow-rose-500/5 gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold text-lg md:text-xl shadow-sm group-hover:scale-110 transition-transform">{staffCount}</div>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-aetox-text-main tracking-tight">{dict.benchmark?.manualLabel || 'ทีมงานคน'}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-500 text-[9px] md:text-[10px] font-bold rounded">ตรวจพบคอขวด</span>
                        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-500 text-[9px] md:text-[10px] font-bold rounded">พื้นที่ความเสี่ยงสูง</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between sm:justify-end gap-6 md:gap-12 items-center pt-4 sm:pt-0">
                    <div className="text-left sm:text-right">
                      <p className="text-[9px] md:text-[11px] font-bold text-aetox-text-muted mb-1 tracking-tight">ระยะเวลางาน</p>
                      <p className="text-lg md:text-xl font-bold text-aetox-text-main tracking-tight">{calc.manualDurationHours.toFixed(1)} {dict.unitHours}</p>
                    </div>
                    <div className="text-right sm:border-l border-white/5 sm:pl-6 md:pl-12">
                      <p className="text-[9px] md:text-[11px] font-bold text-aetox-text-muted mb-1 tracking-tight">ต้นทุนรายเดือน</p>
                      <p className="text-xl md:text-2xl font-bold text-rose-400 tracking-tight leading-none">{formatMoney(calc.totalBefore)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 md:px-8 py-4 md:py-6 bg-aetox-accent/5 flex flex-col sm:flex-row justify-between items-center font-sans gap-4 md:gap-6">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2 md:p-3 rounded-lg bg-aetox-accent/20 text-aetox-accent shadow-sm"><Clock size={18} className="md:w-6 md:h-6" /></div>
                  <div>
                    <p className="text-[9px] md:text-xs font-bold text-aetox-text-muted tracking-tight mb-0.5">มูลค่าที่ประหยัดได้ต่อปี</p>
                    <p className="text-lg md:text-3xl font-bold text-aetox-value tracking-tight leading-none">{formatMoney(calc.annualSaving, true, false)}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right w-full sm:w-auto pt-3 sm:pt-0">
                  <p className="text-[9px] md:text-xs font-bold text-emerald-500 tracking-tight mb-0.5">อัตราการเร่งประสิทธิภาพ</p>
                  <p className="text-2xl md:text-4xl font-bold text-aetox-accent tracking-tight leading-none">{calc.speedX}x <span className="text-sm md:text-lg uppercase ml-1">ไวกว่า</span></p>
                </div>
              </div>
            </div>

            {/* Bottleneck & Risks Analysis - The "Shock" Factor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
              <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-[10px] uppercase tracking-widest">
                  <Info size={12} /> คอขวด: ขีดจำกัดของมนุษย์
                </div>
                <p className="text-[11px] text-aetox-text-soft leading-relaxed font-medium">
                  พนักงาน {staffCount} คนของคุณถึงขีดจำกัดแล้ว หากงานเพิ่มขึ้น <span className="text-rose-400 font-bold">20%</span> คุณจะต้องจ้างคนเพิ่มทันทีเพื่อไม่ให้ระบบค้าง
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-[10px] uppercase tracking-widest">
                  <Info size={12} /> ความเสี่ยง: ต้นทุนความผิดพลาด
                </div>
                <p className="text-[11px] text-aetox-text-soft leading-relaxed font-medium">
                  ด้วยปริมาณงาน {fmt(volume)} รายการ ความผิดพลาด <span className="text-rose-400 font-bold">3%</span> จากคนอาจสร้างความเสียหายแฝงถึง <span className="text-rose-400 font-bold">{formatMoney(calc.monthlySaving * 0.1)}</span> ต่อเดือน
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-widest">
                  <Zap size={12} /> ทางออก: ข้อได้เปรียบของ AI
                </div>
                <p className="text-[11px] text-aetox-text-soft leading-relaxed font-medium">
                  AI ทำงานได้ <span className="text-emerald-400 font-bold">24/7</span> โดยไม่มีความเหนื่อยล้า และสามารถขยายตัวรองรับงานเพิ่มขึ้น <span className="text-emerald-400 font-bold">100 เท่า</span> ได้โดยไม่ต้องเพิ่มต้นทุนแรงงาน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
