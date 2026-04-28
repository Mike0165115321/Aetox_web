'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, RefreshCw, Search } from 'lucide-react';

export default function SelfCorrectionVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{labels.selfCorrection}</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
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
            <motion.div key="loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center opacity-50 relative">
                  <Database className="w-6 h-6" />
                </div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-cyber-blue relative">
                  <RefreshCw className="w-8 h-8" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-blue shadow-cyber-glow" />
                </motion.div>
                <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center shadow-cyber-glow relative">
                  <Search className="w-6 h-6 text-cyber-blue" />
                </div>
              </div>
              
              <div className="w-full max-w-[200px] space-y-2">
                <div className="flex justify-between items-center text-[7px] font-black text-cyber-blue/70 uppercase tracking-[0.2em]">
                  <span>{dict.requerying}</span>
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>SYNCING...</motion.span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  {[1, 2].map(i => (
                    <div key={i} className="flex justify-between items-center text-[6px] font-mono text-gray-600">
                      <span>LOG_FIX_ID_{4820 + i}</span>
                      <span className="text-emerald-500/60">REPAIRED</span>
                    </div>
                  ))}
                </div>
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
