import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Lead from '@/models/Lead';

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    // 2. Connect to DB
    await connectToDatabase();

    // 3. Save/Update DB (Upsert Strategy - Focus on Project)
    const leadData = {
      type: 'project',
      name,
      phone,
      company,
      preferredMethod,
      contactDetail,
      contactTime,
      category,
      budget,
      timeline,
      challenge,
    };

    const lead = await Lead.findOneAndUpdate(
      { email: email.toLowerCase(), type: 'project' },
      { $set: leadData, $setOnInsert: { status: 'new' } },
      { upsert: true, new: true, runValidators: true }
    );

    // 4. Try sending email (Side Effect)
    try {
      await resend.emails.send({
        from: 'Aetox System <onboarding@resend.dev>',
        to: 'phrmsawanachyphl@gmail.com',
        subject: `🚀 [Project] ${lead.upsertedId ? 'New' : 'Updated'} Lead: ${name}`,
        html: `
          <div style="font-family: sans-serif; color: white; background: #050505; padding: 20px;">
            <h2>มีการติดต่อเข้ามาใหม่ (จ้างทำโปรเจกต์)</h2>
            <p><strong>ชื่อ:</strong> ${name}</p>
            <p><strong>อีเมล:</strong> ${email}</p>
            <p><strong>หัวข้อ:</strong> ${category}</p>
            <p>ไปที่ Admin เพื่อดูรายละเอียด: <a href="https://aetox.dev/th/aetox-hq-admin" style="color: #0A84FF;">Admin Panel</a></p>
          </div>
        `
      });
    } catch (emailError) {
      console.error('Email side-effect failed:', emailError);
    }

    return NextResponse.json({ success: true, id: lead._id }, { status: 201 });
  } catch (error: any) {
    console.error('Lead submission failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
