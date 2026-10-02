import { useState, useEffect } from 'react';

export const useCountUp = (
  target: number,
  duration: number = 2000,
  start: boolean = true
): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quartic function
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOut * target));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, start]);

  return count;
};
