'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Database, Shield, Zap, Laptop, Bot, ArrowLeft, Search, Cpu } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

export default function WebShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // 1: Modern Architecture
    (
        <div key="0" className="flex flex-col h-full font-sans relative overflow-hidden">
          {/* Big Background Icon */}
          <Globe className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
              <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Stack V14</span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
             <div className="w-full max-w-xs space-y-3">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="p-4 rounded-2xl bg-aetox-surface-low/50 border border-aetox-border flex items-center gap-4 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow" />
                   <span className="text-xs text-aetox-text-main font-bold uppercase tracking-wider">Next.js App Router</span>
                </motion.div>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-aetox-surface-low/50 border border-aetox-border flex items-center gap-4 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow" />
                   <span className="text-xs text-aetox-text-main font-bold uppercase tracking-wider">Tailwind + Framer</span>
                </motion.div>
             </div>
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="mt-12">
               <Globe className="w-16 h-16 text-aetox-accent opacity-20" />
             </motion.div>
          </div>
        </div>
    ),
    // 2: Data Architecture
    (
        <div key="1" className="flex flex-col h-full font-sans relative overflow-hidden">
          {/* Big Background Icon */}
          <Database className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] -rotate-12 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
              <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Data Core</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
             <div className="relative w-48 h-48 flex items-center justify-center">
                <Database className="w-20 h-20 text-aetox-accent absolute z-10" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-aetox-accent/20 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-6 border border-aetox-border rounded-full" />
                
                {[0, 90, 180, 270].map((deg, i) => (
                  <motion.div key={i} animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="absolute w-2.5 h-2.5 bg-aetox-accent rounded-full" style={{ transform: `rotate(${deg}deg) translateY(-40px)` }} />
                ))}
             </div>
             <div className="mt-10 px-5 py-2 rounded-full bg-aetox-accent/5 border border-aetox-accent/20">
                <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-[0.2em]">Scalable Schema</span>
             </div>
          </div>
        </div>
    ),
    // 3: Security & Compliance
    (
        <div key="2" className="flex flex-col h-full font-sans relative overflow-hidden">
          {/* Big Background Icon */}
          <Shield className="absolute -bottom-12 -right-12 w-64 h-64 text-emerald-500 opacity-[0.03] rotate-12 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Compliance</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
             <div className="relative">
                <Shield className="w-32 h-32 text-aetox-surface-low" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} className="p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl">
                      <Shield className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                </div>
             </div>
             <div className="mt-10 grid grid-cols-2 gap-4 w-full max-w-[180px]">
                <div className="h-1.5 bg-emerald-500/40 rounded-full" />
                <div className="h-1.5 bg-aetox-surface-low rounded-full" />
                <div className="h-1.5 bg-aetox-surface-low rounded-full" />
                <div className="h-1.5 bg-emerald-500/40 rounded-full" />
             </div>
             <p className="text-[10px] text-aetox-text-muted font-bold uppercase mt-6 tracking-widest font-sans">End-to-End Encryption</p>
          </div>
        </div>
    ),
    // 4: Performance Optimization
    (
        <div key="3" className="flex flex-col h-full font-sans relative overflow-hidden">
          {/* Big Background Icon */}
          <Zap className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] -rotate-12 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
              <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Vitals</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
             <div className="flex gap-4 items-end h-24">
                {[80, 100, 95, 98].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-10 bg-aetox-accent/10 border-t-2 border-aetox-accent rounded-t-xl" />
                ))}
             </div>
             <div className="mt-8 text-6xl font-bold text-aetox-text-main tracking-tighter">99<span className="text-2xl text-aetox-accent font-bold tracking-normal">%</span></div>
             <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Zero Latency</span>
             </div>
          </div>
        </div>
    ),
    // 5: AI Integration Ready
    (
        <div key="4" className="flex flex-col h-full font-sans relative overflow-hidden">
          {/* Big Background Icon */}
          <Bot className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
              <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Intelligence</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
             <div className="relative">
                <Laptop className="w-32 h-32 text-aetox-surface-low" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4], y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Bot className="w-14 h-14 text-aetox-accent" />
                </motion.div>
             </div>
             <div className="mt-10 flex gap-3">
                {[1, 2, 3].map(i => (
                  <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow" />
                ))}
             </div>
             <p className="text-[10px] text-aetox-text-muted font-bold uppercase mt-6 tracking-widest font-sans">AI API Gateway Ready</p>
          </div>
        </div>
    )
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
              {visuals[activeStep]}
            </div>
            
            {/* Integrated Info Panel */}
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

      <div className="relative flex items-center justify-between h-14 px-2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
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
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-12 h-12 rounded-full border border-aetox-border bg-aetox-surface-low/50 backdrop-blur-xl flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent/10 hover:border-aetox-accent/30 transition-all active:scale-90 group"
          >
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
