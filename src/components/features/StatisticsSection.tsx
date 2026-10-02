import React from 'react';
import { platformStatistics } from '../../data/statistics';
import { useInView } from '../../utils/useInView';
import { useCountUp } from '../../utils/useCountUp';
import { useLanguage } from '../../context/LanguageContext';

const StatCounterCard: React.FC<{
  targetValue: number;
  suffix: string;
  label: string;
  description: string;
  hasStarted: boolean;
}> = ({ targetValue, suffix, label, description, hasStarted }) => {
  const count = useCountUp(targetValue, 2200, hasStarted);

  const formattedCount =
    targetValue > 1000 ? count.toLocaleString('en-IN') : count.toFixed(suffix === '%' ? 1 : 0);

  return (
    <div
      className="card-base"
      style={{
        textAlign: 'center',
        padding: '36px 20px',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
          fontWeight: 800,
          color: 'var(--primary)',
          lineHeight: 1,
          marginBottom: '12px',
          letterSpacing: '-0.03em',
        }}
      >
        <span>{formattedCount}</span>
        <span style={{ fontSize: '0.85em', marginLeft: 2 }}>{suffix}</span>
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: '1.05rem',
          color: 'var(--text-primary)',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.4,
          maxWidth: '220px',
          margin: '0 auto',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Statewide Impact</div>
          <h2 className="section-title">Scale, Reliability & Public Reach</h2>
          <p className="section-subtitle">
            Powering transparent, law-enforcement integrated guest verification at statewide scale.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {platformStatistics.map((item) => (
            <StatCounterCard
              key={item.id}
              targetValue={item.targetValue}
              suffix={item.suffix}
              label={t(item.labelKey) !== item.labelKey ? t(item.labelKey) : item.defaultLabel}
              description={item.description}
              hasStarted={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
