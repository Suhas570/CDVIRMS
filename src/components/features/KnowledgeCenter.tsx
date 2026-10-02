import React, { useState } from 'react';
import { resourceDocuments } from '../../data/resources';
import { FileText, Download, CheckCircle, ArrowRight } from 'lucide-react';
import type { Page } from '../../types';

interface KnowledgeCenterProps {
  onNavigate: (page: Page) => void;
}

export const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const categories = [
    'All',
    'SOP Documents',
    'Hotel & PG Guidelines',
    'Quick Start Guide',
    'Compliance Checklist',
  ];

  const filteredDocs =
    selectedCategory === 'All'
      ? resourceDocuments.slice(0, 4)
      : resourceDocuments.filter((d) => d.category === selectedCategory);

  const handleDownload = (title: string) => {
    setDownloadNotice(`Downloading: ${title}...`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3000);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: '36px',
          }}
        >
          <div>
            <div className="section-tag">Statutory Knowledge Base</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Knowledge Center & Official SOPs
            </h2>
          </div>

          <button
            onClick={() => onNavigate('resources')}
            className="btn-secondary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <span>Explore All Manuals</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {downloadNotice && (
          <div
            style={{
              padding: '12px 18px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--status-general-soft)',
              color: 'var(--status-general)',
              border: '1px solid var(--status-general)',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <CheckCircle size={16} />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 8,
            marginBottom: 28,
            whiteSpace: 'nowrap',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--primary)' : 'var(--bg-surface)',
                  color: isSelected ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 8px',
                      borderRadius: 6,
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                    }}
                  >
                    <FileText size={14} />
                    <span>{doc.fileFormat}</span>
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {doc.fileSize}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-primary)' }}>
                  {doc.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>
                  {doc.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 14,
                  borderTop: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {doc.downloads.toLocaleString('en-IN')} downloads
                </span>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="btn-primary"
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.8rem',
                    borderRadius: 'var(--radius-btn)',
                  }}
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
