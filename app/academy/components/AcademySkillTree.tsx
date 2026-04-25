'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Layers, ChevronRight, Target } from 'lucide-react';

const iconMap: any = {
  Brain: Brain,
  Zap: Zap,
  Layers: Layers
};

export default function AcademySkillTree({ categories }: { categories: any[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="skill-tree" className="py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">แผนผังความรู้สู่มือโปร</h2>
          <p className="text-gray-400 text-lg">สถาปัตยกรรม 3 ชั้นที่เปลี่ยนคุณให้เป็นสถาปนิกผู้กุมความได้เปรียบ</p>
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
                    w-full p-8 rounded-3xl border text-left transition-all duration-500 relative overflow-hidden group
                    ${isActive 
                      ? 'bg-deep-blue border-deep-blue shadow-deep-glow' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'}
                  `}
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
                      ${isActive ? 'bg-white text-deep-blue' : 'bg-white/10 text-gray-400 group-hover:scale-110'}
                    `}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                        {cat.subtitle}
                      </p>
                      <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
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
                  className="glass-card p-10 md:p-16 rounded-[40px] border-white/5 bg-black/40 relative min-h-[500px] flex flex-col"
                >
                  <div className="space-y-8 relative z-10 flex-1">
                    <div className="space-y-4">
                      <h4 className="text-3xl font-black text-white">{cat.title}</h4>
                      <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-medium italic">
                        " {cat.description} "
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-8">
                      {cat.skills.map((skill: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-deep-blue/40 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-deep-blue shadow-deep-glow group-hover:scale-150 transition-transform" />
                            <span className="text-white font-bold text-lg">{skill.name}</span>
                          </div>
                          <div className="px-4 py-1.5 rounded-full bg-deep-blue/10 border border-deep-blue/20 flex items-center gap-2">
                            <Target className="w-3 h-3 text-deep-blue" />
                            <span className="text-[10px] font-black text-deep-blue uppercase tracking-widest">{skill.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Subtle Icon Background */}
                  <div className="absolute bottom-10 right-10 opacity-[0.03] pointer-events-none">
                    {(() => {
                      const Icon = iconMap[cat.icon];
                      return <Icon className="w-64 h-64 text-white" />;
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
