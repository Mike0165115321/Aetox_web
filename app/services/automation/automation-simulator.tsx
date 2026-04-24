'use client';
import React, { useState, useMemo } from 'react';
import { Zap, Layers, ServerCrash, RotateCcw, TrendingUp, Clock, AlertTriangle, DollarSign } from 'lucide-react';

type Complexity = 'light' | 'medium' | 'heavy';
const workloadConfig = {
  light:  { label: 'งานเบา',  sublabel: 'คีย์ข้อมูล', humanSeconds: 60,  botSeconds: 6,   botMultiplier: 10,  icon: 'zap' },
  medium: { label: 'งานกลาง', sublabel: 'ดึงไฟล์/ตรวจสอบ', humanSeconds: 180, botSeconds: 36,  botMultiplier: 5,   icon: 'layers' },
  heavy:  { label: 'งานหนัก', sublabel: 'ข้ามหลายระบบ', humanSeconds: 300, botSeconds: 120, botMultiplier: 2.5, icon: 'server' },
} as const;

const themeByComplexity = {
  light:  { text: 'text-[#06B6D4]',  dot: 'bg-[#06B6D4]',  border: 'border-[#06B6D4]/30',  bg: 'bg-[#06B6D4]/10',  grad: 'linear-gradient(to right,#0891b2,#06B6D4)', glow: '4px 0 16px rgba(6,182,212,0.5)' },
  medium: { text: 'text-emerald-400', dot: 'bg-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', grad: 'linear-gradient(to right,#059669,#34d399)',  glow: '4px 0 16px rgba(52,211,153,0.5)' },
  heavy:  { text: 'text-amber-400',   dot: 'bg-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   grad: 'linear-gradient(to right,#d97706,#fbbf24)',  glow: '4px 0 16px rgba(251,191,36,0.5)' },
};

function Icon({ name, size = 15 }: { name: string; size?: number }) {
  if (name === 'zap') return <Zap size={size} />;
  if (name === 'layers') return <Layers size={size} />;
  return <ServerCrash size={size} />;
}

function KpiCard({ label, value, sub, accent = false, color = 'text-white' }: { label: string; value: string; sub?: string; accent?: boolean; color?: string }) {
  return (
    <div className={`p-4 rounded-xl border ${accent ? 'bg-[#06B6D4]/5 border-[#06B6D4]/20' : 'bg-white/[0.03] border-white/5'}`}>
      <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-xl font-black tabular-nums leading-tight ${color}`}>{value}</p>
      {sub && <p className="text-[11px] text-gray-600 mt-0.5">{sub}</p>}
    </div>
  );
}

export default function AutomationSimulator() {
  const [volume,       setVolume]       = useState(50000);
  const [staffCount,   setStaffCount]   = useState(3);
  const [hourlyRate,   setHourlyRate]   = useState(110);
  const [botCost,      setBotCost]      = useState(15000);
  const [setupCost,    setSetupCost]    = useState(50000);
  const [errorCost,    setErrorCost]    = useState(200);
  const [complexity,   setComplexity]   = useState<Complexity>('medium');

  const c = workloadConfig[complexity];
  const th = themeByComplexity[complexity];

  const calc = useMemo(() => {
    // ── เวลา (1 bot vs 1 คน) ──
    const manualHours = (volume * c.humanSeconds) / 3600;
    const botHours    = (volume * c.botSeconds)   / 3600;
    const savedHours  = manualHours - botHours;
    const speedX      = Math.round(manualHours / Math.max(botHours, 0.001));
    const efficiency  = ((savedHours / manualHours) * 100).toFixed(1);

    // ── ความผิดพลาด ──
    const errBefore = Math.floor(volume * 0.05);
    const errAfter  = 0;

    // ── ต้นทุน/เดือน ──
    const laborBefore  = manualHours * hourlyRate;          // ค่าจ้างคนทั้งหมด
    const errCostBefore = errBefore * errorCost;            // ค่าเสียหายจาก error
    const totalBefore  = laborBefore + errCostBefore;

    const laborAfter   = botHours * hourlyRate * 0.15;      // คน 15% สำหรับ oversight
    const totalAfter   = botCost + laborAfter;              // ค่า bot + ค่าคนดูแล
    const errCostAfter = errAfter * errorCost;

    const monthlySaving = totalBefore - totalAfter;
    const annualSaving  = monthlySaving * 12;
    const paybackMonths = monthlySaving > 0 ? setupCost / monthlySaving : 999;
    const roi           = monthlySaving > 0 ? ((annualSaving - setupCost) / setupCost * 100).toFixed(0) : '0';

    // ── Projection 6 เดือน ──
    const projection = Array.from({ length: 6 }, (_, i) => ({
      month: i + 1,
      cumSaving: monthlySaving * (i + 1),
      breakEven: monthlySaving * (i + 1) >= setupCost,
    }));

    const botBarPct = Math.min(Math.max((botHours / Math.max(manualHours, 0.001)) * 100, 1), 99);

    return { manualHours, botHours, savedHours, speedX, efficiency, errBefore,
      laborBefore, errCostBefore, totalBefore, laborAfter, totalAfter, errCostAfter,
      monthlySaving, annualSaving, paybackMonths, roi, projection, botBarPct };
  }, [volume, staffCount, hourlyRate, botCost, setupCost, errorCost, complexity]);

  const fmt = (n: number) => n.toLocaleString('th-TH', { maximumFractionDigits: 0 });

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0A0F1C] text-white rounded-2xl border border-white/10 shadow-2xl font-sans overflow-hidden">

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/5">
        <h2 className="text-xl font-black tracking-wide">
          วิเคราะห์ ROI — <span className="text-[#06B6D4]">ระบบ Automation</span>
        </h2>
        <p className="text-xs text-gray-500 mt-1">ตัวเลขทั้งหมดอ้างอิงจากพารามิเตอร์ที่คุณกำหนด · ปรับ Slider ด้านล่างได้ทันที</p>
      </div>

      <div className="p-6 space-y-6">

        {/* Complexity Toggle */}
        <div className="bg-[#131A2B]/80 p-1.5 rounded-xl border border-white/5 flex gap-1">
          {(Object.keys(workloadConfig) as Complexity[]).map((lvl) => {
            const active = complexity === lvl;
            const t = themeByComplexity[lvl];
            return (
              <button key={lvl} onClick={() => setComplexity(lvl)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 border ${
                  active ? `bg-white/10 text-white ${t.border}` : 'text-gray-500 hover:text-gray-300 border-transparent'}`}>
                <span className={active ? t.text : ''}><Icon name={workloadConfig[lvl].icon} /></span>
                <span>{workloadConfig[lvl].label}</span>
                <span className="hidden md:block text-[10px] font-normal opacity-50">{workloadConfig[lvl].sublabel}</span>
              </button>
            );
          })}
        </div>

        {/* ── KPI Summary ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <KpiCard label="ประหยัด / เดือน" value={`฿${fmt(calc.monthlySaving)}`} sub="บาท/เดือน" accent color="text-[#06B6D4]" />
          <KpiCard label="คืนทุนใน" value={calc.paybackMonths < 100 ? `${calc.paybackMonths.toFixed(1)} เดือน` : 'N/A'} sub={`Setup ฿${fmt(setupCost)}`} color="text-emerald-400" />
          <KpiCard label="ประหยัด / ปี" value={`฿${fmt(calc.annualSaving)}`} sub="ต่อปี" color="text-white" />
          <KpiCard label="ROI (Year 1)" value={`${calc.roi}%`} sub="ผลตอบแทนปีแรก" color={Number(calc.roi) > 0 ? 'text-emerald-400' : 'text-rose-400'} />
        </div>

        {/* ── Before / After ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="bg-rose-950/20 border border-rose-500/15 rounded-2xl p-5 space-y-3">
            <p className="text-xs font-black text-rose-400 uppercase tracking-widest">❌ ก่อนใช้ BOT</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><Clock size={13}/>เวลาทำงาน</span>
                <span className="font-bold text-white tabular-nums">{calc.manualHours.toFixed(1)} ชม.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><DollarSign size={13}/>ค่าแรงงาน</span>
                <span className="font-bold text-rose-300 tabular-nums">฿{fmt(calc.laborBefore)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><AlertTriangle size={13}/>ค่าเสียหาย ({calc.errBefore.toLocaleString()} errors)</span>
                <span className="font-bold text-rose-300 tabular-nums">฿{fmt(calc.errCostBefore)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-rose-500/15">
                <span className="font-black text-white">รวม / เดือน</span>
                <span className="font-black text-rose-400 tabular-nums">฿{fmt(calc.totalBefore)}</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className={`${th.bg} border ${th.border} rounded-2xl p-5 space-y-3`}>
            <p className={`text-xs font-black uppercase tracking-widest ${th.text}`}>✅ หลังใช้ BOT</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><Clock size={13}/>เวลาทำงาน</span>
                <span className={`font-bold tabular-nums ${th.text}`}>{calc.botHours.toFixed(1)} ชม.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><DollarSign size={13}/>ค่า BOT / เดือน</span>
                <span className="font-bold text-white tabular-nums">฿{fmt(botCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><DollarSign size={13}/>ค่าคนดูแล (15%)</span>
                <span className="font-bold text-white tabular-nums">฿{fmt(calc.laborAfter)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 flex items-center gap-2"><AlertTriangle size={13}/>ค่าเสียหาย</span>
                <span className="font-bold text-emerald-400 tabular-nums">฿0</span>
              </div>
              <div className={`flex justify-between pt-2 border-t ${th.border}`}>
                <span className="font-black text-white">รวม / เดือน</span>
                <span className={`font-black tabular-nums ${th.text}`}>฿{fmt(calc.totalAfter)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Time Bar Chart ── */}
        <div className="bg-[#0D1321] border border-white/5 rounded-2xl p-5 space-y-4">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">เปรียบเทียบเวลา (ชั่วโมง / {volume.toLocaleString()} รายการ)</p>
          <div className="space-y-3">
            {/* Bot */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${th.dot}`}/><span className="font-semibold">ระบบ BOT</span></div>
                <span className={`font-black tabular-nums ${th.text}`}>{calc.botHours.toFixed(1)} ชม.</span>
              </div>
              <div className="w-full h-8 bg-white/5 rounded-lg overflow-hidden">
                <div className="h-full rounded-lg transition-all duration-700 relative" style={{ width: `${calc.botBarPct}%`, background: th.grad, boxShadow: th.glow }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/15" />
                </div>
              </div>
            </div>
            {/* Manual */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-400"/><span className="font-semibold">แรงงานคน</span></div>
                <span className="font-black text-rose-400 tabular-nums">{calc.manualHours.toFixed(1)} ชม.</span>
              </div>
              <div className="w-full h-8 bg-white/5 rounded-lg overflow-hidden">
                <div className="h-full w-full rounded-lg relative" style={{ background: 'linear-gradient(to right,#9f1239,#f43f5e)', boxShadow: '4px 0 16px rgba(244,63,94,0.4)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/15" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5 flex-wrap text-xs">
            <span className="text-gray-500">ประหยัดเวลา <span className="font-black text-white">{calc.savedHours.toFixed(1)} ชม.</span></span>
            <span className="text-gray-700">·</span>
            <span className={`font-black ${th.text} ${th.bg} border ${th.border} px-2.5 py-0.5 rounded-full`}>เร็วกว่า {calc.speedX}x</span>
            <span className="text-gray-700">·</span>
            <span className="text-gray-500">Efficiency <span className={`font-black ${th.text}`}>{calc.efficiency}%</span></span>
          </div>
        </div>

        {/* ── 6-Month Projection ── */}
        <div className="bg-[#0D1321] border border-white/5 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={14} className="text-gray-400" />
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">การประหยัดสะสม (6 เดือน)</p>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {calc.projection.map((p) => {
              const pct = Math.min((p.cumSaving / Math.max(setupCost * 2, 1)) * 100, 100);
              return (
                <div key={p.month} className="flex flex-col items-center gap-2">
                  <span className={`text-[10px] font-black tabular-nums ${p.breakEven ? 'text-emerald-400' : 'text-gray-500'}`}>
                    ฿{p.cumSaving >= 1000 ? `${(p.cumSaving/1000).toFixed(0)}K` : fmt(p.cumSaving)}
                  </span>
                  <div className="w-full h-16 bg-white/5 rounded flex items-end overflow-hidden">
                    <div className="w-full rounded transition-all duration-700"
                      style={{ height: `${Math.max(pct, 4)}%`, background: p.breakEven ? th.grad : 'linear-gradient(to top,#374151,#4b5563)' }} />
                  </div>
                  <span className="text-[10px] text-gray-600">เดือน {p.month}</span>
                  {p.breakEven && <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 px-1 rounded">✓ คืนทุน</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Sliders ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#131A2B]/50 p-5 rounded-xl border border-white/5">
          {[
            { label: 'รายการงาน/เดือน', min: 100, max: 100000, step: 100, val: volume, set: setVolume, accent: 'accent-[#06B6D4]', fmt: (v:number) => v.toLocaleString() },
            { label: 'จำนวนพนักงาน (คน)', min: 1, max: 20, step: 1, val: staffCount, set: setStaffCount, accent: 'accent-indigo-400', fmt: (v:number) => `${v} คน` },
            { label: 'ค่าจ้าง (บาท/ชม./คน)', min: 50, max: 500, step: 10, val: hourlyRate, set: setHourlyRate, accent: 'accent-rose-400', fmt: (v:number) => `฿${v}` },
            { label: 'ค่า BOT (บาท/เดือน)', min: 1000, max: 100000, step: 1000, val: botCost, set: setBotCost, accent: 'accent-[#06B6D4]', fmt: (v:number) => `฿${v.toLocaleString()}` },
            { label: 'ค่าเสียหาย/Error (บาท)', min: 0, max: 2000, step: 50, val: errorCost, set: setErrorCost, accent: 'accent-amber-400', fmt: (v:number) => `฿${v}` },
            { label: 'ค่า Setup (ครั้งเดียว)', min: 0, max: 500000, step: 5000, val: setupCost, set: setSetupCost, accent: 'accent-rose-400', fmt: (v:number) => `฿${v.toLocaleString()}` },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">{s.label}</label>
                <span className="text-[11px] font-black text-white tabular-nums">{s.fmt(s.val)}</span>
              </div>
              <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                onChange={(e) => s.set(Number(e.target.value))}
                className={`w-full h-1.5 rounded-full ${s.accent}`} />
            </div>
          ))}
        </div>

        {/* Reset */}
        <div className="flex justify-end">
          <button onClick={() => { setVolume(50000); setStaffCount(3); setHourlyRate(110); setBotCost(15000); setErrorCost(200); setSetupCost(50000); setComplexity('medium'); }}
            className="flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-all active:scale-95">
            <RotateCcw size={14} /> เริ่มใหม่
          </button>
        </div>

      </div>
    </div>
  );
}
