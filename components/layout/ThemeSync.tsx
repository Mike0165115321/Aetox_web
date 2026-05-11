'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('aetox-theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [pathname]);

  return null;
}
