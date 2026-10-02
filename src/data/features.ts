export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  applicableEntities: string[];
}

export const platformFeatures: FeatureItem[] = [
  {
    id: 'feat-digital-checkin',
    iconName: 'UserCheck',
    title: 'Paperless Digital Check-in',
    shortDesc: 'Instant visitor onboarding with secure credential verification in under 45 seconds.',
    fullDesc: 'Eliminates vulnerable handwritten registers. Visitors check in via fast QR code scan or staff tablet with automated identity tokenization.',
    benefits: ['Zero paper clutter', 'Reduced front-desk queues by 70%', 'Error-free guest credentials'],
    applicableEntities: ['Hotels', 'PGs', 'Hostels', 'Corporate Campuses'],
  },
  {
    id: 'feat-station-sync',
    iconName: 'ShieldAlert',
    title: 'Real-time Station Handshake',
    shortDesc: 'Automated statutory synchronization with local jurisdictional police stations.',
    fullDesc: 'Direct, encrypted integration with Karnataka State Police databases ensuring immediate verification against public safety watchlists.',
    benefits: ['Instant red-flag notifications', 'Seamless night audit reporting', 'Eliminates physical station drop-offs'],
    applicableEntities: ['Hotels', 'Lodges', 'Commercial PGs', 'Resorts'],
  },
  {
    id: 'feat-smart-analytics',
    iconName: 'BarChart3',
    title: 'Occupancy & Safety Analytics',
    shortDesc: 'Visual insights, visitor turnover trends, and automated compliance scoring.',
    fullDesc: 'Custom dashboard widgets providing real-time headcount tallies, peak check-in distribution curves, and statutory audit readiness metrics.',
    benefits: ['Live building occupancy monitoring', 'Emergency roll-call readiness', 'Exportable compliance audits'],
    applicableEntities: ['Enterprises', 'Colleges', 'Hostels', 'Hotel Chains'],
  },
  {
    id: 'feat-form-c',
    iconName: 'FileText',
    title: 'Automated Form C Submissions',
    shortDesc: 'Direct compliance reporting for foreign national guests with Bureau of Immigration standards.',
    fullDesc: 'Automatically extracts passport and visa data, compiles regulatory Form C records, and transacts with statutory gateways without dual entry.',
    benefits: ['100% FRRO compliance', 'Zero manual re-typing errors', 'Instant digital submission receipts'],
    applicableEntities: ['Luxury Hotels', 'Homestays', 'Serviced Apartments'],
  },
  {
    id: 'feat-mobile-app',
    iconName: 'Smartphone',
    title: 'Mobile Gatekeeper App',
    shortDesc: 'Designed for on-duty security guards and front-desk personnel with offline fallback.',
    fullDesc: 'High-speed Android application supporting optical ID reading, visitor photo capture, visitor badge generation, and offline buffering.',
    benefits: ['Works seamlessly on affordable smartphones', 'No expensive biometric hardware required', 'Functions offline during outages'],
    applicableEntities: ['Gated PGs', 'Warehouse Hubs', 'Budget Lodges'],
  },
  {
    id: 'feat-emergency-sos',
    iconName: 'Radio',
    title: 'Emergency SOS Broadcast',
    shortDesc: 'One-touch panic alert transmitting GPS location and incident status directly to 112 Control Room.',
    fullDesc: 'In the event of an urgent security threat, staff can trigger a silent SOS signal that dispatches local police patrol units within minutes.',
    benefits: ['Direct line to 112 emergency response', 'Immediate geolocation transmission', 'Silent discreet trigger mechanism'],
    applicableEntities: ['All Registered Commercial Establishments'],
  },
];
