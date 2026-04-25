'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Zap, Layers, ServerCrash, RotateCcw, TrendingUp, Tag, Globe, ArrowRight, Calendar, Info, HelpCircle, BarChart3, Clock, Wallet, ShieldCheck } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

type Complexity = 'light' | 'medium' | 'heavy';
type Timeframe = 6 | 12 | 36;

const workloadConfig = {
  light: {
    label: 'งานระดับพื้นฐาน',
    sublabel: 'คีย์ข้อมูล / จัดการเอกสารทั่วไป',
    humanSeconds: 60,
    botSeconds: 6,
    defaultVolume: 1000,
    defaultStaff: 2,
    defaultHourlyRate: 100,
    defaultUnitCost: 5,
    defaultBotPrice: 10000,
    defaultMaint: 1000,
    icon: 'zap'
  },
  medium: {
    label: 'งานระดับกลาง',
    sublabel: 'ตรวจสอบ / ดึงข้อมูลจากหลายแหล่ง',
    humanSeconds: 180,
    botSeconds: 25,
    defaultVolume: 10000,
    defaultStaff: 6,
    defaultHourlyRate: 120,
    defaultUnitCost: 25,
    defaultBotPrice: 35000,
    defaultMaint: 2500,
    icon: 'layers'
  },
  heavy: {
    label: 'งานระดับซับซ้อน',
    sublabel: 'เชื่อมต่อหลายระบบ / งานเชิงตรรกะ',
    humanSeconds: 420,
    botSeconds: 45,
    defaultVolume: 50000,
    defaultStaff: 15,
    defaultHourlyRate: 150,
    defaultUnitCost: 100,
    defaultBotPrice: 75000,
    defaultMaint: 5000,
    icon: 'server'
  },
} as const;

const theme = {
  primary: 'text-[#06B6D4]',
  success: 'text-emerald-400',
  error: 'text-rose-400',
  botGrad: 'linear-gradient(to right,#059669,#34d399)',
  botGlow: '0 0 20px rgba(52,211,153,0.3)',
  botBorder: 'border-emerald-500/30',
  botBg: 'bg-emerald-500/10'
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  if (name === 'zap') return <Zap size={size} />;
  if (name === 'layers') return <Layers size={size} />;
  return <ServerCrash size={size} />;
}

export default function AutomationSimulator() {
  const { currency, exchangeRate, formatCurrency } = useCurrency();
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [timeframe, setTimeframe] = useState<Timeframe>(6);

  const [volume, setVolume] = useState(10000);
  const [staffCount, setStaffCount] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(120);
  const [unitCostManual, setUnitCostManual] = useState(25);
  const [botPrice, setBotPrice] = useState(35000);
  const [maintCost, setMaintCost] = useState(1200);

  // Sync values when currency changes to keep them realistic
  useEffect(() => {
    if (currency === 'USD' && hourlyRate > 100) {
      setHourlyRate(Math.round(hourlyRate / exchangeRate));
      setUnitCostManual(Math.round(unitCostManual / exchangeRate));
      setBotPrice(Math.round(botPrice / exchangeRate / 100) * 100);
      setMaintCost(Math.round(maintCost / exchangeRate / 10) * 10);
    } else if (currency === 'THB' && hourlyRate < 50) {
      setHourlyRate(Math.round(hourlyRate * exchangeRate));
      setUnitCostManual(Math.round(unitCostManual * exchangeRate));
      setBotPrice(Math.round(botPrice * exchangeRate / 1000) * 1000);
      setMaintCost(Math.round(maintCost * exchangeRate / 100) * 100);
    }
  }, [currency]);

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

  const c = workloadConfig[complexity];

  const calc = useMemo(() => {
    const manualHours = (volume * c.humanSeconds) / 3600;
    const botHours = (volume * c.botSeconds) / 3600;
    const savedHours = manualHours - botHours;
    const speedX = Math.round(manualHours / Math.max(botHours, 0.001));
    const efficiency = ((savedHours / manualHours) * 100).toFixed(1);

    const errRate = 0.05;
    const errValuePerPoint = complexity === 'light' ? 50 : complexity === 'medium' ? 150 : 350;
    const errValueConverted = currency === 'USD' ? errValuePerPoint / exchangeRate : errValuePerPoint;
    const errBefore = Math.floor(volume * errRate);
    const errCostBefore = errBefore * errValueConverted;

    const laborBefore = manualHours * hourlyRate;
    const overheadBefore = volume * unitCostManual;
    const totalBefore = laborBefore + errCostBefore + overheadBefore;

    const laborAfter = botHours * (hourlyRate * 0.1);
    const totalAfter = maintCost + laborAfter;

    const monthlySaving = totalBefore - totalAfter;
    const annualSaving = monthlySaving * 12;
    const paybackMonths = monthlySaving > 0 ? botPrice / monthlySaving : 999;
    const roi = monthlySaving > 0 ? ((annualSaving - botPrice) / botPrice * 100).toFixed(0) : '0';

    const costPerUnitBefore = totalBefore / Math.max(volume, 1);
    const costPerUnitAfter = totalAfter / Math.max(volume, 1);

    const projection = Array.from({ length: timeframe }, (_, i) => {
      const month = i + 1;
      const cumSaving = monthlySaving * month;

      let label = "";
      if (timeframe === 6) label = `เดือนที่ ${month}`;
      else if (timeframe === 12) {
        if (month === 1) label = "เดือนแรก";
        else if (month % 3 === 0) label = `เดือนที่ ${month}`;
      }
      else {
        if (month === 1) label = "ปีที่ 1";
        else if (month === 13) label = "ปีที่ 2";
        else if (month === 25) label = "ปีที่ 3";
        else if (month % 12 === 0) label = `ด. ${month}`;
      }

      return {
        month,
        label,
        cumSaving,
        breakEven: cumSaving >= botPrice,
      };
    });

    const maxProjectionValue = projection[projection.length - 1].cumSaving;
    const botBarPct = Math.min(Math.max((botHours / Math.max(manualHours, 0.001)) * 100, 1), 99);

    const totalPeriodSavings = monthlySaving * timeframe;
    const netProfitAfterInvestment = totalPeriodSavings - botPrice;
    const totalHoursSavedLongTerm = savedHours * timeframe;
    const costReductionPct = ((costPerUnitBefore - costPerUnitAfter) / costPerUnitBefore * 100).toFixed(0);

    return {
      manualHours, botHours, savedHours, speedX, efficiency, errBefore, errCostBefore, overheadBefore,
      laborBefore, totalBefore, laborAfter, totalAfter,
      monthlySaving, annualSaving, paybackMonths, roi, projection, botBarPct,
      costPerUnitBefore, costPerUnitAfter, maxProjectionValue,
      totalPeriodSavings, netProfitAfterInvestment, totalHoursSavedLongTerm, costReductionPct
    };
  }, [volume, staffCount, hourlyRate, unitCostManual, botPrice, maintCost, complexity, timeframe, currency]);

  const formatMoney = (value: number, showLabel = true, short = true) => {
    const symbol = currency === 'USD' ? '$' : '฿';

    let result = '';
    if (value >= 1000000 && short) {
      result = `${symbol}${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000 && short) {
      result = `${symbol}${(value / 1000).toFixed(1)}K`;
    } else {
      result = `${symbol}${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }

    return showLabel ? `${result}` : result;
  };

  const fmt = (n: number) => n.toLocaleString('th-TH', { maximumFractionDigits: 0 });

  function KpiCard({ label, valInCurrency, detail, accent = false, color = 'text-white' }: { label: string; valInCurrency: number; detail: string; accent?: boolean; color?: string }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-500 min-h-[140px] flex flex-col justify-between relative group ${accent ? 'bg-emerald-500/5 border-emerald-500/20 shadow-[0_0_30px_rgba(52,185,129,0.05)]' : 'bg-white/[0.03] border-white/10 hover:border-white/20'}`}>
        <div className="absolute top-4 right-4 z-20">
          <div className="relative group/tooltip">
            <button onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} onClick={() => setShowInfo(!showInfo)} className="p-1 -m-1 focus:outline-none">
              <HelpCircle size={16} className={`${showInfo ? 'text-emerald-400' : 'text-gray-600'} hover:text-emerald-400 cursor-help transition-colors`} />
            </button>
            <div className={`absolute right-0 top-7 w-64 p-4 bg-[#1A1F2E] border border-white/10 rounded-xl shadow-2xl transition-all duration-300 z-50 text-[11px] leading-relaxed text-gray-300 font-medium ${showInfo ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              {detail}
              <div className="absolute -top-1 right-1.5 w-2 h-2 bg-[#1A1F2E] rotate-45 border-t border-l border-white/10" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 font-bold mb-3 tracking-wide">{label}</p>
          <div className="space-y-2">
            <p className={`text-xl sm:text-2xl lg:text-3xl font-bold tabular-nums leading-none ${color}`}>{formatMoney(valInCurrency, false)}</p>
            <p className={`text-[14px] font-bold ${color} opacity-70 tracking-wide`}>หน่วย: {currency === 'THB' ? 'บาท (THB)' : 'USD'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-20">

      {/* PART 1: SIMULATOR & PARAMETERS */}
      <div className="bg-[#0A0F1C] text-white rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
        {/* HEADER */}
        <div className="px-6 sm:px-8 py-6 border-b border-white/5 bg-white/[0.02]">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-none mb-1 text-white">
              จำลองจุดคืนทุน — <span className="text-[#06B6D4]">Automation Simulator</span>
            </h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold opacity-70">วิเคราะห์ต้นทุนและพารามิเตอร์ระบบ</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* CONTROL PANEL */}
          <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/5 p-6 sm:p-8 space-y-10 bg-black/20">
            <div className="flex justify-between items-center pb-6 border-b border-white/5">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Currency Control</span>
              <div className="flex items-center gap-3">
                <CurrencySwitcher />
                <button onClick={() => updateComplexity('medium')} className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"><RotateCcw size={14} /></button>
              </div>
            </div>
            <section className="space-y-5">
              <h3 className="text-xs sm:text-sm font-bold text-gray-400 border-l-4 border-[#06B6D4] pl-4 uppercase tracking-widest">เลือกประเภทงาน</h3>
              <div className="flex flex-col gap-3">
                {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                  const active = complexity === lvl;
                  return (
                    <button key={lvl} onClick={() => updateComplexity(lvl)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 border text-left active:scale-95 ${active ? 'bg-white/10 text-white border-[#06B6D4]/40 shadow-[0_0_20px_rgba(6,182,212,0.05)]' : 'text-gray-400 border-transparent bg-white/[0.01]'}`}>
                      <span className={active ? 'text-[#06B6D4]' : ''}><Icon name={workloadConfig[lvl].icon} size={20} /></span>
                      <div className="flex-1">
                        <p className="font-bold mb-0.5">{workloadConfig[lvl].label}</p>
                        <p className="text-[10px] opacity-50 font-medium uppercase">{workloadConfig[lvl].sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-xs sm:text-sm font-bold text-gray-400 border-l-4 border-[#06B6D4] pl-4 uppercase tracking-widest">ปรับตั้งค่าพารามิเตอร์</h3>
              <div className="grid grid-cols-1 gap-7">
                {[
                  { label: 'จำนวนงาน / เดือน', min: 100, max: 100000, step: 100, val: volume, set: setVolume, accent: 'accent-[#06B6D4]', fmt: (v: number) => `${v.toLocaleString()}` },
                  { label: 'พนักงาน (คน)', min: 1, max: 30, step: 1, val: staffCount, set: setStaffCount, accent: 'accent-indigo-400', fmt: (v: number) => `${v}` },
                  { label: 'ค่าจ้าง/ชม.', min: 50, max: 500, step: 10, val: hourlyRate, set: setHourlyRate, accent: 'accent-rose-400', fmt: (v: number) => formatMoney(v) },
                  { label: 'ต้นทุนแฝง/งาน', min: 0, max: 500, step: 5, val: unitCostManual, set: setUnitCostManual, accent: 'accent-amber-400', fmt: (v: number) => formatMoney(v) },
                  { label: 'ลงทุนบอท (Capex)', min: 7500, max: 120000, step: 500, val: botPrice, set: setBotPrice, accent: 'accent-[#06B6D4]', fmt: (v: number) => formatMoney(v) },
                  { label: 'บำรุงรักษา (Opex)', min: 500, max: 15000, step: 100, val: maintCost, set: setMaintCost, accent: 'accent-amber-400', fmt: (v: number) => formatMoney(v) },
                ].map((s) => (
                  <div key={s.label} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">{s.label}</label>
                      <span className="text-sm font-bold text-white tabular-nums">{s.fmt(s.val)}</span>
                    </div>
                    <input type="range" min={s.min} max={s.max} step={s.step} value={s.val} onChange={(e) => s.set(Number(e.target.value))} className={`w-full h-1.5 rounded-full cursor-pointer bg-white/10 ${s.accent}`} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* MAIN KPIs AREA */}
          <div className="lg:w-[65%] p-6 sm:p-8 space-y-8 bg-black/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <KpiCard label="ประหยัดได้ / เดือน" valInCurrency={calc.monthlySaving} accent color="text-emerald-400" detail="ยอดเงินประหยัดรายเดือนสุทธิหลังจากหักลบค่าใช้จ่ายระบบแล้ว" />
              <div className="p-6 rounded-2xl border bg-white/[0.03] border-white/10 min-h-[140px] flex flex-col justify-between relative group">
                <div className="absolute top-4 right-4 z-20"><HelpCircle size={16} className="text-gray-600 hover:text-emerald-400 cursor-help" /></div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold mb-3 tracking-wide">ระยะเวลาคืนทุน</p>
                  <div className="space-y-2">
                    <p className="text-2xl lg:text-3xl font-bold text-emerald-400 leading-none">{calc.paybackMonths < 100 ? calc.paybackMonths.toFixed(1) : '—'}</p>
                    <p className="text-[14px] font-bold text-emerald-400 opacity-70 tracking-wide">หน่วย: เดือน (Payback)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-950/20 border border-rose-500/20 rounded-[2rem] p-8 space-y-4 shadow-xl">
                <p className="text-sm font-bold text-rose-400 mb-2">❌ ระบบเดิม (Manual)</p>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center"><span className="text-gray-400 font-medium">เวลาทำงานรวม</span><span className="font-bold text-white">{calc.manualHours.toFixed(1)} ชม./ด.</span></div>
                  <div className="flex justify-between items-center border-b border-rose-500/10 pb-3"><span className="text-gray-400 font-medium">ต้นทุนรวมปัจจุบัน</span><span className="font-bold text-rose-300">{formatMoney(calc.totalBefore)}</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-gray-400 font-bold text-xs">ต้นทุนต่องาน</span><span className="font-bold text-white text-xl">{formatMoney(calc.costPerUnitBefore)}</span></div>
                </div>
              </div>
              <div className={`${theme.botBg} border ${theme.botBorder} rounded-[2rem] p-8 space-y-4 shadow-xl`}>
                <p className={`text-sm font-bold flex items-center gap-2 mb-2 ${theme.success}`}>✅ ระบบอัตโนมัติ (Bot)</p>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center"><span className="text-gray-400 font-medium">งบลงทุนบอท</span><span className="font-bold text-white">{formatMoney(botPrice)}</span></div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-gray-400 font-medium">ค่าบำรุงรักษา</span><span className={`font-bold ${theme.success}`}>{formatMoney(maintCost)}/ด.</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="text-gray-400 font-bold text-xs">ต้นทุนต่องาน</span><span className={`font-bold text-xl ${theme.success}`}>{formatMoney(calc.costPerUnitAfter)}</span></div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1321] border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Zap size={100} /></div>
              <p className="text-[11px] sm:text-xs font-extrabold text-gray-300 border-b border-white/5 pb-4 tracking-wide">การวัดผลประสิทธิภาพ (Efficiency Benchmark)</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-sm font-bold text-white">บอท AETOX</span><span className={`text-lg font-bold ${theme.success}`}>{calc.botHours.toFixed(1)} ชม.</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5"><div className="h-full rounded-full transition-all duration-1000" style={{ width: `${calc.botBarPct}%`, background: theme.botGrad, boxShadow: theme.botGlow }} /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end"><span className="text-sm font-bold text-gray-400">ทีมงานคน ({staffCount} คน)</span><span className="text-lg font-bold text-rose-400">{calc.manualHours.toFixed(1)} ชม.</span></div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5"><div className="h-full w-full rounded-full" style={{ background: 'linear-gradient(to right,#9f1239,#f43f5e)' }} /></div>
                </div>
              </div>
              <div className="flex justify-center gap-10 pt-4 border-t border-white/5 font-bold text-[11px] sm:text-sm uppercase tracking-wider">
                <span className="text-emerald-400">ประหยัดเวลา {fmt(calc.savedHours)} ชม.</span>
                <span className={theme.success}>เร็วกว่าเดิม {calc.speedX} เท่า</span>
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
              <p className="text-lg sm:text-xl font-bold text-white flex items-center gap-3 mb-1"><TrendingUp size={24} className="text-[#06B6D4]" /> การคาดการณ์กำไรสะสม (ROI Projection)</p>
              <p className="text-[10px] text-gray-500 ml-9 uppercase tracking-widest font-bold">พยากรณ์ผลตอบแทนสะสมในระยะเวลา {timeframe} เดือน</p>
            </div>
            <div className="bg-black/40 p-1.5 rounded-2xl border border-white/10 flex items-center gap-1 w-full sm:w-auto shadow-inner">
              {[{ val: 6, label: '6 เดือน' }, { val: 12, label: '1 ปี' }, { val: 36, label: '3 ปี' }].map((t) => (
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
                    return (
                      <div key={p.month} className="flex flex-col items-center h-full justify-end group relative z-10">
                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                          <div className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xl">{formatMoney(p.cumSaving, true, false)}</div>
                        </div>
                        {p.label && <div className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold mb-3 whitespace-nowrap transition-all border ${p.label.includes('ปี') ? 'bg-white/10 text-white border-white/20' : 'bg-white/5 text-gray-500 border-white/10'}`}>{p.label}</div>}
                        <div className="w-full bg-white/[0.02] rounded-t-2xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/20 relative" style={{ height: `${Math.max(pct, 4)}%` }}>
                          <div className="w-full h-full rounded-t-2xl transition-all duration-1000" style={{ background: p.breakEven ? theme.botGrad : '#374151', boxShadow: p.breakEven ? theme.botGlow : 'none' }} />
                        </div>
                        <div className="mt-4 min-h-[40px] flex flex-col items-center">
                          {isBreakEvenPoint && <div className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-sm animate-bounce">🚀 คืนทุน</div>}
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
                <div><p className="text-base font-bold text-white">ผลตอบแทนรายเดือน</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monthly Performance</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">กำไรสุทธิ / เดือน</span><span className="text-2xl font-bold text-emerald-400 tabular-nums">{formatMoney(calc.monthlySaving)}</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">ค่าบำรุงรักษา (Opex)</span><span className="text-lg font-bold text-gray-400 tabular-nums">{formatMoney(maintCost)}</span></div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Wallet size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] group-hover:scale-110 transition-transform shadow-inner"><Wallet size={28} /></div>
                <div><p className="text-base font-bold text-white">สรุปกำไรรวมระยะยาว</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Accumulated ROI</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">กำไรรวม {timeframe} เดือน</span><span className="text-2xl font-bold text-white tabular-nums">{formatMoney(calc.netProfitAfterInvestment)}</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">อัตราการลดต้นทุน</span><span className="text-lg font-bold text-[#06B6D4] tabular-nums">{calc.costReductionPct}%</span></div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all"><Clock size={120} /></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-inner"><Clock size={28} /></div>
                <div><p className="text-base font-bold text-white">ขีดความสามารถที่เพิ่มขึ้น</p><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Capacity & Resource Gains</p></div>
              </div>
              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-4"><span className="text-gray-400 text-xs font-medium">รวมเวลาที่เซฟได้</span><span className="text-2xl font-bold text-indigo-400 tabular-nums">{fmt(calc.totalHoursSavedLongTerm)} ชม.</span></div>
                <div className="flex justify-between items-end"><span className="text-gray-400 text-xs font-medium">ค่า Error เฉลี่ย (Human)</span><span className="text-lg font-bold text-white tabular-nums">5.0%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
