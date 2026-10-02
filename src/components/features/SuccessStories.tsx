import React from 'react';
import { platformSuccessStories } from '../../data/successStories';
import { CheckCircle2, TrendingUp, MapPin } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Case Studies</div>
          <h2 className="section-title">Measurable Public Safety Outcomes</h2>
          <p className="section-subtitle">
            How leading establishments achieved zero-compliance risk while accelerating check-in throughput.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {platformSuccessStories.map((story) => (
            <div
              key={story.id}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'var(--accent-soft)',
                      color: 'var(--accent)',
                    }}
                  >
                    {story.entityType}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    <MapPin size={13} />
                    <span>{story.location}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>
                  {story.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 16 }}>
                  {story.entityName}
                </div>

                <div
                  style={{
                    padding: '14px',
                    borderRadius: 12,
                    backgroundColor: 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <TrendingUp size={24} color="var(--primary)" />
                  <div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                      {story.metricValue}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {story.metricLabel}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 18 }}>
                  {story.summary}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Key Outcomes:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {story.impacts.map((imp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
