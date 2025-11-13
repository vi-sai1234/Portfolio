
import { useEffect, useState, useRef } from 'react';

type UseInViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export const useInView = <T extends HTMLElement>(options: UseInViewOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce]);

  // FIX: Use `as const` to ensure a tuple type is inferred for the return value.
  // This prevents TypeScript from widening the array type to a union of `(RefObject | boolean)[]`,
  // which fixes the type error when destructuring the hook's return value in consuming components.
  return [ref, isInView] as const;
};
