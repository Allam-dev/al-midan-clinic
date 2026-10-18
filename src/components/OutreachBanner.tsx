import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { ChevronDown, ChevronUp, CheckCircle2, HelpCircle } from 'lucide-react';

export const OutreachBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="تنبيه النموذج التجريبي" style={{ background: '#042F2E', color: '#E6FFFA', width: '100%', overflowX: 'hidden' }}>
      <div className="container" style={{ padding: '0.45rem 1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontSize: '0.775rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', flex: '1 1 auto', minWidth: 0 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0D9488',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '2px 8px',
                fontWeight: 700,
                fontSize: '0.725rem',
                flexShrink: 0,
              }}
            >
              عرض تجريبي
            </span>
            <span style={{ fontWeight: 600, lineHeight: 1.4 }}>
              نموذج غير رسمي للمعاينة والتواصل المهني فقط | عيادة الميدان
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '0.2rem 0.65rem',
              fontSize: '0.725rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            <span>بيانات التحقق</span>
            {isOpen ? <ChevronUp size={13} aria-hidden="true" /> : <ChevronDown size={13} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div
            style={{
              marginTop: '0.65rem',
              paddingTop: '0.65rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.775rem',
              lineHeight: 1.6,
            }}
          >
            <div className="banner-cards-grid">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#5EEAD4', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>بيانات تم التحقق منها رسمياً:</span>
                </div>
                <ul style={{ paddingRight: '1.1rem', margin: 0 }}>
                  <li>اسم العيادة والطبيب: د. محمود السيد إبراهيم (شبين الكوم).</li>
                  <li>تقييم Google Maps: 5.0 نجوم من 117 مراجعة موثقة (100% 5 نجوم).</li>
                  <li>رقم الهاتف المعتمد: {clinicData.contact.phoneDisplay}.</li>
                  <li>حسابات التواصل: فيسبوك (Almiedan007) وإنستغرام (@mahmoud_ibrahiem007).</li>
                  <li>موقع الخريطة والـ Plus Code: {clinicData.location.plusCode}.</li>
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FCD34D', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <HelpCircle size={15} aria-hidden="true" />
                  <span>عناصر بانتظار اعتماد إدارة العيادة:</span>
                </div>
                <ul style={{ paddingRight: '1.1rem', margin: 0 }}>
                  {clinicData.outreachSafeguards.unconfirmedChecklist.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '0.5rem', color: '#99F6E4', fontSize: '0.725rem' }}>
              * هذا الموقع نموذج مقترح لعرض إمكانيات التطوير الرقمي للعيادة، ولا يمثل الموقع الرسمي حتى يتم اعتماده ونشره من قبل الدكتور محمود السيد إبراهيم.
            </p>
          </div>
        )}
      </div>

      <style>{`
        .banner-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          .banner-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </aside>
  );
};
