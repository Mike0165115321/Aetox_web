'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Globe, CheckCircle2, ArrowLeft, Link as LinkIcon, Laptop } from 'lucide-react';
import Link from 'next/link';

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
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all">
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

            <div className="lg:w-1/2 lg:sticky lg:top-32">
               <div className="glass-card p-4 rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="bg-ultra-dark rounded-2xl p-8 aspect-[4/3]">
                     <div className="flex items-center gap-1.5 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                     <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                        <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                     </div>
                     <div className="h-32 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20 flex items-center justify-center">
                        <Laptop className="w-12 h-12 text-cyber-blue opacity-30" />
                     </div>
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
