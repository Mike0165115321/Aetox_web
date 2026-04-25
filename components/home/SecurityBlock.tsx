'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, EyeOff, Server, HardDrive } from 'lucide-react';

export default function SecurityBlock({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-black tracking-[0.2em] uppercase mb-6"
          >
            <ShieldCheck size={16} /> มาตรฐานความปลอดภัยระดับองค์กร
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.2]"
          >
            {dict.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-medium"
          >
            {dict.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.features.map((feature: any, index: number) => {
            const icons = [EyeOff, Lock, Server];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card p-10 rounded-[32px] border border-white/5 hover:border-cyber-blue/30 transition-all duration-500 bg-black/40"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyber-blue/5 border border-cyber-blue/10 flex items-center justify-center mb-8 group-hover:bg-cyber-blue/10 group-hover:border-cyber-blue/30 transition-all">
                  <Icon className="text-cyber-blue" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed font-medium">
                  {feature.desc}
                </p>

                <div className="mt-8 pt-8 border-t border-white/5 opacity-50">
                  <div className="flex items-center gap-2 text-xs font-black text-cyber-blue uppercase tracking-widest">
                    <ShieldCheck size={12} /> Verified Enterprise Standard
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-black text-xs text-white">SSL</div>
            <span className="font-bold text-white text-xs tracking-widest uppercase">Encryption</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-black text-xs text-white">256</div>
            <span className="font-bold text-white text-xs tracking-widest uppercase">AES Standard</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-black text-xs text-white">SOC</div>
            <span className="font-bold text-white text-xs tracking-widest uppercase">Compliant Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
