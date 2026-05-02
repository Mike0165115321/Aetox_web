'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Database, Layout } from 'lucide-react';
import ProjectCard from './ProjectCard';

const iconMap: any = {
  Layout: Layout,
  Brain: Brain,
  Zap: Zap,
  Database: Database
};

export default function ProjectShowcase({ content }: { content: any }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? content.items 
    : content.items.filter((item: any) => item.category === activeTab);

  return (
    <section className="pb-32 relative bg-aetox-bg z-10">
      <div className="container mx-auto">
        {/* Layer Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {content.categories.map((cat: any) => {
            const Icon = iconMap[cat.icon] || Layout;
            const isActive = activeTab === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  flex items-center gap-3 px-8 py-3.5 rounded-2xl border transition-all duration-500 active:scale-95
                  ${isActive 
                    ? 'bg-aetox-accent text-white border-aetox-accent shadow-aetox-glow' 
                    : 'bg-aetox-surface-lowest text-aetox-text-soft border-aetox-border hover:bg-aetox-surface-low'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-aetox-accent'}`} />
                <span className="text-fluid-label font-bold uppercase tracking-[0.2em]">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 border border-dashed border-aetox-border rounded-[40px] bg-aetox-surface-lowest/50">
            <p className="text-aetox-text-muted font-bold uppercase tracking-[0.3em] text-fluid-sm">
              {content.noItems || "Coming Soon..."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
