'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Scale, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  BookOpen,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export function RagChatSimulator() {
  const [useCase, setUseCase] = useState('student');

  const useCaseData: any = {
    hr: {
      id: 'hr',
      label: 'ฝ่ายปฏิบัติการ / HR',
      icon: <Users size={18} />,
      question: "เบิกงบจัดเลี้ยงลูกค้า ต้องใช้ฟอร์มไหน?",
      answer: "ใช้ฟอร์ม EX-04 ครับ สำหรับยอดไม่เกิน 5,000 บาท หัวหน้าแผนกสามารถเซ็นอนุมัติได้เลยครับ",
      citation: "คู่มือเบิกจ่าย_v2.pdf (หน้า 14)",
      color: "text-blue-400",
      bgAlert: "bg-blue-500/10 border-blue-500/20"
    },
    student: {
      id: 'student',
      label: 'ทะเบียนนักศึกษา',
      icon: <GraduationCap size={18} />,
      question: "ขอข้อมูลประวัติและตารางเรียนของ นักศึกษาชื่อ นายสมพงษ์ หน่อยครับ",
      answer: `ข้อมูลของ นายสมพงษ์ (รหัสนักศึกษา: 66012345)
• วัน/เดือน/ปีเกิด: 15 พฤษภาคม 2548
• เวลาเกิด: 08:30 น.

📚 ตารางเรียนวันนี้ (วันศุกร์):
09:00 - 12:00 | CS101 วิทยาการคอมพิวเตอร์เบื้องต้น (ห้อง 401)
13:00 - 15:00 | EN102 ภาษาอังกฤษเพื่อการสื่อสาร (ห้อง 205)`,
      citation: "Student_DB_2026 / Academic_Schedule.json",
      color: "text-amber-400",
      bgAlert: "bg-amber-500/10 border-amber-500/20"
    },
    librarian: {
      id: 'librarian',
      label: 'บรรณารักษ์ / ห้องสมุด',
      icon: <BookOpen size={18} />,
      question: "กำลังหาหนังสือเกี่ยวกับการเขียน Prompt ภาษาไทย สำหรับคนเริ่มต้น มีแนะนำไหม และอยู่ชั้นไหน?",
      answer: "แนะนำหนังสือ 'Mastering AI Prompt ฉบับภาษาไทย' โดย อ.สมชาย (ตีพิมพ์ปี 2568) ครับ เนื้อหาครอบคลุมตั้งแต่พื้นฐานถึงการประยุกต์ใช้ในงานจริง\n\n📍 พิกัด: โซนเทคโนโลยีและนวัตกรรม ชั้น 3 หมวด QA76.76 \n✅ สถานะปัจจุบัน: มีหนังสือว่างบนชั้น 2 เล่มครับ",
      citation: "Library_Catalog_Index.csv / Book_Summary_DB",
      color: "text-purple-400",
      bgAlert: "bg-purple-500/10 border-purple-500/20"
    },
    legal: {
      id: 'legal',
      label: 'ฝ่ายกฎหมาย / บริหาร',
      icon: <Scale size={18} />,
      question: "สัญญาลูกค้าตัวใหม่นี้ ขัดกับนโยบาย NDA หลักของเราไหม?",
      answer: "พบความเสี่ยงครับ ข้อ 4.2 ระบุให้คู่ค้าเปิดเผยข้อมูลรายชื่อซัพพลายเออร์ได้ ซึ่งขัดกับนโยบาย NDA หลักข้อ 2.1 ของเราครับ",
      citation: "Master_NDA_2025.pdf (หน้า 3)",
      color: "text-rose-400",
      bgAlert: "bg-rose-500/10 border-rose-500/20"
    }
  };

  const current = useCaseData[useCase];

  return (
    <div className="w-full max-w-5xl mx-auto my-20 space-y-10">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-black text-white">RAG Experience <span className="text-cyber-blue">Simulator</span></h3>
        <p className="text-gray-500">ทดสอบการสืบค้นข้อมูลจริงในสถานการณ์ที่แตกต่างกัน</p>
      </div>

      {/* ส่วนปุ่มเลือก Use Case */}
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {Object.values(useCaseData).map((type: any) => (
          <button
            key={type.id}
            onClick={() => setUseCase(type.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border active:scale-95 ${
              useCase === type.id 
                ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50 shadow-cyber-glow/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border-white/5'
            }`}
          >
            {type.icon}
            {type.label}
          </button>
        ))}
      </div>

      {/* ส่วนหน้าต่าง Chat */}
      <div className="glass-card rounded-[32px] border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-black/40 min-h-[600px] relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none" />
        
        {/* Header ของ Chat */}
        <div className="bg-white/[0.02] px-8 py-6 border-b border-white/5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyber-blue to-blue-600 flex items-center justify-center shadow-cyber-glow/20">
              <Search size={22} className="text-black" />
            </div>
            <div>
              <p className="text-lg font-black text-white tracking-wide flex items-center gap-2">
                Aetox Enterprise AI <Sparkles size={14} className="text-cyber-blue" />
              </p>
              <p className="text-[11px] text-emerald-400 flex items-center uppercase tracking-widest font-black">
                <CheckCircle2 size={12} className="mr-1.5" /> Active Knowledge Base
              </p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-black/40 rounded-full text-[11px] text-gray-500 font-mono border border-white/5">
            RAG Engine v2.4
          </div>
        </div>
        
        {/* ช่องแชท */}
        <div className="p-10 flex flex-col gap-10 flex-1 relative z-10">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
              key={useCase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* ข้อความจากผู้ใช้ */}
              <div className="flex justify-end">
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white/5 backdrop-blur-md text-gray-200 px-6 py-4 rounded-[24px] rounded-tr-sm max-w-[80%] text-base border border-white/10 shadow-lg"
                >
                  {current.question}
                </motion.div>
              </div>
              
              {/* ข้อความจาก AI */}
              <div className="flex justify-start">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-cyber-blue/5 backdrop-blur-md text-gray-100 px-8 py-7 pr-14 rounded-[32px] rounded-tl-sm max-w-[90%] text-base border border-cyber-blue/20 shadow-2xl relative group"
                >
                  {/* ไอคอน Help */}
                  <div className="absolute top-6 right-6">
                    <HelpCircle size={18} className="text-cyber-blue/30 cursor-help group-hover:text-cyber-blue/60 transition-colors" />
                  </div>

                  {/* คำตอบ */}
                  <div className="mb-8 leading-relaxed text-gray-200 whitespace-pre-line font-medium">
                    {current.answer}
                  </div>
                  
                  {/* ปุ่มอ้างอิงเอกสาร */}
                  <div className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-[12px] font-black border transition-all hover:scale-105 active:scale-95 ${current.bgAlert} ${current.color}`}>
                    <FileText size={16} />
                    <span className="uppercase tracking-wider">อ้างอิง: {current.citation}</span>
                    <ArrowRight size={14} className="ml-1 opacity-70" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
      </div>
    </div>
  );
}
