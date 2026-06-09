import * as React from 'react';

export function useScrollReveal(rootMargin = '0px 0px -10% 0px') {
  React.useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    elements.forEach((el) => {
      el.classList.add('reveal');
    });

    let raf = 0;
    const onIntersect: IntersectionObserverCallback = (entries) => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('reveal-visible');
          }
        });
      });
    };

    const observer = new IntersectionObserver(onIntersect, { rootMargin, threshold: 0.12 });
    elements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [rootMargin]);
}

