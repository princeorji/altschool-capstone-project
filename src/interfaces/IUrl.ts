import { Document } from 'mongoose';

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  customUrl?: string;
  clickCount: number;
  createdAt: Date;
}
