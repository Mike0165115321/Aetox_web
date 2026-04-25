'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, ArrowRight, HelpCircle, CheckCircle2, Layout, Award } from 'lucide-react';
import Link from 'next/link';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

export default function ServicesClient({ dict, navDict }: { dict: any, navDict: any }) {
  const iconMap: any = {
    'ai-agents': Bot,
    'automation': Zap,
    'web-systems': Globe
  };

  const colorMap: any = {
    'ai-agents': { color: 'text-cyber-blue', bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/20' },
    'automation': { color: 'text-deep-blue', bg: 'bg-deep-blue/10', border: 'border-deep-blue/20' },
    'web-systems': { color: 'text-cyber-blue', bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/20' }
  };

  const servicesSections: NavSection[] = [
    { id: 'services-hero', label: 'Solution Hub', num: 'INT', icon: <Layout size={18} /> },
    { id: 'services-grid', label: 'Expert Services', num: '01', icon: <Award size={18} />, offset: 60 },
  ];

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <FloatingNav sections={servicesSections} />
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />
      
      <section id="services-hero" className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
            >
              {dict.hero.title.white} <br />
              <span className="text-cyber-blue drop-shadow-cyber-glow">{dict.hero.title.accent}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed max-w-2xl"
            >
              {dict.hero.description}
            </motion.p>
          </div>

          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.services.map((service: any, i: number) => {
              const Icon = iconMap[service.id];
              const colors = colorMap[service.id];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <Link href={service.path} className="block h-full">
                    <div className={`h-full glass-card p-10 rounded-3xl border ${colors.border} transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:shadow-cyber-glow/10 flex flex-col`}>
                      <div className="flex-1 relative">
                        {service.highlight && (
                          <div className="absolute -top-2 -right-2 group/info z-20">
                             <button 
                               onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                               className="p-2 rounded-full hover:bg-white/5 transition-colors cursor-help"
                             >
                               <HelpCircle className="w-4 h-4 text-gray-600 group-hover/info:text-cyber-blue transition-colors" />
                             </button>
                             <div className="absolute right-0 top-10 w-80 p-5 rounded-2xl bg-[#0F172A]/95 backdrop-blur-3xl border border-white/10 opacity-0 group-hover/info:opacity-100 pointer-events-none transition-all transform translate-y-2 group-hover/info:translate-y-0 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                                  <p className="text-[11px] font-black text-cyber-blue uppercase tracking-widest">Technical Insights</p>
                                </div>
                                <p className="text-white text-xs leading-relaxed font-semibold">
                                  {service.highlight}
                                </p>
                             </div>
                          </div>
                        )}

                        <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-8 border border-white/5`}>
                          <Icon className={`w-8 h-8 ${colors.color}`} />
                        </div>
                        
                        <div className={`${colors.color} text-xs font-bold uppercase tracking-widest mb-4`}>
                          {service.tag}
                        </div>
                        
                        <div className="space-y-6 flex-1">
                          <div>
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors leading-tight">
                              {service.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {service.desc}
                            </p>
                          </div>

                          <div className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} relative overflow-hidden group/benefit`}>
                             <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bg.replace('/10', '')} shadow-cyber-glow`} />
                             <p className={`text-[10px] font-black ${colors.color} uppercase tracking-[0.2em] mb-3`}>สิ่งที่คุณจะได้รับ</p>
                             <p className="text-white text-base font-black leading-snug italic">
                               &quot;{service.benefit}&quot;
                             </p>
                          </div>

                          {/* Suitable For list removed for cleaner index layout - preserved in sub-pages */}
                        </div>
                        
                        <div className="mt-10">
                          <div className={`w-full py-4 px-6 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center gap-3 text-white font-bold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-[1.02] active:scale-[0.98]`}>
                            {dict.ctaLabel} 
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className={`absolute -inset-2 rounded-[40px] ${colors.bg} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
