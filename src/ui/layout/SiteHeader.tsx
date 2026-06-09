import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand } from '../../content/brand';

const items = [
  { to: '/', ar: 'الرئيسية', en: 'Home' },
  { to: '/projects', ar: 'المشاريع', en: 'Projects' },
  { to: '/design', ar: 'المعرض', en: 'Design' },
  { to: '/publications', ar: 'المؤلفات', en: 'Publications' },
  { to: '/skills', ar: 'المهارات', en: 'Skills' },
  { to: '/contact', ar: 'التواصل', en: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="header" role="banner">
      <div className="container headerInner">
        <Link to="/" className="brand" aria-label={`${brand.name} — Home`}>
          <img className="brandLogo" src={brand.logoMain} alt={brand.name} loading="eager" />
        </Link>

        <nav className="nav" aria-label="Primary">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
            >
              <span className="navAr">{it.ar}</span>
              <span className="navEn">{it.en}</span>
            </NavLink>
          ))}
        </nav>

        <div className="navMobile" aria-label="Mobile actions">
          <div className="mobileBrandPill">
            <span className="navAr">{brand.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

