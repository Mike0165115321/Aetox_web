'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';
import { useRouter, useParams } from 'next/navigation';

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const [authorized, setAuthorized] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async (id: string) => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        if (data.success) {
          setProject(data.data);
        } else {
          alert('ไม่พบโปรเจกต์');
          router.push('/aetox-hq-admin');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    const checkAuth = async () => {
      const auth = localStorage.getItem('aetox_admin_auth');
      if (auth !== 'true') {
        router.push('/aetox-hq-admin');
      } else {
        setAuthorized(true);
        if (params.id) {
          fetchProject(params.id as string);
        }
      }
    };

    checkAuth();
  }, [router, params.id]);

  if (!authorized || loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">กำลังโหลด...</div>;

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
          <h1 className="text-4xl font-bold mb-2">แก้ไขโปรเจกต์</h1>
          <p className="text-zinc-500 text-lg">แก้ไขข้อมูลผลงาน {project?.title}</p>
        </div>

        {project && <ProjectForm initialData={project} isEditing={true} />}
      </div>
    </div>
  );
}
