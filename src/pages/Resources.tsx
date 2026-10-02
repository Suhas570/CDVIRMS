import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { resourceDocuments } from '../data/resources';
import type { ResourceCategory } from '../data/resources';
import { Search, X, FileText, Download, CheckCircle } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

interface ResourcesProps {
  onNavigate: (page: Page) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onNavigate: _ }) => {
  const { language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<ResourceCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const tabs: (ResourceCategory | 'All')[] = [
    'All', 'User Manuals', 'Quick Start Guide', 'SOP Documents',
    'Hotel & PG Guidelines', 'Police Guidelines', 'Compliance Checklist', 'Download Forms',
  ];

  const filtered = useMemo(() => {
    let result = resourceDocuments;
    if (selectedTab !== 'All') result = result.filter(r => r.category === selectedTab);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedTab, searchQuery]);

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.75 } });
    setTimeout(() => setDownloadedId(null), 3500);
  };

  return (
    <motion.div
      className="page-resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Knowledge Center, Manuals & SOPs | CVIRMS Platform"
        description="Download official statutory guidelines, paying guest compliance manuals, Form C instructions, and police standard operating procedures for Karnataka."
        path="/resources"
        language={language}
        breadcrumbs={[{ label: 'Resources', path: '/resources' }]}
      />

      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--accent-soft) 100%)', padding: '72px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-tag">Knowledge Center</div>
          <h1 style={{ marginBottom: 14 }}>Official Manuals, SOPs & Compliance Resources</h1>
          <p style={{ maxWidth: 680, fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Download official Standard Operating Procedures, hotel & PG compliance guidelines, police directives, statutory forms, and quick-start reference materials.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          {/* Search Bar */}
          <div style={{ position: 'relative', maxWidth: 600, marginBottom: 32 }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input
              type="search"
              placeholder="Search manuals, forms, compliance documents..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '13px 14px 13px 46px',
                borderRadius: 'var(--radius-input)', border: '1px solid var(--border-strong)',
                backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.95rem',
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: 4, marginBottom: 28, borderBottom: '2px solid var(--border)' }}>
            {tabs.map(tab => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { setSelectedTab(tab); setSearchQuery(''); }}
                  style={{
                    padding: '10px 18px', borderRadius: 'var(--radius-btn) var(--radius-btn) 0 0',
                    fontSize: '0.875rem', fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface-alt)',
                    color: isActive ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                    border: 'none', cursor: 'pointer', transition: 'all var(--transition-fast)', flexShrink: 0,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Results & Download Feedback */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {filtered.length} document{filtered.length !== 1 ? 's' : ''} available
            </span>
            {downloadedId && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--status-general-soft)', color: 'var(--status-general)', fontSize: '0.825rem', fontWeight: 600, border: '1px solid var(--status-general)' }}>
                <CheckCircle size={14} />
                Official document download initiated!
              </div>
            )}
          </div>

          {/* Resource Cards Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <FileText size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <p>No documents found. Try a different search term or category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {filtered.map(doc => (
                <div key={doc.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Badge row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 6, backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', fontSize: '0.72rem', fontWeight: 700 }}>
                        <FileText size={13} /> {doc.fileFormat}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{doc.fileSize}</span>
                    </div>

                    {/* Category Tag */}
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 }}>
                      {doc.category}
                    </div>

                    <h3 style={{ fontSize: '1.05rem', lineHeight: 1.4, marginBottom: 10, color: 'var(--text-primary)' }}>{doc.title}</h3>
                    <p style={{ fontSize: '0.855rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 14 }}>{doc.description}</p>
                  </div>

                  {/* Download Row */}
                  <div style={{ paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      <div>Updated: {formatDate(doc.lastUpdated)}</div>
                      <div>{doc.downloads.toLocaleString('en-IN')} downloads</div>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.id)}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.825rem' }}
                    >
                      <Download size={15} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
