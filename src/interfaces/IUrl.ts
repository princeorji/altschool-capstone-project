export interface IUrl {
  originalUrl: string;
  shortUrl: string;
  customUrl?: string;
  clickCount: number;
  createdAt: Date;
}
