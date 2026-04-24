'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon, Layers, Settings, Share2, MousePointer2, Rocket, Users, Clock, Database, TrendingUp, AlertTriangle, FileText } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AutomationSimulator from './automation-simulator';

/* ─── Shared UI Components ────────────────────────────────────────── */
function LayerBadge({ icon: Icon, label, colorClass = "text-deep-blue" }: { icon: any; label: string; colorClass?: string }) {
  const bgClass = colorClass.includes('deep-blue') ? 'bg-deep-blue/10 border-deep-blue/20' : 'bg-cyber-blue/10 border-cyber-blue/20';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-sm font-bold tracking-widest uppercase`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-deep-blue/30 transition-all duration-300 hover:bg-deep-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-deep-blue transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-deep-blue shadow-deep-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium transition-all ${item.link ? 'cursor-pointer hover:bg-deep-blue/10 hover:border-deep-blue/40' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Pillar 1: Priority Queue Visual ───────────────────────────── */
function PriorityQueueVisual() {
  const [phase, setPhase] = useState(0); // 0: VIP Routing, 1: Auto-Retry, 2: Live Dashboard

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: 'VIP Task Routing', tag: 'PHASE 01', desc: 'จัดเรียงงานตาม Priority ก่อนส่งเข้าคิวประมวลผล' },
    { title: 'Auto-Retry Mechanism', tag: 'PHASE 02', desc: 'ระบบนำงานที่ล้มเหลวกลับเข้าคิวอัตโนมัติ' },
    { title: 'Live Queue Dashboard', tag: 'PHASE 03', desc: 'ติดตามสถานะและปริมาณคิวแบบ Real-time' },
  ];

  const tasks = [
    { id: 'T-001', label: 'Invoice Batch #9812', priority: 'URGENT', color: 'red-500' },
    { id: 'T-002', label: 'Stock Sync Delta', priority: 'HIGH', color: 'amber-400' },
    { id: 'T-003', label: 'Payroll Export Q2', priority: 'NORMAL', color: 'deep-blue' },
    { id: 'T-004', label: 'Report Archive', priority: 'LOW', color: 'gray-500' },
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-deep-blue" />
            <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">Intelligent Priority Queue</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
        </div>

        {/* Visual Stage Area */}
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">

            {/* Phase 0: VIP Task Routing */}
            {phase === 0 && (
              <motion.div key="vip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Incoming Tasks → Priority Sort</span>
                </div>
                {tasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ x: -24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15, type: 'spring', stiffness: 60 }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${
                      task.priority === 'URGENT' ? 'bg-red-500/10 border-red-500/30' :
                      task.priority === 'HIGH'   ? 'bg-amber-400/10 border-amber-400/30' :
                      task.priority === 'NORMAL' ? 'bg-deep-blue/10 border-deep-blue/30' :
                      'bg-white/[0.03] border-white/5'
                    }`}
                  >
                    <div className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                      task.priority === 'URGENT' ? 'text-red-400 bg-red-500/10 border-red-500/30' :
                      task.priority === 'HIGH'   ? 'text-amber-400 bg-amber-400/10 border-amber-400/30' :
                      task.priority === 'NORMAL' ? 'text-deep-blue bg-deep-blue/10 border-deep-blue/30' :
                      'text-gray-500 bg-white/5 border-white/10'
                    }`}>{task.priority}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] font-black text-gray-300 truncate">{task.label}</div>
                      <div className="text-[7px] text-gray-600 font-mono">{task.id}</div>
                    </div>
                    {task.priority === 'URGENT' && (
                      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-[7px] font-black text-red-400 bg-red-500/10 border border-red-500/30 px-1.5 py-0.5 rounded-full uppercase shrink-0">→ VIP Lane</motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Phase 1: Auto-Retry Mechanism */}
            {phase === 1 && (
              <motion.div key="retry" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Failure Detection → Auto Re-queue</span>
                </div>
                {[
                  { id: 'T-007', label: 'PDF Parse Error', attempts: 2, status: 'retrying', color: 'amber' },
                  { id: 'T-012', label: 'DB Timeout', attempts: 1, status: 'retrying', color: 'amber' },
                  { id: 'T-003', label: 'Payroll Export', attempts: 3, status: 'success', color: 'green' },
                ].map((item, i) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] font-black text-gray-300 truncate">{item.label}</div>
                      <div className="text-[7px] text-gray-600 font-mono">{item.id} · Attempt {item.attempts}</div>
                    </div>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden mx-2">
                      <motion.div
                        animate={item.status === 'retrying' ? { width: ['0%', '70%', '30%', '90%'] } : { width: '100%' }}
                        transition={{ duration: 3, repeat: item.status === 'retrying' ? Infinity : 0, ease: 'easeInOut', delay: i * 0.3 }}
                        className={`h-full rounded-full ${item.status === 'success' ? 'bg-green-500' : 'bg-amber-400'}`}
                      />
                    </div>
                    <motion.div
                      animate={item.status === 'retrying' ? { opacity: [0.5, 1, 0.5] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={`text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase shrink-0 ${
                        item.status === 'success'
                          ? 'text-green-400 bg-green-500/10 border border-green-500/30'
                          : 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                      }`}
                    >
                      {item.status === 'success' ? 'DONE' : 'RETRY'}
                    </motion.div>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-deep-blue/5 border border-deep-blue/20 text-[8px] font-black text-deep-blue uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> ไม่ต้องใช้คนตรวจสอบ — ระบบจัดการเอง
                </motion.div>
              </motion.div>
            )}

            {/* Phase 2: Live Queue Dashboard */}
            {phase === 2 && (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Real-time Queue Monitor</span>
                </div>
                {/* Metric Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'In Queue', value: '2,847', sub: 'tasks', accent: true },
                    { label: 'Processing', value: '12', sub: 'active', accent: false },
                    { label: 'ETA', value: '4.2m', sub: 'remain', accent: false },
                  ].map((m, i) => (
                    <motion.div key={m.label} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} className={`p-3 rounded-xl border text-center ${m.accent ? 'bg-deep-blue/10 border-deep-blue/30' : 'bg-white/[0.03] border-white/5'}`}>
                      <div className={`text-[18px] font-black leading-none ${m.accent ? 'text-deep-blue' : 'text-white'}`}>
                        <motion.span animate={m.accent ? { opacity: [0.7, 1, 0.7] } : {}} transition={{ duration: 1.5, repeat: Infinity }}>{m.value}</motion.span>
                      </div>
                      <div className="text-[7px] text-gray-500 uppercase tracking-widest mt-1">{m.label}</div>
                    </motion.div>
                  ))}
                </div>
                {/* Throughput Chart */}
                <div className="px-3 py-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mb-2">Throughput / min</div>
                  <div className="flex items-end gap-1 h-10">
                    {[45, 62, 58, 80, 75, 90, 88, 95, 100, 92, 98, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.06, duration: 0.5 }}
                        className="flex-1 bg-deep-blue/50 rounded-sm"
                        style={{ minHeight: '3px' }}
                      />
                    ))}
                  </div>
                </div>
                {/* Lane status */}
                {['URGENT Lane', 'HIGH Lane', 'NORMAL Lane'].map((lane, i) => (
                  <div key={lane} className="flex items-center gap-3">
                    <div className="text-[7px] font-black text-gray-500 uppercase w-20 shrink-0">{lane}</div>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: [`${[85, 55, 30][i]}%`, `${[95, 65, 40][i]}%`, `${[85, 55, 30][i]}%`] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                        className={`h-full rounded-full ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-amber-400' : 'bg-deep-blue'}`}
                      />
                    </div>
                    <div className={`text-[8px] font-black w-8 text-right ${i === 0 ? 'text-red-400' : i === 1 ? 'text-amber-400' : 'text-deep-blue'}`}>{[85, 55, 30][i]}%</div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Explanation Panel */}
        <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-deep-blue opacity-30 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
              <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
              <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div key={`pq-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-deep-blue shadow-deep-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Pillar 2: Scalable Worker Bots Visual ─────────────────────── */
function ScalableBotsVisual() {
  const [phase, setPhase] = useState(0); // 0: Parallel Processing, 1: Accuracy Engine, 2: Auto-Scaling

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: 'Parallel Processing', tag: 'PHASE 01', desc: 'กระจายข้อมูลให้หลายบอทช่วยกันประมวลผลพร้อมกัน' },
    { title: '100% Accuracy Engine', tag: 'PHASE 02', desc: 'ตรวจสอบข้อมูล Bit-by-bit ขจัด Human Error' },
    { title: 'Resource Auto-Scaling', tag: 'PHASE 03', desc: 'เพิ่ม/ลดทรัพยากรเซิร์ฟเวอร์ตามโหลดอัตโนมัติ' },
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-deep-blue" />
            <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">Scalable Worker Bots</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
        </div>

        {/* Visual Stage Area */}
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">

            {/* Phase 0: Parallel Processing */}
            {phase === 0 && (
              <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Dataset Split → Multi-Bot Execution</span>
                </div>
                {/* Source Dataset */}
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest shrink-0">Dataset</div>
                  <div className="flex-1 flex gap-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="flex-1 h-3 bg-white/20 rounded-sm" />
                    ))}
                  </div>
                  <div className="text-[7px] font-mono text-gray-500">50k rows</div>
                </div>
                {/* Split Arrow */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-white/5" />
                  <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-3 py-1 rounded-full bg-deep-blue/10 border border-deep-blue/20 text-[8px] font-black text-deep-blue uppercase whitespace-nowrap">Split & Distribute ↓</motion.div>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                {/* Worker Bots */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { bot: 'Bot-01', rows: '0–16k', progress: 88 },
                    { bot: 'Bot-02', rows: '17–33k', progress: 72 },
                    { bot: 'Bot-03', rows: '34–50k', progress: 55 },
                  ].map((w, i) => (
                    <motion.div key={w.bot} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} className="p-2.5 rounded-xl bg-deep-blue/10 border border-deep-blue/30 flex flex-col gap-2">
                      <div className="text-[8px] font-black text-deep-blue uppercase">{w.bot}</div>
                      <div className="text-[7px] text-gray-500 font-mono">{w.rows}</div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: [`${w.progress - 10}%`, `${w.progress}%`, `${w.progress - 5}%`] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                          className="h-full bg-deep-blue rounded-full"
                        />
                      </div>
                      <div className="text-[7px] font-black text-deep-blue">{w.progress}%</div>
                    </motion.div>
                  ))}
                </div>
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-center text-[7px] font-black text-gray-500 uppercase tracking-widest">
                  3x Faster than Sequential Processing
                </motion.div>
              </motion.div>
            )}

            {/* Phase 1: 100% Accuracy Engine */}
            {phase === 1 && (
              <motion.div key="accuracy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Bit-by-bit Validation Layer</span>
                </div>
                {/* Validation rows */}
                {[
                  { field: 'Invoice No.', value: 'INV-2026-08812', status: 'pass' },
                  { field: 'Amount (THB)', value: '฿ 1,280,000.00', status: 'pass' },
                  { field: 'Tax ID', value: '0105548120024', status: 'fail' },
                  { field: 'Due Date', value: '2026-05-31', status: 'pass' },
                ].map((row, i) => (
                  <motion.div key={row.field} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} className="flex items-center gap-3">
                    <div className="text-[7px] font-black text-gray-500 uppercase w-16 shrink-0">{row.field}</div>
                    <div className={`flex-1 px-2 py-1.5 rounded-lg border font-mono text-[8px] ${
                      row.status === 'fail' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-white/[0.03] border-white/5 text-gray-300'
                    }`}>{row.value}</div>
                    <motion.div
                      animate={row.status === 'fail' ? { scale: [1, 1.15, 1] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        row.status === 'pass' ? 'bg-green-500/20 border border-green-500/40' : 'bg-red-500/20 border border-red-500/40'
                      }`}
                    >
                      <div className={`text-[8px] font-black ${row.status === 'pass' ? 'text-green-400' : 'text-red-400'}`}>
                        {row.status === 'pass' ? '✓' : '✗'}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[8px] font-black text-red-400 uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> Tax ID Mismatch — Auto-flagged for review
                </motion.div>
              </motion.div>
            )}

            {/* Phase 2: Resource Auto-Scaling */}
            {phase === 2 && (
              <motion.div key="scaling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Load-based Resource Scaling</span>
                </div>
                {/* Load gauge */}
                <div className="flex items-center gap-4">
                  <div className="text-[7px] font-black text-gray-500 uppercase w-12 shrink-0">Load</div>
                  <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      animate={{ width: ['20%', '95%', '95%', '20%'] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.65, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-deep-blue/60 via-deep-blue to-red-500"
                    />
                  </div>
                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[9px] font-black text-deep-blue w-10 text-right">SURGE</motion.div>
                </div>
                {/* Worker instances */}
                <div className="space-y-2">
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Worker Instances (Auto-scaled)</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.08, type: 'spring', stiffness: 80 }}
                        className={`w-10 h-10 rounded-lg border flex flex-col items-center justify-center gap-0.5 ${
                          i < 3 ? 'bg-deep-blue/20 border-deep-blue/40' : 'bg-white/[0.03] border-white/5'
                        }`}
                      >
                        <Layers className={`w-3 h-3 ${i < 3 ? 'text-deep-blue' : 'text-gray-600'}`} />
                        <div className={`text-[6px] font-black uppercase ${i < 3 ? 'text-deep-blue' : 'text-gray-600'}`}>B-0{i + 1}</div>
                        {i < 3 && <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-1 h-1 rounded-full bg-deep-blue" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Cost indicator */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[7px] text-gray-500 uppercase mb-1">Off-peak</div>
                    <div className="text-[13px] font-black text-white">3 <span className="text-[8px] text-gray-500">bots</span></div>
                  </div>
                  <div className="px-3 py-2.5 rounded-xl bg-deep-blue/10 border border-deep-blue/30 text-center">
                    <div className="text-[7px] text-deep-blue uppercase mb-1">Peak Hour</div>
                    <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[13px] font-black text-deep-blue">8 <span className="text-[8px]" >bots</span></motion.div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Explanation Panel */}
        <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-deep-blue opacity-30 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
              <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
              <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div key={`sb-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-deep-blue shadow-deep-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Pillar 3: Observability Visual ────────────────────────────── */
function ObservabilityVisual() {
  const [phase, setPhase] = useState(0); // 0: Execution Logs, 1: Performance Analytics, 2: Anomaly Detection

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: 'Tamper-Proof Execution Logs', tag: 'PHASE 01', desc: 'บันทึกทุกรายการอย่างละเอียด ตรวจสอบย้อนหลังได้ตลอดเวลา' },
    { title: 'Performance Analytics', tag: 'PHASE 02', desc: 'วิเคราะห์ผลลัพธ์เชิงธุรกิจ แสดงแนวโน้มและเวลาที่ประหยัดได้' },
    { title: 'Real-time Anomaly Detection', tag: 'PHASE 03', desc: 'ตรวจจับความผิดปกติอัตโนมัติ หยุดงานที่เสี่ยงทันที' },
  ];

  const logs = [
    { time: '12:04:01.032', event: 'Invoice #9812 — Extracted', status: 'ok' },
    { time: '12:04:01.187', event: 'Amount validated: ฿1.28M', status: 'ok' },
    { time: '12:04:01.390', event: 'DB write: accounts_payable', status: 'ok' },
    { time: '12:04:01.891', event: 'Tax ID mismatch — Flagged', status: 'warn' },
    { time: '12:04:02.103', event: 'Retry queued: attempt 2/3', status: 'info' },
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-deep-blue" />
            <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">Audit & Observability</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
        </div>

        {/* Visual Stage Area */}
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">

            {/* Phase 0: Tamper-Proof Logs */}
            {phase === 0 && (
              <motion.div key="logs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-2">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Immutable Execution Log Stream</span>
                </div>
                {/* Terminal-style log viewer */}
                <div className="px-3 py-3 rounded-xl bg-black/60 border border-white/5 font-mono space-y-1.5">
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[7px] font-black text-green-400 uppercase tracking-widest">Live Log Stream</span>
                    <span className="ml-auto text-[6px] text-gray-600">SHA-256 signed</span>
                  </div>
                  {logs.map((log, i) => (
                    <motion.div key={i} initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.12 }} className="flex items-center gap-2">
                      <span className="text-[6px] text-gray-600 shrink-0 font-mono">{log.time}</span>
                      <span className={`text-[7px] truncate ${
                        log.status === 'ok'   ? 'text-gray-400' :
                        log.status === 'warn' ? 'text-amber-400' : 'text-deep-blue'
                      }`}>{log.event}</span>
                      <div className={`ml-auto w-1 h-1 rounded-full shrink-0 ${
                        log.status === 'ok' ? 'bg-green-500' : log.status === 'warn' ? 'bg-amber-400' : 'bg-deep-blue'
                      }`} />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-[7px] text-gray-500 font-mono">Hash Chain:</div>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="text-[7px] text-deep-blue font-mono truncate">a3f9...c12e → 7d4b...88fa → 2c91...</motion.div>
                </div>
              </motion.div>
            )}

            {/* Phase 1: Performance Analytics */}
            {phase === 1 && (
              <motion.div key="analytics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Business Impact Metrics</span>
                </div>
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Time Saved', value: '340h', unit: '/month', trend: '+12%', up: true },
                    { label: 'Tasks Done', value: '98,240', unit: 'total', trend: '+8.4%', up: true },
                    { label: 'Error Rate', value: '0.003', unit: '%', trend: '-91%', up: false },
                    { label: 'Avg Speed', value: '612', unit: 'tasks/hr', trend: '+22%', up: true },
                  ].map((kpi, i) => (
                    <motion.div key={kpi.label} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[7px] text-gray-500 uppercase tracking-widest mb-1">{kpi.label}</div>
                      <div className="text-[15px] font-black text-white leading-none">{kpi.value}<span className="text-[8px] text-gray-500 ml-0.5">{kpi.unit}</span></div>
                      <div className={`text-[7px] font-black mt-1 ${kpi.up ? 'text-green-400' : 'text-red-400'}`}>{kpi.trend} vs last month</div>
                    </motion.div>
                  ))}
                </div>
                {/* Trend sparkline */}
                <div className="px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mb-2">Weekly Throughput</div>
                  <div className="flex items-end gap-1 h-8">
                    {[55, 70, 65, 82, 78, 91, 98].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.07, duration: 0.5 }} className={`flex-1 rounded-sm ${i === 6 ? 'bg-deep-blue' : 'bg-deep-blue/30'}`} style={{ minHeight: '2px' }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-[6px] text-gray-600 font-mono">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 2: Real-time Anomaly Detection */}
            {phase === 2 && (
              <motion.div key="anomaly" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Live Behavioral Monitor</span>
                </div>
                {/* Normal signal with spike */}
                <div className="px-3 py-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mb-2">Task Success Rate</div>
                  <div className="flex items-end gap-0.5 h-12">
                    {[95, 97, 94, 96, 98, 95, 96, 23, 18, 92, 96, 97].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className={`flex-1 rounded-sm ${
                          h < 50 ? 'bg-red-500' : 'bg-deep-blue/50'
                        }`}
                        style={{ minHeight: '2px' }}
                      />
                    ))}
                  </div>
                </div>
                {/* Alert cards */}
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="px-3 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-[8px] font-black text-red-400 uppercase tracking-widest">Anomaly Detected</span>
                    <span className="ml-auto text-[7px] text-gray-600 font-mono">12:04:08</span>
                  </div>
                  <div className="text-[8px] text-gray-300">Success rate dropped 77% — <span className="text-red-400">Batch halted</span></div>
                  <div className="text-[7px] text-gray-500 mt-1 font-mono">Root cause: DB connection pool exhausted</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex items-center gap-2 px-3 py-2 rounded-full bg-deep-blue/5 border border-deep-blue/20 text-[8px] font-black text-deep-blue uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> Alert sent — Team notified via webhook
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Explanation Panel */}
        <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-deep-blue opacity-30 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
              <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
              <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div key={`ob-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-deep-blue shadow-deep-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Top Layer: Automation Showcase ────────────────────────────── */
function AutomationShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // Slide 0: Live Automation Pipeline
    (
      <div className="relative h-full flex flex-col items-center justify-center p-5 gap-2 overflow-hidden">
        <motion.div animate={{scale:[1,1.5,1],opacity:[0.03,0.08,0.03]}} transition={{duration:4,repeat:Infinity}} className="absolute w-72 h-72 rounded-full bg-deep-blue"/>
        <div className="relative z-10 w-full max-w-[240px] space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Live Automation Pipeline</span></div>
          <div className="flex gap-1.5">{['Excel','Email','API','Form'].map((s,i)=>(
            <motion.div key={s} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}} className="flex-1 py-2 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col items-center gap-1">
              <FileText className="w-3 h-3 text-gray-500"/><span className="text-[5px] font-black text-gray-600 uppercase">{s}</span>
            </motion.div>))}</div>
          <div className="flex justify-around">{[0,1,2,3].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.15}} className="w-px h-4 bg-deep-blue/50"/>))}</div>
          <motion.div animate={{boxShadow:['0 0 0px rgba(59,130,246,0)','0 0 20px rgba(59,130,246,0.4)','0 0 0px rgba(59,130,246,0)']}} transition={{duration:2,repeat:Infinity}} className="px-4 py-3 rounded-xl bg-deep-blue/15 border border-deep-blue/40 flex items-center gap-3">
            <motion.div animate={{rotate:360}} transition={{duration:2,repeat:Infinity,ease:'linear'}} className="w-4 h-4 rounded-full border-2 border-deep-blue/30 border-t-deep-blue shrink-0"/>
            <div className="flex-1"><div className="text-[8px] font-black text-deep-blue uppercase">Bot Engine</div><motion.div className="h-px bg-deep-blue mt-1 rounded" animate={{width:['5%','95%','5%']}} transition={{duration:1.5,repeat:Infinity}}/></div>
            <motion.span animate={{opacity:[0.5,1,0.5]}} transition={{duration:1,repeat:Infinity}} className="text-[6px] font-black text-green-400 bg-green-400/10 border border-green-400/20 px-1.5 py-0.5 rounded-full">LIVE</motion.span>
          </motion.div>
          <div className="flex justify-around">{[0,1,2].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.2+0.4}} className="w-px h-4 bg-deep-blue/50"/>))}</div>
          <div className="flex gap-1.5">{['Database','Report','Webhook'].map((d,i)=>(<motion.div key={d} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{delay:i*0.2}} className="flex-1 py-2 rounded-lg bg-deep-blue/10 border border-deep-blue/20 flex flex-col items-center gap-1"><CheckCircle2 className="w-3 h-3 text-deep-blue"/><span className="text-[5px] font-black text-deep-blue uppercase">{d}</span></motion.div>))}</div>
          <div className="flex justify-between text-[7px] font-mono border-t border-white/5 pt-1.5"><span className="text-gray-600">Processed today</span><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-deep-blue font-black">98,240 tasks</motion.span></div>
        </div>
      </div>
    ),
    // Slide 1: Before/After Queue Bottleneck
    (
      <div className="relative h-full flex flex-col items-center justify-center p-5 gap-2">
        <div className="w-full max-w-xs space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Before vs After</span></div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <div className="text-[6px] font-black text-red-400/70 uppercase tracking-widest mb-1">Before — Manual Queue</div>
            {['คีย์ Invoice ทั้งหมด','ตรวจสอบ Stock','จัดทำ Report'].map(t=>(<div key={t} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5"><div className="w-1.5 h-1.5 rounded-full bg-gray-600"/><span className="text-[7px] text-gray-500 flex-1">{t}</span><span className="text-[6px] font-black text-red-400 bg-red-400/10 border border-red-400/20 px-1.5 py-0.5 rounded-full">DELAYED</span></div>))}
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-white/5"/><motion.div animate={{scale:[0.95,1.05,0.95]}} transition={{duration:1.5,repeat:Infinity}} className="text-[7px] font-black text-deep-blue bg-deep-blue/10 border border-deep-blue/20 px-3 py-0.5 rounded-full">Automation</motion.div><div className="flex-1 h-px bg-white/5"/></div>
          <div className="p-3 rounded-xl bg-deep-blue/[0.05] border border-deep-blue/15 space-y-1.5">
            <div className="text-[6px] font-black text-deep-blue/70 uppercase tracking-widest mb-1">After — Smart Queue</div>
            {[{t:'Invoice Batch',tag:'URGENT',a:true,idx:0},{t:'Stock Sync',tag:'HIGH',a:false,idx:1},{t:'Report',tag:'QUEUED',a:false,idx:2}].map(item=>(<motion.div key={item.t} animate={item.a?{x:[0,4,0]}:{}} transition={{duration:2,repeat:Infinity}} className={`flex items-center gap-2 p-2 rounded-lg border ${item.a?'bg-deep-blue/10 border-deep-blue/30':item.idx===1?'bg-amber-400/5 border-amber-400/15':'bg-white/[0.02] border-white/5'}`}><motion.div animate={item.a?{opacity:[0.5,1,0.5]}:{}} transition={{duration:1,repeat:Infinity}} className={`w-1.5 h-1.5 rounded-full ${item.a?'bg-deep-blue':item.idx===1?'bg-amber-400':'bg-gray-600'}`}/><span className={`text-[7px] flex-1 ${item.a?'text-white font-black':item.idx===1?'text-amber-300':'text-gray-500'}`}>{item.t}</span><span className={`text-[6px] font-black px-1.5 py-0.5 rounded-full border ${item.a?'text-deep-blue bg-deep-blue/10 border-deep-blue/20':item.idx===1?'text-amber-400 bg-amber-400/10 border-amber-400/20':'text-gray-500 bg-white/5 border-white/10'}`}>{item.tag}</span></motion.div>))}
          </div>
        </div>
      </div>
    ),
    // Slide 2: Speed Race — Human vs Bot
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Speed Comparison</span></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-center">
              <Users className="w-5 h-5 text-gray-500 mx-auto"/>
              <div className="text-[7px] font-black text-gray-400 uppercase">Human</div>
              <div className="text-3xl font-black text-gray-400">2<span className="text-[8px] ml-0.5 text-gray-600">/hr</span></div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><motion.div animate={{width:['0%','10%','0%']}} transition={{duration:3,repeat:Infinity}} className="h-full bg-gray-600 rounded-full"/></div>
              <div className="text-[6px] text-gray-600 font-mono">~240/day</div>
            </div>
            <div className="p-3 rounded-xl bg-deep-blue/10 border border-deep-blue/30 space-y-2 text-center shadow-deep-glow/20">
              <Zap className="w-5 h-5 text-deep-blue mx-auto"/>
              <div className="text-[7px] font-black text-deep-blue uppercase">Bot</div>
              <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-3xl font-black text-white">612<span className="text-[8px] ml-0.5 text-deep-blue">/hr</span></motion.div>
              <div className="h-1.5 bg-deep-blue/20 rounded-full overflow-hidden"><motion.div animate={{width:['0%','100%','0%']}} transition={{duration:1,repeat:Infinity}} className="h-full bg-deep-blue rounded-full shadow-deep-glow"/></div>
              <div className="text-[6px] text-deep-blue font-mono">98,240/day</div>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-deep-blue/5 border border-deep-blue/20 flex items-center justify-between">
            <span className="text-[8px] text-gray-400">ประหยัดเวลา</span>
            <motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-xl font-black text-deep-blue">340h<span className="text-[9px] text-gray-500 ml-1">/เดือน</span></motion.span>
          </div>
          <div className="flex items-center justify-center gap-2"><TrendingUp className="w-3.5 h-3.5 text-deep-blue"/><span className="text-[8px] text-gray-400">เร็วกว่ามนุษย์</span><span className="text-[8px] font-black text-deep-blue">300 เท่า</span></div>
        </div>
      </div>
    ),
    // Slide 3: Zero Error Engine
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-3">
        <div className="w-full max-w-xs space-y-3">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Error Rate Analysis</span></div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
            <div className="flex items-center gap-2"><AlertTriangle className="w-3.5 h-3.5 text-red-400"/><span className="text-[7px] font-black text-gray-400 uppercase">Manual Process</span></div>
            <div className="text-4xl font-black text-red-400">23<span className="text-lg">%</span><span className="text-[9px] text-gray-600 ml-2">error rate</span></div>
            <div className="h-2 bg-white/5 rounded-full"><div className="h-full w-[23%] bg-red-500/60 rounded-full"/></div>
            <div className="text-[6px] text-gray-600 font-mono">ค่าเฉลี่ยงาน Manual ทั่วไป</div>
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-white/5"/><span className="text-[6px] font-black text-gray-600 px-2 uppercase">vs Bot System</span><div className="flex-1 h-px bg-white/5"/></div>
          <div className="p-4 rounded-xl bg-deep-blue/[0.06] border border-deep-blue/20 space-y-2">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400"/><span className="text-[7px] font-black text-deep-blue uppercase">Bot Validation</span></div>
            <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1.5,repeat:Infinity}} className="text-4xl font-black text-green-400">0.003<span className="text-lg">%</span></motion.div>
            <div className="h-2 bg-deep-blue/10 rounded-full"><div className="h-full w-[2px] bg-green-500 rounded-full"/></div>
            <div className="text-[6px] text-green-400/70 font-mono">Bit-by-bit validation engine</div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-green-500/5 border border-green-500/15 text-[7px]"><span className="text-gray-500">ลดต้นทุนซ่อมความผิดพลาด</span><span className="text-green-400 font-black">-99.99%</span></div>
        </div>
      </div>
    ),
    // Slide 4: 24/7 Coverage
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">24-Hour Coverage</span></div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px]"><div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-gray-500"/><span className="text-gray-400 font-black">Human</span></div><span className="text-amber-400/70 font-mono">8 / 24 hrs</span></div>
              <div className="h-5 bg-white/5 rounded-lg overflow-hidden flex">{Array.from({length:24},(_,h)=>(<div key={h} className={`flex-1 h-full border-r border-white/5 ${h>=9&&h<18?'bg-amber-400/40':'bg-white/[0.02]'}`}/>))}</div>
              <div className="flex justify-between text-[5px] text-gray-600 font-mono"><span>00:00</span><span>09:00</span><span>18:00</span><span>24:00</span></div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px]"><div className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-deep-blue"/><span className="text-deep-blue font-black">Bot System</span></div><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:1,repeat:Infinity}} className="text-green-400 font-mono font-black">24 / 24 hrs</motion.span></div>
              <div className="h-5 rounded-lg overflow-hidden flex">{Array.from({length:24},(_,h)=>(<motion.div key={h} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:h*0.08}} className="flex-1 h-full bg-deep-blue/50 border-r border-deep-blue/20"/>))}</div>
              <div className="flex justify-between text-[5px] text-gray-600 font-mono"><span>00:00</span><span>12:00</span><span>24:00</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center"><div className="text-[6px] text-gray-600 uppercase mb-0.5">Hours Missed</div><div className="text-lg font-black text-amber-400">14h<span className="text-[7px] text-gray-600 ml-0.5">/day</span></div></div>
            <div className="p-2.5 rounded-xl bg-deep-blue/10 border border-deep-blue/20 text-center"><div className="text-[6px] text-deep-blue uppercase mb-0.5">Bot Uptime</div><motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-lg font-black text-white">100%</motion.div></div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-deep-blue/5 border border-deep-blue/15 text-center text-[7px]"><span className="text-gray-500">ประหยัดได้ถึง </span><span className="font-black text-deep-blue">340 ชั่วโมง</span><span className="text-gray-500"> ต่อเดือน</span></div>
        </div>
      </div>
    ),
  ];


  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative h-[520px] lg:h-[600px] flex flex-col">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col">
            {/* Visual Area - reduced flex slightly to give text more room */}
            <div className="flex-[1.2] bg-gradient-to-b from-transparent to-black/40 relative overflow-hidden min-h-0">
              {visuals[activeStep]}
            </div>
            
            {/* Text Content Area */}
            <div className="p-8 lg:p-10 bg-ultra-dark/95 backdrop-blur-2xl border-t border-white/5 space-y-4 shrink-0">
              <div className="space-y-1">
                <span className="text-deep-blue text-[10px] font-black uppercase tracking-[0.25em] opacity-80">{steps[activeStep].subtitle}</span>
                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-3">
                {steps[activeStep].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Layer */}
      <div className="relative flex items-center justify-between h-16 mt-4">
        {/* Indicators */}
        <div className="flex gap-2.5">
          {steps.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-deep-blue shadow-deep-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-deep-blue/30 transition-all active:scale-90"
          >
            ←
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-deep-blue/20 hover:border-deep-blue/50 transition-all shadow-deep-glow/10 active:scale-90"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AutomationClient({ dict, navDict }: { dict: any, navDict: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-deep-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      <Navbar dict={navDict.navbar} />

      {/* ─── Layer 1: Intro (Hero + Showcase Together) ─── */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-deep-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">{dict.hero.title.white}<br /><span className="text-deep-blue drop-shadow-deep-glow text-4xl md:text-6xl">{dict.hero.title.accent}</span></h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-deep-blue/30 pl-6">{dict.hero.description}</p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[{ id: 'connect', title: 'Intelligent Queue', icon: Share2 }, { id: 'perf', title: 'High Performance', icon: Rocket }, { id: 'arch', title: 'Decoupled Arch', icon: Layers }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-deep-blue/30 hover:bg-deep-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-deep-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full"><AutomationShowcase steps={dict.showcase} /></div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Automation Simulator ─── */}
      <section className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <AutomationSimulator />
          </div>
        </div>
      </section>

      {/* ─── Layer 3: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto">
          <div className="space-y-40">
            
            {/* Pillar 1: Intelligent Queue System */}
            <div id="connect" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar1.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar1.features[0].title} desc={dict.pillars.pillar1.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[1].title} desc={dict.pillars.pillar1.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[2].title} desc={dict.pillars.pillar1.features[2].desc} />
                </div>
              </div>
              
              {/* Visual 1 */}
              <div className="lg:w-5/12 w-full">
                <PriorityQueueVisual />
              </div>
            </div>

            {/* Pillar 2: Performance Beyond Limits */}
            <div id="perf" className="flex flex-col lg:flex-row-reverse gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar2.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar2.features[0].title} desc={dict.pillars.pillar2.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[1].title} desc={dict.pillars.pillar2.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[2].title} desc={dict.pillars.pillar2.features[2].desc} />
                </div>
              </div>

              {/* Visual 2 */}
              <div className="lg:w-5/12 w-full">
                <ScalableBotsVisual />
              </div>
            </div>

            {/* Pillar 3: Decoupled Architecture */}
            <div id="arch" className="flex flex-col lg:flex-row gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar3.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar3.features[0].title} desc={dict.pillars.pillar3.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[1].title} desc={dict.pillars.pillar3.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[2].title} desc={dict.pillars.pillar3.features[2].desc} />
                </div>
              </div>

              {/* Visual 3 */}
              <div className="lg:w-5/12 w-full">
                <ObservabilityVisual />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="automation" 
        serviceName="Workflow Automation" 
        hirePoints={dict.cta.hirePoints}
        learnPoints={dict.cta.learnPoints}
      />

      <Footer dict={navDict.footer} />
    </main>
  );
}
