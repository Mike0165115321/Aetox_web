'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';

interface PainItemProps {
  id: string;
  title: string;
  impact: string;
  cost: string;
  index: number;
}

const PainCard = ({ title, impact, cost, index }: PainItemProps) => {
  const icons = [Clock, TrendingDown, AlertTriangle];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group p-8 rounded-[24px] border border-white/5 hover:border-cyber-blue/30 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="text-red-400" size={28} />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-red-400/90 font-bold text-sm mb-4 tracking-wide uppercase">
          ผลกระทบ: {impact}
        </p>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-red-500/5 group-hover:border-red-500/10 transition-all">
          <p className="text-gray-400 text-[15px] leading-relaxed font-medium italic">
            "{cost}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function PainSection({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="pain" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <AlertTriangle size={12} /> มูลค่าความสูญเสียจากการนิ่งเฉย
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.2]"
          >
            {dict.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((item: any, index: number) => (
            <PainCard 
              key={item.id} 
              {...item} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="p-6 rounded-[32px] glass-card border border-white/10 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white font-bold text-lg">คุณกำลังปล่อยให้กำไรของธุรกิจรั่วไหลไปในทุกๆ วันที่ผ่านไป...</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">เริ่มต้นอุดรูรั่วและยกระดับประสิทธิภาพด้วยระบบอัตโนมัติวันนี้</p>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => scrollToSection('roi-calculator')}
                className="px-8 py-4 rounded-2xl bg-cyber-blue text-black font-black text-sm hover:shadow-cyber-glow transition-all active:scale-95 flex items-center gap-3"
              >
                คำนวณมูลค่าความเสียหาย <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
