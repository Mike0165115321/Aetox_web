'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon, Layers, Settings, Share2, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

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

function AppliedIn({ items }: { items: string[] }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
      <div className="flex flex-wrap gap-3">
        {items.map((name) => (
          <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium cursor-pointer transition-colors hover:bg-deep-blue/10">
            <LinkIcon className="w-3 h-3" /> {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Top Layer: Automation Showcase ────────────────────────────── */
function AutomationShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Step 01: Multi-Platform Connect",
      subtitle: "เชื่อมต่อทุกแพลตฟอร์ม",
      desc: "เชื่อมโยงข้อมูลจาก LINE, Facebook, Email และ Database ต่างๆ เข้าสู่ระบบเดียวด้วย API อัจฉริยะ",
      visual: (
        <div className="relative h-full flex items-center justify-center p-8">
           <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="w-12 h-12 rounded-lg bg-white/5 border border-deep-blue/30 flex items-center justify-center text-deep-blue">
                   <Share2 className="w-5 h-5" />
                </motion.div>
              ))}
           </div>
           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-20 h-20 rounded-2xl bg-deep-blue/20 border border-deep-blue flex items-center justify-center">
              <Settings className="w-8 h-8 text-deep-blue animate-spin-slow" />
           </motion.div>
        </div>
      )
    },
    {
      title: "Step 02: Logic-Based Processing",
      subtitle: "ประมวลผลเงื่อนไข",
      desc: "คัดกรองข้อมูล วิเคราะห์ความสำคัญ และตัดสินใจดำเนินการแทนคุณตาม Business Logic ที่กำหนดไว้",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8 gap-4">
           {[0, 1, 2].map(i => (
             <motion.div key={i} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.3 }} className="w-full max-w-[200px] h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }} className="w-1/2 h-full bg-deep-blue shadow-deep-glow" />
             </motion.div>
           ))}
        </div>
      )
    },
    {
      title: "Step 03: Automated Delivery",
      subtitle: "ส่งผลลัพธ์อัตโนมัติ",
      desc: "ส่งรายงาน แจ้งเตือนลูกค้า หรืออัปเดตสถานะในระบบ CRM โดยไม่ต้องใช้คนทำแม้แต่ขั้นตอนเดียว",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="p-6 rounded-2xl bg-deep-blue/10 border border-deep-blue/30 relative">
              <CheckCircle2 className="w-12 h-12 text-deep-blue shadow-deep-glow" />
              <motion.div animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 border border-deep-blue rounded-2xl" />
           </motion.div>
           <div className="mt-8 text-deep-blue font-mono text-[10px] tracking-widest uppercase">Task Completed 100%</div>
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
              <div><span className="text-deep-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span><h3 className="text-2xl font-bold text-white mt-1">{steps[activeStep].title}</h3></div>
              <p className="text-gray-400 text-sm leading-relaxed">{steps[activeStep].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setActiveStep(i)} className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-deep-blue shadow-deep-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-deep-blue/30 transition-all">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-deep-blue/20 hover:border-deep-blue/50 transition-all">→</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Bottom Layer: Workflow Data ───────────────────────────────── */
const workflowData = {
  connect: {
    title: '1. Platform Connector',
    steps: [
      { id: '01', title: 'Omnichannel Input', desc: 'เชื่อมต่อข้อมูลจาก LINE OA, Email, Sheets และ Database' },
      { id: '02', title: 'Real-time Webhooks', desc: 'ตอบสนองต่อเหตุการณ์ที่เกิดขึ้นในทันทีแบบ Automated' },
      { id: '03', title: 'Secure API Bridge', desc: 'การเชื่อมต่อที่ปลอดภัยด้วยมาตรฐาน JWT Encryption' }
    ]
  },
  process: {
    title: '2. Logic Engine',
    steps: [
      { id: '01', title: 'Conditional Routing', desc: 'กำหนดเงื่อนไขการทำงานแบบ If-Then-Else ที่ซับซ้อน' },
      { id: '02', title: 'Data Transformation', desc: 'จัดระเบียบและแปลงข้อมูลสู่รูปแบบที่พร้อมใช้งาน' },
      { id: '03', title: 'Error Handling', desc: 'ระบบตรวจจับข้อผิดพลาดและแจ้งเตือนทีมทันที' }
    ]
  },
  deliver: {
    title: '3. Auto Delivery',
    steps: [
      { id: '01', title: 'Auto-Reporting', desc: 'สรุปผลส่งเข้า LINE หรือ Email รายวันแบบอัตโนมัติ' },
      { id: '02', title: 'CRM Auto-Update', desc: 'อัปเดตสถานะลูกค้าในระบบหลังบ้านทันที' },
      { id: '03', title: 'Document Automation', desc: 'สร้าง Invoice หรือสัญญาโดยใช้ข้อมูลจากระบบโดยตรง' }
    ]
  }
};

export default function AutomationPage() {
  const [activeSection, setActiveSection] = useState<'connect' | 'process' | 'deliver'>('connect');

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

    ['connect', 'process', 'deliver'].forEach((id) => {
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
    <main className="min-h-screen bg-ultra-dark selection:bg-deep-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      <Navbar />

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
                <LayerBadge icon={Zap} label="Execution Layer" />
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Workflow<br /><span className="text-deep-blue drop-shadow-deep-glow">Automation</span></h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-deep-blue/30 pl-6">เปลี่ยนขั้นตอนที่ซ้ำซากให้กลายเป็นระบบอัตโนมัติที่ทำงานได้ 24/7 ลดความผิดพลาด และช่วยให้ทีมของคุณโฟกัสกับงานที่สร้างมูลค่าได้มากขึ้น</p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[{ id: 'connect', title: 'Data Connect', icon: Share2 }, { id: 'process', title: 'Logic Engine', icon: Settings }, { id: 'deliver', title: 'Auto Delivery', icon: CheckCircle2 }].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-deep-blue/30 hover:bg-deep-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-deep-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full"><AutomationShowcase /></div>
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
            <div className="lg:w-7/12 space-y-40">
              <div id="connect" className="space-y-12 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center"><Share2 className="w-6 h-6 text-deep-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">1. Platform Connector</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Omnichannel Input" desc="เชื่อมต่อข้อมูลจาก LINE OA, Email, Google Sheets และระบบ Database เดิมของคุณ" />
                  <FeatureItem title="Real-time Webhooks" desc="ตอบสนองต่อเหตุการณ์ที่เกิดขึ้นในทันที ไม่ต้องรอกดรันระบบเอง" />
                </div>
              </div>

              <div id="process" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center"><Settings className="w-6 h-6 text-deep-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">2. Intelligent Logic Engine</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Conditional Routing" desc="กำหนดเงื่อนไขการทำงานที่ซับซ้อนได้แบบ If-Then-Else ที่แม่นยำ" />
                  <FeatureItem title="Data Transformation" desc="จัดระเบียบและแปลงข้อมูลจากรูปแบบหนึ่งไปสู่อีกรูปแบบหนึ่งโดยอัตโนมัติ" />
                </div>
              </div>

              <div id="deliver" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center"><Layers className="w-6 h-6 text-deep-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">3. Automated Delivery</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Auto-Reporting" desc="สรุปผลการทำงานส่งเข้า LINE หรือ Email รายวัน/รายสัปดาห์แบบอัตโนมัติ" />
                  <FeatureItem title="CRM Auto-Update" desc="อัปเดตสถานะลูกค้าในระบบหลังบ้านทันทีที่เกิดการสั่งซื้อหรือติดต่อ" />
                </div>
              </div>
              <div className="mt-24"><AppliedIn items={['E-commerce Auto-Order', 'Real-time Stock Sync', 'Automated Customer Support']} /></div>
            </div>

            {/* Right: Sticky Live Workflow */}
            <div className="lg:w-5/12 lg:sticky lg:top-32 w-full h-fit">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-16 h-16 text-deep-blue" /></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-deep-blue mb-4"><MousePointer2 className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">Live Workflow Status</span></div>
                  <AnimatePresence mode="wait">
                    <motion.div key={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-4">{workflowData[activeSection].title}</h4>
                      <div className="space-y-6">
                        {workflowData[activeSection].steps.map((s) => (
                          <div key={s.id} className="flex gap-4">
                            <div className="text-deep-blue font-mono text-xs pt-1">{s.id}</div>
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
