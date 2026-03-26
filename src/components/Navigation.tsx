import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, LogIn } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';

const loginButtonClass = `
  group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
  overflow-hidden transition-all duration-300
  hover:scale-105
`;

function ShimmerOverlay() {
  return (
    <span
      className="absolute inset-0 opacity-0 group-hover:opacity-100"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        animation: 'shimmer-slide 1.5s ease-in-out infinite',
      }}
    />
  );
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Payments', href: '#payments' },
  { label: 'Inspection', href: '#inspection' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Forms', href: '#forms' },
  { label: 'Loyalty', href: '#loyalty' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        data-nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'border-b' : ''
        }`}
        style={{ backgroundColor: theme === 'dark' ? 'color-mix(in srgb, var(--theme-bg) 90%, transparent)' : 'rgba(239, 238, 234)', ...(isScrolled ? { borderColor: 'var(--theme-divider)' } : {}) }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <img src={theme === 'dark' ? logoDark : logoLight} alt="RentWorksPlus" className="h-7 w-auto" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm transition-colors relative group"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--theme-accent)' }} />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--theme-hover)', color: 'var(--theme-text-muted)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://app.rentworksplus.com"
                target="_blank"
                rel="noopener noreferrer"
                className={loginButtonClass}
                style={{
                  backgroundColor: 'var(--theme-accent)',
                  color: 'var(--theme-accent-fg)',
                  boxShadow: '0 0 0 0 var(--theme-accent)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px color-mix(in srgb, var(--theme-accent) 40%, transparent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 var(--theme-accent)';
                }}
              >
                <ShimmerOverlay />
                <LogIn className="w-4 h-4" />
                Login
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="p-2"
                style={{ color: 'var(--theme-text)' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[99] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-bg) 98%, transparent)' }} />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-heading font-semibold transition-colors"
              style={{ color: 'var(--theme-text)' }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://app.rentworksplus.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${loginButtonClass} mt-4 px-8 py-3 text-base`}
            style={{
              backgroundColor: 'var(--theme-accent)',
              color: 'var(--theme-accent-fg)',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShimmerOverlay />
            <LogIn className="w-5 h-5" />
            Login
          </a>
        </div>
      </div>
    </>
  );
}
