'use client';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Mail, Phone, Zap, ShieldCheck } from 'lucide-react';
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
            <div className="glass-card p-6 md:p-8 rounded-3xl border-aetox-border flex items-center gap-4 md:gap-6 group hover:border-aetox-accent/30 transition-all">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-aetox-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Mail className="text-aetox-accent" size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-muted text-[10px] font-black uppercase tracking-widest mb-1">{dict.directContact.email}</p>
                <p className="text-aetox-text-main font-bold text-sm md:text-lg truncate">phrmsawanachyphl@gmail.com</p>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-3xl border-aetox-border flex items-center gap-4 md:gap-6 group hover:border-aetox-accent/30 transition-all">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-aetox-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Phone className="text-aetox-accent" size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-muted text-[10px] font-black uppercase tracking-widest mb-1">{dict.directContact.phone}</p>
                <p className="text-aetox-text-main font-bold text-lg">0968013963</p>
              </div>
            </div>
            <a 
              href="https://github.com/Mike0165115321" 
              target="_blank"
              className="glass-card p-6 md:p-8 rounded-3xl border-aetox-border flex items-center gap-4 md:gap-6 group hover:border-aetox-accent/30 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-aetox-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-aetox-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-aetox-text-muted text-[10px] font-black uppercase tracking-widest mb-1">{dict.directContact.github}</p>
                <p className="text-aetox-text-main font-bold text-lg truncate">Mike0165115321</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Strategic Brief Form */}
      <BookingForm dict={dict} />

      {/* 3. Next Steps / Roadmap */}
      <section id="roadmap" className="py-32 border-t border-aetox-border overflow-hidden scroll-mt-20">
        {/* Background Architectural Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 text-aetox-accent/5"
          >
            <Zap size={500} strokeWidth={0.2} />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-fluid-h2 font-black text-aetox-text-main">{dict.roadmap.title}</h2>
              <p className="text-fluid-p text-aetox-text-soft font-medium">{dict.roadmap.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
              {/* Connector Lines (Desktop) */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aetox-accent/30 to-transparent -translate-y-1/2 origin-left" 
              />
              
              {dict.roadmap.steps.map((item: any, idx: number) => (
                <motion.div 
                  key={item.n} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: idx * 0.2 
                  }}
                  className="relative space-y-6 group"
                >
                  {/* Connector (Mobile) */}
                  {idx < 2 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 48 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.2 }}
                      className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-aetox-accent/30 to-transparent" 
                    />
                  )}
                  
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className="w-16 h-16 rounded-full bg-aetox-accent text-white font-black flex items-center justify-center mx-auto shadow-aetox-glow relative z-10 transition-transform group-hover:scale-110"
                  >
                    {item.n}
                  </motion.div>
                  <h4 className="text-aetox-text-main font-bold text-xl group-hover:text-aetox-accent transition-colors">{item.t}</h4>
                  <p className="text-aetox-text-soft text-sm leading-relaxed max-w-[280px] mx-auto font-medium">{item.d}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-12">
               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-aetox-surface/50 border border-aetox-border text-aetox-text-soft">
                 <ShieldCheck className="text-aetox-accent" size={20} />
                 <span className="text-xs md:text-sm font-bold tracking-wide">{dict.roadmap.privacyNote}</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
