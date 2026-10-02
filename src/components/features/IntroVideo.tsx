import React, { useState } from 'react';
import { Play, CheckCircle2, ShieldCheck, HelpCircle, Layers, Award } from 'lucide-react';

export const IntroVideo: React.FC<{ id?: string }> = ({ id = 'intro-video-section' }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'how' | 'success' | 'faqs'>('overview');
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs: { key: 'overview' | 'benefits' | 'how' | 'success' | 'faqs'; label: string; icon: React.ReactNode }[] = [
    { key: 'overview', label: 'Overview', icon: <Layers size={16} /> },
    { key: 'benefits', label: 'Benefits', icon: <ShieldCheck size={16} /> },
    { key: 'how', label: 'How It Works', icon: <CheckCircle2 size={16} /> },
    { key: 'success', label: 'Success Stories', icon: <Award size={16} /> },
    { key: 'faqs', label: 'FAQs', icon: <HelpCircle size={16} /> },
  ];

  return (
    <section id={id} className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">System Introduction</div>
          <h2 className="section-title">Discover How CVIRMS Protects Karnataka</h2>
          <p className="section-subtitle">
            A unified digital bridge connecting accommodation facilities, commercial establishments, and law enforcement agencies.
          </p>
        </div>

        {/* Video Player Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 40px',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            backgroundColor: '#000',
            position: 'relative',
            aspectRatio: '16 / 9',
          }}
        >
          {isPlaying ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="CVIRMS Platform Overview & Official Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage:
                  'linear-gradient(rgba(35,26,15,0.45), rgba(35,26,15,0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setIsPlaying(true)}
            >
              <button
                aria-label="Play CVIRMS Overview Video"
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--text-on-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 10px rgba(14, 165, 233, 0.35)',
                  marginBottom: 16,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 0 0 16px rgba(14, 165, 233, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 0 10px rgba(14, 165, 233, 0.35)';
                }}
              >
                <Play size={32} fill="currentColor" style={{ marginLeft: 4 }} />
              </button>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center', padding: '0 20px' }}>
                Watch Official 3-Minute CVIRMS Video Walkthrough
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', marginTop: 6 }}>
                Full HD • Subtitles Available in Kannada & English
              </div>
            </div>
          )}
        </div>

        {/* 5 Interactive Clickable Tabs */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div
            role="tablist"
            style={{
              display: 'flex',
              gap: 8,
              borderBottom: '2px solid var(--border)',
              paddingBottom: 2,
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-btn) var(--radius-btn) 0 0',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 600,
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface-alt)',
                    color: isActive ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)',
                    border: 'none',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface-alt)',
              border: '1px solid var(--border)',
              borderTop: 'none',
              borderRadius: '0 0 var(--radius-card) var(--radius-card)',
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {activeTab === 'overview' && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 12 }}>What is CVIRMS and Who Does it Serve?</h3>
                <p style={{ marginBottom: 14 }}>
                  CVIRMS (Centralized Visitor Information & Records Management System) is the Government of Karnataka's flagship public safety infrastructure. It digitalizes all visitor documentation across hospitality establishments, co-living PGs, private hostels, lodges, and commercial corporate campuses.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 20 }}>
                  <div style={{ padding: 14, backgroundColor: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>For Commercial PGs</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Automated resident registry, delivery gate passes, and parent SOS coordination.</div>
                  </div>
                  <div style={{ padding: 14, backgroundColor: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>For Hotels & Lodges</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Instant Aadhaar/Passport verification and electronic Form C filings with zero paper logbooks.</div>
                  </div>
                  <div style={{ padding: 14, backgroundColor: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>For Law Enforcement</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Rapid jurisdictional verification and early warning alerts across all 500+ police stations.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 12 }}>Why Establishments & Police Trust CVIRMS</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong>Zero Paperwork & Clutter:</strong> Completely replaces handwritten register books prone to wear, illegibility, and loss.
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong>Full Legal Exemption:</strong> Certified compliance under Section 34 of the Karnataka Public Safety Measures Act.
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong>Encrypted Resident Privacy:</strong> 256-bit cryptographic vault safeguarding tenant information against commercial misuse.
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'how' && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 16 }}>The 4-Step Operational Flow</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  <div style={{ padding: 16, backgroundColor: 'var(--bg-surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 8 }}>1</div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Register Entity</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Properties onboard via municipal trade license validation on the official gateway.</div>
                  </div>
                  <div style={{ padding: 16, backgroundColor: 'var(--bg-surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 8 }}>2</div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Digital Onboarding</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Visitors scan front desk QR or reception scans photo ID in under 45 seconds.</div>
                  </div>
                  <div style={{ padding: 16, backgroundColor: 'var(--bg-surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 8 }}>3</div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Secure Handshake</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Encrypted data matches against jurisdictional safety databases silently.</div>
                  </div>
                  <div style={{ padding: 16, backgroundColor: 'var(--bg-surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 8 }}>4</div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Automate Audits</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Station manifests and Form C reports file automatically every night.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'success' && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 12 }}>Real Impact Across Karnataka</h3>
                <p style={{ marginBottom: 14 }}>
                  Over 10,000 entities have achieved 100% compliance audit marks. Whitefield tech hotels reduced check-in queues by 85%, while Koramangala PG associations reported a 99.4% drop in unregistered nighttime entries.
                </p>
                <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', borderLeft: '3px solid var(--primary)', paddingLeft: 14 }}>
                  "CVIRMS has brought peace of mind to our residents, owners, and police officers alike." — Bengaluru South PG Federation
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 12 }}>Common Questions Quickview</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Is there any software cost?</strong>
                    <p style={{ fontSize: '0.875rem' }}>No, CVIRMS is an official free government public service initiative.</p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Do we need fingerprint hardware?</strong>
                    <p style={{ fontSize: '0.875rem' }}>No special hardware needed. Works directly on smartphones and standard PCs.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
