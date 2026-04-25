'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function MikeAuthority({ dict }: { dict: any }) {
  return (
    <section id="mike-authority" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          {/* Visual: Achievement Badge */}
          <div className="lg:w-5/12 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-deep-blue/10 rounded-full"
            />
            <div className="relative glass-card p-12 rounded-[60px] border-white/5 bg-black/40 text-center shadow-2xl">
              <div className="w-24 h-24 bg-deep-blue/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-deep-blue/40 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Award className="w-12 h-12 text-deep-blue drop-shadow-deep-glow" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">มาตรฐาน Aetox.dev</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-10">DNA สถาปนิก</p>
              
              <div className="space-y-4">
                {dict.achievements.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-left p-4 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-bold text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Glow effect behind badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-deep-blue/20 rounded-full blur-[100px] pointer-events-none opacity-50" />
          </div>

          {/* Content: Authority Message */}
          <div className="lg:w-7/12 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-deep-blue font-black text-[10px] tracking-[0.3em] uppercase">
                <ShieldCheck className="w-4 h-4" /> ความเป็นเลิศที่เชื่อถือได้
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {dict.title}
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-medium border-l-2 border-deep-blue/30 pl-8">
                {dict.description}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-deep-blue/5 border border-deep-blue/10 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-deep-blue opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-300 italic leading-relaxed text-lg">
                " ผมไม่ได้มาสอนคุณเขียนโค้ดเพื่อส่งงานไปวันๆ แต่ผมมาสอนให้คุณรู้วิธีวางรากฐานธุรกิจที่รองรับ AI และ Automation ในระยะยาวแบบที่สถาปนิกจริงๆ เขาทำกัน "
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-tr from-deep-blue to-cyber-blue opacity-50" />
                </div>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-widest">Mike (Chayapol P.)</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">ผู้ก่อตั้ง & หัวหน้าสถาปนิก</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
