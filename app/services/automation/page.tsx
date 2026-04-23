'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon, Layers, Settings, Share2, MousePointer2 } from 'lucide-react';
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

function AppliedIn({ items }: { items: { name: string; link?: string }[] }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
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

export default function AutomationPage() {
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

      {/* ─── Layer 2: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="space-y-40">
            
            {/* Pillar 1: Platform Connector */}
            <div id="connect" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">1. Platform Connector</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    เชื่อมต่อทุกระบบเข้าด้วยกัน เปลี่ยนจากการทำงานแบบไซโล (Silo) เป็นระบบนิเวศที่ข้อมูลไหลเวียนอัตโนมัติ
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Omnichannel Input" desc="เชื่อมต่อข้อมูลจาก LINE OA, Email, Google Sheets และระบบ Database เดิมของคุณ" />
                  <FeatureItem title="Real-time Webhooks" desc="ตอบสนองต่อเหตุการณ์ที่เกิดขึ้นในทันที ไม่ต้องรอกดรันระบบเอง" />
                  <FeatureItem title="Secure API Bridge" desc="การเชื่อมต่อที่ปลอดภัยด้วยมาตรฐาน JWT Encryption เพื่อปกป้องข้อมูลสำคัญ" />
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

            {/* Pillar 2: Intelligent Logic Engine */}
            <div id="process" className="flex flex-col lg:flex-row-reverse gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">2. Intelligent Logic Engine</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    สร้างสมองกลในการตัดสินใจด้วยเงื่อนไขทางธุรกิจที่ซับซ้อน (Business Logic) เพื่อให้ระบบทำงานแทนคนได้อย่างสมบูรณ์แบบ
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Conditional Routing" desc="กำหนดเงื่อนไขการทำงานที่ซับซ้อนได้แบบ If-Then-Else ที่แม่นยำ" />
                  <FeatureItem title="Data Transformation" desc="จัดระเบียบและแปลงข้อมูลจากรูปแบบหนึ่งไปสู่อีกรูปแบบหนึ่งโดยอัตโนมัติ" />
                  <FeatureItem title="Error Handling" desc="ระบบตรวจจับข้อผิดพลาดและแจ้งเตือนทีมทันทีเมื่อมีข้อมูลไม่ตรงเงื่อนไข" />
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

            {/* Pillar 3: Automated Delivery */}
            <div id="deliver" className="flex flex-col lg:flex-row gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">3. Automated Delivery</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                    ส่งต่อผลลัพธ์ไปยังเป้าหมายอย่างแม่นยำ ไม่ว่าจะเป็นการสร้างรายงาน อัปเดตฐานข้อมูล หรือแจ้งเตือนลูกค้า
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Auto-Reporting" desc="สรุปผลการทำงานส่งเข้า LINE หรือ Email รายวัน/รายสัปดาห์แบบอัตโนมัติ" />
                  <FeatureItem title="CRM Auto-Update" desc="อัปเดตสถานะลูกค้าในระบบหลังบ้านทันทีที่เกิดการสั่งซื้อหรือติดต่อ" />
                  <FeatureItem title="Document Automation" desc="สร้าง Invoice หรือสัญญาโดยใช้ข้อมูลจากระบบโดยตรงแบบไม่ต้องพิมพ์เอง" />
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
              <AppliedIn items={[
                { name: 'E-commerce Auto-Order', link: '#' },
                { name: 'Real-time Stock Sync', link: '#' },
                { name: 'Automated Customer Support', link: '#' }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="automation" 
        serviceName="Workflow Automation" 
        hirePoints={[
          'ธุรกิจที่เบื่อการคีย์งานซ้ำซ้อน',
          'ต้องการลดความผิดพลาดของมนุษย์ให้เป็นศูนย์',
          'ทีมงานที่ต้องการระบบที่ทำงานได้ 24/7'
        ]}
        learnPoints={[
          "ผู้ที่ต้องการวางระบบหลังบ้านให้ทำงานอัตโนมัติ",
          "ผู้บริหารที่ต้องการลดต้นทุนแฝงจากการใช้คนทำงานซ้ำๆ",
          "นักพัฒนาที่ต้องการศึกษาการผสาน API ระดับองค์กร"
        ]}
      />

      <Footer />
    </main>
  );
}
