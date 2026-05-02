import { projectsContent } from '@/data/content/th/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '@/data/dictionaries';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck, Code2 } from 'lucide-react';

export default async function ProjectDetailPage({ params }: { params: Promise<{ lang: string, category: string, slug: string }> }) {
  const { lang = 'th', category, slug } = await params;
  const navDict = await getDictionary(lang as 'th' | 'en', 'navigation');
  
  // Find the project in our data
  // Find the project in our data (Case-insensitive search)
  const project = projectsContent.items.find(
    item => item.category.toLowerCase() === category.toLowerCase() && 
            item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-aetox-bg text-aetox-text-main selection:bg-aetox-accent/30 selection:text-white relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aetox-grid-overlay" />
        <div className="aetox-aura-primary -top-[10%] -right-[5%] opacity-10" />
      </div>
      
      <Navbar dict={navDict.navbar} />

      <article className="container mx-auto pt-40 pb-32 relative z-10">
        {/* Back Link */}
        <Link 
          href="/authority" 
          className="inline-flex items-center gap-2 text-aetox-text-muted hover:text-aetox-accent transition-all mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">{lang === 'th' ? 'กลับไปที่หน้าผลงาน' : 'Back to Authority'}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-[10px] font-black text-aetox-accent uppercase tracking-[0.3em] mb-8">
                <div className="w-1 h-1 rounded-full bg-aetox-accent animate-pulse" />
                {project.category}
              </div>
              <h1 className="text-fluid-h1 font-black mb-8 tracking-tighter leading-[1.1] text-aetox-text-main">
                {project.title}
              </h1>
              <p className="text-fluid-p text-aetox-text-soft leading-relaxed max-w-xl font-medium">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-aetox-surface-lowest/50 rounded-xl border border-aetox-border text-[10px] font-black text-aetox-text-muted uppercase tracking-widest backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  className="aetox-btn-main !py-5 !px-10 !rounded-2xl shadow-aetox-glow"
                >
                  <Code2 className="w-5 h-5" />
                  <span>{lang === 'th' ? 'ดูรหัสต้นฉบับ' : 'Source Code'}</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-aetox-surface-lowest/50 border border-aetox-border text-aetox-text-main font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-aetox-surface transition-all transform active:scale-95 backdrop-blur-md"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{lang === 'th' ? 'ดูตัวอย่างจริง' : 'Live Demo'}</span>
                </a>
              )}
            </div>
          </div>

          {/* Sidebar / Meta */}
          <div className="lg:pl-20">
            <div className="aetox-card p-10 !rounded-[40px] border-aetox-border/50 bg-aetox-surface-lowest/20 backdrop-blur-2xl space-y-10 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-aetox-accent pointer-events-none">
                 <ShieldCheck size={200} />
              </div>

              <div className="flex items-center gap-5 p-6 bg-aetox-accent/5 rounded-3xl border border-aetox-accent/20 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-aetox-accent/10 flex items-center justify-center text-aetox-accent">
                   <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-aetox-accent/60 uppercase tracking-[0.2em] mb-1">System Security</p>
                  <p className="text-sm font-black text-aetox-text-main uppercase tracking-widest">Enterprise Verified</p>
                </div>
              </div>

              <div className="space-y-8 pt-4 relative z-10">
                <div className="group">
                  <p className="text-[10px] font-black text-aetox-text-muted uppercase tracking-[0.2em] mb-2 group-hover:text-aetox-accent transition-colors">Client / Project</p>
                  <p className="text-xl font-black text-aetox-text-main tracking-tight">{project.client}</p>
                </div>
                <div className="group">
                  <p className="text-[10px] font-black text-aetox-text-muted uppercase tracking-[0.2em] mb-2 group-hover:text-aetox-accent transition-colors">Architecture Year</p>
                  <p className="text-xl font-black text-aetox-text-main tracking-tight">{project.year}</p>
                </div>
                <div className="group">
                  <p className="text-[10px] font-black text-aetox-text-muted uppercase tracking-[0.2em] mb-2 group-hover:text-aetox-accent transition-colors">Deployment Scope</p>
                  <p className="text-xl font-black text-aetox-text-main tracking-tight">Full Stack Engineering</p>
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
