'use client';
import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  isPositive?: boolean;
}

export default function StatCard({ 
  label, 
  value, 
  desc, 
  icon, 
  color, 
  bg, 
  border, 
  isPositive = false 
}: StatCardProps) {
  return (
    <div className={`glass-card p-6 rounded-2xl border ${border} ${bg} relative group transition-all duration-300 hover:border-white/20`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl bg-white/5 ${color} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        <div className={`text-2xl font-bold tabular-nums tracking-tight ${isPositive ? 'text-emerald-400' : 'text-white'}`}>
          {value}
        </div>
        <p className="text-[11px] text-gray-400 font-medium leading-relaxed mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {desc}
        </p>
      </div>
    </div>
  );
}
