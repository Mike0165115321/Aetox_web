'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, FileText, CheckCircle2, TrendingUp, AlertTriangle, Cpu } from 'lucide-react';

/* ─── Pillar 1: Priority Queue Visual ───────────────────────────── */
export function PriorityQueueVisual() {
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
                      task.priority === 'NORMAL' ? 'bg-aetox-accent/10 border-aetox-accent/30' :
                      'bg-white/[0.03] border-white/5'
                    }`}
                  >
                    <div className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                      task.priority === 'URGENT' ? 'text-red-400 bg-red-500/10 border-red-500/30' :
                      task.priority === 'HIGH'   ? 'text-amber-400 bg-amber-400/10 border-amber-400/30' :
                      task.priority === 'NORMAL' ? 'text-aetox-accent bg-aetox-accent/10 border-aetox-accent/30' :
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
                        animate={item.status === 'retrying' ? { width: ['5%', '100%'] } : { width: '100%' }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: item.status === 'retrying' ? Infinity : 0, 
                          ease: "linear",
                          delay: i * 0.4 
                        }}
                        className={`h-full rounded-full ${item.status === 'success' ? 'bg-green-500' : 'bg-amber-400'}`}
                      />
                    </div>
                    <motion.div
                      animate={item.status === 'retrying' ? { opacity: [0.6, 1, 0.6] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
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
                <motion.div 
                  initial={{ opacity: 0, y: 6 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.8 }} 
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-[8px] font-black text-gray-400 uppercase tracking-widest hover:border-white/20 transition-colors"
                >
                  <Zap className="w-3 h-3 text-amber-400" /> ไม่ต้องใช้คนตรวจสอบ — ระบบจัดการเอง
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
                    <motion.div key={m.label} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} className={`p-3 rounded-xl border text-center ${m.accent ? 'bg-aetox-accent/10 border-aetox-accent/30' : 'bg-white/[0.03] border-white/5'}`}>
                      <div className={`text-[18px] font-black leading-none ${m.accent ? 'text-aetox-accent' : 'text-white'}`}>
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
                        className="flex-1 bg-aetox-accent/40 rounded-sm"
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
                        className={`h-full rounded-full ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-amber-400' : 'bg-aetox-accent'}`}
                      />
                    </div>
                    <div className={`text-[8px] font-black w-8 text-right ${i === 0 ? 'text-red-400' : i === 1 ? 'text-amber-400' : 'text-aetox-accent'}`}>{[85, 55, 30][i]}%</div>
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
export function ScalableBotsVisual() {
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
export function ObservabilityVisual() {
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
            <motion.div key={`ob-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-aetox-accent shadow-[0_0_10px_rgba(10,132,255,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
