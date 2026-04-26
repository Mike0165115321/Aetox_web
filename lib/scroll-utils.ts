'use client';
import { useState, useEffect } from 'react';

export const DEFAULT_NAVBAR_OFFSET = 120;

/**
 * Hook สำหรับตรวจจับว่าตอนนี้หน้าจออยู่ที่ Section ไหน
 * @param sections - รายการ sections ที่มี id
 * @param buffer - (Optional) ระยะชดเชยการตรวจจับ (Default: 160)
 */
export function useActiveSection(sections: { id: string }[]) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    if (typeof window === 'undefined' || sections.length === 0) return;

    const observers: IntersectionObserver[] = [];
    
    // ตั้งค่าตัวตรวจจับการทับซ้อน (IntersectionObserver)
    // ใช้ threshold และ rootMargin เพื่อให้ตรวจจับได้แม่นยำและเป็นธรรมชาติ
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // ตรวจจับเมื่อส่วนนั้นอยู่ช่วงบนของหน้าจอ
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

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
