import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone,
      company, 
      preferredMethod, 
      contactDetail, 
      contactTime, 
      category, 
      budget, 
      timeline, 
      challenge 
    } = body;

    // 1. Basic Validation
    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and Email are required' }, { status: 400 });
    }

    // 2. Send email via Resend (The only source of truth now)
    const { data, error } = await resend.emails.send({
      from: 'Aetox System <onboarding@resend.dev>',
      to: 'phrmsawanachyphl@gmail.com',
      subject: `🚀 [Project Inquiry] New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #ffffff; background: #050505; padding: 40px; border-radius: 20px; border: 1px solid #1a1a1a;">
          <h2 style="color: #0A84FF; margin-bottom: 24px; font-size: 24px;">🚀 มีคนติดต่อจ้างงานใหม่เข้ามา!</h2>
          
          <div style="background: #111; padding: 24px; border-radius: 16px; margin-bottom: 24px;">
            <p style="margin: 8px 0;"><strong>👤 ชื่อ:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>📧 อีเมล:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>📞 เบอร์โทร:</strong> ${phone || '-'}</p>
            <p style="margin: 8px 0;"><strong>🏢 บริษัท:</strong> ${company || '-'}</p>
          </div>

          <div style="background: #111; padding: 24px; border-radius: 16px; margin-bottom: 24px;">
            <p style="margin: 8px 0; color: #0A84FF;"><strong>🛠️ รายละเอียดโปรเจกต์:</strong></p>
            <p style="margin: 8px 0;"><strong>หมวดหมู่:</strong> ${category}</p>
            <p style="margin: 8px 0;"><strong>งบประมาณ:</strong> ${budget}</p>
            <p style="margin: 8px 0;"><strong>ระยะเวลา:</strong> ${timeline}</p>
            <p style="margin: 16px 0; padding: 16px; background: #1a1a1a; border-radius: 12px; font-style: italic;">
              "${challenge}"
            </p>
          </div>

          <div style="background: #111; padding: 24px; border-radius: 16px;">
            <p style="margin: 8px 0; color: #0A84FF;"><strong>🕒 ข้อมูลการติดต่อกลับ:</strong></p>
            <p style="margin: 8px 0;"><strong>ช่องทางที่สะดวก:</strong> ${preferredMethod} (${contactDetail})</p>
            <p style="margin: 8px 0;"><strong>เวลาที่สะดวก:</strong> ${contactTime}</p>
          </div>

          <p style="margin-top: 40px; font-size: 10px; color: #444; text-transform: uppercase; letter-spacing: 2px;">
            AETO<span style="color: #0A84FF;">X</span> ENGINE — SECURE DATA STREAM
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 201 });
  } catch (error: any) {
    console.error('Lead submission failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
