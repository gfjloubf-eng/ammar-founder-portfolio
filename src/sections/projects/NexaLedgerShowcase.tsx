import React from 'react';
import { assets } from '../../content/assets';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { brand } from '../../content/brand';

export function NexaLedgerShowcase() {
  return (
    <section>
      <SectionHeader
        titleAr="معاينة NexaLedger الكاملة"
        titleEn="NexaLedger Showcase"
        descriptionAr="كل لقطة تُظهر زاوية من تجربة التحليل المالي—بأقصى وضوح."
        descriptionEn="Every screenshot shows a different perspective of the financial analytics experience."
      />

      <GlassPanel>
        <div style={{ padding: 16, display: 'grid', gap: 14 }}>
          {assets.nexaLedger.screenshots.map((shot) => (
            <div
              key={shot.role}
              style={{
                borderRadius: 18,
                border: '1px solid rgba(255,255,255,.10)',
                background: 'rgba(255,255,255,.03)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: 14, display: 'grid', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>
                    {shot.role === 'dashboard' && 'Dashboard'}
                    {shot.role === 'analytics' && 'Analytics'}
                    {shot.role === 'cashflow' && 'Cashflow'}
                    {shot.role === 'customers' && 'Customers'}
                  </div>
                  <div style={{ color: 'rgba(244,245,247,.55)', fontSize: 12 }}>
                    {shot.role === 'dashboard' && 'لوحة التحكم'}
                    {shot.role === 'analytics' && 'التحليلات'}
                    {shot.role === 'cashflow' && 'تدفق النقد'}
                    {shot.role === 'customers' && 'العملاء'}
                  </div>
                </div>

                <a href={brand.socials.projects.nexaLedger} target="_blank" rel="noopener noreferrer">
                  <img
                    className="nexaScreenshot interactiveImage"
                    src={shot.path}
                    alt={shot.alt}
                    loading="lazy"
                  />
                </a>

                <div style={{ color: 'rgba(244,245,247,.66)', fontSize: 13, lineHeight: 1.8 }}>
                  تم تصميم هذه اللقطة لتوضيح البيانات مع أسلوب داكن فاخر.
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

