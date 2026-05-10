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
  lang: string;
}

export default function ServiceCard({ id, title, description, features, relatedProjects, Icon, index, deploymentLabel, lang }: ServiceCardProps) {
  const CardContent = (
    <div className="flex flex-col h-full">
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-aetox-bg border border-aetox-border flex items-center justify-center mb-6 md:mb-10 group-hover:border-aetox-accent/50 group-hover:text-aetox-accent transition-all duration-500 shadow-aetox-card">
        <Icon className="w-5 h-5 md:w-7 md:h-7" />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-aetox-text-main mb-4 tracking-tight group-hover:text-aetox-accent transition-colors">
        {title}
      </h3>
      <p className="text-fluid-p text-aetox-text-soft mb-8 font-medium">
        {description}
      </p>

      {features && (
        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-fluid-label font-bold text-aetox-text-soft uppercase tracking-widest leading-tight">
              <Check className="w-3.5 h-3.5 text-aetox-accent mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {relatedProjects && relatedProjects.length > 0 && (
        <div className="mt-auto pt-8 border-t border-aetox-border/50 w-full">
          <p className="text-fluid-label text-aetox-text-muted mb-4 font-bold tracking-wide">{deploymentLabel || 'Enterprise Deployment'}</p>
          <ul className="space-y-3">
            {relatedProjects.map((project, i) => (
              <li key={i} className="flex items-center gap-3 text-fluid-sm font-bold text-aetox-text-soft hover:text-aetox-text-main transition-colors cursor-pointer tracking-tight">
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
        <Link href={`/${lang}/services/${id}`} className="aetox-card group flex flex-col p-5 md:p-10 h-full hover:-translate-y-2">
          {CardContent}
        </Link>
      ) : (
        <div className="aetox-card group flex flex-col p-5 md:p-10 h-full">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
}
