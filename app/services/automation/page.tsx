'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

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
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-deep-blue/30 transition-all">
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

            <div className="lg:w-1/2 lg:sticky lg:top-32">
               <div className="glass-card p-10 rounded-3xl border border-deep-blue/20 relative overflow-hidden group aspect-square flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/10 to-transparent opacity-50" />
                  <Zap className="w-32 h-32 text-deep-blue mx-auto mb-8 animate-pulse" />
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="h-full w-1/3 bg-deep-blue" 
                       />
                    </div>
                    <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/5 rounded-full" />
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
