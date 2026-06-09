import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { brand } from '../../content/brand';

export function FeaturedNexaLedgerSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 10 }}>
        <SectionHeader
          titleAr="نكسى ليدجر — عرض مختصر"
          titleEn="Featured NexaLedger"
          descriptionAr="لوحة تحليلات مالية بتفاصيل واضحة وتجربة فاخرة."
          descriptionEn="A premium financial analytics experience with clear insight."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 14 }}>
            <div style={{ display: 'grid', gap: 12 }}>
              {assets.nexaLedger.screenshots.map((shot) => (
                <figure key={shot.role} style={{ margin: 0 }}>
                  <a href={brand.socials.projects.nexaLedger} target="_blank" rel="noopener noreferrer">
                    <img
                      className="interactiveImage"
                      src={shot.path}
                      alt={shot.alt}
                      style={{
                        width: '100%',
                        borderRadius: 16,
                        border: '1px solid rgba(255,255,255,.10)',
                        background: 'rgba(255,255,255,.03)',
                      }}
                      loading="lazy"
                    />
                  </a>
                  <figcaption
                    style={{
                      marginTop: 10,
                      color: 'rgba(244,245,247,.72)',
                      fontSize: 13,
                      textAlign: 'start',
                      direction: 'rtl',
                    }}
                  >
                    {shot.role === 'dashboard' && 'لوحة التحكم'}
                    {shot.role === 'analytics' && 'التحليلات'}
                    {shot.role === 'cashflow' && 'تدفق النقد'}
                    {shot.role === 'customers' && 'العملاء'}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div
              style={{
                display: 'grid',
                gap: 10,
                borderTop: '1px solid rgba(255,255,255,.08)',
                paddingTop: 12,
              }}
            >
              <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ fontWeight: 900, color: 'rgba(214,179,106,.95)' }}>مزايا سريعة</div>
                <ul style={{ margin: 0, paddingInlineStart: 18, color: 'rgba(244,245,247,.78)', lineHeight: 1.9 }}>
                  <li>عرض مؤشرات مالية بإيقاع بصري واضح</li>
                  <li>تصميم داكن فاخر مع تباين ممتاز</li>
                  <li>تركيز على القراءة وSEO/Accessibility</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href="/projects"
                  className="glass"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 14,
                    border: '1px solid rgba(214,179,106,.35)',
                    background: 'rgba(214,179,106,.08)',
                    color: 'rgba(244,245,247,.95)',
                    fontWeight: 850,
                  }}
                >
                  استكشف المشاريع
                </a>
                <a
                  href="/contact"
                  className="glass"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 14,
                    border: '1px solid rgba(255,255,255,.12)',
                    background: 'rgba(255,255,255,.04)',
                    color: 'rgba(244,245,247,.9)',
                    fontWeight: 850,
                  }}
                >
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

