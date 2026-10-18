import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass, Building2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${clinicData.location.confirmedAddressArabic} - ${clinicData.location.landmarkDirectionsArabic}`
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(clinicData.location.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  return (
    <section id="location" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={15} aria-hidden="true" />
            <span>موقع العيادة والوصول</span>
          </div>
          <h2 className="section-title">موقع سهل الوصول في قلب شبين الكوم</h2>
          <p className="section-description">
            تقع عيادة الميدان لطب الأسنان في موقع مركزي بمدينة شبين الكوم، بالقرب من أبرز معالم المدينة التجارية.
          </p>
        </div>

        {/* Location Layout - Mobile First */}
        <div className="location-layout">
          {/* Address Details Card */}
          <div
            className="glass-card location-card-responsive"
            style={{
              borderRadius: '22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#FFFFFF',
              border: '1.5px solid var(--border-teal)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '11px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-teal)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--teal-900)' }}>
                    العنوان المعتمد
                  </h3>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-subtle)' }}>
                    شبين الكوم، محافظة المنوفية
                  </div>
                </div>
              </div>

              {/* Textual Address block */}
              <div
                style={{
                  background: 'var(--bg-warm)',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  marginBottom: '0.85rem',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal-800)', marginBottom: '0.2rem' }}>
                  المدينة والحي:
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)', margin: 0 }}>
                  {clinicData.location.confirmedAddressArabic}
                </p>
              </div>

              {/* Landmark Details */}
              <div
                style={{
                  background: 'var(--bg-teal-subtle)',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  border: '1px solid var(--border-teal)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal-900)', marginBottom: '0.2rem' }}>
                  <Building2 size={14} aria-hidden="true" />
                  <span>العلامات المميزة للوصول:</span>
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--teal-950)', margin: 0, lineHeight: 1.55 }}>
                  {clinicData.location.landmarkDirectionsArabic}
                </p>
              </div>

              {/* Plus Code block */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', fontWeight: 600 }}>الرمز الجغرافي (Plus Code):</div>
                  <div className="num-font" style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--teal-900)', direction: 'ltr' }}>
                    {clinicData.location.plusCode}
                  </div>
                </div>

                <button
                  onClick={handleCopyPlusCode}
                  className="btn btn-secondary"
                  style={{ minHeight: '32px', padding: '0.3rem 0.65rem', fontSize: '0.725rem' }}
                >
                  {copiedPlusCode ? <Check size={12} color="#059669" aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                  <span>{copiedPlusCode ? 'تم النسخ!' : 'نسخ الرمز'}</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.925rem' }}
              >
                <Navigation size={17} aria-hidden="true" />
                <span>فتح الموقع في خرائط Google</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.85rem' }}
              >
                {copiedAddress ? <Check size={14} color="#059669" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                <span>{copiedAddress ? 'تم نسخ العنوان بالتفصيل!' : 'نسخ العنوان بالتفصيل'}</span>
              </button>
            </div>
          </div>

          {/* Embedded Map Container */}
          <div
            className="glass-card map-container-responsive"
            style={{
              borderRadius: '22px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              padding: 0,
            }}
          >
            {/* Map Header Bar */}
            <div
              style={{
                background: '#FFFFFF',
                padding: '0.65rem 0.85rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', fontWeight: 700, color: 'var(--teal-900)' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E' }} />
                <span>إحداثيات الموقع (30.5549° N, 31.0099° E)</span>
              </div>

              <span style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                شبين الكوم
              </span>
            </div>

            {/* Iframe preview */}
            <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%' }}>
              <iframe
                title="موقع عيادة الميدان لطب الأسنان على الخريطة"
                src={clinicData.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '260px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-layout {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
        }

        .location-card-responsive {
          padding: 1.15rem;
        }

        .map-container-responsive {
          min-height: 280px;
        }

        @media (min-width: 860px) {
          .location-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .location-card-responsive {
            padding: 2rem;
          }
          .map-container-responsive {
            min-height: 380px;
          }
        }
      `}</style>
    </section>
  );
};
