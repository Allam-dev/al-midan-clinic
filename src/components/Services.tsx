import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import {
  Stethoscope,
  Sparkles,
  Layers,
  Activity,
  Sun,
  Smile,
  Shield,
  Grid,
  Baby,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'general' | 'cosmetic' | 'specialized'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope size={22} aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles size={22} aria-hidden="true" />;
      case 'Layers':
        return <Layers size={22} aria-hidden="true" />;
      case 'Activity':
        return <Activity size={22} aria-hidden="true" />;
      case 'Sun':
        return <Sun size={22} aria-hidden="true" />;
      case 'Smile':
        return <Smile size={22} aria-hidden="true" />;
      case 'Shield':
        return <Shield size={22} aria-hidden="true" />;
      case 'Grid':
        return <Grid size={22} aria-hidden="true" />;
      case 'Baby':
        return <Baby size={22} aria-hidden="true" />;
      default:
        return <Sparkles size={22} aria-hidden="true" />;
    }
  };

  const filteredServices =
    activeFilter === 'all'
      ? clinicData.services
      : clinicData.services.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} aria-hidden="true" />
            <span>خدمات طب الفم والأسنان</span>
          </div>
          <h2 className="section-title">رعاية سنية متكاملة لصحة وجمال ابتسامتك</h2>
          <p className="section-description">
            نقدم مجموعة متكاملة من الخدمات العلاجية والتجميلية، مع التركيز على التشخيص الصادق والحلول الأنسب لكل حالة بدون تعقيد.
          </p>

          {/* Outreach Notice about services */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              color: '#92400E',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.775rem',
              fontWeight: 600,
              marginTop: '0.85rem',
              maxWidth: '100%',
              lineHeight: 1.5,
              textAlign: 'center',
            }}
          >
            <HelpCircle size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
            <span>قائمة الخدمات المقترحة مبنية على المصادر العامة وتنتظر اعتماد العيادة النهائي قبل الإطلاق</span>
          </div>
        </div>

        {/* Filter Pills: Mobile-First Scrollable or Wrapped */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '1.75rem',
            width: '100%',
          }}
          role="tablist"
          aria-label="تصنيفات خدمات الأسنان"
        >
          {[
            { id: 'all', label: 'كافة الخدمات' },
            { id: 'general', label: 'العناية العامة' },
            { id: 'cosmetic', label: 'التجميل والابتسامة' },
            { id: 'specialized', label: 'العلاجات المتخصصة' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.825rem',
                fontWeight: 700,
                border: activeFilter === tab.id ? '2px solid var(--teal-700)' : '1px solid var(--border-subtle)',
                background: activeFilter === tab.id ? 'var(--teal-700)' : 'var(--bg-surface)',
                color: activeFilter === tab.id ? '#FFFFFF' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Mobile-First 1 Col) */}
        <div className="services-grid-layout">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card service-card-responsive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Icon & Category Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
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
                  {getServiceIcon(service.iconName)}
                </div>

                <span
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 600,
                    color: 'var(--text-subtle)',
                    background: 'var(--bg-subtle)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {service.titleEnglish}
                </span>
              </div>

              {/* Title & Desc */}
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'var(--teal-900)',
                  marginBottom: '0.45rem',
                  lineHeight: 1.3,
                }}
              >
                {service.titleArabic}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  marginBottom: '1rem',
                  flexGrow: 1,
                }}
              >
                {service.shortDescArabic}
              </p>

              {/* Card Footer with Direct WhatsApp Action */}
              <div
                style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن خدمة (${service.titleArabic}) في عيادة الميدان.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--teal-700)',
                    fontWeight: 700,
                    fontSize: '0.825rem',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>استفسر عن الموعد</span>
                </a>

                <span
                  style={{
                    fontSize: '0.7rem',
                    color: '#B45309',
                    background: '#FEF3C7',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  نموذج مقترح
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Treatment Customization */}
        <div
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            background: 'var(--bg-warm)',
            padding: '1rem 1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)',
            maxWidth: '850px',
            margin: '2rem auto 0 auto',
          }}
        >
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
            💡 <strong>ملاحظة هامة للمراجعين:</strong> الخطة العلاجية الدقيقة وعدد الجلسات تُحدد فقط بعد الفحص السريري المباشر داخل العيادة بمعرفة الدكتور محمود السيد إبراهيم.
          </p>
        </div>
      </div>

      <style>{`
        .services-grid-layout {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .service-card-responsive {
          padding: 1.15rem;
        }

        @media (min-width: 640px) {
          .services-grid-layout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .service-card-responsive {
            padding: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .services-grid-layout {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
