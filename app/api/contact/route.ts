import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// สร้าง Instance ของ Resend ด้วย API Key ที่ Founder ให้มา
const resend = new Resend('re_QYztPYUu_32mZGKV7QAkHk8LndZP8ZsFN');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      company, 
      preferredMethod, 
      contactDetail, 
      contactTime, 
      category, 
      budget, 
      timeline, 
      challenge 
    } = body;

    // ส่ง Email หา Founder
    const { data, error } = await resend.emails.send({
      from: 'Aetox System <onboarding@resend.dev>',
      to: 'phrmsawanachyphl@gmail.com',
      subject: `🚀 New Lead: ${name} from ${company || 'Individual'}`,
      html: `
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
