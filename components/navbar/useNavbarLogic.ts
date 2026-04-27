'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useScroll } from '@/context/ScrollContext';

export function useNavbarLogic() {
  const { isScrolled } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLang = pathname?.split('/')[1] === 'en' ? 'EN' : 'TH';
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return {
    isScrolled,
    currentLang,
    isLangOpen,
    setIsLangOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    langRef,
    switchLanguage: (lang: string) => {
      const segments = pathname.split('/');
      segments[1] = lang.toLowerCase();
      router.push(segments.join('/'));
    }
  };
}
