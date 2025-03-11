
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 500,
  className,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
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
  }, [threshold, once]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in';
      case 'down':
        return 'animate-slide-down';
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      case 'none':
        return 'animate-scale-up';
      default:
        return 'animate-fade-in';
    }
  };

  const animationStyle = {
    opacity: 0,
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? getAnimationClass() : 'opacity-0')}
      style={isVisible ? animationStyle : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
