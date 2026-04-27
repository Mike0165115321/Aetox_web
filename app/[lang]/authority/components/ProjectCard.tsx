'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectCard({ project }: { project: any }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card group rounded-3xl overflow-hidden border-white/5 hover:border-cyber-blue/30 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Clickable Area for Detail Page */}
      <Link href={`/authority/${project.category}/${project.slug}`} className="absolute inset-0 z-30" />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-ultra-dark to-transparent z-10 opacity-60" />
        
        <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700">
          {!imgError ? (
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5">
              <span className="text-gray-700 font-black text-4xl opacity-20 uppercase tracking-tighter text-center px-4">
                {project.title}
              </span>
            </div>
          )}
        </div>
        
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-full bg-ultra-dark/80 backdrop-blur-md border border-cyber-blue/20 text-[10px] font-bold text-cyber-blue uppercase tracking-widest">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyber-blue transition-colors">
            {project.title}
          </h3>
          <ShieldCheck className="w-5 h-5 text-cyber-blue/50" />
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="text-[10px] font-medium text-gray-400 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions & Meta */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-40">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">Client</span>
            <span className="text-[11px] text-gray-400 font-bold uppercase">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-95 group/btn"
              >
                <Code2 className="w-4 h-4 text-white group-hover/btn:text-cyber-blue transition-colors" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Repo</span>
              </a>
            )}
            <span className="text-[11px] font-bold text-gray-600 ml-2">{project.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
