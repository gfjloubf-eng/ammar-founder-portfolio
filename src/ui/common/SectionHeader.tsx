import React from 'react';

export function SectionHeader({
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
}: {
  titleAr: string;
  titleEn: string;
  descriptionAr?: string;
  descriptionEn?: string;
}) {
  return (
    <div style={{ display: 'grid', gap: 10, margin: '28px 0 18px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 14, color: 'rgba(214,179,106,.95)', fontWeight: 800, letterSpacing: '.18em' }}>
          {titleEn}
        </div>
        <h2 style={{ margin: 0, fontSize: 26, lineHeight: 1.2, letterSpacing: '-.02em' }}>
          {titleAr}
        </h2>
      </div>
      {(descriptionAr || descriptionEn) && (
        <div style={{ display: 'grid', gap: 6 }}>
          {descriptionAr && <div style={{ color: 'rgba(244,245,247,.78)', fontSize: 14 }}>{descriptionAr}</div>}
          {descriptionEn && <div style={{ color: 'rgba(244,245,247,.56)', fontSize: 13 }}>{descriptionEn}</div>}
        </div>
      )}
    </div>
  );
}

