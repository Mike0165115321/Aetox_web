'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, MessageSquare, ChevronRight } from 'lucide-react';

export default function AcademyWaitlist({ dict }: { dict: any }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        category: `Academy: ${formData.get('position')}`,
        challenge: formData.get('challenge'),
        company: 'Academy Prospect',
        preferredMethod: 'Email',
        contactDetail: formData.get('email'),
        contactTime: 'As soon as possible',
        budget: 'N/A',
        timeline: 'Immediate'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert(dict.form.error);
    } finally {
      setLoading(false);
    }
  };

  const { form } = dict;

  return (
    <section id="waitlist-form" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto relative z-10">
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
                <h3 className="text-3xl font-black text-white mb-4">{form.success.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
                  {form.success.description}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-deep-blue hover:text-white transition-colors font-bold text-sm uppercase tracking-[0.3em]"
                >
                  {form.success.close}
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
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{form.step} {step} {form.of} 2</span>
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
                        <label className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.name.label}</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input name="name" type="text" required placeholder={form.fields.name.placeholder} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.email.label}</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input name="email" type="email" required placeholder={form.fields.email.placeholder} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all" />
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                      >
                        {form.next}
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
                        <label className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.position.label}</label>
                        <select name="position" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-deep-blue/50 focus:outline-none transition-all appearance-none cursor-pointer">
                          {form.fields.position.options.map((opt: any) => (
                            <option key={opt.value} value={opt.value} className="bg-ultra-dark">{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.challenge.label}</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-600" />
                          <textarea name="challenge" rows={4} placeholder={form.fields.challenge.placeholder} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-deep-blue/50 focus:outline-none transition-all resize-none" />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 py-5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold hover:text-white transition-all"
                        >
                          {form.back}
                        </button>
                        <button 
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-5 rounded-2xl bg-deep-blue text-white font-black text-lg uppercase tracking-[0.2em] hover:shadow-deep-glow transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {loading ? form.submitting : form.submit}
                          {!loading && <Send className="w-5 h-5" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                    {form.privacy}
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
