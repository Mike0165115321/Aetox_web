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
}

export default function FloatingNav({ sections }: FloatingNavProps) {
  const activeSection = useActiveSection(sections);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden xl:block">
      <div className="aetox-nav-container group/nav">
        
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
                  <div className="aetox-nav-tooltip">
                    <span className="text-[10px] font-black tracking-widest block mb-0.5 text-aetox-accent">{section.num}</span>
                    <span className="text-xs font-bold text-aetox-text-main whitespace-nowrap">{section.label}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon Container */}
            <div className={`aetox-nav-item ${activeSection === section.id ? 'active' : ''}`}>
              <div className={activeSection === section.id ? 'brightness-0' : ''}>
                {section.icon}
              </div>
              
              {/* Outer Indicator */}
              {activeSection === section.id && (
                <motion.div 
                  layoutId="nav-active-indicator-aura" 
                  className="aetox-nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
