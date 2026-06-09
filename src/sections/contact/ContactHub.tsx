import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { ContactHubPanel } from './ContactHubPanel';

export function ContactHub() {
  return (
    <div style={{ paddingBottom: 24 }}>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 6 }}>
        <SectionHeader
          titleAr="التواصل"
          titleEn="Contact"
          descriptionAr="لنبدأ—تواصل سريع وواجهة فاخرة."
          descriptionEn="Let’s begin—fast communication with a premium UI."
        />

        <ContactHubPanel />
      </div>
    </div>
  );
}

