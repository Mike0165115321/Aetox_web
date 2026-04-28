'use client';
import React from 'react';

export function LayerBadge({ icon: Icon, label, colorClass = "text-cyber-blue" }: { icon: any; label: string; colorClass?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue/20 bg-cyber-blue/10 ${colorClass} text-[10px] font-bold`}>
      <Icon className="w-3.5 h-3.5" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs font-medium transition-all hover:bg-cyber-blue/10 hover:border-cyber-blue/40`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
