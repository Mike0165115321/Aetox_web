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

  const servicesSections: NavSection[] = [
    { id: 'services-hero', label: 'Solution Hub', num: 'INT', icon: <Layout size={18} /> },
    { id: 'services-grid', label: 'Expert Services', num: '01', icon: <Award size={18} />, offset: 60 },
  ];

  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative pt-20 bg-aetox-bg">
      <FloatingNav sections={servicesSections} />
      <Navbar dict={navDict.navbar} />
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="aetox-grid-overlay" />
        <div className="aetox-aura-primary top-[-10%] left-[-5%]" />
        <div className="aetox-aura-secondary bottom-[-10%] right-[-5%]" />
      </div>

      <section id="services-hero" className="pt-32 pb-16 relative z-10 scroll-mt-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-aetox-accent font-bold text-xs tracking-[0.3em] uppercase mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
              Service Architecture
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-fluid-h1 font-black text-aetox-text-main mb-8 leading-[1.1] tracking-tighter"
            >
              {dict.hero.title.white} <br />
              <span className="text-aetox-accent drop-shadow-aetox-glow">{dict.hero.title.accent}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-aetox-text-soft text-xl leading-relaxed max-w-2xl font-medium"
            >
              {dict.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      <section id="services-grid" className="pb-32 relative z-10 scroll-mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dict.services.map((service: any, i: number) => {
              const Icon = iconMap[service.id] || Bot;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={service.path} className="block h-full">
                    <div className="aetox-card p-10 h-full flex flex-col hover:-translate-y-2 group-hover:border-aetox-accent/30">
                      <div className="flex-1 relative">
                        {service.highlight && (
                          <div className="absolute -top-2 -right-2 group/info z-20">
                             <div className="p-2 rounded-full hover:bg-aetox-accent/10 transition-colors cursor-help">
                               <HelpCircle className="w-4 h-4 text-aetox-text-muted group-hover/info:text-aetox-accent transition-colors" />
                             </div>
                             <div className="absolute right-0 top-10 w-80 p-6 rounded-[32px] bg-aetox-surface-highest/95 backdrop-blur-3xl border border-aetox-border opacity-0 group-hover/info:opacity-100 pointer-events-none transition-all transform translate-y-2 group-hover/info:translate-y-0 z-50 shadow-aetox-card">
                                <div className="flex items-center gap-2 mb-4">
                                  <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                                  <p className="text-aetox-accent text-[11px] font-black uppercase tracking-widest">{dict.technicalLabel}</p>
                                </div>
                                <p className="text-aetox-text-main text-xs leading-relaxed font-bold">
                                   {service.highlight}
                                </p>
                             </div>
                          </div>
                        )}

                        <div className="w-16 h-16 rounded-2xl bg-aetox-accent/10 flex items-center justify-center mb-10 border border-aetox-border group-hover:border-aetox-accent/40 group-hover:shadow-aetox-glow/10 transition-all duration-500">
                          <Icon className="w-8 h-8 text-aetox-accent" />
                        </div>
                        
                        <div className="text-aetox-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                          {service.tag}
                        </div>
                        
                        <div className="space-y-8 flex-1">
                          <div>
                            <h2 className="text-fluid-h3 font-black text-aetox-text-main mb-4 group-hover:text-aetox-accent transition-colors tracking-tight">
                              {service.title}
                            </h2>
                            <p className="text-aetox-text-soft text-sm md:text-base leading-relaxed font-medium">
                              {service.desc}
                            </p>
                          </div>

                          <div className="p-8 rounded-[32px] bg-aetox-accent/5 border border-aetox-accent/10 relative overflow-hidden group/benefit group-hover:bg-aetox-accent/10 transition-colors duration-500">
                             <div className="absolute left-0 top-0 bottom-0 w-1 bg-aetox-accent shadow-aetox-glow" />
                             <p className="text-aetox-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 opacity-80">{dict.benefitLabel}</p>
                             <p className="text-aetox-text-main text-base font-bold leading-relaxed italic tracking-tight">
                                &quot;{service.benefit}&quot;
                             </p>
                          </div>
                        </div>
                        
                        <div className="mt-12">
                          <div className="w-full py-5 px-8 rounded-2xl bg-aetox-surface-lowest border border-aetox-border flex items-center justify-center gap-3 text-aetox-text-main font-bold text-sm tracking-widest uppercase transition-all duration-300 group-hover:bg-aetox-accent group-hover:text-white group-hover:border-aetox-accent group-hover:shadow-aetox-glow">
                            {dict.ctaLabel} 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
