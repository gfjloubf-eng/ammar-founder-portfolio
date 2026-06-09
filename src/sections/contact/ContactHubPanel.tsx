import React from 'react';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { brand } from '../../content/brand';
import { SectionHeader } from '../../ui/common/SectionHeader';

export function ContactHubPanel() {
  return (
    <GlassPanel>
      <div style={{ padding: 16, display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>قناة التواصل</div>
            <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13, marginTop: 4 }}>Luxury + سرعة استجابة</div>
          </div>
          <a
            href={brand.socials.emailHref}
            className="glass"
            style={{
              padding: '10px 14px',
              borderRadius: 14,
              border: '1px solid rgba(214,179,106,.35)',
              background: 'rgba(214,179,106,.08)',
              color: 'rgba(244,245,247,.95)',
              fontWeight: 900,
              whiteSpace: 'nowrap',
            }}
          >
            مراسلتي
          </a>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          <div style={{ color: 'rgba(244,245,247,.76)', lineHeight: 1.8, fontSize: 14 }}>
            أرسل فكرة مشروعك (نطاق العمل + أهداف) وسأرد بخطة أولية مرتبة.
          </div>
          <ul style={{ margin: 0, paddingInlineStart: 18, color: 'rgba(244,245,247,.72)', lineHeight: 1.9 }}>
            <li>واجهات RTL-first</li>
            <li>SEO + Accessibility</li>
            <li>تصميم داكن فخم</li>
          </ul>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 12, color: 'rgba(244,245,247,.58)', fontSize: 13, lineHeight: 1.8 }}>
          بالضغط على «مراسلتي» سيتم فتح البريد الإلكتروني مباشرة.
        </div>
      </div>
    </GlassPanel>
  );
}

