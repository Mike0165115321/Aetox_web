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
    <section id="trust" className="py-32 relative overflow-hidden border-t border-aetox-border">
      {/* Optimized Minimal Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 text-aetox-accent/[0.03]">
          <Award size={500} strokeWidth={1} />
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* Left: Founder Profile (The Architect) */}
          <div className="w-full lg:w-5/12 flex">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex w-full"
            >
              <div className="glass-card relative p-10 md:p-14 rounded-[48px] border-aetox-border bg-aetox-surface/20 overflow-hidden flex flex-col w-full shadow-2xl">
                
                {/* Gold Medalist Badge — Prestigious, not flashy */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black tracking-widest uppercase mb-10 self-start">
                  <Star size={12} className="fill-yellow-500" /> {founder.accolade}
                </div>

                <div className="space-y-6 flex-1">
                  <h2 className="text-fluid-h2 font-black text-aetox-text-main">
                    {founder.name}
                  </h2>
                  <p className="text-aetox-accent font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                    {founder.title}
                  </p>
                  <p className="text-fluid-p text-aetox-text-soft font-medium">
                    {founder.description}
                  </p>
                </div>

                <div className="mt-12 pt-10 border-t border-aetox-border/50 space-y-4">
                  {standards.map((std: string, i: number) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-4 text-aetox-text-main font-bold text-xs"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
                      {std}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link href="/contact" className="group flex items-center gap-3 text-aetox-text-main font-black text-[10px] uppercase tracking-[0.3em] hover:text-aetox-accent transition-colors">
                    Consult with the Architect <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Award Image Spot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                className="absolute -top-12 -right-8 w-40 h-40 hidden xl:block z-20"
              >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-aetox-border shadow-2xl bg-aetox-surface flex items-center justify-center">
                  <Image 
                    src="/images/home/architecture.jpg"
                    alt="National AI Award"
                    fill
                    sizes="160px"
                    className="object-cover opacity-60 hover:opacity-90 transition-opacity duration-700"
                    onError={(e) => { (e.target as any).style.display = 'none'; }}
                  />
                  <Award className="w-10 h-10 text-aetox-accent/40 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-aetox-bg to-transparent opacity-60" />
                </div>
                <div className="absolute -bottom-2 right-4 bg-aetox-accent text-white text-[8px] font-black px-3 py-1 rounded-full shadow-aetox-glow">
                  GOLD MEDAL
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Portfolio Showcase */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />
                   <p className="text-aetox-text-main font-black text-[10px] uppercase tracking-[0.4em]">Elite Portfolio</p>
                </div>
                <Link href="/authority" className="text-aetox-text-muted hover:text-aetox-accent text-[9px] font-black uppercase tracking-widest transition-colors">
                  View Full Authority
                </Link>
              </div>

              <div className="flex-1">
                <ProjectSlider projects={projects} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {[
                { icon: Shield, title: 'Architectural Excellence', desc: 'ทุกองค์ประกอบถูกออกแบบเพื่อความเสถียรและความปลอดภัยสูงสุด' },
                { icon: CheckCircle2, title: 'ROI Driven Engineering', desc: 'เราไม่ได้เขียนแค่โค้ด แต่เราออกแบบมูลค่าทางธุรกิจที่วัดผลได้จริง' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="glass-card p-8 rounded-[32px] border-aetox-border bg-aetox-surface/20 group hover:bg-aetox-surface/40 transition-all duration-500"
                >
                  <item.icon className="text-aetox-accent mb-6 group-hover:scale-110 transition-transform duration-500" size={24} />
                  <h4 className="text-aetox-text-main font-black text-sm uppercase tracking-tight mb-3">{item.title}</h4>
                  <p className="text-aetox-text-soft text-[13px] font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
