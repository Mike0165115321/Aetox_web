'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, CheckCircle2, ArrowLeft, Link as LinkIcon, Laptop, Bot, Server, Shield, Rocket, MousePointer2, Database, Plus, Zap } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import ArchitectureBuilder from './components/architecture-builder';

/* ─── Shared UI Components ────────────────────────────────────────── */
function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.01]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 font-bold">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-[11px] font-bold transition-all ${item.link ? 'cursor-pointer hover:bg-cyber-blue/10 hover:border-cyber-blue/40 hover:text-white' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Top Layer: Web Showcase ───────────────────────────────────── */
function WebShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="w-full max-w-xs space-y-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-bold uppercase tracking-wider">Next.js 14 App Router</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-bold uppercase tracking-wider">Tailwind CSS + Framer Motion</span>
              </div>
           </div>
           <Globe className="mt-8 w-10 h-10 text-cyber-blue animate-spin-slow opacity-60" />
        </div>
    ),
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="flex gap-3 items-end h-20">
              {[80, 100, 95, 98].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-8 bg-cyber-blue/20 border-t-2 border-cyber-blue rounded-t-lg shadow-cyber-glow" />
              ))}
           </div>
           <div className="mt-6 text-4xl font-bold text-white">99<span className="text-sm text-cyber-blue font-bold">%</span></div>
           <p className="text-[10px] text-gray-500 font-bold uppercase mt-2">Performance Score</p>
        </div>
    ),
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <Laptop className="w-20 h-20 text-white/10" />
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <Bot className="w-8 h-8 text-cyber-blue shadow-cyber-glow" />
              </motion.div>
           </div>
           <div className="mt-6 flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-bounce delay-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-bounce delay-200" />
           </div>
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

export default function WebSystemsClient({ dict, navDict }: { dict: any, navDict: any }) {
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
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[70vh] pt-12 pb-20 overflow-hidden scroll-mt-20">
        <div className="container mx-auto">
          {/* Standardized Back Button */}
          <Link href="/services" className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyber-blue/30 transition-all mb-10 group backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าบริการ</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-cyber-blue tracking-[0.1em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                  {dict.hero.badge}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {dict.hero.title.white}<br />
                  <span className="text-cyber-blue">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium max-w-xl">
                  {dict.hero.description}
                </p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {[{ id: 'arch', title: 'Architecture', icon: Globe }, { id: 'perf', title: 'Performance', icon: Rocket }, { id: 'sec', title: 'Security', icon: Shield }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyber-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors tracking-wider">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-5/12 w-full"><WebShowcase steps={dict.showcase} /></div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer: Solution Design (Engagement) ─── */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-cyber-blue font-bold text-[10px] uppercase tracking-[0.2em]">
                  <MousePointer2 size={12} /> Interactive Designer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  ออกแบบ <span className="text-cyber-blue">Architecture</span><br />ที่เหมาะกับธุรกิจคุณ
                </h2>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                  ลองเลือกประเภทธุรกิจของคุณเพื่อจำลองการวางโครงสร้างระบบระดับ Enterprise ที่เราออกแบบให้ มั่นใจในเรื่องประสิทธิภาพ ความปลอดภัย และการขยายตัวในอนาคต
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-cyber-blue font-bold text-xl">100%</div>
                  <div className="text-gray-500 text-[10px] font-bold tracking-wider">{dict.stats.scalable}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-cyber-blue font-bold text-xl">24/7</div>
                  <div className="text-gray-500 text-[10px] font-bold tracking-wider">{dict.stats.security}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 w-full">
              <ArchitectureBuilder />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="space-y-32">
            
            {/* Pillar 1: Next.js Excellence */}
            <div id="arch" className="flex flex-col lg:flex-row gap-16 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                    {dict.pillars.pillar1.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureItem title={dict.pillars.pillar1.features[0].title} desc={dict.pillars.pillar1.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[1].title} desc={dict.pillars.pillar1.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar1.features[2].title} desc={dict.pillars.pillar1.features[2].desc} />
                </div>
              </div>

              {/* Visual 1 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Stack Architecture</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 relative scale-90">
                       <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="w-48 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-md z-30">
                          <Laptop className="w-5 h-5 text-cyber-blue" />
                          <div className="space-y-1.5 w-full"><div className="h-1 w-1/2 bg-cyber-blue rounded-full" /><div className="h-0.5 w-1/3 bg-white/20 rounded-full" /></div>
                       </motion.div>
                       <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="w-56 p-4 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center gap-3 backdrop-blur-md z-20">
                          <Server className="w-5 h-5 text-cyber-blue" />
                          <div className="space-y-1.5 w-full"><div className="h-1 w-3/4 bg-cyber-blue/80 rounded-full" /><div className="h-0.5 w-1/2 bg-white/20 rounded-full" /></div>
                       </motion.div>
                       <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="w-64 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-md z-10">
                          <Database className="w-5 h-5 text-cyber-blue/50" />
                          <div className="space-y-1.5 w-full"><div className="h-1 w-full bg-white/30 rounded-full" /><div className="h-0.5 w-2/3 bg-white/10 rounded-full" /></div>
                       </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: High-Speed Performance */}
            <div id="perf" className="flex flex-col lg:flex-row-reverse gap-16 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                    {dict.pillars.pillar2.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureItem title={dict.pillars.pillar2.features[0].title} desc={dict.pillars.pillar2.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[1].title} desc={dict.pillars.pillar2.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar2.features[2].title} desc={dict.pillars.pillar2.features[2].desc} />
                </div>
              </div>

              {/* Visual 2 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Performance Metrics</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center gap-6 scale-90">
                       <div className="relative w-36 h-36">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                             <motion.circle cx="50" cy="50" r="45" fill="none" stroke="#06B6D4" strokeWidth="8" strokeDasharray="283" initial={{ strokeDashoffset: 283 }} animate={{ strokeDashoffset: 14 }} transition={{ duration: 2, ease: "easeOut" }} strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <span className="text-4xl font-bold text-white">99</span>
                             <span className="text-[10px] text-cyber-blue font-bold tracking-widest">SCORE</span>
                          </div>
                       </div>
                       <div className="flex gap-4 w-full">
                          <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/10">
                             <div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">Load</div>
                             <div className="text-sm font-bold text-cyber-blue">0.4s</div>
                          </div>
                          <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/10">
                             <div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">CLS</div>
                             <div className="text-sm font-bold text-cyber-blue">0.00</div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Enterprise Security */}
            <div id="sec" className="flex flex-col lg:flex-row gap-16 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                    {dict.pillars.pillar3.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureItem title={dict.pillars.pillar3.features[0].title} desc={dict.pillars.pillar3.features[0].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[1].title} desc={dict.pillars.pillar3.features[1].desc} />
                  <FeatureItem title={dict.pillars.pillar3.features[2].title} desc={dict.pillars.pillar3.features[2].desc} />
                </div>
              </div>

              {/* Visual 3 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Security Protocol</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center relative scale-90">
                       <Shield className="w-20 h-20 text-white/5" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="p-4 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 backdrop-blur-md">
                             <CheckCircle2 className="w-8 h-8 text-cyber-blue shadow-cyber-glow" />
                          </motion.div>
                       </div>
                       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-500 uppercase">Encrypted</div>
                          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-500 uppercase">Verified</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <AppliedIn items={dict.appliedIn} label="Applied In" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="web-systems" 
        serviceName="Web Systems" 
        hirePoints={dict.cta.hirePoints}
        learnPoints={dict.cta.learnPoints}
      />

      <Footer dict={navDict.footer} />
    </main>
  );
}
