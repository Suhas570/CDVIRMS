import React from 'react';
import { newsArticles } from '../../data/news';
import { formatDate } from '../../utils/formatDate';
import { ArrowRight, Calendar, User } from 'lucide-react';
import type { Page } from '../../types';

interface NewsFeedProps {
  onNavigate: (page: Page) => void;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ onNavigate }) => {
  const latestArticles = newsArticles.slice(0, 3);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Circular':
        return { bg: 'var(--status-critical-soft)', text: 'var(--status-critical)' };
      case 'Update':
        return { bg: 'var(--status-info-soft)', text: 'var(--status-info)' };
      case 'Alert':
        return { bg: 'var(--status-high-soft)', text: 'var(--status-high)' };
      case 'Training':
      default:
        return { bg: 'var(--primary-soft)', text: 'var(--primary)' };
    }
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
            marginBottom: '44px',
          }}
        >
          <div>
            <div className="section-tag">Public Advisories</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Latest News & Circulars
            </h2>
          </div>

          <button
            onClick={() => onNavigate('news')}
            className="btn-secondary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <span>View All Circulars</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {latestArticles.map((article) => {
            const catStyle = getCategoryColor(article.category);
            return (
              <article
                key={article.id}
                className="card-base"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() => onNavigate('news')}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: catStyle.bg,
                      color: catStyle.text,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    }}
                  >
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Calendar size={14} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <User size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: '12px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    {article.description}
                  </p>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: 'var(--primary)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  >
                    <span>Read Full Circular</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
