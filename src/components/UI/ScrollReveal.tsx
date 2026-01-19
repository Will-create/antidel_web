import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Initial transform values based on direction
  const initialTransforms = {
    up: 'translate3d(0, 50px, 0)',
    down: 'translate3d(0, -50px, 0)',
    left: 'translate3d(50px, 0, 0)',
    right: 'translate3d(-50px, 0, 0)',
    none: 'translate3d(0, 0, 0)',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element comes into view
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Unobserve after it becomes visible
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : initialTransforms[direction],
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;