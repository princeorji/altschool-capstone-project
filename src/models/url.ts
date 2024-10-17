import { Schema, model } from 'mongoose';
import { IUrl } from '../interfaces/IUrl';

const urlSchema = new Schema<IUrl>({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  customUrl: { type: String, unique: true, sparse: true },
  clickCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Url = model<IUrl>('Url', urlSchema);

export default Url;
