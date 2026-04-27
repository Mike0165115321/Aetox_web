'use client';
import { Link as LinkIcon } from 'lucide-react';

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.01]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-xs leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 font-bold">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-[11px] font-bold transition-all ${item.link ? 'cursor-pointer hover:bg-cyber-blue/10 hover:border-cyber-blue/40 hover:text-white' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
