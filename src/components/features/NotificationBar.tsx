import React, { useState } from 'react';
import { notifications } from '../../data/notifications';
import { Bell, X, ArrowRight } from 'lucide-react';
import type { Page } from '../../types';

interface NotificationBarProps {
  onNavigate?: (page: Page) => void;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  if (!isVisible || notifications.length === 0) return null;

  const getDotColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'var(--status-critical)';
      case 'high':
        return 'var(--status-high)';
      case 'general':
      default:
        return 'var(--status-general)';
    }
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'critical':
        return 'Critical Alert';
      case 'high':
        return 'Circular';
      case 'general':
      default:
        return 'Update';
    }
  };

  return (
    <div
      role="region"
      aria-label="Government Advisories and System Notifications"
      style={{
        backgroundColor: 'var(--bg-surface-alt)',
        borderBottom: '1px solid var(--border)',
        fontSize: '0.825rem',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 110,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          backgroundColor: 'var(--primary)',
          color: 'var(--text-on-primary)',
          height: '100%',
          padding: '0 16px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          flexShrink: 0,
          zIndex: 2,
          boxShadow: '2px 0 8px rgba(0,0,0,0.06)',
        }}
      >
        <Bell size={13} />
        <span>Updates</span>
      </div>

      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 48,
            animation: 'marqueeScroll 38s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            paddingLeft: '24px',
          }}
        >
          {/* Double items for seamless marquee loop */}
          {[...notifications, ...notifications].map((item, index) => {
            const dotColor = getDotColor(item.type);
            return (
              <div
                key={`${item.id}-${index}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  cursor: item.linkPage && onNavigate ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (item.linkPage && onNavigate) onNavigate(item.linkPage as Page);
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: dotColor,
                    boxShadow: `0 0 6px ${dotColor}`,
                  }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: dotColor,
                    backgroundColor: 'var(--bg-surface)',
                    padding: '2px 6px',
                    borderRadius: 4,
                    border: '1px solid var(--border)',
                  }}
                >
                  {getBadgeText(item.type)}
                </span>
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                  {item.message}
                </span>
                {item.linkText && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      color: 'var(--primary)',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      fontSize: '0.78rem',
                    }}
                  >
                    {item.linkText} <ArrowRight size={12} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss notification bar"
        title="Dismiss notifications"
        style={{
          height: '100%',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-surface-alt)',
          borderLeft: '1px solid var(--border)',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        <X size={15} />
      </button>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
