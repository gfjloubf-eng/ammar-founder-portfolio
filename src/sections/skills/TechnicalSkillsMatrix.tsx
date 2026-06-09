import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function TechnicalSkillsMatrix() {
  return (
    <section>
      <SectionHeader
        titleAr="مصفوفة المهارات التقنية"
        titleEn="Technical Skills Matrix"
        descriptionAr="نقاط قوة واضحة تُقاس بالجودة: وضوح، أداء، وإتاحة."
        descriptionEn="Clear strengths measured by quality: clarity, performance, accessibility."
      />

      <GlassPanel>
        <div style={{ padding: 16, display: 'grid', gap: 12 }}>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { k: 'React / TypeScript', v: 94 },
              { k: 'RTL UX', v: 90 },
              { k: 'Performance', v: 88 },
              { k: 'Accessibility', v: 92 },
              { k: 'SEO', v: 86 },
              { k: 'UI System', v: 89 },
            ].map((s) => (
              <div
                key={s.k}
                style={{
                  border: '1px solid rgba(255,255,255,.10)',
                  borderRadius: 18,
                  padding: 12,
                  background: 'rgba(255,255,255,.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                  <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{s.k}</div>
                  <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13 }}>{s.v}%</div>
                </div>
                <div style={{ marginTop: 10, height: 10, borderRadius: 999, background: 'rgba(255,255,255,.07)', overflow: 'hidden' }} aria-hidden="true">
                  <div
                    style={{
                      width: `${s.v}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, rgba(214,179,106,.95), rgba(242,210,138,.35))',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

