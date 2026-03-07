import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import logoImg from '../assets/logo-with-slogan.png';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Payments', href: '#payments' },
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'backdrop-blur-xl border-b' : 'bg-transparent'
        }`}
        style={isScrolled ? { backgroundColor: 'color-mix(in srgb, var(--theme-bg) 90%, transparent)', borderColor: 'var(--theme-divider)' } : {}}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <img src={logoImg} alt="RentWorksPlus" className="h-8 w-auto" />
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
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-2.5 rounded-lg border transition-all duration-300 text-sm font-medium"
                style={{ borderColor: 'color-mix(in srgb, var(--theme-accent) 30%, transparent)', color: 'var(--theme-accent)' }}
              >
                Request a demo
              </button>
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
          <button
            className="mt-4 px-8 py-3 font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--theme-accent)', color: 'var(--theme-accent-fg)' }}
            onClick={() => scrollToSection('#contact')}
          >
            Request a demo
          </button>
        </div>
      </div>
    </>
  );
}
