'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection, scrollToSection } from '@/lib/scroll-utils';

export interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  num: string;
  offset?: number;
}

interface FloatingNavProps {
  sections: NavSection[];
  accentColor?: string; // Default: cyber-blue (#06B6D4)
}

export default function FloatingNav({ sections, accentColor = '#06B6D4' }: FloatingNavProps) {
  const activeSection = useActiveSection(sections);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden xl:block">
      <div className="glass-card p-3 rounded-[32px] border border-white/10 backdrop-blur-3xl shadow-2xl bg-black/40 flex flex-col gap-2 relative group/nav">
        {/* Glow Effect on Hover Sidebar */}
        <div 
          className="absolute -inset-1 rounded-[34px] opacity-0 group-hover/nav:opacity-100 transition-opacity blur-lg pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${accentColor}33, transparent)` }} 
        />
        
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id, section.offset)}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            className="relative flex items-center group/item"
          >
            {/* Tooltip Label */}
            <AnimatePresence>
              {hoveredSection === section.id && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <div className="glass-card px-4 py-2 rounded-xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl">
                    <span className="text-xs font-black uppercase tracking-widest block mb-0.5" style={{ color: accentColor }}>{section.num}</span>
                    <span className="text-xs font-bold text-white whitespace-nowrap">{section.label}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon Container */}
            <motion.div
              animate={{
                backgroundColor: activeSection === section.id ? accentColor : 'rgba(255, 255, 255, 0.05)',
                color: activeSection === section.id ? '#000000' : '#9CA3AF',
                borderColor: activeSection === section.id ? accentColor : 'rgba(255, 255, 255, 0.05)',
                scale: activeSection === section.id ? 1.1 : 1
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center border relative"
            >
              {section.icon}
              
              {/* Outer Indicator */}
              {activeSection === section.id && (
                <motion.div 
                  layoutId="nav-active-indicator" 
                  className="absolute -inset-2 border rounded-[20px]"
                  style={{ borderColor: `${accentColor}80`, backgroundColor: `${accentColor}0D` }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </motion.div>
          </button>
        ))}
      </div>
    </div>
  );
}
