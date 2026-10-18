import React from 'react';
import { clinicData } from '../data/clinicData';
import { MessageCircle, MapPin, Star, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ paddingTop: '1.5rem', paddingBottom: '2.75rem' }}>
      <div className="container">
        <div className="hero-container-layout">
          {/* Content Column */}
          <div className="hero-content-col">
            {/* Verified Google Rating Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: '#FFFFFF',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-teal)',
                marginBottom: '1.25rem',
                maxWidth: '100%',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', gap: '2px', color: 'var(--gold-500)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <span className="num-font" style={{ fontWeight: 800, color: 'var(--teal-900)', fontSize: '0.875rem' }}>
                5.0
              </span>
              <span style={{ color: 'var(--border-subtle)' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                تقييم ممتاز على Google ({clinicData.reputation.totalReviews} مراجعة)
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(1.65rem, 5.5vw, 3rem)',
                fontWeight: 900,
                color: 'var(--teal-900)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                wordBreak: 'break-word',
              }}
            >
              رعاية لأسنانك تبدأ <span style={{ color: 'var(--teal-600)' }}>بالثقة والاهتمام</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(0.925rem, 2.5vw, 1.1rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              في <strong style={{ color: 'var(--teal-800)' }}>عيادة الميدان لطب الأسنان</strong> بإشراف{' '}
              <strong style={{ color: 'var(--teal-800)' }}>د. محمود السيد إبراهيم</strong> بشبين الكوم، نضع راحة المريض في صلب أولوياتنا عبر التشخيص الدقيق، والشرح الوافي لاحتياجات الأسنان، مع التزام استثنائي بأعلى معايير التعقيم والسلامة.
            </p>

            {/* Mobile-First Buttons: Full Width on Mobile, Side by Side on Desktop */}
            <div className="hero-cta-group">
              <a
                href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp hero-cta-btn"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>احجز موعدك عبر واتساب</span>
              </a>

              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-cta-btn"
              >
                <MapPin size={18} aria-hidden="true" />
                <span>موقع العيادة على Google Maps</span>
              </a>
            </div>

            {/* Trust Highlights: Mobile-First Vertical Stack */}
            <div className="hero-trust-grid">
              <div className="hero-trust-item">
                <div className="hero-trust-icon">
                  <ShieldCheck size={18} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-900)' }}>تعقيم دقيق ومستمر</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)' }}>أعلى اشتراطات مكافحة العدوى</div>
                </div>
              </div>

              <div className="hero-trust-item">
                <div className="hero-trust-icon">
                  <Clock size={18} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-900)' }}>مواعيد بحجز مسبق</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)' }}>احترام كامل لوقت كل مريض</div>
                </div>
              </div>

              <div className="hero-trust-item">
                <div className="hero-trust-icon">
                  <Sparkles size={18} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-900)' }}>وضوح وأمانة طبية</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)' }}>شرح الخطوات قبل البدء</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="hero-visual-col">
            <div
              className="glass-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '0.65rem',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                boxShadow: 'var(--shadow-lg)',
                width: '100%',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  maxHeight: '380px',
                  background: 'var(--teal-900)',
                }}
              >
                <img
                  src={clinicData.clinicImagery.heroImage}
                  alt="عيادة الميدان لطب الأسنان - د. محمود السيد إبراهيم في شبين الكوم"
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '220px',
                    maxHeight: '380px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="eager"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(4, 47, 46, 0.9) 0%, rgba(4, 47, 46, 0.2) 60%, transparent 100%)',
                  }}
                />

                {/* Overlaid details at bottom of photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    left: '1rem',
                    color: '#FFFFFF',
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', fontSize: '0.725rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    <MapPin size={13} aria-hidden="true" />
                    <span>شبين الكوم — خلف عمر أفندي</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>عيادة الميدان لطب الأسنان</div>
                  <div style={{ fontSize: '0.85rem', color: '#CCFBF1' }}>د. محمود السيد إبراهيم</div>
                </div>
              </div>
            </div>

            {/* Badges Container: Clean Mobile Stack, Floating on Desktop */}
            <div className="hero-badges-container">
              {/* Rating Badge */}
              <div className="hero-badge-pill">
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--gold-50)',
                    color: 'var(--gold-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Star size={20} fill="currentColor" aria-hidden="true" />
                </div>
                <div>
                  <div className="num-font" style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--teal-900)', lineHeight: 1.1 }}>
                    5.0 / 5.0
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    100% تقييمات 5 نجوم (117 مراجعة)
                  </div>
                </div>
              </div>

              {/* Appointment Badge */}
              <div className="hero-badge-pill">
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={19} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--teal-900)' }}>
                    نظام حجز مسبق
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                    لراحة المريض وتجنب الانتظار
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Hero Layout - Mobile First */
        .hero-container-layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .hero-content-col {
          width: 100%;
          max-width: 100%;
        }

        .hero-visual-col {
          width: 100%;
          max-width: 100%;
          position: relative;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          width: 100%;
        }

        .hero-cta-btn {
          width: 100%;
          justify-content: center;
        }

        .hero-trust-grid {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(15, 118, 110, 0.15);
          width: 100%;
        }

        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .hero-trust-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--bg-teal-subtle);
          color: var(--teal-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-badges-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          width: 100%;
        }

        .hero-badge-pill {
          background: #FFFFFF;
          border: 1px solid var(--border-teal);
          border-radius: 14px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-sm);
          width: 100%;
          box-sizing: border-box;
        }

        /* Tablet & Desktop overrides */
        @media (min-width: 768px) {
          .hero-cta-group {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .hero-cta-btn {
            width: auto;
          }
          .hero-badges-container {
            flex-direction: row;
          }
          .hero-badge-pill {
            flex: 1;
          }
        }

        @media (min-width: 860px) {
          .hero-trust-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (min-width: 992px) {
          .hero-container-layout {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            align-items: center;
            gap: 3.5rem;
          }
          .hero-badges-container {
            position: absolute;
            inset: 0;
            pointer-events: none;
            margin: 0;
          }
          .hero-badge-pill:first-child {
            position: absolute;
            top: -15px;
            left: 0;
            width: auto;
            pointer-events: auto;
            box-shadow: var(--shadow-lg);
          }
          .hero-badge-pill:last-child {
            position: absolute;
            bottom: -20px;
            right: 0;
            width: auto;
            pointer-events: auto;
            box-shadow: var(--shadow-lg);
          }
        }
      `}</style>
    </section>
  );
};
