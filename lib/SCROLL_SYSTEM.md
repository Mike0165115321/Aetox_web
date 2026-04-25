# 📜 Aetox Smart Scroll System

เอกสารฉบับนี้อธิบายโครงสร้างและการจัดการระบบการเลื่อนหน้าจอ (Scrolling) ของเว็บไซต์ Aetox เพื่อรักษามาตรฐานความเนี๊ยบ (Premium Experience) และรองรับการปรับแต่งเฉพาะจุด

## 🚀 แนวคิดหลัก (Core Concept)
เนื่องจากเว็บไซต์ใช้ **Fixed Navbar** ซึ่งมีความสูงประมาณ 80px-100px การเลื่อนหน้าจอแบบปกติจะทำให้ "หัวข้อเกยหรือมุดลงใต้ Navbar" เราจึงต้องมีระบบหักลบระยะ (Offset) ที่แม่นยำ

## 📂 ไฟล์ที่เกี่ยวข้อง
- `lib/scroll-utils.ts`: ไฟล์แกนกลางที่เก็บฟังก์ชันการคำนวณ
- `SCROLL_SYSTEM.md`: เอกสารคู่มือฉบับนี้

## 🛠️ วิธีใช้งาน

### 1. การใช้งานพื้นฐาน (Standard)
เรียกใช้ฟังก์ชันโดยระบุแค่ ID ระบบจะใช้ค่ามาตรฐาน `120px` ทันที
```typescript
import { scrollToSection } from '@/lib/scroll-utils';

// ตัวอย่างการใช้ใน onClick
<button onClick={() => scrollToSection('contact-form')}>
  ติดต่อเรา
</button>
```

### 2. การปรับแต่งเฉพาะจุด (Specific Overrides)
หากบาง Section มีขนาดหรือตำแหน่งพิเศษที่ทำให้ค่า 120px ดูไม่สวย สามารถระบุเลข Offset เองได้
```typescript
// เลื่อนไปที่ id='ai-section' โดยเว้นระยะจากด้านบน 145px
scrollToSection('ai-section', 145);
```

## 📐 มาตรฐานการออกแบบ (Design Standards)
เพื่อให้ Sidebar และการเลื่อนทำงานสัมพันธ์กัน ควรใช้ค่าเหล่านี้ควบคู่กันใน Section:
- **Scroll Margin**: ใช้ Class `scroll-mt-32` (ใน Tailwind) เพื่อให้เบราว์เซอร์รู้ตำแหน่งหยุด
- **Section Padding**: ใช้ `pt-32 pb-32` เพื่อให้หัวข้อมีพื้นที่หายใจ (White space)

## 📊 บันทึกการจูน (Fine-tuning Logs)
หน้านี้เก็บค่าที่ผ่านการทดสอบแล้วว่า "สมบูรณ์แบบ" ที่สุด:

### Web Systems (`/services/web-systems`)
- **Hero (`#hero`)**: `offset: 0`
- **Solution Design (`#solution-design`)**: `offset: 0`
- **ส่วนอื่นๆ**: `offset: 120` (Standard)

### Automation (`/services/automation`)
- **Hero (`#hero`)**: `offset: 0`
- **ส่วนอื่นๆ**: `offset: 120` (Standard)

### AI Agents (`/services/ai-agents`) - [USER TUNED: PERFECT]
- **Hero (`#hero`)**: `offset: 0`
- **Chat Simulator (`#chat-simulator`)**: `offset: -80`
- **Technical Deep Dive (`#technical-deep-dive`)**: `offset: 120`
- **Data Pipeline (`#pipeline-section`)**: `offset: 60`
- **ROI Simulator (`#roi-simulator`)**: `offset: 0`
- **CTA Section (`#cta-section`)**: `offset: 40`

---
*จัดทำโดย: Antigravity AI Assistant สำหรับโครงการ Aetox.dev*
