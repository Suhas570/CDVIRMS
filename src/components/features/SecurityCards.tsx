import React from 'react';
import { Lock, Zap, PieChart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const SecurityCards: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'sec-1',
      icon: <Lock size={26} color="var(--primary)" />,
      badge: 'End-to-End Security',
      title: t('security.card1.title'),
      desc: t('security.card1.desc'),
      accentColor: 'var(--primary)',
    },
    {
      id: 'sec-2',
      icon: <Zap size={26} color="var(--accent)" />,
      badge: 'Instant Information',
      title: t('security.card2.title'),
      desc: t('security.card2.desc'),
      accentColor: 'var(--accent)',
    },
    {
      id: 'sec-3',
      icon: <PieChart size={26} color="var(--primary)" />,
      badge: 'Data-driven Insights',
      title: t('security.card3.title'),
      desc: t('security.card3.desc'),
      accentColor: 'var(--primary)',
    },
    {
      id: 'sec-4',
      icon: <ShieldCheck size={26} color="var(--accent)" />,
      badge: 'Transparency & Integrity',
      title: t('security.card4.title'),
      desc: t('security.card4.desc'),
      accentColor: 'var(--accent)',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Security & Compliance</div>
          <h2 className="section-title">{t('security.title')}</h2>
          <p className="section-subtitle">{t('security.subtitle')}</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="card-base"
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '4px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = card.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = 'transparent';
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '16px',
                  backgroundColor: 'var(--primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {card.icon}
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.05em',
                  marginBottom: '6px',
                }}
              >
                {card.badge}
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
