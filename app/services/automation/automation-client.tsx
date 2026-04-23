'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon, Layers, Settings, Share2, MousePointer2, Rocket } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';

/* ─── Shared UI Components ────────────────────────────────────────── */
function LayerBadge({ icon: Icon, label, colorClass = "text-deep-blue" }: { icon: any; label: string; colorClass?: string }) {
  const bgClass = colorClass.includes('deep-blue') ? 'bg-deep-blue/10 border-deep-blue/20' : 'bg-cyber-blue/10 border-cyber-blue/20';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-sm font-bold tracking-widest uppercase`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-deep-blue/30 transition-all duration-300 hover:bg-deep-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-deep-blue transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-deep-blue shadow-deep-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium transition-all ${item.link ? 'cursor-pointer hover:bg-deep-blue/10 hover:border-deep-blue/40' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Top Layer: Automation Showcase ────────────────────────────── */
function AutomationShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8 gap-4">
          <div className="w-full max-w-[280px] space-y-3">
            {[0, 1, 2].map(i => (
              <motion.div 
                key={i} 
                animate={i === 0 ? { x: [0, 10, 0], borderColor: ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.5)', 'rgba(255,255,255,0.1)'] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`p-3 rounded-xl border ${i === 0 ? 'bg-deep-blue/10 border-deep-blue/40' : 'bg-white/5 border-white/10'} flex items-center justify-between overflow-hidden relative group`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-deep-blue animate-pulse' : 'bg-gray-600'}`} />
                  <div className="space-y-1">
                    <div className={`h-2 w-20 rounded-full ${i === 0 ? 'bg-white/40' : 'bg-white/10'}`} />
                    <div className="h-1.5 w-12 bg-white/5 rounded-full" />
                  </div>
                </div>
                {i === 0 && (
                  <div className="text-[8px] font-black text-deep-blue bg-deep-blue/20 px-2 py-0.5 rounded-full uppercase tracking-widest">Urgent</div>
                )}
                {i === 0 && (
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-deep-blue/20 to-transparent w-1/2"
                  />
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-deep-blue/50">
            <MousePointer2 className="w-4 h-4 animate-bounce" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Priority Re-ordered</span>
          </div>
        </div>
    ),
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border border-deep-blue/20 border-dashed flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }} 
                   transition={{ duration: 0.5, repeat: Infinity }}
                   className="w-16 h-16 rounded-2xl bg-deep-blue/20 border border-deep-blue flex items-center justify-center shadow-deep-glow"
                 >
                    <Zap className="w-8 h-8 text-deep-blue" />
                 </motion.div>
              </div>
              
              {/* Data Particles */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <motion.div
                  key={deg}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0.5],
                    x: Math.cos(deg * Math.PI / 180) * 100,
                    y: Math.sin(deg * Math.PI / 180) * 100
                  }}
                  transition={{ duration: 1, repeat: Infinity, delay: deg/360, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-deep-blue rounded-full shadow-deep-glow"
                />
              ))}
           </div>
           <div className="mt-12 flex gap-4">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                 <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-1">Speed</div>
                 <div className="text-xs font-bold text-white font-mono">10.78 p/m</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-deep-blue/10 border border-deep-blue/30 text-center">
                 <div className="text-[8px] text-deep-blue uppercase tracking-widest mb-1">Status</div>
                 <div className="text-xs font-bold text-deep-blue font-mono animate-pulse">RUNNING</div>
              </div>
           </div>
        </div>
    ),
    (
        <div className="relative h-full flex items-center justify-center p-8 gap-8">
           {/* UI Node */}
           <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 aspect-square glass-card rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 relative z-10">
              <MousePointer2 className="w-6 h-6 text-white/50" />
              <div className="text-[8px] font-black text-white/40 uppercase tracking-widest">Frontend UI</div>
              <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white/30 rounded-full" />
              </div>
           </motion.div>

           {/* Connection Lines */}
           <div className="flex flex-col gap-4">
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} className="w-12 h-px bg-gradient-to-r from-white/10 via-deep-blue to-white/10" />
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} className="w-12 h-px bg-gradient-to-r from-white/10 via-deep-blue to-white/10" />
           </div>

           {/* Bot Engine Node */}
           <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 aspect-square bg-deep-blue/10 border border-deep-blue/30 rounded-2xl flex flex-col items-center justify-center gap-3 relative shadow-deep-glow">
              <Layers className="w-8 h-8 text-deep-blue" />
              <div className="text-[8px] font-black text-deep-blue uppercase tracking-widest">Bot Engine</div>
              <motion.div 
                animate={{ width: ['20%', '90%', '20%'] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-deep-blue rounded-full" 
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-deep-blue flex items-center justify-center text-[10px] font-bold text-black animate-pulse">3</div>
           </motion.div>
        </div>
    )
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative aspect-square lg:h-[500px]">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col">
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40">{visuals[activeStep]}</div>
            <div className="p-8 bg-ultra-dark/90 backdrop-blur-xl border-t border-white/5 space-y-4">
              <div><span className="text-deep-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span><h3 className="text-2xl font-bold text-white mt-1">{steps[activeStep].title}</h3></div>
              <p className="text-gray-400 text-sm leading-relaxed">{steps[activeStep].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative flex items-center justify-center h-16 mt-4">
        {/* Centered Dots with a slight left offset (ml-[-72px] to balance visual weight of arrows) */}
        <div className="flex gap-2 ml-[-72px]">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setActiveStep(i)} className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-deep-blue shadow-deep-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} />
          ))}
        </div>
        
        {/* Navigation Arrows positioned absolutely to the right */}
        <div className="absolute right-0 flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-deep-blue/30 transition-all">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-deep-blue/20 hover:border-deep-blue/50 transition-all shadow-deep-glow/10">→</button>
        </div>
      </div>
    </div>
  );
}

export default function AutomationClient({ dict, navDict }: { dict: any, navDict: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-deep-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      <Navbar dict={navDict.navbar} />

      {/* ─── Layer 1: Intro (Hero + Showcase Together) ─── */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-deep-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <LayerBadge icon={Zap} label={dict.hero.badge} />
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">{dict.hero.title.white}<br /><span className="text-deep-blue drop-shadow-deep-glow text-4xl md:text-6xl">{dict.hero.title.accent}</span></h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-deep-blue/30 pl-6">{dict.hero.description}</p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[{ id: 'connect', title: 'Intelligent Queue', icon: Share2 }, { id: 'perf', title: 'High Performance', icon: Rocket }, { id: 'arch', title: 'Decoupled Arch', icon: Layers }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-deep-blue/30 hover:bg-deep-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-deep-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full"><AutomationShowcase steps={dict.showcase} /></div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="space-y-40">
            
            {/* Pillar 1: Intelligent Queue System */}
            <div id="connect" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar1.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar1.features[0].title} desc={dict.pillars.pillar1.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[1].title} desc={dict.pillars.pillar1.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[2].title} desc={dict.pillars.pillar1.features[2].desc} />
                </div>
              </div>
              
              {/* Visual 1 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-deep-blue animate-pulse" />
                       <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">API Gateway Processing</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-48 h-48 border border-deep-blue/20 rounded-full border-dashed" />
                      <div className="relative z-10 p-6 rounded-2xl bg-deep-blue/10 border border-deep-blue/30">
                         <Share2 className="w-12 h-12 text-deep-blue" />
                      </div>
                      {[0, 120, 240].map((deg) => (
                        <motion.div key={deg} animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: deg/100 }} className="absolute" style={{ transform: `rotate(${deg}deg) translateY(-80px)` }}>
                           <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-deep-blue/70">
                              <LinkIcon className="w-4 h-4" />
                           </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-8 space-y-2">
                       <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase"><span>Active Connections</span><span>3/3 Online</span></div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-deep-blue shadow-deep-glow w-full" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Performance Beyond Limits */}
            <div id="perf" className="flex flex-col lg:flex-row-reverse gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar2.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar2.features[0].title} desc={dict.pillars.pillar2.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[1].title} desc={dict.pillars.pillar2.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[2].title} desc={dict.pillars.pillar2.features[2].desc} />
                </div>
              </div>

              {/* Visual 2 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-deep-blue animate-pulse" />
                       <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">Logic Tree Processing</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center gap-6">
                       <div className="w-32 h-10 rounded-lg bg-deep-blue/20 border border-deep-blue/40 flex items-center justify-center text-xs font-bold text-deep-blue">INPUT</div>
                       <div className="flex gap-12 relative w-full justify-center">
                          <div className="absolute top-[-24px] left-[calc(50%-1px)] w-[2px] h-6 bg-deep-blue/30" />
                          <div className="absolute top-[-12px] left-[calc(50%-30px)] w-[60px] h-[2px] bg-deep-blue/30" />
                          
                          <div className="absolute top-[-12px] left-[calc(50%-30px)] w-[2px] h-3 bg-deep-blue/30" />
                          <div className="absolute top-[-12px] right-[calc(50%-30px)] w-[2px] h-3 bg-deep-blue/30" />

                          <motion.div animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.8)', 'rgba(255,255,255,0.1)'] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-gray-400">TRUE</motion.div>
                          <div className="w-24 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-gray-400 opacity-50">FALSE</div>
                       </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between p-4 rounded-xl bg-deep-blue/5 border border-deep-blue/20">
                       <div className="flex items-center gap-3">
                          <Settings className="w-4 h-4 text-deep-blue animate-spin-slow" />
                          <span className="text-[10px] font-mono text-white">Rule Executed</span>
                       </div>
                       <div className="text-[10px] font-mono text-deep-blue">SUCCESS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Decoupled Architecture */}
            <div id="arch" className="flex flex-col lg:flex-row gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    {dict.pillars.pillar3.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title={dict.pillars.pillar3.features[0].title} desc={dict.pillars.pillar3.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[1].title} desc={dict.pillars.pillar3.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[2].title} desc={dict.pillars.pillar3.features[2].desc} />
                </div>
              </div>

              {/* Visual 3 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-deep-blue animate-pulse" />
                       <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">Delivery Protocol</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-4 relative">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="w-8 h-8 rounded-lg bg-deep-blue/10 flex items-center justify-center">
                               <CheckCircle2 className="w-4 h-4 text-deep-blue" />
                            </div>
                            <div className="flex-1 space-y-2">
                               <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="h-1.5 bg-deep-blue/50 rounded-full" />
                               <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <AppliedIn items={dict.appliedIn} label="Applied In" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="automation" 
        serviceName="Workflow Automation" 
        hirePoints={dict.cta.hirePoints}
        learnPoints={dict.cta.learnPoints}
      />

      <Footer dict={navDict.footer} />
    </main>
  );
}
