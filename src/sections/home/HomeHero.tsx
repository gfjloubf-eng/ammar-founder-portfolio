import React from 'react';
import { brand } from '../../content/brand';
import { assets } from '../../content/assets';
import { GlassPanel } from '../../ui/common/GlassPanel';
import { Link } from 'react-router-dom';

export function HomeHero() {
  return (
    <section className="section">
      <div className="container heroGrid">
        <GlassPanel className="heroCard">
          <div className="heroTop reveal reveal--stagger" data-reveal>
              <div className="heroBadge">{brand.headlineAr}</div>
            <div className="heroKicker">

              <span className="heroKickerEn">Founder-Level Builder</span>
            </div>
          </div>

          <h1 className="heroTitle reveal reveal--stagger" data-reveal>
            {brand.name}
            <span className="heroTitleGlow">.</span>
          </h1>

          <p className="heroSubtitle reveal reveal--stagger" data-reveal>
            <span className="heroSubtitleAr">أبني منتجات رقمية تجمع بين هندسة البرمجيات والذكاء الاصطناعي وتجربة المستخدم الحديثة، مع التركيز على تطوير حلول عملية قابلة للنمو والتوسع.</span>
            <span className="heroSubtitleEn">I build digital products that merge software engineering, AI, and modern UX—focused on practical, scalable solutions.</span>
          </p>

          <div className="heroActions reveal reveal--stagger" data-reveal>
            <Link to="/contact" className="btn primary" aria-label="Go to Contact">
              تواصل الآن
              <span className="btnEn">Contact</span>
            </Link>
            <Link to="/projects" className="btn ghost" aria-label="View Projects">
              عرض المشاريع
              <span className="btnEn">Projects</span>
            </Link>
          </div>

          <div className="heroStats" aria-label="Highlights">
            <div className="stat">
              <div className="statValue">SaaS</div>
              <div className="statLabel">منتجات جاهزة</div>
            </div>
            <div className="stat">
              <div className="statValue">AI</div>
              <div className="statLabel">حلول ذكية</div>
            </div>
            <div className="stat">
              <div className="statValue">UX</div>
              <div className="statLabel">تجربة فاخرة</div>
            </div>
          </div>
        </GlassPanel>

        <div className="heroMedia">
          <div className="heroImageFrame">
            <img
              src={brand.founderImage}
              alt={`${brand.name} — founder`}
              loading="eager"
              className="heroImage"
            />
            <div className="heroImageOverlay" aria-hidden="true" />
          </div>

          <div className="heroStrip" aria-label="Design Showcase">
            <div className="heroStripTitle">Design Showcase</div>
            <div className="stripGrid">
              {assets.gallery.slice(0, 6).map((g) => (
                <div key={g.id} className="stripTile">
                  <img src={g.path} alt={`Gallery ${g.id}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

