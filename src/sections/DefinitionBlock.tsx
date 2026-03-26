import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  RefreshCw, Car, CreditCard, ScanLine, Shield, FileEdit, Activity,
} from 'lucide-react';

const capabilities = [
  { icon: RefreshCw, title: 'Full rental lifecycle', desc: 'Reservations through check-out in one system' },
  { icon: Car, title: 'ACRISS fleet classification', desc: 'Industry-standard vehicle categorization' },
  { icon: CreditCard, title: 'Adyen payment processing', desc: 'Hosted payments, direct bill, and more' },
  { icon: ScanLine, title: '60+ zone vehicle inspection', desc: 'Photo-based damage documentation' },
  { icon: Shield, title: 'Claims management', desc: 'Nine detail tabs with full audit trail' },
  { icon: FileEdit, title: 'Visual form builder', desc: 'Drag-and-drop with conditional logic' },
  { icon: Activity, title: '15+ real-time KPIs', desc: 'Fleet, revenue, and operations dashboard' },
];

export default function DefinitionBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );

      // Left paragraph slides in from left
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );

      // Capability items stagger in from right with bounce
      const items = listRef.current?.querySelectorAll('.cap-item');
      if (items) {
        gsap.fromTo(items,
          { x: 40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)',
            scrollTrigger: { trigger: listRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      }

      // Continuous floating animation on the background orb
      gsap.to('.def-orb', {
        x: 30, y: -20, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });

      // Subtle icon pulse — staggered continuous animation
      const icons = listRef.current?.querySelectorAll('.cap-icon');
      if (icons) {
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            scale: 1.15, duration: 1.2, ease: 'sine.inOut',
            yoyo: true, repeat: -1, delay: i * 0.3,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-rentworksplus"
      className="relative w-full py-12 md:py-16 overflow-hidden"
      aria-label="About RentWorksPlus"
    >
      {/* Floating gradient orb */}
      <div
        className="def-orb absolute hidden md:block pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-150px',
          background: 'radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)',
          opacity: 0.07,
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      <div className="max-w-[1050px] mx-auto px-6 relative">
        {/* Header */}
        <div ref={headerRef} className="opacity-0 text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Overview
          </span>
          <h2
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold"
            style={{ color: 'var(--theme-text)' }}
          >
            What is RentWorksPlus?
          </h2>
        </div>

        {/* Split: intro (narrow) + capabilities (wider) */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-14 items-center">
          {/* Left — short intro */}
          <div ref={leftRef} className="opacity-0">
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              <strong style={{ color: 'var(--theme-text)' }}>RentWorksPlus</strong> is
              a cloud-based car rental management platform built by Bluebird Auto Rental
              Systems with 26 integrated modules. Designed for car rental agencies,
              dealerships, and fleet operators, it consolidates every step of the rental
              lifecycle into a single multi-tenant system with role-based access control
              and multi-location support.
            </p>
          </div>

          {/* Right — capabilities list */}
          <div ref={listRef} className="space-y-1">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="cap-item opacity-0 group flex items-center gap-3 px-3 py-2 rounded-xl cursor-default"
                style={{
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateX(6px)';
                  el.style.background = 'color-mix(in srgb, var(--theme-accent) 5%, transparent)';
                  el.style.borderColor = 'color-mix(in srgb, var(--theme-accent) 15%, transparent)';
                  el.style.boxShadow = '0 4px 20px color-mix(in srgb, var(--theme-accent) 8%, transparent)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateX(0)';
                  el.style.background = 'transparent';
                  el.style.borderColor = 'transparent';
                  el.style.boxShadow = 'none';
                }}
              >
                <div
                  className="cap-icon w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <cap.icon
                    className="w-4 h-4"
                    style={{
                      color: 'var(--theme-accent)',
                      transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>
                <div>
                  <span
                    className="cap-title text-sm font-semibold"
                    style={{
                      color: 'var(--theme-text)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {cap.title}
                  </span>
                  <span
                    className="text-sm ml-1"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    — {cap.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Hover styles for icon scale + tilt and title color */}
          <style>{`
            .cap-item:hover .cap-icon {
              transform: scale(1.2) translateY(-2px);
              background-color: color-mix(in srgb, var(--theme-accent) 18%, transparent) !important;
              box-shadow: 0 4px 12px color-mix(in srgb, var(--theme-accent) 15%, transparent);
            }
            .cap-item:hover .cap-icon svg {
              transform: rotate(12deg) !important;
            }
            .cap-item:hover .cap-title {
              color: var(--theme-accent) !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
