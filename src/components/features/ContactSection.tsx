import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ShieldAlert } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Public Helpdesk</div>
          <h2 className="section-title">Reach the CVIRMS Implementation Cell</h2>
          <p className="section-subtitle">
            Need guidance regarding property onboarding, statutory mandates, or training workshops? We are here to help.
          </p>
        </div>

        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 40px',
          }}
        >
          {/* Direct Contact Details & WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card-base" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 20, color: 'var(--text-primary)' }}>
                Official Contact Points
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Emergency 112 Notice */}
                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--status-critical-soft)',
                    border: '1px solid var(--status-critical)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <ShieldAlert size={24} color="var(--status-critical)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--status-critical)', fontSize: '0.95rem' }}>
                      Crime or Life-Safety Emergency? Dial 112
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      24/7 Unified Police, Fire & Medical Control Center.
                    </div>
                  </div>
                </div>

                {/* Toll-Free Technical Support */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Statewide Technical Helpdesk (Toll-Free)
                    </div>
                    <a href="tel:18004250000" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      1800-425-0000
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Mon – Sat: 08:00 AM – 08:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: 'var(--accent-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      E-Governance Inquiries
                    </div>
                    <a href="mailto:connect@cvirms.co.in" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)' }}>
                      connect@cvirms.co.in
                    </a>
                  </div>
                </div>

                {/* WhatsApp Helpdesk */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: 'var(--status-general-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={20} color="var(--status-general)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      WhatsApp Automated FAQ Bot
                    </div>
                    <a
                      href="https://wa.me/ 9187535990?text=Hi%20CVIRMS%20Helpdesk"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--status-general)' }}
                    >
                      +91  9187535990
                    </a>
                  </div>
                </div>

                {/* Physical Secretariat Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: 'var(--bg-surface-alt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Headquarters & Monitoring Cell
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                      Office of the Director General of Police, 2nd Floor, Technical Wing, Nrupathunga Road, Bengaluru 560001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Presence Strip */}
        <SocialLinks />
      </div>
    </section>
  );
};
