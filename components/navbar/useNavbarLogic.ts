'use client';
import { useState, useEffect, useRef } from 'react';

export function useNavbarLogic() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('TH');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
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
      window.removeEventListener('scroll', handleScroll);
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
    setCurrentLang,
    isLangOpen,
    setIsLangOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    langRef
  };
}
