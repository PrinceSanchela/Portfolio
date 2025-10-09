import { useEffect, useRef, useState } from "react";

export const useInViewAnimation = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current; // store ref safely
    if (!node) return; // stop if not mounted

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, ...options }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options]);

  return [ref, isVisible] as const;
};

