'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Users, Zap, AlertTriangle, TrendingUp } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';

export default function AutomationShowcase({ steps, dict }: { steps: any[], dict: any }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // Slide 0: Live Automation Pipeline
    (
      <div key="0" className="relative h-full flex flex-col items-center justify-center p-5 gap-2 overflow-hidden">
        <motion.div animate={{scale:[1,1.5,1],opacity:[0.03,0.08,0.03]}} transition={{duration:4,repeat:Infinity}} className="absolute w-72 h-72 rounded-full bg-aetox-accent"/>
        <div className="relative z-10 w-full max-w-[240px] space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">Live Automation Pipeline</span></div>
          <div className="flex gap-1.5">{['Excel','Email','API','Form'].map((s,i)=>(
            <motion.div key={s} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}} className="flex-1 py-2 rounded-lg bg-aetox-surface-lowest border border-aetox-border flex flex-col items-center gap-1">
              <FileText className="w-3 h-3 text-aetox-text-soft"/><span className="text-[5px] font-black text-aetox-text-muted uppercase">{s}</span>
            </motion.div>))}</div>
          <div className="flex justify-around">{[0,1,2,3].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.15}} className="w-px h-4 bg-aetox-accent/50"/>))}</div>
          <motion.div animate={{boxShadow:['0 0 0px rgba(10,132,255,0)','0 0 20px rgba(10,132,255,0.4)','0 0 0px rgba(10,132,255,0)']}} transition={{duration:2,repeat:Infinity}} className="px-4 py-3 rounded-xl bg-aetox-accent/15 border border-aetox-accent/40 flex items-center gap-3">
            <motion.div animate={{rotate:360}} transition={{duration:2,repeat:Infinity,ease:'linear'}} className="w-4 h-4 rounded-full border-2 border-aetox-accent/30 border-t-aetox-accent shrink-0"/>
            <div className="flex-1"><div className="text-[8px] font-black text-aetox-accent uppercase">Bot Engine</div><motion.div className="h-px bg-aetox-accent mt-1 rounded" animate={{width:['5%','95%','5%']}} transition={{duration:1.5,repeat:Infinity}}/></div>
            <motion.span animate={{opacity:[0.5,1,0.5]}} transition={{duration:1,repeat:Infinity}} className="text-[6px] font-black text-green-400 bg-green-400/10 border border-green-400/20 px-1.5 py-0.5 rounded-full uppercase">LIVE</motion.span>
          </motion.div>
          <div className="flex justify-around">{[0,1,2].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.2+0.4}} className="w-px h-4 bg-aetox-accent/50"/>))}</div>
          <div className="flex gap-1.5">{['Database','Report','Webhook'].map((d,i)=>(<motion.div key={d} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{delay:i*0.2}} className="flex-1 py-2 rounded-lg bg-aetox-accent/10 border border-aetox-accent/20 flex flex-col items-center gap-1"><CheckCircle2 className="w-3 h-3 text-aetox-accent"/><span className="text-[5px] font-black text-aetox-accent uppercase">{d}</span></motion.div>))}</div>
          <div className="flex justify-between text-[7px] font-mono border-t border-aetox-border pt-1.5"><span className="text-aetox-text-muted">{dict.labels.processedToday}</span><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-aetox-accent font-black">98,240 {dict.labels.tasks}</motion.span></div>
        </div>
      </div>
    ),
    // Slide 1: Before/After Queue Bottleneck
    (
      <div key="1" className="relative h-full flex flex-col items-center justify-center p-5 gap-2">
        <div className="w-full max-w-xs space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">Before vs After</span></div>
          <div className="p-3 rounded-xl bg-aetox-surface-lowest border border-aetox-border space-y-1.5">
            <div className="text-[6px] font-black text-rose-400/70 uppercase tracking-widest mb-1">Before — Manual Queue</div>
            {['Invoicing','Stock Check','Reporting'].map(t=>(<div key={t} className="flex items-center gap-2 p-2 rounded-lg bg-aetox-bg border border-aetox-border"><div className="w-1.5 h-1.5 rounded-full bg-aetox-text-muted"/><span className="text-[7px] text-aetox-text-soft flex-1">{t}</span><span className="text-[6px] font-black text-rose-400 bg-rose-400/10 border border-rose-400/20 px-1.5 py-0.5 rounded-full">DELAYED</span></div>))}
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-aetox-border"/><motion.div animate={{scale:[0.95,1.05,0.95]}} transition={{duration:1.5,repeat:Infinity}} className="text-[7px] font-black text-aetox-accent bg-aetox-accent/10 border border-aetox-accent/20 px-3 py-0.5 rounded-full uppercase">Automation</motion.div><div className="flex-1 h-px bg-aetox-border"/></div>
          <div className="p-3 rounded-xl bg-aetox-accent/[0.05] border border-aetox-accent/15 space-y-1.5">
            <div className="text-[6px] font-black text-aetox-accent/70 uppercase tracking-widest mb-1">After — Smart Queue</div>
            {[{t:'Invoice Batch',tag:dict.visuals.pillar1.labels.urgent,a:true,idx:0},{t:'Stock Sync',tag:dict.visuals.pillar1.labels.high,a:false,idx:1},{t:'Report',tag:'QUEUED',a:false,idx:2}].map(item=>(<motion.div key={item.t} animate={item.a?{x:[0,4,0]}:{}} transition={{duration:2,repeat:Infinity}} className={`flex items-center gap-2 p-2 rounded-lg border ${item.a?'bg-aetox-accent/10 border-aetox-accent/30':item.idx===1?'bg-amber-400/5 border-amber-400/15':'bg-aetox-surface border-aetox-border'}`}><motion.div animate={item.a?{opacity:[0.5,1,0.5]}:{}} transition={{duration:1,repeat:Infinity}} className={`w-1.5 h-1.5 rounded-full ${item.a?'bg-aetox-accent':item.idx===1?'bg-amber-400':'bg-aetox-text-muted'}`}/><span className={`text-[7px] flex-1 ${item.a?'text-aetox-text-main font-bold':item.idx===1?'text-amber-300':'text-aetox-text-soft'}`}>{item.t}</span><span className={`text-[6px] font-black px-1.5 py-0.5 rounded-full border ${item.a?'text-aetox-accent bg-aetox-accent/10 border-aetox-accent/20':item.idx===1?'text-amber-400 bg-amber-400/10 border-amber-400/20':'text-aetox-text-muted bg-aetox-surface-lowest border-aetox-border'}`}>{item.tag}</span></motion.div>))}
          </div>
        </div>
      </div>
    ),
    // Slide 2: Speed Race — Human vs Bot
    (
      <div key="2" className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">Speed Comparison</span></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-aetox-surface-lowest border border-aetox-border space-y-2 text-center">
              <Users className="w-5 h-5 text-aetox-text-muted mx-auto"/>
              <div className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">Human</div>
              <div className="text-3xl font-display font-black text-aetox-text-muted">2<span className="text-[8px] ml-0.5 opacity-50">/hr</span></div>
              <div className="h-1.5 bg-aetox-border rounded-full overflow-hidden"><motion.div animate={{width:['0%','10%','0%']}} transition={{duration:3,repeat:Infinity}} className="h-full bg-aetox-text-soft rounded-full"/></div>
              <div className="text-[6px] text-aetox-text-muted font-mono tracking-tighter">~240/day</div>
            </div>
            <div className="p-3 rounded-xl bg-aetox-accent/10 border border-aetox-accent/30 space-y-2 text-center shadow-aetox-glow/10">
              <Zap className="w-5 h-5 text-aetox-accent mx-auto"/>
              <div className="text-[7px] font-black text-aetox-accent uppercase tracking-widest">Bot</div>
              <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-3xl font-display font-black text-aetox-text-main">612<span className="text-[8px] ml-0.5 text-aetox-accent">/hr</span></motion.div>
              <div className="h-1.5 bg-aetox-accent/20 rounded-full overflow-hidden"><motion.div animate={{width:['0%','100%','0%']}} transition={{duration:1,repeat:Infinity}} className="h-full bg-aetox-accent shadow-aetox-glow"/></div>
              <div className="text-[6px] text-aetox-accent font-mono font-bold tracking-tighter">98,240/day</div>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-aetox-surface border border-aetox-border flex items-center justify-between">
            <span className="text-[8px] text-aetox-text-soft uppercase font-bold tracking-widest">{dict.benchmark.savedHours}</span>
            <motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-xl font-display font-black text-aetox-accent">340h<span className="text-[9px] text-aetox-text-muted ml-1">/{dict.labels.monthLabel}</span></motion.span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold"><TrendingUp className="w-3.5 h-3.5 text-aetox-accent"/><span className="text-[8px] text-aetox-text-muted uppercase tracking-widest">{dict.benchmark.speedX}</span><span className="text-[8px] font-black text-aetox-accent uppercase">300 {dict.unitTimes}</span></div>
        </div>
      </div>
    ),
    // Slide 3: Zero Error Engine
    (
      <div key="3" className="relative h-full flex flex-col items-center justify-center p-6 gap-3">
        <div className="w-full max-w-xs space-y-3">
          <div className="text-center"><span className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">Error Rate Analysis</span></div>
          <div className="p-4 rounded-xl bg-aetox-surface-lowest border border-aetox-border space-y-2">
            <div className="flex items-center gap-2"><AlertTriangle className="w-3.5 h-3.5 text-rose-400"/><span className="text-[7px] font-black text-aetox-text-soft uppercase tracking-widest">Manual Process</span></div>
            <div className="text-4xl font-display font-black text-rose-400">23<span className="text-lg">%</span><span className="text-[9px] text-aetox-text-muted ml-2 uppercase font-bold">error rate</span></div>
            <div className="h-2 bg-aetox-border rounded-full overflow-hidden"><div className="h-full w-[23%] bg-rose-500/60 rounded-full"/></div>
            <div className="text-[6px] text-aetox-text-muted font-mono uppercase tracking-tighter">Manual task average error rate</div>
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-aetox-border"/><span className="text-[6px] font-black text-aetox-text-muted px-2 uppercase tracking-widest">vs Bot System</span><div className="flex-1 h-px bg-aetox-border"/></div>
          <div className="p-4 rounded-xl bg-aetox-accent/[0.06] border border-aetox-accent/20 space-y-2">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400"/><span className="text-[7px] font-black text-aetox-accent uppercase tracking-widest">Bot Validation</span></div>
            <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1.5,repeat:Infinity}} className="text-4xl font-display font-black text-emerald-400">0.003<span className="text-lg">%</span></motion.div>
            <div className="h-2 bg-aetox-accent/10 rounded-full overflow-hidden"><div className="h-full w-[2px] bg-emerald-500 rounded-full"/></div>
            <div className="text-[6px] text-emerald-400/70 font-mono uppercase tracking-tighter">Bit-by-bit validation engine</div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-[7px] font-bold uppercase tracking-widest"><span className="text-aetox-text-soft">Error cost reduction</span><span className="text-emerald-400 font-black">-99.99%</span></div>
        </div>
      </div>
    ),
    // Slide 4: 24/7 Coverage
    (
      <div key="4" className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-aetox-text-muted uppercase tracking-widest">24-Hour Coverage</span></div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px] font-bold uppercase tracking-widest"><div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-aetox-text-soft"/><span className="text-aetox-text-soft">Human</span></div><span className="text-amber-400/70 font-mono">8 / 24 hrs</span></div>
              <div className="h-5 bg-aetox-surface-lowest rounded-lg overflow-hidden border border-aetox-border flex">{Array.from({length:24},(_,h)=>(<div key={h} className={`flex-1 h-full border-r border-aetox-border ${h>=9&&h<18?'bg-amber-400/40':'bg-transparent'}`}/>))}</div>
              <div className="flex justify-between text-[5px] text-aetox-text-muted font-mono"><span>00:00</span><span>09:00</span><span>18:00</span><span>24:00</span></div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px] font-black uppercase tracking-widest"><div className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-aetox-accent"/><span className="text-aetox-accent">Bot System</span></div><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:1,repeat:Infinity}} className="text-emerald-400 font-mono">24 / 24 hrs</motion.span></div>
              <div className="h-5 rounded-lg overflow-hidden border border-aetox-accent/20 flex">{Array.from({length:24},(_,h)=>(<motion.div key={h} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:h*0.08}} className="flex-1 h-full bg-aetox-accent/50 border-r border-aetox-accent/20"/>))}</div>
              <div className="flex justify-between text-[5px] text-aetox-text-muted font-mono"><span>00:00</span><span>12:00</span><span>24:00</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-aetox-surface-lowest border border-aetox-border text-center"><div className="text-[6px] text-aetox-text-muted font-bold uppercase mb-0.5 tracking-tighter">Hours Missed</div><div className="text-lg font-display font-black text-amber-400">14h<span className="text-[7px] opacity-50 ml-0.5">/day</span></div></div>
            <div className="p-2.5 rounded-xl bg-aetox-accent/10 border border-aetox-accent/20 text-center shadow-aetox-glow/5"><div className="text-[6px] text-aetox-accent font-black uppercase mb-0.5 tracking-tighter">Bot Uptime</div><motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-lg font-display font-black text-aetox-text-main uppercase">100%</motion.div></div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-aetox-surface border border-aetox-border text-center text-fluid-sm font-bold uppercase tracking-widest"><span className="text-aetox-text-muted">{dict.benchmark.savedHours} </span><span className="font-black text-aetox-accent">340 {dict.unitTime}</span><span className="text-aetox-text-muted"> /{dict.labels.monthLabel}</span></div>
        </div>
      </div>
    ),
  ];

  return (
    <div className="space-y-6">
      <ServiceVisualCard minHeight="h-[520px] lg:h-[600px]" className="p-0 overflow-hidden aetox-card">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.3 }} 
            className="absolute inset-0 flex flex-col"
          >
            {/* Visual Area */}
            <div className="flex-[1.2] bg-gradient-to-b from-transparent to-aetox-bg/40 relative overflow-hidden min-h-0">
              {visuals[activeStep]}
            </div>
            
            {/* Text Content Area */}
            <div className="p-8 lg:p-10 bg-aetox-surface/95 backdrop-blur-2xl border-t border-aetox-border space-y-4 shrink-0">
              <div className="space-y-1">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-aetox-accent text-fluid-label font-black uppercase tracking-[0.25em]"
                >
                  {steps[activeStep].subtitle}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-fluid-h3 font-display text-aetox-text-main leading-tight uppercase"
                >
                  {steps[activeStep].title}
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-aetox-text-soft text-fluid-p leading-relaxed line-clamp-3"
              >
                {steps[activeStep].desc}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </ServiceVisualCard>

      {/* Navigation Layer */}
      <div className="relative flex items-center justify-between h-16 mt-4">
        {/* Indicators */}
        <div className="flex gap-2.5">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1.5 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-12 bg-aetox-accent shadow-aetox-glow' : 'w-4 bg-aetox-border hover:bg-aetox-border/50'}`} 
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} 
            className="w-12 h-12 rounded-full border border-aetox-border flex items-center justify-center text-aetox-text-main hover:bg-aetox-surface hover:border-aetox-accent/30 transition-all active:scale-75 hover:scale-105 font-bold"
          >
            ←
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-12 h-12 rounded-full border border-aetox-accent/20 bg-aetox-surface flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent/20 hover:border-aetox-accent/50 transition-all shadow-aetox-glow/10 active:scale-75 hover:scale-105 font-bold"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
