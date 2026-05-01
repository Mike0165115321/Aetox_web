'use client';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Mail, Phone, Zap, ShieldCheck, Search, MessageSquare, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactClient({ dict, navDict, contactSections }: { dict: any, navDict: any, contactSections: NavSection[] }) {
  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative pt-20">
      <FloatingNav sections={contactSections} />
      <Navbar dict={navDict.navbar} />
      
      {/* 1. Direct Contact */}
      <section id="direct-contact" className="py-24 relative z-10 overflow-hidden scroll-mt-20">
        {/* Background Architectural Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -left-10 text-aetox-accent/5"
          >
            <Mail size={400} strokeWidth={0.2} />
          </motion.div>
        </div>

        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="aetox-card p-8 flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center group-hover:border-aetox-accent/40 group-hover:shadow-aetox-glow/10 transition-all duration-500 shrink-0">
                <Mail className="text-aetox-text-soft group-hover:text-aetox-accent transition-colors" size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-soft text-fluid-label font-bold uppercase tracking-[0.2em] mb-1.5 opacity-80">{dict.directContact.email}</p>
                <p className="text-aetox-text-main font-bold text-base md:text-lg tracking-tight truncate group-hover:text-aetox-accent transition-colors duration-300">
                  phrmsawanachyphl@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="aetox-card p-8 flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center group-hover:border-aetox-accent/40 group-hover:shadow-aetox-glow/10 transition-all duration-500 shrink-0">
                <Phone className="text-aetox-text-soft group-hover:text-aetox-accent transition-colors" size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-soft text-fluid-label font-bold uppercase tracking-[0.2em] mb-1.5 opacity-80">{dict.directContact.phone}</p>
                <p className="text-aetox-text-main font-bold text-base md:text-lg tracking-tight group-hover:text-aetox-accent transition-colors duration-300">
                  0968013963
                </p>
              </div>
            </div>

            {/* GitHub Card */}
            <a 
              href="https://github.com/Mike0165115321" 
              target="_blank"
              rel="noopener noreferrer"
              className="aetox-card p-8 flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-aetox-surface-low border border-aetox-border flex items-center justify-center group-hover:border-aetox-accent/40 group-hover:shadow-aetox-glow/10 transition-all duration-500 shrink-0">
                <svg className="w-7 h-7 text-aetox-text-soft group-hover:text-aetox-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-soft text-fluid-label font-bold uppercase tracking-[0.2em] mb-1.5 opacity-80">{dict.directContact.github}</p>
                <p className="text-aetox-text-main font-bold text-base md:text-lg tracking-tight truncate group-hover:text-aetox-accent transition-colors duration-300">
                  Mike0165115321
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Strategic Brief Form */}
      <BookingForm dict={dict} />

      {/* 3. Next Steps / Roadmap */}
      <section id="roadmap" className="py-32 border-t border-aetox-border overflow-hidden scroll-mt-20 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-40 text-aetox-accent/10"
          >
            <Zap size={600} strokeWidth={0.1} />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-20">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-aetox-accent text-xs font-black uppercase tracking-[0.3em] mb-4"
              >
                Workflow Integration
              </motion.div>
              <h2 className="text-fluid-h2 font-black text-aetox-text-main tracking-tight leading-tight">{dict.roadmap.title}</h2>
              <p className="text-fluid-p text-aetox-text-soft font-medium max-w-2xl mx-auto">{dict.roadmap.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Central Flow Line (Desktop) */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-white/5 overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-aetox-accent/40 to-transparent" 
                />
              </div>
              
              {dict.roadmap.steps.map((item: any, idx: number) => {
                const icons = [
                  <Search key="s" className="w-6 h-6" />,
                  <MessageSquare key="m" className="w-6 h-6" />,
                  <Rocket key="r" className="w-6 h-6" />
                ];
                
                return (
                  <motion.div 
                    key={item.n} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="relative group"
                  >
                    <div className="glass-card p-8 lg:p-10 rounded-[32px] border-aetox-border hover:border-aetox-accent/30 transition-all duration-500 hover:bg-aetox-accent/[0.02] flex flex-col items-center text-center space-y-6 h-full relative overflow-hidden">
                      {/* Step Number Badge */}
                      <div className="absolute top-6 right-8 text-[40px] font-black text-white/[0.03] pointer-events-none group-hover:text-aetox-accent/[0.05] transition-colors italic">
                        0{item.n}
                      </div>

                      {/* Icon Container */}
                      <div className="w-20 h-20 rounded-2xl bg-aetox-surface border border-white/5 flex items-center justify-center relative shadow-2xl group-hover:shadow-aetox-glow/20 transition-all duration-500 group-hover:-translate-y-1">
                        <div className="absolute inset-0 rounded-2xl bg-aetox-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-aetox-accent relative z-10">
                          {icons[idx]}
                        </div>
                        {/* Status Ring */}
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-1 rounded-2xl border border-dashed border-aetox-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                      <div className="space-y-3 relative z-10">
                        <h4 className="text-aetox-text-main font-bold text-xl tracking-tight group-hover:text-aetox-accent transition-colors">{item.t}</h4>
                        <p className="text-aetox-text-soft text-[13px] leading-relaxed font-medium">
                          {item.d}
                        </p>
                      </div>

                      {/* Mobile Arrow */}
                      {idx < 2 && (
                        <div className="md:hidden pt-4 text-aetox-accent/20">
                          <Zap size={20} className="animate-pulse" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12"
            >
               <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.02] border border-white/5 text-aetox-text-soft shadow-inner">
                 <ShieldCheck className="text-emerald-500 shadow-emerald-glow" size={20} />
                 <span className="text-[11px] md:text-xs font-black uppercase tracking-widest">{dict.roadmap.privacyNote}</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
