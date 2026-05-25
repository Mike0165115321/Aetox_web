'use client';

import { motion } from 'framer-motion';
import { FileText, Send, Sparkles, AlertTriangle, ShieldCheck, Database, Bot, User, ArrowRight } from 'lucide-react';

export default function AIAgentPanel() {
  const documents = [
    { name: 'corporate_contract_v2.pdf', size: '2.4 MB', active: true },
    { name: 'finance_audit_2025.csv', size: '1.8 MB', active: false },
    { name: 'compliance_report.docx', size: '950 KB', active: false }
  ];

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[440px] rounded-2xl bg-aetox-bg/40 backdrop-blur-md overflow-hidden text-left border border-aetox-border">
      {/* Panel Left Sidebar: Documents */}
      <div className="w-full md:w-56 bg-black/10 border-b md:border-b-0 md:border-r border-aetox-border p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-aetox-text-main font-bold text-xs uppercase tracking-wider">
          <Database size={14} className="text-aetox-accent" />
          <span>คลังข้อมูลองค์กร</span>
        </div>
        <div className="space-y-2 flex-1">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                doc.active
                  ? 'bg-aetox-accent/10 border-aetox-accent/30 text-aetox-accent'
                  : 'bg-transparent border-aetox-border text-aetox-text-soft'
              }`}
            >
              <FileText size={16} className={doc.active ? 'text-aetox-accent' : 'text-aetox-text-muted'} />
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate">{doc.name}</p>
                <p className="text-[10px] text-aetox-text-muted">{doc.size}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-aetox-text-muted border-t border-aetox-border/40 pt-2 flex items-center gap-1.5">
          <ShieldCheck size={12} className="text-aetox-accent" />
          <span>Zero-Model Training Active</span>
        </div>
      </div>

      {/* Panel Main Area: Chat Simulator */}
      <div className="flex-1 flex flex-col bg-black/5">
        {/* Chat Header */}
        <div className="px-6 py-4 bg-black/10 border-b border-aetox-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-aetox-accent animate-pulse" />
            <p className="text-xs font-bold text-aetox-text-main">Aetox Legal AI Agent</p>
          </div>
          <span className="text-[10px] font-black bg-aetox-accent/10 text-aetox-accent border border-aetox-accent/20 px-2 py-0.5 rounded-md">
            RAG ACTIVE
          </span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto text-xs md:text-sm">
          {/* User Message with Avatar */}
          <div className="flex justify-end gap-3 items-start">
            <div className="max-w-[80%] bg-gradient-to-r from-aetox-accent/10 to-cyan-500/5 border border-aetox-accent/20 rounded-2xl rounded-tr-sm px-4 py-3 text-aetox-text-main font-medium shadow-md">
              วิเคราะห์ความเสี่ยงและหาข้อขัดแย้งของสัญญาจัดจ้างฉบับนี้ทีครับ
            </div>
            {/* User Avatar - LINE Style Premium */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white border border-cyan-400/30 shadow-lg shrink-0">
              <User size={14} />
            </div>
          </div>

          {/* AI Response with Avatar */}
          <div className="flex justify-start gap-3 items-start">
            {/* AI Avatar - Premium Bot Style */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aetox-accent to-emerald-600 flex items-center justify-center text-white border border-aetox-accent/30 shadow-lg shadow-aetox-glow/20 shrink-0">
              <Bot size={14} />
            </div>

            {/* AI Response Chat bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-[85%] bg-gradient-to-br from-aetox-surface-low/30 to-black/30 border border-aetox-accent/20 rounded-2xl rounded-tl-sm p-5 space-y-4 shadow-xl relative overflow-hidden"
            >
              {/* Subtle green ambient light leak inside card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-aetox-accent/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-1.5 text-aetox-accent font-bold text-xs">
                <Sparkles size={14} className="animate-spin-slow" />
                <span>ผลวิเคราะห์ความปลอดภัยสัญญา (Aetox Intelligence Report)</span>
              </div>
              <p className="text-aetox-text-soft leading-relaxed font-medium">
                ทำการค้นหาและตรวจสอบเอกสารสัญญาจัดจ้างเสร็จสิ้น ตรวจพบความเสี่ยงและจุดที่ต้องพิจารณา 2 รายการหลัก:
              </p>
              
              <div className="space-y-4 pt-2">
                {/* Item 1 */}
                <div className="flex gap-3 items-start border-l-2 border-rose-500/60 pl-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mt-0.5 shrink-0 border border-rose-500/20">
                    <AlertTriangle size={10} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-aetox-text-main text-xs md:text-sm">ความเสี่ยงด้านการเงิน (อัตราดอกเบี้ยเบี้ยปรับ)</p>
                    <p className="text-aetox-text-muted text-[11px] font-medium leading-relaxed">
                      อัตราเบี้ยปรับล่าช้าถูกตั้งไว้ที่ 15% ต่อปี ซึ่งเกินกว่าอัตราดอกเบี้ยผิดนัดสูงสุดตามที่กฎหมายกำหนดใหม่ (ไม่เกิน 5% ต่อปี)
                    </p>
                    {/* Citations PDF Pill */}
                    <div className="flex items-center gap-1.5 mt-2 bg-aetox-accent/15 border border-aetox-accent/30 text-aetox-accent px-2 py-0.5 rounded-lg w-fit text-[9px] font-bold">
                      <FileText size={10} />
                      <span>corporate_contract_v2.pdf · หน้า 12</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-3 items-start border-l-2 border-amber-500/60 pl-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mt-0.5 shrink-0 border border-amber-500/20">
                    <AlertTriangle size={10} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-aetox-text-main text-xs md:text-sm">ความรับผิดชอบไม่สมบูรณ์ (การรับประกันงาน)</p>
                    <p className="text-aetox-text-muted text-[11px] font-medium leading-relaxed">
                      ยังขาดข้อความชี้แจงการรับประกันหลังการส่งมอบระบบภายใน 1 ปีแรก ควรเพิ่มเติมวรรคนี้เพื่อป้องกันความรับผิดชอบ
                    </p>
                    {/* Citations PDF Pill */}
                    <div className="flex items-center gap-1.5 mt-2 bg-aetox-accent/15 border border-aetox-accent/30 text-aetox-accent px-2 py-0.5 rounded-lg w-fit text-[9px] font-bold">
                      <FileText size={10} />
                      <span>corporate_contract_v2.pdf · หน้า 7</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Chat Input Mockup */}
        <div className="p-4 bg-black/10 border-t border-aetox-border flex gap-3 items-center">
          <div className="flex-1 bg-black/20 rounded-xl px-4 py-3 text-aetox-text-muted/60 text-xs font-bold flex items-center justify-between border border-aetox-border/60">
            <span>พิมพ์คำถามเพิ่มเติมเพื่อวิเคราะห์เชิงลึก...</span>
            <Send size={14} className="text-aetox-text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
