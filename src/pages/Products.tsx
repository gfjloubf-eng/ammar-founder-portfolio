import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { SectionHeader } from '../ui/common/SectionHeader';
import { GlassPanel } from '../ui/common/GlassPanel';

export default function Products() {
  return (
    <PageShell>
      <div className="container">
        <SectionHeader
          titleAr="المنتجات السحابية"
          titleEn="SaaS Products"
          descriptionAr="أنظمة جاهزة للإطلاق—مبنية لأقصى سرعة ووضوح."
          descriptionEn="Launch-ready systems built for speed, clarity, and scale."
        />
        <GlassPanel>
          <div style={{ display: 'grid', gap: 14 }}>
            <div className="muted">(مخطط المحتوى) سيتم ربط منتجاتك لاحقاً مع البيانات/الصور المتاحة.</div>
          </div>
        </GlassPanel>
      </div>
    </PageShell>
  );
}

