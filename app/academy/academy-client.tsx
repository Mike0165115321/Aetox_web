'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lock } from 'lucide-react';

export default function AcademyClient({ dict, navDict }: { dict: any, navDict: any }) {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />

      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-deep-blue/10 border-deep-blue/20 text-deep-blue text-sm font-bold tracking-widest uppercase"
            >
              <GraduationCap className="w-4 h-4" /> {dict.hero.badge}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white"
            >
              {dict.hero.title.white} <br />
              <span className="text-deep-blue drop-shadow-deep-glow">{dict.hero.title.accent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              {dict.hero.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.categories.map((category: any, i: number) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                   <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                         <BookOpen className="w-6 h-6 text-gray-500" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-500 font-bold uppercase">Coming Soon</div>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-8">{category.description}</p>
                   
                   <div className="flex items-center gap-2 text-gray-600 text-xs font-bold">
                      <Lock className="w-3 h-3" /> 0 Lessons Available
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-32 p-12 rounded-[40px] border border-white/5 bg-white/[0.02] text-center"
          >
             <h2 className="text-2xl font-bold text-white mb-4">{dict.footer.title}</h2>
             <p className="text-gray-400">{dict.footer.description}</p>
          </motion.div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
