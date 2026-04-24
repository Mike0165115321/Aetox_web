export const aiAgentsContent = {
  hero: {
    badge: "Intelligence Layer",
    title: {
      white: "Advanced Agentic",
      accent: "RAG System"
    },
    description: "ยกระดับจาก 'แชทบอททั่วไป' สู่ 'สมองกลประจำองค์กร' ที่ถูกสร้างมาเพื่อเชื่อมต่อกับฐานข้อมูลของคุณโดยเฉพาะ ช่วยคิด วิเคราะห์ และตัดสินใจแก้ปัญหาซับซ้อนได้อย่างแม่นยำ",
    cta: "สนใจ RAG System"
  },
  showcase: [
    {
      title: "Step 01: Receive Query",
      subtitle: "รับโจทย์เชิงกลยุทธ์",
      desc: "ระบบรับคำถามธุรกิจที่ซับซ้อนในภาษาธรรมชาติ พร้อมจำแนกประเภทโจทย์และกำหนด Persona ผู้เชี่ยวชาญที่เหมาะสมก่อนเริ่มกระบวนการ"
    },
    {
      title: "Step 02: Query Decomposition",
      subtitle: "วิเคราะห์และแตกโจทย์",
      desc: "เมื่อได้รับคำถามที่ซับซ้อน ระบบจะทำหน้าที่เป็น Architect แตกปัญหาออกเป็นส่วนย่อยๆ เพื่อการค้นหาที่แม่นยำที่สุด"
    },
    {
      title: "Step 03: Hybrid Retrieval",
      subtitle: "สืบค้นข้อมูลเชิงลึก",
      desc: "ระบบจะทำการค้นหาแบบ Hybrid (Semantic + Keyword) ข้ามฐานข้อมูลทุกแหล่ง และตรวจสอบความสมบูรณ์ของข้อมูลแบบ Real-time"
    },
    {
      title: "Step 04: Evaluate & Loop",
      subtitle: "ประเมินและวนซ้ำ",
      desc: "ระบบประเมิน Confidence Score หากข้อมูลไม่ถึงเกณฑ์ 0.7 จะสร้างคำถามต่อยอดและวนลูปค้นหาเพิ่มเติมจนสมบูรณ์"
    },
    {
      title: "Step 05: Strategic Output",
      subtitle: "สังเคราะห์ผลลัพธ์",
      desc: "AI สวมบทบาทผู้เชี่ยวชาญ สรุปคำตอบพร้อมระบุความเสี่ยงและข้อเสนอแนะที่นำไปใช้งานจริงได้ทันที ผ่าน SSE Streaming"
    }
  ],
  pillars: {
    pillar1: {
      title: "1. ระบบสมองกลวิเคราะห์และวางแผน (Agentic Orchestrator)",
      description: "ระบบถูกออกแบบให้คิดและทำงานเป็นลูป (Loop) เหมือนมนุษย์ แทนที่จะค้นหาเพียงครั้งเดียว",
      features: [
        { title: "Query Decomposition", desc: "เมื่อเจอคำถามซับซ้อนเชิงกลยุทธ์ ระบบจะแตกคำถามใหญ่ออกเป็นคำถามย่อย (Sub-queries) หลายมิติที่สืบค้นได้ง่ายขึ้นโดยอัตโนมัติ" },
        { title: "Sufficiency Evaluation", desc: "ประเมินความมั่นใจว่าข้อมูลเพียงพอหรือไม่ (Confidence >= 0.7) หากไม่พอจะสร้างคำถามต่อยอดและวนลูปค้นหาเพิ่มจนสมบูรณ์" },
        { title: "Balanced Source Selection", desc: "ป้องกันข้อมูลเอนเอียง โดยใช้กลไก Round-robin เพื่อให้แน่ใจว่า AI ได้รับมุมมองจากทุกแหล่งข้อมูลอย่างสมดุลก่อนสังเคราะห์คำตอบ" }
      ]
    },
    pillar2: {
      title: "2. กลไกสืบค้นความแม่นยำสูง (Hybrid Precision Retrieval)",
      description: "ทลายข้อจำกัดการค้นหาด้วยคีย์เวิร์ดแบบเดิมๆ ด้วยการผสาน 3 สถาปัตยกรรมระดับโลกเข้าด้วยกัน",
      features: [
        { title: "HyDE Embedding", desc: "AI จินตนาการคำตอบจำลองล่วงหน้าเพื่อใช้เป็นเป้าหมายในการดึงข้อมูลที่แม่นยำที่สุด" },
        { title: "Hybrid Search", desc: "ผสานการค้นหาเชิงความหมายประมวลผลด้วย GPU กับการค้นหา Keyword Matching ทำให้ระบบเข้าใจทั้งบริบทและศัพท์เฉพาะทาง" },
        { title: "Adaptive Reranking", desc: "จัดอันดับอัจฉริยะด้วย Cross-Encoder หากผลลัพธ์ชัดเจนจะข้ามการจัดอันดับเพื่อความเร็ว (~15ms)" }
      ]
    },
    pillar3: {
      title: "3. การสังเคราะห์ข้อมูลเชิงกลยุทธ์ (Strategic Output Generation)",
      description: "ผลลัพธ์ไม่ใช่แค่การสรุปความ แต่เป็นการให้คำปรึกษาทางธุรกิจระดับสูง",
      features: [
        { title: "Adaptive Role-Playing", desc: "AI จะปรับบทบาทตัวเองตามโจทย์ เช่น สวมบทบาทนักวางแผนที่สามารถระบุความเสี่ยงและสิ่งที่ต้องแลกได้อย่างเฉียบขาด" },
        { title: "Cross-Concept Synthesis", desc: "ระบบสามารถวิเคราะห์จุดเหมือน จุดต่าง และสังเคราะห์โมเดลความคิดใหม่ๆ แบบข้ามฐานข้อมูลได้" },
        { title: "Real-time SSE Streaming", desc: "สถาปัตยกรรมการส่งข้อมูลแบบ Token-by-token มอบประสบการณ์การตอบสนองที่ไหลลื่นและรวดเร็ว" }
      ]
    }
  },
  cta: {
    hirePoints: [
      'ระบบ AI ที่ปรับเปลี่ยนได้ตามข้อมูลใหม่ๆ(เรียนรู้ได้ตลอด)',
      'องค์กรที่มีฐานข้อมูลเอกสารมหาศาล',
      'ระบบ AI ตอบคำถามเฉพาะทางได้',
      'ระบบที่ต้องการให้ AI เข้าใจบริบทของธุรกิจคุณได้ดีที่สุด',
    ],
    learnPoints: [
      "Software Architect ที่ต้องการยกระดับทักษะการออกแบบ AI",
      "นักพัฒนาที่ต้องการเข้าใจกลไก Agentic RAG ตั้งแต่ฐานราก",
      "ทีมเทคนิคที่ต้องการสร้างระบบ AI ใช้งานเองภายในองค์กร"
    ]
  },
  simulator: {
    title: "RAG System",
    subtitle: "ทดสอบการทำงานของระบบประมวลผลอัจฉริยะ",
    description: "ลองสลับ Use Cases เพื่อดูว่าระบบ RAG ค้นหาข้อมูลจากฐานข้อมูลบริษัทมาตอบคำถามได้อย่างไร พร้อมเปรียบเทียบความคุ้มค่าที่เกิดขึ้นจริง",
    useCases: {
      hr: {
        id: 'hr',
        label: 'ฝ่ายปฏิบัติการ / HR',
        manualMinutes: 15,
        question: "เบิกงบจัดเลี้ยงลูกค้า ต้องใช้ฟอร์มไหน?",
        answer: "ใช้ฟอร์ม EX-04 ครับ สำหรับยอดไม่เกิน 5,000 บาท หัวหน้าแผนกสามารถเซ็นอนุมัติได้เลยครับ",
        citation: "คู่มือเบิกจ่าย_v2.pdf (หน้า 14)",
        color: "text-blue-400",
        bgAlert: "bg-blue-500/10 border-blue-500/20"
      },
      student: {
        id: 'student',
        label: 'ทะเบียนนักศึกษา',
        manualMinutes: 25,
        question: "ขอข้อมูลประวัติและตารางเรียนของ นักศึกษาชื่อ นายสมพงษ์ หน่อยครับ",
        answer: "ข้อมูลของ นายสมพงษ์ (รหัสนักศึกษา: 66012345)\n• วัน/เดือน/ปีเกิด: 15 พฤษภาคม 2548\n• เวลาเกิด: 08:30 น.\n\n📚 ตารางเรียนวันนี้ (วันศุกร์):\n09:00 - 12:00 | CS101 วิทยาการคอมพิวเตอร์เบื้องต้น (ห้อง 401)\n13:00 - 15:00 | EN102 ภาษาอังกฤษเพื่อการสื่อสาร (ห้อง 205)",
        citation: "Student_DB_2026 / Academic_Schedule.json",
        color: "text-amber-400",
        bgAlert: "bg-amber-500/10 border-amber-500/20"
      },
      librarian: {
        id: 'librarian',
        label: 'บรรณารักษ์ / ห้องสมุด',
        manualMinutes: 40,
        question: "กำลังหาหนังสือเกี่ยวกับการเขียน Prompt ภาษาไทย สำหรับคนเริ่มต้น มีแนะนำไหม และอยู่ชั้นไหน?",
        answer: "แนะนำหนังสือ 'Mastering AI Prompt ฉบับภาษาไทย' โดย อ.สมชาย (ตีพิมพ์ปี 2568) ครับ เนื้อหาครอบคลุมตั้งแต่พื้นฐานถึงการประยุกต์ใช้ในงานจริง\n\n📍 พิกัด: โซนเทคโนโลยีและนวัตกรรม ชั้น 3 หมวด QA76.76 \n✅ สถานะปัจจุบัน: มีหนังสือว่างบนชั้น 2 เล่มครับ",
        citation: "Library_Catalog_Index.csv / Book_Summary_DB",
        color: "text-purple-400",
        bgAlert: "bg-purple-500/10 border-purple-500/20"
      },
      legal: {
        id: 'legal',
        label: 'ฝ่ายกฎหมาย / บริหาร',
        manualMinutes: 60,
        question: "สัญญาลูกค้าตัวใหม่นี้ ขัดกับนโยบาย NDA หลักของเราไหม?",
        answer: "พบความเสี่ยงครับ ข้อ 4.2 ระบุให้คู่ค้าเปิดเผยข้อมูลรายชื่อซัพพลายเออร์ได้ ซึ่งขัดกับนโยบาย NDA หลักข้อ 2.1 ของเราครับ",
        citation: "Master_NDA_2025.pdf (หน้า 3)",
        color: "text-rose-400",
        bgAlert: "bg-rose-500/10 border-rose-500/20"
      }
    },
    features: [
      { 
        title: "ตอบจากฐานข้อมูลองค์กร 100%", 
        desc: "AI อ้างอิงเฉพาะข้อมูลของคุณ ลดปัญหาการมั่วข้อมูล (Hallucination)",
        icon: "CheckCircle2"
      },
      { 
        title: "เพิ่มข้อมูลได้ไม่จำกัด & เรียนรู้ทันที", 
        desc: "อัปโหลดเอกสารใหม่เข้า Database AI จะพร้อมดึงไปตอบได้ตลอดเวลา",
        icon: "RefreshCw"
      },
      { 
        title: "ปลอดภัย ไม่กระทบโมเดลหลัก", 
        desc: "แยกส่วนระหว่าง Knowledge Base และตัว LLM ทำให้ไม่ต้อง Retrain โมเดลใหม่",
        icon: "ShieldCheck"
      }
    ],
    pipeline: {
      title: "Admin Knowledge Pipeline",
      subtitle: "เพิ่มข้อมูลได้ตลอดเวลา — ระบบพร้อมใช้ทันที",
      description: "Admin อัปโหลดเอกสารเมื่อใดก็ได้ ระบบจะประมวลผลและนำเข้า Vector DB (ฐานข้อมูลเวกเตอร์) โดยอัตโนมัติ โดยไม่ต้อง Retrain โมเดล AI แม้แต่ครั้งเดียว",
      steps: [
        {
          step: "Step 1",
          title: "Admin อัปโหลดเอกสาร",
          desc: "รองรับไฟล์ทุกประเภท — PDF, DOCX, Excel, JSON, TXT, CSV หรือเชื่อมต่อฐานข้อมูลโดยตรง ไม่มีขีดจำกัดจำนวนไฟล์",
          tags: ['PDF', 'DOCX', 'JSON', 'CSV', 'SQL DB'],
          status: "พร้อมใช้ทันที"
        },
        {
          step: "Step 2",
          title: "Chunking — ตัดแบ่งข้อมูล",
          desc: "ระบบจะแบ่งเอกสารออกเป็น Chunk (ชิ้นส่วน) ขนาด 512 Tokens พร้อม Overlap เพื่อรักษาบริบท ทำให้ค้นหาได้แม่นยำขึ้น",
          config: { size: "512 tokens", overlap: "50 tokens", strategy: "semantic" }
        },
        {
          step: "Step 3",
          title: "Embedding — แปลงเป็น Vector",
          desc: "แต่ละ Chunk จะถูกแปลงเป็น Embedding Vector ขนาด 1,536 มิติ เพื่อเก็บความหมายของข้อความไว้ในรูปตัวเลข",
          metrics: "1,536 dim / chunk"
        },
        {
          step: "Step 4",
          title: "เข้าสู่ Vector DB — พร้อมใช้",
          desc: "Vector ทั้งหมดถูกจัดเก็บในฐานข้อมูลเวกเตอร์ที่รองรับระดับ Millions of Documents ค้นหาได้ในเสี้ยววินาที",
          metrics: { latency: "<200ms", search: "Cosine" }
        }
      ],
      footerNote: "ระบบ RAG ทำงานบน Vector Database แยกออกจากโมเดล AI หลัก — การเพิ่มหรือแก้ไขเอกสารจึงไม่กระทบโมเดล และไม่ต้อง Retrain ใหม่ ข้อมูลใหม่พร้อมให้ AI ดึงไปตอบได้ทันทีหลัง Indexing เสร็จสมบูรณ์"
    }
  },
  appliedIn: [
    { name: 'BookMind: AI Intelligent Library', link: 'https://github.com/Mike0165115321/BookMind.git' },
    { name: 'AI Robot "น้องน่าน"', link: 'https://github.com/Mike0165115321/AI-Robot-Guide-.git' },
    { name: 'Legal Document Analyzer' }
  ]
};

export default aiAgentsContent;
