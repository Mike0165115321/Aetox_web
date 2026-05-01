import mongoose, { Schema, model, models, Model, Document } from 'mongoose';

// ประวัติการติดต่อ (Timeline entry)
export interface IInteraction {
  type: 'note' | 'call' | 'email' | 'meeting' | 'status_change';
  content: string;
  createdAt: Date;
}

export interface ILead extends Document {
  type: 'project' | 'academy' | 'academy_waitlist';
  status: 'new' | 'contacted' | 'qualified' | 'rejected' | 'closed';
  name: string;
  email: string;
  phone?: string;
  
  // Project specific
  company?: string;
  preferredMethod?: string;
  contactDetail?: string;
  contactTime?: string;
  category?: string;
  budget?: string;
  timeline?: string;
  challenge?: string;
  
  // Academy specific
  experience?: string;
  goals?: string;
  
  // CRM Tracking
  notes?: string;
  priority: 'low' | 'medium' | 'high';
  interactions: IInteraction[];  // Timeline ประวัติการติดต่อ
  tags: string[];               // Tags สำหรับจัดกลุ่ม (เช่น VIP, Hot, ติดต่อยาก)
  nextFollowUp?: Date;          // วันนัดติดตามงานครั้งถัดไป
  
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>({
  type: {
    type: String,
    required: [true, 'Lead type is required'],
    enum: {
      values: ['project', 'academy', 'academy_waitlist'],
      message: '{VALUE} is not a valid lead type'
    },
    index: true,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['new', 'contacted', 'qualified', 'rejected', 'closed'],
      message: '{VALUE} is not a valid status'
    },
    default: 'new',
    index: true,
  },
  name: { type: String, required: [true, 'Name is required'], trim: true },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    trim: true, 
    lowercase: true,
    index: true 
  },
  phone: { type: String, trim: true },
  
  company: { type: String, trim: true },
  preferredMethod: { type: String },
  contactDetail: { type: String },
  contactTime: { type: String },
  category: { type: String },
  budget: { type: String },
  timeline: { type: String },
  challenge: { type: String },
  
  experience: { type: String },
  goals: { type: String },
  
  notes: { type: String },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
    index: true,
  },
  interactions: {
    type: [{
      type: { type: String, enum: ['note', 'call', 'email', 'meeting', 'status_change'], required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }],
    default: []
  },
  tags: { type: [String], default: [] },
  nextFollowUp: { type: Date }
}, {
  timestamps: true,
});

// Added index for createdAt via timestamps automatically, but explicit for clarity if needed
LeadSchema.index({ createdAt: -1 });

const Lead = (models.Lead as Model<ILead>) || model<ILead>('Lead', LeadSchema);

export default Lead;
