'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, MessageSquare, BrainCircuit, FileSpreadsheet, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AutomationPanel() {
  const steps = [
    {
      id: 'step1',
      icon: <MessageSquare size={18} className="text-cyan-400" />,
      title: '1. ได้รับข้อมูล / แชต',
      desc: 'Line OA, FB Inbox หรือฟอร์มเว็บ',
      status: 'success'
    },
    {
      id: 'step2',
      icon: <BrainCircuit size={18} className="text-aetox-accent" />,
      title: '2. AI สกัดตรรกะข้อมูล',
      desc: 'คัดแยกความต้องการ คัดกรองคู่ค้า',
      status: 'processing'
    },
    {
      id: 'step3',
      icon: <FileSpreadsheet size={18} className="text-amber-500" />,
      title: '3. อัปเดต CRM / ฐานข้อมูล',
      desc: 'ป้อนข้อมูลเข้า ERP หรือชีตส่วนกลาง',
      status: 'pending'
    },
    {
      id: 'step4',
      icon: <FileCheck size={18} className="text-emerald-400" />,
      title: '4. ออกบิลสะท้อนภาษีอัตโนมัติ',
      desc: 'ยิงบิล PDF ทางอีเมล/แชตลูกค้า',
      status: 'pending'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 h-full min-h-[420px] rounded-2xl bg-aetox-bg/40 backdrop-blur-md overflow-hidden text-left border border-aetox-border relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10 space-y-8">
        <div className="flex items-center justify-between border-b border-aetox-border/60 pb-4">
          <div className="flex items-center gap-2 text-aetox-text-main font-bold text-xs uppercase tracking-wider">
            <Play size={14} className="text-aetox-accent fill-aetox-accent/20" />
            <span>การไหลผ่านกระบวนการทำงานอัตโนมัติ (Live Pipeline Node Flow)</span>
          </div>
          <span className="text-[10px] font-black text-aetox-accent bg-aetox-accent/10 border border-aetox-accent/20 px-2 py-0.5 rounded-md animate-pulse">
            PIPELINE ON
          </span>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-5 rounded-2xl border border-aetox-border bg-black/20 hover:bg-black/30 hover:border-aetox-accent/30 transition-all duration-300 relative group flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center border border-aetox-border/40 group-hover:scale-105 transition-transform">
                {step.icon}
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-xs font-bold text-aetox-text-main group-hover:text-aetox-accent transition-colors flex items-center gap-1.5">
                  {step.title}
                  {idx === 0 || idx === 1 ? (
                    <CheckCircle2 size={12} className="text-aetox-accent shrink-0" />
                  ) : null}
                </h4>
                <p className="text-[10px] text-aetox-text-soft leading-relaxed font-medium">{step.desc}</p>
              </div>
              {/* Dynamic Connecting Laser Pulses (Only visible on larger screens between nodes) */}
              {idx === 0 && (
                <div className="absolute top-1/2 right-[-10px] w-5 h-[1.5px] bg-gradient-to-r from-cyan-400 to-aetox-accent hidden sm:block">
                  <motion.div
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-aetox-glow"
                  />
                </div>
              )}
              {idx === 2 && (
                <div className="absolute top-1/2 right-[-10px] w-5 h-[1.5px] bg-gradient-to-r from-amber-500 to-emerald-400 hidden sm:block">
                  <motion.div
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-aetox-glow"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Live Status Tracker */}
        <div className="p-4 rounded-xl border border-aetox-border bg-aetox-accent/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-bold text-aetox-text-main">
            <span className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
            <span>กระบวนการล่าสุด: ประมวลผลใบเสนอราคาจัดส่งลูกค้ารายที่ #1,402 สำเร็จ</span>
          </div>
          <span className="text-[10px] text-aetox-accent font-black">ความล่าช้า 0.2s · ประหยัดเวลา 100%</span>
        </div>
      </div>
    </div>
  );
}
