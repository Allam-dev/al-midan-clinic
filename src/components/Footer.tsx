import React from 'react';
import { clinicData } from '../data/clinicData';
import { Phone, MessageCircle, MapPin, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#042F2E',
        color: '#E6FFFA',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(15, 118, 110, 0.3)',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Content: Mobile-First Stacked, 3 Cols on Desktop */}
        <div className="footer-top-layout">
          {/* Col 1: Clinic Identity & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--teal-700)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 1.5 6 3 9.5C8.5 21 10 22 12 22s3.5-1 5-4.5c1.5-3.5 3-6 3-9.5 0-3.5-3.5-6-8-6z"/>
                </svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2 }}>
                  {clinicData.identity.nameArabic}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#99F6E4' }}>
                  {clinicData.identity.doctorNameArabic}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#CCFBF1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              رعاية متخصصة لطب وجراحة الفم والأسنان ترتكز على الأمانة في التشخيص والصرامة في التعقيم، لتقديم تجربة علاجية هادئة ومريحة لكل مراجع بشبين الكوم.
            </p>

            {/* Google Rating Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.8rem',
                maxWidth: '100%',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: '#FBBF24', fontWeight: 700 }}>★ 5.0</span>
              <span style={{ color: '#FFFFFF' }}>على Google Maps</span>
              <span style={{ color: '#99F6E4' }}>({clinicData.reputation.totalReviews} مراجعة موثقة)</span>
            </div>
          </div>

          {/* Col 2: Quick Links & Navigation */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              أقسام الموقع
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li>
                <a href="#hero" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>الرئيسية</a>
              </li>
              <li>
                <a href="#reputation" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>تقييمات Google وسمعة العيادة</a>
              </li>
              <li>
                <a href="#services" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>خدمات طب وجراحة الأسنان</a>
              </li>
              <li>
                <a href="#why-us" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>لماذا يختار المرضى عيادة الميدان</a>
              </li>
              <li>
                <a href="#about-doctor" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>عن الدكتور محمود السيد إبراهيم</a>
              </li>
              <li>
                <a href="#reviews" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>آراء المراجعين الموثقة</a>
              </li>
              <li>
                <a href="#location" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>موقع العيادة وطرق الوصول</a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#CCFBF1', transition: 'color 0.2s' }}>الحجز والتواصل المباشر</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Working Hours */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              التواصل والمواعيد
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} color="#5EEAD4" aria-hidden="true" style={{ flexShrink: 0 }} />
                <a href={`tel:${clinicData.contact.phoneRaw}`} style={{ color: '#FFFFFF', direction: 'ltr' }} className="num-font">
                  {clinicData.contact.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MessageCircle size={17} color="#4ADE80" aria-hidden="true" style={{ flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF' }}
                >
                  واتساب الحجز: {clinicData.contact.whatsappDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={17} color="#5EEAD4" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: '#CCFBF1', lineHeight: 1.5 }}>{clinicData.location.confirmedAddressArabic}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Outreach Disclaimer Callout */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FDE047', fontWeight: 700, fontSize: '0.875rem' }}>
            <ShieldAlert size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
            <span>بيان الشفافية وطبيعة العرض (Outreach Demo Notice)</span>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#CCFBF1', lineHeight: 1.7, margin: 0 }}>
            {clinicData.outreachSafeguards.legalMedicalDisclaimerArabic}
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '0.775rem',
            color: '#99F6E4',
          }}
        >
          <div>
            جميع الحقوق محفوظة {currentYear} © عيادة الميدان لطب الأسنان — د. محمود السيد إبراهيم
          </div>
          <div style={{ color: 'rgba(204, 251, 241, 0.7)' }}>
            تم تصميم هذا العرض المقترح كنموذج تطوير رقمي مستقل ومخصص للمعاينة فقط.
          </div>
        </div>
      </div>

      <style>{`
        .footer-top-layout {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          margin-bottom: 2.75rem;
          width: 100%;
        }

        @media (min-width: 768px) {
          .footer-top-layout {
            display: grid;
            grid-template-columns: 1.35fr 0.8fr 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </footer>
  );
};
