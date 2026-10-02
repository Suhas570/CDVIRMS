import React from 'react';
import { ArrowRight, Play, Shield, Building2, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Page } from '../../types';

interface HeroBannerProps {
  onNavigate: (page: Page) => void;
  onScrollToVideo: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, onScrollToVideo }) => {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '60px 0 80px',
        /* Original light background restored */
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-page) 100%)',
      }}
    >
      {/* ── Bottom-right corner animated decoration ─────────────────────────
       *   Concentric spinning rings + floating sky blue/accent orbs.
       *   Clipped by overflow:hidden on parent <section>.
       *   Keyframes in index.css — zero JS runtime cost.
       * ─────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -80,
          right: -80,
          width: 420,
          height: 420,
          pointerEvents: 'none',
        }}
      >
        {/* Outermost slow-pulse ring */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '1.5px solid rgba(14,165,233,0.18)',
          animation: 'hero-ring-pulse-slow 6s ease-in-out infinite',
        }} />
        {/* Mid spinning dashed ring */}
        <div style={{
          position: 'absolute', inset: 40, borderRadius: '50%',
          border: '1px dashed rgba(14,165,233,0.28)',
          animation: 'hero-ring-spin 22s linear infinite',
        }} />
        {/* Inner reverse-spin ring */}
        <div style={{
          position: 'absolute', inset: 90, borderRadius: '50%',
          border: '1.5px solid rgba(30,58,138,0.22)',
          animation: 'hero-ring-spin-rev 15s linear infinite',
        }} />
        {/* Innermost pulse ring */}
        <div style={{
          position: 'absolute', inset: 140, borderRadius: '50%',
          border: '1px solid rgba(14,165,233,0.28)',
          animation: 'hero-ring-pulse 4s ease-in-out infinite',
        }} />
        {/* Central blue glow blob */}
        <div style={{
          position: 'absolute', inset: 150, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          animation: 'hero-glow-pulse 5s ease-in-out infinite',
        }} />
        {/* Floating sky blue orb */}
        <div style={{
          position: 'absolute', top: 62, left: 82,
          width: 10, height: 10, borderRadius: '50%',
          backgroundColor: '#0EA5E9',
          boxShadow: '0 0 10px 3px rgba(14,165,233,0.35)',
          animation: 'hero-dot-float 3.2s ease-in-out infinite',
        }} />
        {/* Floating accent navy orb */}
        <div style={{
          position: 'absolute', top: 132, left: 52,
          width: 7, height: 7, borderRadius: '50%',
          backgroundColor: '#1E3A8A',
          boxShadow: '0 0 8px 2px rgba(30,58,138,0.4)',
          animation: 'hero-dot-float-lag 4.1s ease-in-out infinite',
        }} />
        {/* Small blue orb */}
        <div style={{
          position: 'absolute', top: 102, right: 112,
          width: 5, height: 5, borderRadius: '50%',
          backgroundColor: '#0284C7',
          boxShadow: '0 0 6px 2px rgba(2,132,199,0.4)',
          animation: 'hero-dot-float 5s ease-in-out infinite 1s',
        }} />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Government Authority Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--primary-soft)',
            border: '1px solid var(--border-strong)',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '28px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <Shield size={16} />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Main Hero Heading */}
        <h1
          style={{
            maxWidth: '920px',
            margin: '0 auto 24px',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
          }}
        >
          {t('hero.title')}
        </h1>

        {/* Hero Subtitle */}
        <p
          style={{
            maxWidth: '740px',
            margin: '0 auto 36px',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
          }}
        >
          {t('hero.subtitle')}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '52px',
          }}
        >
          <button
            onClick={onScrollToVideo}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1.02rem' }}
          >
            <Play size={18} fill="currentColor" />
            <span>{t('hero.watchVideo')}</span>
          </button>

          <button
            onClick={() => onNavigate('features')}
            className="btn-secondary"
            style={{ padding: '14px 28px', fontSize: '1.02rem' }}
          >
            <span>{t('hero.exploreFeatures')}</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Trust & Proof Highlights Strip */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            padding: '16px 28px',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Building2 size={20} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>10,000+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Hotels &amp; PGs Enrolled</div>
            </div>
          </div>

          <div style={{ width: 1, height: 28, backgroundColor: 'var(--border)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Users size={20} color="var(--accent)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>5,00,000+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Guest Records Secured</div>
            </div>
          </div>

          <div style={{ width: 1, height: 28, backgroundColor: 'var(--border)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Shield size={20} color="var(--status-general)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>500+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Police Stations Connected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
