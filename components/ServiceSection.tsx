'use client';
import { Bot, Zap, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

export default function ServiceSection({ dict }: { dict?: any }) {
  const iconMap: any = {
    'ai-agents': Bot,
    'automation': Zap,
    'web-systems': Globe
  };

  const content = dict || {
    title: "Core Architecture",
    description: "บริการหลักที่เราเชี่ยวชาญ เพื่อยกระดับองค์กรของคุณสู่ยุค Digital & AI เต็มรูปแบบ",
    items: []
  };

  return (
    <section className="py-32 relative bg-aetox-bg overflow-hidden border-t border-aetox-border">
      <div className="container">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-aetox-accent font-black text-[10px] tracking-[0.2em] uppercase mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
            Strategic Capabilities
          </motion.div>
          <h2 className="text-fluid-h1 font-black text-aetox-text-main uppercase">{content.title}</h2>
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
