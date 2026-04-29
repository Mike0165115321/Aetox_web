'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, Clock, CheckCircle, XCircle, MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';

export default function LeadsManagement({ dict }: { dict: any }) {
  const [allLeads, setAllLeads] = useState([]); // เก็บข้อมูลทั้งหมดเพื่อทำ Stats
  const [loading, setLoading] = useState(true); // เริ่มต้นเป็น true เลย
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = React.useCallback(async (silent = false) => {
    if (silent) setIsRefreshing(true);
    // ไม่ต้องสั่ง setLoading(true) ที่นี่ถ้าไม่ใช่การ refresh แบบเงียบ
    // เพราะเราตั้ง default เป็น true อยู่แล้ว หรือจะเช็คตามเงื่อนไข
    
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success) {
        setAllLeads(data.data);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    // ใช้ Promise.resolve เพื่อเลื่อนการทำงานออกไปนิดเดียว (Microtask) 
    // เพื่อให้ React มั่นใจว่าไม่ได้สั่ง setState ทันทีที่ Effect ทำงาน
    Promise.resolve().then(() => {
      fetchLeads();
    });
  }, [fetchLeads]);

  // คำนวณ Stats จากข้อมูลดิบทั้งหมด (Global Stats)
  const stats = {
    total: allLeads.length,
    new: allLeads.filter((l: any) => l.status === 'new').length,
    project: allLeads.filter((l: any) => l.type === 'project').length,
    academy: allLeads.filter((l: any) => l.type.includes('academy')).length, // ครอบคลุมทั้ง academy และ academy_waitlist
  };

  // การกรองข้อมูลที่แสดงผล (Client-side Filter)
  const filteredLeads = allLeads.filter((l: any) => {
    const matchStatus = filterStatus === 'all' || l.status === filterStatus;
    const matchType = filterType === 'all' || 
                     (filterType === 'academy' ? l.type.includes('academy') : l.type === filterType);
    const matchSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       l.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchStatus && matchType && matchSearch;
  });

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setAllLeads(allLeads.map((l: any) => l._id === id ? { ...l, status: newStatus } : l));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'qualified': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'closed': return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
      default: return 'bg-zinc-800 text-zinc-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. Stats Overview - หัวใจของ Dataset ในอนาคต */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: dict.stats.total, value: stats.total, color: 'text-white' },
          { label: dict.stats.new, value: stats.new, color: 'text-blue-400' },
          { label: dict.stats.academy, value: stats.academy, color: 'text-purple-400' },
          { label: dict.stats.project, value: stats.project, color: 'text-emerald-400' },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl">
            <p className="text-xs uppercase font-black tracking-widest text-zinc-500 mb-2">{s.label}</p>
            <p className={`text-4xl font-black ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* 2. Advanced Filters & Search */}
      <div className="space-y-4 bg-zinc-900/50 p-6 rounded-[32px] border border-white/5">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="space-y-4 flex-grow">
            {/* Type Selector (หมวดใหญ่) */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase text-zinc-600 tracking-widest">หมวดหมู่:</span>
              <div className="flex bg-black p-1.5 rounded-2xl border border-white/5">
                {[
                  { id: 'all', label: 'ทั้งหมด' },
                  { id: 'project', label: 'จ้างงานโปรเจกต์' },
                  { id: 'academy', label: 'สมัครเรียน Academy' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setFilterType(t.id)}
                    className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all ${
                      filterType === t.id ? 'bg-zinc-800 text-white' : 'text-zinc-600 hover:text-zinc-400'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Selector (หมวดย่อย) */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase text-zinc-600 tracking-widest">สถานะ:</span>
              <div className="flex flex-wrap gap-2">
                {Object.keys(dict.filters).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all border ${
                      filterStatus === s ? 'bg-white text-black border-white' : 'bg-black text-zinc-500 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {dict.filters[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => fetchLeads(true)}
              disabled={isRefreshing}
              className="p-4 rounded-2xl bg-black border border-white/10 text-zinc-500 hover:text-white hover:border-white/30 transition-all active:scale-90 disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
            </button>
            <div className="relative flex-grow lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                type="text"
                placeholder={dict.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="text-center py-20 text-zinc-500">{dict.loading}</div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/30 rounded-2xl border border-dashed border-white/5 text-zinc-600">
            {dict.empty}
          </div>
        ) : (
          filteredLeads.map((lead: any) => (
            <div key={lead._id} className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-grow space-y-5">
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border ${getStatusColor(lead.status)}`}>
                      {dict.badges[lead.status] || lead.status}
                    </span>
                    <span className="bg-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg text-xs font-bold uppercase">
                      {dict.badges[lead.type.includes('academy') ? 'academy' : 'project']}
                    </span>
                    <span className="text-zinc-600 text-xs flex items-center gap-2">
                      <Clock size={14} />
                      {new Date(lead.createdAt).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' })}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{lead.name}</h3>
                    <div className="flex flex-wrap gap-6 text-base text-zinc-400">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                        <Mail size={18} /> {lead.email}
                      </a>
                      {lead.phone && (
                        <span className="flex items-center gap-2">
                          <Phone size={18} /> {lead.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ข้อมูลเฉพาะตามประเภท */}
                  <div className="bg-black/40 rounded-[24px] p-6 border border-white/5">
                    {lead.type === 'project' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-2">
                          <p className="text-zinc-600 uppercase font-black tracking-widest text-xs mb-3">{dict.details.challenge}</p>
                          <p className="text-zinc-300 leading-relaxed italic text-base">&quot;{lead.challenge}&quot;</p>
                        </div>
                        <div className="space-y-3">
                          <p><span className="text-zinc-600 font-bold uppercase text-xs inline-block w-24">{dict.details.company}:</span> <span className="text-zinc-200 text-base">{lead.company || '-'}</span></p>
                          <p><span className="text-zinc-600 font-bold uppercase text-xs inline-block w-24">{dict.details.category}:</span> <span className="text-zinc-200 text-base">{lead.category}</span></p>
                          <p><span className="text-zinc-600 font-bold uppercase text-xs inline-block w-24">{dict.details.budget}:</span> <span className="text-zinc-200 text-base">{lead.budget}</span></p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-base space-y-4">
                        <p><span className="text-zinc-600 font-bold uppercase text-xs inline-block w-32">{dict.details.experience}:</span> <span className="text-zinc-200">{lead.experience}</span></p>
                        <div className="pt-2">
                          <p className="text-zinc-600 font-bold uppercase text-xs mb-2">{dict.details.goals}:</p>
                          <p className="text-zinc-200 italic">&quot;{lead.goals}&quot;</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ส่วนจัดการสถานะ (Quick CRM) */}
                <div className="flex flex-col justify-between items-end gap-4 min-w-[180px]">
                  <div className="flex flex-wrap justify-end gap-2">
                    <button 
                      onClick={() => updateStatus(lead._id, 'contacted')}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                      title="Mark as Contacted"
                    >
                      <MessageSquare size={18} />
                    </button>
                    <button 
                      onClick={() => updateStatus(lead._id, 'qualified')}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all"
                      title="Mark as Qualified"
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button 
                      onClick={() => updateStatus(lead._id, 'rejected')}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 transition-all"
                      title="Mark as Rejected"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                  
                  <div className="text-[10px] text-zinc-700 font-black uppercase text-right leading-tight">
                    {dict.decisionSupport}<br/>
                    <span className="text-zinc-500">{dict.priority}: {dict.priorities[lead.priority] || lead.priority}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
