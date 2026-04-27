'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, CheckCircle2, FileText, Search, RefreshCw, Layers, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

/* ─── Shared UI Components ────────────────────────────────────────── */
export function LayerBadge({ icon: Icon, label, colorClass = "text-cyber-blue" }: { icon: any; label: string; colorClass?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue/20 bg-cyber-blue/10 ${colorClass} text-[10px] font-bold`}>
      <Icon className="w-3.5 h-3.5" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs font-medium transition-all hover:bg-cyber-blue/10 hover:border-cyber-blue/40`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── 01. Orchestrator Visual ─────────────────────────────────────── */
export function OrchestratorVisual({ dict }: { dict: any }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPhase((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = dict.phases;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
          <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-widest">Agentic Orchestration</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="decomp" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="w-full space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] font-bold text-gray-500 mb-1">{dict.complexQuery}</div>
                <div className="text-[11px] text-white">{dict.energyRisk}</div>
              </div>
              <div className="flex justify-center"><div className="px-2 py-0.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-[8px] font-bold text-cyber-blue">{dict.subTasks}</div></div>

              <div className="grid grid-cols-2 gap-2">
                {[dict.marketTrends, dict.financials].map((q, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-[9px] text-gray-400 truncate text-center">{q}</div>
                ))}
              </div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex items-center justify-around">
              {[1,2,3].map((a) => (
                <div key={a} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 rounded-full border border-dashed border-cyber-blue/30" />
                    <Bot className="absolute inset-0 m-auto w-5 h-5 text-cyber-blue" />
                  </div>
                  <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Agent 0{a}</div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="synthesis" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="w-full space-y-4">
              <div className="flex justify-center -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"><FileText className="w-4 h-4 text-gray-500" /></div>)}
              </div>
              <div className="p-4 rounded-xl bg-cyber-blue/10 border border-cyber-blue/40 shadow-cyber-glow">
                <div className="text-[9px] font-black text-cyber-blue uppercase mb-1.5">{dict.consolidatedReport}</div>

                <div className="space-y-1">
                  {[1,2].map(i => <div key={i} className="h-1 bg-cyber-blue/30 rounded-full" style={{ width: `${100-i*20}%` }} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1">
            <div className="text-[10px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`or-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 02. Hybrid Retrieval Visual ─────────────────────────────────── */
export function HybridRetrievalVisual({ dict }: { dict: any }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPhase((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = dict.phases;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Hybrid Precision Retrieval</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="hyde" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center gap-4">
              <div className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="text-[8px] font-black text-gray-500 uppercase w-12 shrink-0">{dict.query}</div>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-cyber-blue/40 text-sm">↓</motion.div>
                <span className="text-[8px] font-black text-cyber-blue uppercase bg-cyber-blue/10 border border-cyber-blue/20 px-2 py-0.5 rounded-full">{dict.hypothetical}</span>
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} className="text-cyber-blue/40 text-sm">↓</motion.div>
              </div>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full px-4 py-2 rounded-xl bg-cyber-blue/10 border border-cyber-blue/40 shadow-cyber-glow/10">
                <div className="text-[8px] font-black text-cyber-blue uppercase mb-1.5">{dict.vector}</div>

                <div className="flex gap-1">
                  {[60, 85, 45, 90, 70, 55, 80, 40].map((h, i) => (
                    <motion.div key={i} animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-cyber-blue/50 rounded-sm" style={{ height: `${h * 0.15}px`, minHeight: '4px' }} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="hybrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-3">
              <div className="relative">
                <div className="flex items-center gap-2 mb-1.5"><div className="px-1.5 py-0.5 rounded bg-cyber-blue/20 border border-cyber-blue/30 text-[7px] font-black text-cyber-blue uppercase">Semantic GPU</div><div className="flex-1 h-px bg-white/5" /></div>
                <div className="relative h-6 rounded-lg bg-white/5 border border-cyber-blue/20 overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-3 gap-1">
                    {[1, 0.6, 0.9, 0.4, 0.8].map((v, i) => (
                      <motion.div key={i} className="flex-1 bg-cyber-blue" style={{ height: `${v * 12}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-1.5"><div className="px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[7px] font-black text-blue-400 uppercase">Keyword Match</div><div className="flex-1 h-px bg-white/5" /></div>
                <div className="relative h-6 rounded-lg bg-white/5 border border-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-3 gap-2">
                    {['vc', 'ai', 'q4'].map((kw, i) => (
                      <div key={i} className="text-[7px] font-mono text-blue-400/60 bg-blue-500/10 px-1 rounded">{kw}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="rerank" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-2">
              {[{ label: 'Doc A', score: 0.94, skip: true }, { label: 'Doc B', score: 0.61, skip: false }].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[8px] font-black text-gray-400 w-8">{item.label}</div>
                  <div className="flex-1 h-3 rounded bg-white/5 border border-white/5 overflow-hidden relative">
                    <motion.div animate={{ width: `${item.score * 100}%` }} className={`h-full ${item.score >= 0.7 ? 'bg-cyber-blue/50' : 'bg-white/10'} rounded`} />
                  </div>
                  <div className={`text-[8px] font-black w-6 text-right ${item.score >= 0.7 ? 'text-cyber-blue' : 'text-gray-600'}`}>{item.score}</div>
                  <div className={`text-[6px] font-black px-1 py-0.5 rounded ${item.skip ? 'bg-green-500/10 border border-green-500/30 text-green-500' : 'bg-white/5 text-gray-600'}`}>
                    {item.skip ? 'SKIP' : 'RANK'}
                  </div>
                </div>
              ))}
              <div className="mt-2 flex items-center justify-center gap-2 px-3 py-1 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20">
                <Zap className="w-2.5 h-2.5 text-cyber-blue" />
                <span className="text-[8px] font-black text-white">{dict.threshold}</span>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1">
            <div className="text-[10px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`hr-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 03. Self-Correction Visual ──────────────────────────────────── */
export function SelfCorrectionVisual({ dict }: { dict: any }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPhase((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = dict.phases;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Self-Correction Engine</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                  <motion.circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="220" initial={{ strokeDashoffset: 220 }} animate={{ strokeDashoffset: 130 }} transition={{ duration: 1.5 }} className="text-red-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-black text-red-500">42%</span>
                  <span className="text-[6px] font-black text-gray-500 uppercase">{dict.confidence}</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[8px] font-black text-red-500 uppercase tracking-widest animate-pulse">{dict.lowPrecision}</div>

            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3 w-full">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center opacity-50"><Database className="w-5 h-5" /></div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-cyber-blue"><RefreshCw className="w-6 h-6" /></motion.div>
                <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center shadow-cyber-glow"><Search className="w-5 h-5 text-cyber-blue" /></div>
              </div>
              <div className="text-[8px] font-black text-cyber-blue uppercase tracking-widest mt-2">{dict.requerying}</div>
              <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-cyber-blue" />
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="optimized" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                  <motion.circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="220" initial={{ strokeDashoffset: 220 }} animate={{ strokeDashoffset: 10 }} transition={{ duration: 1.5 }} className="text-green-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-black text-green-500">96%</span>
                  <span className="text-[6px] font-black text-gray-500 uppercase">{dict.confidence}</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-[8px] font-black text-green-500 uppercase tracking-widest">{dict.optimized}</div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1">
            <div className="text-[10px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`sc-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 04. Strategic Output Visual ─────────────────────────────────── */
export function StrategicOutputVisual({ dict }: { dict: any }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPhase((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = dict.phases;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Strategic Generation</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-2">
              {['Strategic Planner', 'Risk Analyst'].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-7 h-7 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue"><Bot size={14} /></div>
                  <div className="text-[9px] font-black text-white uppercase">{r}</div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="synthesis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-16 h-16 rounded-full border border-dashed border-cyber-blue/20" />
                <Cpu className="absolute inset-0 m-auto w-6 h-6 text-cyber-blue opacity-50" />
              </div>
              <div className="space-y-1.5"><div className="w-16 h-1 bg-cyber-blue/30 rounded-full" /><div className="w-24 h-1 bg-white/5 rounded-full" /></div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="output" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-[9px] text-gray-400">
              <span className="text-cyber-blue">{dict.suggestion}</span> {dict.liquidity}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1">
            <div className="text-[10px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div key={`sg-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 05. Real-time Stream Visual ─────────────────────────────────── */
export function RealTimeStreamVisual({ dict }: { dict: any }) {
  const [streamText, setStreamText] = useState('');
  const fullText = dict.fullText;

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setStreamText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 50);
    return () => clearInterval(t);
  }, [fullText]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Real-time Stream Interface</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">Live SSE</div>
      </div>
      <div className="flex-1 flex items-center justify-center h-[220px]">
        <div className="w-full p-5 rounded-2xl bg-ultra-dark/50 border border-white/10 font-mono text-[10px] leading-relaxed text-gray-300 relative overflow-hidden group h-full">
          <div className="absolute top-0 right-0 p-3 opacity-20"><Zap className="w-4 h-4 text-cyber-blue" /></div>
          <span className="text-cyber-blue mr-2 tracking-tighter opacity-50"># inference_output_{">"}</span>
          {streamText}
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1.5 h-3.5 bg-cyber-blue ml-1 align-middle shadow-cyber-glow" />
        </div>
      </div>
      <div className="mt-4 p-4 h-[90px] flex items-center justify-between px-2 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="flex gap-4">
          <div className="space-y-1"><div className="text-[7px] text-gray-600 font-black uppercase">{dict.latency}</div><div className="text-[10px] font-mono text-white">42ms</div></div>
          <div className="space-y-1"><div className="text-[7px] text-gray-600 font-black uppercase">{dict.throughput}</div><div className="text-[10px] font-mono text-white">124 t/s</div></div>
        </div>
        <div className="flex items-center gap-2 text-[8px] font-black text-emerald-500 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-emerald-glow animate-pulse" />
          {dict.synchronized}
        </div>

      </div>
    </div>
  );
}

/* ─── AI Showcase Component ────────────────────────────────────────── */
export function AiShowcase({ dict }: { dict: any }) {
  const [activeStep, setActiveStep] = useState(0);

  const engagement = dict.engagement || { steps: [] };
  const steps = engagement.steps;

  const visuals = [
    <OrchestratorVisual key="orch" dict={dict.visuals.orchestrator} />,
    <HybridRetrievalVisual key="hybrid" dict={dict.visuals.hybrid} />,
    <SelfCorrectionVisual key="self-correct" dict={dict.visuals.correction} />,
    <StrategicOutputVisual key="strategic" dict={dict.visuals.strategic} />,
    <RealTimeStreamVisual key="stream" dict={dict.visuals.stream} />,
  ];

  return (
    <div className="space-y-6">
      <ServiceVisualCard minHeight="h-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full flex flex-col"
          >
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40 relative">
              {visuals[activeStep % visuals.length]}
            </div>
            <div className="mt-6 p-4 lg:p-6 bg-ultra-dark/95 backdrop-blur-2xl border border-white/10 space-y-2 shrink-0 rounded-3xl h-[160px] flex flex-col justify-center">
              <div className="space-y-0.5">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.8, y: 0 }} className="text-cyber-blue text-[9px] font-black uppercase tracking-[0.2em]">
                  {steps[activeStep]?.subtitle || 'Aetox AI'}
                </motion.span>
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl lg:text-2xl font-black text-white leading-tight">
                  {steps[activeStep]?.title || 'Loading...'}
                </motion.h3>
              </div>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-400 text-[13px] leading-relaxed line-clamp-3">
                {steps[activeStep]?.desc || '...'}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </ServiceVisualCard>

      <div className="relative flex items-center justify-between h-12 mt-4">
        <div className="flex gap-2">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-10 bg-cyber-blue shadow-cyber-glow' : 'w-3 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all active:scale-75 hover:scale-105">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-all active:scale-75 hover:scale-105">→</button>
        </div>
      </div>
    </div>
  );
}
