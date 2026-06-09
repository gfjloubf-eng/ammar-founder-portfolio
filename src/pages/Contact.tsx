import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { ContactHub } from '../sections/contact/ContactHub';

export default function Contact() {
  return (
    <PageShell>
      <div className="container">
        <ContactHub />
      </div>
    </PageShell>
  );
}

