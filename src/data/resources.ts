export type ResourceCategory =
  | 'User Manuals'
  | 'Quick Start Guide'
  | 'FAQ'
  | 'SOP Documents'
  | 'Police Guidelines'
  | 'Hotel & PG Guidelines'
  | 'Compliance Checklist'
  | 'Download Forms';

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  description: string;
  fileSize: string;
  fileFormat: 'PDF' | 'DOCX' | 'XLSX';
  lastUpdated: string;
  downloads: number;
}

export const resourceDocuments: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Karnataka State Police Standard Operating Procedure (SOP) for Visitor Registration',
    category: 'SOP Documents',
    description: 'Statutory mandate detailing requirements under Section 34 of the Karnataka Public Safety Measures Enforcement Act.',
    fileSize: '3.4 MB',
    fileFormat: 'PDF',
    lastUpdated: '2026-09-01',
    downloads: 18450,
  },
  {
    id: 'res-2',
    title: 'Paying Guest (PG) & Hostel Compliance Manual (2026 Edition)',
    category: 'Hotel & PG Guidelines',
    description: 'Guidelines on biometric entry, mandatory visitor log maintenance, CCTV integration, and fire safety verification.',
    fileSize: '2.8 MB',
    fileFormat: 'PDF',
    lastUpdated: '2026-08-15',
    downloads: 24100,
  },
  {
    id: 'res-3',
    title: 'Front-Desk Quick Start Reference Card',
    category: 'Quick Start Guide',
    description: 'Laminated printable double-sided cheat sheet for hotel receptionists covering QR check-in and night audit steps.',
    fileSize: '1.1 MB',
    fileFormat: 'PDF',
    lastUpdated: '2026-07-20',
    downloads: 31200,
  },
  {
    id: 'res-4',
    title: 'CVIRMS Enterprise Administrator User Manual',
    category: 'User Manuals',
    description: 'Comprehensive 68-page manual explaining role configuration, audit exports, station mapping, and API integration.',
    fileSize: '6.2 MB',
    fileFormat: 'PDF',
    lastUpdated: '2026-08-28',
    downloads: 8700,
  },
  {
    id: 'res-5',
    title: 'Annual Statutory Guest Compliance Self-Audit Checklist',
    category: 'Compliance Checklist',
    description: 'Printable checklist for property compliance officers to ensure zero non-compliance penalties during station inspections.',
    fileSize: '650 KB',
    fileFormat: 'PDF',
    lastUpdated: '2026-09-10',
    downloads: 15300,
  },
  {
    id: 'res-6',
    title: 'Form C - Foreign Visitor Information Entry Template',
    category: 'Download Forms',
    description: 'Standardized Bureau of Immigration template for recording passport, visa, and onward itinerary particulars.',
    fileSize: '420 KB',
    fileFormat: 'PDF',
    lastUpdated: '2026-06-30',
    downloads: 19800,
  },
  {
    id: 'res-7',
    title: 'Advisory on Emergency SOS Protocols and Jurisdictional Response',
    category: 'Police Guidelines',
    description: 'Instructions from the State Police Control Room on panic alarm dispatch, false alarm prevention, and contact protocols.',
    fileSize: '1.9 MB',
    fileFormat: 'PDF',
    lastUpdated: '2026-08-01',
    downloads: 12600,
  },
  {
    id: 'res-8',
    title: 'Offline Register Backup Spreadsheet Template',
    category: 'Download Forms',
    description: 'Pre-formatted spreadsheet conforming to CVIRMS schema for manual record-keeping during extreme network blackouts.',
    fileSize: '310 KB',
    fileFormat: 'XLSX',
    lastUpdated: '2026-05-15',
    downloads: 14200,
  },
];
