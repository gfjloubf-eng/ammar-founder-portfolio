import React from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const loc = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [loc.pathname]);
  return null;
}

