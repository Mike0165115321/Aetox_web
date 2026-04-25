'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, MessageSquare, ChevronRight } from 'lucide-react';

export default function AcademyWaitlist({ dict }: { dict: any }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="waitlist-form" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white">{dict.title}</h2>
            <p className="text-gray-400 text-lg">{dict.description}</p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 md:p-20 rounded-[40px] text-center border-deep-blue/30 shadow-deep-glow"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">ยืนยันเรียบร้อย!</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
                  คุณได้รับสิทธิ์ Priority Access เรียบร้อยแล้ว ทีมงานจะติดต่อกลับพร้อมสิทธิพิเศษระดับ Early Bird ในเร็วๆ นี้
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-deep-blue hover:text-white transition-colors font-bold text-sm uppercase tracking-[0.3em]"
                >
                  ปิดหน้าต่าง
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-card p-8 md:p-12 rounded-[40px] border-white/5 bg-black/40 shadow-2xl relative"
              >
                <div className="mb-12 flex justify-between items-center px-2">
                  <div className="flex gap-2">
                    {[1, 2].map((s) => (
                      <div 
                        key={s} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'w-12 bg-deep-blue' : 'w-4 bg-white/10'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">ขั้นตอนที่ {step} จาก 2</span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">ชื่อ - นามสกุล</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input type="text" required placeholder="ชื่อของคุณ" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">อีเมลติดต่อ</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input type="email" required placeholder="ระบุอีเมลที่ใช้ทำงาน" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all" />
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                      >
                        ขั้นตอนต่อไป
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">ตำแหน่งหรือเป้าหมายของคุณ</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-deep-blue/50 focus:outline-none transition-all appearance-none cursor-pointer">
                          <option className="bg-ultra-dark">Senior Programmer</option>
                          <option className="bg-ultra-dark">Tech Lead / Team Lead</option>
                          <option className="bg-ultra-dark">Business Owner / CTO</option>
                          <option className="bg-ultra-dark">System Architect Wannabe</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">ความคาดหวังหรือปัญหาที่เจอตอนนี้</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-600" />
                          <textarea rows={4} placeholder="ระบุปัญหาทางเทคนิคที่คุณกำลังเผชิญ..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all resize-none" />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 py-5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold hover:text-white transition-all"
                        >
                          ย้อนกลับ
                        </button>
                        <button 
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-5 rounded-2xl bg-deep-blue text-white font-black text-lg uppercase tracking-[0.2em] hover:shadow-deep-glow transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {loading ? 'กำลังดำเนินการ...' : 'จองสิทธิ์เข้าถึงของฉัน'}
                          {!loading && <Send className="w-5 h-5" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุด ตามมาตรฐานสากล
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
