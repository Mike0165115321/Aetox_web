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
    <div className={`aetox-card p-6 border ${border} ${bg} relative group transition-all duration-300 hover:border-aetox-border-strong`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl bg-aetox-surface-high ${color} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-fluid-label font-bold text-aetox-text-muted uppercase tracking-widest">{label}</p>
        <div className={`text-fluid-h2 font-bold tabular-nums tracking-tight ${isPositive ? 'text-aetox-accent' : 'text-aetox-text-main'}`}>
          {value}
        </div>
        <p className="text-fluid-label text-aetox-text-soft font-medium leading-relaxed mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {desc}
        </p>
      </div>
    </div>
  );
}
