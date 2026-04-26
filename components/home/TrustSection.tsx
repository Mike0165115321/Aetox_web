'use client';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectSlider from './ProjectSlider';

export default function TrustSection({ dict, projects }: { dict: any, projects: any[] }) {
  if (!dict) return null;
  const { founder, standards } = dict;

  return (
    <section id="trust" className="py-20 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Subtle Architectural Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: The Architect Profile Card */}
          <div className="lg:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card relative p-8 md:p-10 rounded-[40px] border-aetox-border bg-aetox-surface/10 overflow-hidden flex flex-col h-full shadow-xl"
            >
              {/* Award Image - Feature */}
              <div className="mb-8 relative h-48 w-full rounded-3xl overflow-hidden border border-white/10 group/award">
                <Image 
                  src="/images/home/architecture.jpg"
                  alt="National AI Gold Medalist"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                  className="object-cover opacity-60 group-hover/award:opacity-100 transition-opacity duration-700"
                  onError={(e) => { (e.target as any).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aetox-bg via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 text-[9px] font-black tracking-widest uppercase mb-1.5">
                    <Star size={10} className="fill-yellow-500" /> {founder.accolade}
                  </div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider">Recognition of Excellence</h4>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  {/* === แก้ไขชื่อของคุณตรงนี้ === */}
                  <h2 className="text-2xl md:text-4xl font-black text-aetox-text-main leading-tight mb-2 tracking-tight">
                    {founder.name}
                  </h2>
                  {/* === แก้ไขตำแหน่งของคุณตรงนี้ === */}
                  <p className="text-aetox-accent font-black tracking-[0.3em] uppercase text-[10px]">
                    {founder.title}
                  </p>
                </div>
                
                {/* === แก้ไขคำอธิบายของคุณตรงนี้ === */}
                <p className="text-base md:text-lg text-aetox-text-soft font-medium leading-relaxed italic border-l-2 border-aetox-accent/30 pl-8">
                  &quot;{founder.description}&quot;
                </p>

                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  {standards.map((std: string, i: number) => (
                    <div key={i} className="flex items-center gap-3.5 text-aetox-text-main font-bold text-[13px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                      {std}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-aetox-border/50">
                <Link href="/contact" className="group flex items-center justify-between text-aetox-text-main font-black text-[10px] uppercase tracking-[0.3em] hover:text-aetox-accent transition-all">
                  Consult with the Architect <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Portfolio & Balanced Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Elite Portfolio Section - Compact & Full */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col glass-card p-1 rounded-[40px] border-aetox-border bg-black/20 overflow-hidden"
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-aetox-border/50">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />
                   <h3 className="text-aetox-text-main font-black text-xs md:text-sm uppercase tracking-[0.4em]">Elite Portfolio Showcase</h3>
                </div>
                <Link href="/authority" className="text-aetox-text-muted hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
                  View Full Authority
                </Link>
              </div>

              <div className="p-4 md:p-6">
                <ProjectSlider projects={projects} />
              </div>
            </motion.div>

            {/* Strategic Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { 
                  icon: Shield, 
                  title: 'Architectural Excellence', 
                  desc: 'ออกแบบเพื่อความเสถียรและความปลอดภัยสูงสุด รองรับการสเกลระดับ Enterprise' 
                },
                { 
                  icon: ShieldCheck, 
                  title: 'ROI Driven Engineering', 
                  desc: 'เราออกแบบมูลค่าทางธุรกิจที่วัดผลได้จริงในเชิงกำไร' 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="glass-card p-8 md:p-10 rounded-[32px] border-aetox-border bg-aetox-surface/10 hover:bg-aetox-surface/30 transition-all duration-500 group flex flex-col justify-center"
                >
                  <item.icon className="text-aetox-accent mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
                  <h4 className="text-aetox-text-main font-black text-sm md:text-base uppercase tracking-tight mb-4">{item.title}</h4>
                  <p className="text-aetox-text-soft text-[13px] md:text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
