'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, FileText } from 'lucide-react';

export default function OrchestratorVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-widest">{labels.orchestration}</span>
        </div>
        <div className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[240px]">
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
            <motion.div key="parallel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex items-center justify-around relative">
              {/* Central Connection Beam */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px bg-cyber-blue/10">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-20 h-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
              </div>

              {[1,2,3].map((a) => (
                <div key={a} className="flex flex-col items-center gap-3 relative z-10">
                  <div className="relative group">
                    <motion.div 
                      animate={{ rotate: 360, borderColor: ['rgba(6,182,212,0.1)', 'rgba(16,185,129,0.4)', 'rgba(6,182,212,0.1)'] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} 
                      className="w-14 h-14 rounded-full border border-dashed flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-cyber-blue/5 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                    />
                    <Bot className="absolute inset-0 m-auto w-6 h-6 text-cyber-blue" />
                    
                    {/* Status Dot */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest">{labels.agent} 0{a}</div>
                    <motion.div 
                      animate={{ color: ['#9CA3AF', '#06B6D4', '#9CA3AF'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: a * 0.3 }}
                      className="text-[9px] font-mono font-black tabular-nums"
                    >
                      {(85 + a * 4).toFixed(1)}%
                    </motion.div>
                  </div>
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
