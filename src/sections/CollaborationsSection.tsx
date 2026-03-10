import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import selfInspectionLogo from '../assets/self-inspection-logo.png';
import carlaLogo from '../assets/carla-logo.png';
import signifyLogo from '../assets/signify-logo.png';
import valpayLogo from '../assets/valpay-logo.png';

type Partner = {
  name: string;
  description: string;
  color: string;
  image: string;
};

const partners: Partner[] = [
  {
    image: selfInspectionLogo,
    name: 'Self-inspection',
    description:
      'Empower customers to complete vehicle inspections independently through a guided digital workflow.',
    color: '#2EE9A8',
  },
  {
    image: carlaLogo,
    name: 'Carla.ai',
    description:
      'Automate customer inquiries and streamline day-to-day rental operations with an AI-powered assistant.',
    color: '#3B82F6',
  },
  {
    image: signifyLogo,
    name: 'Signify',
    description:
      'Deliver dynamic digital signage content across your rental locations for a modern customer experience.',
    color: '#8B5CF6',
  },
  {
    image: valpayLogo,
    name: 'ValPay',
    description:
      'Process payments seamlessly with integrated payment gateway solutions built for the rental industry.',
    color: '#1A8D6F',
  },
];

export default function CollaborationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="integrations" className="relative w-full py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border:
                '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Integrations &amp; Partners
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Trusted collaborations
          </h2>
          <p
            className="text-lg max-w-[700px] mx-auto"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Extend your platform with partner integrations that enhance the
            rental experience for you and your customers.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer relative"
              style={{
                transition:
                  'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = `0 24px 48px -12px ${partner.color}33`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
              }}
            >
              {/* Gradient top border */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${partner.color}, ${partner.color}88)`,
                }}
              />

              <div className="p-8">
                {/* Icon area */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `${partner.color}15`,
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content */}
                <h3
                  className="font-heading text-xl font-semibold mb-3"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {partner.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {partner.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, ${partner.color}40, ${partner.color}10)`,
                  filter: 'blur(12px)',
                  transition: 'opacity 0.5s ease',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
