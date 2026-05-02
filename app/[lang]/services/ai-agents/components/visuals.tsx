'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, CheckCircle2, FileText, Search, RefreshCw, Layers, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

/* ─── Shared UI Components ────────────────────────────────────────── */
export function LayerBadge({ icon: Icon, label, colorClass = "text-aetox-accent" }: { icon: any; label: string; colorClass?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aetox-accent/20 bg-aetox-accent/10 ${colorClass} text-[10px] font-bold`}>
      <Icon className="w-3.5 h-3.5" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-aetox-surface-low/30 border border-aetox-border hover:border-aetox-accent/30 transition-all duration-300 hover:bg-aetox-accent/[0.02]">
      <div className="flex items-center gap-3 font-bold text-aetox-text-main group-hover:text-aetox-accent transition-colors text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
        {title}
      </div>
      <p className="text-aetox-text-soft text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-aetox-border">
      <p className="text-xs text-aetox-text-muted mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-aetox-surface-low border border-aetox-border text-aetox-accent text-xs font-medium transition-all hover:bg-aetox-accent/10 hover:border-aetox-accent/40`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── 01. Orchestrator Visual ─────────────────────────────────────── */
export function OrchestratorVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span 
            style={{ fontFamily: 'var(--font-ibm-plex-thai), sans-serif' }} 
            className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest"
          >
            {labels.orchestration}
          </span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border font-sans">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="decomp" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="w-full space-y-3">
              <div className="p-3 rounded-xl bg-aetox-surface-low border border-aetox-border">
                <div className="text-[8px] font-bold text-aetox-text-muted mb-1">{dict.complexQuery}</div>
                <div className="text-[11px] text-aetox-text-main">{dict.energyRisk}</div>
              </div>
              <div className="flex justify-center"><div className="px-2 py-0.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/30 text-[8px] font-bold text-aetox-accent">{dict.subTasks}</div></div>

              <div className="grid grid-cols-2 gap-2">
                {[dict.marketTrends, dict.financials].map((q, i) => (
                  <div key={i} className="p-2 rounded-lg bg-aetox-surface-low/30 border border-aetox-border text-[9px] text-aetox-text-soft truncate text-center">{q}</div>
                ))}
              </div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex items-center justify-around relative">
              {/* Central Connection Beam */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px bg-aetox-accent/10">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-20 h-full bg-gradient-to-r from-transparent via-aetox-accent to-transparent" />
              </div>

              {[1,2,3].map((a) => (
                <div key={a} className="flex flex-col items-center gap-3 relative z-10">
                  <div className="relative group">
                    <motion.div 
                      animate={{ rotate: 360, borderColor: ['rgba(10,132,255,0.1)', 'rgba(16,185,129,0.4)', 'rgba(10,132,255,0.1)'] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} 
                      className="w-14 h-14 rounded-full border border-dashed flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-aetox-accent/5 shadow-[0_0_20px_rgba(10,132,255,0.1)]"
                    />
                    <Bot className="absolute inset-0 m-auto w-6 h-6 text-aetox-accent" />
                    
                    {/* Status Dot */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </div>
                  
                  <div className="text-center space-y-1 font-sans">
                    <div className="text-[7px] font-bold text-aetox-text-muted uppercase tracking-widest">{labels.agent} 0{a}</div>
                    <motion.div 
                      animate={{ color: ['#86868B', '#0A84FF', '#86868B'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: a * 0.3 }}
                      className="text-[9px] font-mono font-bold tabular-nums"
                    >
                      {(85 + a * 4).toFixed(1)}%
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="synthesis" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="w-full space-y-4 font-sans">
              <div className="flex justify-center -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-aetox-surface-low border border-aetox-border flex items-center justify-center"><FileText className="w-4 h-4 text-aetox-text-muted" /></div>)}
              </div>
              <div className="p-4 rounded-xl bg-aetox-accent/10 border border-aetox-accent/40 shadow-aetox-glow">
                <div className="text-[9px] font-bold text-aetox-accent uppercase mb-1.5">{dict.consolidatedReport}</div>

                <div className="space-y-1">
                  {[1,2].map(i => <div key={i} className="h-1 bg-aetox-accent/30 rounded-full" style={{ width: `${100-i*20}%` }} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-aetox-surface-low/30 border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`or-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 02. Hybrid Retrieval Visual ─────────────────────────────────── */
export function HybridRetrievalVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.hybridRetrieval}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="hyde" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center gap-4">
              <div className="w-full px-4 py-2 rounded-xl bg-aetox-surface-low border border-aetox-border flex items-center gap-3">
                <div className="text-[8px] font-bold text-aetox-text-muted uppercase w-12 shrink-0">{dict.query}</div>
                <div className="flex-1 h-1.5 bg-aetox-surface-lowest rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-aetox-accent/40 text-sm">↓</motion.div>
                <span className="text-[8px] font-bold text-aetox-accent uppercase bg-aetox-accent/10 border border-aetox-accent/20 px-2 py-0.5 rounded-full">{dict.hypothetical}</span>
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} className="text-aetox-accent/40 text-sm">↓</motion.div>
              </div>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full px-4 py-3 rounded-xl bg-aetox-accent/10 border border-aetox-accent/40 shadow-[0_0_30px_rgba(10,132,255,0.15)]">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[8px] font-bold text-aetox-text-main uppercase tracking-widest">{dict.vector}</div>
                  <div className="text-[7px] font-mono text-emerald-400 font-bold">INDEX_ACTIVE_99.2%</div>
                </div>

                <div className="flex gap-1.5 h-16 items-end">
                  {[60, 85, 45, 90, 70, 55, 80, 40, 65, 50].map((h, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ 
                        height: [`${h * 0.15}px`, `${h * 0.22}px`, `${h * 0.15}px`],
                        backgroundColor: i % 3 === 0 ? 'rgba(16,185,129,0.5)' : 'rgba(10,132,255,0.5)'
                      }} 
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} 
                      className="flex-1 rounded-sm shadow-aetox-glow/10" 
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="hybrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-3 font-sans">
              <div className="relative">
                <div className="flex items-center gap-2 mb-1.5"><div className="px-1.5 py-0.5 rounded bg-aetox-accent/20 border border-aetox-accent/30 text-[7px] font-bold text-aetox-accent uppercase">Semantic GPU</div><div className="flex-1 h-px bg-aetox-surface-low" /></div>
                <div className="relative h-6 rounded-lg bg-aetox-surface-low border border-aetox-accent/20 overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-aetox-accent/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-3 gap-1">
                    {[1, 0.6, 0.9, 0.4, 0.8].map((v, i) => (
                      <motion.div key={i} className="flex-1 bg-aetox-accent/60" style={{ height: `${v * 12}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-1.5"><div className="px-1.5 py-0.5 rounded bg-aetox-text-muted/20 border border-aetox-border text-[7px] font-bold text-aetox-text-soft uppercase">Keyword Match</div><div className="flex-1 h-px bg-aetox-surface-low" /></div>
                <div className="relative h-6 rounded-lg bg-aetox-surface-low border border-aetox-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-3 gap-2">
                    {['vc', 'ai', 'q4'].map((kw, i) => (
                      <div key={i} className="text-[7px] font-mono text-aetox-text-soft bg-aetox-surface-lowest px-1 rounded border border-aetox-border">{kw}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="rerank" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-2 font-sans">
              {[{ label: 'Doc A', score: 0.94, skip: true }, { label: 'Doc B', score: 0.61, skip: false }].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[8px] font-bold text-aetox-text-muted w-8">{item.label}</div>
                  <div className="flex-1 h-3 rounded bg-aetox-surface-low border border-aetox-border overflow-hidden relative">
                    <motion.div animate={{ width: `${item.score * 100}%` }} className={`h-full ${item.score >= 0.7 ? 'bg-aetox-accent/50' : 'bg-aetox-text-muted/20'} rounded`} />
                  </div>
                  <div className={`text-[8px] font-bold w-6 text-right ${item.score >= 0.7 ? 'text-aetox-accent' : 'text-aetox-text-muted'}`}>{item.score}</div>
                  <div className={`text-[6px] font-bold px-1 py-0.5 rounded ${item.skip ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500' : 'bg-aetox-surface-low text-aetox-text-muted'}`}>
                    {item.skip ? labels.skip : labels.rank}
                  </div>
                </div>
              ))}
              <div className="mt-2 flex items-center justify-center gap-2 px-3 py-1 rounded-xl bg-aetox-accent/5 border border-aetox-accent/20">
                <Zap className="w-2.5 h-2.5 text-aetox-accent" />
                <span className="text-[8px] font-bold text-aetox-text-main uppercase tracking-widest">{dict.threshold}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-aetox-surface-low/30 border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`hr-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 03. Self-Correction Visual ──────────────────────────────────── */
export function SelfCorrectionVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.selfCorrection}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full font-sans">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-aetox-surface-low" />
                  <motion.circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="220" initial={{ strokeDashoffset: 220 }} animate={{ strokeDashoffset: 130 }} transition={{ duration: 1.5 }} className="text-red-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-red-500">42%</span>
                  <span className="text-[6px] font-bold text-aetox-text-muted uppercase tracking-widest">{dict.confidence}</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[8px] font-bold text-red-500 uppercase tracking-widest animate-pulse">{dict.lowPrecision}</div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full font-sans">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center opacity-50 relative">
                  <Database className="w-6 h-6 text-aetox-text-muted" />
                </div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-aetox-accent relative">
                  <RefreshCw className="w-8 h-8" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow" />
                </motion.div>
                <div className="w-12 h-12 rounded-xl bg-aetox-accent/10 border border-aetox-accent/30 flex items-center justify-center shadow-aetox-glow relative">
                  <Search className="w-6 h-6 text-aetox-accent" />
                </div>
              </div>
              
              <div className="w-full max-w-[200px] space-y-2">
                <div className="flex justify-between items-center text-[7px] font-bold text-aetox-accent/70 uppercase tracking-widest">
                  <span>{dict.requerying}</span>
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>SYNCING...</motion.span>
                </div>
                <div className="h-1.5 w-full bg-aetox-surface-low rounded-full overflow-hidden border border-aetox-border">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-aetox-accent to-transparent" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  {[1, 2].map(i => (
                    <div key={i} className="flex justify-between items-center text-[6px] font-mono text-aetox-text-muted">
                      <span>LOG_FIX_ID_{4820 + i}</span>
                      <span className="text-emerald-500/60 font-bold">REPAIRED</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="optimized" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full font-sans">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-aetox-surface-low" />
                  <motion.circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="220" initial={{ strokeDashoffset: 220 }} animate={{ strokeDashoffset: 10 }} transition={{ duration: 1.5 }} className="text-emerald-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-emerald-500">96%</span>
                  <span className="text-[6px] font-bold text-aetox-text-muted uppercase tracking-widest">{dict.confidence}</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[8px] font-bold text-emerald-500 uppercase tracking-widest">{dict.optimized}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-aetox-surface-low/30 border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`sc-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 04. Strategic Output Visual ─────────────────────────────────── */
export function StrategicOutputVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.strategicGen}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-3 font-sans">
              {[labels.planner, labels.analyst].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-aetox-surface-low border border-aetox-border relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-aetox-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center text-aetox-accent shadow-aetox-glow/20">
                      <Bot size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[9px] font-bold text-aetox-text-main uppercase tracking-widest">{r}</div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(b => (
                          <motion.div key={b} animate={{ height: [2, 6, 2] }} transition={{ duration: 0.5 + b*0.1, repeat: Infinity }} className="w-0.5 bg-aetox-accent/40" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-[7px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 relative z-10 uppercase">Active</div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="synthesis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4 font-sans">
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-16 h-16 rounded-full border border-dashed border-aetox-accent/20" />
                <Cpu className="absolute inset-0 m-auto w-6 h-6 text-aetox-accent opacity-50" />
              </div>
              <div className="space-y-1.5"><div className="w-16 h-1 bg-aetox-accent/30 rounded-full" /><div className="w-24 h-1 bg-aetox-surface-low rounded-full" /></div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="output" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full p-4 rounded-xl bg-aetox-surface-low border border-aetox-border font-mono text-[9px] text-aetox-text-soft">
              <span className="text-aetox-accent">{dict.suggestion}</span> {dict.liquidity}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
      <div className="mt-4 p-4 h-[90px] rounded-2xl bg-aetox-surface-low/30 border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`sg-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent shadow-aetox-glow" />
        </div>
      </div>
    </div>
  );
}

/* ─── 05. Real-time Stream Visual ─────────────────────────────────── */
export function RealTimeStreamVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">{labels.streamInterface}</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">Live SSE</div>
      </div>
      <div className="flex-1 flex items-center justify-center h-[220px] font-sans">
        <div className="w-full p-5 rounded-2xl bg-black/60 border border-aetox-border font-mono text-[11px] leading-relaxed text-aetox-text-soft relative overflow-hidden group h-full shadow-inner">
          <div className="absolute inset-0 bg-aetox-surface-low/5 bg-[length:20px_20px] opacity-[0.03]" />
          <div className="absolute top-0 right-0 p-3 opacity-20"><Zap className="w-5 h-5 text-aetox-accent shadow-aetox-glow" /></div>
          <div className="relative z-10">
            <span className="text-aetox-accent mr-2 tracking-tighter opacity-70 font-bold"># inference_output_{">"}</span>
            <span className="text-aetox-text-main drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{streamText}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }} 
              className="inline-block w-2 h-4 bg-aetox-accent ml-1 align-middle shadow-[0_0_10px_rgba(10,132,255,0.8)]" 
            />
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 h-[90px] flex items-center justify-between px-2 bg-aetox-surface-low/30 border border-aetox-border rounded-2xl font-sans">
        <div className="flex gap-4">
          <div className="space-y-1"><div className="text-[7px] text-aetox-text-muted font-bold uppercase">{dict.latency}</div><div className="text-[10px] font-mono text-aetox-text-main">42ms</div></div>
          <div className="space-y-1"><div className="text-[7px] text-aetox-text-muted font-bold uppercase">{dict.throughput}</div><div className="text-[10px] font-mono text-aetox-text-main">124 t/s</div></div>
        </div>
        <div className="flex items-center gap-2 text-[8px] font-bold text-emerald-500 uppercase tracking-widest">
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
    <OrchestratorVisual key="orch" dict={dict.visuals.orchestrator} labels={dict.visuals.labels} />,
    <HybridRetrievalVisual key="hybrid" dict={dict.visuals.hybrid} labels={dict.visuals.labels} />,
    <SelfCorrectionVisual key="self-correct" dict={dict.visuals.correction} labels={dict.visuals.labels} />,
    <StrategicOutputVisual key="strategic" dict={dict.visuals.strategic} labels={dict.visuals.labels} />,
    <RealTimeStreamVisual key="stream" dict={dict.visuals.stream} labels={dict.visuals.labels} />,
  ];

  return (
    <div className="space-y-6">
      <ServiceVisualCard minHeight="h-[560px] lg:h-[620px]">
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
            <div className="mt-6 p-6 md:p-8 bg-aetox-surface-lowest/90 backdrop-blur-3xl border border-aetox-border space-y-3 shrink-0 rounded-[32px] h-auto min-h-[160px] flex flex-col justify-center font-sans shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-1">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.8, y: 0 }} className="text-aetox-accent text-[10px] font-bold uppercase tracking-widest block mb-1 font-sans">
                  {steps[activeStep]?.subtitle || 'Aetox AI'}
                </motion.span>
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl lg:text-3xl font-bold text-aetox-text-main leading-tight tracking-tight font-sans">
                  {steps[activeStep]?.title || 'Loading...'}
                </motion.h3>
              </div>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-aetox-text-soft text-sm md:text-base leading-relaxed font-medium">
                {steps[activeStep]?.desc || '...'}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </ServiceVisualCard>

      <div className="relative flex items-center justify-between h-12 mt-4 font-sans">
        <div className="flex gap-2">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-10 bg-aetox-accent shadow-aetox-glow' : 'w-3 bg-aetox-surface-low hover:bg-aetox-surface-high'}`} 
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-10 h-10 rounded-full border border-aetox-border flex items-center justify-center text-aetox-text-main hover:bg-aetox-surface-low transition-all active:scale-75 hover:scale-105">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-10 h-10 rounded-full border border-aetox-border bg-aetox-surface-low flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent/20 transition-all active:scale-75 hover:scale-105">→</button>
        </div>
      </div>
    </div>
  );
}
