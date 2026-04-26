'use client';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from './contact/useContactForm';
import { IdentitySection, PreferenceSection, ProjectScopeSection } from './booking/FormSections';

export default function BookingForm({ dict }: { dict?: any }) {
  const { submitted, setSubmitted, isLoading, handleSubmit } = useContactForm();

  const content = dict || {};
  const form = content.form || {};
  
  const identity = form.identity || {
    name: { label: "", placeholder: "" },
    company: { label: "", placeholder: "" },
    email: { label: "", placeholder: "" },
    preferredMethod: { label: "", options: [] },
    contactDetail: { label: "", placeholder: "" },
    contactTime: { label: "", options: [] }
  };

  const category = form.category || { label: "", options: [] };
  const budget = form.budget || { label: "", options: [] };
  const timeline = form.timeline || { label: "", options: [] };
  const challenge = form.challenge || { label: "", placeholder: "" };
  const hero = content.hero || { title: "", subtitle: "" };
  const success = content.success || { title: "", message: "", close: "" };

  return (
    <section className="py-24 relative overflow-hidden scroll-mt-20" id="contact-form">
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
                  {success.close}
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
                <IdentitySection identity={identity} />
                <PreferenceSection identity={identity} />
                <ProjectScopeSection 
                  category={category} 
                  budget={budget} 
                  timeline={timeline} 
                  challenge={challenge} 
                />

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
