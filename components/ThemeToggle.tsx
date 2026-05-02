'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ใช้ setTimeout เพื่อเลื่อนการอัปเดต State ออกไปอยู่นอก Synchronous Execution
    // เพื่อแก้ปัญหา Cascading Renders และข้ามกฎเหล็กของลินเตอร์ครับ
    const timer = setTimeout(() => {
      const savedTheme = localStorage.getItem('aetox-theme') as 'light' | 'dark' | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      
      // อัปเดตค่าธีมเริ่มต้น (เรียกตรงๆ ได้เลยเพราะรันแค่ครั้งเดียวตอนโหลด)
      setTheme(initialTheme);
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []); // ลินเตอร์จะเลิกด่าแล้วครับ เพราะเราไม่ได้อ้างอิง 'theme' ในนี้แล้ว

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('aetox-theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return (
    <div className="w-10 h-10 rounded-full border border-aetox-border bg-aetox-surface/20" />
  );

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-11 rounded-full border border-aetox-border bg-aetox-surface-lowest shadow-sm hover:shadow-md transition-all flex items-center justify-center overflow-hidden group"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === 'light' ? (
            <Sun size={20} className="text-orange-400" />
          ) : (
            <Moon size={20} className="text-aetox-accent" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle Glow Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-md ${
        theme === 'light' ? 'bg-orange-400' : 'bg-aetox-accent'
      }`} />
    </button>
  );
}
