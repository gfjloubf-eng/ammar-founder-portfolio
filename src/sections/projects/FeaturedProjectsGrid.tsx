import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { brand } from '../../content/brand';

const projectCards = [
  {
    id: 'nexa-ledger',
    titleAr: 'NexaLedger',
    titleEn: 'NexaLedger',
    descAr: 'لوحة مالية بواجهة داكنة فاخرة—تجربة قابلة للتوسع. ',
    descEn: 'A premium dark financial UI—built to scale.',
    thumb: assets.nexaLedger.screenshots[0]?.path,
  },
  {
    id: 'nexa-analytics',
    titleAr: 'تحليلات Nexa',
    titleEn: 'Nexa Analytics',
    descAr: 'قراءة أسرع للمؤشرات، مع تنظيم بصري واضح.',
    descEn: 'Faster indicator reading with clear visual hierarchy.',
    thumb: assets.nexaLedger.screenshots[1]?.path,
  },
  {
    id: 'nexa-cashflow',
    titleAr: 'تدفق النقد',
    titleEn: 'Cashflow',
    descAr: 'مسارات بيانات تساعدك تتخذ قرارًا بثقة.',
    descEn: 'Data paths that help you decide with confidence.',
    thumb: assets.nexaLedger.screenshots[2]?.path,
  },
];

export function FeaturedProjectsGrid() {
  return (
    <section>
      <SectionHeader
        titleAr="المشاريع"
        titleEn="Projects"
        descriptionAr="مختارات من واجهات وأنظمة تُقدّم تجربة فاخرة مع وضوح ومرونة."
        descriptionEn="Curated interfaces and systems delivering premium clarity and flexibility."
      />

      <GlassPanel>
        <div style={{ padding: 16, display: 'grid', gap: 12 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 12,
            }}
            aria-label="Featured projects"
          >
            {projectCards.map((p) => (
              <article
                key={p.id}
                style={{
                  borderRadius: 18,
                  border: '1px solid rgba(255,255,255,.10)',
                  background: 'rgba(255,255,255,.03)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: 14, display: 'grid', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                    <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{p.titleEn}</div>
                    <div style={{ color: 'rgba(244,245,247,.55)', fontSize: 12 }}>{p.titleAr}</div>
                  </div>

                  {p.thumb && (
                    <a href={brand.socials.projects.nexaLedger} target="_blank" rel="noopener noreferrer">
                      <img
                        className="interactiveImage"
                        src={p.thumb}
                        alt={`${p.titleEn} preview`}
                        style={{
                          width: '100%',
                          borderRadius: 16,
                          border: '1px solid rgba(255,255,255,.10)',
                          background: 'rgba(255,255,255,.02)',
                        }}
                        loading="lazy"
                      />
                    </a>
                  )}

                  <p style={{ margin: 0, color: 'rgba(244,245,247,.70)', lineHeight: 1.8, fontSize: 14 }}>
                    {p.descAr}
                  </p>
                  <p style={{ margin: 0, color: 'rgba(244,245,247,.52)', lineHeight: 1.7, fontSize: 13 }}>
                    {p.descEn}
                  </p>

                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
                    {p.id === 'nexa-ledger' ? (
                      <a
                        href={brand.socials.projects.nexaLedger}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{
                          padding: '10px 12px',
                          borderRadius: 14,
                          border: '1px solid rgba(214,179,106,.35)',
                          background: 'rgba(214,179,106,.08)',
                          color: 'rgba(244,245,247,.95)',
                          fontWeight: 900,
                        }}
                      >
                        شاهد التصميم
                      </a>
                    ) : (
                      <a
                        href="/design"
                        className="glass"
                        style={{
                          padding: '10px 12px',
                          borderRadius: 14,
                          border: '1px solid rgba(214,179,106,.35)',
                          background: 'rgba(214,179,106,.08)',
                          color: 'rgba(244,245,247,.95)',
                          fontWeight: 900,
                        }}
                      >
                        شاهد التصميم
                      </a>
                    )}
                    <a
                      href="/contact"
                      className="glass"
                      style={{
                        padding: '10px 12px',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,.12)',
                        background: 'rgba(255,255,255,.04)',
                        color: 'rgba(244,245,247,.90)',
                        fontWeight: 900,
                      }}
                    >
                      ابدأ مشروعك
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ color: 'rgba(244,245,247,.58)', fontSize: 13, lineHeight: 1.8 }}>
            الصور المستخدمة هنا تأتي من لقطات NexaLedger المعروضة ضمن الأصول الحالية.
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

