'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Code2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="glass-card group rounded-3xl overflow-hidden border-white/5 hover:border-cyber-blue/30 transition-all duration-500 flex flex-col h-full relative"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-ultra-dark to-transparent z-10 opacity-60" />
        
        {/* Real Image with Placeholder Fallback */}
        <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e: any) => {
              // ถ้าไม่มีรูปจริง จะแสดงข้อความเป็น Placeholder แทน
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback Text if Image fails to load */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <span className="text-gray-700 font-black text-4xl opacity-20 uppercase tracking-tighter text-center px-4">
              {project.title}
            </span>
          </div>
        </div>
        
        {/* Category Tag */}
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
          {project.liveUrl ? (
            <Link href={project.liveUrl} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-cyber-blue transition-colors">
              <ExternalLink className="w-4 h-4 text-white" />
            </Link>
          ) : (
            <ShieldCheck className="w-5 h-5 text-cyber-blue/50" />
          )}
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
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">Client</span>
            <span className="text-[11px] text-gray-400 font-bold uppercase">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <Link 
                href={project.githubUrl} 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-95 group/btn"
              >
                <Code2 className="w-4 h-4 text-white group-hover/btn:text-cyber-blue transition-colors" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Repo</span>
              </Link>
            )}
            <span className="text-[11px] font-bold text-gray-600 ml-2">{project.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
