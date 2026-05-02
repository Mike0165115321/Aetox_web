'use client';
import React, { useState } from 'react';
import { RotateCcw, TrendingUp, Zap, BarChart3, Clock, Wallet, Info } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

// Import extracted logic and components
import { useAutomationRoi, workloadConfig, type Complexity, type Timeframe } from './hooks/use-automation-roi';
import { KpiCard, SliderGroup, SimulatorIcon } from '@/components/simulators/automation/simulator-ui';

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
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-20">
      <div className="bg-aetox-surface-lowest/90 backdrop-blur-2xl rounded-[32px] border border-aetox-border overflow-hidden shadow-2xl transition-all duration-500">
        {/* Mini Header */}
        <div className="px-5 py-4 border-b border-aetox-border bg-aetox-surface-low/30 flex justify-between items-center font-sans">
          <div>
            <h2 className="text-sm md:text-base font-bold text-aetox-text-main uppercase tracking-tight flex items-center gap-2">
              <TrendingUp size={18} className="text-aetox-accent" />
              {dict.title.split(' — ')[0]} <span className="text-aetox-accent">Simulator</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <CurrencySwitcher />
            <button onClick={() => updateComplexity('medium')} className="p-2 bg-aetox-surface border border-aetox-border hover:bg-aetox-surface-high rounded-xl transition-all">
              <RotateCcw size={14} className="text-aetox-text-muted" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Inputs - High Density */}
          <div className="lg:w-[32%] p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-aetox-border space-y-6 bg-aetox-surface-lowest/50">
            <section className="space-y-3">
              <p className="text-[11px] font-black text-aetox-text-muted uppercase tracking-[0.2em] px-1">{dict.workloadTitle}</p>
              <div className="grid grid-cols-1 gap-2">
                {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                  const active = complexity === lvl;
                  const cfg = workloadConfig[lvl];
                  const d = dict.levels.find((l: any) => l.id === lvl);
                  return (
                    <button key={lvl} onClick={() => updateComplexity(lvl)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all border ${active ? 'bg-aetox-accent text-white border-aetox-accent shadow-lg shadow-aetox-accent/20' : 'bg-aetox-surface border-aetox-border text-aetox-text-soft hover:bg-aetox-surface-high'}`}>
                      <SimulatorIcon name={cfg.icon} size={16} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold truncate leading-none mb-1">{d?.label || cfg.label}</p>
                        <p className={`text-[9px] font-bold uppercase tracking-tighter opacity-60 ${active ? 'text-white' : ''}`}>{d?.sublabel || cfg.sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-5 pt-2">
              <p className="text-[11px] font-black text-aetox-text-muted uppercase tracking-[0.2em] px-1">{dict.params.title}</p>
              <div className="space-y-6">
                <SliderGroup label={dict.params.volume} min={100} max={100000} step={100} value={volume} onChange={setVolume} accent="accent-aetox-accent" displayValue={volume.toLocaleString()} />
                <SliderGroup label={dict.params.staff} min={1} max={30} step={1} value={staffCount} onChange={setStaffCount} accent="accent-aetox-accent" displayValue={staffCount.toString()} />
                <SliderGroup label={dict.params.hourlyRate} min={50} max={500} step={10} value={hourlyRateTHB} onChange={setHourlyRateTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(hourlyRateTHB))} />
                <SliderGroup label={dict.params.unitCost} min={0} max={500} step={5} value={unitCostManualTHB} onChange={setUnitCostManualTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(unitCostManualTHB))} />
                <SliderGroup label={dict.params.botPrice} min={7500} max={150000} step={500} value={botPriceTHB} onChange={setBotPriceTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(botPriceTHB))} />
                <SliderGroup label={dict.params.maintCost} min={500} max={15000} step={100} value={maintCostTHB} onChange={setMaintCostTHB} accent="accent-aetox-accent" displayValue={formatMoney(toCurrentDisplay(maintCostTHB))} />
              </div>
            </section>
          </div>

          {/* Right: Dashboard Area */}
          <div className="lg:w-[68%] p-5 md:p-8 flex flex-col justify-between space-y-6 bg-aetox-surface-lowest/20">
            {/* Top KPI Grid - Balanced Size */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2 font-sans">
              <div className="p-4 md:p-5 rounded-[24px] bg-emerald-500/10 border border-emerald-500/20 text-center shadow-sm transition-all hover:border-emerald-500/40">
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">{dict.kpis?.monthlySaving || 'ประหยัดได้/เดือน'}</p>
                <p className="text-xl md:text-2xl font-bold text-emerald-500 tracking-tight">{formatMoney(calc.monthlySaving)}</p>
              </div>
              <div className="p-4 md:p-5 rounded-[24px] bg-aetox-accent/10 border border-aetox-accent/20 text-center shadow-sm transition-all hover:border-aetox-accent/40">
                <p className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest mb-1">{dict.kpis?.payback || 'ระยะเวลาคืนทุน'}</p>
                <p className="text-xl md:text-2xl font-bold text-aetox-accent tracking-tight">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                <p className="text-[9px] font-bold text-aetox-accent/70 uppercase">{dict.kpis?.paybackUnit || 'เดือน (Payback)'}</p>
              </div>
              <div className="p-4 md:p-5 rounded-[24px] bg-white/5 border border-aetox-border text-center shadow-sm">
                <p className="text-[10px] font-bold text-aetox-text-muted uppercase tracking-widest mb-1">ต้นทุนที่ลดได้</p>
                <p className="text-xl md:text-2xl font-bold text-aetox-text-main tracking-tight">{calc.costReductionPct}%</p>
              </div>
              <div className="p-4 md:p-5 rounded-[24px] bg-white/5 border border-aetox-border text-center shadow-sm">
                <p className="text-[10px] font-bold text-aetox-text-muted uppercase tracking-widest mb-1">ROI ปีแรก</p>
                <p className="text-xl md:text-2xl font-bold text-aetox-text-main tracking-tight">{calc.roi}%</p>
              </div>
            </div>

            {/* Direct Comparison Table */}
            <div className="bg-white/[0.03] border border-aetox-border rounded-2xl overflow-hidden flex flex-col font-sans">
              <div className="px-5 py-4 border-b border-aetox-border flex justify-between items-center bg-white/[0.02]">
                <h4 className="text-sm font-semibold text-aetox-text-main flex items-center gap-2">
                  <BarChart3 size={16} className="text-aetox-accent" />
                  การวัดผลประสิทธิภาพ <span className="text-aetox-text-muted text-xs ml-1 tracking-tight font-medium">(Efficiency Benchmark)</span>
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-aetox-text-muted uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> AI Efficiency
                </div>
              </div>

              <div className="p-2 space-y-3">
                {/* AI Row - Upscaled */}
                <div className="flex items-center justify-between p-6 bg-aetox-surface-lowest rounded-[24px] border border-aetox-border transition-all hover:border-aetox-accent/50 group hover:shadow-xl hover:shadow-aetox-accent/5">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-aetox-accent-subtle flex items-center justify-center text-aetox-accent font-bold text-xl shadow-sm group-hover:scale-110 transition-transform">AI</div>
                    <div>
                      <p className="text-sm font-bold text-aetox-text-main uppercase tracking-tight">{dict.benchmark?.botLabel || 'บอท AETOX'}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">เสถียรภาพ 24/7</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">โอกาสพลาดน้อยมาก</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-12 items-center">
                    <div className="text-right hidden sm:block">
                      <p className="text-[11px] font-bold text-aetox-text-muted uppercase mb-1 tracking-widest">ระยะเวลางาน</p>
                      <p className="text-xl font-bold text-aetox-text-main tracking-tight">{calc.botHours.toFixed(1)} {dict.unitHours}</p>
                    </div>
                    <div className="text-right border-l border-aetox-border pl-12">
                      <p className="text-[11px] font-bold text-aetox-text-muted uppercase mb-1 tracking-widest">ต้นทุนรายเดือน</p>
                      <p className="text-2xl font-bold text-emerald-400 tracking-tight leading-none">{formatMoney(calc.totalAfter)}</p>
                    </div>
                  </div>
                </div>

                {/* Human Row - Upscaled & Highlight Risks */}
                <div className="flex items-center justify-between p-6 bg-aetox-surface-lowest rounded-[24px] border border-aetox-border transition-all hover:border-rose-500/50 group hover:shadow-xl hover:shadow-rose-500/5">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold text-xl shadow-sm group-hover:scale-110 transition-transform">{staffCount}</div>
                    <div>
                      <p className="text-sm font-bold text-aetox-text-main uppercase tracking-tight">{dict.benchmark?.manualLabel || 'ทีมงานคน'}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] font-bold rounded uppercase">ตรวจพบคอขวด</span>
                        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] font-bold rounded uppercase">พื้นที่ความเสี่ยงสูง</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-12 items-center">
                    <div className="text-right hidden sm:block">
                      <p className="text-[11px] font-bold text-aetox-text-muted uppercase mb-1 tracking-widest">ระยะเวลางาน</p>
                      <p className="text-xl font-bold text-aetox-text-main tracking-tight">{calc.manualDurationHours.toFixed(1)} {dict.unitHours}</p>
                    </div>
                    <div className="text-right border-l border-aetox-border pl-12">
                      <p className="text-[11px] font-bold text-aetox-text-muted uppercase mb-1 tracking-widest">ต้นทุนรายเดือน</p>
                      <p className="text-2xl font-bold text-rose-400 tracking-tight leading-none">{formatMoney(calc.totalBefore)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 bg-aetox-accent/5 border-t border-aetox-border flex justify-between items-center font-sans">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-aetox-accent/20 text-aetox-accent shadow-sm"><Clock size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-aetox-text-muted uppercase tracking-widest mb-1">มูลค่ารวมที่ประหยัดได้ต่อปี</p>
                    <p className="text-3xl font-bold text-emerald-400 tracking-tight leading-none">{formatMoney(calc.annualSaving, true, false)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">อัตราการเร่งประสิทธิภาพ</p>
                  <p className="text-4xl font-bold text-aetox-accent tracking-tight leading-none">{calc.speedX}x <span className="text-lg uppercase ml-1">ไวกว่า</span></p>
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
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-widest">
                  <Zap size={12} /> ทางออก: ข้อได้เปรียบของ AI
                </div>
                <p className="text-[11px] text-aetox-text-soft leading-relaxed font-medium">
                  AI ทำงานได้ <span className="text-emerald-400 font-bold">24/7</span> โดยไม่มีความเหนื่อยล้า และสามารถขยายตัวรองรับงานเพิ่มขึ้น <span className="text-emerald-400 font-bold">100 เท่า</span> ได้โดยไม่ต้องเพิ่มต้นทุนแรงงาน
                </p>
              </div>
            </div>

            {/* Payback Info Summary */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-dashed border-aetox-border bg-white/[0.01]">
              <div className="p-3 rounded-full bg-aetox-accent/10 text-aetox-accent"><Info size={18} /></div>
              <p className="text-xs font-medium text-aetox-text-soft leading-relaxed italic">
                วิเคราะห์จากการประมวลผลงาน <span className="text-aetox-text-main font-bold">{fmt(volume)} รายการ</span> ต่อเดือน 
                ระบบบอทสามารถคืนทุนค่าติดตั้ง (<span className="text-aetox-text-main font-bold">{formatMoney(calc.botPrice)}</span>) ได้ภายในเวลาเพียง 
                <span className="text-emerald-500 font-black ml-1 text-base">{calc.paybackMonths.toFixed(1)} เดือน</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
