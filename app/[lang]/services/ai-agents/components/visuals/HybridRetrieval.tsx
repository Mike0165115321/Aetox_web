'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function HybridRetrievalVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{labels.hybridRetrieval}</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
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
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full px-4 py-3 rounded-xl bg-cyber-blue/10 border border-cyber-blue/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[8px] font-black text-cyber-blue uppercase tracking-widest">{dict.vector}</div>
                  <div className="text-[7px] font-mono text-emerald-400">INDEX_ACTIVE_99.2%</div>
                </div>

                <div className="flex gap-1.5 h-16 items-end">
                  {[60, 85, 45, 90, 70, 55, 80, 40, 65, 50].map((h, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ 
                        height: [`${h * 0.15}px`, `${h * 0.22}px`, `${h * 0.15}px`],
                        backgroundColor: i % 3 === 0 ? 'rgba(16,185,129,0.5)' : 'rgba(6,182,212,0.5)'
                      }} 
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} 
                      className="flex-1 rounded-sm shadow-cyber-glow/10" 
                    />
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
                    {item.skip ? labels.skip : labels.rank}
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
