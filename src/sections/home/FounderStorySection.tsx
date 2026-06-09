import React from 'react';
import { assets } from '../../content/assets';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { SectionHeader } from '../../ui/common/SectionHeader';

export function FounderStorySection() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 12 }}>
        <SectionHeader
          titleAr="قصة المؤسّس"
          titleEn="Founder Story"
          descriptionAr="بدأت رحلتي في عالم التقنية بدافع الشغف بالتعلم والاكتشاف، ثم تحولت إلى بناء مشاريع ومنتجات رقمية تجمع بين البرمجة والتصميم وحل المشكلات الواقعية."
          descriptionEn="Luxury is not just a look—it’s a carefully crafted experience."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 14,
          }}
          aria-label="Founder story content"
        >
          <GlassPanel>
            <div style={{ display: 'grid', gap: 12, padding: 16 }}>
              <div style={{ fontWeight: 850, fontSize: 16, letterSpacing: '.01em' }}>من الرؤية إلى الإطلاق</div>

              <p style={{ margin: 0, color: 'rgba(244,245,247,.76)', lineHeight: 1.8, fontSize: 14 }}>
                بدأت رحلتي في عالم التقنية بدافع الشغف بالتعلم والاكتشاف، ثم تحولت إلى بناء مشاريع ومنتجات رقمية تجمع بين البرمجة والتصميم وحل المشكلات الواقعية.
              </p>

              <p style={{ margin: 0, color: 'rgba(244,245,247,.64)', lineHeight: 1.8, fontSize: 13 }}>
                أؤمن أن أفضل المنتجات ليست الأكثر تعقيداً، بل الأكثر قدرة على تقديم قيمة حقيقية للمستخدم بطريقة بسيطة وفعّالة.
              </p>

              <p style={{ margin: 0, color: 'rgba(244,245,247,.64)', lineHeight: 1.8, fontSize: 13 }}>
                أعمل على تطوير تطبيقات الويب وأنظمة SaaS الحديثة، وأهتم بالذكاء الاصطناعي وتجربة المستخدم والأتمتة، إلى جانب التأليف وصناعة المحتوى المعرفي.
              </p>

              <div style={{ display: 'grid', gap: 10, marginTop: 6 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
                  {[
                    { k: 'الرؤية', v: 'شغف التعلم → منتجات عملية' },
                    { k: 'المبدأ', v: 'قيمة حقيقية بتبسيط ذكي' },
                    { k: 'الاهتمام', v: 'SaaS + AI + أتمتة + تأليف' },
                  ].map((row) => (
                    <div
                      key={row.k}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255,255,255,.08)',
                        paddingTop: 10,
                      }}
                    >
                      <div style={{ color: 'rgba(214,179,106,.95)', fontWeight: 850 }}>{row.k}</div>
                      <div style={{ color: 'rgba(244,245,247,.78)', fontWeight: 650 }}>{row.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel>
            <div style={{ padding: 16, display: 'grid', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: 'linear-gradient(180deg, rgba(214,179,106,.9), rgba(242,210,138,.35))',
                    boxShadow: '0 0 0 6px rgba(214,179,106,.08)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 900 }}>{'عمار المصوعي'}</div>
                  <div style={{ color: 'rgba(244,245,247,.66)', fontSize: 13 }}>{'مهندس برمجيات • مؤسس SaaS • مؤلف'}</div>
                </div>
              </div>

              <img
                src={assets.profileMain}
                alt="Founder portrait"
                style={{ width: '100%', borderRadius: 16, border: '1px solid rgba(255,255,255,.10)', objectFit: 'cover' }}
                loading="lazy"
              />

              <div style={{ color: 'rgba(244,245,247,.66)', fontSize: 13, lineHeight: 1.7 }}>
                أبني تجارب هادئة ومقروءة—مع مساحة للفكرة لتتضح، وإيقاع بصري يدعم المحتوى.
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px){
          .container > section { }
          section{ }
        }
      `}</style>
    </section>
  );
}

