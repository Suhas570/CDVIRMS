import React from 'react';
import { platformTestimonials } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Stakeholder Endorsements</div>
          <h2 className="section-title">Trusted by Hospitality & Law Enforcement</h2>
          <p className="section-subtitle">
            Hear from General Managers, PG Operators, and Police Commissioners across Karnataka.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {platformTestimonials.map((item) => (
            <div
              key={item.id}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                    ))}
                  </div>
                  <Quote size={24} color="var(--border-strong)" />
                </div>

                <p style={{ fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 20 }}>
                  "{item.quote}"
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingTop: 16,
                  borderTop: '1px solid var(--border)',
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
                    {item.role}, {item.organization}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
