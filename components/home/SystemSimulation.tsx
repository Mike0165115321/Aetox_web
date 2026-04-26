'use client';
import { motion } from 'framer-motion';
import { Database, Cpu, MessageSquare, ShieldCheck, Zap, Server } from 'lucide-react';

export default function SystemSimulation() {
  const steps = [
    { id: 1, label: 'Enterprise Data Store', icon: Database, color: 'text-aetox-text-soft' },
    { id: 2, label: 'RAG Retrieval Engine', icon: Server, color: 'text-aetox-accent' },
    { id: 3, label: 'Neural Logic Processing', icon: Cpu, color: 'text-aetox-accent' },
    { id: 4, label: 'Security Gateway', icon: ShieldCheck, color: 'text-aetox-text-soft' },
    { id: 5, label: 'Decision Output', icon: Zap, color: 'text-aetox-accent' }
  ];

  return (
    <section className="py-32 relative bg-aetox-atmosphere overflow-hidden border-t border-aetox-border">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 text-aetox-accent/5"
        >
          <Cpu size={600} strokeWidth={0.2} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 text-aetox-accent/5"
        >
          <Server size={400} strokeWidth={0.2} />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-fluid-h2 font-black text-aetox-text-main uppercase tracking-tighter">
            System <span className="text-aetox-accent">Simulation</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft uppercase tracking-widest font-bold">
            สถาปัตยกรรมที่เปลี่ยนข้อมูลมหาศาล ให้กลายเป็นการตัดสินใจที่แม่นยำ
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aetox-border to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-aetox-surface border border-aetox-border flex items-center justify-center mb-6 group-hover:border-aetox-accent/50 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-aetox-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className={`w-8 h-8 ${step.color} relative z-10`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-aetox-bg border border-aetox-border flex items-center justify-center text-[10px] font-black text-aetox-text-muted">
                    0{step.id}
                  </div>
                </div>
                <p className="text-[10px] font-black text-aetox-text-main uppercase tracking-[0.2em] text-center mb-2">
                  {step.label}
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-aetox-border group-hover:bg-aetox-accent transition-colors" />
              </motion.div>
            ))}
          </div>

          {/* Interactive Case Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 p-8 glass-card rounded-[32px] border-aetox-accent/10 bg-aetox-accent/[0.02] max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-aetox-accent text-[8px] font-black uppercase tracking-widest">
                Live Case Logic
              </div>
            </div>
            <p className="text-aetox-text-soft text-sm italic font-medium">
              "ประมวลผลเอกสารสัญญา 10,000 ฉบับ เพื่อหาความเสี่ยงทางกฎหมายภายใน 3.2 วินาที ด้วยความแม่นยำ 99.9%"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
