
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  threshold = 0.1,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

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

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className="inline-block">
        {words.map((word, i) => (
          <span key={i} className="inline-block">
            {word.split('').map((char, j) => (
              <span
                key={j}
                className="inline-block opacity-0 animate-fade-in"
                style={{
                  animationDelay: isVisible ? `${delay + (i * 50) + (j * 30)}ms` : '0ms',
                  animationFillMode: 'forwards',
                }}
              >
                {char}
              </span>
            ))}
            <span> </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
