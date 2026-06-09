import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { FeaturedProjectsGrid } from '../sections/projects/FeaturedProjectsGrid';

export default function Projects() {
  return (
    <PageShell>
      <div className="container">
        <FeaturedProjectsGrid />
      </div>
    </PageShell>
  );
}

