export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  avatar: string;
  rating: number;
}

export const platformTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'CVIRMS completely digitized our guest onboarding. We eliminated 14 bulky physical registers and cut our evening check-in queues from 12 minutes to under 45 seconds.',
    author: 'Rajesh Nambiar',
    role: 'General Manager',
    organization: 'The Grand Royal Orchid Hotel',
    location: 'MG Road, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Managing 12 PG branches with over 900 residents in Koramangala was an administrative nightmare. With CVIRMS mobile QR check-ins, police compliance is automated and our residents feel significantly safer.',
    author: 'Sunita Reddy',
    role: 'Proprietor & Managing Director',
    organization: 'Silicon Valley Stays & PGs',
    location: 'Koramangala, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'From a law enforcement standpoint, CVIRMS has transformed neighborhood surveillance. Real-time verification allows our beat officers to verify guest authenticity without harassing genuine travelers.',
    author: 'S. K. Murthy, IPS',
    role: 'Deputy Commissioner of Police',
    organization: 'Karnataka State Police (East Division)',
    location: 'Bengaluru City',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-4',
    quote: 'Foreign guest Form C compliance used to take hours of manual paperwork every evening. CVIRMS automates the entire immigration portal synchronization with zero errors.',
    author: 'Vikramaditya Hegde',
    role: 'Director of Operations',
    organization: 'Heritage Palace & Resorts',
    location: 'Mysuru',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];
