import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { SectionHeader } from '../ui/common/SectionHeader';
import { GlassPanel } from '../ui/common/GlassPanel';

export default function Legal() {
  return (
    <PageShell>
      <div className="container">
        <SectionHeader
          titleAr="الخصوصية والشروط"
          titleEn="Privacy & Terms"
          descriptionAr="محتوى قانوني (يتم مراجعته وتخصيصه لاحقاً)."
          descriptionEn="Legal content (to be reviewed and customized later)."
        />
        <GlassPanel>
          <div className="muted">
            سيتم وضع نصوص الخصوصية والشروط هنا.
          </div>
        </GlassPanel>
      </div>
    </PageShell>
  );
}

