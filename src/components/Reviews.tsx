import React from 'react';
import { clinicData } from '../data/clinicData';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={15} aria-hidden="true" />
            <span>آراء ومراجعات المرضى</span>
          </div>
          <h2 className="section-title">تجارب حقيقية يرويها أصحابها على Google</h2>
          <p className="section-description">
            نماذج من آراء المراجعين المنشورة على صفحة العيادة الرسمية على خرائط Google، بالنص الأصلي وتاريخ النشر.
          </p>
        </div>

        {/* Mobile-First Reviews Grid */}
        <div className="reviews-grid-layout">
          {clinicData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card review-card-responsive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FBFB 100%)',
              }}
            >
              {/* Reviewer Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.85rem',
                }}
              >
                {rev.avatarUrl ? (
                  <img
                    src={rev.avatarUrl}
                    alt={rev.reviewerName}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--teal-100)',
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--teal-700)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      flexShrink: 0,
                    }}
                  >
                    {rev.reviewerName.charAt(0)}
                  </div>
                )}

                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: '0.925rem', color: 'var(--teal-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {rev.reviewerName}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>{rev.dateText}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--teal-700)', fontWeight: 600 }}>Google Maps</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', color: 'var(--gold-500)', marginBottom: '0.75rem' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.65,
                  margin: 0,
                  marginBottom: '1rem',
                  flexGrow: 1,
                  fontStyle: 'normal',
                }}
              >
                "{rev.arabicText}"
              </blockquote>

              {/* English translation note if applicable */}
              {rev.isGoogleTranslated && rev.englishText && (
                <div
                  style={{
                    fontSize: '0.725rem',
                    color: 'var(--text-subtle)',
                    background: 'var(--bg-warm)',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '8px',
                    marginBottom: '0.85rem',
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ fontWeight: 600, color: 'var(--teal-800)' }}>ترجمة Google للمراجعة:</span>
                  <div style={{ direction: 'ltr', textAlign: 'left', marginTop: '2px' }}>
                    "{rev.englishText}"
                  </div>
                </div>
              )}

              {/* Verification & Link */}
              <div
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#059669', fontWeight: 600 }}>
                  <CheckCircle size={13} aria-hidden="true" />
                  <span>تم التحقق</span>
                </span>

                <a
                  href={rev.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    color: 'var(--teal-700)',
                    fontWeight: 700,
                  }}
                >
                  <span>عرض على الخريطة</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Google Reviews CTA Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '2rem auto 0 auto',
            padding: '1.5rem 1.15rem',
            textAlign: 'center',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, var(--bg-teal-subtle) 0%, #FFFFFF 100%)',
            border: '1.5px solid var(--border-teal)',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
            شاهد كافة تجارب المراجعين (117 مراجعة)
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 1.25rem auto' }}>
            يمكنك الاطلاع على كافة المراجعات الموثقة مباشرة على الملف التجاري الرسمي للعيادة على خرائط Google.
          </p>

          <a
            href={clinicData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '0.925rem', padding: '0.75rem 1.25rem', width: '100%', maxWidth: '380px', margin: '0 auto' }}
          >
            <span>افتح مراجعات العيادة على خرائط Google</span>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <style>{`
        .reviews-grid-layout {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .review-card-responsive {
          padding: 1.15rem;
        }

        @media (min-width: 640px) {
          .reviews-grid-layout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .review-card-responsive {
            padding: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .reviews-grid-layout {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
