'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';

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
        type: 'academy',
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
      {/* Atmosphere effects */}
      <div className="aetox-aura-secondary -bottom-[10%] -right-[5%] opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-fluid-h1 font-display text-aetox-text-main">{dict.title}</h2>
            <p className="text-aetox-text-soft text-fluid-p">{dict.description}</p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aetox-card p-10 md:p-20 text-center border-emerald-500/30 shadow-aetox-glow/20"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-fluid-h3 font-display text-aetox-text-main mb-4">{form.success.title}</h3>
                <p className="text-aetox-text-soft text-fluid-p leading-relaxed max-w-md mx-auto">
                  {form.success.description}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-aetox-accent hover:text-aetox-text-main transition-colors font-black text-fluid-label uppercase tracking-[0.3em]"
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
                className="aetox-card p-8 md:p-14 shadow-2xl relative"
              >
                <div className="space-y-8">
                  {/* Name Input */}
                  <div className="space-y-3">
                    <label className="text-fluid-label font-black text-aetox-text-muted uppercase tracking-[0.2em] ml-1">{form.fields.name.label}</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-aetox-text-muted" />
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={form.fields.name.placeholder} 
                        className="w-full bg-aetox-surface-lowest border border-aetox-border rounded-2xl py-4.5 pl-14 pr-6 text-aetox-text-main focus:border-aetox-accent/50 focus:outline-none transition-all text-fluid-p" 
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-3">
                    <label className="text-fluid-label font-black text-aetox-text-muted uppercase tracking-[0.2em] ml-1">{form.fields.email.label}</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-aetox-text-muted" />
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={form.fields.email.placeholder} 
                        className="w-full bg-aetox-surface-lowest border border-aetox-border rounded-2xl py-4.5 pl-14 pr-6 text-aetox-text-main focus:border-aetox-accent/50 focus:outline-none transition-all text-fluid-p" 
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-3">
                    <label className="text-fluid-label font-black text-aetox-text-muted uppercase tracking-[0.2em] ml-1">{form.fields.phone.label}</label>
                    <div className="relative">
                      <Send className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-aetox-text-muted" />
                      <input 
                        name="phone" 
                        type="text" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={form.fields.phone.placeholder} 
                        className="w-full bg-aetox-surface-lowest border border-aetox-border rounded-2xl py-4.5 pl-14 pr-6 text-aetox-text-main focus:border-aetox-accent/50 focus:outline-none transition-all text-fluid-p" 
                      />
                    </div>
                  </div>

                  {/* Goals Input */}
                  <div className="space-y-3">
                    <label className="text-fluid-label font-black text-aetox-text-muted uppercase tracking-[0.2em] ml-1">{form.fields.goals.label}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-5 top-5 w-4 h-4 text-aetox-text-muted" />
                      <textarea 
                        name="goals" 
                        rows={3} 
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder={form.fields.goals.placeholder} 
                        className="w-full bg-aetox-surface-lowest border border-aetox-border rounded-2xl py-4.5 pl-14 pr-6 text-aetox-text-main focus:border-aetox-accent/50 focus:outline-none transition-all resize-none text-fluid-p" 
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="aetox-btn-main w-full !py-5 !text-lg !rounded-2xl group disabled:opacity-50"
                    >
                      {loading ? form.submitting : form.submit}
                      {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-fluid-label text-aetox-text-muted font-bold uppercase tracking-widest opacity-60">
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
