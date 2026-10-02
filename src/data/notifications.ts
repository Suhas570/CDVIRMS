export interface NotificationItem {
  id: string;
  type: 'critical' | 'high' | 'general';
  message: string;
  date: string;
  linkText?: string;
  linkPage?: 'news' | 'resources' | 'tutorials' | 'features';
}

export const notifications: NotificationItem[] = [
  {
    id: 'notif-1',
    type: 'critical',
    message: 'Scheduled Database Cluster Maintenance: Sunday, 02:00 AM – 04:00 AM IST. Offline sync mode recommended.',
    date: '2026-10-01',
    linkText: 'Read Advisory',
    linkPage: 'news',
  },
  {
    id: 'notif-2',
    type: 'high',
    message: 'Government Circular #KA-POL-2026-89: Mandatory QR Visitor Registration for all PG & Hostel operators across Bengaluru Urban.',
    date: '2026-09-28',
    linkText: 'Download Circular',
    linkPage: 'resources',
  },
  {
    id: 'notif-3',
    type: 'general',
    message: 'Upcoming Interactive Webinar: "Fast-Tracking Hotel Compliance & Night Audit Filings via CVIRMS" on Oct 10.',
    date: '2026-09-25',
    linkText: 'View Schedule',
    linkPage: 'tutorials',
  },
  {
    id: 'notif-4',
    type: 'high',
    message: 'Mobile App Update v2.4.1 now live on Google Play: Enhanced document scanner & faster biometric check-in.',
    date: '2026-09-22',
    linkText: 'Explore Features',
    linkPage: 'features',
  },
];
