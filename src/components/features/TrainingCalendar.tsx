import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { upcomingTrainingSessions } from '../../data/training';
import { formatDate } from '../../utils/formatDate';
import { Calendar, Clock, MapPin, User, CheckCircle } from 'lucide-react';
import { SystemStatus } from './SystemStatus';

export const TrainingCalendar: React.FC = () => {
  const [registeredSession, setRegisteredSession] = useState<string | null>(null);

  const handleRegister = (title: string) => {
    setRegisteredSession(title);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setRegisteredSession(null);
    }, 3500);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Capacity Building</div>
          <h2 className="section-title">Compliance Training & Live Status</h2>
          <p className="section-subtitle">
            Join official state webinars and monitor real-time infrastructure reliability metrics.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Upcoming Training Sessions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                Upcoming Department Sessions
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Free Public Entry
              </span>
            </div>

            {registeredSession && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: 10,
                  backgroundColor: 'var(--status-general-soft)',
                  color: 'var(--status-general)',
                  border: '1px solid var(--status-general)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <CheckCircle size={16} />
                <span>Pre-registration confirmed for: {registeredSession}</span>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {upcomingTrainingSessions.slice(0, 3).map((session) => (
                <div
                  key={session.id}
                  className="card-base"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: 6,
                        backgroundColor: 'var(--primary-soft)',
                        color: 'var(--primary)',
                      }}
                    >
                      {session.mode}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {session.seatsBooked} / {session.seatsTotal} enrolled
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', lineHeight: 1.35, color: 'var(--text-primary)' }}>
                    {session.title}
                  </h4>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Calendar size={13} />
                      <span>{formatDate(session.date)}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={13} />
                      <span>{session.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={13} />
                      <span>{session.venueOrPlatform}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 12,
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      <User size={13} />
                      <span>{session.instructor}</span>
                    </div>

                    <button
                      onClick={() => handleRegister(session.title)}
                      className="btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: 8 }}
                    >
                      Register Free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Infrastructure & System Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              State Cloud Operational Integrity
            </h3>
            <SystemStatus />

            <div
              className="card-base"
              style={{
                backgroundColor: 'var(--accent-soft)',
                border: '1px solid var(--accent)',
              }}
            >
              <h4 style={{ color: 'var(--accent)', fontSize: '1rem', marginBottom: 8 }}>
                Jurisdictional Station Audits
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 12 }}>
                Station officers conduct automated digital check-ins against guest manifests. In case of unexpected server rollouts, emergency dispatch retains hot-standby channels.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)' }}>
                Toll-Free Control Room: 1800-425-0000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
