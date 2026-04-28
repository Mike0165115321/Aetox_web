'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function RealTimeStreamVisual({ dict, labels }: { dict: any; labels: any }) {
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
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{labels.streamInterface}</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">Live SSE</div>
      </div>
      <div className="flex-1 flex items-center justify-center h-[220px]">
        <div className="w-full p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-[11px] leading-relaxed text-gray-300 relative overflow-hidden group h-full shadow-inner">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-[0.03]" />
          <div className="absolute top-0 right-0 p-3 opacity-20"><Zap className="w-5 h-5 text-cyber-blue shadow-cyber-glow" /></div>
          <div className="relative z-10">
            <span className="text-cyber-blue mr-2 tracking-tighter opacity-70 font-black"># inference_output_{">"}</span>
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{streamText}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }} 
              className="inline-block w-2 h-4 bg-cyber-blue ml-1 align-middle shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
            />
          </div>
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
