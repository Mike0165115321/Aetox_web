'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Edit2, LogOut, ExternalLink, Globe, Code2, LayoutDashboard, Users } from 'lucide-react';
import LeadsManagement from '@/components/admin/LeadsManagement';

export default function AdminDashboardClient({ dict, lang }: { dict: any, lang: string }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState('projects');

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const auth = localStorage.getItem('aetox_admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
        await fetchProjects();
      } else {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'aetox2026') {
      localStorage.setItem('aetox_admin_auth', 'true');
      setIsAuthenticated(true);
      fetchProjects();
    } else {
      alert(dict.login.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('aetox_admin_auth');
    setIsAuthenticated(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('ยืนยันการลบโปรเจกต์นี้?')) return;

    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProjects(projects.filter((p: any) => p._id !== id));
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-black tracking-widest uppercase text-xs">Initializing Aetox Engine...</div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-3xl border border-white/10 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-white tracking-tight uppercase">{dict.login.title}</h1>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-1">{dict.login.subtitle}</p>
          </div>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder={dict.login.placeholder}
            className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-[0.5em] font-bold"
          />
          <button type="submit" className="w-full bg-white hover:bg-zinc-200 text-black font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95">
            {dict.login.button}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent uppercase tracking-tight">
              {dict.header.title}
            </h1>
            <div className="flex items-center gap-2 text-zinc-500 mt-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] uppercase font-black tracking-widest">{dict.header.subtitle}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex bg-zinc-900/50 p-1 rounded-xl border border-white/5">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'projects' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                <LayoutDashboard size={14} />
                <span>{dict.header.tabs.projects}</span>
              </button>
              <button 
                onClick={() => setActiveTab('leads')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'leads' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                <Users size={14} />
                <span>{dict.header.tabs.leads}</span>
              </button>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-red-500/20 hover:text-red-500 px-4 py-2 rounded-xl transition-all border border-white/5"
            >
              <LogOut size={14} />
            </button>
          </div>
        </header>

        {activeTab === 'projects' ? (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-xl font-bold">{dict.projects.title}</h2>
                <p className="text-zinc-500 text-sm">{dict.projects.subtitle}</p>
              </div>
              <Link 
                href={`/${lang}/aetox-hq-admin/new`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl transition-all font-bold text-xs"
              >
                <Plus size={16} />
                <span>{dict.projects.button}</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project: any) => (
                <div key={project._id} className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all backdrop-blur-sm">
                  <div className="aspect-video w-full bg-zinc-800 relative">
                    {project.image && (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
                    )}
                    <div className="absolute top-4 right-4">
                       <span className="bg-black/80 backdrop-blur-md text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-zinc-400">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1 text-white/90">{project.title}</h3>
                    <p className="text-zinc-500 text-xs mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                      <div className="flex gap-4">
                        <button onClick={() => handleDelete(project._id)} className="text-zinc-600 hover:text-red-500 transition-all">
                          <Trash2 size={18} />
                        </button>
                        <Link href={`/${lang}/aetox-hq-admin/edit/${project._id}`} className="text-zinc-600 hover:text-white transition-all">
                          <Edit2 size={18} />
                        </Link>
                      </div>
                      
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" className="text-zinc-600 hover:text-blue-400">
                            <Code2 size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" className="text-zinc-600 hover:text-blue-400">
                            <Globe size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {projects.length === 0 && (
                <div className="col-span-full py-24 text-center border-2 border-dashed border-white/5 rounded-[40px] bg-zinc-900/10">
                  <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs">{dict.projects.empty}</p>
                  <Link href={`/${lang}/aetox-hq-admin/new`} className="text-blue-500 mt-4 inline-block hover:text-blue-400 font-black text-sm">
                    {dict.projects.addFirst}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
              <h2 className="text-xl font-bold">{dict.leads.title}</h2>
              <p className="text-zinc-500 text-sm">{dict.leads.subtitle}</p>
            </header>
            <LeadsManagement dict={dict.leads} />
          </div>
        )}
      </div>
    </div>
  );
}
