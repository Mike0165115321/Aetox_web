'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Layers, ChevronRight, Target } from 'lucide-react';

const iconMap: any = {
  Brain: Brain,
  Zap: Zap,
  Layers: Layers
};

export default function AcademySkillTree({ dict, categories }: { dict: any, categories: any[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="skill-tree" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-fluid-h2 font-display text-aetox-text-main uppercase tracking-tight">{dict.title}</h2>
          <p className="text-aetox-text-soft text-fluid-p">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Category Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    w-full p-6 md:p-8 rounded-[32px] border text-left transition-all duration-500 relative overflow-hidden group
                    active:scale-[0.98]
                    ${isActive 
                      ? 'bg-aetox-accent border-aetox-accent shadow-aetox-glow' 
                      : 'bg-aetox-surface-lowest border-aetox-border hover:bg-aetox-surface hover:border-aetox-accent/30'}
                  `}
                >
                  <div className="flex items-center gap-4 md:gap-6 relative z-10">
                    <div className={`
                      w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500
                      ${isActive ? 'bg-white text-aetox-accent' : 'bg-aetox-surface text-aetox-text-muted group-hover:scale-110'}
                    `}>
                      <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-fluid-label font-black uppercase tracking-[0.2em] mb-1 ${isActive ? 'text-white/70' : 'text-aetox-text-muted'}`}>
                        {cat.subtitle}
                      </p>
                      <h3 className={`text-fluid-h4 font-display font-bold leading-tight ${isActive ? 'text-white' : 'text-aetox-text-soft'}`}>
                        {cat.title}
                      </h3>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="active-bg-glow"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Skill Details Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {categories.map((cat) => cat.id === activeCategory && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="aetox-glass-card p-8 md:p-16 rounded-[40px] relative min-h-[400px] md:min-h-[500px] flex flex-col"
                >
                  <div className="space-y-6 md:space-y-8 relative z-10 flex-1">
                    <div className="space-y-4">
                      <h4 className="text-fluid-h3 font-display font-black text-aetox-text-main">{cat.title}</h4>
                      <p className="text-fluid-p text-aetox-text-soft leading-relaxed max-w-lg font-medium italic border-l-2 border-aetox-accent/30 pl-6">
                        &quot; {cat.description} &quot;
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:gap-4 pt-4 md:pt-8">
                      {cat.skills.map((skill: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-4 md:p-6 rounded-2xl bg-aetox-surface-lowest border border-aetox-border group hover:border-aetox-accent/40 transition-colors"
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-aetox-accent shadow-aetox-glow group-hover:scale-150 transition-transform" />
                            <span className="text-aetox-text-main font-bold text-fluid-p">{skill.name}</span>
                          </div>
                          <div className="px-3 md:px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 flex items-center gap-2">
                            <Target className="w-2.5 h-2.5 md:w-3 md:h-3 text-aetox-accent" />
                            <span className="text-fluid-label font-black text-aetox-accent uppercase tracking-widest">{skill.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Subtle Icon Background */}
                  <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-[0.03] pointer-events-none">
                    {(() => {
                      const Icon = iconMap[cat.icon];
                      return <Icon className="w-48 h-48 md:w-64 md:h-64 text-aetox-accent" />;
                    })()}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
