'use client';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, Icon, index }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glass-card-hover group flex flex-col items-start p-8 rounded-2xl relative overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyber-blue/50 group-hover:shadow-cyber-glow transition-all duration-300">
        <Icon className="w-7 h-7 text-cyber-blue" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
