import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function DesignShowcaseSection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 6 }}>
        <SectionHeader
          titleAr="عرض التصميم"
          titleEn="Design Showcase"
          descriptionAr="لقطات من واجهات داكنة فاخرة—مبنية على إيقاع بصري ثابت."
          descriptionEn="Luxury dark interfaces—built on consistent visual rhythm."
        />

        <GlassPanel>
          <div style={{ padding: 16 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 12,
              }}
            >
              {assets.gallery.slice(0, 4).map((img) => (
                <figure key={img.id} style={{ margin: 0 }}>
                  <img
                    src={img.path}
                    alt={`Gallery image ${img.id}`}
                    style={{
                      width: '100%',
                      borderRadius: 18,
                      border: '1px solid rgba(255,255,255,.10)',
                      background: 'rgba(255,255,255,.03)',
                    }}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>

            <div
              style={{
                marginTop: 12,
                borderTop: '1px solid rgba(255,255,255,.08)',
                paddingTop: 12,
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              {assets.gallery.slice(4, 7).map((img) => (
                <div
                  key={img.id}
                  style={{
                    width: 84,
                    height: 62,
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid rgba(214,179,106,.18)',
                    background: 'rgba(214,179,106,.06)',
                  }}
                  aria-hidden="true"
                >
                  <img src={img.path} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              ))}
              <a
                className="glass"
                href="/design"
                style={{
                  padding: '10px 14px',
                  borderRadius: 14,
                  border: '1px solid rgba(214,179,106,.35)',
                  background: 'rgba(214,179,106,.08)',
                  color: 'rgba(244,245,247,.95)',
                  fontWeight: 850,
                  alignSelf: 'center',
                }}
              >
                كل المعرض
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

