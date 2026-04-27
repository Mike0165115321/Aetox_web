'use client';
import { LucideIcon, Check, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  features?: string[];
  relatedProjects?: string[];
  Icon: LucideIcon;
  index: number;
  deploymentLabel?: string;
}

export default function ServiceCard({ id, title, description, features, relatedProjects, Icon, index, deploymentLabel }: ServiceCardProps) {
  const CardContent = (
    <div className="flex flex-col h-full">
      <div className="w-14 h-14 rounded-2xl bg-aetox-bg border border-aetox-border flex items-center justify-center mb-10 group-hover:border-aetox-accent/50 group-hover:text-aetox-accent transition-all duration-500 shadow-aetox-card">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-black text-aetox-text-main mb-4 uppercase tracking-tight group-hover:text-aetox-accent transition-colors">
        {title}
      </h3>
      <p className="text-fluid-p text-aetox-text-soft mb-8 font-medium">
        {description}
      </p>

      {features && (
        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-aetox-text-soft uppercase tracking-widest leading-tight">
              <Check className="w-3.5 h-3.5 text-aetox-accent mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {relatedProjects && relatedProjects.length > 0 && (
        <div className="mt-auto pt-8 border-t border-aetox-border/50 w-full">
          <p className="text-[9px] text-aetox-text-muted mb-4 font-black tracking-[0.2em] uppercase">{deploymentLabel || 'Enterprise Deployment'}</p>
          <ul className="space-y-3">
            {relatedProjects.map((project, i) => (
              <li key={i} className="flex items-center gap-3 text-[11px] font-black text-aetox-text-soft hover:text-aetox-text-main transition-colors cursor-pointer tracking-tight">
                <LinkIcon className="w-3 h-3 text-aetox-accent" />
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      {id ? (
        <Link href={`/services/${id}`} className="glass-card group flex flex-col p-10 rounded-[40px] border-aetox-border bg-aetox-surface/20 relative overflow-hidden h-full transition-all duration-500 hover:bg-aetox-surface/40 hover:-translate-y-2">
          {CardContent}
        </Link>
      ) : (
        <div className="glass-card group flex flex-col p-10 rounded-[40px] border-aetox-border bg-aetox-surface/20 relative overflow-hidden h-full transition-all duration-500 hover:bg-aetox-surface/40">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
}
