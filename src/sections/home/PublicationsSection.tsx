import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function PublicationsSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 6 }}>
        <SectionHeader
          titleAr="المؤلفات"
          titleEn="Publications"
          descriptionAr="ثلاثة كتب PDF—مع واجهة عرض فاخرة ومناسبة للقراءة."
          descriptionEn="Three PDF books—premium reading-ready previews."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
              {assets.books.map((b) => (
                <div
                  key={b.id}
                  style={{
                    border: '1px solid rgba(255,255,255,.10)',
                    borderRadius: 18,
                    padding: 14,
                    background: 'rgba(255,255,255,.03)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                    <div>
                      <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{b.title}</div>
                      <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13, marginTop: 4 }}>
                        كتاب PDF — جاهز للمعاينة
                      </div>
                    </div>
                    <a
                      className="glass"
                      href={`/publications?book=${encodeURIComponent(b.id)}`}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 14,
                        border: '1px solid rgba(214,179,106,.35)',
                        background: 'rgba(214,179,106,.08)',
                        color: 'rgba(244,245,247,.95)',
                        fontWeight: 850,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      افتح
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: 'rgba(244,245,247,.58)', fontSize: 13, lineHeight: 1.8 }}>
              ملاحظة: عند فتح الصفحة، تظهر المعاينة داخل مودال قابل للوصول.
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

