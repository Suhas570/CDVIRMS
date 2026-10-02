export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const platformFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is CVIRMS and is registration mandatory for my property?',
    answer: 'CVIRMS (Centralized Visitor Information & Records Management System) is an initiative by the Government of Karnataka in collaboration with the State Police. Under the Karnataka Public Safety Measures Enforcement Act, all commercial establishments offering accommodation—including Hotels, Paying Guest (PG) facilities, Lodges, Hostels, and Corporate Guest Houses—are legally mandated to maintain digital visitor records via this platform.',
  },
  {
    id: 'faq-2',
    category: 'Privacy',
    question: 'How is guest identity and personal data protected?',
    answer: 'Data security is engineered strictly in compliance with the Digital Personal Data Protection (DPDP) Act and ISO 27001 standards. All identity records are encrypted using AES-256 GCM encryption at rest and TLS 1.3 in transit. Data is strictly sequestered, never commercialized, and accessible only to authorized law enforcement officers through audited legal requests.',
  },
  {
    id: 'faq-3',
    category: 'Hardware',
    question: 'Do properties need to purchase specialized biometric devices or servers?',
    answer: 'No expensive proprietary hardware is required. The CVIRMS system functions smoothly on any modern desktop browser, tablet, or standard Android smartphone using the official mobile gatekeeper app. Property staff can scan official government photo IDs using their existing smartphone camera.',
  },
  {
    id: 'faq-4',
    category: 'Operations',
    question: 'What happens if Internet connectivity drops at our front desk?',
    answer: 'The CVIRMS mobile app and web client feature an intelligent offline mode. Front desk staff can continue logging visitor check-ins and verifying identity documents. The records are safely encrypted in a local tamper-evident buffer and automatically synchronized with the central cloud cluster once connectivity resumes.',
  },
  {
    id: 'faq-5',
    category: 'Compliance',
    question: 'Does CVIRMS replace the manual physical register book completely?',
    answer: 'Yes. Once your property is verified and active on CVIRMS, your electronic guest manifests and automated daily station filings fulfill all statutory requirements under Karnataka law. Physical logbooks are no longer required and can be securely archived.',
  },
  {
    id: 'faq-6',
    category: 'Access',
    question: 'Can the general public or unauthorized persons view our guest records?',
    answer: 'Absolutely not. This public informational website (cvirms.gov.in) contains zero visitor or resident data. The operational application (app.cvirms.gov.in) is completely isolated behind multi-factor authentication, IP whitelisting, and strict cryptographic access controls restricted solely to registered properties and their designated jurisdictional police officers.',
  },
];
