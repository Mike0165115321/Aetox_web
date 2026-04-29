const admin = {
  header: {
    title: 'ศูนย์บัญชาการระบบ',
    subtitle: 'ระบบ Aetox.dev กำลังทำงาน',
    tabs: {
      projects: 'จัดการผลงาน',
      leads: 'ผู้ติดต่อและลูกค้า'
    }
  },
  login: {
    title: 'Aetox HQ',
    subtitle: 'Strategic Command Center',
    placeholder: 'รหัสเข้าถึงระบบ',
    button: 'ยืนยันตัวตน',
    error: 'รหัสผ่านไม่ถูกต้อง'
  },
  projects: {
    title: 'ระบบจัดการผลงาน',
    subtitle: 'บริหารจัดการโปรเจกต์และเครดิตผลงานทั้งหมด',
    button: 'เพิ่มโปรเจกต์ใหม่',
    empty: 'ยังไม่มีข้อมูลโปรเจกต์ในระบบ',
    addFirst: '+ เริ่มสร้างโปรเจกต์แรก'
  },
  leads: {
    title: 'รายชื่อผู้สนใจและผู้สมัคร',
    subtitle: 'วิเคราะห์ข้อมูลลูกค้าและผู้สมัครเรียน (Decision Support Layer)',
    filters: {
      all: 'ทั้งหมด',
      new: 'ใหม่',
      contacted: 'ติดต่อแล้ว',
      qualified: 'เกรด A',
      closed: 'ปิดการขายแล้ว'
    },
    searchPlaceholder: 'ค้นหาชื่อ หรืออีเมล...',
    empty: 'ไม่พบข้อมูลในหมวดนี้',
    loading: 'กำลังโหลดข้อมูล...',
    decisionSupport: 'วิเคราะห์เพื่อการตัดสินใจ',
    priority: 'ลำดับความสำคัญ',
    stats: {
      total: 'ผู้ติดต่อทั้งหมด',
      new: 'รายการใหม่',
      academy: 'สายสมัครเรียน',
      project: 'สายจ้างงาน'
    },
    badges: {
      project: 'โปรเจกต์',
      academy: 'อาคาเดมี่',
      new: 'มาใหม่',
      contacted: 'ติดต่อแล้ว',
      qualified: 'เกรด A',
      rejected: 'ปฏิเสธ',
      closed: 'ปิดการขาย'
    },
    priorities: {
      low: 'ต่ำ',
      medium: 'กลาง',
      high: 'สูง'
    },
    details: {
      company: 'บริษัท/องค์กร',
      category: 'หมวดหมู่',
      budget: 'งบประมาณ',
      timeline: 'กรอบเวลา',
      challenge: 'ความท้าทาย / โจทย์ที่ได้รับ',
      experience: 'ประสบการณ์',
      goals: 'เป้าหมาย'
    }
  }
};

export default admin;
