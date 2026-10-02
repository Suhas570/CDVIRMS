import React from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { organizationJsonLd, websiteJsonLd, faqJsonLd, localBusinessJsonLd } from '../seo/structuredData';
import { platformFaqs } from '../data/faqs';
import { HeroBanner } from '../components/features/HeroBanner';
import { IntroVideo } from '../components/features/IntroVideo';
import { StatisticsSection } from '../components/features/StatisticsSection';
import { SecurityCards } from '../components/features/SecurityCards';
import { NewsFeed } from '../components/features/NewsFeed';
import { FeatureHighlights } from '../components/features/FeatureHighlights';
import { KnowledgeCenter } from '../components/features/KnowledgeCenter';
import { Testimonials } from '../components/features/Testimonials';
import { SuccessStories } from '../components/features/SuccessStories';
import { TrainingCalendar } from '../components/features/TrainingCalendar';
import { MobileAppPromo } from '../components/features/MobileAppPromo';
import { FAQAccordion } from '../components/features/FAQAccordion';
import { ContactSection } from '../components/features/ContactSection';
import { CVIRMSBot } from '../components/ai/CVIRMSBot';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const scrollToVideo = () => {
    const el = document.getElementById('intro-video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homeJsonLd = [
    organizationJsonLd,
    websiteJsonLd,
    faqJsonLd(platformFaqs),
    localBusinessJsonLd,
  ];

  return (
    <motion.div
      className="page-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="CVIRMS | Centralized Visitor Information & Records Management System"
        description="Official Karnataka State Police platform for digital guest verification across Hotels, PGs, Lodges, and Hostels. Driving compliance and public safety."
        path="/"
        language={language}
        jsonLd={homeJsonLd}
      />

      {/* 1. Hero banner with 3D animated particle network */}
      <HeroBanner onNavigate={onNavigate} onScrollToVideo={scrollToVideo} />

      {/* 2. CVIRMS Introduction Video + 5 Tabs */}
      <IntroVideo id="intro-video-section" />

      {/* 3. Statistics Section (10,000+ entities, 5,00,000+ records, 500+ stations, 99.9% uptime) */}
      <StatisticsSection />

      {/* 4. Security Feature Cards (Secure Data, Real-time Access, Smart Analytics, Better Governance) */}
      <SecurityCards />

      {/* 5. News Feed (3 latest articles) */}
      <NewsFeed onNavigate={onNavigate} />

      {/* 6. Feature Highlights (6 icon cards) */}
      <FeatureHighlights onNavigate={onNavigate} />

      {/* 7. Knowledge Center (Tabs + PDFs) */}
      <KnowledgeCenter onNavigate={onNavigate} />

      {/* 8. Testimonials (Hotels, PGs, Police Officials) */}
      <Testimonials />

      {/* 9. Success Stories (Case Studies) */}
      <SuccessStories />

      {/* 10. Training Calendar + System Status Widget */}
      <TrainingCalendar />

      {/* 11. Mobile App Promotion (Google Play, QR code, Mockup) */}
      <MobileAppPromo />

      {/* 12. FAQ Accordion */}
      <FAQAccordion />

      {/* 13. Contact Section & Social Media Links */}
      <ContactSection />

      {/* 14. Floating AI Chat Widget with 3D Avatar */}
      <CVIRMSBot onNavigate={onNavigate} />
    </motion.div>
  );
};

export default Home;
