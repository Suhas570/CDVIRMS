import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('.card-base') ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: `translate3d(${pos.x - (isHovered ? 4 : 3)}px, ${pos.y - (isHovered ? 4 : 3)}px, 0)`,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        }}
      />

      {/* Trailing Soft Halo Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? 42 : 28,
          height: isHovered ? 42 : 28,
          borderRadius: '50%',
          border: '1.5px solid var(--primary)',
          backgroundColor: isHovered ? 'var(--primary-soft)' : 'transparent',
          opacity: isHovered ? 0.75 : 0.45,
          pointerEvents: 'none',
          zIndex: 99998,
          transform: `translate3d(${pos.x - (isHovered ? 21 : 14)}px, ${pos.y - (isHovered ? 21 : 14)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.08s ease-out, background-color 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
};
