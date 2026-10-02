import React from 'react';
import { ExternalLink, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import type { Page } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        paddingTop: '64px',
        paddingBottom: '32px',
        marginTop: '80px',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container">
        {/* Top 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Col 1: Brand & Gov Credentials */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
                cursor: 'pointer',
              }}
              onClick={() => onNavigate('home')}
            >
              <img src="/cvirms-logo.jpg" alt="CVIRMS Shield" style={{ width: 38, height: 38, borderRadius: 8, objectFit: 'contain' }} />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    letterSpacing: '-0.02em',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  CVIRMS
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                  }}
                >
                  Govt. of Karnataka
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: 18, color: 'var(--text-secondary)' }}>
              Centralized Visitor Information & Records Management System — A state-of-the-art digital infrastructure safeguarding citizens, guests, and accommodation providers across Karnataka.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>ISO 27001 Certified & DPDP Compliant</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Public Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tutorials')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.tutorials')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.news')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('nav.resources')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Resource Materials */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Statutory Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Karnataka Police Public Safety Act SOP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Hotel & PG Compliance Guidelines (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Foreign Guest Form C Instructions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Offline Register Backup Templates
                </button>
              </li>
              <li>
                <a
                  href="https://app.cvirms.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginTop: 6,
                  }}
                >
                  <span>Launch Entity Portal</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Helpline & Helpdesk */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Control Room & Helpdesk
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Phone size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Toll-Free Technical Helpline</div>
                  <a href="tel:18004250000" style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    1800-425-0000
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Mail size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Official Queries</div>
                  <a href="mailto:support@cvirms.gov.in" style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem' }}>
                    support@cvirms.gov.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Office of the DG & IGP, Nrupathunga Road, Bengaluru, Karnataka 560001
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Notice (Strict Informational Portal Notice) */}
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-surface-alt)',
            border: '1px solid var(--border)',
            fontSize: '0.825rem',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: 'var(--text-primary)' }}>Important Public Notice:</strong> This is a public informational website designed solely to provide regulatory awareness, guidelines, software updates, and statutory resources. Authorized property operators access the secure operational gateway exclusively via{' '}
          <a
            href="https://app.cvirms.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}
          >
            https://app.cvirms.gov.in
          </a>
          . No administrative credentials or resident records are handled on this public portal.
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            fontSize: '0.825rem',
            color: 'var(--text-secondary)',
          }}
        >
          <div>
            © {new Date().getFullYear()} CVIRMS. {t('footer.rights')} Designed and hosted in accordance with Government of India Guidelines for Websites (GIGW).
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Use</span>
            <span>•</span>
            <span>Accessibility Statement</span>
            <span>•</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
