import React from 'react';
import { clinicData } from '../data/clinicData';
import { UserCheck, CheckCircle2, ShieldCheck, HeartHandshake, Phone, MessageCircle } from 'lucide-react';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="about-doctor" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <div className="about-doctor-layout">
          {/* Visual Doctor Profile Card */}
          <div className="about-card-col">
            <div
              className="glass-card about-card-responsive"
              style={{
                borderRadius: '22px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDFA 100%)',
                border: '1.5px solid var(--border-teal)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {/* Doctor Avatar / Medical Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, var(--teal-800), var(--teal-900))',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.85rem auto',
                  boxShadow: '0 8px 20px rgba(15, 118, 110, 0.25)',
                  border: '3px solid #FFFFFF',
                }}
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>

              {/* Name & Title */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--teal-900)', marginBottom: '0.25rem' }}>
                {clinicData.identity.doctorNameArabic}
              </h3>

              <div style={{ fontSize: '0.875rem', color: 'var(--teal-700)', fontWeight: 700, marginBottom: '0.85rem' }}>
                {clinicData.identity.doctorTitleArabic}
              </div>

              {/* Verified Topic highlights */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  marginBottom: '1.15rem',
                }}
              >
                <span className="badge-pill verified">
                  <CheckCircle2 size={12} aria-hidden="true" />
                  <span>طبيب ماهر بشهادة المرضى</span>
                </span>
                <span className="badge-pill verified">
                  <CheckCircle2 size={12} aria-hidden="true" />
                  <span>دكتوراه / دراسات عليا</span>
                </span>
                <span className="badge-pill verified">
                  <CheckCircle2 size={12} aria-hidden="true" />
                  <span>تقييم 5.0 نجوم على Google</span>
                </span>
              </div>

              {/* Contact buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ fontSize: '0.825rem', padding: '0.55rem 0.95rem', flex: '1 1 auto', minHeight: '40px' }}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>تواصل واتساب</span>
                </a>

                <a
                  href={`tel:${clinicData.contact.phoneRaw}`}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.825rem', padding: '0.55rem 0.95rem', flex: '1 1 auto', minHeight: '40px' }}
                >
                  <Phone size={15} aria-hidden="true" />
                  <span>اتصال</span>
                </a>
              </div>

              <p style={{ marginTop: '0.85rem', fontSize: '0.725rem', color: 'var(--text-subtle)' }}>
                * رمز تعبيري مهني بديل عن الصورة الشخصية بانتظار تزويدنا بصورة رسمية معتمدة من العيادة.
              </p>
            </div>
          </div>

          {/* Profile Details Column */}
          <div className="about-details-col">
            <div className="section-badge">
              <UserCheck size={15} aria-hidden="true" />
              <span>الإشراف الطبي</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
                fontWeight: 900,
                color: 'var(--teal-900)',
                lineHeight: 1.25,
                marginBottom: '0.85rem',
              }}
            >
              خبرة موثوقة ونهج علاجي يرتكز على الشفافية
            </h2>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.15rem' }}>
              يشرف <strong style={{ color: 'var(--teal-900)' }}>الدكتور محمود السيد إبراهيم</strong> مباشرة على كافة الإجراءات التشخيصية والعلاجية داخل عيادة الميدان لطب الأسنان بمدينة شبين الكوم.
            </p>

            {/* Evidence-based points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <CheckCircle2 size={16} aria-hidden="true" />
                </div>
                <div>
                  <strong style={{ color: 'var(--teal-900)', fontSize: '0.9rem', display: 'block' }}>
                    الأمانة الطبية وشرح الحالة
                  </strong>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    التزام تام بتوضيح سبب الألم وخيارات العلاج المتاحة مع المريض قبل الشروع في أي خطوة، دون استعجال أو إجراءات إضافية غير ضرورية.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <ShieldCheck size={16} aria-hidden="true" />
                </div>
                <div>
                  <strong style={{ color: 'var(--teal-900)', fontSize: '0.9rem', display: 'block' }}>
                    صرامة التعقيم والسلامة
                  </strong>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    تطبيق بروتوكولات التعقيم الصارم للأدوات والأسطح بين كل مراجع وآخر، لحماية صحة المرضى وتوفير بيئة علاجية آمنة.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <HeartHandshake size={16} aria-hidden="true" />
                </div>
                <div>
                  <strong style={{ color: 'var(--teal-900)', fontSize: '0.9rem', display: 'block' }}>
                    الصبر والتعامل الودود
                  </strong>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    الاهتمام بالراحة النفسية للمراجعين الذين يشعرون بالخوف من علاج الأسنان، ومعاملة هادئة ومطمئنة للأطفال لغرس الثقة.
                  </span>
                </div>
              </div>
            </div>

            {/* Safeguard transparency statement */}
            <div
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-subtle)',
                background: '#FFFFFF',
                padding: '0.75rem 0.95rem',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                lineHeight: 1.5,
              }}
            >
              🔒 <strong>تنويه تحري الدقة:</strong> نلتزم بعدم اختلاق أي سنوات خبرة غير مدققة أو جوائز غير موثقة في هذا العرض الأولي حتى استلام السيرة المهنية المعتمدة رسمياً من الدكتور محمود السيد إبراهيم.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-doctor-layout {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }

        .about-card-col {
          width: 100%;
        }

        .about-details-col {
          width: 100%;
        }

        .about-card-responsive {
          padding: 1.25rem;
        }

        @media (min-width: 860px) {
          .about-doctor-layout {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            align-items: center;
            gap: 3rem;
          }
          .about-card-responsive {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
