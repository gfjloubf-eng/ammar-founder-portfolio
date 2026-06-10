import React, { useEffect, useRef } from 'react';
import type { assets as AssetsType } from '../../content/assets';

type Book = (typeof import('../../content/assets').assets)['books'][number];


export function PdfPreviewModal({
  open,
  onClose,
  book,
}: {
  open: boolean;
  onClose: () => void;
  book: Book | null;
}) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open || !book) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`PDF preview: ${book.title}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,.55)',
        display: 'grid',
        placeItems: 'center',
        padding: 14,
      }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: 980,
          borderRadius: 22,
          overflow: 'hidden',
          border: '1px solid rgba(214,179,106,.25)',
        }}
      >
        <div
          style={{
            padding: '12px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <div style={{ display: 'grid', gap: 2 }}>
            <div style={{ fontWeight: 950, color: 'rgba(214,179,106,.95)' }}>{book.title}</div>
            <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 12 }}>
              معاينة داخلية — PDF
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="glass"
            style={{
              padding: '10px 12px',
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,.12)',
              background: 'rgba(255,255,255,.04)',
              color: 'rgba(244,245,247,.95)',
              fontWeight: 900,
              cursor: 'pointer',
            }}
          >
            إغلاق
          </button>
        </div>

        <div style={{ padding: 12, background: 'rgba(0,0,0,.15)' }}>
          <div
            style={{
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,.10)',
              background: 'rgba(255,255,255,.02)',
            }}
          >
            {/* Desktop keeps iframe preview; Mobile fallback opens PDF in a new tab to avoid 404 on certain URLs */}
            <div className="pdfPreviewFrameWrap">
              <iframe
                title={book.title}
                src={book.pdfPath}
                style={{ width: '100%', height: '70vh', border: 0 }}
              />
            </div>

            <div className="pdfMobileFallback">
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  padding: '12px 14px',
                  marginTop: 10,
                  textAlign: 'center',
                }}
              >
                فتح PDF في تبويب جديد
              </a>
            </div>

            <style>{`
              .pdfMobileFallback{ display:none; }
              @media (max-width: 768px){
                .pdfPreviewFrameWrap{ display:none; }
                .pdfMobileFallback{ display:block; }
              }
            `}</style>





          </div>
        </div>
      </div>
    </div>
  );
}

