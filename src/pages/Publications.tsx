import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { PublicationsList } from '../sections/publications/PublicationsList';

export default function Publications() {
  return (
    <PageShell>
      <div className="container">
        <PublicationsList />
      </div>
    </PageShell>
  );
}

