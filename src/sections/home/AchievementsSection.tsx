import React from 'react';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function AchievementsSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 10 }}>
        <SectionHeader
          titleAr="الإنجازات"
          titleEn="Achievements"
          descriptionAr="خط زمني يوضح محطات تطوير التجربة—من فكرة إلى منتج."
          descriptionEn="A timeline of experience milestones—from idea to product."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { year: '2021', title: 'بناء نظام واجهات', desc: 'تصميم RTL-first مع زجاج ودهب ولمسة فاخرة.' },
                { year: '2022', title: 'تحسين الأداء', desc: 'تركيز على سرعة التحميل والوضوح البصري.' },
                { year: '2023', title: 'معاينة مؤلفات', desc: 'تطوير مودال PDF بتركيز على الوصول.' },
                { year: '2024', title: 'تكامل عرض المشاريع', desc: 'تنظيم محتوى المشاريع بنمط موحد.' },
              ].map((t) => (
                <div key={t.year} style={{ border: '1px solid rgba(255,255,255,.10)', borderRadius: 18, padding: 14, background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{t.year}</div>
                    <div style={{ fontWeight: 900 }}>{t.title}</div>
                  </div>
                  <div style={{ marginTop: 6, color: 'rgba(244,245,247,.70)', fontSize: 14, lineHeight: 1.8 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

