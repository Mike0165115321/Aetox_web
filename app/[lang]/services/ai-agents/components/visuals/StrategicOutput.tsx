'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu } from 'lucide-react';

export default function StrategicOutputVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{labels.strategicGen}</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-3">
              {[labels.planner, labels.analyst].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center text-cyber-blue shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      <Bot size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[9px] font-black text-white uppercase tracking-wider">{r}</div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(b => (
                          <motion.div key={b} animate={{ height: [2, 6, 2] }} transition={{ duration: 0.5 + b*0.1, repeat: Infinity }} className="w-0.5 bg-cyber-blue/40" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-[7px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 relative z-10">ACTIVE</div>
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
