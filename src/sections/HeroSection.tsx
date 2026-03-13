import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, ArrowRight } from 'lucide-react';

import HeroCardCollage from '../components/hero/HeroCardCollage';
import HeroCardCarousel from '../components/hero/HeroCardCarousel';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 },
          '-=0.3'
        );
      }

      tl.fromTo(subheadRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      const ctaButtons = ctaRef.current?.querySelectorAll('button');
      if (ctaButtons) {
        tl.fromTo(ctaButtons,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' },
          '-=0.2'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineText = 'The complete platform for modern rental operations.';
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full flex flex-col items-center pt-24 pb-0 overflow-visible"
    >
      {/* Animated gradient orb — hidden on mobile */}
      <div
        className="absolute hidden md:block w-[600px] h-[600px] rounded-full pointer-events-none"
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
      `}</style>

      {/* Text zone */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mb-0">
        <h1
          ref={headlineRef}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ color: 'var(--theme-text)' }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
          ))}
        </h1>

        <p
          ref={subheadRef}
          className="text-base md:text-lg max-w-[640px] mx-auto leading-relaxed mb-8"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          26 integrated modules covering reservations, fleet management, payments,
          claims, and customer relationships — all in one unified platform.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300"
            style={{ background: 'var(--theme-accent)', color: 'var(--theme-accent-fg)' }}
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
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all duration-300 border overflow-hidden"
            style={{
              borderColor: 'color-mix(in srgb, var(--theme-text) 20%, transparent)',
              color: 'var(--theme-text)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--theme-accent)';
              e.currentTarget.style.background = 'color-mix(in srgb, var(--theme-accent) 8%, transparent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--theme-text) 20%, transparent)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Explore Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card collage zone */}
      <div className="relative z-10 w-full mt-16 md:mt-32">
        <div className="hidden md:block">
          <HeroCardCollage />
        </div>
        <div className="md:hidden">
          <HeroCardCarousel />
        </div>
      </div>
    </section>
  );
}
