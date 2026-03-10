import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Calendar, Car, CreditCard, FileText, Users, BarChart3, Shield, Settings } from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Reservations', description: 'Full reservation lifecycle with conflict detection, availability tracking, and open reservation management.', zDepth: 10 },
  { icon: Car, title: 'Fleet Management', description: 'ACRISS classification, service history, financial tracking, and real-time vehicle availability.', zDepth: 20 },
  { icon: CreditCard, title: 'Payment Processing', description: 'Multi-gateway support including Adyen, Worldpay, TriPOS, CenPOS, Hosted Payments, and Direct Bill.', zDepth: 10 },
  { icon: FileText, title: 'Digital Contracts', description: 'Contract search, print, email functionality, and comprehensive agreement management.', zDepth: 30 },
  { icon: Users, title: 'Customer 360°', description: 'Complete profiles with rental history, payment tracking, OCR license scanning, and duplicate detection.', zDepth: 30 },
  { icon: BarChart3, title: 'Analytics Dashboard', description: '15+ real-time KPIs including fleet status, revenue trends, utilization, and conversion rates.', zDepth: 10 },
  { icon: Shield, title: 'Claims Management', description: 'Full claim lifecycle with multi-vehicle tracking, expense reconciliation, and repair order integration.', zDepth: 20 },
  { icon: Settings, title: 'Enterprise Config', description: 'Multi-location support, role-based access control, and 20+ configurable system areas.', zDepth: 10 },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation with split feel
      gsap.fromTo(headerRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (card) {
          // Enhanced card entrance: 3D flip with stagger
          gsap.fromTo(card,
            { rotateY: 90, opacity: 0, scale: 0.8 },
            {
              rotateY: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: i * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              }
            }
          );

          // Enhanced icon entrance: bounce in with overshoot
          const icon = card.querySelector('.feature-icon');
          if (icon) {
            gsap.fromTo(icon,
              { scale: 0, rotation: -45 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: i * 0.12 + 0.4,
                ease: 'back.out(2)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                }
              }
            );
          }

          // Animate the rotating ring
          const ring = card.querySelector('.icon-ring');
          if (ring) {
            gsap.fromTo(ring,
              { opacity: 0, scale: 0.5 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: i * 0.12 + 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                }
              }
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    gsap.to(card, { rotateX, rotateY, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
  }, []);

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative w-full py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Core Features
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Everything you need to run your rental business
          </h2>
          <p
            className="text-lg max-w-[700px] mx-auto"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            26 integrated modules covering every aspect of rental operations—from
            reservations to payments, fleet management to customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={el => { cardsRef.current[i] = el; }}
              className="group glass-card rounded-2xl p-6 cursor-pointer relative overflow-hidden feature-card-hover"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${feature.zDepth}px)`,
                willChange: 'transform',
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative z-10">
                {/* Icon container with rotating ring */}
                <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
                  {/* Rotating ring around icon */}
                  <div
                    className="icon-ring absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      border: '2px dashed color-mix(in srgb, var(--theme-accent) 30%, transparent)',
                      animation: 'spin-slow 12s linear infinite',
                    }}
                  />
                  {/* Secondary ring, counter-rotating — appears on hover */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      border: '1px solid color-mix(in srgb, var(--theme-accent) 50%, transparent)',
                      animation: 'spin-slow-reverse 8s linear infinite',
                      transition: 'opacity 0.5s ease',
                    }}
                  />
                  {/* Icon — no background, just the icon */}
                  <div className="feature-icon w-12 h-12 flex items-center justify-center relative z-10">
                    <feature.icon
                      className="w-6 h-6 group-hover:animate-bounce-subtle"
                      style={{
                        color: 'var(--theme-accent)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                <h3
                  className="font-heading text-xl font-semibold mb-3"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframe styles for rotating rings and bounce */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .group:hover .group-hover\\:animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
