import mongoose, { Schema, model, models, Model, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  category: 'intelligence' | 'execution' | 'foundation' | 'academy' | 'special';
  image: string;
  tags: string[];
  client: string;
  year: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
  media?: {
    cover?: string;
    gallery?: string[];
    video?: string;
  };
  status: 'draft' | 'published';
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Please provide a title for this project.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this project.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category.'],
    enum: ['intelligence', 'execution', 'foundation', 'academy', 'special'],
    default: 'intelligence',
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for the cover.'],
  },
  tags: {
    type: [String],
    default: [],
  },
  client: {
    type: String,
    required: [true, 'Please specify the client name.'],
  },
  year: {
    type: String,
    required: [true, 'Please specify the project year.'],
    default: new Date().getFullYear().toString(),
  },
  slug: {
    type: String,
    required: [true, 'Please provide a unique slug.'],
    unique: true,
  },
  githubUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },
  media: {
    cover: String,
    gallery: [String],
    video: String,
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'published',
  },
  order: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

// Use a more robust way to export the model for TypeScript
const Project = (models.Project as Model<IProject>) || model<IProject>('Project', ProjectSchema);

export default Project;
