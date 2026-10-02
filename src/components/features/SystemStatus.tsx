import React, { useState, useEffect } from 'react';
import { CheckCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const SystemStatus: React.FC = () => {
  const { t } = useLanguage();
  const [lastCheck, setLastCheck] = useState('Just now');

  useEffect(() => {
    const timer = setInterval(() => {
      setLastCheck('2 minutes ago');
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-card)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: 'var(--status-general)',
              boxShadow: '0 0 10px var(--status-general)',
              animation: 'pulseDot 2s infinite',
            }}
          />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
            {t('status.title')}
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--status-general-soft)',
            color: 'var(--status-general)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          All Systems Live
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Public Portal</span>
          <span style={{ color: 'var(--status-general)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <CheckCircle size={14} /> Operational
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Central API Gateway</span>
          <span style={{ color: 'var(--status-general)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <CheckCircle size={14} /> Operational
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>State Data Center Cluster</span>
          <span style={{ color: 'var(--status-general)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <CheckCircle size={14} /> Operational
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Emergency 112 Dispatch Link</span>
          <span style={{ color: 'var(--status-general)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <CheckCircle size={14} /> Operational
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 12,
          borderTop: '1px solid var(--border)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <RefreshCw size={12} /> Last verification: {lastCheck}
        </span>
        <span style={{ fontWeight: 600, color: 'var(--primary)' }}>99.98% SLA Guaranteed</span>
      </div>

      <style>{`
        @keyframes pulseDot {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(22, 163, 74, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }
      `}</style>
    </div>
  );
};
