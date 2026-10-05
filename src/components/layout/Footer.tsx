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
          className="footer-grid"
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
              <img src="/cvirms-logo.png" alt="CVIRMS Logo" style={{ width: 38, height: 38, borderRadius: 8, objectFit: 'contain' }} />
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
                  {t('footer.govKarnataka')}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: 18, color: 'var(--text-secondary)' }}>
              {t('footer.brandDesc')}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>{t('footer.iso')}</span>
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
              {t('footer.navCol')}
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
              {t('footer.resourcesCol')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('footer.resource1')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('footer.resource2')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('footer.resource3')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t('footer.resource4')}
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
                  <span>{t('footer.launchEntityPortal')}</span>
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
              {t('footer.helpdeskCol')}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Phone size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{t('footer.tollFree')}</div>
                  <a href="tel:9187535990" style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    9187535990
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Mail size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{t('footer.officialQueries')}</div>
                  <a href="mailto:connect@cvirms.co.in" style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem' }}>
                    connect@cvirms.co.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {t('footer.address')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Notice */}
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
          <strong style={{ color: 'var(--text-primary)' }}>{t('footer.notice')}</strong>{' '}
          {t('footer.noticeText')}
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
            © {new Date().getFullYear()} CVIRMS. {t('footer.rights')} {t('footer.gigw')}
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span>{t('footer.privacy')}</span>
            <span>•</span>
            <span>{t('footer.terms')}</span>
            <span>•</span>
            <span>{t('footer.accessibility')}</span>
            <span>•</span>
            <span>{t('footer.sitemap')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
