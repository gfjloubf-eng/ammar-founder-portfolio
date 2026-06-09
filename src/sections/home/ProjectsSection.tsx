import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { brand } from '../../content/brand';

export function ProjectsSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 6 }}>
        <SectionHeader
          titleAr="مسارات مشاريع"
          titleEn="Projects Paths"
          descriptionAr="نماذج من التجارب—من واجهات واضحة إلى تدفق عمل مُحكم."
          descriptionEn="A curated set of experiences—from clarity-first UI to robust workflows."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ fontWeight: 900, color: 'rgba(214,179,106,.95)' }}>NexaLedger</div>
              <p style={{ margin: 0, color: 'rgba(244,245,247,.72)', lineHeight: 1.8, fontSize: 14 }}>
                منصة تتبع وتحليل تدفقات مالية—مع لقطات متعددة تعكس تجربة كاملة.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
              {assets.nexaLedger.screenshots.slice(0, 2).map((shot) => (
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
                </figure>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                className="glass"
                href="/projects"
                style={{
                  padding: '10px 14px',
                  borderRadius: 14,
                  border: '1px solid rgba(214,179,106,.35)',
                  background: 'rgba(214,179,106,.08)',
                  color: 'rgba(244,245,247,.95)',
                  fontWeight: 850,
                }}
              >
                عرض المشاريع
              </a>
              <a
                className="glass"
                href="/design"
                style={{
                  padding: '10px 14px',
                  borderRadius: 14,
                  border: '1px solid rgba(255,255,255,.12)',
                  background: 'rgba(255,255,255,.04)',
                  color: 'rgba(244,245,247,.9)',
                  fontWeight: 850,
                }}
              >
                استكشف التصميم
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

