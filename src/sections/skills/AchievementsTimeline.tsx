import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function AchievementsTimeline() {
  return (
    <section>
      <SectionHeader
        titleAr="مسار الإنجازات"
        titleEn="Achievements Timeline"
        descriptionAr="محطات تحسين مستمرة—مبنية على جودة التجربة."
        descriptionEn="Continuous improvements—built on experience quality."
      />

      <GlassPanel>
        <div style={{ padding: 16, display: 'grid', gap: 12 }}>
          <ol style={{ margin: 0, paddingInlineStart: 18, display: 'grid', gap: 12 }}>
            {[
              { year: '2021', titleAr: 'تأسيس نظام RTL', titleEn: 'RTL System Foundation', descAr: 'واجهة متناسقة—مع قابلية وصول محسنة.', descEn: 'Consistent interface—better accessibility.' },
              { year: '2022', titleAr: 'تحسين الأداء', titleEn: 'Performance Upgrade', descAr: 'سرعة أعلى وتبسيط للهيكلة.', descEn: 'Faster load + simplified structure.' },
              { year: '2023', titleAr: 'معاينة مؤلفات', titleEn: 'Publications Preview', descAr: 'مودال PDF قابل للإغلاق ولوحة المفاتيح.', descEn: 'Keyboard-friendly PDF modal.' },
              { year: '2024', titleAr: 'تنظيم المعرض', titleEn: 'Showcase Organization', descAr: 'معرض داكن فخم—بإيقاع بصري ثابت.', descEn: 'Luxury dark showcase—consistent rhythm.' },
            ].map((t) => (
              <li
                key={t.year}
                style={{
                  border: '1px solid rgba(255,255,255,.10)',
                  borderRadius: 18,
                  padding: 14,
                  background: 'rgba(255,255,255,.03)',
                  listStyle: 'decimal',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                  <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{t.year}</div>
                  <div style={{ fontWeight: 950 }}>{t.titleAr}</div>
                </div>
                <div style={{ marginTop: 6, color: 'rgba(244,245,247,.70)', fontSize: 14, lineHeight: 1.8 }}>{t.descAr}</div>
                <div style={{ marginTop: 4, color: 'rgba(244,245,247,.50)', fontSize: 13, lineHeight: 1.7 }}>{t.titleEn}</div>
              </li>
            ))}
          </ol>
        </div>
      </GlassPanel>
    </section>
  );
}

