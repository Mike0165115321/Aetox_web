'use client';
import { Link as LinkIcon } from 'lucide-react';

export function LayerBadge({ icon: Icon, label, colorClass = "text-aetox-accent" }: { icon: any; label: string; colorClass?: string }) {
  // เปลี่ยนจาก Legacy color เป็น Aetox Accent
  const bgClass = colorClass.includes('aetox-accent') || colorClass.includes('deep-blue') 
    ? 'bg-aetox-accent/10 border-aetox-accent/20' 
    : 'bg-aetox-accent/5 border-aetox-accent/10';
    
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-fluid-label uppercase tracking-widest`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-aetox-surface-lowest border border-aetox-border hover:border-aetox-accent/30 transition-all duration-300 hover:bg-aetox-accent/[0.02]">
      <div className="flex items-center gap-3 font-bold text-aetox-text-main group-hover:text-aetox-accent transition-colors text-fluid-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
        {title}
      </div>
      <p className="text-aetox-text-soft text-fluid-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-aetox-border">
      <p className="text-fluid-label text-aetox-text-muted uppercase tracking-widest mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-aetox-surface border border-aetox-accent/20 text-aetox-accent text-[10px] font-bold uppercase transition-all ${item.link ? 'cursor-pointer hover:bg-aetox-accent/10 hover:border-aetox-accent/40' : 'cursor-default'}`}
          >
            <LinkIcon className="w-3 h-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
