'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, CheckCircle2, ArrowLeft, Link as LinkIcon, Laptop, Bot, Server, Shield, Rocket, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

/* ─── Shared UI Components ────────────────────────────────────────── */
function LayerBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue text-sm font-bold tracking-widest uppercase">
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AppliedIn({ items }: { items: string[] }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
      <div className="flex flex-wrap gap-3">
        {items.map((name) => (
          <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-cyber-blue/20 text-cyber-blue text-xs font-medium cursor-pointer transition-colors hover:bg-cyber-blue/10">
            <LinkIcon className="w-3 h-3" /> {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Top Layer: Web Showcase ───────────────────────────────────── */
function WebShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Step 01: Modern Architecture",
      subtitle: "โครงสร้างพื้นฐานระดับสากล",
      desc: "ใช้ Stack ที่ดีที่สุด (Next.js + Tailwind + TypeScript) เพื่อความปลอดภัยสูงสุดและการขยายตัวที่ไม่มีขีดจำกัด",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="w-full max-w-xs space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-mono uppercase">Next.js App Router</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-mono uppercase">Tailwind CSS 3.4</span>
              </div>
           </div>
           <Globe className="mt-8 w-12 h-12 text-cyber-blue animate-spin-slow" />
        </div>
      )
    },
    {
      title: "Step 02: Performance Excellence",
      subtitle: "ความเร็วที่เหนือชั้น",
      desc: "Lighthouse Score 95+ ในทุก Metric เพื่อประสบการณ์การใช้งานที่ลื่นไหลที่สุดและผลดีต่อ SEO ของคุณ",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="flex gap-4 items-end h-24">
              {[80, 100, 95, 98].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-10 bg-cyber-blue/40 border-t-2 border-cyber-blue rounded-t-lg" />
              ))}
           </div>
           <div className="mt-8 text-4xl font-black text-white">99<span className="text-sm text-cyber-blue">%</span></div>
        </div>
      )
    },
    {
      title: "Step 03: AI Integration Ready",
      subtitle: "เชื่อมต่อโลกอนาคต",
      desc: "เตรียมความพร้อมของข้อมูลและโครงสร้างเว็บให้รองรับการทำงานร่วมกับ AI Agents และระบบอัตโนมัติได้อย่างสมบูรณ์",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <Laptop className="w-24 h-24 text-gray-700" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <Bot className="w-10 h-10 text-cyber-blue shadow-cyber-glow" />
              </motion.div>
           </div>
           <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-bounce delay-200" />
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative aspect-square lg:h-[500px]">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col">
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40">{steps[activeStep].visual}</div>
            <div className="p-8 bg-ultra-dark/90 backdrop-blur-xl border-t border-white/5 space-y-4">
              <div><span className="text-cyber-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span><h3 className="text-2xl font-bold text-white mt-1">{steps[activeStep].title}</h3></div>
              <p className="text-gray-400 text-sm leading-relaxed">{steps[activeStep].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setActiveStep(i)} className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-cyber-blue shadow-cyber-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyber-blue/30 transition-all">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all">→</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Bottom Layer: Workflow Data ───────────────────────────────── */
const workflowData = {
  arch: {
    title: '1. Next.js Excellence',
    steps: [
      { id: '01', title: 'App Router', desc: 'ใช้โครงสร้างล่าสุดของ Next.js เพื่อความเร็วและการจัดการ Data Fetching' },
      { id: '02', title: 'TypeScript', desc: 'เขียนโค้ดด้วย Type-safe 100% ลดข้อผิดพลาดและง่ายต่อการขยาย' },
      { id: '03', title: 'Cloud Native', desc: 'ระบบออกแบบให้พร้อม Deploy บน AWS, Vercel หรือ Google Cloud' }
    ]
  },
  perf: {
    title: '2. High Performance',
    steps: [
      { id: '01', title: 'Lighthouse Mastery', desc: 'ปรับแต่งทุกองค์ประกอบให้ได้คะแนน Performance 95+ เสมอ' },
      { id: '02', title: 'Edge Computing', desc: 'ใช้ Cache ระดับ Global เพื่อให้เข้าถึงเว็บได้รวดเร็วจากทุกที่' },
      { id: '03', title: 'Asset Optmize', desc: 'จัดการรูปภาพและไฟล์แบบ Next-gen เพื่อความไวระดับเสี้ยววินาที' }
    ]
  },
  sec: {
    title: '3. Enterprise Security',
    steps: [
      { id: '01', title: 'Access Control', desc: 'ระบบสมาชิกและความปลอดภัยระดับสูงด้วย JWT หรือ Auth0' },
      { id: '02', title: 'Data Encryption', desc: 'ปกป้องข้อมูลสำคัญด้วยการเข้ารหัสทุกขั้นตอนตามมาตรฐาน B2B' },
      { id: '03', title: 'Threat Protection', desc: 'ป้องกัน CSRF & XSS ด้วย Security Headers ที่เข้มงวด' }
    ]
  }
};

export default function WebSystemsPage() {
  const [activeSection, setActiveSection] = useState<'arch' | 'perf' | 'sec'>('arch');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as any);
          }
        });
      },
      { threshold: 0.5 }
    );

    ['arch', 'perf', 'sec'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />

      {/* ─── Layer 1: Intro (Hero + Showcase Together) ─── */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyber-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <LayerBadge icon={Server} label="Foundation Layer" />
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Full-Stack<br /><span className="text-cyber-blue drop-shadow-cyber-glow">Web Systems</span></h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-cyber-blue/30 pl-6">สร้างโครงสร้างพื้นฐานดิจิทัลที่มั่นคงและสวยงาม ด้วยเทคโนโลยี Modern Web ที่รองรับผู้ใช้งานจำนวนมากและพร้อมเชื่อมต่อกับ AI ในอนาคต</p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[{ id: 'arch', title: 'Architecture', icon: Globe }, { id: 'perf', title: 'Performance', icon: Rocket }, { id: 'sec', title: 'Security', icon: Shield }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyber-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full"><WebShowcase /></div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Technical Deep Dive (Separate Floor) ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Left: Pillars */}
            <div className="lg:w-7/12 space-y-32">
              <div id="arch" className="space-y-8 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Globe className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">1. Next.js Excellence</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="App Router Architecture" desc="ใช้โครงสร้างใหม่ล่าสุดของ Next.js เพื่อความเร็วและการจัดการ Data Fetching ที่มีประสิทธิภาพ" />
                  <FeatureItem title="TypeScript Standards" desc="เขียนโค้ดด้วย Type-safe 100% ลดข้อผิดพลาดและง่ายต่อการขยายระบบในระยะยาว" />
                </div>
              </div>

              <div id="perf" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Rocket className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">2. High-Speed Performance</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Lighthouse Mastery" desc="ปรับแต่งทุกองค์ประกอบให้ได้คะแนน Performance 95+ เพื่อ SEO และ User Experience" />
                  <FeatureItem title="Edge Computing" desc="ใช้ระบบ Cache ระดับ Global เพื่อให้ผู้ใช้งานเข้าถึงเว็บได้รวดเร็วจากทุกมุมโลก" />
                </div>
              </div>

              <div id="sec" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Shield className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">3. Enterprise Security</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Auth & Access Control" desc="ระบบสมาชิกและความปลอดภัยระดับสูงด้วย JWT, Auth0 หรือ Clerk" />
                  <FeatureItem title="Data Encryption" desc="ปกป้องข้อมูลสำคัญด้วยการเข้ารหัสทุกขั้นตอนตามมาตรฐาน B2B" />
                </div>
              </div>
              <div className="mt-24"><AppliedIn items={['Aetox Core Platform', 'Enterprise CRM Dashboard', 'AI Agent Management Portal']} /></div>
            </div>

            {/* Right: Sticky Live Workflow */}
            <div className="lg:w-5/12 lg:sticky lg:top-32 w-full h-fit space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Laptop className="w-16 h-16 text-cyber-blue" /></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-cyber-blue mb-4"><MousePointer2 className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">Live System Status</span></div>
                  <AnimatePresence mode="wait">
                    <motion.div key={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-4">{workflowData[activeSection].title}</h4>
                      <div className="space-y-6">
                        {workflowData[activeSection].steps.map((s) => (
                          <div key={s.id} className="flex gap-4">
                            <div className="text-cyber-blue font-mono text-xs pt-1">{s.id}</div>
                            <div className="space-y-1"><div className="text-white font-bold text-xs uppercase tracking-wider">{s.title}</div><p className="text-gray-500 text-[11px] leading-relaxed">{s.desc}</p></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
