'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Users, Zap, AlertTriangle, TrendingUp, Bot, ArrowLeft } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

export default function AutomationShowcase({ steps = [], dict = {} }: { steps: any[], dict: any }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // Slide 0: Live Automation Pipeline
    (
      <div key="0" className="flex flex-col h-full font-sans relative overflow-hidden">
        {/* Big Background Icon */}
        <Zap className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
            <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Pipeline Live</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
          <div className="w-full max-w-[280px] space-y-4">
            <div className="flex gap-2">
              {['Excel','Email','API'].map((s,i)=>(
                <motion.div key={s} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}} className="flex-1 py-3 rounded-xl bg-aetox-surface-low border border-aetox-border flex flex-col items-center gap-1 backdrop-blur-md">
                  <FileText className="w-4 h-4 text-aetox-text-soft"/><span className="text-[7px] font-black text-aetox-text-muted uppercase">{s}</span>
                </motion.div>))}
            </div>
            <div className="flex justify-center">
               <motion.div animate={{ height: [20, 40, 20], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px bg-aetox-accent" />
            </div>
            <div className="p-4 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/30 flex items-center gap-4 shadow-aetox-glow/5">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Zap className="w-6 h-6 text-aetox-accent" />
               </motion.div>
               <div className="flex-1 space-y-1">
                  <div className="text-[10px] font-bold text-aetox-text-main uppercase">Automation Engine</div>
                  <div className="h-1 bg-aetox-accent/20 rounded-full overflow-hidden">
                     <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1, repeat: Infinity }} className="h-full w-1/2 bg-aetox-accent shadow-aetox-glow" />
                  </div>
               </div>
            </div>
          </div>
          <p className="mt-8 text-[10px] text-aetox-text-muted font-bold uppercase tracking-[0.2em]">{dict?.labels?.processedToday || 'Processed'}: 98,240</p>
        </div>
      </div>
    ),
    // Slide 1: Before/After Queue
    (
      <div key="1" className="flex flex-col h-full font-sans relative overflow-hidden">
        {/* Big Background Icon */}
        <TrendingUp className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] -rotate-12 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
            <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Efficiency Gap</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-6">
           <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
              <div className="space-y-3 opacity-50 grayscale">
                 <div className="text-[8px] font-bold text-aetox-text-muted uppercase text-center mb-2">Manual</div>
                 {[1,2,3].map(i => (
                   <div key={i} className="h-10 rounded-xl bg-aetox-surface-low border border-aetox-border" />
                 ))}
              </div>
              <div className="space-y-3">
                 <div className="text-[8px] font-bold text-aetox-accent uppercase text-center mb-2">Automated</div>
                 {[1,2,3].map(i => (
                   <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} className="h-10 rounded-xl bg-aetox-accent/10 border border-aetox-accent/30 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-aetox-accent" />
                   </motion.div>
                 ))}
              </div>
           </div>
           <div className="mt-10 px-6 py-3 rounded-2xl bg-aetox-surface-high border border-aetox-border">
              <span className="text-2xl font-black text-aetox-text-main">+300%</span>
              <span className="ml-2 text-[10px] font-bold text-aetox-text-soft uppercase tracking-widest">Performance Boost</span>
           </div>
        </div>
      </div>
    ),
    // Slide 2: Speed Race
    (
      <div key="2" className="flex flex-col h-full font-sans relative overflow-hidden">
        {/* Big Background Icon */}
        <Zap className="absolute -bottom-12 -right-12 w-64 h-64 text-amber-500 opacity-[0.03] rotate-12 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Speed Benchmark</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-6">
           <div className="w-full max-w-xs space-y-6">
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-bold text-aetox-text-muted uppercase"><span>Human</span><span>2 / hr</span></div>
                 <div className="h-2 bg-aetox-surface-low rounded-full overflow-hidden border border-aetox-border">
                    <div className="h-full w-[5%] bg-aetox-text-muted" />
                 </div>
              </div>
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-bold text-aetox-accent uppercase"><span>Aetox Bot</span><span>612 / hr</span></div>
                 <div className="h-3 bg-aetox-accent/10 rounded-full overflow-hidden border border-aetox-accent/30">
                    <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-aetox-accent shadow-aetox-glow" />
                 </div>
              </div>
           </div>
           <div className="mt-12 text-center">
              <p className="text-[10px] font-bold text-aetox-text-muted uppercase tracking-[0.3em] mb-2">{dict?.benchmark?.savedHours || 'Time Saved'}</p>
              <h4 className="text-5xl font-black text-aetox-text-main tracking-tighter">340<span className="text-xl text-aetox-accent ml-1">hrs</span></h4>
           </div>
        </div>
      </div>
    ),
    // Slide 3: Error Rate
    (
      <div key="3" className="flex flex-col h-full font-sans relative overflow-hidden">
        {/* Big Background Icon */}
        <AlertTriangle className="absolute -bottom-12 -right-12 w-64 h-64 text-rose-500 opacity-[0.03] -rotate-12 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Quality Control</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-6">
           <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-dashed border-aetox-border rounded-full" />
              <div className="text-center space-y-1">
                 <div className="text-4xl font-black text-emerald-400">0.003%</div>
                 <div className="text-[8px] font-bold text-aetox-text-muted uppercase tracking-widest">Error Rate</div>
              </div>
              {[0, 120, 240].map(deg => (
                <motion.div key={deg} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: deg/120 }} className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981]" style={{ transform: `rotate(${deg}deg) translateY(-80px)` }} />
              ))}
           </div>
           <div className="mt-10 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Near-Zero Error Engine</span>
           </div>
        </div>
      </div>
    ),
    // Slide 4: 24/7 Coverage
    (
      <div key="4" className="flex flex-col h-full font-sans relative overflow-hidden">
        {/* Big Background Icon */}
        <Bot className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
            <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Time Coverage</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-6">
           <div className="w-full max-w-xs space-y-8">
              <div className="space-y-3">
                 <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-aetox-text-soft uppercase">Human Shift</span><span className="text-xs font-bold text-aetox-text-muted">8/24h</span></div>
                 <div className="h-6 bg-aetox-surface-low border border-aetox-border rounded-lg flex overflow-hidden">
                    <div className="w-1/3 bg-amber-500/30 border-r border-aetox-border" />
                    <div className="w-2/3" />
                 </div>
              </div>
              <div className="space-y-3">
                 <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">Aetox 24/7 Bot</span><span className="text-xs font-bold text-emerald-400">24/24h</span></div>
                 <div className="h-8 bg-aetox-accent/10 border border-aetox-accent/30 rounded-lg flex overflow-hidden shadow-aetox-glow/5">
                    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="w-full bg-aetox-accent/40" />
                 </div>
              </div>
           </div>
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
            {/* Visual Area */}
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
