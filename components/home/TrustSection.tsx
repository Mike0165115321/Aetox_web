'use client';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, ArrowRight, Layout } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectSlider from './ProjectSlider';

export default function TrustSection({ dict, projects }: { dict: any, projects: any[] }) {
  if (!dict) return null;
  const { founder, standards } = dict;

  return (
    <section id="trust" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Founder Profile */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyber-blue/20 to-transparent rounded-[40px] blur-2xl opacity-50" />
              <div className="glass-card relative p-8 md:p-12 rounded-[40px] border border-white/10 overflow-hidden bg-black/40">
                
                {/* Accolade Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black tracking-widest uppercase mb-8">
                  <Award size={14} /> {founder.accolade}
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-4xl font-black text-white leading-tight text-balance">
                    {founder.name}
                  </h2>
                  <p className="text-cyber-blue font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm">
                    {founder.title}
                  </p>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium">
                    {founder.description}
                  </p>
                </div>

                <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/5 space-y-3 md:space-y-4">
                  {standards.map((std: string, i: number) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                      className="flex items-center gap-3 text-white font-bold text-xs md:text-sm"
                    >
                      <CheckCircle2 className="text-cyber-blue shrink-0" size={16} />
                      {std}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 md:mt-12">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-black text-xs md:text-sm uppercase tracking-widest group">
                    พูดคุยกับสถาปนิกโดยตรง <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}><ArrowRight size={14} /></motion.div>
                  </Link>
                </div>
              </div>

              {/* Award Ceremony Photo Spot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
                className="absolute -top-12 -right-12 w-48 h-48 hidden xl:block group"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl bg-black/60 backdrop-blur-xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent pointer-events-none" />
                  
                  <Image 
                    src="/images/home/architecture.jpg"
                    alt="Award Ceremony"
                    fill
                    sizes="192px"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    onError={(e) => {
                      (e.target as any).style.display = 'none';
                    }}
                  />
                  
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Award className="w-12 h-12 text-yellow-500/40 group-hover:scale-110 group-hover:text-yellow-500 transition-all relative z-10" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-[9px] font-black px-3 py-1 rounded-lg shadow-cyber-glow">
                   GOLD MEDALIST
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Elite Projects Slider */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-cyber-glow animate-pulse" />
                   <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Elite Project Showcase</p>
                </div>
                <Link href="/authority" className="text-gray-500 hover:text-cyber-blue text-[10px] font-bold uppercase tracking-widest transition-colors">
                  ดูผลงานทั้งหมด
                </Link>
              </div>

              <ProjectSlider projects={projects} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { icon: Shield, title: 'Technical Excellence', desc: 'ออกแบบตามมาตรฐานสูงสุดเพื่อความเสถียรในระดับวินาที' },
                { icon: CheckCircle2, title: 'Business Result', desc: 'ทุกบรรทัดของโค้ดต้องตอบโจทย์ความคุ้มค่าทางธุรกิจ' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                  className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5 hover:border-cyber-blue/30 transition-all group"
                >
                  <item.icon className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="text-white font-bold mb-2 group-hover:text-cyber-blue transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
