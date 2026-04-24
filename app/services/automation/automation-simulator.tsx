'use client';
import React, { useState, useMemo } from 'react';
import { Zap, Layers, ServerCrash, RotateCcw, TrendingUp, Clock, AlertTriangle, DollarSign, Cpu, User, ShieldCheck, Tag, Globe } from 'lucide-react';

type Complexity = 'light' | 'medium' | 'heavy';
type Currency = 'THB' | 'USD';

const workloadConfig = {
  light:  { 
    label: 'งานระดับพื้นฐาน',  
    sublabel: 'คีย์ข้อมูล / จัดการเอกสารทั่วไป', 
    humanSeconds: 60,  
    botSeconds: 6,   
    defaultVolume: 10000,
    defaultStaff: 2,
    defaultHourlyRate: 100,
    defaultBotPrice: 25000,
    defaultMaint: 1000,
    icon: 'zap' 
  },
  medium: { 
    label: 'งานระดับกลาง', 
    sublabel: 'ตรวจสอบ / ดึงข้อมูลจากหลายแหล่ง', 
    humanSeconds: 180, 
    botSeconds: 25,  
    defaultVolume: 35000,
    defaultStaff: 4,
    defaultHourlyRate: 120,
    defaultBotPrice: 65000,
    defaultMaint: 2500,
    icon: 'layers' 
  },
  heavy:  { 
    label: 'งานระดับซับซ้อน', 
    sublabel: 'เชื่อมต่อหลายระบบ / งานเชิงตรรกะ', 
    humanSeconds: 420, 
    botSeconds: 45,  
    defaultVolume: 65000,
    defaultStaff: 8,
    defaultHourlyRate: 150,
    defaultBotPrice: 100000,
    defaultMaint: 5000,
    icon: 'server' 
  },
} as const;

const themeByComplexity = {
  light:  { text: 'text-[#06B6D4]',  dot: 'bg-[#06B6D4]',  border: 'border-[#06B6D4]/30',  bg: 'bg-[#06B6D4]/10',  grad: 'linear-gradient(to right,#0891b2,#06B6D4)', glow: '4px 0 16px rgba(6,182,212,0.5)' },
  medium: { text: 'text-emerald-400', dot: 'bg-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', grad: 'linear-gradient(to right,#059669,#34d399)',  glow: '4px 0 16px rgba(52,211,153,0.5)' },
  heavy:  { text: 'text-amber-400',   dot: 'bg-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   grad: 'linear-gradient(to right,#d97706,#fbbf24)',  glow: '4px 0 16px rgba(251,191,36,0.5)' },
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  if (name === 'zap') return <Zap size={size} />;
  if (name === 'layers') return <Layers size={size} />;
  return <ServerCrash size={size} />;
}

export default function AutomationSimulator() {
  const [complexity,   setComplexity]   = useState<Complexity>('medium');
  const [currency,     setCurrency]     = useState<Currency>('THB');
  
  const [volume,       setVolume]       = useState(35000);
  const [staffCount,   setStaffCount]   = useState(4);
  const [hourlyRate,   setHourlyRate]   = useState(120);
  const [botPrice,     setBotPrice]     = useState(65000);
  const [maintCost,    setMaintCost]    = useState(2500);

  const EXCHANGE_RATE = 35.5;

  const updateComplexity = (lvl: Complexity) => {
    const cfg = workloadConfig[lvl];
    setComplexity(lvl);
    setVolume(cfg.defaultVolume);
    setStaffCount(cfg.defaultStaff);
    setHourlyRate(cfg.defaultHourlyRate);
    setBotPrice(cfg.defaultBotPrice);
    setMaintCost(cfg.defaultMaint);
  };

  const c = workloadConfig[complexity];
  const th = themeByComplexity[complexity];

  const calc = useMemo(() => {
    const manualHours = (volume * c.humanSeconds) / 3600;
    const botHours    = (volume * c.botSeconds)   / 3600;
    const savedHours  = manualHours - botHours;
    const speedX      = Math.round(manualHours / Math.max(botHours, 0.001));
    const efficiency  = ((savedHours / manualHours) * 100).toFixed(1);

    const errRate = 0.05;
    const errValuePerPoint = complexity === 'light' ? 50 : complexity === 'medium' ? 150 : 350;
    const errBefore = Math.floor(volume * errRate);
    const errCostBefore = errBefore * errValuePerPoint;

    const laborBefore  = manualHours * hourlyRate;
    const totalBefore  = laborBefore + errCostBefore;

    const laborAfter   = botHours * (hourlyRate * 0.1);
    const totalAfter   = maintCost + laborAfter;
    
    const monthlySaving = totalBefore - totalAfter;
    const annualSaving  = monthlySaving * 12;
    const paybackMonths = monthlySaving > 0 ? botPrice / monthlySaving : 999;
    const roi           = monthlySaving > 0 ? ((annualSaving - botPrice) / botPrice * 100).toFixed(0) : '0';

    const costPerUnitBefore = totalBefore / Math.max(volume, 1);
    const costPerUnitAfter  = totalAfter / Math.max(volume, 1);

    const projection = Array.from({ length: 6 }, (_, i) => ({
      month: i + 1,
      cumSaving: monthlySaving * (i + 1),
      breakEven: monthlySaving * (i + 1) >= botPrice,
    }));

    // Find Max Projection for Scaling
    const maxProjectionValue = projection[5].cumSaving;

    const botBarPct = Math.min(Math.max((botHours / Math.max(manualHours, 0.001)) * 100, 1), 99);

    return { manualHours, botHours, savedHours, speedX, efficiency, errBefore, errCostBefore,
      laborBefore, totalBefore, laborAfter, totalAfter, 
      monthlySaving, annualSaving, paybackMonths, roi, projection, botBarPct,
      costPerUnitBefore, costPerUnitAfter, maxProjectionValue };
  }, [volume, staffCount, hourlyRate, botPrice, maintCost, complexity]);

  const formatMoney = (valInTHB: number, showLabel = true) => {
    const value = currency === 'USD' ? valInTHB / EXCHANGE_RATE : valInTHB;
    const symbol = currency === 'USD' ? '$' : '฿';
    const label = currency === 'USD' ? ' USD' : ' บาท';
    
    let result = '';
    if (value >= 1000000) {
      result = `${symbol}${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      result = `${symbol}${(value / 1000).toFixed(1)}K`;
    } else {
      result = `${symbol}${value.toLocaleString(undefined, { maximumFractionDigits: 1 })}`;
    }
    
    return showLabel ? `${result}${label}` : result;
  };

  const fmt = (n: number) => n.toLocaleString('th-TH', { maximumFractionDigits: 0 });

  function KpiCard({ label, valTHB, sub, accent = false, color = 'text-white' }: { label: string; valTHB: number; sub?: string; accent?: boolean; color?: string }) {
    return (
      <div className={`p-4 rounded-xl border transition-all duration-300 min-h-[110px] flex flex-col justify-between ${accent ? 'bg-[#06B6D4]/10 border-[#06B6D4]/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'bg-white/[0.03] border-white/10'}`}>
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold truncate">{label}</p>
          <p className={`text-xl lg:text-2xl font-black tabular-nums leading-tight ${color}`}>{formatMoney(valTHB, false)}</p>
          <p className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">{currency === 'THB' ? 'Thai Baht' : 'US Dollars'}</p>
        </div>
        {sub && <p className="text-[10px] text-gray-400 mt-2 font-medium opacity-80 line-clamp-1">{sub}</p>}
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#0A0F1C] text-white rounded-3xl border border-white/10 shadow-2xl font-sans overflow-hidden">
      {/* HEADER */}
      <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center bg-white/[0.02] gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight leading-none mb-2">
            วิเคราะห์จุดคืนทุน — <span className="text-[#06B6D4]">ระบบ Automation</span>
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">Investment Breakdown & Performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-black/40 p-1 rounded-xl border border-white/10 flex items-center gap-1">
             <button onClick={() => setCurrency('THB')} className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${currency === 'THB' ? 'bg-[#06B6D4] text-white' : 'text-gray-500 hover:text-gray-300'}`}>THB (฿)</button>
             <button onClick={() => setCurrency('USD')} className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${currency === 'USD' ? 'bg-[#06B6D4] text-white' : 'text-gray-500 hover:text-gray-300'}`}>USD ($)</button>
          </div>
          <button onClick={() => updateComplexity('medium')}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-all active:scale-95">
            <RotateCcw size={14} /> รีเซ็ต
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[35%] border-r border-white/5 p-8 space-y-10 bg-black/20">
          <section className="space-y-6">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.15em] border-l-4 border-[#06B6D4] pl-4">1. ประเภทกระบวนการงาน</h3>
            <div className="flex flex-col gap-3">
              {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
                const active = complexity === lvl;
                const t = themeByComplexity[lvl];
                return (
                  <button key={lvl} onClick={() => updateComplexity(lvl)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 border text-left active:scale-95 ${
                      active ? `bg-white/10 text-white ${t.border} shadow-[0_0_20px_rgba(255,255,255,0.05)]` : 'text-gray-500 hover:text-gray-300 border-transparent bg-white/[0.01]'}`}>
                    <span className={active ? t.text : ''}><Icon name={workloadConfig[lvl].icon} size={20} /></span>
                    <div className="flex-1">
                      <p className="text-base font-black mb-1">{workloadConfig[lvl].label}</p>
                      <p className="text-xs font-medium opacity-50">{workloadConfig[lvl].sublabel}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.15em] border-l-4 border-[#06B6D4] pl-4">2. ปรับพารามิเตอร์ทีมงาน</h3>
            <div className="grid grid-cols-1 gap-7">
              {[
                { label: 'จำนวนงาน / เดือน', min: 100, max: 100000, step: 100, val: volume, set: setVolume, accent: 'accent-[#06B6D4]', fmt: (v:number) => `${v.toLocaleString()} รายการ` },
                { label: 'จำนวนพนักงานเดิม (คน)', min: 1, max: 20, step: 1, val: staffCount, set: setStaffCount, accent: 'accent-indigo-400', fmt: (v:number) => `${v} คน` },
                { label: 'ค่าจ้างเฉลี่ย (ต่อชม.)', min: 50, max: 500, step: 10, val: hourlyRate, set: setHourlyRate, accent: 'accent-rose-400', fmt: (v:number) => formatMoney(v) },
                { label: 'ค่าตัว BOT (จ่ายครั้งเดียว)', min: 10000, max: 100000, step: 1000, val: botPrice, set: setBotPrice, accent: 'accent-[#06B6D4]', fmt: (v:number) => formatMoney(v) },
                { label: 'ค่าบำรุงรักษา / เดือน', min: 0, max: 5000, step: 100, val: maintCost, set: setMaintCost, accent: 'accent-amber-400', fmt: (v:number) => formatMoney(v) },
              ].map((s) => (
                <div key={s.label} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] text-gray-400 uppercase tracking-wider font-black">{s.label}</label>
                    <span className="text-sm font-black text-white tabular-nums bg-white/5 px-2 py-0.5 rounded border border-white/5">{s.fmt(s.val)}</span>
                  </div>
                  <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                    onChange={(e) => s.set(Number(e.target.value))}
                    className={`w-full h-1.5 rounded-full cursor-pointer ${s.accent}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:w-[65%] p-8 space-y-8 bg-black/5">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <KpiCard label="ประหยัดได้ / เดือน" valTHB={calc.monthlySaving} sub="รวมค่าแรงและ Error" accent color="text-[#06B6D4]" />
            <div className="p-4 rounded-xl border bg-white/[0.03] border-white/10 min-h-[110px] flex flex-col justify-between">
               <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">ระยะเวลาคืนทุน</p>
                  <p className="text-xl lg:text-2xl font-black text-emerald-400">{calc.paybackMonths < 100 ? `${calc.paybackMonths.toFixed(1)} เดือน` : 'ไม่คุ้มทุน'}</p>
               </div>
               <p className="text-[10px] text-gray-400 mt-2 font-medium opacity-80">Capex: {formatMoney(botPrice)}</p>
            </div>
            <KpiCard label="กำไรสะสมปีแรก" valTHB={calc.annualSaving - botPrice} sub="หักงบลงทุนบอทแล้ว" color="text-white" />
            <div className="p-4 rounded-xl border bg-white/[0.03] border-white/10 min-h-[110px] flex flex-col justify-between">
               <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">ROI ปีแรก (%)</p>
                  <p className={`text-xl lg:text-2xl font-black ${Number(calc.roi) > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{calc.roi}%</p>
               </div>
               <p className="text-[10px] text-gray-400 mt-2 font-medium opacity-80">Return on Inv.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-950/20 border border-rose-500/20 rounded-[2rem] p-6 space-y-4 shadow-xl">
              <p className="text-xs font-black text-rose-400 uppercase tracking-[0.25em] flex items-center gap-2 mb-2">❌ ระบบเดิม (Manual)</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center"><span className="text-gray-400">เวลาทำงานรวม</span><span className="font-black tabular-nums text-white">{calc.manualHours.toFixed(1)} ชม./ด.</span></div>
                <div className="flex justify-between items-center border-b border-rose-500/10 pb-2"><span className="text-gray-400">ต้นทุนรวมปัจจุบัน</span><span className="font-black text-rose-300 tabular-nums">{formatMoney(calc.totalBefore)}</span></div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-400 flex items-center gap-1 font-bold text-xs"><Tag size={12}/>ต้นทุนต่องาน</span>
                  <span className="font-black tabular-nums text-white text-base">{formatMoney(calc.costPerUnitBefore)}</span>
                </div>
              </div>
            </div>
            <div className={`${th.bg} border ${th.border} rounded-[2rem] p-6 space-y-4 shadow-xl`}>
              <p className={`text-xs font-black uppercase tracking-[0.25em] flex items-center gap-2 mb-2 ${th.text}`}>✅ ระบบอัตโนมัติ (Bot)</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center"><span className="text-gray-400">งบลงทุนบอท</span><span className="font-black tabular-nums text-white">{formatMoney(botPrice)} ครั้งเดียว</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2"><span className="text-gray-400">ค่าบำรุงรักษา</span><span className={`font-black tabular-nums ${th.text}`}>{formatMoney(maintCost)}/ด.</span></div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-400 flex items-center gap-1 font-bold text-xs"><Tag size={12}/>ต้นทุนต่องาน</span>
                  <span className={`font-black tabular-nums text-base ${th.text}`}>{formatMoney(calc.costPerUnitAfter)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0D1321] border border-white/5 rounded-3xl p-7 space-y-6 shadow-2xl relative overflow-hidden">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-4 font-sans">การวัดผลประสิทธิภาพการทำงาน (Benchmark)</p>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-end"><span className="text-sm font-bold text-white uppercase tracking-wider">ระบบบอท AETOX</span><span className={`text-lg font-black tabular-nums ${th.text}`}>{calc.botHours.toFixed(1)} ชม.</span></div>
                <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${calc.botBarPct}%`, background: th.grad, boxShadow: th.glow }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end"><span className="text-sm font-bold text-gray-400 uppercase tracking-wider">ทีมงานคน ({staffCount} คน)</span><span className="text-lg font-black text-rose-400 tabular-nums">{calc.manualHours.toFixed(1)} ชม.</span></div>
                <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full w-full rounded-full" style={{ background: 'linear-gradient(to right,#9f1239,#f43f5e)' }} />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-10 pt-4 border-t border-white/5 font-black uppercase tracking-[0.1em] text-xs">
              <span className="text-emerald-400">ประหยัดได้ {fmt(calc.savedHours)} ชม.</span>
              <span className={th.text}>เร็วกว่าเดิม {calc.speedX} เท่า</span>
              <span className={th.text}>ประสิทธิภาพเพิ่ม {calc.efficiency}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LAYER: ROI PROJECTION */}
      <div className="bg-[#0D1321]/80 border-t border-white/10 p-8 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] relative">
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-3">
          <TrendingUp size={18} className="text-[#06B6D4]" /> การคาดการณ์กำไรสะสม 6 เดือนแรก ({currency} ROI Projection)
        </p>
        
        <div className="grid grid-cols-6 gap-6 h-56 items-end relative">
          <div className="absolute inset-x-0 bottom-[2px] h-px bg-white/10" />
          
          {calc.projection.map((p) => {
            // Dynamic Scaling: Set height relative to the max saving in 6 months
            const pct = Math.min((p.cumSaving / Math.max(calc.maxProjectionValue, 1)) * 100, 100);
            return (
              <div key={p.month} className="flex flex-col items-center gap-4 h-full justify-end group relative z-10">
                <div className={`px-3 py-1 rounded-full text-[11px] font-black tabular-nums transition-all duration-500 mb-2 shadow-lg ${
                  p.breakEven ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-gray-500 border border-white/5'
                }`}>
                  {formatMoney(p.cumSaving, false)}
                </div>
                
                <div className="w-full max-w-[80px] bg-white/[0.03] rounded-t-2xl flex items-end overflow-hidden transition-all border border-white/5 hover:border-white/20" 
                     style={{ height: `${Math.max(pct, 8)}%` }}>
                  <div className="w-full rounded-t-2xl transition-all duration-1000 ease-out"
                    style={{ height: '100%', background: p.breakEven ? th.grad : '#374151', boxShadow: p.breakEven ? th.glow : 'none' }} />
                </div>
                
                <div className="text-center space-y-1 mt-2">
                   <span className={`text-[11px] font-black uppercase tracking-widest ${p.breakEven ? 'text-white' : 'text-gray-700'}`}>เดือนที่ {p.month}</span>
                   {p.breakEven && (
                     <div className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shadow-sm animate-pulse">
                        ROI+
                     </div>
                   )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
           <p className="text-[11px] text-gray-600 font-bold italic tracking-wide">* วิเคราะห์ข้อมูลในสกุลเงิน {currency === 'THB' ? 'บาท (Thai Baht)' : 'ดอลลาร์ (US Dollar)'} โดยอ้างอิงจากอัตราแลกเปลี่ยนปัจจุบัน {EXCHANGE_RATE} บาท/USD</p>
        </div>
      </div>
    </div>
  );
}
