'use client';
import { useState, useEffect } from 'react';

export const DEFAULT_NAVBAR_OFFSET = 120;

/**
 * Hook สำหรับตรวจจับว่าตอนนี้หน้าจออยู่ที่ Section ไหน
 * @param sections - รายการ sections ที่มี id
 * @param buffer - (Optional) ระยะชดเชยการตรวจจับ (Default: 160)
 */
export function useActiveSection(sections: { id: string }[], buffer: number = 160) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const scrollPosition = window.scrollY + buffer;
      let currentSection = sections[0]?.id || '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // ตรวจสอบทันทีที่โหลดหน้า
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, buffer]);

  return activeSection;
}

/**
 * ฟังก์ชันสำหรับการเลื่อนหน้าจอไปยัง Element ที่ต้องการแบบ Smooth
 * @param id - HTML ID ของเป้าหมาย (เช่น 'hero', 'roi-calculator')
 * @param customOffset - (Optional) ระยะห่างจากด้านบนที่ต้องการปรับแต่งเอง
 */
export const scrollToSection = (id: string, customOffset?: number) => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(id);
  if (element) {
    // ใช้ค่าที่ส่งมา ถ้าไม่มีให้ใช้ค่ามาตรฐาน 120
    const offset = customOffset ?? DEFAULT_NAVBAR_OFFSET;
    
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`[ScrollSystem] Element with id "${id}" not found.`);
  }
};

/**
 * Hook สำหรับคำนวณ % การเลื่อนหน้าจอ (0 to 1)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let requestRunning = false;

    const updateScroll = () => {
      if (requestRunning) return;
      requestRunning = true;

      window.requestAnimationFrame(() => {
        const h = document.documentElement;
        const b = document.body;
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        
        const scrollHeight = h[sh] || b[sh];
        const clientHeight = h.clientHeight;
        const totalHeight = scrollHeight - clientHeight;
        const currentScroll = h[st] || b[st];
        
        const percent = totalHeight > 0 ? Math.min(1, Math.max(0, currentScroll / totalHeight)) : 0;
        
        setProgress(prev => {
          // Avoid tiny updates to prevent re-render loops and improve performance
          if (Math.abs(prev - percent) < 0.001) return prev;
          return percent;
        });
        
        requestRunning = false;
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return progress;
}
