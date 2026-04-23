'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, CheckCircle2, ArrowLeft, Link as LinkIcon, Laptop, Bot } from 'lucide-react';
import Link from 'next/link';

/* ─── Interactive Web Showcase ────────────────────────────── */
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
                 <span className="text-[10px] text-white font-mono">NEXT.JS APP ROUTER</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-cyber-glow" />
                 <span className="text-[10px] text-white font-mono">TAILWIND CSS 3.4</span>
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
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-10 bg-cyber-blue/40 border-t-2 border-cyber-blue rounded-t-lg"
                />
              ))}
           </div>
           <div className="mt-8 text-4xl font-black text-white">99<span className="text-sm text-cyber-blue">%</span></div>
        </div>
      )
    },
    {
      title: "Step 03: AI Integration",
      subtitle: "เชื่อมต่อโลกอนาคต",
      desc: "เตรียมความพร้อมของข้อมูลและโครงสร้างเว็บให้รองรับการทำงานร่วมกับ AI Agents และระบบอัตโนมัติได้อย่างสมบูรณ์",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative">
              <Laptop className="w-24 h-24 text-gray-700" />
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
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
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="flex-1">
              {steps[activeStep].visual}
            </div>
            <div className="p-8 md:p-12 bg-ultra-dark/90 backdrop-blur-xl border-t border-white/5 space-y-4">
              <div>
                <span className="text-cyber-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-cyber-blue shadow-cyber-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyber-blue/30 transition-all"
          >
             ←
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all"
          >
             →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WebSystemsPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />

      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyber-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue text-sm font-bold tracking-widest uppercase">
                  <Globe className="w-4 h-4" /> Foundation Layer
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Full-Stack<br />
                  <span className="text-cyber-blue drop-shadow-cyber-glow">Web Systems</span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed">
                  สร้างโครงสร้างพื้นฐานดิจิทัลที่มั่นคงและสวยงาม ด้วยเทคโนโลยี Modern Web (Next.js, Tailwind, Cloud) ที่รองรับผู้ใช้งานจำนวนมากและพร้อมเชื่อมต่อกับ AI ในอนาคต
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Next.js Excellence", desc: "ความเร็วระดับสูงสุด Lighthouse Score 95+ ทุก Metric" },
                  { title: "Cloud Native", desc: "Deploy บน AWS / Vercel รองรับการขยายตัวแบบ Auto-scale" },
                  { title: "B2B Security", desc: "Auth0, JWT, Rate Limiting และ Encryption มาตรฐานสากล" },
                  { title: "Custom Dashboard", desc: "ระบบ Admin Panel ที่ใช้งานง่ายและรองรับ Real-time Data" }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-cyber-blue shrink-0" />
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-cyber-blue/20 text-cyber-blue text-xs font-medium">
                    <LinkIcon className="w-3 h-3" /> Aetox Core Platform
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-cyber-blue/20 text-cyber-blue text-xs font-medium">
                    <LinkIcon className="w-3 h-3" /> Enterprise CRM Dashboard
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2 lg:sticky lg:top-32 w-full">
               <WebShowcase />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
