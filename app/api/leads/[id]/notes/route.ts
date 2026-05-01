import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Lead from '@/models/Lead';

// GET: ดึง Interactions ทั้งหมดของ Lead นั้น
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const lead = await Lead.findById(id).select('interactions name');
    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    // เรียงลำดับจากใหม่สุดไปเก่าสุด
    const sorted = [...lead.interactions].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({ success: true, data: sorted });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: เพิ่ม Note / Event ใหม่เข้า Timeline
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await request.json();

    const { type = 'note', content } = body;

    if (!content?.trim()) {
      return NextResponse.json({ success: false, error: 'Content is required' }, { status: 400 });
    }

    const lead = await Lead.findByIdAndUpdate(
      id,
      {
        $push: {
          interactions: {
            $each: [{ type, content: content.trim(), createdAt: new Date() }],
            $position: 0, // เพิ่มที่ตำแหน่งแรกเสมอ (ล่าสุดอยู่บนสุด)
          }
        }
      },
      { new: true, select: 'interactions' }
    );

    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: lead.interactions[0] }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
