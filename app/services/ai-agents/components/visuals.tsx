'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, Link as LinkIcon, CheckCircle2, FileText } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

/* ─── Shared UI Components ────────────────────────────────────────── */
export function LayerBadge({ icon: Icon, label, colorClass = "text-aetox-accent" }: { icon: any; label: string; colorClass?: string }) {
  const bgClass = colorClass.includes('aetox-accent') ? 'bg-aetox-accent/10 border-aetox-accent/20' : 'bg-aetox-accent/10 border-aetox-accent/20';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-sm font-bold tracking-widest uppercase`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aetox-accent/30 transition-all duration-300 hover:bg-aetox-accent/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-aetox-accent transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
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
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-aetox-accent/20 text-aetox-accent text-xs font-medium transition-all ${item.link ? 'cursor-pointer hover:bg-aetox-accent/10 hover:border-aetox-accent/40' : 'cursor-default'}`}
          >
            {item.link?.includes('github.com') ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            ) : (
              <LinkIcon className="w-3 h-3" />
            )}
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Pillar 2 Specific: Hybrid Retrieval Pipeline Visual ────────── */
export function HybridRetrievalVisual() {
  const [phase, setPhase] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: "HyDE Embedding", tag: "PHASE 01", desc: "จินตนาการคำตอบล่วงหน้าเป็น Vector Target" },
    { title: "Hybrid Search", tag: "PHASE 02", desc: "Semantic GPU + Keyword ทำงานคู่ขนาน" },
    { title: "Adaptive Reranking", tag: "PHASE 03", desc: "Cross-Encoder ตัดสิน — Skip ถ้า Score สูงพอ" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-black text-aetox-accent uppercase tracking-widest">Hybrid Precision Retrieval</span>
        </div>
        <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="hyde" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center gap-6">
              <div className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest w-12 shrink-0">Query</div>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-aetox-accent/40 text-lg">↓</motion.div>
                <span className="text-[8px] font-black text-aetox-accent uppercase tracking-widest bg-aetox-accent/10 border border-aetox-accent/20 px-3 py-1 rounded-full">AI Imagines Answer</span>
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} className="text-aetox-accent/40 text-lg">↓</motion.div>
              </div>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full px-4 py-3 rounded-xl bg-aetox-accent/10 border border-aetox-accent/40 shadow-aetox-glow/10">
                <div className="text-[8px] font-black text-aetox-accent uppercase tracking-widest mb-2">Hypothetical Answer Vector</div>
                <div className="flex gap-1">
                  {[60, 85, 45, 90, 70, 55, 80, 40].map((h, i) => (
                    <motion.div key={i} animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-aetox-accent/50 rounded-sm" style={{ height: `${h * 0.2}px`, minHeight: '4px' }} />
                  ))}
                </div>
                <div className="mt-2 text-[7px] text-gray-500 font-mono">→ Used as retrieval target</div>
              </motion.div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="hybrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center mb-2">
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Parallel Execution</span>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 rounded bg-aetox-accent/20 border border-aetox-accent/30 text-[8px] font-black text-aetox-accent uppercase">Semantic GPU</div>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="relative h-8 rounded-lg bg-white/5 border border-aetox-accent/20 overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-aetox-accent/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-3 gap-1">
                    {[1, 0.6, 0.9, 0.4, 0.8, 0.5, 0.95].map((v, i) => (
                      <motion.div key={i} animate={{ opacity: [0.3, v, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }} className="flex-1 bg-aetox-accent rounded-full" style={{ height: `${v * 16}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[8px] font-black text-blue-400 uppercase">Keyword Match</div>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="relative h-8 rounded-lg bg-white/5 border border-blue-500/20 overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-3 gap-2">
                    {['vc', 'ai', 'q4', 'roi', 'kpi'].map((kw, i) => (
                      <motion.div key={i} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="text-[7px] font-mono text-blue-400/60 bg-blue-500/10 px-1 rounded">
                        {kw}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-aetox-accent/20" />
                <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-3 py-1 rounded-full bg-aetox-accent/10 border border-aetox-accent/30 text-[8px] font-black text-aetox-accent uppercase tracking-widest">Merged Results</motion.div>
                <div className="flex-1 h-px bg-aetox-accent/20" />
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="rerank" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center mb-1">
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Cross-Encoder Decision</span>
              </div>
              {[{ label: 'Doc A', score: 0.94, skip: true }, { label: 'Doc B', score: 0.61, skip: false }, { label: 'Doc C', score: 0.88, skip: true }].map((item, i) => (
                <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} className="flex items-center gap-3">
                  <div className="text-[9px] font-black text-gray-400 w-10">{item.label}</div>
                  <div className="flex-1 h-5 rounded bg-white/5 border border-white/5 overflow-hidden relative">
                    <motion.div animate={{ width: `${item.score * 100}%` }} transition={{ duration: 1, delay: i * 0.2 }} className={`h-full ${item.score >= 0.7 ? 'bg-aetox-accent/50' : 'bg-white/10'} rounded`} />
                  </div>
                  <div className={`text-[9px] font-black w-8 text-right ${item.score >= 0.7 ? 'text-aetox-accent' : 'text-gray-600'}`}>{item.score}</div>
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className={`text-[7px] font-black px-1.5 py-0.5 rounded ${item.skip ? 'bg-green-500/10 border border-green-500/30 text-green-500' : 'bg-white/5 border border-white/10 text-gray-600'}`}>
                    {item.skip ? 'SKIP' : 'RANK'}
                  </motion.div>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-2 flex items-center justify-center gap-3 px-4 py-2 rounded-xl bg-aetox-accent/5 border border-aetox-accent/20">
                <Zap className="w-3 h-3 text-aetox-accent" />
                <span className="text-[9px] font-black text-white">Threshold: 0.7+ → Skip Rerank</span>
                <span className="text-[9px] font-black text-aetox-accent ml-auto">~15ms</span>
              </motion.div>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
            <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`p-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── Pillar 3 Specific: Strategic Output Generation Visual ─────── */
export function StrategicOutputVisual() {
  const [phase, setPhase] = useState(0); 
  const [streamText, setStreamText] = useState('');
  const fullText = 'ความเสี่ยงหลัก: คู่แข่ง B มีสภาพคล่องต่ำกว่า 23% ขณะที่ตลาดพลังงานกำลังหดตัว — แนะนำเร่งขยาย Market Share ใน Q2 ก่อนที่จะถูก Consolidate';

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sync during render pattern to avoid cascading renders
  if (phase !== 2 && streamText !== '') {
    setStreamText('');
  }

  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setStreamText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [phase]);

  const phaseData = [
    { title: 'Adaptive Role-Playing', tag: 'PHASE 01', desc: 'AI สวมบทบาทผู้เชี่ยวชาญตามโจทย์' },
    { title: 'Cross-Concept Synthesis', tag: 'PHASE 02', desc: 'วิเคราะห์จุดเหมือน-ต่าง ข้ามฐานข้อมูล' },
    { title: 'Real-time SSE Streaming', tag: 'PHASE 03', desc: 'Token-by-token — ไหลลื่น ไม่รอ' },
  ];

  const roles = [
    { name: 'Strategic Planner', desc: 'ระบุความเสี่ยงและ Trade-offs' },
    { name: 'Risk Analyst', desc: 'ประเมินภัยคุกคามเชิงตัวเลข' },
    { name: 'Synthesis Expert', desc: 'สังเคราะห์มุมมองหลากแหล่ง' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-black text-aetox-accent uppercase tracking-widest">Strategic Output Generation</span>
        </div>
        <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center mb-1">
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Agent Persona Allocation</span>
              </div>
              {roles.map((role, i) => (
                <motion.div key={role.name} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-aetox-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-black text-white uppercase">{role.name}</div>
                    <div className="text-[8px] text-gray-500">{role.desc}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3].map(d => <div key={d} className="w-1 h-1 rounded-full bg-aetox-accent" />)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="synthesis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center gap-6">
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="w-32 h-32 rounded-full border-2 border-dashed border-aetox-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-3xl bg-aetox-accent/20 border border-aetox-accent/40 flex items-center justify-center shadow-aetox-glow">
                    <Cpu className="w-8 h-8 text-aetox-accent" />
                  </div>
                </div>
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    className="absolute w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                    style={{
                      top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Database className="w-4 h-4 text-gray-500" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-[8px] font-black text-aetox-accent uppercase tracking-widest">Synthesizing 1.2TB context...</span>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="streaming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col gap-4">
              <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Final Inference Stream</div>
              <div className="flex-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-[10px] leading-relaxed text-gray-300">
                <span className="text-aetox-accent mr-2">●</span>
                {streamText}
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1.5 h-3.5 bg-aetox-accent ml-1" />
              </div>
              <div className="flex items-center gap-3 text-[7px] text-gray-600 font-black uppercase">
                <span>Latency: 142ms</span>
                <span>Tokens: 84/sec</span>
                <div className="ml-auto flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
            <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`st-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── Orchestrator Visual ────────────────────────────────────────── */
export function OrchestratorVisual() {
  const [phase, setPhase] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: 'Query Decomposition', tag: 'STAGE 01', desc: 'วิเคราะห์คำถามที่ซับซ้อน แตกเป็นงานย่อย (Sub-queries) เพื่อความแม่นยำ' },
    { title: 'Parallel Execution', tag: 'STAGE 02', desc: 'รัน Agent หลายตัวพร้อมกันเพื่อหาข้อมูลและประมวลผลคนละส่วน' },
    { title: 'Consolidated Synthesis', tag: 'STAGE 03', desc: 'รวบรวมคำตอบจากทุกแหล่ง สรุปเป็นรายงานฉบับเดียวที่สมบูรณ์' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-black text-aetox-accent uppercase tracking-widest">Agentic Orchestration</span>
        </div>
        <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>

      <div className="flex-1 flex items-center justify-center relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="decomp" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center mb-1"><span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Round-Robin Protocol</span></div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Complex Query</div>
                <div className="text-xs text-white font-medium">ช่วยวิเคราะห์ความเสี่ยงธุรกิจ...</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-3 py-1 rounded-full bg-aetox-accent/10 border border-aetox-accent/30 text-[9px] font-black text-aetox-accent uppercase">Decompose ↓</div>
              </div>
              <div className="space-y-2">
                {['แนวโน้มตลาดพลังงาน 2026', 'งบการเงินคู่แข่ง A & B', 'ปัจจัยเสี่ยงภูมิรัฐศาสตร์'].map((q, i) => (
                  <motion.div key={i} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <div className="text-[8px] font-black text-aetox-accent uppercase shrink-0">Sub-query {i+1}</div>
                    <div className="text-[10px] text-gray-400 truncate">{q}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex items-center justify-around">
              {[1,2,3].map((a) => (
                <div key={a} className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-16 h-16 rounded-full border border-dashed border-aetox-accent/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-aetox-accent" />
                    </div>
                  </div>
                  <div className="text-[8px] font-black text-gray-500 uppercase">Agent-0{a}</div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="synthesis" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="w-full h-full flex flex-col items-center justify-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><FileText className="w-5 h-5 text-gray-500" /></div>)}
              </div>
              <div className="w-full p-5 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/40 shadow-aetox-glow">
                <div className="text-[10px] font-black text-aetox-accent uppercase mb-2">Consolidated Report</div>
                <div className="space-y-1.5">
                  {[1,2,3].map(i => <div key={i} className="h-1 bg-aetox-accent/30 rounded-full" style={{ width: `${100-i*15}%` }} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
            <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`or-${phase}`} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── AI Showcase Component ────────────────────────────────────────── */
export function AiShowcase({ steps: passedSteps }: { steps?: { title: string; subtitle: string; desc: string }[] }) {
  const [activeStep, setActiveStep] = useState(0);

  const defaultSteps = [
    { title: 'Hybrid Retrieval', subtitle: 'Pillar 02', desc: 'Semantic + Keyword search ทำงานคู่ขนาน พร้อม AI จินตนาการคำตอบล่วงหน้าเพื่อความแม่นยำสูงสุด' },
    { title: 'Strategic Output', subtitle: 'Pillar 03', desc: 'สังเคราะห์ข้อมูลแบบ Cross-concept พร้อมระบบ Streaming ไหลลื่น ไม่ต้องรอนาน' },
    { title: 'Agentic Orchestration', subtitle: 'Advanced', desc: 'แตกโจทย์ซับซ้อนเป็นงานย่อย และสั่งการ Agent หลายตัวทำงานขนานกันแบบอัตโนมัติ' },
  ];

  const steps = passedSteps || defaultSteps;

  const visuals = [
    <HybridRetrievalVisual key="hybrid" />,
    <StrategicOutputVisual key="strategic" />,
    <OrchestratorVisual key="orch" />,
  ];

  return (
    <div className="space-y-6">
      <ServiceVisualCard minHeight="h-auto">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 40, scale: 0.95 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            exit={{ opacity: 0, x: -40, scale: 1.05 }} 
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 1
            }} 
            className="relative z-10 w-full flex flex-col"
          >
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40 relative">
              {visuals[activeStep]}
            </div>
            <div className="p-6 lg:p-8 bg-ultra-dark/95 backdrop-blur-2xl border-t border-white/5 space-y-3 shrink-0 rounded-b-[32px]">
              <div className="space-y-1">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-aetox-accent text-[10px] font-black uppercase tracking-[0.25em]"
                >
                  {steps[activeStep].subtitle}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-black text-white leading-tight"
                >
                  {steps[activeStep].title}
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-3"
              >
                {steps[activeStep].desc}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </ServiceVisualCard>

      <div className="relative flex items-center justify-between h-16 mt-4">
        <div className="flex gap-2.5">
          {steps.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1.5 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-12 bg-aetox-accent shadow-aetox-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-aetox-accent/30 transition-all active:scale-75 hover:scale-105">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-aetox-accent/20 hover:border-aetox-accent/50 transition-all shadow-aetox-glow/10 active:scale-75 hover:scale-105">→</button>
        </div>
      </div>
    </div>
  );
}
