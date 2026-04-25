'use client';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TrustSection({ dict }: { dict: any }) {
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

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {founder.name}
                  </h2>
                  <p className="text-cyber-blue font-bold tracking-widest uppercase text-sm">
                    {founder.title}
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    {founder.description}
                  </p>
                </div>

                <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                  {standards.map((std: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                      <CheckCircle2 className="text-cyber-blue shrink-0" size={18} />
                      {std}
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest group">
                    พูดคุยกับสถาปนิกโดยตรง <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Decorative Medal Image */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 hidden md:block"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                   <Image 
                    src="/images/home/medal.png" 
                    alt="Gold Medal" 
                    fill 
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Visual Proof / Architecture */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <Image 
                src="/images/home/architecture.png" 
                alt="System Architecture" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-cyber-blue font-black text-xs tracking-widest uppercase">System Showcase</p>
                    <h3 className="text-xl font-bold text-white">Enterprise Scalable Architecture</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-cyber-blue/50 animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-cyber-blue/20 animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5">
                <Shield className="text-cyber-blue mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Technical Excellence</h4>
                <p className="text-gray-500 text-sm font-medium">ออกแบบตามมาตรฐานสูงสุดเพื่อความเสถียรในระดับวินาที</p>
              </div>
              <div className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5">
                <CheckCircle2 className="text-cyber-blue mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Business Result</h4>
                <p className="text-gray-500 text-sm font-medium">ทุกบรรทัดของโค้ดต้องตอบโจทย์ความคุ้มค่าทางธุรกิจ</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
