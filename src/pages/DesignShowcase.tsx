import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { DesignShowcaseGrid } from '../sections/design/DesignShowcaseGrid';

export default function DesignShowcase() {
  return (
    <PageShell>
      <div className="container">
        <DesignShowcaseGrid />
      </div>
    </PageShell>
  );
}

