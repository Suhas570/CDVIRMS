export interface BotRule {
  keywords: string[];
  response: string;
  suggestedAction?: {
    label: string;
    actionType: 'navigate' | 'external';
    target: string;
  };
}

export const defaultBotGreeting =
  "Hello! I am CVIRMS Bot, your digital assistant for the Centralized Visitor Information & Records Management System. How may I assist you today?";

export const suggestedBotChips = [
  'What is CVIRMS?',
  'How to access Entity Portal?',
  'Is CVIRMS free of cost?',
  'Download Mobile App',
  'Data Privacy & Security',
  'Helpline Contacts',
];

export const botRules: BotRule[] = [
  {
    keywords: ['what is', 'about', 'cvirms', 'system', 'overview'],
    response:
      'CVIRMS is an official technological platform by the Karnataka State Police & Department of EDCS. It digitalizes visitor registration for Hotels, PGs, Lodges, and Hostels to ensure public safety, seamless regulatory compliance, and rapid emergency coordination.',
    suggestedAction: {
      label: 'Read Full About Us',
      actionType: 'navigate',
      target: 'about',
    },
  },
  {
    keywords: ['login', 'portal', 'sign in', 'access', 'dashboard', 'entity', 'police'],
    response:
      'This public website is purely informational and does NOT host any login screens. To access the secure operational gateway for registered properties, please launch the official portal at https://app.cvirms.gov.in.',
    suggestedAction: {
      label: 'Launch Secure Portal ↗',
      actionType: 'external',
      target: 'https://app.cvirms.gov.in',
    },
  },
  {
    keywords: ['cost', 'price', 'fee', 'charge', 'free', 'subscription'],
    response:
      'CVIRMS is a government-backed public safety initiative provided completely free of charge to all registered accommodations and commercial entities in Karnataka. There are zero licensing fees or subscription charges.',
  },
  {
    keywords: ['mobile', 'app', 'android', 'download', 'apk', 'play store', 'ios'],
    response:
      'The official CVIRMS Gatekeeper Android application is available on the Google Play Store for on-duty receptionists and security guards. The iOS version is currently under development.',
    suggestedAction: {
      label: 'View App Features',
      actionType: 'navigate',
      target: 'features',
    },
  },
  {
    keywords: ['privacy', 'dpdp', 'security', 'safe', 'data', 'encryption', 'confidential'],
    response:
      'Your guest records are encrypted with 256-bit AES-GCM at rest and TLS 1.3 in transit. In strict compliance with the Digital Personal Data Protection (DPDP) Act 2023, data is stored in the Tier-4 State Data Center and never shared with commercial third parties.',
    suggestedAction: {
      label: 'Explore Security Specs',
      actionType: 'navigate',
      target: 'resources',
    },
  },
  {
    keywords: ['contact', 'help', 'support', 'phone', 'email', 'emergency', '112'],
    response:
      'For immediate police assistance, dial 112. For CVIRMS technical support, call toll-free at 9187535990 or email connect@cvirms.co.in. Our technical cell operates 24/7.',
  },
  {
    keywords: ['tutorial', 'video', 'how to', 'guide', 'train', 'manual'],
    response:
      'We provide comprehensive video tutorials and downloadable SOP manuals covering property onboarding, visitor approvals, and night audit filings.',
    suggestedAction: {
      label: 'Watch Video Tutorials',
      actionType: 'navigate',
      target: 'tutorials',
    },
  },
];
