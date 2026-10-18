import React from 'react';
import { clinicData } from '../data/clinicData';
import { Star, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

export const Reputation: React.FC = () => {
  return (
    <section id="reputation" className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={15} aria-hidden="true" />
            <span>السمعة والمصداقية المحلية</span>
          </div>
          <h2 className="section-title">تقييم 5.0 كامل من مراجعات المرضى</h2>
          <p className="section-description">
            ثقة المراجعين هي نتاج أمانة التشخيص، ودقة المهارة السريرية، والرعاية الصادقة التي يلمسها كل مريض يزور العيادة بشبين الكوم.
          </p>
        </div>

        {/* Aggregate Score Card & Breakdown */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto 2.5rem auto',
            background: 'linear-gradient(135deg, #FAFDFD 0%, #FFFFFF 100%)',
            border: '1px solid var(--border-teal)',
          }}
        >
          <div className="reputation-grid-layout">
            {/* Top / Right Score Block */}
            <div className="reputation-score-block">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--teal-800)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  marginBottom: '0.5rem',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>تقييمات خرائط Google الموثقة</span>
              </div>

              <div
                className="num-font"
                style={{
                  fontSize: 'clamp(2.75rem, 8vw, 3.75rem)',
                  fontWeight: 900,
                  color: 'var(--teal-900)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                5.0
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', color: 'var(--gold-500)', marginBottom: '0.4rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                بناءً على <strong style={{ color: 'var(--teal-900)' }}>117 مراجعة موثقة</strong>
              </div>
            </div>

            {/* Breakdown Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-900)', marginBottom: '0.2rem' }}>
                توزيع تقييمات المرضى (100% تقييم ممتاز):
              </div>

              {[
                { star: 5, count: 117, percentage: 100 },
                { star: 4, count: 0, percentage: 0 },
                { star: 3, count: 0, percentage: 0 },
                { star: 2, count: 0, percentage: 0 },
                { star: 1, count: 0, percentage: 0 },
              ].map((row) => (
                <div key={row.star} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.8rem' }}>
                  <span style={{ width: '40px', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 600 }}>
                    <span>{row.star}</span>
                    <Star size={12} fill="var(--gold-500)" color="var(--gold-500)" aria-hidden="true" />
                  </span>

                  <div
                    style={{
                      flex: 1,
                      height: '7px',
                      background: 'var(--bg-subtle)',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${row.percentage}%`,
                        height: '100%',
                        background: row.percentage > 0 ? 'var(--teal-600)' : 'transparent',
                        borderRadius: '9999px',
                      }}
                    />
                  </div>

                  <span className="num-font" style={{ width: '28px', textAlign: 'left', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--teal-800)', fontSize: '0.8rem' }}>
              <CheckCircle2 size={16} color="var(--teal-600)" aria-hidden="true" style={{ flexShrink: 0 }} />
              <span>بيانات موثقة من صفحة Google Maps الرسمية للعيادة (تحديث أكتوبر 2026)</span>
            </div>

            <a
              href={clinicData.reputation.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                fontSize: '0.875rem',
                padding: '0.65rem 1.25rem',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <span>اقرأ تقييمات المرضى على Google</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Authentic Topic Chips from Google Maps */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--teal-900)' }}>
              أبرز الكلمات المتكررة في تجارب المرضى على Google:
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              maxWidth: '840px',
              margin: '0 auto',
            }}
          >
            {clinicData.reputation.topicChips.map((chip, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: chip.highlight ? 'var(--bg-teal-subtle)' : 'var(--bg-subtle)',
                  border: `1px solid ${chip.highlight ? 'var(--border-teal)' : 'var(--border-subtle)'}`,
                  color: chip.highlight ? 'var(--teal-900)' : 'var(--text-muted)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  maxWidth: '100%',
                }}
              >
                <span>{chip.termArabic}</span>
                <span
                  className="num-font"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: chip.highlight ? 'var(--teal-700)' : 'var(--text-subtle)',
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    minWidth: '20px',
                    height: '20px',
                    padding: '0 5px',
                  }}
                >
                  {chip.mentionsCount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reputation-grid-layout {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          width: 100%;
        }

        .reputation-score-block {
          text-align: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          width: 100%;
        }

        @media (min-width: 640px) {
          .reputation-grid-layout {
            display: grid;
            grid-template-columns: 1fr 1.35fr;
            align-items: center;
            gap: 2.5rem;
          }
          .reputation-score-block {
            border-bottom: none;
            border-left: 1px solid var(--border-subtle);
            padding-bottom: 0;
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
