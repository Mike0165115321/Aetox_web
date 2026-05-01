'use client';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectSlider from './ProjectSlider';

export default function TrustSection({ dict, projects }: { dict: any, projects: any[] }) {
  if (!dict) return null;
  
  const trust = dict.trust || dict;
  const founder = trust?.founder || {};
  const standards = trust?.standards || [];

  return (
    <section id="trust" className="py-12 md:py-20 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left: The Architect Profile Card */}
          <div className="lg:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aetox-card relative p-6 md:p-10 !rounded-[40px] overflow-hidden flex flex-col h-full shadow-xl transition-all duration-500"
            >
              {/* Award Image - Feature */}
              <div className="mb-6 md:mb-8 relative h-36 md:h-48 w-full rounded-2xl md:rounded-3xl overflow-hidden border border-aetox-border group/award">
                <Image 
                   src="/images/home/architecture.jpg"
                   alt="National AI Gold Medalist"
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                   className="object-cover opacity-60 group-hover/award:opacity-100 transition-opacity duration-700"
                   onError={(e) => { (e.target as any).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aetox-bg via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-5 right-5 md:bottom-5 md:left-6 md:right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 text-[10px] font-black tracking-widest uppercase mb-1.5">
                    <Star size={10} className="fill-yellow-500" /> {founder.accolade}
                  </div>
                  <h4 className="text-aetox-text-main font-bold text-xs md:text-sm tracking-wide">{trust.recognition}</h4>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 flex-1">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-aetox-text-main leading-tight mb-2 tracking-tight">
                    {founder.name}
                  </h2>
                  <p className="text-aetox-accent font-bold tracking-wide text-xs md:text-sm uppercase">
                    {founder.title}
                  </p>
                </div>
                
                <p className="text-sm md:text-base text-aetox-text-soft font-medium leading-relaxed italic border-l-2 border-aetox-accent/30 pl-4 md:pl-6 opacity-90 whitespace-pre-line">
                  &quot;{founder.description}&quot;
                </p>

                <div className="grid grid-cols-1 gap-3 md:gap-3.5 pt-2">
                  {standards.map((std: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 md:gap-3.5 text-aetox-text-main font-bold text-[12px] md:text-[13px]">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                      {std}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-aetox-border">
                <Link href="/contact" className="group flex items-center justify-between text-aetox-text-main font-bold text-sm hover:text-aetox-accent transition-all">
                  {dict.common?.labels?.consultUs} <ArrowRight className="group-hover:translate-x-3 transition-transform w-4 h-4 md:w-[18px] md:h-[18px]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Portfolio & Balanced Content */}
          <div className="lg:col-span-7 space-y-4 md:space-y-8">
            {/* Elite Portfolio Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aetox-card p-1 !rounded-[40px] overflow-hidden transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5 border-b border-aetox-border">
                <div className="flex items-center gap-3 md:gap-4">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />
                   <h3 className="text-aetox-text-main font-bold text-sm md:text-base tracking-tight uppercase">{trust.portfolio}</h3>
                </div>
                <Link href="/authority" className="text-aetox-text-muted hover:text-aetox-text-main text-xs md:text-sm font-bold tracking-widest uppercase transition-colors">
                  {trust.viewFull}
                </Link>
              </div>

              <div className="overflow-hidden">
                <ProjectSlider projects={projects} viewDetailsLabel={dict.common?.labels?.viewDetails} />
              </div>
            </motion.div>

            {/* Strategic Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {(trust.values || []).map((item: any, idx: number) => {
                const icons = [Shield, ShieldCheck];
                const Icon = icons[idx % icons.length];
                return (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="aetox-card p-6 md:p-10 !rounded-[32px] group flex flex-col justify-center transition-all duration-500"
                  >
                    <Icon className="text-aetox-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 w-7 h-7 md:w-8 md:h-8" />
                    <h4 className="text-aetox-text-main font-bold text-sm md:text-lg tracking-tight mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-aetox-text-soft text-[12px] md:text-sm font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
