import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import {
  Phone,
  MessageCircle,
  Calendar,
  Send,
  CheckCircle2,
  Share2,
} from 'lucide-react';

export const ContactBooking: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [selectedService, setSelectedService] = useState('كشف وفحص عام');
  const [preferredDay, setPreferredDay] = useState('أقرب موعد متاح');
  const [notes, setNotes] = useState('');

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const messageParts = [
      'السلام عليكم ورحمة الله وبركاته،',
      `أرغب في حجز موعد في عيادة الميدان لطب الأسنان (د. محمود السيد إبراهيم).`,
      patientName ? `الاسم: ${patientName}` : '',
      `الخدمة المطلوبة: ${selectedService}`,
      `الموعد المفضل: ${preferredDay}`,
      notes ? `ملاحظات إضافية: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(messageParts)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calendar size={16} aria-hidden="true" />
            <span>الحجز والتواصل</span>
          </div>
          <h2 className="section-title">احجز موعدك بسهولة عبر واتساب</h2>
          <p className="section-description">
            لتفادي فترات الانتظار وضمان منح كل مريض الوقت الكافي للكشف والعلاج، تعمل العيادة بنظام الحجز والتنسيق المسبق.
          </p>
        </div>

        {/* Contact & Interactive Booking Form Grid - Mobile First */}
        <div className="contact-grid-layout">
          {/* Direct Communication Cards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
            {/* Phone Card */}
            <div className="glass-card contact-card-responsive" style={{ border: '1px solid var(--border-card)', background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FBFB 100%)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'var(--bg-teal-subtle)',
                    color: 'var(--teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--teal-900)' }}>
                    الاتصال الهاتفي المباشر
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                    للاستفسار والحجز السريع
                  </div>
                </div>
              </div>

              <div
                className="num-font"
                style={{
                  fontSize: 'clamp(1.25rem, 5vw, 1.55rem)',
                  fontWeight: 900,
                  color: 'var(--teal-800)',
                  direction: 'ltr',
                  textAlign: 'right',
                  marginBottom: '1rem',
                }}
              >
                {clinicData.contact.phoneDisplay}
              </div>

              <a
                href={`tel:${clinicData.contact.phoneRaw}`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.925rem' }}
              >
                <Phone size={17} aria-hidden="true" />
                <span>اتصل الآن بالعيادة</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card contact-card-responsive" style={{ border: '1px solid rgba(34, 197, 94, 0.3)', background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: '#DCFCE7',
                    color: '#16A34A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={24} aria-hidden="true" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#14532D' }}>
                    المحادثة المباشرة على واتساب
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#15803D' }}>
                    رد سريع على المواعيد والاستفسارات
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                تفضل بمراسلتنا لتحديد الوقت الأنسب لك أو لطرح أي استفسار حول الإجراءات والخدمات.
              </p>

              <a
                href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '0.925rem' }}
              >
                <MessageCircle size={19} aria-hidden="true" />
                <span>بدء محادثة واتساب الآن</span>
              </a>
            </div>

            {/* Verified Social Media Channels */}
            <div
              className="glass-card contact-card-responsive"
              style={{
                background: 'var(--bg-warm)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--teal-900)', fontSize: '0.9rem', marginBottom: '0.85rem' }}>
                <Share2 size={17} aria-hidden="true" />
                <span>الصفحات الرسمية الموثقة للعيادة:</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {clinicData.socialProfiles
                  .filter((p) => p.platform !== 'whatsapp')
                  .map((profile, i) => (
                    <a
                      key={i}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.45rem 0.95rem',
                        fontSize: '0.825rem',
                        minHeight: '38px',
                        flex: '1 1 auto',
                      }}
                    >
                      {profile.platform === 'facebook' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                      {profile.platform === 'instagram' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#E4405F">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      <span>{profile.platformNameArabic}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Interactive Custom WhatsApp Booking Form */}
          <div
            className="glass-card contact-card-responsive form-card-elevated"
            style={{
              border: '2px solid var(--border-teal)',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--bg-teal-subtle)',
                  color: 'var(--teal-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Calendar size={20} aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--teal-900)' }}>
                منسّق المواعيد السريع
              </h3>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              حدد الخدمة وتفضيلاتك لتجهيز رسالة حجز مخصصة تُرسل مباشرة إلى واتساب العيادة:
            </p>

            <form onSubmit={handleWhatsAppBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              {/* Patient Name */}
              <div>
                <label
                  htmlFor="patientName"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-950)', marginBottom: '0.35rem' }}
                >
                  الاسم الكامل (اختياري):
                </label>
                <input
                  id="patientName"
                  type="text"
                  placeholder="مثال: أحمد عبد الله"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="mobile-input"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="selectedService"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-950)', marginBottom: '0.35rem' }}
                >
                  الخدمة أو الشكوى المطلوبة:
                </label>
                <select
                  id="selectedService"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mobile-input"
                >
                  <option value="كشف وفحص عام واستشارة">كشف وفحص عام واستشارة</option>
                  <option value="ألم طارئ في الأسنان">ألم طارئ في الأسنان أو تورم</option>
                  <option value="حشوات تجميلية وعلاج تسوس">حشوات تجميلية وعلاج تسوس</option>
                  <option value="علاج جذور وسحب عصب">علاج جذور وسحب عصب</option>
                  <option value="تنظيف وتلميع وإزالة الجير">تنظيف وتلميع وإزالة الجير</option>
                  <option value="تبييض الأسنان">تبييض الأسنان</option>
                  <option value="تركيبات وعدسات تجميلية (فينير)">تركيبات وعدسات تجميلية (فينير)</option>
                  <option value="استشارة تقويم أسنان">استشارة تقويم أسنان</option>
                  <option value="طب أسنان أطفال">طب أسنان أطفال</option>
                </select>
              </div>

              {/* Preferred Timing */}
              <div>
                <label
                  htmlFor="preferredDay"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-950)', marginBottom: '0.35rem' }}
                >
                  الوقت أو اليوم المفضل:
                </label>
                <select
                  id="preferredDay"
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="mobile-input"
                >
                  <option value="أقرب موعد متاح">أقرب موعد متاح</option>
                  <option value="الفترة المسائية">الفترة المسائية</option>
                  <option value="يوم السبت">يوم السبت</option>
                  <option value="يوم الأحد">يوم الأحد</option>
                  <option value="يوم الاثنين">يوم الاثنين</option>
                  <option value="يوم الثلاثاء">يوم الثلاثاء</option>
                  <option value="يوم الأربعاء">يوم الأربعاء</option>
                  <option value="يوم الخميس">يوم الخميس</option>
                </select>
              </div>

              {/* Additional notes */}
              <div>
                <label
                  htmlFor="notes"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-950)', marginBottom: '0.35rem' }}
                >
                  ملاحظات إضافية أو وصف سريع للألم (اختياري):
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="مثال: ألم في الضرس العلوي منذ يومين..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mobile-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.25rem' }}
              >
                <Send size={18} aria-hidden="true" />
                <span>إرسال تفاصيل الموعد عبر واتساب</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.725rem', color: 'var(--text-subtle)', textAlign: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={13} color="#059669" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>البيانات تُرسل مباشرة إلى واتساب العيادة دون تخزين أي سجلات</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 1040px;
          margin: 0 auto;
          width: 100%;
        }

        .contact-card-responsive {
          padding: 1.15rem;
          border-radius: 18px;
        }

        .mobile-input {
          width: 100%;
          padding: 0.75rem 0.85rem;
          border-radius: 10px;
          border: 1.5px solid var(--border-subtle);
          font-size: 16px; /* Prevents auto-zoom in mobile browsers */
          background: var(--bg-warm);
          box-sizing: border-box;
          transition: border-color 0.2s ease;
        }

        .mobile-input:focus {
          border-color: var(--teal-600);
          outline: none;
        }

        @media (min-width: 860px) {
          .contact-grid-layout {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
            align-items: start;
          }
          .contact-card-responsive {
            padding: 2rem;
            border-radius: 24px;
          }
          .form-card-elevated {
            padding: 2.25rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};
