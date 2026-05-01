'use client';
import { User, Building2, Mail, MessageSquare, Target, Wallet, Clock } from 'lucide-react';

export const IdentitySection = ({ identity, title }: { identity: any; title: string }) => (
  <div className="aetox-card p-8 md:p-10 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-aetox-accent/10 flex items-center justify-center">
        <User className="w-5 h-5 text-aetox-accent" />
      </div>
      <h3 className="text-xl font-bold text-aetox-text-main tracking-tight">{title}</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-1">
        <label className="aetox-label">{identity.name.label}</label>
        <input name="name" type="text" required placeholder={identity.name.placeholder} className="aetox-input" />
      </div>
      <div className="space-y-1">
        <label className="aetox-label">{identity.email.label}</label>
        <div className="relative group">
          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-aetox-text-muted group-focus-within:text-aetox-accent transition-colors" />
          <input name="email" type="email" required placeholder={identity.email.placeholder} className="aetox-input pl-12" />
        </div>
      </div>
      <div className="md:col-span-2 space-y-1">
        <label className="aetox-label">{identity.company.label}</label>
        <div className="relative group">
          <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-aetox-text-muted group-focus-within:text-aetox-accent transition-colors" />
          <input name="company" type="text" placeholder={identity.company.placeholder} className="aetox-input pl-12" />
        </div>
      </div>
    </div>
  </div>
);

export const PreferenceSection = ({ identity, title }: { identity: any; title: string }) => (
  <div className="aetox-card p-8 md:p-10 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-aetox-accent/10 flex items-center justify-center">
        <MessageSquare className="w-5 h-5 text-aetox-accent" />
      </div>
      <h3 className="text-xl font-bold text-aetox-text-main tracking-tight">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">{identity.preferredMethod.label}</label>
        <select name="preferredMethod" className="aetox-select">
          {identity.preferredMethod.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-aetox-surface-lowest text-aetox-text-main">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">{identity.contactDetail.label}</label>
        <input name="contactDetail" type="text" required placeholder={identity.contactDetail.placeholder} className="aetox-input" />
      </div>
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">{identity.contactTime.label}</label>
        <select name="contactTime" className="aetox-select">
          {identity.contactTime.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-aetox-surface-lowest text-aetox-text-main">{opt}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export const ProjectScopeSection = ({ category, budget, timeline, challenge, title }: any) => (
  <div className="aetox-card p-8 md:p-10 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-aetox-accent/10 flex items-center justify-center">
        <Target className="w-5 h-5 text-aetox-accent" />
      </div>
      <h3 className="text-xl font-bold text-aetox-text-main tracking-tight">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">
           {category.label}
        </label>
        <select name="category" className="aetox-select">
          {category.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-aetox-surface-lowest text-aetox-text-main">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">
           {budget.label}
        </label>
        <select name="budget" className="aetox-select">
          {budget.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-aetox-surface-lowest text-aetox-text-main">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="aetox-label min-h-[2.5rem] flex items-end pb-1">
           {timeline.label}
        </label>
        <select name="timeline" className="aetox-select">
          {timeline.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-aetox-surface-lowest text-aetox-text-main">{opt}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="space-y-1 pt-4">
      <label className="aetox-label">{challenge.label}</label>
      <textarea name="challenge" rows={5} required placeholder={challenge.placeholder} className="aetox-input resize-none" />
    </div>
  </div>
);
