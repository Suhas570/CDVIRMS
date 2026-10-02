import React from 'react';
import { QrCode, CheckCircle2, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const MobileAppPromo: React.FC = () => {
  const { t } = useLanguage();

  const appFeatures = [
    t('app.feature1'),
    t('app.feature2'),
    t('app.feature3'),
    t('app.feature4'),
  ];

  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--primary-soft) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Phone Mockup Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '300px',
                height: '560px',
                borderRadius: '40px',
                backgroundColor: '#1E1B18',
                border: '8px solid #2D2721',
                boxShadow: 'var(--shadow-lg), 0 24px 60px rgba(14, 165, 233, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Phone Speaker Notch */}
              <div
                style={{
                  width: '120px',
                  height: '18px',
                  backgroundColor: '#2D2721',
                  borderRadius: '0 0 14px 14px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: '#443B33' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#443B33' }} />
              </div>

              {/* Mock App UI Screen */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'var(--bg-surface)',
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {/* App Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <img src="/cvirms-logo.jpg" alt="App Shield" style={{ width: 22, height: 22, borderRadius: 4, objectFit: 'contain' }} />
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)' }}>CVIRMS Gate</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 10, backgroundColor: 'var(--status-general-soft)', color: 'var(--status-general)', fontWeight: 700 }}>
                    ONLINE
                  </span>
                </div>

                {/* Quick Check-in Tile */}
                <div
                  style={{
                    backgroundColor: 'var(--primary-soft)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 14,
                    padding: 14,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>Fast Scanner</div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Scan Guest QR Pass</div>
                  <div style={{ width: 48, height: 48, margin: '10px auto', borderRadius: 12, backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <QrCode size={26} />
                  </div>
                </div>

                {/* Today's Tally Box */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div style={{ padding: 10, backgroundColor: 'var(--bg-surface-alt)', borderRadius: 10, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Checked In</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>42</div>
                  </div>
                  <div style={{ padding: 10, backgroundColor: 'var(--bg-surface-alt)', borderRadius: 10, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Pending Exit</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>18</div>
                  </div>
                </div>

                {/* Recent Entries */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    Recent Gate Activity
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ padding: 8, borderRadius: 8, backgroundColor: 'var(--bg-surface-alt)', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                      <span>Rahul V. (Room 304)</span>
                      <span style={{ fontWeight: 700, color: 'var(--status-general)' }}>VERIFIED</span>
                    </div>
                    <div style={{ padding: 8, borderRadius: 8, backgroundColor: 'var(--bg-surface-alt)', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                      <span>Swiggy Delivery (Pass #89)</span>
                      <span style={{ fontWeight: 700, color: 'var(--primary)' }}>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div style={{ height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 80, height: 4, borderRadius: 2, backgroundColor: '#554B41' }} />
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Content & Badges */}
          <div>
            <div className="section-tag">{t('app.title')}</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '16px' }}>
              {t('app.title')}
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
              {t('app.desc')}
            </p>

            {/* Bullet Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: '36px' }}>
              {appFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Play Store Badge & QR Code */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: '20px' }}>
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=in.gov.cvirms.gatekeeper"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: 'var(--shadow-md)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={24} fill="#2DD4BF" color="#2DD4BF" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1' }}>
                    GET IT ON
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1 }}>
                    Google Play
                  </div>
                </div>
              </a>

              {/* QR Code Placeholder */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-card)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: 'var(--bg-surface-alt)',
                    border: '1px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <QrCode size={36} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Scan QR Code
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    Direct APK / Play Store
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              *{t('app.iosNote')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
