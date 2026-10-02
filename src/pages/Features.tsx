import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { platformFeatures } from '../data/features';
import { UserCheck, ShieldAlert, BarChart3, FileText, Smartphone, Radio, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface FeaturesProps {
  onNavigate: (page: Page) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onNavigate: _ }) => {
  const { language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(platformFeatures[0].id);
  const activeData = platformFeatures.find(f => f.id === activeFeature) || platformFeatures[0];

  const getIcon = (name: string, size = 24) => {
    const props = { size, color: 'var(--primary)' };
    switch (name) {
      case 'UserCheck': return <UserCheck {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} color="var(--accent)" />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'FileText': return <FileText {...props} color="var(--accent)" />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Radio': return <Radio {...props} color="var(--status-critical)" />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  const useCases = [
    { entity: 'Hotels & Resorts', points: ['Paperless check-in under 45 seconds', 'Automated night audit reports', 'Form C for foreign nationals', 'Emergency SOS for on-site incidents'] },
    { entity: 'Paying Guest (PG) Facilities', points: ['Monthly resident verification', 'Delivery partner gate passes', 'Parent emergency contact alerts', 'Jurisdiction police station integration'] },
    { entity: 'Hostels & Lodges', points: ['Quick ID scan at reception', 'Shared occupancy analytics', 'Real-time station handshake', 'Offline sync for network outages'] },
    { entity: 'Corporate Campuses & SEZs', points: ['Multi-gate visitor management', 'Role-based access for security staff', 'Visitor badge generation', 'Incident escalation workflows'] },
  ];

  return (
    <motion.div
      className="page-features"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="CVIRMS Platform Features | Digital Check-in, Station Sync & Analytics"
        description="Explore the 6 core pillars of CVIRMS: Paperless digital check-in, real-time police station handshake, occupancy analytics, Form C filings, mobile app, and emergency SOS."
        path="/features"
        language={language}
        breadcrumbs={[{ label: 'Features', path: '/features' }]}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--accent-soft) 100%)', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <div className="section-tag">Platform Capabilities</div>
            <h1 style={{ marginBottom: 18 }}>Every Feature Built for Public Safety</h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
              CVIRMS delivers six core capabilities that together eliminate paper-based vulnerabilities and create a real-time, encrypted bridge between commercial establishments and law enforcement.
            </p>
            <a href="https://app.cvirms.gov.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Access Operational Portal <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Feature Explorer */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Feature Deep Dive</div>
            <h2 className="section-title">Explore Each Capability</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 28, alignItems: 'start' }}>
            {/* Feature Selector Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'sticky', top: 100 }}>
              {platformFeatures.map(feat => {
                const isActive = activeFeature === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeature(feat.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)', textAlign: 'left',
                      backgroundColor: isActive ? 'var(--primary-soft)' : 'var(--bg-surface)',
                      border: isActive ? '1px solid var(--primary)' : '1px solid var(--border)',
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 700 : 500, fontSize: '0.9rem', cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {React.cloneElement(getIcon(feat.iconName, 16) as React.ReactElement<{color: string}>, { color: isActive ? '#fff' : 'var(--text-secondary)' })}
                    </div>
                    {feat.title}
                  </button>
                );
              })}
            </div>

            {/* Feature Detail Panel */}
            <div className="card-base" style={{ padding: 36 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, backgroundColor: 'var(--primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                {getIcon(activeData.iconName, 30)}
              </div>
              <h2 style={{ fontSize: '1.9rem', marginBottom: 12 }}>{activeData.title}</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.7 }}>{activeData.fullDesc}</p>

              <h3 style={{ fontSize: '1.1rem', marginBottom: 14, color: 'var(--text-primary)' }}>Key Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {activeData.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.1rem', marginBottom: 12, color: 'var(--text-primary)' }}>Applicable For</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {activeData.applicableEntities.map((ent, i) => (
                  <span key={i} style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--accent-soft)', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, border: '1px solid var(--accent)' }}>
                    {ent}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Sector-Specific Use Cases</div>
            <h2 className="section-title">Tailored for Every Establishment Type</h2>
            <p className="section-subtitle">CVIRMS adapts to diverse accommodation profiles without requiring configuration overhauls.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {useCases.map((uc, i) => (
              <div key={i} className="card-base" style={{ borderTop: '4px solid var(--primary)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 16, color: 'var(--primary)' }}>{uc.entity}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {uc.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <ArrowRight size={14} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
