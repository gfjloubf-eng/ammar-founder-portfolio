import React from 'react';
import { assets } from '../../content/assets';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { GlassPanel } from '../../ui/common/GlassPanel';

export function DesignShowcaseGrid() {
  return (
    <section>
      <SectionHeader
        titleAr="معرض التصميم"
        titleEn="Design Showcase"
        descriptionAr="12 لقطة من الجاليري—بإيقاع داكن فخم وزجاج ذهبي."
        descriptionEn="12 gallery shots—premium dark rhythm with golden glass."
      />

      <GlassPanel>
        <div style={{ padding: 16, display: 'grid', gap: 12 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 12,
            }}
            aria-label="Design gallery"
          >
            {assets.gallery.map((img) => (
              <figure key={img.id} style={{ margin: 0 }}>
                <div
                  style={{
                    borderRadius: 18,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,.10)',
                    background: 'rgba(255,255,255,.02)',
                  }}
                >
                  <img
                    className="galleryTile"
                    src={img.path}
                    alt={`Gallery design ${img.id}`}
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

