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
}

export default function ServiceCard({ id, title, description, features, relatedProjects, Icon, index }: ServiceCardProps) {
  const CardContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyber-blue/50 group-hover:shadow-cyber-glow transition-all duration-300">
        <Icon className="w-7 h-7 text-cyber-blue" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm mb-6">
        {description}
      </p>

      {features && (
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <Check className="w-3.5 h-3.5 text-cyber-blue mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {relatedProjects && relatedProjects.length > 0 && (
        <div className="mt-auto pt-4 border-t border-white/10 w-full">
          <p className="text-xs text-gray-500 mb-2 font-medium tracking-wider uppercase">Applied In</p>
          <ul className="space-y-2">
            {relatedProjects.map((project, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-cyber-blue hover:text-white transition-colors cursor-pointer">
                <LinkIcon className="w-3 h-3" />
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
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
        <Link href={`/services/${id}`} className="glass-card glass-card-hover group flex flex-col items-start p-8 rounded-2xl relative overflow-hidden h-full block transition-transform duration-300 hover:-translate-y-1">
          {CardContent}
        </Link>
      ) : (
        <div className="glass-card glass-card-hover group flex flex-col items-start p-8 rounded-2xl relative overflow-hidden h-full">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
}
