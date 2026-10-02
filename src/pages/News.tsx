import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { newsArticleJsonLd } from '../seo/structuredData';
import type { NewsCategory } from '../types/news';
import { newsArticles } from '../data/news';
import { formatDate } from '../utils/formatDate';
import { Search, X, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsProps {
  onNavigate: (page: Page) => void;
}

export const News: React.FC<NewsProps> = ({ onNavigate: _ }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const itemsPerPage = 4;

  const categories: (NewsCategory | 'All')[] = ['All', 'Update', 'News', 'Circular', 'Awareness', 'Training', 'Alert'];

  const categoryColors: Record<string, { bg: string; text: string }> = {
    Update: { bg: 'var(--status-info-soft)', text: 'var(--status-info)' },
    News: { bg: 'var(--primary-soft)', text: 'var(--primary)' },
    Circular: { bg: 'var(--status-critical-soft)', text: 'var(--status-critical)' },
    Awareness: { bg: 'var(--accent-soft)', text: 'var(--accent)' },
    Training: { bg: 'var(--status-general-soft)', text: 'var(--status-general)' },
    Alert: { bg: 'var(--status-high-soft)', text: 'var(--status-high)' },
    All: { bg: 'var(--bg-surface-alt)', text: 'var(--text-secondary)' },
  };

  const filtered = useMemo(() => {
    let result = newsArticles;
    if (selectedCategory !== 'All') result = result.filter(n => n.category === selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q) ||
        n.issuer.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategoryChange = (cat: NewsCategory | 'All') => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setExpandedId(null);
  };

  const newsJsonLd = newsArticles.slice(0, 3).map(n => newsArticleJsonLd(n));

  return (
    <motion.div
      className="page-news"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Official News, Circulars & Advisories | CVIRMS Karnataka"
        description="Stay updated with official police circulars, regulatory compliance mandates, standard operating procedures, and platform announcements."
        path="/news"
        language={language}
        jsonLd={newsJsonLd}
        breadcrumbs={[{ label: 'News', path: '/news' }]}
      />

      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--primary-soft) 100%)', padding: '72px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-tag">Government Circulars</div>
          <h1 style={{ marginBottom: 14 }}>News, Circulars & Official Advisories</h1>
          <p style={{ maxWidth: 680, fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Official press releases, gazette notifications, security directives, public awareness drives, and training announcements from Karnataka State Police and EDCS.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          {/* Search & Filter Bar */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240, position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="search"
                placeholder="Search news, circulars, or advisories..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                style={{
                  width: '100%', padding: '12px 14px 12px 44px',
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

            {/* Category Pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => {
                const isActive = selectedCategory === cat;
                const catColor = categoryColors[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    style={{
                      padding: '8px 16px', borderRadius: 'var(--radius-pill)', fontSize: '0.85rem', fontWeight: 600,
                      backgroundColor: isActive ? catColor.text : 'var(--bg-surface)',
                      color: isActive ? '#fff' : catColor.text,
                      border: `1px solid ${catColor.text}`, cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 20, fontWeight: 500 }}>
            Showing {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
            {searchQuery ? ` for "${searchQuery}"` : ''}
          </div>

          {/* News Grid */}
          {paginated.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <Search size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <p style={{ fontSize: '1.1rem' }}>No circulars found matching your search. Try different keywords or categories.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 24 }}>
              {paginated.map(article => {
                const catColor = categoryColors[article.category];
                const isExpanded = expandedId === article.id;
                return (
                  <article key={article.id} className="card-base" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 0 }}>
                      {/* Thumbnail */}
                      <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        <span style={{
                          position: 'absolute', top: 12, left: 12,
                          padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                          backgroundColor: catColor.bg, color: catColor.text,
                          fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em',
                        }}>
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', gap: 16, fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 10 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Calendar size={13} /> {formatDate(article.date)}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Clock size={13} /> {article.readTime}
                            </span>
                          </div>
                          <h2 style={{ fontSize: '1.2rem', lineHeight: 1.4, marginBottom: 10, color: 'var(--text-primary)' }}>{article.title}</h2>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 12 }}>
                            {isExpanded ? article.content?.join(' ') || article.description : article.description}
                          </p>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 14 }}>
                            Issued by: {article.issuer}
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : article.id)}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem',
                            padding: 0, background: 'none', border: 'none', cursor: 'pointer',
                          }}
                        >
                          {isExpanded ? 'Show Less ↑' : 'Read Full Circular ↓'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 40 }}>
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="btn-secondary"
                style={{ padding: '8px 14px', opacity: currentPage === 1 ? 0.4 : 1 }}
              >
                <ChevronLeft size={16} /> Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-btn)',
                    backgroundColor: currentPage === i + 1 ? 'var(--primary)' : 'var(--bg-surface)',
                    color: currentPage === i + 1 ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                    border: '1px solid var(--border)', fontWeight: 700, cursor: 'pointer',
                  }}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="btn-secondary"
                style={{ padding: '8px 14px', opacity: currentPage === totalPages ? 0.4 : 1 }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
