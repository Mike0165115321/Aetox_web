'use client';
import { Link as LinkIcon } from 'lucide-react';

export function LayerBadge({ icon: Icon, label, colorClass = "text-deep-blue" }: { icon: any; label: string; colorClass?: string }) {
  const bgClass = colorClass.includes('deep-blue') ? 'bg-deep-blue/10 border-deep-blue/20' : 'bg-cyber-blue/10 border-cyber-blue/20';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-sm font-bold tracking-widest uppercase`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-deep-blue/30 transition-all duration-300 hover:bg-deep-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-deep-blue transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-deep-blue shadow-deep-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-deep-blue/20 text-deep-blue text-xs font-medium transition-all ${item.link ? 'cursor-pointer hover:bg-deep-blue/10 hover:border-deep-blue/40' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
