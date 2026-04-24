'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Scale, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Database,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  HelpCircle,
  Upload,
  Layers,
  Cpu,
  Zap,
  Info
} from 'lucide-react';

interface AiAgentsSimulatorProps {
  dict: any;
}

export default function AiAgentsSimulator({ dict }: AiAgentsSimulatorProps) {
  const { simulator } = dict;
  const [useCase, setUseCase] = useState('student');
  const [queriesPerDay, setQueriesPerDay] = useState(50);
  const [avgSalary, setAvgSalary] = useState(35000);

  const calculations = useMemo(() => {
    const currentCase = simulator.useCases[useCase];
    const workingDays = 22; 
    const costPerMinute = avgSalary / 9600; // 9600 = 20 days * 8 hours * 60 mins
    const manualMinutesPerMonth = queriesPerDay * currentCase.manualMinutes * workingDays;
    const manualHoursPerMonth = manualMinutesPerMonth / 60;
    const wastedCostPerMonth = manualMinutesPerMonth * costPerMinute;
    
    const aiMinutesPerMonth = queriesPerDay * (10 / 60) * workingDays; // Assume 10 seconds per query
    const aiHoursPerMonth = aiMinutesPerMonth / 60;
    const aiCostPerMonth = aiMinutesPerMonth * costPerMinute;
    
    return { 
      currentCase, 
      manualHoursPerMonth, 
      wastedCostPerMonth, 
      savedHours: manualHoursPerMonth - aiHoursPerMonth, 
      savedMoney: wastedCostPerMonth - aiCostPerMonth 
    };
  }, [useCase, queriesPerDay, avgSalary, simulator.useCases]);

  const iconMap: any = {
    hr: <Users size={18} />,
    student: <GraduationCap size={18} />,
    librarian: <BookOpen size={18} />,
    legal: <Scale size={18} />,
    CheckCircle2: <CheckCircle2 size={16} className="text-cyber-blue" />,
    RefreshCw: <RefreshCw size={16} className="text-cyber-blue" />,
    ShieldCheck: <ShieldCheck size={16} className="text-cyber-blue" />,
    Upload: <Upload size={18} />,
    Layers: <Layers size={18} />,
    Cpu: <Cpu size={18} />,
    Zap: <Zap size={18} />
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-black uppercase tracking-widest"
        >
          <Zap className="w-3 h-3" /> {simulator.subtitle}
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter flex flex-col items-center gap-2">
          <span>RAG System</span>
          <span className="text-2xl md:text-3xl text-cyber-blue tracking-normal font-bold">จากทาง Aetox AI</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          {simulator.description}
        </p>
      </div>

      <div className="glass-card rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl bg-black/40 backdrop-blur-3xl">
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Use Case Selector (Enhanced & More Prominent) */}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(simulator.useCases).map((type: any) => (
              <button
                key={type.id}
                onClick={() => setUseCase(type.id)}
                className={`group flex items-center gap-4 px-8 py-4 rounded-2xl text-base font-black transition-all duration-500 border-2 active:scale-95 relative overflow-hidden ${
                  useCase === type.id 
                    ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50 shadow-cyber-glow/30' 
                    : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                {/* Active Indicator Glow */}
                {useCase === type.id && (
                  <motion.div 
                    layoutId="active-glow"
                    className="absolute inset-0 bg-cyber-blue/10 blur-xl"
                  />
                )}
                
                <div className={`transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${useCase === type.id ? 'text-cyber-blue' : 'text-gray-500'}`}>
                  {iconMap[type.id]}
                </div>
                <span className="relative z-10">{type.label}</span>
                
                {/* Click Hint (Dot) */}
                {useCase !== type.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-cyber-blue group-hover:shadow-cyber-glow transition-all" />
                )}
              </button>
            ))}
          </div>

          {/* AI Simulator Interface (Layer 1: The Experience) */}
          <motion.div 
            layout
            className="bg-[#0D1321] border border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-5 pointer-events-none" />
            
            <div className="bg-white/[0.03] px-8 py-6 border-b border-white/5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyber-blue to-deep-blue flex items-center justify-center shadow-cyber-glow/20">
                  <Search size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white tracking-tight">ระบบประมวลผลอัจฉริยะ Aetox RAG</p>
                  <p className="text-[11px] text-emerald-400 flex items-center tracking-widest font-black">
                    <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>●</motion.span>
                    <span className="ml-2">ฐานข้อมูลเปิดใช้งานอยู่ (ACTIVE)</span>
                  </p>
                </div>
              </div>
              <div className="hidden md:block px-4 py-1.5 bg-white/5 rounded-xl text-[11px] text-gray-500 font-mono border border-white/5 uppercase font-black tracking-widest">
                โปรโตคอล RAG v2.4.8
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex-1 flex flex-col gap-10 min-h-[400px] relative z-10">
              <div className="flex justify-end">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={`q-${useCase}`}
                  className="bg-white/5 backdrop-blur-md text-gray-200 px-6 py-5 rounded-[2rem] rounded-tr-sm max-w-[80%] text-base border border-white/10 shadow-2xl leading-relaxed"
                >
                  {calculations.currentCase.question}
                </motion.div>
              </div>
              
              <div className="flex justify-start">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={`a-${useCase}`}
                  transition={{ delay: 0.3 }}
                  className="bg-cyber-blue/5 backdrop-blur-md text-gray-100 px-8 py-8 rounded-[2rem] rounded-tl-sm max-w-[90%] text-base border border-cyber-blue/20 shadow-cyber-glow/5 relative group"
                >
                  <div className="absolute top-6 right-6">
                    <div className="relative flex items-center justify-center group/tooltip">
                      <HelpCircle size={20} className="text-cyber-blue/40 hover:text-cyber-blue cursor-help transition-colors" />
                      <div className="absolute right-0 bottom-full mb-4 w-72 p-5 bg-[#131A2B] border border-white/10 text-xs text-gray-400 rounded-[1.5rem] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-50 shadow-2xl pointer-events-none leading-relaxed">
                        <p className="font-black text-white mb-2 uppercase tracking-widest">💡 รองรับข้อมูลหลายรูปแบบ</p>
                        หากฐานข้อมูลมีไฟล์รูปภาพ AI สามารถดึงภาพหรือไฟล์ PDF ที่เกี่ยวข้องมาแสดงผลประกอบคำตอบได้ทันที
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 leading-relaxed text-gray-200 whitespace-pre-line font-medium text-lg">
                    {calculations.currentCase.answer}
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-4 px-8 py-4 rounded-[1.5rem] text-sm font-black border-2 transition-all cursor-pointer uppercase tracking-[0.2em] shadow-lg group/source relative overflow-hidden ${calculations.currentCase.bgAlert} ${calculations.currentCase.color} border-current/20 hover:border-current/40`}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/source:opacity-100 transition-opacity" />
                    <div className="bg-current/10 p-2 rounded-xl">
                      <FileText size={20} />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] opacity-60 font-black mb-0.5 uppercase">แหล่งข้อมูลอ้างอิง</span>
                      <span className="text-white text-base tracking-normal">{calculations.currentCase.citation}</span>
                    </div>
                    <div className="ml-4 bg-white/10 p-2 rounded-full group-hover/source:bg-white/20 transition-all">
                      <ArrowRight size={18} className="group-hover/source:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="w-full h-px bg-white/5 my-4" />

          {/* Strategic Impact Summary (Layer 2: The Brutal Comparison) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-10"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-cyber-blue">
                  <div className="p-2.5 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20">
                    <Scale size={24} />
                  </div>
                  <h3 className="font-bold text-3xl tracking-tight text-white">สรุปผลลัพธ์เชิงกลยุทธ์</h3>
                </div>
                <p className="text-gray-400 font-medium text-lg leading-relaxed">
                  เปรียบเทียบความคุ้มค่า: <span className="text-cyber-blue">เงิน + ความเร็ว + การรองรับ</span> ที่คุณวัดผลได้จริง
                </p>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] text-gray-400 font-black tracking-[0.2em] uppercase">
                โมเดลธุรกิจฉบับปรับปรุง v2.0
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before: Human Only */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#121826]/60 border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-white group-hover:rotate-12 transition-transform duration-700">
                  <Users size={120} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">ทีมงานพนักงาน (คน)</h4>
                      <p className="text-xs text-gray-500 font-black uppercase tracking-widest">กระบวนการทำงานแบบดั้งเดิม</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-gray-400 font-medium">ความเร็วต่อคำถาม</span>
                      <span className="text-white font-bold">3 - 10 นาที</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-gray-400 font-medium">กำลังการรองรับ (Capacity)</span>
                      <span className="text-white font-bold">~250 เคส / วัน</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-gray-400 font-medium">เวลาทำงาน</span>
                      <span className="text-white font-bold">8 ชม. (มีช่วง Peak ตอบไม่ทัน)</span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <span className="text-gray-400 font-bold">ค่าแรงทีมงาน (5 คน)</span>
                      <span className="text-rose-500 font-black text-2xl">75,000.-</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* After: Aetox RAG System */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-cyber-blue/20 to-deep-blue/20 border-2 border-cyber-blue/40 p-10 rounded-[3rem] relative overflow-hidden group shadow-cyber-glow/20"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20 text-cyber-blue group-hover:rotate-12 transition-transform duration-700">
                  <Zap size={140} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyber-blue/20 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue shadow-cyber-glow/10">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">ระบบ Aetox RAG</h4>
                      <p className="text-xs text-cyber-blue font-black uppercase tracking-widest">เทคโนโลยีอัจฉริยะยุคใหม่</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                      <span className="text-gray-300 font-medium">ความเร็วต่อคำถาม</span>
                      <span className="text-cyber-blue font-black text-xl italic">3 - 10 วินาที</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                      <span className="text-gray-300 font-medium">กำลังการรองรับ (Capacity)</span>
                      <span className="text-emerald-400 font-black text-xl tracking-tighter">1,000+ เคส / วัน</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                      <span className="text-gray-300 font-medium">เวลาทำงาน</span>
                      <span className="text-emerald-400 font-black tracking-widest uppercase">24 ชม. ไร้รอยต่อ</span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <span className="text-gray-300 font-bold">ค่าดูแลระบบ / API</span>
                      <span className="text-cyber-blue font-black text-3xl">8,000.-</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Final Verdict Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-emerald-500/10 border border-emerald-500/30 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
              
              <div className="space-y-4 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">
                  <CheckCircle2 size={14} /> ผลลัพธ์เชิงธุรกิจที่วัดผลได้จริง
                </div>
                <h4 className="text-3xl font-bold text-white tracking-tight leading-tight">รองรับงานเพิ่มขึ้น <span className="text-emerald-400">4 เท่า</span> โดยลดต้นทุนลง <span className="text-emerald-400">90%</span></h4>
                <p className="text-gray-400 text-base font-medium max-w-xl">
                  ปลดล็อกข้อจำกัดของจำนวนพนักงาน ลูกค้าไม่ต้องรอนานอีกต่อไป และความแม่นยำสูงขึ้น 99% ด้วยระบบอ้างอิงเอกสารอัตโนมัติ
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center md:text-right min-w-[300px] shadow-2xl relative z-10">
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">ประหยัดงบประมาณทันที</p>
                <div className="flex items-baseline justify-center md:justify-end gap-3 text-emerald-400">
                  <span className="text-6xl font-black tracking-tighter">67,000.-</span>
                  <span className="text-lg font-bold tracking-tight opacity-70">บาท / เดือน</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-4 font-mono uppercase tracking-widest leading-relaxed italic">
                  * คำนวณจากส่วนต่างระหว่างค่าแรงทีมงาน 5 คน <br/> ชนกับค่าบริการ Aetox AI ขั้นพื้นฐาน
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full h-px bg-white/5 my-4" />

          {/* Features RAG Dashboard (Layer 3: The Technology) */}
          <div className="bg-cyber-blue/[0.03] border border-white/5 p-12 rounded-[2.5rem] w-full relative overflow-hidden group shadow-2xl bg-black/40">
            <div className="absolute top-0 right-0 p-12 opacity-5 transition-transform group-hover:scale-110 pointer-events-none text-cyber-blue">
              <Database size={180} />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2 space-y-12">
                <div className="flex items-center gap-4 text-cyber-blue">
                  <div className="p-3 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/20">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl tracking-tight text-white">เทคโนโลยี RAG ระดับองค์กร</h3>
                    <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.2em] mt-1">ARCHITECTURE & CAPABILITIES</p>
                  </div>
                </div>
                
                <ul className="space-y-10 text-sm text-gray-400 relative z-10">
                  {simulator.features.map((feature: any, idx: number) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      key={idx} 
                      className="flex items-start gap-6"
                    >
                      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl shrink-0 text-cyber-blue shadow-lg group-hover:shadow-cyber-glow/20 transition-all">
                        {iconMap[feature.icon]}
                      </div>
                      <div>
                        <span className="font-black text-white block mb-2 text-xl tracking-tight">{feature.title}</span>
                        <span className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="relative z-10 bg-black/60 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-white/5 text-gray-500 border-b border-white/10">
                      <tr>
                        <th className="px-8 py-6 font-black uppercase tracking-widest w-[40%]">คุณสมบัติ</th>
                        <th className="px-8 py-6 font-black uppercase tracking-widest w-[30%] opacity-40">AI ทั่วไป</th>
                        <th className="px-8 py-6 font-black tracking-widest text-cyber-blue w-[30%] flex items-center gap-2">
                          <CheckCircle2 size={16} /> <span className="font-black">AETOX RAG</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-gray-500">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-6 text-gray-300 font-bold">แหล่งข้อมูล</td>
                        <td className="px-8 py-6 italic text-gray-600">อินเทอร์เน็ต</td>
                        <td className="px-8 py-6 text-white bg-cyber-blue/5 font-black uppercase tracking-tighter">ข้อมูลภายในองค์กร</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-6 text-gray-300 font-bold">ความแม่นยำ</td>
                        <td className="px-8 py-6 text-rose-500/50 font-medium">50-70% (อาจเดา)</td>
                        <td className="px-8 py-6 text-white bg-cyber-blue/5 font-black uppercase tracking-tighter">อ้างอิงเอกสาร 100%</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-6 text-gray-300 font-bold">ความปลอดภัย</td>
                        <td className="px-8 py-6 text-rose-500/50 font-medium">ความเสี่ยงสูง</td>
                        <td className="px-8 py-6 text-emerald-400 bg-cyber-blue/5 font-black uppercase tracking-tighter italic underline decoration-emerald-500/30 underline-offset-4">ปลอดภัย 100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Layer: Admin Knowledge Pipeline (Separated Section) ─── */}
      <section className="pt-20 space-y-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Database className="w-3 h-3" /> โครงสร้างระบบหลังบ้าน
          </motion.div>
          <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">{simulator.pipeline.subtitle}</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            {simulator.pipeline.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {simulator.pipeline.steps.map((step: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-10 rounded-[2.5rem] relative group hover:border-cyber-blue/40 transition-all duration-500 bg-black/20`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              
              {step.status && (
                <div className="absolute top-8 right-8 bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                  {step.status}
                </div>
              )}
              
              <div className="relative z-10">
                <p className="text-xs font-black text-cyber-blue mb-3 uppercase tracking-[0.3em] opacity-60">ขั้นตอนที่ {idx + 1}</p>
                <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyber-blue">
                    {idx === 0 && <Upload size={22} />}
                    {idx === 1 && <Layers size={22} />}
                    {idx === 2 && <Cpu size={22} />}
                    {idx === 3 && <Zap size={22} />}
                  </div>
                  {step.title}
                </h4>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm font-medium">
                  {step.desc}
                </p>
                
                {step.tags && (
                  <div className="flex flex-wrap gap-2.5">
                    {step.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-2 bg-white/5 rounded-xl text-[11px] font-mono text-gray-400 border border-white/5">{tag}</span>
                    ))}
                    <span className="px-3 py-2 rounded-xl text-[11px] text-gray-600 font-mono italic">+ แหล่งข้อมูลอื่นๆ</span>
                  </div>
                )}

                {step.config && (
                  <div className="bg-black/40 p-6 rounded-2xl font-mono text-xs text-emerald-400/80 border border-white/5 space-y-2 shadow-inner">
                    <p className="text-gray-600 italic">// ระบบประมวลผลการแบ่งส่วนข้อมูล</p>
                    <p>ขนาดชิ้นส่วน = <span className="text-white font-bold">{step.config.size}</span></p>
                    <p>ส่วนซ้อนทับ &nbsp;= <span className="text-white font-bold">{step.config.overlap}</span></p>
                    <p>กลยุทธ์ &nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-white font-bold">&quot;เชิงความหมาย (Semantic)&quot;</span></p>
                  </div>
                )}

                {step.metrics && typeof step.metrics === 'string' && (
                  <div className="space-y-4">
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyber-blue via-deep-blue to-cyber-blue rounded-full relative" 
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono text-right uppercase tracking-[0.3em] font-black">ความละเอียดประมวลผลสูง</p>
                  </div>
                )}

                {step.metrics && typeof step.metrics === 'object' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 text-center shadow-inner">
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 font-black">ความเร็วการค้นหา</p>
                      <p className="text-xl font-black text-emerald-400">{step.metrics.latency}</p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 text-center shadow-inner">
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 font-black">อัลกอริทึม</p>
                      <p className="text-xl font-black text-white">{step.metrics.search}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note (Strategic Insight) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-[2.5rem] flex items-start gap-6 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-500 transition-transform group-hover:scale-110">
            <ShieldCheck size={80} />
          </div>
          <div className="bg-emerald-500/10 p-3 rounded-2xl text-emerald-400 shadow-emerald-500/20 shadow-lg">
            <Info size={28} />
          </div>
          <p className="text-base text-gray-400 leading-relaxed italic font-medium relative z-10">
            {simulator.pipeline.footerNote.split('ไม่ต้อง Retrain')[0]}
            <strong className="text-white font-black underline decoration-emerald-500/30 underline-offset-4">ไม่ต้อง Retrain</strong>
            {simulator.pipeline.footerNote.split('ไม่ต้อง Retrain')[1]}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
