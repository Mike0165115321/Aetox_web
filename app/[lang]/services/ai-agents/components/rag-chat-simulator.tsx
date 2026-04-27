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
    librarian: { color: "text-purple-400", bgAlert: "bg-purple-500/10 border-purple-500/20" },
    legal: { color: "text-rose-400", bgAlert: "bg-rose-500/10 border-rose-500/20" },
  };

  const current = dict.useCases.find((u: any) => u.id === useCase) || dict.useCases[0];
  const currentStyle = styleMap[current.id] || styleMap.hr;

  return (
    <div className={`w-full mx-auto space-y-10 ${compact ? 'max-w-full my-0' : 'max-w-5xl my-20'}`}>
      {!compact && (
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-black text-white">{dict.title.white} <span className="text-cyber-blue">{dict.title.accent}</span></h3>
          <p className="text-gray-500">{dict.description}</p>
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
                ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50 shadow-cyber-glow/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border-white/5'
            }`}
          >
            {iconMap[type.id] || <HelpCircle size={18} />}
            {type.label}
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="glass-card rounded-[32px] border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-black/40 min-h-[600px] relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none" />
        
        {/* Header */}
        <div className="bg-white/[0.02] px-8 py-6 border-b border-white/5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyber-blue to-blue-600 flex items-center justify-center shadow-cyber-glow/20">
              <Search size={22} className="text-black" />
            </div>
            <div>
              <p className="text-lg font-black text-white tracking-wide flex items-center gap-2">
                Aetox Enterprise AI <Sparkles size={14} className="text-cyber-blue" />
              </p>
              <p className="text-[11px] text-emerald-400 flex items-center uppercase tracking-widest font-black">
                <CheckCircle2 size={12} className="mr-1.5" /> {dict.labels.activeKnowledge}
              </p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-black/40 rounded-full text-[11px] text-gray-500 font-mono border border-white/5">
            RAG Engine v2.4
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="p-10 flex flex-col gap-10 flex-1 relative z-10">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
              key={useCase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* User Message */}
              <div className="flex justify-end">
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white/5 backdrop-blur-md text-gray-200 px-6 py-4 rounded-[24px] rounded-tr-sm max-w-[80%] text-base border border-white/10 shadow-lg"
                >
                  {current.question}
                </motion.div>
              </div>
              
              {/* AI Message */}
              <div className="flex justify-start">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-cyber-blue/5 backdrop-blur-md text-gray-100 px-8 py-7 pr-14 rounded-[32px] rounded-tl-sm max-w-[90%] text-base border border-cyber-blue/20 shadow-2xl relative group"
                >
                  <div className="absolute top-6 right-6">
                    <HelpCircle size={18} className="text-cyber-blue/30 cursor-help group-hover:text-cyber-blue/60 transition-colors" />
                  </div>

                  <div className="mb-8 leading-relaxed text-gray-200 whitespace-pre-line font-medium">
                    {current.answer}
                  </div>
                  
                  {/* Citation Button */}
                  <div className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-[12px] font-black border transition-all hover:scale-105 active:scale-95 ${currentStyle.bgAlert} ${currentStyle.color}`}>
                    <FileText size={16} />
                    <span className="uppercase tracking-wider">{dict.labels.citation}: {current.citation}</span>
                    <ArrowRight size={14} className="ml-1 opacity-70" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
      </div>
    </div>
  );
}
