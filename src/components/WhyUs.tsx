import React from 'react';
import { clinicData } from '../data/clinicData';
import { HeartHandshake, ShieldCheck, FileCheck, ClockCheck, Heart, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck size={22} aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} aria-hidden="true" />;
      case 'HeartHandshake':
        return <HeartHandshake size={22} aria-hidden="true" />;
      case 'ClockCheck':
        return <ClockCheck size={22} aria-hidden="true" />;
      default:
        return <Sparkles size={22} aria-hidden="true" />;
    }
  };

  return (
    <section id="why-us" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Heart size={15} aria-hidden="true" />
            <span>تجربة المريض</span>
          </div>
          <h2 className="section-title">لماذا يفضل المرضى عيادة الميدان؟</h2>
          <p className="section-description">
            محاور جوهرية عكستها انطباعات ومراجعات المراجعين على مدار السنوات، تجعل زيارة طبيب الأسنان تجربة مطمئنة ومنظمة.
          </p>
        </div>

        {/* Mobile-First Grid */}
        <div className="why-us-grid">
          {clinicData.reviewThemes.map((theme, index) => (
            <div
              key={index}
              className="glass-card why-card-responsive"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                position: 'relative',
              }}
            >
              <div
                className="why-icon-box"
                style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--teal-700), var(--teal-900))',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(15, 118, 110, 0.2)',
                }}
              >
                {getThemeIcon(theme.icon)}
              </div>

              <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--teal-900)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.3,
                  }}
                >
                  {theme.titleArabic}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '0.75rem',
                  }}
                >
                  {theme.descriptionArabic}
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    color: 'var(--teal-700)',
                    fontWeight: 600,
                    background: 'var(--bg-teal-subtle)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    maxWidth: '100%',
                  }}
                >
                  <span>✓</span>
                  <span>{theme.evidenceNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust disclaimer banner */}
        <div
          style={{
            maxWidth: '800px',
            margin: '2rem auto 0 auto',
            textAlign: 'center',
            fontSize: '0.775rem',
            color: 'var(--text-subtle)',
            background: '#FFFFFF',
            padding: '0.85rem 1.15rem',
            borderRadius: '14px',
            border: '1px dashed var(--border-subtle)',
          }}
        >
          * هذه النقاط مستخلصة من محاور التقييم الإيجابي والتعليقات المنشورة علناً من المرضى، وتُعرض كملامح لتجربة المراجعين وليست وعوداً أو ضمانات طبية جازمة.
        </div>
      </div>

      <style>{`
        .why-us-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }
        .why-card-responsive {
          padding: 1.15rem;
          gap: 0.85rem;
        }
        .why-icon-box {
          width: 42px;
          height: 42px;
        }
        @media (min-width: 768px) {
          .why-us-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .why-card-responsive {
            padding: 1.75rem;
            gap: 1.25rem;
          }
          .why-icon-box {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
};
