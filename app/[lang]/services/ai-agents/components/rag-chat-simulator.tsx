'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Scale, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  BookOpen,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export function RagChatSimulator({ dict, compact = false }: { dict: any, compact?: boolean }) {
  const [useCase, setUseCase] = useState(dict.useCases[0].id);

  const iconMap: any = {
    hr: <Users size={18} />,
    student: <GraduationCap size={18} />,
    librarian: <BookOpen size={18} />,
    legal: <Scale size={18} />,
  };

  const styleMap: any = {
    hr: { color: "text-blue-400", bgAlert: "bg-blue-500/10 border-blue-500/20" },
    student: { color: "text-amber-400", bgAlert: "bg-amber-500/10 border-amber-500/20" },
    librarian: { color: "text-violet-400", bgAlert: "bg-violet-500/10 border-violet-500/20" },
    legal: { color: "text-rose-400", bgAlert: "bg-rose-500/10 border-rose-500/20" },
  };

  const current = dict.useCases.find((u: any) => u.id === useCase) || dict.useCases[0];
  const currentStyle = styleMap[current.id] || styleMap.hr;

  return (
    <div className={`w-full mx-auto space-y-10 ${compact ? 'max-w-full my-0' : 'max-w-5xl my-20'}`}>
      {!compact && (
        <div className="text-center space-y-4 font-sans">
          <h3 className="text-3xl font-bold text-aetox-text-main tracking-tight">{dict.title.white} <span className="text-aetox-accent drop-shadow-aetox-glow">{dict.title.accent}</span></h3>
          <p className="text-aetox-text-soft font-medium leading-relaxed max-w-2xl mx-auto">{dict.description}</p>
        </div>
      )}

      {/* Use Case Selector */}
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {dict.useCases.map((type: any) => (
          <button
            key={type.id}
            onClick={() => setUseCase(type.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border active:scale-95 ${
              useCase === type.id 
                ? 'bg-aetox-accent-subtle text-aetox-accent border-aetox-accent/40 shadow-aetox-glow' 
                : 'bg-aetox-surface-lowest/50 text-aetox-text-soft hover:bg-aetox-surface-low/80 border-white/5'
            }`}
          >
            {iconMap[type.id] || <HelpCircle size={18} />}
            {type.label}
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="aetox-card rounded-[24px] md:rounded-[32px] border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-aetox-surface-lowest/50 min-h-[500px] md:min-h-[600px] relative">
        <div className="absolute inset-0 bg-aetox-grid-overlay opacity-10 pointer-events-none" />
        
        {/* Header */}
        <div className="bg-aetox-surface-lowest/40 px-5 md:px-8 py-4 md:py-6 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 font-sans">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-tr from-aetox-accent to-blue-600 flex items-center justify-center shadow-aetox-glow flex-shrink-0">
              <Search size={18} className="text-white md:hidden" />
              <Search size={22} className="text-white hidden md:block" />
            </div>
            <div>
              <p className="text-base md:text-lg font-bold text-aetox-text-main tracking-tight flex items-center gap-2 leading-none mb-1">
                Aetox AI <Sparkles size={14} className="text-aetox-accent" />
              </p>
              <p className="text-[10px] md:text-[11px] text-emerald-400 flex items-center tracking-tight font-black">
                <CheckCircle2 size={10} className="mr-1 md:mr-1.5" /> {dict.labels.activeKnowledge}
              </p>
            </div>
          </div>
          <div className="px-3 py-1 bg-aetox-surface-low rounded-full text-[10px] text-aetox-text-muted font-mono border border-white/10">
            RAG Engine v2.4
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="p-5 md:p-10 flex flex-col gap-6 md:gap-10 flex-1 relative z-10">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
              key={useCase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 md:space-y-10"
            >
              {/* User Message */}
               <div className="flex justify-end font-sans">
                <motion.div 
                   initial={{ x: 20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   className="bg-aetox-surface-low text-aetox-text-main px-5 md:px-6 py-3 md:py-4 rounded-[20px] md:rounded-[24px] rounded-tr-sm max-w-[85%] md:max-w-[80%] text-sm md:text-base border border-aetox-border shadow-lg font-medium"
                >
                  {current.question}
                </motion.div>
              </div>
              
              {/* AI Message */}
              <div className="flex justify-start font-sans">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-aetox-accent-subtle backdrop-blur-md text-aetox-text-main px-5 md:px-8 py-5 md:py-7 pr-10 md:pr-14 rounded-[24px] md:rounded-[32px] rounded-tl-sm max-w-[95%] md:max-w-[90%] text-sm md:text-base border border-aetox-accent/20 shadow-2xl relative group"
                >
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <HelpCircle size={16} className="text-aetox-accent/30 cursor-help group-hover:text-aetox-accent/60 transition-colors" />
                  </div>

                  <div className="mb-6 md:mb-8 leading-relaxed text-aetox-text-soft whitespace-pre-line font-medium">
                    {current.answer}
                  </div>
                  
                  {/* Citation Button */}
                  <div className={`inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold border transition-all hover:scale-105 active:scale-95 ${currentStyle.bgAlert} ${currentStyle.color} shadow-sm`}>
                    <FileText size={14} className="md:w-4 md:h-4" />
                    <span className="tracking-tight">{dict.labels.citation}: {current.citation}</span>
                    <ArrowRight size={12} className="ml-0.5 md:ml-1 opacity-70" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aetox-accent/20 to-transparent" />
      </div>

    </div>
  );
}
