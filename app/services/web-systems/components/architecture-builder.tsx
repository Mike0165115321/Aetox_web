'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Server, Layout, BrainCircuit, Activity, 
  CheckCircle2, ChevronDown, Cpu, ShieldCheck, Zap,
  Terminal, Globe, MousePointer2
} from 'lucide-react';

// ประเภทของระบบที่รองรับ
type SystemType = 'none' | 'ecommerce' | 'internal' | 'data';

export default function ArchitectureBuilder() {
  const [selectedSystem, setSelectedSystem] = useState<SystemType>('none');
  const [buildStep, setBuildStep] = useState<number>(0);
  const [isBuilding, setIsBuilding] = useState<boolean>(false);

  // ฐานข้อมูล Configuration สำหรับแต่ละประเภทธุรกิจ
  const systemConfigs = {
    ecommerce: {
      title: 'E-Commerce / B2C Platform',
      scale: 'High-Traffic Scale',
      layers: [
        { id: 'db', name: 'Scalable PostgreSQL', desc: 'ฐานข้อมูลรองรับธุรกรรมจำนวนมากแบบ ACID มั่นใจทุกยอดขาย', icon: Database, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
        { id: 'api', name: 'High-Traffic API Layer', desc: 'โหลดบาลานซ์และจัดการ Request หลักแสนด้วย Node.js/Go', icon: Server, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
        { id: 'front', name: 'Next.js 14 Storefront', desc: 'หน้าเว็บโหลดไวระดับ Edge Network (SEO Optimized)', icon: Layout, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
        { id: 'ai', name: 'Inventory & Rec-AI', desc: 'AI แนะนำสินค้าและคุมสต็อกกันของขาดแบบ Real-time', icon: BrainCircuit, color: 'text-cyber-blue', bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/30' }
      ],
      impact: 'รองรับผู้ใช้งานหลักแสนพร้อมกัน ไม่ล่ม ไม่หน่วง ป้องกันการเสียโอกาสสร้างยอดขาย (Revenue Loss) 100%'
    },
    internal: {
      title: 'Internal Operations Dashboard',
      scale: 'Enterprise Security',
      layers: [
        { id: 'db', name: 'Secure Relational DB', desc: 'ฐานข้อมูลเก็บความลับองค์กรระดับสูงสุด เข้ารหัส 2 ชั้น', icon: Database, color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/30' },
        { id: 'api', name: 'Role-Based API Core', desc: 'ระบบจัดการสิทธิ์ผู้ใช้งาน (RBAC) อย่างรัดกุมระดับธนาคาร', icon: ShieldCheck, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
        { id: 'front', name: 'Admin Dashboard', desc: 'UI/UX สำหรับใช้งานในองค์กร เร็วและเข้าใจง่าย ลดเวลาเทรนงาน', icon: Layout, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
        { id: 'ai', name: 'Workflow Automator', desc: 'AI ช่วยอนุมัติเอกสารและคีย์ข้อมูลแทนมนุษย์ ลดงานซ้ำซ้อน', icon: Cpu, color: 'text-cyber-blue', bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/30' }
      ],
      impact: 'ลดระยะเวลาและข้อผิดพลาดในการทำงาน Manual 80% ประหยัดต้นทุนแรงงานแฝงรายเดือนมหาศาล'
    },
    data: {
      title: 'Data & AI Platform',
      scale: 'Data-Driven Ready',
      layers: [
        { id: 'db', name: 'Vector DB + Warehouse', desc: 'ฐานข้อมูลความรู้สำหรับให้ AI ดึงไปใช้งานประมวลผล', icon: Database, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
        { id: 'api', name: 'Real-time Pipeline', desc: 'ท่อส่งข้อมูลแบบ Real-time ไม่ดีเลย์ รองรับ Big Data', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
        { id: 'front', name: 'Analytics Portal', desc: 'แดชบอร์ดดูข้อมูลสรุปผลสำหรับผู้บริหาร ตัดสินใจได้ทันที', icon: Layout, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
        { id: 'ai', name: 'Aetox RAG Engine', desc: 'สมองกลถาม-ตอบ อ้างอิงข้อมูลบริษัทแม่นยำ 100%', icon: BrainCircuit, color: 'text-cyber-blue', bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/30' }
      ],
      impact: 'เปลี่ยนข้อมูลนิ่งๆ ในบริษัทให้เป็น "ผู้เชี่ยวชาญ AI" ที่ช่วย C-Level ตัดสินใจได้รวดเร็วและแม่นยำ'
    }
  };

  useEffect(() => {
    if (isBuilding && buildStep < 5) {
      const timer = setTimeout(() => {
        setBuildStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (buildStep === 5) {
      setIsBuilding(false);
    }
  }, [isBuilding, buildStep]);

  const handleStartBuild = (type: SystemType) => {
    if (type === 'none') return;
    setSelectedSystem(type);
    setBuildStep(0);
    setIsBuilding(true);
  };

  const activeConfig = selectedSystem !== 'none' ? systemConfigs[selectedSystem] : null;

  // ─── Render Logic ───
  return (
    <div className="w-full">
      {/* ─── Mobile View ─── */}
      <div className="md:hidden space-y-6">
        <AnimatePresence mode="wait">
          {selectedSystem === 'none' ? (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-3xl border-white/10 bg-black/40">
                <p className="text-cyber-blue font-black text-[10px] uppercase tracking-widest mb-4">Strategic Question</p>
                <h3 className="text-xl font-bold text-white mb-8 leading-tight">เป้าหมายหลักของระบบคุณคืออะไร?</h3>
                <div className="space-y-3">
                  {[
                    { label: 'ขายของ / บริการลูกค้า (B2C)', value: 'ecommerce' as SystemType },
                    { label: 'จัดการงานภายในองค์กร (B2B)', value: 'internal' as SystemType },
                    { label: 'วิเคราะห์ข้อมูล / ใช้ AI', value: 'data' as SystemType }
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleStartBuild(opt.value)}
                      className="w-full p-5 rounded-2xl border border-white/5 bg-white/5 text-left text-sm font-bold text-gray-300 hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all active:scale-[0.98]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              {/* Strategic Result Badge */}
              <div className="bg-cyber-blue/10 border border-cyber-blue/30 p-4 rounded-2xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cyber-blue" size={24} />
                  <div>
                    <p className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Architecture</p>
                    <p className="text-white font-bold">{activeConfig?.title}</p>
                  </div>
                </div>
                {isBuilding && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                    <Zap size={12} className="text-amber-400 animate-pulse" />
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Building</span>
                  </div>
                )}
              </div>

              {/* Stack Detail */}
              <div className="glass-card p-6 rounded-3xl border-white/10 bg-black/60 space-y-4">
                <AnimatePresence>
                  {buildStep === 5 && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-emerald-400 text-xs leading-relaxed font-bold mb-4"
                    >
                      "{activeConfig?.impact}"
                    </motion.p>
                  )}
                </AnimatePresence>
                
                <div className="flex flex-col-reverse gap-2">
                  {activeConfig?.layers.map((layer, idx) => {
                    const isVisible = buildStep > idx;
                    return (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-500 ${
                          isVisible ? `${layer.bg} ${layer.border}` : 'border-transparent opacity-0'
                        }`}
                      >
                        <layer.icon size={16} className={layer.color} />
                        <div className="flex-1">
                          <span className="text-[11px] font-bold text-gray-300">{layer.name}</span>
                        </div>
                        <span className="text-[8px] text-gray-500 font-bold uppercase">Layer 0{idx + 1}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <button 
                  onClick={() => setSelectedSystem('none')}
                  disabled={isBuilding}
                  className="w-full mt-6 py-3 rounded-xl border border-white/10 text-[11px] font-black text-gray-500 uppercase tracking-widest disabled:opacity-30"
                >
                  เริ่มการวิเคราะห์ใหม่
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Desktop View (Preserved) ─── */}
      <div className="hidden md:block w-full glass-card rounded-[24px] border border-white/10 shadow-2xl overflow-hidden bg-black/40">
        
        {/* 1. Header (Status Bar) */}
        <div className="bg-ultra-dark/90 px-6 py-5 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20">
              <Cpu className="text-cyber-blue" size={20} />
            </div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">จำลองการออกแบบระบบ (Simulation)</h2>
          </div>
          
          <div className="flex gap-6 text-[10px] font-bold">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase tracking-widest">ARCHITECTURE</span>
              <span className="text-white">{activeConfig ? activeConfig.title : 'N/A'}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase tracking-widest">STATUS</span>
              <span className={`${isBuilding ? 'text-amber-400 animate-pulse' : (buildStep === 5 ? 'text-emerald-400' : 'text-gray-500')} flex items-center gap-1`}>
                {isBuilding ? 'BUILDING...' : (buildStep === 5 ? <><CheckCircle2 size={12}/> READY</> : 'WAITING')}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Main Builder Display */}
        <div className="relative p-6 md:p-10 min-h-[520px] flex flex-col bg-gradient-to-b from-transparent to-black/20">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-5 pointer-events-none" />
          
          {selectedSystem === 'none' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 animate-float">
                <Terminal size={28} className="text-gray-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">เริ่มต้นการออกแบบระบบของคุณ</h3>
                <p className="text-sm text-gray-500 max-w-xs font-medium leading-relaxed">เลือกประเภทธุรกิจด้านล่างเพื่อดูโครงสร้างสถาปัตยกรรมระดับ Enterprise</p>
              </div>
            </div>
          )}

          {/* 4. Business Impact Overlay */}
          <div className="h-28 mb-4 relative z-20">
            <AnimatePresence>
              {buildStep === 5 && activeConfig && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 p-4 md:p-5 rounded-2xl shadow-emerald-500/5 backdrop-blur-xl"
                >
                  <h4 className="text-[10px] font-bold text-emerald-400 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <CheckCircle2 size={12} /> ผลลัพธ์ทางธุรกิจ (Impact)
                  </h4>
                  <p className="text-sm md:text-[15px] font-bold text-white leading-relaxed">
                    {activeConfig.impact}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Layer Stack */}
          <div className="flex-1 flex flex-col justify-end">
            {activeConfig && (
              <div className="flex flex-col-reverse gap-3 relative z-10 w-full max-w-xl mx-auto">
                {activeConfig.layers.map((layer, index) => {
                  const isVisible = buildStep > index;
                  return (
                    <motion.div 
                      key={layer.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      className="relative"
                    >
                      {index < 3 && isVisible && buildStep > index + 1 && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cyber-blue/30" />
                      )}
                      
                      <div className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-md transition-all duration-500 ${
                        isVisible ? `${layer.bg} ${layer.border} shadow-lg` : 'border-transparent'
                      }`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border bg-ultra-dark ${layer.border}`}>
                          <layer.icon className={layer.color} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-0.5">
                            <h4 className={`text-sm font-bold ${layer.color}`}>{layer.name}</h4>
                            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Layer 0{index + 1}</span>
                          </div>
                          <p className="text-[11px] text-gray-400 font-medium leading-tight">{layer.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 5. Footer Controls */}
        <div className="bg-ultra-dark/95 px-6 py-6 border-t border-white/5 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Domain</span>
            <div className="relative w-full md:w-72">
              <select 
                value={selectedSystem}
                onChange={(e) => handleStartBuild(e.target.value as SystemType)}
                disabled={isBuilding}
                className="w-full appearance-none bg-black/40 border border-white/10 text-white text-sm font-bold rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-cyber-blue disabled:opacity-50 cursor-pointer transition-all"
              >
                <option value="none" className="bg-[#0A0F1C] text-white">-- เลือกประเภทธุรกิจ --</option>
                <option value="ecommerce" className="bg-[#0A0F1C] text-white">1. B2C / E-Commerce Platform</option>
                <option value="internal" className="bg-[#0A0F1C] text-white">2. Internal Business Ops (B2B)</option>
                <option value="data" className="bg-[#0A0F1C] text-white">3. AI & Data Analytics Engine</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <button 
            onClick={() => handleStartBuild(selectedSystem)}
            disabled={selectedSystem === 'none' || isBuilding}
            className="w-full md:w-auto px-10 py-3 bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue text-sm font-bold rounded-xl border border-cyber-blue/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2"
          >
            {isBuilding ? (
              <>
                <Zap size={16} className="animate-pulse" />
                BUILDING...
              </>
            ) : 'เริ่มใหม่'}
          </button>
        </div>
      </div>
    </div>
  );
}
