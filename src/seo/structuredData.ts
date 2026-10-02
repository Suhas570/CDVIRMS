const BASE_URL = 'https://cvirms.gov.in';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'GovernmentOrganization'],
  name: 'CVIRMS — Centralized Visitor Information & Records Management System',
  alternateName: 'CVIRMS',
  url: BASE_URL,
  logo: `${BASE_URL}/shield.svg`,
  description:
    'Official Karnataka State Police & EDCS digital platform for statutory visitor records management across hotels, PGs, lodges, hostels, and commercial establishments.',
  foundingDate: '2018',
  areaServed: {
    '@type': 'State',
    name: 'Karnataka',
    containedIn: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office of the DG & IGP, Nrupathunga Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-1800-425-0000',
      contactType: 'technical support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Kannada', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '112',
      contactType: 'emergency',
      areaServed: 'IN',
    },
  ],
  sameAs: [
    'https://twitter.com/karnatakapolice',
    'https://facebook.com/ksp.gov.in',
    'https://youtube.com/@KSPPublicSafety',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CVIRMS — Official Public Information Portal',
  url: BASE_URL,
  description: 'Karnataka government platform for visitor information and records management across hospitality and commercial establishments.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

export const videoObjectJsonLd = (video: {
  title: string;
  description: string;
  thumbnail: string;
  uploadDate: string;
  embedUrl: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.title,
  description: video.description,
  thumbnailUrl: video.thumbnail,
  uploadDate: video.uploadDate,
  embedUrl: video.embedUrl,
  publisher: {
    '@type': 'Organization',
    name: 'CVIRMS — Karnataka Police',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/shield.svg`,
    },
  },
});

export const newsArticleJsonLd = (article: {
  title: string;
  description: string;
  image: string;
  date: string;
  issuer: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    '@type': 'Organization',
    name: article.issuer,
  },
  publisher: {
    '@type': 'GovernmentOrganization',
    name: 'CVIRMS — Karnataka State Police',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/shield.svg`,
    },
  },
  url: `${BASE_URL}/news/${article.slug}`,
  mainEntityOfPage: `${BASE_URL}/news/${article.slug}`,
});

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOffice',
  name: 'CVIRMS Helpdesk — Karnataka State Police',
  image: `${BASE_URL}/shield.svg`,
  url: BASE_URL,
  telephone: '+91-1800-425-0000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nrupathunga Road, Police Bhavan',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: 'Free',
};
