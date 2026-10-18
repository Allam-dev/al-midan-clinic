import React, { useState, useEffect } from 'react';
import { clinicData } from '../data/clinicData';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'التقييم والسمعة', href: '#reputation' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا العيادة', href: '#why-us' },
    { label: 'عن الطبيب', href: '#about-doctor' },
    { label: 'آراء المرضى', href: '#reviews' },
    { label: 'الموقع والتواصل', href: '#location' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(252, 251, 249, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(15, 118, 110, 0.15)' : 'rgba(226, 232, 240, 0.8)'}`,
        transition: 'all 0.25s ease',
        boxShadow: isScrolled ? '0 4px 16px -2px rgba(15, 23, 42, 0.06)' : 'none',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--header-height)',
            gap: '0.75rem',
            width: '100%',
          }}
        >
          {/* Logo & Identity */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none',
              minWidth: 0,
              flex: '1 1 auto',
            }}
            aria-label={`${clinicData.identity.nameArabic} - الصفحة الرئيسية`}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--teal-700), var(--teal-900))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 3px 10px rgba(15, 118, 110, 0.2)',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 1.5 6 3 9.5C8.5 21 10 22 12 22s3.5-1 5-4.5c1.5-3.5 3-6 3-9.5 0-3.5-3.5-6-8-6z"/>
                <path d="M12 6v6"/>
              </svg>
            </div>
            <div style={{ overflow: 'hidden', minWidth: 0 }}>
              <div
                style={{
                  fontSize: 'clamp(0.925rem, 4vw, 1.15rem)',
                  fontWeight: 800,
                  color: 'var(--teal-900)',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {clinicData.identity.nameArabic}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--teal-700)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>{clinicData.identity.doctorNameArabic}</span>
                <span style={{ color: 'var(--border-subtle)' }}>•</span>
                <span style={{ color: 'var(--text-subtle)' }}>{clinicData.identity.cityArabic}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="القائمة الرئيسية"
            className="desktop-nav"
            style={{ flexShrink: 0 }}
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      padding: '0.4rem 0.2rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-700)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs (Desktop) */}
          <div
            className="desktop-actions"
            style={{
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0,
            }}
          >
            <a
              href={`tel:${clinicData.contact.phoneRaw}`}
              className="btn btn-secondary"
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.85rem',
                borderRadius: 'var(--radius-full)',
                minHeight: '40px',
              }}
              title="اتصال مباشر بالعيادة"
            >
              <Phone size={15} aria-hidden="true" />
              <span className="num-font" style={{ direction: 'ltr' }}>{clinicData.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.875rem',
                borderRadius: 'var(--radius-full)',
                minHeight: '40px',
              }}
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>احجز عبر واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              color: 'var(--teal-900)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--header-height)',
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 999,
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-xl)',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              maxHeight: 'calc(100vh - var(--header-height) - 20px)',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="قائمة الجوال">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0.95rem',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--text-heading)',
                        borderRadius: '10px',
                        background: 'var(--bg-warm)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>حجز موعد عبر واتساب</span>
              </a>

              <a
                href={`tel:${clinicData.contact.phoneRaw}`}
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={17} aria-hidden="true" />
                <span>اتصال هاتفياً: {clinicData.contact.phoneDisplay}</span>
              </a>

              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin size={17} aria-hidden="true" />
                <span>موقع العيادة على Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
