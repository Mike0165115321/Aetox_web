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
      question: "พนักงานระดับ Manager ขึ้นไป สามารถเบิกงบประกันสุขภาพเพิ่มเติมนอกเหนือจากสวัสดิการพื้นฐานได้หรือไม่?",
      answer: "ตามนโยบายสวัสดิการปี 2567 พนักงานระดับ Manager (Grade M1 ขึ้นไป) สามารถเบิก 'Executive Health Top-up' ได้เพิ่มเติมสูงสุด 20,000 บาท/ปีครับ\n\nเงื่อนไขการเบิก:\n1. ใช้ฟอร์ม B-02 (Special Benefits)\n2. แนบใบเสร็จฉบับจริงจากสถานพยาบาลในเครือ Partner\n3. ต้องดำเนินการภายใน 30 วันนับจากวันที่ระบุในใบเสร็จครับ",
      citation: "Employee_Benefits_2024.pdf (Section 4.3, หน้า 28)",
      color: "text-blue-400",
      bgAlert: "bg-blue-500/10 border-blue-500/20"
    },
    student: {
      id: 'student',
      label: 'ทะเบียนนักศึกษา',
      icon: <GraduationCap size={18} />,
      question: "ต้องการลงทะเบียนเรียนวิชาเลือกเสรีข้ามคณะ ต้องมีคุณสมบัติอย่างไร และเกรดเฉลี่ยขั้นต่ำเท่าไหร่ครับ?",
      answer: `สำหรับการลงทะเบียนวิชาเลือกเสรีข้ามคณะ (Cross-Faculty Electives) มีเงื่อนไขหลักดังนี้ครับ:

• ต้องเป็นนักศึกษาชั้นปีที่ 3 ขึ้นไป
• เกรดเฉลี่ยสะสม (GPAX) ไม่ต่ำกว่า 2.75
• ต้องได้รับอนุมัติจากอาจารย์ที่ปรึกษาผ่านฟอร์มออนไลน์ RE-09

หมายเหตุ: รายวิชานั้นๆ ต้องไม่ถูกระบุว่าเป็น 'วิชาสงวนสิทธิ์เฉพาะนักศึกษาในคณะ' ในคู่มือหลักสูตรครับ`,
      citation: "Academic_Regulation_2565.pdf (Section 7.2)",
      color: "text-amber-400",
      bgAlert: "bg-amber-500/10 border-amber-500/20"
    },
    librarian: {
      id: 'librarian',
      label: 'บรรณารักษ์ / ห้องสมุด',
      icon: <BookOpen size={18} />,
      question: "หาเอกสารวิจัยที่เกี่ยวกับ 'Autonomous Drone' ที่ตีพิมพ์ในปี 2024 และเน้นเรื่อง Computer Vision มีแนะนำไหม?",
      answer: "พบเอกสารที่ตรงเงื่อนไขในคลังวิจัยภายใน 1 ฉบับครับ:\n\n📄 ชื่อ: 'Vision-Based Navigation for Micro-UAVs'\n📅 ปีที่พิมพ์: มกราคม 2024\n🔍 สาระสำคัญ: การใช้เทคนิค SLAM ร่วมกับ Deep Learning ในการหลบหลีกสิ่งกีดขวางแบบ Real-time ในพื้นที่อับสัญญาณ GPS\n\nพิกัด: Digital Repository รหัส R-2024-CV-001 ครับ",
      citation: "Internal_Research_Archive_2024.csv (Row 142)",
      color: "text-purple-400",
      bgAlert: "bg-purple-500/10 border-purple-500/20"
    },
    legal: {
      id: 'legal',
      label: 'ฝ่ายกฎหมาย / บริหาร',
      icon: <Scale size={18} />,
      question: "ร่างสัญญาจ้างช่วง (Subcontractor Agreement) ฉบับใหม่ ขัดกับนโยบาย NDA หลักของบริษัทในหัวข้อการเปิดเผยข้อมูลไหม?",
      answer: "ตรวจพบข้อขัดแย้งเชิงโครงสร้าง (Structural Conflict) ครับ:\n\n🔴 จุดที่ขัดแย้ง: ร่างสัญญาจ้างช่วง ข้อ 4.2 ระบุว่า 'คู่สัญญาฝ่ายหนึ่งสามารถเปิดเผยรายชื่อซัพพลายเออร์เพื่อวัตถุประสงค์ทางการตลาดได้'\n\n🔵 ข้อกำหนดบริษัท: นโยบาย Master NDA ข้อ 2.1 ระบุชัดเจนว่า 'ข้อมูลรายชื่อซัพพลายเออร์ถือเป็นความลับสุดยอด (Highly Confidential) ห้ามเปิดเผยแก่บุคคลภายนอกโดยเด็ดขาด'\n\nคำแนะนำ: ควรตัดเนื้อหาในข้อ 4.2 ออก หรือเพิ่มเงื่อนไขการขออนุมัติล่วงหน้าเป็นลายลักษณ์อักษรครับ",
      citation: "Master_NDA_2025.pdf (หน้า 3) / Draft_Sub_A78.docx",
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
