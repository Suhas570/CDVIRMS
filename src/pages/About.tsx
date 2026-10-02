import React from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { organizationJsonLd } from '../seo/structuredData';
import { ShieldCheck, Target, Eye, Milestone, Users, Building2, CheckCircle2, Award } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const milestones = [
    { year: '2018', event: 'Pilot Programme Launched in Bengaluru Central with 50 hotels under Karnataka State Police.' },
    { year: '2020', event: 'System scaled statewide. 1,000+ properties enrolled. EDCS integration completed.' },
    { year: '2022', event: 'Mobile Gatekeeper App released for Android. 500+ police stations connected to live feed.' },
    { year: '2023', event: 'DPDP Act compliance certified. Foreign national (Form C) automation went live with FRRO.' },
    { year: '2024', event: '10,000+ entities registered. 5 lakh+ visitor records processed with zero data breach.' },
    { year: '2026', event: 'AI-assisted biometric document scanning launched. Multilingual support for 7 regional languages.' },
  ];

  const stats = [
    { label: 'Registered Entities', value: '10,000+', icon: <Building2 size={20} color="var(--primary)" /> },
    { label: 'Visitor Records', value: '5,00,000+', icon: <Users size={20} color="var(--accent)" /> },
    { label: 'Police Stations', value: '512+', icon: <ShieldCheck size={20} color="var(--primary)" /> },
    { label: 'System Uptime', value: '99.98%', icon: <CheckCircle2 size={20} color="var(--status-general)" /> },
  ];

  const govDepts = [
    'Karnataka State Police (KSP)',
    'Dept. of Electronic Delivery of Citizen Services (EDCS)',
    'Bureau of Immigration & Foreigners Regional Registration Office (FRRO)',
    'National Informatics Centre (NIC) Karnataka',
    'State Data Center (SDC) Bengaluru',
    'Chief Privacy Officer, Govt. of Karnataka',
  ];

  return (
    <motion.div
      className="page-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="About CVIRMS | Mission, Legal Framework & Karnataka Police Backing"
        description="Learn about CVIRMS, Karnataka's official centralized visitor records management system, our statutory mission, regulatory framework, and journey since 2018."
        path="/about"
        language={language}
        jsonLd={organizationJsonLd}
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--primary-soft) 100%)',
          padding: '80px 0',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 780 }}>
            <div className="section-tag">Official Government Initiative</div>
            <h1 style={{ marginBottom: 20 }}>
              About CVIRMS — Centralized Visitor Information & Records Management System
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32 }}>
              A flagship public safety and digital governance platform developed jointly by the Karnataka State Police and the Department of Electronic Delivery of Citizen Services (EDCS) to modernize statutory visitor documentation across all commercial accommodations and establishments.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onNavigate('features')}>
                Explore Platform Features
              </button>
              <a
                href="https://app.cvirms.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Launch Official Portal ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                {stat.icon}
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, History */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, marginBottom: 60 }}>
            <div className="card-base" style={{ borderTop: '4px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'var(--primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={22} color="var(--primary)" />
                </div>
                <h2 style={{ fontSize: '1.4rem' }}>Our Mission</h2>
              </div>
              <p style={{ lineHeight: 1.7 }}>
                To eliminate handwritten visitor registers, suppress identity-based crimes in accommodation facilities, and deliver a seamless, encrypted, real-time visitor compliance network linking every registered hotel, PG, lodge, hostel, and corporate campus directly to Karnataka's law enforcement infrastructure.
              </p>
            </div>

            <div className="card-base" style={{ borderTop: '4px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Eye size={22} color="var(--accent)" />
                </div>
                <h2 style={{ fontSize: '1.4rem' }}>Our Vision</h2>
              </div>
              <p style={{ lineHeight: 1.7 }}>
                A Karnataka where every guest is a verified identity, every accommodation is a trusted space, and every police station has instant access to jurisdiction-level visitor data — enabling proactive crime prevention without compromising civilian privacy.
              </p>
            </div>

            <div className="card-base" style={{ borderTop: '4px solid var(--status-general)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'var(--status-general-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={22} color="var(--status-general)" />
                </div>
                <h2 style={{ fontSize: '1.4rem' }}>Our Values</h2>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                {['Citizen Privacy First (DPDP Act 2023)', 'Zero Paperwork Operations', 'Transparent Law Enforcement', 'Inclusive Multilingual Access', 'Resilient Cloud-First Architecture'].map((v, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="var(--status-general)" style={{ flexShrink: 0 }} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Government Backing */}
          <div className="card-base" style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <ShieldCheck size={28} color="var(--primary)" />
              <h2 style={{ fontSize: '1.6rem', margin: 0 }}>Government Backing & Compliance Framework</h2>
            </div>
            <p style={{ marginBottom: 20, lineHeight: 1.7 }}>
              CVIRMS is a multi-department initiative authorized by the Office of the Director General & Inspector General of Police, Karnataka. The system operates under the legal mandate of the Karnataka Public Safety Measures Enforcement Act, Section 34 — Guest Verification Obligations. All data governance adheres to the Digital Personal Data Protection (DPDP) Act, 2023 and ISO 27001:2022 standards.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {govDepts.map((dept, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '10px 14px', borderRadius: 10, backgroundColor: 'var(--bg-surface-alt)', border: '1px solid var(--border)' }}>
                  <CheckCircle2 size={15} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{dept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <Milestone size={28} color="var(--primary)" />
              <h2 style={{ fontSize: '1.6rem', margin: 0 }}>Platform Evolution Timeline</h2>
            </div>
            <div style={{ position: 'relative', paddingLeft: 28 }}>
              <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, backgroundColor: 'var(--border)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {milestones.map((m, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: -24, top: 6, width: 14, height: 14, borderRadius: '50%', backgroundColor: 'var(--primary)', border: '3px solid var(--bg-page)', boxShadow: `0 0 0 2px var(--primary)` }} />
                    <div style={{ marginLeft: 12 }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', display: 'block', marginBottom: 4 }}>
                        {m.year}
                      </span>
                      <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
