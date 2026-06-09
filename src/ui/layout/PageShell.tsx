import React from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollToTop } from './ScrollToTop';
import { useScrollReveal } from '../common/useScrollReveal';

export function PageShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();

  return (
    <div className="page">
      <SiteHeader />
      <main className="main" role="main">
        {children}
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}


