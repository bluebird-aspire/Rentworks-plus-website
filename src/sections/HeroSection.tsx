import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import {
  Calendar,
  ArrowRight,
  Car,
  Users,
  CreditCard,
  BarChart3,
  FileText,
  Shield,
  ClipboardCheck,
  Settings,
} from 'lucide-react';

const floatingChips = [
  { icon: Car, label: 'Fleet Management', top: '14%', left: '10%', delay: 0 },
  { icon: Calendar, label: 'Reservation Planner', top: '8%', left: '34%', delay: 0.3 },
  { icon: Users, label: 'Customer 360°', top: '10%', right: '12%', delay: 0.5 },
  { icon: CreditCard, label: 'Payments', top: '40%', left: '4%', delay: 0.8 },
  { icon: FileText, label: 'Digital Contracts', top: '38%', right: '4%', delay: 1 },
  { icon: Shield, label: 'Claims', bottom: '28%', left: '8%', delay: 1.2 },
  { icon: ClipboardCheck, label: 'Inspections', bottom: '24%', right: '8%', delay: 1.4 },
  { icon: BarChart3, label: 'Analytics', bottom: '12%', left: '32%', delay: 1.6 },
  { icon: Settings, label: 'Configuration', bottom: '12%', right: '30%', delay: 1.8 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 3D tilt effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      loadTl.fromTo(cardRef.current,
        { rotateX: 15, y: 60, opacity: 0 },
        { rotateX: 0, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        loadTl.fromTo(words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' },
          '-=0.5'
        );
      }

      loadTl.fromTo(subheadRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      const ctaButtons = ctaRef.current?.querySelectorAll('button');
      if (ctaButtons) {
        loadTl.fromTo(ctaButtons,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' },
          '-=0.2'
        );
      }

      chipsRef.current.forEach((chip, i) => {
        if (chip) {
          loadTl.fromTo(chip,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' },
            0.8 + i * 0.1
          );

          gsap.to(chip, {
            y: '+=12',
            duration: 3 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineText = 'The complete platform for modern rental operations.';
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Animated gradient orb behind the card */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)',
          opacity: 0.12,
          filter: 'blur(80px)',
          animation: 'orbPulse 6s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.15); opacity: 0.18; }
        }
        .hero-chip .chip-label {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: max-width 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease, padding 0.3s ease;
          padding-left: 0;
        }
        .hero-chip:hover .chip-label {
          max-width: 200px;
          opacity: 1;
          padding-left: 8px;
        }
      `}</style>

      {/* Floating chips — icon-only, name on hover */}
      {floatingChips.map((chip, index) => (
        <div
          key={chip.label}
          ref={el => { chipsRef.current[index] = el; }}
          className="hero-chip absolute hidden lg:flex items-center glass-card rounded-full shadow-lg cursor-default transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,233,168,0.25)] hover:scale-105 z-10"
          style={{
            top: chip.top,
            left: chip.left,
            right: chip.right,
            bottom: chip.bottom,
            padding: '10px',
            willChange: 'transform',
          } as React.CSSProperties}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'color-mix(in srgb, var(--theme-accent) 12%, transparent)' }}
          >
            <chip.icon className="w-5 h-5" style={{ color: 'var(--theme-accent)' }} />
          </div>
          <span
            className="chip-label text-sm font-medium"
            style={{ color: 'var(--theme-text)' }}
          >
            {chip.label}
          </span>
        </div>
      ))}

      <div
        ref={cardRef}
        className="relative w-[min(920px,92vw)] glass-card shimmer-border rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{
            background: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)',
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--theme-accent)' }} />
          <span className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: 'var(--theme-accent)' }}>Cloud-Based Rental Management</span>
        </div>

        <h1
          ref={headlineRef}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ color: 'var(--theme-text)' }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subheadRef}
          className="text-base md:text-lg max-w-[640px] leading-relaxed mb-10"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          26 integrated modules covering reservations, fleet management, payments,
          claims, and customer relationships—all in one unified platform.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group relative flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300"
            style={{
              background: 'var(--theme-accent)',
              color: 'var(--theme-accent-fg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--theme-accent-dark)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(46,233,168,0.5), 0 0 80px rgba(46,233,168,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--theme-accent)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Calendar className="w-5 h-5" />
            Request a Demo
          </button>
          <button
            onClick={() => scrollToSection('#features')}
            className="relative flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all duration-300 border overflow-hidden"
            style={{
              borderColor: 'color-mix(in srgb, var(--theme-text) 20%, transparent)',
              color: 'var(--theme-text)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--theme-accent)';
              e.currentTarget.style.background = 'color-mix(in srgb, var(--theme-accent) 8%, transparent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(46,233,168,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--theme-text) 20%, transparent)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
