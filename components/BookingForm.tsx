'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-32 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Subtle background glow for the form card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              เล่างานที่น่าเบื่อที่สุดของคุณให้เราฟัง
            </h2>
            <p className="text-gray-400 text-lg">
              แล้วเราจะเปลี่ยนมันเป็นระบบอัตโนมัติให้คุณ
            </p>
          </div>

          {submitted ? (
            <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-cyber-blue mb-2">รับทราบเป้าหมายแล้ว!</h3>
              <p className="text-white">สถาปนิกของเรากำลังวิเคราะห์ปัญหาและจะติดต่อกลับโดยเร็วที่สุด</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto relative z-10">
              <div className="space-y-2">
                <label htmlFor="challenge" className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  งานคอขวดของคุณคืออะไร?
                </label>
                <textarea 
                  id="challenge" 
                  rows={4}
                  required
                  placeholder="เช่น ต้องคีย์ข้อมูลจาก PDF ลง Excel ทุกวัน..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  ช่องทางติดต่อกลับ
                </label>
                <input 
                  type="text" 
                  id="contact" 
                  required
                  placeholder="Email หรือ เบอร์โทรศัพท์"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 font-bold text-lg py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-deep-glow"
              >
                ท้าทายระบบของเรา <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
