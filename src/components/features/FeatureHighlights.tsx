import React from 'react';
import { platformFeatures } from '../../data/features';
import { UserCheck, ShieldAlert, BarChart3, FileText, Smartphone, Radio, ArrowRight } from 'lucide-react';
import type { Page } from '../../types';

interface FeatureHighlightsProps {
  onNavigate: (page: Page) => void;
}

export const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck size={24} color="var(--primary)" />;
      case 'ShieldAlert':
        return <ShieldAlert size={24} color="var(--accent)" />;
      case 'BarChart3':
        return <BarChart3 size={24} color="var(--primary)" />;
      case 'FileText':
        return <FileText size={24} color="var(--accent)" />;
      case 'Smartphone':
        return <Smartphone size={24} color="var(--primary)" />;
      case 'Radio':
      default:
        return <Radio size={24} color="var(--status-critical)" />;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Core Platform Capabilities</div>
          <h2 className="section-title">Engineered for Absolute Reliability</h2>
          <p className="section-subtitle">
            Six foundational pillars ensuring rapid guest operations while upholding Karnataka's statutory public safety directives.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {platformFeatures.map((feat) => (
            <div
              key={feat.id}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    backgroundColor: 'var(--bg-surface-alt)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  {getIcon(feat.iconName)}
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {feat.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {feat.shortDesc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '16px' }}>
                  {feat.applicableEntities.map((ent, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--bg-surface-alt)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {ent}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('features')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--primary)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
