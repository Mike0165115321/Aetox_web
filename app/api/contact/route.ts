import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// สร้าง Instance ของ Resend ด้วย API Key จาก Environment Variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      type,
      name, 
      email, 
      phone,
      experience,
      goals,
      company, 
      preferredMethod, 
      contactDetail, 
      contactTime, 
      category, 
      budget, 
      timeline, 
      challenge 
    } = body;

    const isAcademy = type === 'academy' || type === 'academy_waitlist';

    // ส่ง Email หา Founder
    const { data, error } = await resend.emails.send({
      from: 'Aetox System <onboarding@resend.dev>',
      to: 'phrmsawanachyphl@gmail.com',
      subject: isAcademy 
        ? `🎓 [Academy] New Application: ${name}`
        : `🚀 [Project] New Lead: ${name} (${company || 'Individual'})`,
      html: isAcademy ? `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: white; padding: 40px; border-radius: 20px; border: 1px solid #2A2A2A;">
          <h1 style="color: #0A84FF; font-size: 24px; margin-bottom: 20px;">มีผู้สมัครเรียน Aetox Academy ใหม่!</h1>
          
          <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <h2 style="color: #0A84FF; font-size: 18px; margin-top: 0;">👤 ข้อมูลผู้สมัคร</h2>
            <p><strong>ชื่อ-นามสกุล:</strong> ${name}</p>
            <p><strong>อีเมล:</strong> ${email}</p>
            <p><strong>เบอร์โทร / Line:</strong> ${phone || 'ไม่ได้ระบุ'}</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <h2 style="color: #0A84FF; font-size: 18px; margin-top: 0;">🎓 ข้อมูลการเรียน</h2>
            <p><strong>ระดับประสบการณ์:</strong> ${experience}</p>
            <p><strong>เป้าหมายการเรียน:</strong></p>
            <p style="line-height: 1.6; color: #F5F5F7;">${goals}</p>
          </div>

          <p style="font-size: 12px; color: #48484A; margin-top: 30px; text-align: center;">
            Sent via Aetox.dev Academy Engine
          </p>
        </div>
      ` : `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0F1C; color: white; padding: 40px; border-radius: 20px; border: 1px solid #1e293b;">
          <h1 style="color: #06B6D4; font-size: 24px; margin-bottom: 20px;">มีผู้สนใจติดต่อโปรเจกต์ใหม่!</h1>
          
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: #3B82F6; font-size: 18px; margin-top: 0;">👤 ข้อมูลผู้ติดต่อ</h2>
            <p><strong>ชื่อ:</strong> ${name}</p>
            <p><strong>อีเมล:</strong> ${email}</p>
            <p><strong>บริษัท:</strong> ${company || 'ไม่ได้ระบุ'}</p>
            <p><strong>ช่องทางที่สะดวก:</strong> ${preferredMethod} (${contactDetail})</p>
            <p><strong>ช่วงเวลาที่สะดวก:</strong> ${contactTime}</p>
          </div>
          <!-- ... rest of the generic template ... -->
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: #06B6D4; font-size: 18px; margin-top: 0;">🎯 รายละเอียดโปรเจกต์</h2>
            <p><strong>หมวดหมู่:</strong> ${category}</p>
            <p><strong>งบประมาณ:</strong> ${budget}</p>
            <p><strong>กรอบเวลา:</strong> ${timeline}</p>
          </div>

          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
            <h2 style="color: #ef4444; font-size: 18px; margin-top: 0;">💡 ปัญหา/ความท้าทาย</h2>
            <p style="line-height: 1.6;">${challenge}</p>
          </div>
          <p style="font-size: 12px; color: #475569; margin-top: 30px; text-align: center;">
            Sent via Aetox.dev Closing Engine
          </p>
        </div>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
