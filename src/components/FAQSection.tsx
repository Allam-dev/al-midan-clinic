import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'كيف يمكنني حجز موعد في عيادة الميدان لطب الأسنان؟',
      answer: `يمكنك الحجز بسهولة عبر مراسلة واتساب على الرقم (${clinicData.contact.phoneDisplay}) أو الاتصال هاتفياً بنفس الرقم لتحديد الوقت الأنسب لك مع إدارة العيادة.`,
    },
    {
      question: 'هل يلزم الحجز المسبق قبل الحضور للعيادة؟',
      answer:
        'نعم، تعمل العيادة بنظام الحجز المسبق لتنظيم فترات الكشف وتجنب أوقات الانتظار الطويلة، ولضمان منح كل مريض الوقت الكافي للتشخيص الدقيق والعلاج بهدوء.',
    },
    {
      question: 'أين تقع عيادة الميدان بالتحديد في شبين الكوم؟',
      answer: `تقع العيادة في ${clinicData.location.confirmedAddressArabic}، بالقرب من منطقة عمر أفندي بشارع الشامي / المهدي المتفرع من شارع سعد زغلول، ويمكنك الوصول للعنوان بدقة بالغة عبر الضغط على رابط خرائط Google في الموقع.`,
    },
    {
      question: 'ما هي معايير النظافة والتعقيم المتبعة في العيادة؟',
      answer:
        'تحرص العيادة على تطبيق بروتوكولات تعقيم صارمة باستخدام أجهزة التعقيم الحديثة للأدوات الطبية وتغيير المستلزمات ذات الاستخدام الواحد لكل مريض، وهو ما أشاد به المراجعون في تقييماتهم الموثقة.',
    },
    {
      question: 'هل تستقبل العيادة حالات الأطفال؟',
      answer:
        'نعم، يحرص الدكتور محمود السيد إبراهيم على التعامل النفسي اللطيف والهادئ مع الأطفال لتخفيف الرهبة وتوفير رعاية سنية مريحة تغرس فيهم الثقة.',
    },
    {
      question: 'كيف يتم تحديد تكلفة العلاج والخطة العلاجية؟',
      answer:
        'يتم تحديد الخطة العلاجية الدقيقة والتكلفة بعد الفحص السريري المباشر داخل العيادة للوقوف على الاحتياج الفعلي للسن أو الضرس ومناقشة الخيارات المناسبة مع المريض بشفافية تامة دون أي إجراءات غير ضرورية.',
    },
  ];

  return (
    <section id="faq" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={16} aria-hidden="true" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="section-title">إجابات على أهم تساؤلات المراجعين</h2>
          <p className="section-description">
            معلومات عملية ومباشرة حول نظام المواعيد، الوصول للعيادة، وإجراءات الفحص والاستشارة.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card faq-card-responsive"
                style={{
                  border: isOpen ? '1.5px solid var(--teal-600)' : '1px solid var(--border-subtle)',
                  background: '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  padding: 0,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="faq-trigger-btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'right',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
                      fontWeight: 700,
                      color: isOpen ? 'var(--teal-900)' : 'var(--text-heading)',
                      lineHeight: 1.4,
                      flexGrow: 1,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: isOpen ? 'var(--bg-teal-subtle)' : 'var(--bg-subtle)',
                      color: isOpen ? 'var(--teal-700)' : 'var(--text-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="faq-content-responsive"
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-trigger-btn {
          padding: 0.95rem 1rem;
        }
        .faq-content-responsive {
          padding: 0.85rem 1rem 1rem 1rem;
        }
        @media (min-width: 640px) {
          .faq-trigger-btn {
            padding: 1.25rem 1.5rem;
          }
          .faq-content-responsive {
            padding: 1rem 1.5rem 1.5rem 1.5rem;
            font-size: 0.975rem;
          }
        }
      `}</style>
    </section>
  );
};
