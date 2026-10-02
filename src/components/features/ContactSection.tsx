import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    propertyType: 'Hotel',
    city: 'Bengaluru',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        propertyType: 'Hotel',
        city: 'Bengaluru',
        phone: '',
        message: '',
      });
    }, 4000);
  };

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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Left Column: Direct Contact Details & WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card-base" style={{ padding: '28px' }}>
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
                    <a href="mailto:support@cvirms.gov.in" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)' }}>
                      support@cvirms.gov.in
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
                      href="https://wa.me/919480801000?text=Hi%20CVIRMS%20Helpdesk"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--status-general)' }}
                    >
                      +91 94808 01000
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

          {/* Right Column: Public Assistance Request Form */}
          <div className="card-base" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 12, color: 'var(--text-primary)' }}>
              Submit an Onboarding or General Query
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
              Official inquiries are handled by our technical implementation officers within 24 business hours.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px',
                  textAlign: 'center',
                  backgroundColor: 'var(--status-general-soft)',
                  border: '1px solid var(--status-general)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <CheckCircle2 size={48} color="var(--status-general)" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ color: 'var(--status-general)', fontSize: '1.2rem', marginBottom: 8 }}>
                  Inquiry Received Successfully!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  Your reference ticket #KA-CVIRMS-{Math.floor(100000 + Math.random() * 900000)} has been logged. Our jurisdiction liaison will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                    Full Name / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar, General Manager"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-input)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-surface-alt)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                      Establishment Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-surface-alt)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <option value="Hotel">Hotel / Resort</option>
                      <option value="PG">Paying Guest (PG)</option>
                      <option value="Hostel">Hostel / Dormitory</option>
                      <option value="Lodge">Lodge / Homestay</option>
                      <option value="Enterprise">Corporate Campus</option>
                      <option value="Other">Other / Citizen</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                      District / City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-surface-alt)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <option value="Bengaluru">Bengaluru Urban</option>
                      <option value="Bengaluru Rural">Bengaluru Rural</option>
                      <option value="Mysuru">Mysuru</option>
                      <option value="Mangaluru">Dakshina Kannada</option>
                      <option value="Hubballi">Dharwad / Hubballi</option>
                      <option value="Belagavi">Belagavi</option>
                      <option value="Other">Other Karnataka District</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-input)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-surface-alt)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                    Your Inquiry or Request *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our technical implementation team help you?"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-input)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-surface-alt)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  🔒 Data submitted here is used solely to respond to your technical request under Government privacy guidelines.
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '1rem',
                  }}
                >
                  <Send size={16} />
                  <span>Transmit Inquiry to Helpdesk</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Presence Strip */}
        <SocialLinks />
      </div>
    </section>
  );
};
