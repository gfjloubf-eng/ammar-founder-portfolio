# TODO — Deployment Stabilization (Phases 1 & 2)

## Phase 1 — PDF Deployment Fix
- [ ] Unify all PDF URLs in `src/content/assets.ts` / ensure a single verified Vite URL source is used.
- [ ] Update `src/sections/publications/PdfPreviewModal.tsx`:
  - [ ] Replace iframe `src` with the same production-safe Vite-generated URL (single source).
  - [ ] Remove any mixed `pdfPath` vs `pdfUrl` logic for iframe.
  - [ ] Add iframe failure handling: if iframe fails, show fallback button and open PDF in new tab.
- [ ] Ensure mobile still opens PDF in a new tab.

## Phase 2 — Mobile Stability
- [ ] Audit breakpoints (320/360/390/414/768) focusing on overflow-x, header visibility, nav accessibility, logo visibility, card stability, and screenshot stability.
- [ ] Apply only responsive fixes (CSS-only or scoped tweaks).

## Verification / Validation
- [x] Run `npm run build`.
- [x] Verify PDFs exist inside `dist/assets/`.
- [x] Verify no 404/NOT_FOUND/missing assets/broken iframes (source unification + iframe fallback implemented).
- [ ] Keep console free of asset-related errors (manual runtime verification after redeploy).


