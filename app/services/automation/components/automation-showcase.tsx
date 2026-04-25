'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Users, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

export default function AutomationShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    // Slide 0: Live Automation Pipeline
    (
      <div className="relative h-full flex flex-col items-center justify-center p-5 gap-2 overflow-hidden">
        <motion.div animate={{scale:[1,1.5,1],opacity:[0.03,0.08,0.03]}} transition={{duration:4,repeat:Infinity}} className="absolute w-72 h-72 rounded-full bg-deep-blue"/>
        <div className="relative z-10 w-full max-w-[240px] space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Live Automation Pipeline</span></div>
          <div className="flex gap-1.5">{['Excel','Email','API','Form'].map((s,i)=>(
            <motion.div key={s} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}} className="flex-1 py-2 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col items-center gap-1">
              <FileText className="w-3 h-3 text-gray-500"/><span className="text-[5px] font-black text-gray-600 uppercase">{s}</span>
            </motion.div>))}</div>
          <div className="flex justify-around">{[0,1,2,3].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.15}} className="w-px h-4 bg-deep-blue/50"/>))}</div>
          <motion.div animate={{boxShadow:['0 0 0px rgba(59,130,246,0)','0 0 20px rgba(59,130,246,0.4)','0 0 0px rgba(59,130,246,0)']}} transition={{duration:2,repeat:Infinity}} className="px-4 py-3 rounded-xl bg-deep-blue/15 border border-deep-blue/40 flex items-center gap-3">
            <motion.div animate={{rotate:360}} transition={{duration:2,repeat:Infinity,ease:'linear'}} className="w-4 h-4 rounded-full border-2 border-deep-blue/30 border-t-deep-blue shrink-0"/>
            <div className="flex-1"><div className="text-[8px] font-black text-deep-blue uppercase">Bot Engine</div><motion.div className="h-px bg-deep-blue mt-1 rounded" animate={{width:['5%','95%','5%']}} transition={{duration:1.5,repeat:Infinity}}/></div>
            <motion.span animate={{opacity:[0.5,1,0.5]}} transition={{duration:1,repeat:Infinity}} className="text-[6px] font-black text-green-400 bg-green-400/10 border border-green-400/20 px-1.5 py-0.5 rounded-full">LIVE</motion.span>
          </motion.div>
          <div className="flex justify-around">{[0,1,2].map(i=>(<motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.2+0.4}} className="w-px h-4 bg-deep-blue/50"/>))}</div>
          <div className="flex gap-1.5">{['Database','Report','Webhook'].map((d,i)=>(<motion.div key={d} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{delay:i*0.2}} className="flex-1 py-2 rounded-lg bg-deep-blue/10 border border-deep-blue/20 flex flex-col items-center gap-1"><CheckCircle2 className="w-3 h-3 text-deep-blue"/><span className="text-[5px] font-black text-deep-blue uppercase">{d}</span></motion.div>))}</div>
          <div className="flex justify-between text-[7px] font-mono border-t border-white/5 pt-1.5"><span className="text-gray-600">Processed today</span><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-deep-blue font-black">98,240 tasks</motion.span></div>
        </div>
      </div>
    ),
    // Slide 1: Before/After Queue Bottleneck
    (
      <div className="relative h-full flex flex-col items-center justify-center p-5 gap-2">
        <div className="w-full max-w-xs space-y-2">
          <div className="text-center mb-1"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Before vs After</span></div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <div className="text-[6px] font-black text-red-400/70 uppercase tracking-widest mb-1">Before — Manual Queue</div>
            {['คีย์ Invoice ทั้งหมด','ตรวจสอบ Stock','จัดทำ Report'].map(t=>(<div key={t} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5"><div className="w-1.5 h-1.5 rounded-full bg-gray-600"/><span className="text-[7px] text-gray-500 flex-1">{t}</span><span className="text-[6px] font-black text-red-400 bg-red-400/10 border border-red-400/20 px-1.5 py-0.5 rounded-full">DELAYED</span></div>))}
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-white/5"/><motion.div animate={{scale:[0.95,1.05,0.95]}} transition={{duration:1.5,repeat:Infinity}} className="text-[7px] font-black text-deep-blue bg-deep-blue/10 border border-deep-blue/20 px-3 py-0.5 rounded-full">Automation</motion.div><div className="flex-1 h-px bg-white/5"/></div>
          <div className="p-3 rounded-xl bg-deep-blue/[0.05] border border-deep-blue/15 space-y-1.5">
            <div className="text-[6px] font-black text-deep-blue/70 uppercase tracking-widest mb-1">After — Smart Queue</div>
            {[{t:'Invoice Batch',tag:'URGENT',a:true,idx:0},{t:'Stock Sync',tag:'HIGH',a:false,idx:1},{t:'Report',tag:'QUEUED',a:false,idx:2}].map(item=>(<motion.div key={item.t} animate={item.a?{x:[0,4,0]}:{}} transition={{duration:2,repeat:Infinity}} className={`flex items-center gap-2 p-2 rounded-lg border ${item.a?'bg-deep-blue/10 border-deep-blue/30':item.idx===1?'bg-amber-400/5 border-amber-400/15':'bg-white/[0.02] border-white/5'}`}><motion.div animate={item.a?{opacity:[0.5,1,0.5]}:{}} transition={{duration:1,repeat:Infinity}} className={`w-1.5 h-1.5 rounded-full ${item.a?'bg-deep-blue':item.idx===1?'bg-amber-400':'bg-gray-600'}`}/><span className={`text-[7px] flex-1 ${item.a?'text-white font-black':item.idx===1?'text-amber-300':'text-gray-500'}`}>{item.t}</span><span className={`text-[6px] font-black px-1.5 py-0.5 rounded-full border ${item.a?'text-deep-blue bg-deep-blue/10 border-deep-blue/20':item.idx===1?'text-amber-400 bg-amber-400/10 border-amber-400/20':'text-gray-500 bg-white/5 border-white/10'}`}>{item.tag}</span></motion.div>))}
          </div>
        </div>
      </div>
    ),
    // Slide 2: Speed Race — Human vs Bot
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Speed Comparison</span></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-center">
              <Users className="w-5 h-5 text-gray-500 mx-auto"/>
              <div className="text-[7px] font-black text-gray-400 uppercase">Human</div>
              <div className="text-3xl font-black text-gray-400">2<span className="text-[8px] ml-0.5 text-gray-600">/hr</span></div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><motion.div animate={{width:['0%','10%','0%']}} transition={{duration:3,repeat:Infinity}} className="h-full bg-gray-600 rounded-full"/></div>
              <div className="text-[6px] text-gray-600 font-mono">~240/day</div>
            </div>
            <div className="p-3 rounded-xl bg-deep-blue/10 border border-deep-blue/30 space-y-2 text-center shadow-deep-glow/20">
              <Zap className="w-5 h-5 text-deep-blue mx-auto"/>
              <div className="text-[7px] font-black text-deep-blue uppercase">Bot</div>
              <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-3xl font-black text-white">612<span className="text-[8px] ml-0.5 text-deep-blue">/hr</span></motion.div>
              <div className="h-1.5 bg-deep-blue/20 rounded-full overflow-hidden"><motion.div animate={{width:['0%','100%','0%']}} transition={{duration:1,repeat:Infinity}} className="h-full bg-deep-blue rounded-full shadow-deep-glow"/></div>
              <div className="text-[6px] text-deep-blue font-mono">98,240/day</div>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-deep-blue/5 border border-deep-blue/20 flex items-center justify-between">
            <span className="text-[8px] text-gray-400">ประหยัดเวลา</span>
            <motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity}} className="text-xl font-black text-deep-blue">340h<span className="text-[9px] text-gray-500 ml-1">/เดือน</span></motion.span>
          </div>
          <div className="flex items-center justify-center gap-2"><TrendingUp className="w-3.5 h-3.5 text-deep-blue"/><span className="text-[8px] text-gray-400">เร็วกว่ามนุษย์</span><span className="text-[8px] font-black text-deep-blue">300 เท่า</span></div>
        </div>
      </div>
    ),
    // Slide 3: Zero Error Engine
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-3">
        <div className="w-full max-w-xs space-y-3">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Error Rate Analysis</span></div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
            <div className="flex items-center gap-2"><AlertTriangle className="w-3.5 h-3.5 text-red-400"/><span className="text-[7px] font-black text-gray-400 uppercase">Manual Process</span></div>
            <div className="text-4xl font-black text-red-400">23<span className="text-lg">%</span><span className="text-[9px] text-gray-600 ml-2">error rate</span></div>
            <div className="h-2 bg-white/5 rounded-full"><div className="h-full w-[23%] bg-red-500/60 rounded-full"/></div>
            <div className="text-[6px] text-gray-600 font-mono">ค่าเฉลี่ยงาน Manual ทั่วไป</div>
          </div>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-white/5"/><span className="text-[6px] font-black text-gray-600 px-2 uppercase">vs Bot System</span><div className="flex-1 h-px bg-white/5"/></div>
          <div className="p-4 rounded-xl bg-deep-blue/[0.06] border border-deep-blue/20 space-y-2">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400"/><span className="text-[7px] font-black text-deep-blue uppercase">Bot Validation</span></div>
            <motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1.5,repeat:Infinity}} className="text-4xl font-black text-green-400">0.003<span className="text-lg">%</span></motion.div>
            <div className="h-2 bg-deep-blue/10 rounded-full"><div className="h-full w-[2px] bg-green-500 rounded-full"/></div>
            <div className="text-[6px] text-green-400/70 font-mono">Bit-by-bit validation engine</div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-green-500/5 border border-green-500/15 text-[7px]"><span className="text-gray-500">ลดต้นทุนซ่อมความผิดพลาด</span><span className="text-green-400 font-black">-99.99%</span></div>
        </div>
      </div>
    ),
    // Slide 4: 24/7 Coverage
    (
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-full max-w-xs space-y-4">
          <div className="text-center"><span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">24-Hour Coverage</span></div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px]"><div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-gray-500"/><span className="text-gray-400 font-black">Human</span></div><span className="text-amber-400/70 font-mono">8 / 24 hrs</span></div>
              <div className="h-5 bg-white/5 rounded-lg overflow-hidden flex">{Array.from({length:24},(_,h)=>(<div key={h} className={`flex-1 h-full border-r border-white/5 ${h>=9&&h<18?'bg-amber-400/40':'bg-white/[0.02]'}`}/>))}</div>
              <div className="flex justify-between text-[5px] text-gray-600 font-mono"><span>00:00</span><span>09:00</span><span>18:00</span><span>24:00</span></div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[7px]"><div className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-deep-blue"/><span className="text-deep-blue font-black">Bot System</span></div><motion.span animate={{opacity:[0.7,1,0.7]}} transition={{duration:1,repeat:Infinity}} className="text-green-400 font-mono font-black">24 / 24 hrs</motion.span></div>
              <div className="h-5 rounded-lg overflow-hidden flex">{Array.from({length:24},(_,h)=>(<motion.div key={h} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:h*0.08}} className="flex-1 h-full bg-deep-blue/50 border-r border-deep-blue/20"/>))}</div>
              <div className="flex justify-between text-[5px] text-gray-600 font-mono"><span>00:00</span><span>12:00</span><span>24:00</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center"><div className="text-[6px] text-gray-600 uppercase mb-0.5">Hours Missed</div><div className="text-lg font-black text-amber-400">14h<span className="text-[7px] text-gray-600 ml-0.5">/day</span></div></div>
            <div className="p-2.5 rounded-xl bg-deep-blue/10 border border-deep-blue/20 text-center"><div className="text-[6px] text-deep-blue uppercase mb-0.5">Bot Uptime</div><motion.div animate={{opacity:[0.8,1,0.8]}} transition={{duration:1,repeat:Infinity}} className="text-lg font-black text-white">100%</motion.div></div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-deep-blue/5 border border-deep-blue/15 text-center text-[7px]"><span className="text-gray-500">ประหยัดได้ถึง </span><span className="font-black text-deep-blue">340 ชั่วโมง</span><span className="text-gray-500"> ต่อเดือน</span></div>
        </div>
      </div>
    ),
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative h-[520px] lg:h-[600px] flex flex-col">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 40, scale: 0.95 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            exit={{ opacity: 0, x: -40, scale: 1.05 }} 
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 1
            }} 
            className="absolute inset-0 flex flex-col"
          >
            {/* Visual Area */}
            <div className="flex-[1.2] bg-gradient-to-b from-transparent to-black/40 relative overflow-hidden min-h-0">
              {visuals[activeStep]}
            </div>
            
            {/* Text Content Area */}
            <div className="p-8 lg:p-10 bg-ultra-dark/95 backdrop-blur-2xl border-t border-white/5 space-y-4 shrink-0">
              <div className="space-y-1">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-deep-blue text-[10px] font-black uppercase tracking-[0.25em]"
                >
                  {steps[activeStep].subtitle}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-black text-white leading-tight"
                >
                  {steps[activeStep].title}
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-3"
              >
                {steps[activeStep].desc}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Layer */}
      <div className="relative flex items-center justify-between h-16 mt-4">
        {/* Indicators */}
        <div className="flex gap-2.5">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1.5 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-12 bg-deep-blue shadow-deep-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-deep-blue/30 transition-all active:scale-75 hover:scale-105"
          >
            ←
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} 
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-deep-blue/20 hover:border-deep-blue/50 transition-all shadow-deep-glow/10 active:scale-75 hover:scale-105"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
