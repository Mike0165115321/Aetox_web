'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';
import { useRouter } from 'next/navigation';

export default function NewProjectPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = localStorage.getItem('aetox_admin_auth');
      if (auth !== 'true') {
        router.push('/aetox-hq-admin');
      } else {
        setAuthorized(true);
      }
    };

    checkAuth();
  }, [router]);

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/aetox-hq-admin"
          className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปยัง Dashboard</span>
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">เพิ่มโปรเจกต์ใหม่</h1>
          <p className="text-zinc-500 text-lg">สร้างผลงานหรือเครดิตบริษัทเพื่อแสดงผลในหน้าเว็บหลัก</p>
        </div>

        <ProjectForm />
      </div>
    </div>
  );
}
