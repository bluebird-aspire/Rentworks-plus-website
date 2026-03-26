import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Calendar, Car, CreditCard, FileText, Users, BarChart3, Shield, Settings } from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Reservations', description: 'Full reservation lifecycle with conflict detection, availability tracking, and open reservation management.', detail: 'The reservation module handles the complete booking lifecycle from initial quote through confirmation. It includes real-time conflict detection to prevent double-bookings, availability tracking across vehicle classes, and open reservation management for walk-in customers. Staff can search, filter, and sort reservations with paginated data tables, view detailed reservation records, and manage booking modifications.', zDepth: 10 },
  { icon: Car, title: 'Fleet Management', description: 'ACRISS classification, service history, financial tracking, and real-time vehicle availability.', detail: 'RentWorksPlus fleet management provides a complete vehicle catalog with ACRISS industry-standard classification codes. Each vehicle profile includes service history, financial data such as cost and depreciation, equipment assignments, and fuel type tracking. The fleet status dashboard gives managers real-time visibility into vehicle availability across locations, while advanced search filters help staff quickly locate specific vehicles by class, status, or location.', zDepth: 20 },
  { icon: CreditCard, title: 'Payment Processing', description: 'Adyen gateway integration with Hosted Payments, Direct Bill, and multiple payment methods.', detail: 'The payment module integrates with Adyen plus hosted payment solutions and direct billing options. It provides real-time payment status tracking, automatic error recovery, and support for both card-present and card-not-present transactions. Operators can configure payment settings independently per location for maximum flexibility.', zDepth: 10 },
  { icon: FileText, title: 'Digital Contracts', description: 'Contract search, print, email functionality, and comprehensive agreement management.', detail: 'Digital contract management streamlines rental agreement workflows with searchable contract records, print and email functionality, and detailed contract summaries. The visual form builder allows operators to design custom rental agreement templates with drag-and-drop fields, conditional logic rules, e-signature capture, and data source binding — all without any coding.', zDepth: 30 },
  { icon: Users, title: 'Customer 360°', description: 'Complete profiles with rental history, payment tracking, OCR license scanning, and duplicate detection.', detail: 'Customer 360-degree profiles consolidate all renter information into a single tabbed interface covering basic info, addresses, rental history, payment history, notes, documents, and audit logs. The system includes OCR license scanning for fast onboarding, duplicate detection across records, configurable alert types including credit and warning notes, and lifetime value statistics for each customer.', zDepth: 30 },
  { icon: BarChart3, title: 'Analytics Dashboard', description: '15+ real-time KPIs including fleet status, revenue trends, utilization, and conversion rates.', detail: 'The analytics dashboard tracks 15+ operational KPIs in real time, including fleet status, operational load, class availability, agreement status, conversion rates, equipment usage, maintenance alerts, no-show rates, revenue trends, top add-ons, revenue by vehicle class, top revenue vehicles, and revenue pipeline. These metrics help managers make informed decisions about fleet sizing, pricing, and resource allocation.', zDepth: 10 },
  { icon: Shield, title: 'Claims Management', description: 'Full claim lifecycle with multi-vehicle tracking, expense reconciliation, and repair order integration.', detail: 'End-to-end claims management uses a nine-tab interface covering overview, contacts, vehicles, financial summary, repair orders, documents, history, expenses, and payments. Each claim can track multiple vehicles and contacts, with expense reconciliation workflows, repair order creation and status tracking, document management with checklists, and a complete audit trail recording every change.', zDepth: 20 },
  { icon: Settings, title: 'Enterprise Config', description: 'Multi-location support, role-based access control, and 20+ configurable system areas.', detail: 'Enterprise configuration supports multi-location operations where each branch maintains its own settings for vehicle categories, fuel pricing, rate rules, seasonal pricing, notification preferences, and counter positions. The system includes 20+ configurable areas, terminal-specific settings per workstation, and centralized user management with role-based permissions that can vary by location.', zDepth: 10 },
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
        <div ref={headerRef} className="text-center mb-16 opacity-0">
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
            What Does RentWorksPlus Include?
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
              className="group glass-card rounded-2xl p-6 cursor-pointer relative overflow-hidden feature-card-hover opacity-0"
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
                {/* Extended description for SEO crawlers — visually hidden but in DOM */}
                <p className="sr-only">{feature.detail}</p>
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
