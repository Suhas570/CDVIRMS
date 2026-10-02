import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { Page } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../seo/SEO';
import { videoObjectJsonLd } from '../seo/structuredData';
import { videoTutorials } from '../data/videos';
import type { VideoCategory } from '../types/video';
import { Search, X, Play, Download, Clock, Eye, Bookmark, Share2, ArrowLeft } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

interface TutorialsProps {
  onNavigate: (page: Page) => void;
}

export const Tutorials: React.FC<TutorialsProps> = ({ onNavigate: _ }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'views' | 'added'>('latest');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);

  const categories: (VideoCategory | 'All')[] = [
    'All', 'Property Registration', 'Property Login', 'Visitor Registration',
    'Visitor Approval', 'Reports', 'Analytics', 'Mobile App Usage',
    'Admin Panel', 'Troubleshooting', 'Other',
  ];

  const filtered = useMemo(() => {
    let result = videoTutorials;
    if (selectedCategory !== 'All') result = result.filter(v => v.category === selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'views') result = [...result].sort((a, b) => b.views - a.views);
    else if (sortBy === 'latest' || sortBy === 'added') result = [...result].sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const activeVideo = videoTutorials.find(v => v.id === activeVideoId);

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
      }
      return next;
    });
  };

  const handleShare = (id: string) => {
    setCopied(id);
    confetti({ particleCount: 20, spread: 40, origin: { y: 0.85 } });
    setTimeout(() => setCopied(null), 2500);
  };

  const tutorialsJsonLd = videoTutorials.slice(0, 3).map(v => videoObjectJsonLd(v));

  return (
    <motion.div
      className="page-tutorials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Video Tutorials & Operator Guides | CVIRMS Platform"
        description="Comprehensive video walkthroughs for property registration, visitor check-in, night audit filings, Form C submission, and mobile gatekeeper app operation."
        path="/tutorials"
        language={language}
        jsonLd={tutorialsJsonLd}
        breadcrumbs={[{ label: 'Tutorials', path: '/tutorials' }]}
      />

      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--primary-soft) 100%)', padding: '72px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-tag">Step-by-Step Guidance</div>
          <h1 style={{ marginBottom: 14 }}>Video Tutorials & Operator Walkthroughs</h1>
          <p style={{ maxWidth: 680, fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Official step-by-step video lessons for hotel receptionists, PG managers, security guards, and compliance officers covering every operational workflow.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          {/* Video Player Modal */}
          {activeVideo && (
            <div style={{ marginBottom: 40 }}>
              <button
                onClick={() => setActiveVideoId(null)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', marginBottom: 16, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
              >
                <ArrowLeft size={16} /> Back to All Videos
              </button>
              <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div style={{ padding: '20px 0' }}>
                <span style={{ padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, marginBottom: 10, display: 'inline-block' }}>
                  {activeVideo.category}
                </span>
                <h2 style={{ fontSize: '1.45rem', marginBottom: 8 }}>{activeVideo.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{activeVideo.description}</p>
                <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                  <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
                    <Download size={15} /> Download PDF Guide
                  </button>
                  <button onClick={() => toggleBookmark(activeVideo.id)} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                    <Bookmark size={15} fill={bookmarked.has(activeVideo.id) ? 'var(--primary)' : 'none'} /> Bookmark
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search + Filter + Sort Row */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240, position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="search"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '12px 14px 12px 44px', borderRadius: 'var(--radius-input)', border: '1px solid var(--border-strong)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.95rem' }}
              />
              {searchQuery && <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><X size={16} /></button>}
            </div>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              style={{ padding: '12px 14px', borderRadius: 'var(--radius-input)', border: '1px solid var(--border-strong)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.875rem' }}
            >
              <option value="latest">Sort: Latest</option>
              <option value="views">Sort: Most Viewed</option>
              <option value="added">Sort: Recently Added</option>
            </select>
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: 6, marginBottom: 28 }}>
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '7px 15px', borderRadius: 'var(--radius-pill)', fontSize: '0.825rem', fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface)',
                    color: isActive ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid var(--border)',
                    cursor: 'pointer', flexShrink: 0, transition: 'all var(--transition-fast)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Video Grid */}
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 18 }}>
            {filtered.length} tutorial{filtered.length !== 1 ? 's' : ''} found
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <Play size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <p>No tutorials found for this search. Try a different term or category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {filtered.map(video => (
                <div key={video.id} className="card-base" style={{ padding: 0, overflow: 'hidden' }}>
                  {/* Thumbnail */}
                  <div
                    style={{ position: 'relative', height: 190, cursor: 'pointer', overflow: 'hidden' }}
                    onClick={() => setActiveVideoId(video.id)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    {/* Play Overlay */}
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                    >
                      <div style={{ width: 52, height: 52, borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Play size={24} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
                      </div>
                    </div>
                    {/* Duration badge */}
                    <span style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '3px 7px', borderRadius: 6 }}>
                      {video.duration}
                    </span>
                    {/* Category Badge */}
                    <span style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'var(--primary)', color: '#fff', fontSize: '0.68rem', fontWeight: 700, padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
                      {video.category}
                    </span>
                  </div>

                  {/* Info Block */}
                  <div style={{ padding: '18px 20px 14px' }}>
                    <h3
                      style={{ fontSize: '1rem', lineHeight: 1.35, marginBottom: 8, cursor: 'pointer', color: 'var(--text-primary)' }}
                      onClick={() => setActiveVideoId(video.id)}
                    >
                      {video.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 12 }}>
                      {video.description.slice(0, 100)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={13} /> {video.views.toLocaleString('en-IN')}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={13} /> {formatDate(video.uploadDate)}</span>
                    </div>

                    {/* Action Row */}
                    <div style={{ display: 'flex', gap: 8, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                      <button
                        onClick={() => setActiveVideoId(video.id)}
                        className="btn-primary"
                        style={{ flex: 1, padding: '8px 12px', fontSize: '0.8rem', borderRadius: 8 }}
                      >
                        <Play size={14} fill="currentColor" /> Watch
                      </button>
                      <button
                        onClick={() => toggleBookmark(video.id)}
                        className="btn-secondary"
                        style={{ padding: '8px 10px', borderRadius: 8 }}
                        title="Bookmark video"
                      >
                        <Bookmark size={15} fill={bookmarked.has(video.id) ? 'var(--primary)' : 'none'} />
                      </button>
                      <button
                        onClick={() => handleShare(video.id)}
                        className="btn-secondary"
                        style={{ padding: '8px 10px', borderRadius: 8, color: copied === video.id ? 'var(--status-general)' : undefined }}
                        title="Share video"
                      >
                        <Share2 size={15} />
                      </button>
                    </div>
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
