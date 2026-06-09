import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../../content/brand';

export function SiteFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footerInner">
        <div className="footerBrand">
          <img className="footerLogo" src={brand.logoMain} alt={brand.name} loading="lazy" />
          <div className="footerCopy">
            <div className="footerName">{brand.name}</div>
            <div className="footerTag">{brand.headlineAr}</div>
          </div>
        </div>

        <div className="footerCols">
          <div className="footerCol">
            <div className="footerTitle">روابط</div>
            <Link className="footerLink" to="/projects">المشاريع</Link>
            <Link className="footerLink" to="/design">المعرض</Link>
            <Link className="footerLink" to="/publications">المؤلفات</Link>
            <Link className="footerLink" to="/contact">التواصل</Link>
          </div>
          <div className="footerCol">
            <div className="footerTitle">قانوني</div>
            <Link className="footerLink" to="/legal">الخصوصية</Link>
            <a className="footerLink" href={brand.socials.emailHref}>البريد</a>
            <a className="footerLink" href={brand.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="footerLink" href={brand.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="footerLink" href={brand.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="footerLink" href={brand.socials.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="footerLink" href={brand.socials.phoneHref}>Call</a>
          </div>
        </div>

        <div className="footerRight">
          <div className="footerSmall">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

