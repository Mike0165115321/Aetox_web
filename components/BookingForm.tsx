'use client';
import { useState } from 'react';
import { Send, CheckCircle2, User, Building2, MessageSquare, Target, Wallet, Clock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm({ dict }: { dict?: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = dict || {};
  const form = content.form || {};
  
  const identity = form.identity || {
    name: { label: "ชื่อ - นามสกุล", placeholder: "" },
    company: { label: "บริษัท", placeholder: "" },
    email: { label: "อีเมล", placeholder: "" },
    preferredMethod: { label: "ช่องทางที่สะดวก", options: [] },
    contactDetail: { label: "ข้อมูลติดต่อ", placeholder: "" },
    contactTime: { label: "ช่วงเวลาที่สะดวก", options: [] }
  };

  const category = form.category || { label: "เป้าหมาย", options: [] };
  const budget = form.budget || { label: "งบประมาณ", options: [] };
  const timeline = form.timeline || { label: "กรอบเวลา", options: [] };
  const challenge = form.challenge || { label: "ปัญหา", placeholder: "" };
  const hero = content.hero || { title: "", subtitle: "" };
  const success = content.success || { title: "", message: "" };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('ขออภัย เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact-form">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              {hero.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              {hero.subtitle}
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
                <h3 className="text-3xl font-black text-white mb-4">{success.title}</h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                  {success.message}
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
                className="space-y-12"
              >
                {/* Section 1: Client Identity */}
                <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-cyber-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">ข้อมูลพื้นฐานของคุณ</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1">{identity.name.label}</label>
                      <input name="name" type="text" required placeholder={identity.name.placeholder} className="form-input-cyber" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1">{identity.email.label}</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input name="email" type="email" required placeholder={identity.email.placeholder} className="form-input-cyber pl-12" />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1">{identity.company.label}</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input name="company" type="text" placeholder={identity.company.placeholder} className="form-input-cyber pl-12" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Contact Preference */}
                <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-deep-blue/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-deep-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">ช่องทางการติดต่อ</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.preferredMethod.label}</label>
                      <select name="preferredMethod" className="form-select-cyber">
                        {identity.preferredMethod.options?.map((opt: string) => (
                          <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.contactDetail.label}</label>
                      <input name="contactDetail" type="text" required placeholder={identity.contactDetail.placeholder} className="form-input-cyber" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.contactTime.label}</label>
                      <select name="contactTime" className="form-select-cyber">
                        {identity.contactTime.options?.map((opt: string) => (
                          <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Project Scope */}
                <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-cyber-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">รายละเอียดโปรเจกต์</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
                        <Target className="w-3 h-3 flex-shrink-0 mb-1" /> {category.label}
                      </label>
                      <select name="category" className="form-select-cyber">
                        {category.options?.map((opt: string) => (
                          <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
                        <Wallet className="w-3 h-3 flex-shrink-0 mb-1" /> {budget.label}
                      </label>
                      <select name="budget" className="form-select-cyber">
                        {budget.options?.map((opt: string) => (
                          <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[15px] font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
                        <Clock className="w-3 h-3 flex-shrink-0 mb-1" /> {timeline.label}
                      </label>
                      <select name="timeline" className="form-select-cyber">
                        {timeline.options?.map((opt: string) => (
                          <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <label className="text-[15px] font-semibold text-gray-300 ml-1">{challenge.label}</label>
                    <textarea name="challenge" rows={5} required placeholder={challenge.placeholder} className="form-textarea-cyber" />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 rounded-2xl bg-white text-black font-black text-xl uppercase tracking-[0.2em] hover:bg-cyber-blue hover:text-white transition-all transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-4 group shadow-cyber-glow"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      {form.submit || 'ส่งข้อความหาเรา'}
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
