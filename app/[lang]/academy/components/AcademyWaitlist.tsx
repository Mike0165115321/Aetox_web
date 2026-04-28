'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, MessageSquare, ChevronRight } from 'lucide-react';

export default function AcademyWaitlist({ dict }: { dict: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = {
        type: 'academy_waitlist', // Tag clearly for your future dashboard
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        goals: formData.goals,
        category: 'Academy Early Access Waitlist',
        preferredMethod: 'Direct Call / Line',
        contactDetail: formData.phone,
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
                className="glass-card p-8 md:p-20 rounded-[32px] md:rounded-[40px] text-center border-aetox-accent/30 shadow-aetox-glow"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4">{form.success.title}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                  {form.success.description}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 md:mt-10 text-aetox-accent hover:text-white transition-colors font-bold text-xs md:text-sm uppercase tracking-[0.3em]"
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
                className="glass-card p-6 md:p-12 rounded-[32px] md:rounded-[40px] border-white/5 bg-black/40 shadow-2xl relative"
              >
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.name.label}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={form.fields.name.placeholder} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-aetox-accent/50 focus:outline-none transition-all text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.email.label}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={form.fields.email.placeholder} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-aetox-accent/50 focus:outline-none transition-all text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.phone.label}</label>
                    <div className="relative">
                      <Send className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        name="phone" 
                        type="text" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={form.fields.phone.placeholder} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-aetox-accent/50 focus:outline-none transition-all text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  {/* Goals Input */}
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-[0.2em] ml-1">{form.fields.goals.label}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-600" />
                      <textarea 
                        name="goals" 
                        rows={3} 
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder={form.fields.goals.placeholder} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-aetox-accent/50 focus:outline-none transition-all resize-none text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-aetox-accent text-white font-black text-base md:text-lg uppercase tracking-[0.15em] md:tracking-[0.2em] hover:shadow-aetox-glow transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {loading ? form.submitting : form.submit}
                      {!loading && <Send className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">
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
