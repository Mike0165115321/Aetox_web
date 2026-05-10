'use client';
import { Bot, Zap, Globe, Boxes, Component } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import BackgroundIcon from './visuals/BackgroundIcon';

export default function ServiceSection({ dict, lang }: { dict?: any, lang: string }) {
  const iconMap: any = {
    'ai-agents': Bot,
    'automation': Zap,
    'web-systems': Globe
  };

  if (!dict) return null;
  const content = dict;

  return (
    <section id="services" className="py-16 md:py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Optimized Background Architectural Elements */}
      <BackgroundIcon Icon={Boxes} position="top-left" size={500} opacity={0.06} />
      <BackgroundIcon Icon={Component} position="bottom-right" size={500} opacity={0.06} />

      <div className="container relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-aetox-accent font-bold text-xs tracking-wider mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
            {content.badge}
          </motion.div>
          <h2 className="text-fluid-h1 font-bold text-aetox-text-main">{content.title}</h2>
          <p className="text-fluid-p text-aetox-text-soft font-bold uppercase tracking-widest">
            {content.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((service: any, index: number) => {
            const Icon = iconMap[service.id] || Bot;
            return (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title} 
                description={service.description} 
                features={service.features}
                relatedProjects={service.relatedProjects}
                Icon={Icon} 
                index={index}
                deploymentLabel={content.common?.general?.deploymentLabel}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
