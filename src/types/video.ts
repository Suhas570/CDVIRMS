export type VideoCategory =
  | 'Property Registration'
  | 'Property Login'
  | 'Visitor Registration'
  | 'Visitor Approval'
  | 'Reports'
  | 'Analytics'
  | 'Mobile App Usage'
  | 'Admin Panel'
  | 'Troubleshooting'
  | 'Other';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: VideoCategory;
  uploadDate: string;
  views: number;
  thumbnail: string;
  embedUrl: string;
  pdfGuideUrl?: string;
  featured?: boolean;
}
