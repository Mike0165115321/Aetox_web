'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

/* ─── Interactive Automation Showcase ────────────────────────────── */
function AutomationShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Step 01: Intelligent Connect",
      subtitle: "เชื่อมต่อทุกแพลตฟอร์ม",
      desc: "เชื่อมต่อ API จาก ERP, CRM, Marketplace หรือ Social Media ของคุณเข้าด้วยกันอย่างไร้รอยต่อ เพื่อให้ข้อมูลไหลเวียนได้ทันที",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="flex gap-4">
             {['Shopify', 'Lazada', 'Salesforce'].map((app, i) => (
                <motion.div
                  key={app}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-deep-blue/30 text-[10px] text-white"
                >
                  {app}
                </motion.div>
             ))}
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 w-20 h-20 rounded-full bg-deep-blue/20 flex items-center justify-center border border-deep-blue/40"
          >
             <LinkIcon className="w-8 h-8 text-deep-blue" />
          </motion.div>
        </div>
      )
    },
    {
      title: "Step 02: Logical Processing",
      subtitle: "จัดการงานที่น่าเบื่อ",
      desc: "ระบบจะทำหน้าที่ตรวจสอบความถูกต้อง (Validation) ปรับเปลี่ยนรูปแบบข้อมูล (Transformation) และดำเนินการตาม SOP ที่ตั้งไว้ 100%",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="w-full max-w-xs space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     animate={{ x: "0%" }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                     className="h-full w-full bg-deep-blue"
                   />
                </div>
              ))}
           </div>
           <Zap className="mt-8 w-12 h-12 text-deep-blue animate-pulse" />
        </div>
      )
    },
    {
      title: "Step 03: Automated Delivery",
      subtitle: "ส่งมอบผลลัพธ์ทันที",
      desc: "ออกใบแจ้งหนี้, แจ้งเตือนฝ่ายขาย, หรืออัปเดตสต็อกสินค้าได้แบบ Real-time โดยที่คุณไม่ต้องคลิกเลยแม้แต่ครั้งเดียว",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-4 rounded-xl bg-deep-blue/10 border border-deep-blue/30 text-center">
                 <div className="text-[8px] text-deep-blue font-bold">INVOICE SENT</div>
              </motion.div>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="p-4 rounded-xl bg-deep-blue/10 border border-deep-blue/30 text-center">
                 <div className="text-[8px] text-deep-blue font-bold">LINE NOTIFY</div>
              </motion.div>
           </div>
           <CheckCircle2 className="mt-8 w-12 h-12 text-deep-blue" />
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
                <span className="text-deep-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span>
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
              className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-deep-blue shadow-deep-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-deep-blue/30 transition-all"
          >
             ←
          </button>
          <button 
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-deep-blue/20 hover:border-deep-blue/50 transition-all"
          >
             →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />

      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-deep-blue transition-colors mb-12 group">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-deep-blue/10 border-deep-blue/20 text-deep-blue text-sm font-bold tracking-widest uppercase">
                  <Zap className="w-4 h-4" /> Execution Layer
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Workflow<br />
                  <span className="text-deep-blue drop-shadow-deep-glow">Automation</span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed">
                  เปลี่ยนความวุ่นวายให้เป็นความแม่นยำ 100% เราเชื่อมต่อทุกซอฟต์แวร์ที่คุณใช้เข้าด้วยกัน เพื่อให้งาน Manual ที่น่าเบื่อหายไป และเปลี่ยนเป็นระบบอัตโนมัติที่ทำงานได้ 24/7
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "API Integration", desc: "เชื่อมต่อ ERP, CRM และ Social Media ได้ไร้รอยต่อ" },
                  { title: "Auto-Document", desc: "ออกเอกสารและใบกำกับภาษีโดยไม่ต้องแตะเลย" },
                  { title: "Data Pipeline", desc: "ประมวลผลข้อมูลขนาดใหญ่ด้วยความเร็วระดับอุตสาหกรรม" },
                  { title: "Smart Alerts", desc: "แจ้งเตือนอัจฉริยะผ่าน Line / Email เมื่อมีเหตุการณ์สำคัญ" }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-deep-blue/30 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-deep-blue shrink-0" />
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium">
                    <LinkIcon className="w-3 h-3" /> E-Commerce Auto-Billing
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium">
                    <LinkIcon className="w-3 h-3" /> Real-estate Management System
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2 lg:sticky lg:top-32 w-full">
               <AutomationShowcase />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
