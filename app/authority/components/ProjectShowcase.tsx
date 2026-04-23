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
    <section className="pb-32 relative">
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
                  flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 active:scale-95
                  ${isActive 
                    ? 'bg-cyber-blue text-white border-cyber-blue shadow-cyber-glow' 
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-white/20'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                <span className="text-sm font-bold uppercase tracking-widest">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">กำลังเตรียมข้อมูลสำหรับหมวดหมู่นี้...</p>
          </div>
        )}
      </div>
    </section>
  );
}
