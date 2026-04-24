'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, CheckCircle2, ArrowLeft, Link as LinkIcon, Laptop, Bot, 
  Server, Shield, Rocket, MousePointer2, Database, Plus, Zap,
  Layout, ArrowRight, Cpu, Search, LineChart, Lock
} from 'lucide-react';
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
      <p className="text-gray-500 text-xs leading-relaxed font-medium">{desc}</p>
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
    // 1: Modern Architecture
    (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
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
        <div className="relative h-full flex flex-col items-center justify-center p-8">
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
        <div className="relative h-full flex flex-col items-center justify-center p-8">
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
        <div className="relative h-full flex flex-col items-center justify-center p-8">
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
        <div className="relative h-full flex flex-col items-center justify-center p-8">
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

export default function WebSystemsClient({ dict, navDict }: { dict: any, navDict: any }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: 'hero', label: 'แนะนำระบบ', num: '01', icon: <Globe size={16} /> },
    { id: 'solution-design', label: 'ออกแบบโซลูชัน', num: '02', icon: <Layout size={16} /> },
    { id: 'arch', label: 'สถาปัตยกรรม', num: '03', icon: <Server size={16} /> },
    { id: 'perf', label: 'ประสิทธิภาพ', num: '04', icon: <Rocket size={16} /> },
    { id: 'sec', label: 'ความปลอดภัย', num: '05', icon: <Shield size={16} /> },
    { id: 'cta-section', label: 'ติดต่อเรา', num: '06', icon: <ArrowRight size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 350;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* ─── Floating Cyber-Control Sidebar (Pattern from Automation) ─── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden xl:block">
        <div className="glass-card p-3 rounded-[32px] border border-white/10 backdrop-blur-3xl shadow-2xl bg-black/40 flex flex-col gap-2 relative group/nav">
          <div className="absolute -inset-1 bg-gradient-to-b from-cyber-blue/20 to-transparent rounded-[34px] opacity-0 group-hover/nav:opacity-100 transition-opacity blur-lg pointer-events-none" />
          
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className="relative flex items-center group/item"
            >
              {/* Tooltip Label - Managed by React State for 100% stability */}
              <AnimatePresence>
                {hoveredSection === section.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-14 pointer-events-none"
                  >
                    <div className="glass-card px-4 py-2 rounded-xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl">
                      <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest block mb-0.5">{section.num}</span>
                      <span className="text-xs font-bold text-white whitespace-nowrap">{section.label}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Unified Icon Container & Highlight (Pattern for maximum smoothness) */}
              <motion.div
                animate={{
                  backgroundColor: activeSection === section.id ? '#06B6D4' : 'rgba(255, 255, 255, 0.05)',
                  color: activeSection === section.id ? '#000000' : '#9CA3AF',
                  borderColor: activeSection === section.id ? '#06B6D4' : 'rgba(255, 255, 255, 0.05)',
                  scale: activeSection === section.id ? 1.1 : 1
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border relative"
              >
                {section.icon}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-active" 
                    className="absolute -inset-2 border border-cyber-blue/50 rounded-[20px] bg-cyber-blue/5"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.5
                    }}
                  />
                )}
              </motion.div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[80vh] pt-12 pb-20 overflow-hidden scroll-mt-20">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyber-blue/30 transition-all mb-10 group backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าบริการ</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-16">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {[{ id: 'arch', title: 'Architecture', icon: Globe }, { id: 'perf', title: 'Performance', icon: Rocket }, { id: 'sec', title: 'Security', icon: Shield }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyber-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors tracking-wider uppercase tracking-widest">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
            <div className="lg:w-5/12 w-full"><WebShowcase steps={dict.showcase} /></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Solution Design (Architecture Builder) ─── */}
      <section id="solution-design" className="py-24 relative z-10 overflow-hidden scroll-mt-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-cyber-blue font-bold text-[10px] tracking-[0.2em] uppercase">
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

      {/* ─── Technical Deep Dive (Un-nested for Scroll-Spy Accuracy - Pattern from Automation) ─── */}
      
      {/* Pillar 1: Strategic Architecture */}
      <section id="arch" className="py-24 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                    <Server className="w-5 h-5 text-cyber-blue" />
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

            <div className="lg:w-5/12 w-full">
              <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                      <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Stack Architecture</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center w-full relative">
                      <div className="relative w-full h-[320px] flex items-center justify-center" style={{ perspective: '2000px' }}>
                          
                          {/* Core Data Beam */}
                          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                             <div className="w-[1px] h-[80%] bg-gradient-to-b from-transparent via-cyber-blue/30 to-transparent" />
                             {/* Data Particles */}
                             <motion.div animate={{ y: [-120, 120], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute w-[3px] h-[40px] bg-cyber-blue shadow-[0_0_15px_#06B6D4] rounded-full blur-[1px]" />
                          </div>

                          {/* Layer 3: Cloud Infrastructure (Bottom) */}
                          <motion.div 
                            initial={{ rotateX: 60, rotateZ: -35 }}
                            animate={{ y: [50, 60, 50] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="absolute w-[220px] h-[140px] bg-[#0A0F1C]/80 border border-white/5 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_40px_60px_-20px_rgba(0,0,0,0.8)] z-10"
                          >
                             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[32px]" />
                             <Globe className="w-10 h-10 text-gray-600 opacity-40" />
                             <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                               <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Cloud Infra</span>
                               <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" />
                             </div>
                          </motion.div>

                          {/* Layer 2: Type-Safe Core (Middle) */}
                          <motion.div 
                            initial={{ rotateX: 60, rotateZ: -35 }}
                            animate={{ y: [-10, 0, -10] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            className="absolute w-[220px] h-[140px] bg-cyber-blue/10 border border-cyber-blue/30 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(6,182,212,0.15)] z-20"
                          >
                             <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 to-transparent rounded-[32px]" />
                             <div className="w-12 h-12 border border-cyber-blue/50 rounded-2xl flex items-center justify-center bg-cyber-blue/5 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">
                                <span className="text-cyber-blue font-black text-lg tracking-tighter">TS</span>
                             </div>
                             <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                               <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Type-Safe Core</span>
                               <div className="flex gap-1">
                                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-cyber-blue rounded-full" />)}
                               </div>
                             </div>
                          </motion.div>

                          {/* Layer 1: Modern App Router (Top) */}
                          <motion.div 
                            initial={{ rotateX: 60, rotateZ: -35 }}
                            animate={{ y: [-70, -60, -70] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                            className="absolute w-[220px] h-[140px] bg-white/[0.03] border-t border-l border-white/20 border-b border-r border-white/5 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] z-30"
                          >
                             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[32px]" />
                             <Layout className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                             <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                               <span className="text-[10px] font-black text-white uppercase tracking-widest">App Router</span>
                               <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30">V14</span>
                             </div>
                          </motion.div>
                          
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: High Performance Core */}
      <section id="perf" className="py-24 relative z-10 scroll-mt-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
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

            <div className="lg:w-5/12 w-full">
              <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4 z-20 relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                      <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Data Pipeline Architecture</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center w-full relative">
                      
                      {/* Connecting Network Lines */}
                      <div className="absolute inset-0 flex justify-center items-center opacity-60">
                         <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 200 200" preserveAspectRatio="none">
                           {/* Query -> DB */}
                           <path d="M 100 20 L 100 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                           {/* DB -> Analytics */}
                           <path d="M 100 100 L 40 160" stroke="rgba(6,182,212,0.2)" strokeWidth="2" fill="none" />
                           {/* DB -> AI */}
                           <path d="M 100 100 L 160 160" stroke="rgba(6,182,212,0.2)" strokeWidth="2" fill="none" />
                         </svg>
                      </div>
                      
                      {/* Animated Particles flowing through lines */}
                      <div className="absolute inset-0 w-[200px] h-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <motion.div animate={{ top: ['10%', '50%'], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute left-[calc(50%-2px)] w-1 h-1 bg-white rounded-full shadow-cyber-glow" />
                          <motion.div animate={{ top: ['50%', '80%'], left: ['50%', '20%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "linear" }} className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full shadow-cyber-glow" />
                          <motion.div animate={{ top: ['50%', '80%'], left: ['50%', '80%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full shadow-cyber-glow" />
                      </div>

                      <div className="relative w-[200px] h-[200px]">
                          {/* Top Node: Query (Optimized Query Performance) */}
                          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0A0F1C] border border-white/10 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                             <Search className="w-5 h-5 text-gray-400" />
                             <div className="absolute -top-6 text-[8px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Queries</div>
                          </motion.div>

                          {/* Center Node: Core Database (Structured Data Design) */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                             <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 border border-dashed border-cyber-blue/30 rounded-full" />
                             <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-3 border border-white/5 rounded-full" />
                             <div className="w-16 h-16 bg-[#0A0F1C] border border-cyber-blue/50 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-cyber-blue/10 animate-pulse" />
                                <Database className="w-7 h-7 text-cyber-blue relative z-10 drop-shadow-lg" />
                             </div>
                             <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">Schema</div>
                          </div>

                          {/* Bottom Left Node: Analytics */}
                          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute bottom-0 left-2 w-12 h-12 bg-[#0A0F1C] border border-cyber-blue/30 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                             <LineChart className="w-5 h-5 text-cyber-blue drop-shadow-[0_0_5px_#06B6D4]" />
                             <div className="absolute -bottom-6 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">Analytics</div>
                          </motion.div>

                          {/* Bottom Right Node: AI */}
                          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-2 w-12 h-12 bg-[#0A0F1C] border border-cyber-blue/30 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                             <Bot className="w-5 h-5 text-cyber-blue drop-shadow-[0_0_5px_#06B6D4]" />
                             <div className="absolute -bottom-6 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">AI Ready</div>
                          </motion.div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Enterprise Security */}
      <section id="sec" className="py-24 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
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

            <div className="lg:w-5/12 w-full">
              <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2 z-20 relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" />
                      <span className="text-[10px] font-bold text-emerald-500 tracking-widest">Enterprise Security Shield</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center relative w-full scale-90">
                      
                      <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                         
                         {/* Radar Sweep Background */}
                         <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full opacity-30" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(6,182,212,0.4) 10%, transparent 40%)' }} />

                         {/* Layer 3: Threat Mitigation Barrier */}
                         <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-red-500/30 rounded-full" />
                         
                         {/* Blocked Threats Particles (Red dots bouncing off) */}
                         <motion.div animate={{ x: [-110, -70, -110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
                         <motion.div animate={{ x: [110, 70, 110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute right-1/2 top-[30%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
                         <motion.div animate={{ y: [110, 70, 110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} className="absolute bottom-1/2 left-[40%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_red]" />

                         {/* Layer 2: Access Control Ring */}
                         <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-10 border-[2px] border-cyber-blue/40 rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                            <div className="absolute top-0 -mt-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
                            <div className="absolute bottom-0 -mb-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
                            <div className="absolute left-0 -ml-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
                         </motion.div>

                         {/* Layer 1: Core Encryption (Data Protection) */}
                         <div className="absolute inset-[65px] bg-[#0A0F1C] border border-emerald-500/50 rounded-full backdrop-blur-2xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] overflow-hidden z-10">
                            
                            {/* Inner Data Ring */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-1.5 border border-dashed border-emerald-500/30 rounded-full flex items-center justify-center">
                               <span className="absolute -top-1 text-[5px] text-emerald-500/70 font-mono tracking-widest">0101</span>
                               <span className="absolute -bottom-1 text-[5px] text-emerald-500/70 font-mono tracking-widest">1010</span>
                            </motion.div>

                            {/* Core Glow */}
                            <motion.div animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-emerald-500/20 rounded-full" />
                            
                            {/* Combined Shield & Lock Icon */}
                            <div className="relative z-10 flex items-center justify-center">
                               <Shield className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_#10B981]" />
                               <Lock className="w-4 h-4 text-[#0A0F1C] absolute fill-emerald-400" />
                            </div>
                         </div>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute bottom-0 flex flex-wrap justify-center gap-2 px-2 w-full z-30">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> Role-Based Auth
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> AES-256
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> Threat Shield
                        </div>
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applied In Section */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <AppliedIn items={dict.appliedIn} label="Applied In" />
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section id="cta-section" className="scroll-mt-20">
        <ServiceBottomCTA 
          serviceId="web-systems" 
          serviceName="Web Systems" 
          hirePoints={dict.cta.hirePoints}
          learnPoints={dict.cta.learnPoints}
        />
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
