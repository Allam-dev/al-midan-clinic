import React from 'react';
import { OutreachBanner } from './components/OutreachBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Reputation } from './components/Reputation';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { AboutDoctor } from './components/AboutDoctor';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { ContactBooking } from './components/ContactBooking';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { clinicData } from './data/clinicData';
import { MessageCircle, Phone } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Outreach Demo Banner & Transparency Notice */}
      <OutreachBanner />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main style={{ flex: 1, width: '100%', maxWidth: '100%' }}>
        <Hero />
        <Reputation />
        <WhyUs />
        <Services />
        <AboutDoctor />
        <Reviews />
        <LocationSection />
        <ContactBooking />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Fast-Action Bar (Fixed bottom for thumb-friendly reachability on mobile) */}
      <div
        className="mobile-floating-bar"
        style={{
          position: 'fixed',
          bottom: '12px',
          right: '12px',
          left: '12px',
          zIndex: 40,
          display: 'none',
          gap: '8px',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <a
          href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=${encodeURIComponent(clinicData.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{
            flex: 2,
            boxShadow: '0 6px 20px rgba(34, 197, 94, 0.45)',
            fontSize: '0.9rem',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-full)',
          }}
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>احجز عبر واتساب</span>
        </a>

        <a
          href={`tel:${clinicData.contact.phoneRaw}`}
          className="btn btn-secondary"
          style={{
            flex: 1,
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.15)',
            fontSize: '0.85rem',
            padding: '0.75rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            background: '#FFFFFF',
          }}
          aria-label="اتصال هاتفياً بالعيادة"
        >
          <Phone size={16} aria-hidden="true" />
          <span>اتصال</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-floating-bar {
            display: flex !important;
          }
          footer {
            padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
