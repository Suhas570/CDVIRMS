import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-btn)',
        border: '1px solid var(--border-strong)',
        backgroundColor: 'var(--bg-surface)',
        color: 'var(--text-primary)',
        transition: 'all var(--transition-normal)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.color = 'var(--primary)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-strong)';
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={2.2} />
      ) : (
        <Sun size={18} strokeWidth={2.2} />
      )}
    </button>
  );
};
