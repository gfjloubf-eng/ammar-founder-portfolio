import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { brand } from '../../content/brand';

export function ContactSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 22 }}>
        <SectionHeader
          titleAr="التواصل"
          titleEn="Contact"
          descriptionAr="فلنصنع تجربة فاخرة ومتماسكة—راسلني لبدء العمل."
          descriptionEn="Let’s build a premium, cohesive experience—reach out to start."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 14 }}>
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>قناة مباشرة</div>
              <p style={{ margin: 0, color: 'rgba(244,245,247,.72)', lineHeight: 1.8, fontSize: 14 }}>
                يمكنك مراسلتي عبر البريد الإلكتروني. أرفق فكرة مشروعك وسأعود إليك بخطة أولية.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                className="glass"
                href={brand.socials.emailHref}
                style={{
                  padding: '12px 16px',
                  borderRadius: 16,
                  border: '1px solid rgba(214,179,106,.35)',
                  background: 'rgba(214,179,106,.08)',
                  color: 'rgba(244,245,247,.95)',
                  fontWeight: 900,
                }}
              >
                مراسلتي بالبريد
              </a>
              <a
                className="glass"
                href="/projects"
                style={{
                  padding: '12px 16px',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,.12)',
                  background: 'rgba(255,255,255,.04)',
                  color: 'rgba(244,245,247,.9)',
                  fontWeight: 900,
                }}
              >
                راجع المشاريع
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gap: 8,
                borderTop: '1px solid rgba(255,255,255,.08)',
                paddingTop: 12,
              }}
            >
              <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13, lineHeight: 1.8 }}>
                تفضيلاتي: واجهات RTL-first، محتوى واضح، وأداء ثابت عبر الأجهزة.
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

