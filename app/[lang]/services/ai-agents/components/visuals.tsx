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
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Bot className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">
            {labels.orchestration}
          </span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border font-sans">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="decomp" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="w-full space-y-6">
              <div className="w-full max-w-[340px] mx-auto p-6 rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border shadow-2xl relative group">
                <div className="text-[9px] font-bold text-aetox-text-muted uppercase mb-2 tracking-widest">{dict.complexQuery}</div>
                <div className="text-[11px] font-medium text-aetox-text-main line-clamp-1">{dict.energyRisk}</div>
              </div>
              <div className="flex justify-center"><div className="px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/30 text-[9px] font-bold text-aetox-accent uppercase tracking-widest">{dict.subTasks}</div></div>

              <div className="grid grid-cols-2 gap-4">
                {[dict.marketTrends, dict.financials, dict.riskAnalysis, dict.competitors].map((q, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-aetox-surface-low/50 border border-aetox-border text-[10px] text-aetox-text-soft text-center group-hover:border-aetox-accent/30 transition-colors"
                  >
                    {q || 'Processing...'}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex items-center justify-around relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px bg-aetox-accent/10">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-20 h-full bg-gradient-to-r from-transparent via-aetox-accent to-transparent" />
              </div>

              {[1,2,3].map((a) => (
                <div key={a} className="flex flex-col items-center gap-4 relative z-10">
                  <div className="relative group">
                    <motion.div 
                      animate={{ rotate: 360, borderColor: ['rgba(10,132,255,0.1)', 'rgba(16,185,129,0.4)', 'rgba(10,132,255,0.1)'] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} 
                      className="w-16 h-16 rounded-full border border-dashed flex items-center justify-center bg-aetox-surface-lowest/50 backdrop-blur-md"
                    />
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-aetox-accent/5"
                    />
                    <Bot className="absolute inset-0 m-auto w-7 h-7 text-aetox-accent" />
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-aetox-surface-lowest" />
                  </div>
                  
                  <div className="text-center space-y-1 font-sans">
                    <div className="text-[7px] font-bold text-aetox-text-muted uppercase tracking-widest">{labels.agent} 0{a}</div>
                    <motion.div 
                      animate={{ color: ['#86868B', '#0A84FF', '#86868B'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: a * 0.3 }}
                      className="text-[10px] font-mono font-bold tabular-nums"
                    >
                      {(85 + a * 4).toFixed(1)}%
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="synthesis" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="w-full space-y-6 font-sans">
              <div className="flex justify-center -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center shadow-lg"><FileText className="w-5 h-5 text-aetox-text-muted" /></div>)}
              </div>
              <div className="p-6 rounded-2xl bg-aetox-accent/5 border border-aetox-accent/20 backdrop-blur-sm">
                <div className="text-[9px] font-bold text-aetox-accent uppercase mb-3 tracking-widest">{dict.consolidatedReport}</div>
                <div className="space-y-2">
                  {[1,2].map(i => <div key={i} className="h-1.5 bg-aetox-accent/20 rounded-full" style={{ width: `${100-i*20}%` }} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-6 h-[100px] rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight uppercase">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`or-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent" />
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
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Search className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] -rotate-12 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.hybridRetrieval}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="hyde" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center gap-6">
              <div className="w-full px-6 py-4 rounded-2xl bg-aetox-surface-low/50 backdrop-blur border border-aetox-border flex items-center gap-4">
                <div className="text-[8px] font-bold text-aetox-text-muted uppercase w-12 shrink-0">{dict.query}</div>
                <div className="flex-1 h-2 bg-aetox-surface-lowest rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-aetox-accent/40 text-lg">↓</motion.div>
                <span className="text-[8px] font-bold text-aetox-accent uppercase bg-aetox-accent/10 border border-aetox-accent/20 px-3 py-1 rounded-full">{dict.hypothetical}</span>
                <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} className="text-aetox-accent/40 text-lg">↓</motion.div>
              </div>
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="w-full px-6 py-5 rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[8px] font-bold text-aetox-text-main uppercase tracking-widest">{dict.vector}</div>
                  <div className="text-[7px] font-mono text-emerald-400 font-bold">99.2%</div>
                </div>
                <div className="flex gap-2 h-16 items-end">
                  {[60, 85, 45, 90, 70, 55, 80, 40, 65, 50].map((h, i) => (
                    <motion.div key={i} animate={{ height: [`${h * 0.15}px`, `${h * 0.25}px`, `${h * 0.15}px`] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-aetox-accent/40 rounded-t-sm" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="hybrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-8 font-sans px-8 py-10">
              {/* Semantic Map Visual */}
              <div className="relative h-24 mb-6">
                <div className="absolute inset-0 bg-aetox-accent/5 rounded-full blur-3xl" />
                <div className="flex items-center justify-around h-full">
                  {[1,2,3,4,5,6].map(i => (
                    <motion.div 
                      key={i} 
                      animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [0.3, 0.7, 0.3],
                        y: [0, i % 2 === 0 ? 10 : -10, 0]
                      }} 
                      transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-aetox-accent shadow-[0_0_8px_rgba(10,132,255,0.8)]" 
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-3"><div className="px-2 py-0.5 rounded bg-aetox-accent/10 border border-aetox-accent/30 text-[7px] font-bold text-aetox-accent uppercase tracking-widest">Semantic Vector</div><div className="flex-1 h-px bg-aetox-border" /></div>
                <div className="relative h-12 rounded-2xl bg-aetox-surface-low/50 backdrop-blur border border-aetox-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-6 gap-3">
                    {[1, 0.6, 0.9, 0.4, 0.8, 0.7, 1].map((v, i) => <motion.div key={i} className="flex-1 bg-aetox-accent/40" style={{ height: `${v * 32}px` }} />)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="rerank" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-4 font-sans">
              {[{ label: 'Doc A', score: 0.94, skip: true }, { label: 'Doc B', score: 0.61, skip: false }].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-[9px] font-bold text-aetox-text-muted w-10 uppercase">{item.label}</div>
                  <div className="flex-1 h-4 rounded-lg bg-aetox-surface-low border border-aetox-border overflow-hidden">
                    <motion.div animate={{ width: `${item.score * 100}%` }} className={`h-full ${item.score >= 0.7 ? 'bg-aetox-accent/40' : 'bg-aetox-text-muted/20'}`} />
                  </div>
                  <div className={`text-[9px] font-bold w-8 text-right ${item.score >= 0.7 ? 'text-aetox-accent' : 'text-aetox-text-muted'}`}>{item.score}</div>
                </div>
              ))}
              <div className="mt-6 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-aetox-accent/5 border border-aetox-accent/20">
                <Zap className="w-3 h-3 text-aetox-accent" />
                <span className="text-[8px] font-bold text-aetox-text-main uppercase tracking-widest">{dict.threshold}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-6 h-[100px] rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight uppercase">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`hr-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent" />
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
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <ShieldCheck className="absolute -bottom-12 -right-12 w-64 h-64 text-emerald-500 opacity-[0.03] rotate-12 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.selfCorrection}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-6 w-full font-sans">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-aetox-surface-low" />
                  <motion.circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="251" initial={{ strokeDashoffset: 251 }} animate={{ strokeDashoffset: 145 }} transition={{ duration: 1.5 }} className="text-red-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-red-500">42%</span>
                  <span className="text-[7px] font-bold text-aetox-text-muted uppercase tracking-widest">{dict.confidence}</span>
                </div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[9px] font-bold text-red-500 uppercase tracking-widest">{dict.lowPrecision}</div>
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-8 w-full font-sans">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center opacity-50"><Database className="w-8 h-8 text-aetox-text-muted" /></div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-aetox-accent"><RefreshCw className="w-10 h-10" /></motion.div>
                <div className="w-16 h-16 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/30 flex items-center justify-center"><Search className="w-8 h-8 text-aetox-accent" /></div>
              </div>
              <div className="w-full max-w-[240px] space-y-3">
                <div className="flex justify-between text-[8px] font-bold text-aetox-accent/70 uppercase tracking-widest">
                  <span>{dict.requerying}</span>
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>SYNCING...</motion.span>
                </div>
                <div className="h-2 w-full bg-aetox-surface-low rounded-full overflow-hidden border border-aetox-border">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-aetox-accent" />
                </div>
              </div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="optimized" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-6 w-full font-sans">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-aetox-surface-low" />
                  <motion.circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="351" initial={{ strokeDashoffset: 351 }} animate={{ strokeDashoffset: 14 }} transition={{ duration: 1.5 }} className="text-emerald-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="text-3xl font-bold text-emerald-500">96%</motion.span>
                  <span className="text-[8px] font-bold text-aetox-text-muted uppercase tracking-widest">{dict.confidence}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />)}
              </div>
              <div className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{dict.optimized}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-6 h-[100px] rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight uppercase">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`sc-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent" />
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
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Zap className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] -rotate-12 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest font-sans">{labels.strategicGen}</span>
        </div>
        <div className="text-[9px] font-mono text-aetox-text-muted bg-aetox-surface-low px-2 py-0.5 rounded border border-aetox-border">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-4 font-sans">
              {[labels.planner, labels.analyst].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-aetox-surface-low/50 backdrop-blur border border-aetox-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center text-aetox-accent">
                      <Bot size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-aetox-text-main uppercase tracking-widest">{r}</div>
                      <div className="flex gap-1">{[1,2,3,4,5].map(b => <motion.div key={b} animate={{ height: [4, 10, 4] }} transition={{ duration: 0.5 + b*0.1, repeat: Infinity }} className="w-1 bg-aetox-accent/40 rounded-full" />)}</div>
                    </div>
                  </div>
                  <div className="text-[8px] font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase">Active</div>
                </div>
              ))}
            </motion.div>
          )}
          {phase === 1 && (
            <motion.div key="synthesis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-6 font-sans">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border border-dashed border-aetox-accent/30" />
                <Cpu className="absolute w-8 h-8 text-aetox-accent" />
              </div>
              <div className="space-y-3"><div className="w-24 h-2 bg-aetox-accent/30 rounded-full" /><div className="w-32 h-2 bg-aetox-surface-low rounded-full" /></div>
            </motion.div>
          )}
          {phase === 2 && (
            <motion.div key="output" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full p-8 rounded-3xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border font-mono text-[11px] md:text-sm text-aetox-text-soft leading-relaxed shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity"><Zap className="w-6 h-6 text-aetox-accent" /></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-aetox-accent animate-ping" />
                <span className="text-aetox-accent font-bold uppercase tracking-widest text-[10px]">{dict.suggestion}</span>
              </div>
              <p className="text-aetox-text-main font-medium italic">&quot;{dict.liquidity}&quot;</p>
              <div className="mt-4 pt-4 border-t border-aetox-border flex justify-between items-center text-[9px] uppercase tracking-tighter text-aetox-text-muted">
                <span>Enterprise Strategy Engine</span>
                <span className="text-emerald-500">READY</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 p-6 h-[100px] rounded-2xl bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 left-0 w-1 h-full bg-aetox-accent opacity-30" />
        <AnimatePresence mode="wait">
          <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1 font-sans">
            <div className="text-[10px] font-bold text-aetox-text-main tracking-tight uppercase">{phaseData[phase].title}</div>
            <div className="text-[9px] text-aetox-text-soft leading-relaxed font-medium">{phaseData[phase].desc}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-0.5 w-full bg-aetox-surface-low rounded-full overflow-hidden">
          <motion.div key={`sg-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-aetox-accent" />
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
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Big Background Icon */}
      <RefreshCw className="absolute -bottom-12 -right-12 w-64 h-64 text-emerald-500 opacity-[0.03] rotate-45 pointer-events-none" />

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-aetox-accent" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">{labels.streamInterface}</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">Live SSE</div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="p-8 rounded-3xl bg-aetox-surface-low/60 backdrop-blur-lg border border-aetox-border relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Zap className="w-8 h-8 text-aetox-accent" />
          </div>
          <div className="relative z-10 font-mono text-[10px] md:text-xs leading-relaxed">
            <span className="text-aetox-accent mr-2 font-bold tracking-tighter"># inference_output_{">"}</span>
            <span className="text-aetox-text-main drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{streamText}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }} 
              className="inline-block w-2 h-4 bg-aetox-accent ml-1 align-middle" 
            />
          </div>
        </div>
      </div>
      <div className="mt-6 p-6 h-[100px] flex items-center justify-between px-6 bg-aetox-surface-lowest/40 backdrop-blur-xl border border-aetox-border rounded-2xl font-sans">
        <div className="flex gap-8">
          <div className="space-y-1.5">
            <div className="text-[8px] text-aetox-text-muted font-bold uppercase tracking-widest">{dict.latency}</div>
            <div className="text-xs font-mono text-aetox-text-main font-bold">42ms</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-[8px] text-aetox-text-muted font-bold uppercase tracking-widest">{dict.throughput}</div>
            <div className="text-xs font-mono text-aetox-text-main font-bold">124 t/s</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20">
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">{dict.synchronized}</span>
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
    <div className="space-y-8 font-sans">
        
        <ServiceVisualCard minHeight="h-[540px] lg:h-[620px]" className="relative z-10 overflow-hidden !p-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div 
              key={activeStep} 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 1.02 }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full h-full flex flex-col"
            >
              {/* Visual Area with Big Icon Background */}
              <div className="flex-1 relative overflow-hidden p-8 lg:p-10">
                {visuals[activeStep % visuals.length]}
              </div>

              {/* Integrated Info Panel - Refined Spacing */}
              <div className="relative mt-auto">
                <div className="absolute inset-0 bg-aetox-surface-lowest/90 backdrop-blur-xl border-t border-aetox-border" />
                <div className="relative p-10 lg:p-12 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-[10px] font-bold text-aetox-accent uppercase tracking-[0.2em]">
                      Step 0{activeStep + 1}
                    </div>
                    <div className="h-px flex-1 bg-aetox-border/50" />
                  </div>
                  
                  <div className="space-y-3">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-2xl lg:text-3xl font-bold text-aetox-text-main tracking-tight leading-tight"
                    >
                      {steps[activeStep]?.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.1 }}
                      className="text-aetox-text-soft text-sm md:text-base leading-relaxed max-w-[90%] font-medium"
                    >
                      {steps[activeStep]?.desc}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ServiceVisualCard>

      <div className="relative flex items-center justify-between h-14 px-2 font-sans">
        <div className="flex gap-2">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-10 bg-aetox-accent shadow-aetox-glow' : 'w-3 bg-aetox-surface-low hover:bg-aetox-surface-high'}`} 
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} 
            className="w-12 h-12 rounded-full border border-aetox-border bg-aetox-surface-low/50 backdrop-blur-xl flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent/10 hover:border-aetox-accent/30 transition-all active:scale-90 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-12 h-12 rounded-full border border-aetox-border bg-aetox-surface-low/50 backdrop-blur-xl flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent/10 hover:border-aetox-accent/30 transition-all active:scale-90 group"
          >
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
