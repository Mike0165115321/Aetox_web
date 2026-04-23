'use client';
import { motion } from 'framer-motion';

export default function AuthorityHero({ content }: { content: any }) {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
            <span className="text-xs font-bold text-cyber-blue uppercase tracking-widest">System Architect Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            {content.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
