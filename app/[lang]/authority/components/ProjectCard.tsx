'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectCard({ project }: { project: any }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="aetox-card group flex flex-col h-full relative overflow-hidden"
    >
      {/* Clickable Area for Detail Page */}
      <Link href={`/authority/${project.category}/${project.slug}`} className="absolute inset-0 z-30" />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-aetox-surface-lowest">
        <div className="absolute inset-0 bg-gradient-to-t from-aetox-bg to-transparent z-10 opacity-60" />
        
        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-1000">
          {!imgError ? (
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-aetox-surface-low">
              <span className="text-aetox-text-muted font-black text-fluid-h2 opacity-10 uppercase tracking-tighter text-center px-4">
                {project.title}
              </span>
            </div>
          )}
        </div>
        
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-full bg-aetox-bg/80 backdrop-blur-md border border-aetox-accent/20 text-fluid-label font-bold text-aetox-accent uppercase tracking-widest">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-fluid-h3 font-bold text-aetox-text-main group-hover:text-aetox-accent transition-colors tracking-tight">
            {project.title}
          </h3>
          <ShieldCheck className="w-5 h-5 text-aetox-accent opacity-40 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <p className="text-fluid-p text-aetox-text-soft leading-relaxed mb-8 flex-grow font-medium">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="text-fluid-label font-bold text-aetox-text-soft px-3 py-1.5 bg-aetox-surface-lowest rounded-xl border border-aetox-border uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions & Meta */}
        <div className="flex items-center justify-between pt-8 border-t border-aetox-border relative z-40">
          <div className="flex flex-col gap-1">
            <span className="text-fluid-label text-aetox-text-muted uppercase tracking-[0.2em] font-bold">Industry Target</span>
            <span className="text-fluid-sm text-aetox-text-soft font-black uppercase tracking-widest">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-aetox-surface-lowest hover:bg-aetox-accent hover:text-white border border-aetox-border hover:border-aetox-accent rounded-xl transition-all active:scale-95 group/btn shadow-sm"
              >
                <Code2 className="w-4 h-4 text-aetox-text-main group-hover/btn:text-white transition-colors" />
                <span className="text-fluid-label font-bold uppercase tracking-widest">Case Study</span>
              </a>
            )}
            <span className="text-fluid-sm font-bold text-aetox-text-muted ml-2">{project.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
