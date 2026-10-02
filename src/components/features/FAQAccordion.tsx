import React, { useState } from 'react';
import { platformFaqs } from '../../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Help & Clarity</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Essential facts regarding statutory compliance, resident privacy, hardware requirements, and operation.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {platformFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="card-base"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--primary)' : 'var(--border)',
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    textAlign: 'left',
                    backgroundColor: isOpen ? 'var(--bg-surface-alt)' : 'var(--bg-surface)',
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <HelpCircle size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="var(--text-secondary)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '20px 24px',
                      backgroundColor: 'var(--bg-surface)',
                      borderTop: '1px solid var(--border)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
