'use client';
import { Bot, Zap, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';

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
    <section className="py-24 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
