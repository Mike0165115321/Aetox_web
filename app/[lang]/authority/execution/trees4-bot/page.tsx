import { projectsContent } from '@/data/content/th/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '@/data/dictionaries';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck, Code2 } from 'lucide-react';

export default async function TreesBotPage() {
  const navDict = await getDictionary('th', 'navigation');
  const project = projectsContent.items.find(item => item.slug === 'trees4-bot');

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ultra-dark text-white selection:bg-cyber-blue/30 selection:text-white relative">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />
      <article className="container mx-auto pt-40 pb-32 relative z-10">
        <Link href="/authority" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyber-blue transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to All Systems</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] font-bold text-cyber-blue uppercase tracking-[0.2em] mb-6">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">{project.title}</h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-semibold text-gray-300">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-cyber-blue hover:text-white transition-all transform active:scale-95 shadow-cyber-glow">
                  <Code2 className="w-5 h-5" /> Source Code
                </a>
              )}
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="glass-card p-10 rounded-3xl border-white/5 space-y-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <ShieldCheck className="w-8 h-8 text-cyber-blue" />
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Status</p>
                  <p className="text-sm font-bold text-white uppercase">Enterprise Verified</p>
                </div>
              </div>
              <div className="space-y-6 pt-4">
                <div>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Client / Project</p>
                  <p className="text-lg font-bold text-white">{project.client}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Architecture Year</p>
                  <p className="text-lg font-bold text-white">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer dict={navDict.footer} />
    </main>
  );
}
