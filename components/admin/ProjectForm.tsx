'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProjectFormProps {
  initialData?: any;
  isEditing?: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData, isEditing = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'intelligence',
    image: initialData?.image || '',
    client: initialData?.client || '',
    year: initialData?.year || new Date().getFullYear().toString(),
    slug: initialData?.slug || '',
    githubUrl: initialData?.githubUrl || '',
    liveUrl: initialData?.liveUrl || '',
    tags: initialData?.tags?.join(', ') || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      tags: formData.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag !== ''),
    };

    try {
      const url = isEditing ? `/api/projects/${initialData._id}` : '/api/projects';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        alert(isEditing ? 'อัปเดตเรียบร้อย!' : 'เพิ่มโปรเจกต์สำเร็จ!');
        router.push('/aetox-hq-admin');
        router.refresh();
      } else {
        alert('เกิดข้อผิดพลาด: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-aetox-surface-lowest/50 p-8 rounded-2xl border border-aetox-border backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="aetox-label">ชื่อโปรเจกต์</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="aetox-input"
            placeholder="เช่น BookMind: AI Knowledge Architect"
          />
        </div>
        <div>
          <label className="aetox-label">Slug (URL)</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="aetox-input"
            placeholder="เช่น bookmind-ai"
          />
        </div>
      </div>

      <div>
        <label className="aetox-label">คำอธิบาย</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="aetox-input resize-none"
          placeholder="รายละเอียดของโปรเจกต์..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="aetox-label">หมวดหมู่</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="aetox-select"
          >
            <option value="intelligence">Intelligence</option>
            <option value="execution">Execution</option>
            <option value="foundation">Foundation</option>
            <option value="academy">Academy</option>
            <option value="special">Special</option>
          </select>
        </div>
        <div>
          <label className="aetox-label">ลูกค้า</label>
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
            className="aetox-input"
            placeholder="เช่น Private Client"
          />
        </div>
        <div>
          <label className="aetox-label">ปี</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="aetox-input"
          />
        </div>
      </div>

      <div>
        <label className="aetox-label">Cover Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="aetox-input"
          placeholder="https://..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="aetox-label">GitHub URL (Optional)</label>
          <input
            type="text"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            className="aetox-input"
          />
        </div>
        <div>
          <label className="aetox-label">Live URL (Optional)</label>
          <input
            type="text"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
            className="aetox-input"
          />
        </div>
      </div>

      <div>
        <label className="aetox-label">Tags (คั่นด้วยเครื่องหมายคอมม่า)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="aetox-input"
          placeholder="AI, Next.js, Automation"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full aetox-btn-main disabled:opacity-50"
        >
          {loading ? 'กำลังบันทึก...' : isEditing ? 'อัปเดตโปรเจกต์' : 'สร้างโปรเจกต์ใหม่'}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
