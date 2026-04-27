'use client';
import { User, Building2, Mail, MessageSquare, Target, Wallet, Clock } from 'lucide-react';

export const IdentitySection = ({ identity, title }: { identity: any; title: string }) => (
  <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
        <User className="w-4 h-4 text-cyber-blue" />
      </div>
      <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1">{identity.name.label}</label>
        <input name="name" type="text" required placeholder={identity.name.placeholder} className="form-input-cyber" />
      </div>
      <div className="space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1">{identity.email.label}</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input name="email" type="email" required placeholder={identity.email.placeholder} className="form-input-cyber pl-12" />
        </div>
      </div>
      <div className="md:col-span-2 space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1">{identity.company.label}</label>
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input name="company" type="text" placeholder={identity.company.placeholder} className="form-input-cyber pl-12" />
        </div>
      </div>
    </div>
  </div>
);

export const PreferenceSection = ({ identity, title }: { identity: any; title: string }) => (
  <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-deep-blue/10 flex items-center justify-center">
        <MessageSquare className="w-4 h-4 text-deep-blue" />
      </div>
      <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.preferredMethod.label}</label>
        <select name="preferredMethod" className="form-select-cyber">
          {identity.preferredMethod.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.contactDetail.label}</label>
        <input name="contactDetail" type="text" required placeholder={identity.contactDetail.placeholder} className="form-input-cyber" />
      </div>
      <div className="space-y-3">
        <label className="text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] flex items-end pb-1">{identity.contactTime.label}</label>
        <select name="contactTime" className="form-select-cyber">
          {identity.contactTime.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export const ProjectScopeSection = ({ category, budget, timeline, challenge, title }: any) => (
  <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 space-y-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
        <Target className="w-4 h-4 text-cyber-blue" />
      </div>
      <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
          <Target className="w-3 h-3 flex-shrink-0 mb-1" /> {category.label}
        </label>
        <select name="category" className="form-select-cyber">
          {category.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
          <Wallet className="w-3 h-3 flex-shrink-0 mb-1" /> {budget.label}
        </label>
        <select name="budget" className="form-select-cyber">
          {budget.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
          ))}
        </select>
      </div>
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-base font-semibold text-gray-300 ml-1 min-h-[3.5rem] items-end pb-1">
          <Clock className="w-3 h-3 flex-shrink-0 mb-1" /> {timeline.label}
        </label>
        <select name="timeline" className="form-select-cyber">
          {timeline.options?.map((opt: string) => (
            <option key={opt} value={opt} className="bg-ultra-dark">{opt}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="space-y-3 pt-4">
      <label className="text-base font-semibold text-gray-300 ml-1">{challenge.label}</label>
      <textarea name="challenge" rows={5} required placeholder={challenge.placeholder} className="form-textarea-cyber" />
    </div>
  </div>
);
