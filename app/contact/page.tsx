import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Mail, Phone, MessageSquare, FileText, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default async function ContactPage() {
  const dict = await getDictionary('th', 'contact');
  const navDict = await getDictionary('th', 'navigation');

  const contactSections: NavSection[] = [
    { id: 'direct-contact', label: 'ช่องทางติดต่อด่วน', num: '01', icon: <Phone size={18} /> },
    { id: 'contact-form', label: 'รายละเอียดโปรเจกต์', num: '02', icon: <FileText size={18} />, offset: 80 },
    { id: 'roadmap', label: 'ขั้นตอนถัดไป', num: '03', icon: <Zap size={18} />, offset: 80 },
  ];

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <FloatingNav sections={contactSections} />
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      <Navbar dict={navDict.navbar} />
      
      {/* 1. Direct Contact */}
      <section id="direct-contact" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl border-white/5 flex items-center gap-6 group hover:border-cyber-blue/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-cyber-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-cyber-blue" size={32} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Email Support</p>
                <p className="text-white font-bold text-lg">phrmsawanachyphl@gmail.com</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/5 flex items-center gap-6 group hover:border-cyber-blue/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-cyber-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="text-cyber-blue" size={32} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Direct Call</p>
                <p className="text-white font-bold text-lg">0968013963</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Strategic Brief Form */}
      <BookingForm dict={dict} />

      {/* 3. Next Steps / Roadmap */}
      <section id="roadmap" className="py-32 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white">What Happens Next?</h2>
              <p className="text-gray-400 text-lg">ขั้นตอนหลังจากการส่งข้อมูล เพื่อให้คุณเห็นภาพการทำงานของเรา</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector Lines (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent -translate-y-1/2" />
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-full bg-cyber-blue text-black font-black flex items-center justify-center mx-auto shadow-cyber-glow relative z-10">1</div>
                <h4 className="text-white font-bold">Analysis</h4>
                <p className="text-gray-500 text-sm">เราจะวิเคราะห์ปัญหาที่คุณส่งมาภายใน 24 ชม. เพื่อหาจุดที่ควรปรับปรุง</p>
              </div>
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-full bg-cyber-blue text-black font-black flex items-center justify-center mx-auto shadow-cyber-glow relative z-10">2</div>
                <h4 className="text-white font-bold">Strategy Call</h4>
                <p className="text-gray-500 text-sm">นัดพูดคุยลงรายละเอียดเพื่อวางแผนระบบที่ตอบโจทย์ธุรกิจคุณที่สุด</p>
              </div>
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-full bg-cyber-blue text-black font-black flex items-center justify-center mx-auto shadow-cyber-glow relative z-10">3</div>
                <h4 className="text-white font-bold">Proposal</h4>
                <p className="text-gray-500 text-sm">รับข้อเสนอแผนงานและงบประมาณที่ชัดเจน พร้อมเริ่มดำเนินงาน</p>
              </div>
            </div>

            <div className="pt-12">
               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400">
                 <ShieldCheck className="text-cyber-blue" size={20} />
                 <span className="text-sm font-bold tracking-wide">Data Privacy Guaranteed — ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุด</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
