'use client';

import { motion } from 'framer-motion';
import { AreaChart, TrendingUp, Cpu, Server, Activity, ArrowUpRight } from 'lucide-react';

export default function WebSystemPanel() {
  const metrics = [
    { title: 'ธุรกรรมที่ประมวลผล', value: '45,820 รายการ', change: '+24.5%', icon: <Activity size={14} className="text-cyan-400" /> },
    { title: 'ความเสถียร (System Uptime)', value: '99.99%', change: 'Edge-Native', icon: <Server size={14} className="text-aetox-accent" /> },
    { title: 'ความเร็วเฉลี่ย (Speed Index)', value: '0.4s', change: '98/100', icon: <Cpu size={14} className="text-amber-500" /> }
  ];

  return (
    <div className="flex flex-col p-6 md:p-10 h-full min-h-[420px] rounded-2xl bg-aetox-bg/40 backdrop-blur-md overflow-hidden text-left border border-aetox-border relative">
      <div className="w-full relative z-10 space-y-6">
        
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-aetox-border/60 pb-4">
          <div className="flex items-center gap-2 text-aetox-text-main font-bold text-xs uppercase tracking-wider">
            <AreaChart size={14} className="text-aetox-accent" />
            <span>แผงควบคุมระบบเว็บระดับองค์กร (Scalable Enterprise Dashboard)</span>
          </div>
          <span className="text-[10px] font-black text-aetox-accent bg-aetox-accent/10 border border-aetox-accent/20 px-2 py-0.5 rounded-md">
            EDGE HIGH-SPEED ENABLED
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-aetox-border bg-black/20 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center justify-between text-aetox-text-muted text-[10px] font-bold uppercase tracking-wider mb-2">
                <span>{metric.title}</span>
                {metric.icon}
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-base md:text-lg font-black text-aetox-text-main tracking-tight">{metric.value}</p>
                <span className="text-[9px] font-bold text-aetox-accent flex items-center gap-0.5">
                  <ArrowUpRight size={10} />
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic SVG Line Chart Simulation */}
        <div className="p-4 rounded-xl border border-aetox-border bg-black/10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-aetox-text-soft uppercase">ปริมาณการใช้งานเซิร์ฟเวอร์ย้อนหลัง 7 วัน</span>
            <div className="flex items-center gap-1.5 text-xs text-aetox-accent font-bold">
              <TrendingUp size={12} />
              <span>ประสิทธิภาพการลดโหลดข้อมูล +68%</span>
            </div>
          </div>

          <div className="h-28 w-full flex items-end">
            <svg viewBox="0 0 500 120" className="w-full h-full text-aetox-accent overflow-visible">
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.25)" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                </linearGradient>
              </defs>
              {/* Glowing Area Fill */}
              <path
                d="M0 120 Q50 80 100 95 T200 45 T300 70 T400 30 T500 15 L500 120 Z"
                fill="url(#chart-glow)"
                className="transition-all duration-500"
              />
              {/* Main Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                d="M0 120 Q50 80 100 95 T200 45 T300 70 T400 30 T500 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
