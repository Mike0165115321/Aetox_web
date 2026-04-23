'use client';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm({ dict }: { dict?: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = dict || {
    hero: {
      title: "เล่างานที่น่าเบื่อที่สุดของคุณให้เราฟัง",
      subtitle: "เพื่อสถาปัตยกรรมระบบที่ออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ"
    },
    success: {
      title: "รับทราบเป้าหมายแล้ว!",
      message: "สถาปนิกของเรากำลังวิเคราะห์ปัญหาและงบประมาณเบื้องต้น แล้วจะติดต่อกลับโดยเร็วที่สุด"
    },
    form: {
      identity: {
        name: { label: "ชื่อ - นามสกุล", placeholder: "ระบุชื่อของคุณ" },
        company: { label: "ชื่อบริษัท / องค์กร (ไม่บังคับ)", placeholder: "ระบุชื่อหน่วยงานของคุณ" },
        email: { label: "อีเมลติดต่อ", placeholder: "your@email.com" },
        contact: { label: "เบอร์โทรศัพท์ / LINE ID", placeholder: "เพื่อให้เราติดต่อกลับได้รวดเร็วขึ้น" }
      },
      category: {
        label: "เป้าหมายที่คุณต้องการ",
        options: []
      },
      budget: {
        label: "งบประมาณที่วางไว้ (Budget Range)",
        options: []
      },
      challenge: {
        label: "ปัญหาที่คุณเจอ หรือระบบที่อยากให้สร้าง (Business Pain Points)",
        placeholder: "เล่ารายละเอียดงานที่น่าเบื่อ หรืองานคอขวดที่อยากกำจัดทิ้ง..."
      },
      submit: "ท้าทายระบบของเรา"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact-form">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              {content.hero.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              {content.hero.subtitle}
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-12 text-center border-cyber-blue/30 shadow-cyber-glow"
              >
                <div className="w-20 h-20 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyber-blue/40">
                  <CheckCircle2 className="w-10 h-10 text-cyber-blue" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">{content.success.title}</h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                  {content.success.message}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-cyber-blue hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
                >
                  ส่งข้อความอื่นเพิ่ม
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 md:p-12 border-white/10 shadow-2xl space-y-10"
              >
                {/* 1. Identity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.identity.name.label}
                    </label>
                    <input 
                      type="text" required
                      placeholder={content.form.identity.name.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/30 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.identity.company.label}
                    </label>
                    <input 
                      type="text"
                      placeholder={content.form.identity.company.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/30 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.identity.email.label}
                    </label>
                    <input 
                      type="email" required
                      placeholder={content.form.identity.email.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/30 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.identity.contact.label}
                    </label>
                    <input 
                      type="text" required
                      placeholder={content.form.identity.contact.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/30 transition-all"
                    />
                  </div>
                </div>

                {/* 2. Selectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.category.label}
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white appearance-none focus:outline-none focus:border-cyber-blue/50 transition-all cursor-pointer">
                      {content.form.category.options.map((opt: string) => (
                        <option key={opt} value={opt} className="bg-ultra-dark text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {content.form.budget.label}
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white appearance-none focus:outline-none focus:border-cyber-blue/50 transition-all cursor-pointer">
                      {content.form.budget.options.map((opt: string) => (
                        <option key={opt} value={opt} className="bg-ultra-dark text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Pain Points */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                    {content.form.challenge.label}
                  </label>
                  <textarea 
                    rows={4} required
                    placeholder={content.form.challenge.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/30 transition-all resize-none"
                  />
                </div>

                {/* 4. Submit */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg uppercase tracking-widest hover:bg-cyber-blue hover:text-white transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      {content.form.submit}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
