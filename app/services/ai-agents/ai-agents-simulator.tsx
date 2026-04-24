'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, GraduationCap, BookOpen, Scale, 
  TrendingUp, Wallet, ShieldCheck, Zap, 
  ArrowRight, Info, Plus, Target
} from 'lucide-react';
import { useRoiCalculator } from './hooks/use-roi-calculator';
import { FeaturesDashboard, KnowledgePipeline } from './components/simulator-components';
import { RagChatSimulator } from './components/rag-chat-simulator';

export default function AiAgentsSimulator({ dict }: { dict: any }) {
  const simulator = dict.simulator;
  const [useCase, setUseCase] = useState('hr');
  
  // States
  const [queriesPerDay, setQueriesPerDay] = useState(150);
  const [avgSalary, setAvgSalary] = useState(25000);
  const [staffCount, setStaffCount] = useState(3);
  const [minutesPerCase, setMinutesPerCase] = useState(20);
  const [aiMonthlyFee, setAiMonthlyFee] = useState(15000);
  const [dropRate, setDropRate] = useState(20);
  const [valuePerCase, setValuePerCase] = useState(500);

  // Update defaults when useCase changes
  useEffect(() => {
    switch (useCase) {
      case 'hr':
        setQueriesPerDay(150); setAvgSalary(25000); setStaffCount(3); setMinutesPerCase(20); setValuePerCase(500); setAiMonthlyFee(15000);
        break;
      case 'student':
        setQueriesPerDay(500); setAvgSalary(18000); setStaffCount(2); setMinutesPerCase(10); setValuePerCase(200); setAiMonthlyFee(20000);
        break;
      case 'librarian':
        setQueriesPerDay(300); setAvgSalary(22000); setStaffCount(5); setMinutesPerCase(15); setValuePerCase(800); setAiMonthlyFee(25000);
        break;
      case 'legal':
        setQueriesPerDay(50); setAvgSalary(60000); setStaffCount(2); setMinutesPerCase(45); setValuePerCase(5000); setAiMonthlyFee(30000);
        break;
    }
  }, [useCase]);

  // Use the new hook
  const calculations = useRoiCalculator({
    useCase,
    queriesPerDay,
    avgSalary,
    staffCount,
    minutesPerCase,
    aiMonthlyFee,
    dropRate,
    valuePerCase
  });

  const iconMap: any = {
    hr: <Users size={18} />,
    student: <GraduationCap size={18} />,
    librarian: <BookOpen size={18} />,
    legal: <Scale size={18} />,
  };

  return (
    <div className="space-y-32">
      {/* ─── Layer 1: Configuration & Dashboard ─── */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {simulator.title.white}<br />
              <span className="text-cyber-blue drop-shadow-cyber-glow">{simulator.title.accent}</span>
            </h2>
            <p className="text-gray-500 max-w-xl">{simulator.description}</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-xl">
            {simulator.useCases.map((uc: any) => (
              <button
                key={uc.id}
                onClick={() => setUseCase(uc.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  useCase === uc.id ? 'bg-cyber-blue text-black shadow-cyber-glow' : 'text-gray-400 hover:text-white'
                }`}
              >
                {iconMap[uc.id]}
                {uc.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-4 glass-card p-8 rounded-[32px] border border-white/10 space-y-8 bg-black/40">
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                 <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Input Parameters</span>
                 <Plus size={14} className="text-cyber-blue opacity-50" />
               </div>
               
               <SliderGroup label="Queries / วัน" value={queriesPerDay} onChange={setQueriesPerDay} min={10} max={2000} unit="" />
               <SliderGroup label="เงินเดือนเฉลี่ย (บาท)" value={avgSalary} onChange={setAvgSalary} min={15000} max={100000} step={1000} unit="฿" />
               <SliderGroup label="จำนวนพนักงาน" value={staffCount} onChange={setStaffCount} min={1} max={50} unit="คน" />
               <SliderGroup label="เวลาต่อเคส (นาที)" value={minutesPerCase} onChange={setMinutesPerCase} min={5} max={120} unit="นาที" />
               <SliderGroup label="มูลค่าต่อ 1 เคส (บาท)" value={valuePerCase} onChange={setValuePerCase} min={0} max={5000} step={100} unit="฿" />
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between text-cyber-blue mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest italic">Aetox Service Fee</span>
                <Zap size={14} />
              </div>
              <SliderGroup label="AI Monthly Fee" value={aiMonthlyFee} onChange={setAiMonthlyFee} min={5000} max={100000} step={5000} unit="฿" isAccent />
            </div>
          </div>

          {/* ROI Dashboard */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard 
               label="งานค้างสะสม / วัน" 
               value={calculations.lostQueriesDaily.toFixed(0)} 
               unit="เคส" 
               desc="เคสที่คนรับไม่ไหว" 
               icon={<Target size={20} />} 
               isWarning={calculations.lostQueriesDaily > 0}
               tooltip="ปริมาณงานที่เกินขีดความสามารถของพนักงานต่อวัน"
            />
            <ResultCard 
               label="รายรับจริง / วัน" 
               value={calculations.aiCapturedRevenueDaily.toLocaleString()} 
               unit="฿" 
               desc="รับได้ตลอด 24/7" 
               icon={<TrendingUp size={20} />} 
               isSuccess 
               tooltip="รายรับที่ระบบ AI สามารถสร้างให้ได้จากการจัดการเคสทั้งหมด"
            />
            
            <div className="md:col-span-2 glass-card p-10 rounded-[32px] border border-cyber-blue/20 bg-gradient-to-br from-cyber-blue/[0.03] to-transparent relative overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={120} className="text-cyber-blue" /></div>
               <div className="relative z-10">
                 <p className="text-cyber-blue text-xs font-black uppercase tracking-[0.4em] mb-4">Potential Profitability</p>
                 <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-6xl font-black text-white tracking-tighter">
                      {calculations.totalYearlySaving.toLocaleString()}
                    </span>
                    <span className="text-2xl font-bold text-cyber-blue italic">฿ / ปี</span>
                 </div>
                 <p className="text-gray-500 font-medium">คาดการณ์กำไรส่วนเพิ่มและต้นทุนที่ประหยัดได้ต่อปี</p>
               </div>
               
               <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Payback Period</span>
                    <div className="text-2xl font-black text-white italic">{calculations.breakEvenMonth.toFixed(1)} <span className="text-xs text-gray-500 not-italic uppercase">Months</span></div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Efficiency Multiplier</span>
                    <div className="text-2xl font-black text-emerald-400 italic">24/7 <span className="text-xs text-gray-500 not-italic uppercase">Coverage</span></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Layer 1.5: Interactive RAG Chat Simulator ─── */}
      <RagChatSimulator />

      {/* ─── Layer 2: Strategic Comparison ─── */}
      <section id="retrieval">
        <FeaturesDashboard features={simulator.features} comparisonRows={simulator.comparisonRows} />
      </section>

    </div>
  );
}

/* ─── Sub-components for local use ─────────────────────────────── */

function SliderGroup({ label, value, onChange, min, max, step = 1, unit, isAccent = false }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{label}</label>
        <span className={`text-sm font-black ${isAccent ? 'text-cyber-blue' : 'text-white'}`}>{value.toLocaleString()}{unit}</span>
      </div>
      <input 
        type="range" min={min} max={max} step={step} value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyber-blue ${isAccent ? 'shadow-cyber-glow/20' : ''}`}
      />
    </div>
  );
}

function ResultCard({ label, value, unit, desc, icon, isWarning, isSuccess, tooltip }: any) {
  return (
    <div className={`glass-card p-8 rounded-[32px] border ${isWarning ? 'border-rose-500/20 bg-rose-500/5' : isSuccess ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/10'} relative group`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-2xl ${isWarning ? 'bg-rose-500/20 text-rose-500' : isSuccess ? 'bg-emerald-500/20 text-emerald-500' : 'bg-white/5 text-gray-400'}`}>
          {icon}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-help relative">
           <Info size={14} className="text-gray-600" />
           <div className="absolute bottom-full right-0 mb-2 w-48 p-3 rounded-xl bg-black border border-white/10 text-[10px] text-gray-400 hidden group-hover:block z-50 shadow-2xl">
              {tooltip}
           </div>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className={`text-4xl font-black ${isWarning ? 'text-rose-500 line-through decoration-rose-500/50 decoration-2' : 'text-white'}`}>{value}</span>
          <span className="text-sm font-bold text-gray-500">{unit}</span>
        </div>
        <p className="text-xs text-gray-600 font-medium">{desc}</p>
      </div>
    </div>
  );
}
