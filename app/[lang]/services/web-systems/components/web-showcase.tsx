'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Database, Shield, Layout, Zap, Laptop, Bot, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function WebShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // 1: Modern Architecture
    (
        <div key="0" className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="w-full max-w-xs space-y-2 z-10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-bold uppercase tracking-wider">Next.js 14 App Router</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-bold uppercase tracking-wider">Tailwind CSS + Framer Motion</span>
              </div>
           </div>
           <Globe className="mt-8 w-12 h-12 text-cyber-blue animate-spin-slow opacity-50" />
        </div>
    ),
    // 2: Data Architecture
    (
        <div key="1" className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative w-40 h-40 flex items-center justify-center">
              <Database className="w-16 h-16 text-cyber-blue absolute z-10" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-cyber-blue/30 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-white/5 rounded-full" />
              
              {/* Data Flow Nodes */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div key={i} animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="absolute w-2 h-2 bg-cyber-blue shadow-cyber-glow rounded-full" style={{ transform: `rotate(${deg}deg) translateY(-30px)` }} />
              ))}
           </div>
           <div className="mt-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/20">
              <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full animate-pulse shadow-cyber-glow" />
              <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-widest">Scalable Schema</span>
           </div>
        </div>
    ),
    // 3: Security & Compliance
    (
        <div key="2" className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <Shield className="w-24 h-24 text-white/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="p-3 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/30 backdrop-blur-md">
                    <CheckCircle2 className="w-10 h-10 text-cyber-blue shadow-cyber-glow" />
                </motion.div>
              </div>
           </div>
           <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-[200px]">
              <div className="h-1 bg-cyber-blue rounded-full shadow-cyber-glow" />
              <div className="h-1 bg-cyber-blue/20 rounded-full" />
              <div className="h-1 bg-cyber-blue/20 rounded-full" />
              <div className="h-1 bg-cyber-blue rounded-full shadow-cyber-glow" />
           </div>
           <p className="text-[10px] text-gray-500 font-bold uppercase mt-5 tracking-widest">End-to-End Encryption</p>
        </div>
    ),
    // 4: Performance Optimization
    (
        <div key="3" className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="flex gap-3 items-end h-20">
              {[80, 100, 95, 98].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-8 bg-cyber-blue/20 border-t-2 border-cyber-blue rounded-t-lg shadow-cyber-glow" />
              ))}
           </div>
           <div className="mt-6 text-5xl font-bold text-white tracking-tighter">99<span className="text-xl text-cyber-blue font-bold tracking-normal">%</span></div>
           <div className="mt-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Zero Latency</span>
           </div>
        </div>
    ),
    // 5: AI Integration Ready
    (
        <div key="4" className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <Laptop className="w-24 h-24 text-white/5" />
              <motion.div animate={{ opacity: [0.3, 1, 0.3], y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <Bot className="w-10 h-10 text-cyber-blue shadow-cyber-glow" />
              </motion.div>
           </div>
           <div className="mt-8 flex gap-2">
              {[1, 2, 3].map(i => (
                <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
              ))}
           </div>
           <p className="text-[10px] text-gray-500 font-bold uppercase mt-5 tracking-widest">API Endpoint Ready</p>
        </div>
    )
  ];

  return (
    <div className="space-y-4">
      <div className="glass-card rounded-[24px] border border-white/10 overflow-hidden relative h-[480px] lg:h-[540px] flex flex-col bg-black/40">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col">
            <div className="flex-[1.2] bg-gradient-to-b from-transparent to-black/40 relative overflow-hidden min-h-0">
              {visuals[activeStep]}
            </div>
            
            <div className="p-8 bg-ultra-dark/95 backdrop-blur-2xl border-t border-white/5 space-y-4 shrink-0">
              <div className="space-y-1">
                <span className="text-cyber-blue text-[10px] font-bold tracking-[0.1em] opacity-80">{steps[activeStep].subtitle}</span>
                <h3 className="text-2xl font-bold text-white leading-tight">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium">
                {steps[activeStep].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative flex items-center justify-between h-12">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1 transition-all duration-500 rounded-full ${activeStep === i ? 'w-10 bg-cyber-blue shadow-cyber-glow' : 'w-3 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyber-blue/30 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 rotate-0" />
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all shadow-deep-glow/10 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
