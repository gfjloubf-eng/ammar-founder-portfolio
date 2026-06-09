import React, { useMemo, useState } from 'react';
import { assets } from '../../content/assets';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { SectionHeader } from '../../ui/common/SectionHeader';
import { PdfPreviewModal } from './PdfPreviewModal';

function useQueryParam(name: string) {
  const [value, setValue] = useState<string | null>(() => {
    const sp = new URLSearchParams(window.location.search);
    return sp.get(name);
  });

  React.useEffect(() => {
    const onPop = () => {
      const sp = new URLSearchParams(window.location.search);
      setValue(sp.get(name));
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [name]);

  return value;
}


export function PublicationsList() {
  const bookParam = useQueryParam('book');
  const [open, setOpen] = useState(false);

  const activeBook = useMemo(() => {
    if (!bookParam) return null;
    return assets.books.find((b) => b.id === bookParam) ?? null;
  }, [bookParam]);

  React.useEffect(() => {
    if (activeBook) setOpen(true);
  }, [activeBook]);

  const closeModal = () => {
    setOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('book');
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 16 }}>
        <SectionHeader
          titleAr="المؤلفات"
          titleEn="Publications"
          descriptionAr="ثلاثة كتب PDF—مع تجربة معاينة فاخرة ومرنة."
          descriptionEn="Three PDF books—premium preview experience."
        />

        <GlassPanel>
          <div style={{ padding: 16, display: 'grid', gap: 12 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 12,
              }}
              aria-label="Books list"
            >
              {assets.books.map((b) => (
                <article
                  key={b.id}
                  style={{
                    border: '1px solid rgba(255,255,255,.10)',
                    borderRadius: 18,
                    padding: 14,
                    background: 'rgba(255,255,255,.03)',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gap: 10,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                      <div>
                        <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{b.title}</div>
                        <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 13, marginTop: 4 }}>
                          كتاب PDF — معاينة داخلية
                        </div>
                      </div>
                      <a
                        className="glass"
                        href={`/publications?book=${encodeURIComponent(b.id)}`}
                        style={{
                          padding: '8px 12px',
                          borderRadius: 14,
                          border: '1px solid rgba(214,179,106,.35)',
                          background: 'rgba(214,179,106,.08)',
                          color: 'rgba(244,245,247,.95)',
                          fontWeight: 900,
                          whiteSpace: 'nowrap',
                        }}
                        aria-label={`Open preview for ${b.title}`}
                      >
                        افتح
                      </a>
                    </div>

                    <div style={{ color: 'rgba(244,245,247,.70)', fontSize: 13, lineHeight: 1.8 }}>
                      معاينة محسّنة مع إمكانية إغلاق سهلة ودعم لوحة المفاتيح.
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ color: 'rgba(244,245,247,.58)', fontSize: 13, lineHeight: 1.8 }}>
              تلميح: افتح أي كتاب—سيظهر المودال تلقائيًا.
            </div>
          </div>
        </GlassPanel>
      </div>

      <PdfPreviewModal open={open} onClose={closeModal} book={activeBook} />
    </section>
  );
}

