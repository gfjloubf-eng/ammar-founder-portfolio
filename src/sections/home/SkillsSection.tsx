import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function SkillsSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 6 }}>
        <SectionHeader
          titleAr="المهارات"
          titleEn="Skills"
          descriptionAr="مصفوفة مهارات تقنية—بتركيز على الجودة، الأداء، وإمكانية الوصول."
          descriptionEn="Technical skill matrix—quality, performance, accessibility."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { k: 'Front-end', v: 'React + TypeScript', p: 92 },
                { k: 'UI/UX', v: 'Luxury dark UI systems', p: 88 },
                { k: 'Performance', v: 'Fast rendering & optimization', p: 86 },
                { k: 'Accessibility', v: 'RTL-first & keyboard-friendly', p: 90 },
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
                    <div style={{ fontWeight: 900, color: 'rgba(214,179,106,.95)' }}>{s.k}</div>
                    <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13 }}>{s.p}%</div>
                  </div>
                  <div style={{ color: 'rgba(244,245,247,.76)', marginTop: 6, fontSize: 14 }}>{s.v}</div>
                  <div style={{ marginTop: 10, height: 8, borderRadius: 999, background: 'rgba(255,255,255,.07)', overflow: 'hidden' }} aria-hidden="true">
                    <div style={{ width: `${s.p}%`, height: '100%', background: 'linear-gradient(90deg, rgba(214,179,106,.95), rgba(242,210,138,.35))' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: 'rgba(244,245,247,.58)', fontSize: 13, lineHeight: 1.8 }}>
              كل مهارة مبنية لتخدم المنتج: واجهات واضحة، أداء ثابت، وتجربة وصول سهلة.
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

