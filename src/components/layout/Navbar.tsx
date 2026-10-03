import React, { useState } from 'react';
import { PhoneCall, ExternalLink, Menu, X } from 'lucide-react';
import type { Page } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; labelKey: string }[] = [
    { page: 'home', labelKey: 'nav.home' },
    { page: 'about', labelKey: 'nav.about' },
    { page: 'features', labelKey: 'nav.features' },
    { page: 'tutorials', labelKey: 'nav.tutorials' },
    { page: 'news', labelKey: 'nav.news' },
    { page: 'resources', labelKey: 'nav.resources' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px',
            gap: '16px',
          }}
        >
          {/* Logo & Emblem Branding */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              textDecoration: 'none',
              userSelect: 'none',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--primary-soft) 0%, var(--accent-soft) 100%)',
                border: '1px solid var(--border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/cvirms-logo.jpg"
                alt="CVIRMS Shield Emblem"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--primary)',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>CVIRMS</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: 4,
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                <span>{t('nav.govPortal')}</span>
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginTop: 3,
                }}
              >
                {t('nav.subtitle')}</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  style={{
                    position: 'relative',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface-alt)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls & External Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {/* Emergency Hotline Button */}
            <a
              href="tel:112"
              className="emergency-badge"
              title="State Police Emergency Helpline 112"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--status-critical-soft)',
                border: '1px solid var(--status-critical)',
                color: 'var(--status-critical)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <PhoneCall size={13} />
              <span>112</span>
            </a>

            {/* Language Selector */}
            <div className="desktop-control">
              <LanguageSelector />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* EXTERNAL APPLICATION LAUNCH BUTTON ONLY (NO INTERNAL LOGIN) */}
            <a
              href="https://app.cvirms.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary desktop-launch"
              style={{
                padding: '9px 18px',
                fontSize: '0.88rem',
                borderRadius: 'var(--radius-btn)',
              }}
            >
              <span>{t('nav.launchPortal')}</span>
              <ExternalLink size={14} />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-btn)',
                border: '1px solid var(--border-strong)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-primary)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg-surface)',
            padding: '20px 24px',
            boxShadow: 'var(--shadow-md)',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent',
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{t(item.labelKey)}</span>
                  {isActive && <span style={{ color: 'var(--primary)', fontWeight: 700 }}>•</span>}
                </button>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: 16,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Language:
              </span>
              <LanguageSelector />
            </div>

            <a
              href="https://app.cvirms.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              <span>{t('nav.launchPortal')}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Responsive media styling */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-launch {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
