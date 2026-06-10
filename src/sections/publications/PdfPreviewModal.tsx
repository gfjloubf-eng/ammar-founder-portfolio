import React, { useEffect, useMemo, useRef, useState } from 'react';

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

  // Use ONE canonical source only: pdfUrl
  const pdfHref = useMemo(() => {
    const url = (book as any)?.pdfUrl;
    return typeof url === 'string' && url.trim() !== '' ? url : '';
  }, [book]);

  // Verification state: null = unknown/pending, true = verified, false = cannot verify
  const [pdfVerified, setPdfVerified] = useState<boolean | null>(null);

  // Detect mobile (matches CSS breakpoint used elsewhere)
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width:768px)').matches : false,
  );

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

  // Keep isMobile in sync while modal is open
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(max-width:768px)');
    const handler = () => setIsMobile(mq.matches);
    try {
      mq.addEventListener ? mq.addEventListener('change', handler) : (mq as any).addListener(handler);
    } catch (e) {
      // ignore
    }
    return () => {
      try {
        mq.removeEventListener ? mq.removeEventListener('change', handler) : (mq as any).removeListener(handler);
      } catch (e) {
        // ignore
      }
    };
  }, [open]);

  // Reset verification whenever href/open changes
  useEffect(() => {
    setPdfVerified(null);
    if (!open) return;
    if (!pdfHref) {
      setPdfVerified(false);
      return;
    }

    const ac = new AbortController();
    let settled = false;

    (async () => {
      // Try a lightweight HEAD request first; if it fails, attempt a GET. If CORS blocks it or timeout, treat as unverified.
      try {
        const res = await fetch(pdfHref, { method: 'HEAD', signal: ac.signal, cache: 'no-store' });
        if (!settled) {
          const ct = res.headers.get('content-type') || '';
          const ok = res.ok && ct.toLowerCase().includes('pdf');
          setPdfVerified(ok);
          settled = true;
        }
      } catch (err) {
        if (ac.signal.aborted) return;
        // Fallback to GET to increase chance of success on servers that disallow HEAD
        try {
          const res2 = await fetch(pdfHref, { method: 'GET', signal: ac.signal, cache: 'no-store' });
          if (!settled) {
            const ct2 = res2.headers.get('content-type') || '';
            const ok2 = res2.ok && ct2.toLowerCase().includes('pdf');
            setPdfVerified(ok2);
            settled = true;
          }
        } catch (e) {
          if (!settled) setPdfVerified(false);
        }
      }
    })();

    // Safety timeout: if verification hasn't resolved in 5s, assume unverified to avoid waiting forever
    const to = window.setTimeout(() => {
      if (!settled) setPdfVerified(false);
    }, 5000);

    return () => {
      settled = true;
      ac.abort();
      clearTimeout(to);
    };
  }, [open, pdfHref]);

  if (!open || !book) return null;

  // Rendering rules:
  // - Use pdfHref only (canonical source)
  // - If pdfHref empty -> hide iframe, show fallback (disabled if empty)
  // - Do not rely on iframe onError; only show iframe when pdfVerified === true and not mobile
  const showIframe = !!pdfHref && pdfVerified === true && !isMobile;
  const showFallback = true; // always show fallback control (per requirements)

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
            <div style={{ color: 'rgba(244,245,247,.62)', fontSize: 12 }}>معاينة داخلية — PDF</div>
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
            <div className="pdfPreviewFrameWrap">
              {showIframe ? (
                <iframe title={book.title} src={pdfHref} style={{ width: '100%', height: '70vh', border: 0 }} />
              ) : null}
            </div>

            {/* Fallback control: if pdfHref is empty, render a disabled button; otherwise open in new tab */}
            <div className="pdfMobileFallback" style={!showIframe ? { display: 'block' } : undefined}>
              {pdfHref ? (
                <a
                  href={pdfHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                  style={{ justifyContent: 'center', width: '100%', padding: '12px 14px', marginTop: 10, textAlign: 'center' }}
                >
                  فتح PDF في تبويب جديد
                </a>
              ) : (
                <div
                  role="button"
                  aria-disabled
                  className="btn ghost"
                  style={{ justifyContent: 'center', width: '100%', padding: '12px 14px', marginTop: 10, textAlign: 'center', opacity: 0.6 }}
                >
                  PDF غير متوفر
                </div>
              )}
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
