'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { X, MessageSquare, Phone, Mail, Calendar, Tag, Send, Clock, CheckCircle, PhoneCall, Mails, Users } from 'lucide-react';

// ไอคอนตามประเภท Interaction
const interactionIcon: Record<string, React.ReactNode> = {
  note:          <MessageSquare size={14} className="text-zinc-500" />,
  call:          <PhoneCall size={14} className="text-emerald-400" />,
  email:         <Mails size={14} className="text-blue-400" />,
  meeting:       <Users size={14} className="text-purple-400" />,
  status_change: <CheckCircle size={14} className="text-yellow-400" />,
};

const interactionLabel: Record<string, string> = {
  note: 'บันทึก', call: 'โทรออก', email: 'ส่งอีเมล', meeting: 'ประชุม', status_change: 'เปลี่ยนสถานะ',
};

interface LeadInsightDrawerProps {
  lead: any;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedLead: any) => void;
}

export default function LeadInsightDrawer({ lead, isOpen, onClose, onUpdate }: LeadInsightDrawerProps) {
  const [interactions, setInteractions] = useState<any[]>([]);
  const [loadingTimeline, setLoadingTimeline] = useState(false);
  const [noteType, setNoteType] = useState<'note' | 'call' | 'email' | 'meeting'>('note');
  const [noteContent, setNoteContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [followUp, setFollowUp] = useState('');
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const fetchTimeline = useCallback(async () => {
    if (!lead?._id) return;
    setLoadingTimeline(true);
    try {
      const res = await fetch(`/api/leads/${lead._id}/notes`);
      const data = await res.json();
      if (data.success) setInteractions(data.data);
    } finally {
      setLoadingTimeline(false);
    }
  }, [lead?._id]);

  useEffect(() => {
    if (isOpen && lead) {
      fetchTimeline();
      setTags(lead.tags || []);
      setFollowUp(lead.nextFollowUp ? new Date(lead.nextFollowUp).toISOString().split('T')[0] : '');
    }
  }, [isOpen, lead, fetchTimeline]);

  const handleAddNote = async () => {
    if (!noteContent.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/leads/${lead._id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: noteType, content: noteContent }),
      });
      const data = await res.json();
      if (data.success) {
        setInteractions(prev => [data.data, ...prev]);
        setNoteContent('');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateMeta = async (field: string, value: any) => {
    const res = await fetch(`/api/leads/${lead._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    });
    const data = await res.json();
    if (data.success) onUpdate(data.data);
  };

  const handleAddTag = async () => {
    const trimmed = newTag.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    const newTags = [...tags, trimmed];
    setTags(newTags);
    setNewTag('');
    handleUpdateMeta('tags', newTags);
  };

  const handleRemoveTag = async (tag: string) => {
    const newTags = tags.filter(t => t !== tag);
    setTags(newTags);
    handleUpdateMeta('tags', newTags);
  };

  const handleFollowUpSave = () => {
    if (followUp) handleUpdateMeta('nextFollowUp', new Date(followUp));
  };

  if (!lead) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed right-0 top-0 h-full w-full max-w-xl bg-zinc-950 border-l border-white/5 z-50 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 border-b border-white/5">
          <div>
            <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-2">ข้อมูลเชิงลึก</p>
            <h2 className="text-2xl font-black text-white">{lead.name}</h2>
            <div className="flex gap-4 mt-2 text-sm text-zinc-500">
              <a href={`mailto:${lead.email}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Mail size={14} /> {lead.email}
              </a>
              {lead.phone && (
                <span className="flex items-center gap-1">
                  <Phone size={14} /> {lead.phone}
                </span>
              )}
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-zinc-600 hover:text-white hover:bg-white/5 transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Smart Contact Card (New) */}
          {lead.preferredMethod && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest">ช่องทางติดต่อที่ลูกค้าเลือก</p>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  {lead.preferredMethod}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xl font-black text-white">{lead.contactDetail || '-'}</p>
                  <p className="text-xs text-blue-400/60 font-bold uppercase">{lead.contactTime ? `สะดวกคุยช่วง: ${lead.contactTime}` : 'ไม่มีระบุเวลาที่สะดวก'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Smart Action Bar */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Mail size={18} />, label: 'อีเมล', href: `mailto:${lead.email}`, color: 'hover:border-blue-500/50 hover:text-blue-400' },
              { icon: <Phone size={18} />, label: 'โทรออก', href: `tel:${lead.phone}`, color: 'hover:border-emerald-500/50 hover:text-emerald-400' },
              { icon: <MessageSquare size={18} />, label: 'Line / WA', href: '#', color: 'hover:border-green-500/50 hover:text-green-400' },
            ].map((a) => (
              <a key={a.label} href={a.href} target="_blank" rel="noreferrer"
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-black border border-white/5 text-zinc-500 text-xs font-bold transition-all ${a.color}`}
              >
                {a.icon}
                {a.label}
              </a>
            ))}
          </div>

          {/* Tags */}
          <div>
            <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-3">
              <Tag size={10} className="inline mr-1" /> Tags
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map(tag => (
                <span key={tag} className="flex items-center gap-2 bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs font-bold">
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="text-zinc-600 hover:text-red-400 transition-colors">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddTag()}
                placeholder="เพิ่ม Tag... (เช่น VIP, Hot)"
                className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-700"
              />
              <button onClick={handleAddTag} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold transition-all">เพิ่ม</button>
            </div>
          </div>

          {/* Next Follow Up */}
          <div>
            <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-3">
              <Calendar size={10} className="inline mr-1" /> นัดติดตามงานครั้งถัดไป
            </p>
            <div className="flex gap-2">
              <input
                type="date"
                value={followUp}
                onChange={e => setFollowUp(e.target.value)}
                className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-zinc-300 focus:outline-none focus:border-white/30 transition-all"
              />
              <button onClick={handleFollowUpSave} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold transition-all">บันทึก</button>
            </div>
          </div>

          {/* Add Note */}
          <div>
            <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-3">
              <MessageSquare size={10} className="inline mr-1" /> เพิ่มบันทึก
            </p>
            {/* Type Selector */}
            <div className="flex bg-black border border-white/5 rounded-2xl p-1 mb-3 gap-1">
              {(['note', 'call', 'email', 'meeting'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setNoteType(t)}
                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${noteType === t ? 'bg-zinc-800 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  {interactionLabel[t]}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <textarea
                rows={3}
                value={noteContent}
                onChange={e => setNoteContent(e.target.value)}
                placeholder="จดบันทึกสิ่งที่คุยกัน..."
                className="flex-1 bg-black border border-white/10 rounded-2xl px-4 py-3 text-sm text-white resize-none focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-700"
              />
              <button
                onClick={handleAddNote}
                disabled={submitting || !noteContent.trim()}
                className="self-end p-3 rounded-2xl bg-white text-black hover:bg-zinc-200 disabled:opacity-30 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-4">
              <Clock size={10} className="inline mr-1" /> Timeline การติดต่อ
            </p>
            {loadingTimeline ? (
              <p className="text-zinc-700 text-xs text-center py-6">กำลังโหลด...</p>
            ) : interactions.length === 0 ? (
              <p className="text-zinc-700 text-xs text-center py-6">ยังไม่มีบันทึกการติดต่อ</p>
            ) : (
              <div className="relative space-y-4">
                {/* Timeline vertical line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/5" />
                {interactions.map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 z-10">
                      {interactionIcon[item.type]}
                    </div>
                    <div className="flex-1 bg-zinc-900/50 rounded-2xl p-4 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black uppercase text-zinc-600">{interactionLabel[item.type]}</span>
                        <span className="text-[10px] text-zinc-700">
                          {new Date(item.createdAt).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
