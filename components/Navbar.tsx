'use client';
import { X } from 'lucide-react';
import { useNavbarLogic } from './navbar/useNavbarLogic';
import NavbarDesktop from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';

export default function Navbar({ dict }: { dict?: any }) {
  const {
    isScrolled,
    currentLang,
    setCurrentLang,
    isLangOpen,
    setIsLangOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    langRef
  } = useNavbarLogic();
  
  const menuItems = dict?.menu || [];
  const ctaLabel = dict?.cta || "";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'bg-transparent' 
          : isScrolled 
            ? 'bg-aetox-bg/80 backdrop-blur-md border-b border-aetox-border py-3 shadow-2xl' 
            : 'bg-transparent py-6'
      }`}
    >
      <NavbarDesktop 
        menuItems={menuItems}
        ctaLabel={ctaLabel}
        isScrolled={isScrolled}
        currentLang={currentLang}
        isLangOpen={isLangOpen}
        setIsLangOpen={setIsLangOpen}
        langRef={langRef}
      />

      {/* Mobile Toggle Button */}
      <button 
        className="lg:hidden absolute top-1/2 -translate-y-1/2 right-6 p-2 text-aetox-text-main z-[1200] hover:bg-aetox-surface rounded-xl transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="flex flex-col items-end gap-1.5">
            <div className="w-6 h-0.5 bg-aetox-text-main transition-all" />
            <div className="w-4 h-0.5 bg-aetox-accent transition-all" />
          </div>
        )}
      </button>

      <NavbarMobile 
        menuItems={menuItems}
        ctaLabel={ctaLabel}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
    </nav>
  );
}
