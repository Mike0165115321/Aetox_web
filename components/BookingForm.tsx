'use client';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from './contact/useContactForm';
import { IdentitySection, PreferenceSection, ProjectScopeSection } from './booking/FormSections';

export default function BookingForm({ dict }: { dict?: any }) {
  const { submitted, setSubmitted, isLoading, handleSubmit } = useContactForm(dict?.form?.error || dict?.common?.errors?.general);

  if (!dict) return null;
  const content = dict;
  const form = content.form;
  
  const identity = form.identity;
  const category = form.category;
  const budget = form.budget;
  const timeline = form.timeline;
  const challenge = form.challenge;
  const hero = content.hero;
  const success = content.success;

  return (
    <section className="py-24 relative overflow-hidden scroll-mt-20" id="contact-form">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-fluid-h2 font-black text-aetox-text-main mb-6 tracking-tight"
            >
              {hero.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-aetox-text-soft text-lg md:text-xl max-w-2xl mx-auto font-medium"
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
                className="aetox-card p-6 md:p-12 text-center border-aetox-accent/30 shadow-aetox-glow"
              >
                <div className="w-20 h-20 bg-aetox-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-aetox-accent/20">
                  <CheckCircle2 className="w-10 h-10 text-aetox-accent" />
                </div>
                <h3 className="text-3xl font-bold text-aetox-text-main mb-4">{success.title}</h3>
                <p className="text-fluid-p text-aetox-text-soft max-w-md mx-auto leading-relaxed">
                  {success.message}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-aetox-accent hover:text-aetox-text-main transition-colors font-bold text-fluid-sm uppercase tracking-[0.2em]"
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
                <IdentitySection identity={identity} title={form.sections?.basic} />
                <PreferenceSection identity={identity} title={form.sections?.contact} />
                <ProjectScopeSection 
                  category={category} 
                  budget={budget} 
                  timeline={timeline} 
                  challenge={challenge} 
                  title={form.sections?.project}
                />

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 aetox-btn-main group disabled:opacity-50 text-fluid-p"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      {form.submit}
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
