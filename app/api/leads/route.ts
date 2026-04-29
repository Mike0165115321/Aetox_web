import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    
    // ดึง query parameters สำหรับการ filter (ถ้ามี)
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    
    let query: any = {};
    if (type) query.type = type;
    if (status) query.status = status;

    const leads = await Lead.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
