import { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';
import { useTheme } from '../ThemeContext';

const quickLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Payments', href: '#payments' },
  { label: 'Inspection', href: '#inspection' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Loyalty', href: '#loyalty' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { theme } = useTheme();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  return (
    <footer className="relative">
      {/* Green accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: 'var(--theme-accent)' }} />

      <div style={{ backgroundColor: 'var(--theme-bg-alt)' }}>
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          {/* 3-column grid: logo | quick links | contact */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Company info */}
            <div>
              <img src={theme === 'dark' ? logoDark : logoLight} alt="RentWorksPlus" className="h-8 w-auto mb-3" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                Cloud-based rental management platform for modern businesses. Streamline your operations with 26 integrated modules.
              </p>
              <p className="text-xs italic mt-2" style={{ color: 'var(--theme-text-muted)' }}>
                Driven by experience, redefined by intelligence.
              </p>
            </div>

            {/* Quick Links — 2-column sub-grid */}
            <div>
              <h4 className="font-heading font-semibold mb-3" style={{ color: 'var(--theme-text)' }}>
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--theme-text-muted)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-heading font-semibold mb-3" style={{ color: 'var(--theme-text)' }}>
                Contact Us
              </h4>
              <div className="space-y-2.5">
                <a href="mailto:support@barsnet.com" className="flex items-center gap-3 text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--theme-accent)' }} />
                  support@barsnet.com
                </a>
                <a href="tel:+19739892423" className="flex items-center gap-3 text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--theme-accent)' }} />
                  +1 (973) 989-2423
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4" style={{ borderTop: '1px solid var(--theme-divider)' }} />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--theme-accent) 12%, transparent)' }}
            >
              <Linkedin className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
            </a>

            {/* Legal + Copyright */}
            <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--theme-text-muted)' }}>
              <button onClick={() => setShowTermsOfService(true)} className="transition-colors hover:opacity-70">
                Terms of Service
              </button>
              <span style={{ color: 'var(--theme-divider-strong)' }}>|</span>
              <button onClick={() => setShowPrivacyPolicy(true)} className="transition-colors hover:opacity-70">
                Privacy Policy
              </button>
              <span style={{ color: 'var(--theme-divider-strong)' }}>|</span>
              <span>&copy; 2026 RentWorksPlus &mdash; All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
      <TermsOfServiceModal open={showTermsOfService} onClose={() => setShowTermsOfService(false)} />
    </footer>
  );
}
