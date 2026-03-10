import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Star, Crown, Trophy, Check, Gift, TrendingUp, Settings, Layers } from 'lucide-react';

const tiers = [
  {
    name: 'Silver',
    icon: Star,
    points: 500,
    pointsLabel: '500',
    color: '#94A3B8',
    gradient: 'linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)',
    perks: ['Priority booking', '5% rental discount', 'Early access to deals'],
  },
  {
    name: 'Gold',
    icon: Crown,
    points: 2000,
    pointsLabel: '2,000',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)',
    featured: true,
    perks: ['Free vehicle upgrades', '10% rental discount', 'Priority support', 'Bonus points on referrals'],
  },
  {
    name: 'Platinum',
    icon: Trophy,
    points: 5000,
    pointsLabel: '5,000',
    color: '#A78BFA',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 50%, #A78BFA 100%)',
    perks: ['VIP service', '15% rental discount', 'Exclusive offers', 'Dedicated account manager'],
  },
];

const loyaltyFeatures = [
  { label: 'Configurable tiers', icon: Layers },
  { label: 'Point tracking', icon: TrendingUp },
  { label: 'Rewards management', icon: Gift },
  { label: 'Program settings', icon: Settings },
];

export default function LoyaltyProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeTier = 1;

  // 3D tilt handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 15,
      rotateX: -y * 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseLeave = useCallback((idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.loyalty-header',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );

      // Tier cards stagger entrance
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { rotateY: 90, opacity: 0, scale: 0.8 },
          {
            rotateY: 0, opacity: 1, scale: 1,
            duration: 0.8, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
          }
        );
      });

      // Feature pills entrance
      gsap.fromTo(
        '.loyalty-feature-pill',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 55%', toggleActions: 'play none none none' },
        }
      );

      // Orbiting particles around featured card
      const particles = sectionRef.current?.querySelectorAll('.tier-particle');
      particles?.forEach((p, i) => {
        gsap.to(p, {
          rotation: 360,
          duration: 8 + i * 3,
          repeat: -1,
          ease: 'none',
          transformOrigin: '0 0',
        });
        gsap.to(p.querySelector('.particle-dot'), {
          scale: 1.5,
          opacity: 0.3,
          duration: 1.5 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Shimmer sweep on featured card
      gsap.fromTo(
        '.shimmer-sweep',
        { left: '-100%' },
        {
          left: '200%',
          duration: 3,
          repeat: -1,
          repeatDelay: 4,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="loyalty" className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, color-mix(in srgb, ${tiers[activeTier].color} 8%, transparent) 0%, transparent 70%)`,
          transition: 'background 1.5s ease',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Header */}
        <div className="loyalty-header text-center mb-14">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Loyalty &amp; Rewards
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Reward your repeat customers
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Build customer loyalty with configurable tiers, point tracking, and rewards
            that keep renters coming back.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 items-start" style={{ perspective: '1200px' }}>
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const isFeatured = !!tier.featured;
            return (
              <div
                key={tier.name}
                ref={el => { cardsRef.current[i] = el; }}
                className={`relative rounded-2xl p-6 ${isFeatured ? 'md:-mt-4 md:pb-8' : ''}`}
                style={{
                  background: 'var(--theme-surface)',
                  backdropFilter: 'blur(12px)',
                  transformStyle: 'preserve-3d',
                  border: isFeatured ? 'none' : '1px solid var(--theme-surface-border)',
                }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {/* Animated border for featured */}
                {isFeatured && (
                  <>
                    <div
                      className="absolute -inset-[2px] rounded-2xl -z-10"
                      style={{
                        background: tier.gradient,
                        opacity: 0.6,
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl -z-0 overflow-hidden"
                      style={{ background: 'var(--theme-surface)' }}
                    >
                      {/* Shimmer sweep */}
                      <div
                        className="shimmer-sweep absolute top-0 w-1/2 h-full -z-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${tier.color} 10%, transparent), transparent)`,
                        }}
                      />
                    </div>
                  </>
                )}

                {/* Featured badge */}
                {isFeatured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold z-10"
                    style={{
                      background: tier.gradient,
                      color: '#1a1a2e',
                      boxShadow: `0 4px 15px color-mix(in srgb, ${tier.color} 40%, transparent)`,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Card content (above shimmer) */}
                <div className="relative z-10">
                  {/* Icon with glow ring */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${tier.color} 20%, transparent), color-mix(in srgb, ${tier.color} 8%, transparent))`,
                          boxShadow: activeTier === i ? `0 0 20px color-mix(in srgb, ${tier.color} 30%, transparent)` : 'none',
                          transition: 'box-shadow 1s ease',
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: tier.color }} />
                      </div>
                      {/* Orbiting particles for featured */}
                      {isFeatured && (
                        <>
                          <div className="tier-particle absolute top-1/2 left-1/2" style={{ width: 0, height: 0 }}>
                            <div className="particle-dot absolute rounded-full" style={{ width: 4, height: 4, background: tier.color, left: 28, top: -2 }} />
                          </div>
                          <div className="tier-particle absolute top-1/2 left-1/2" style={{ width: 0, height: 0 }}>
                            <div className="particle-dot absolute rounded-full" style={{ width: 3, height: 3, background: tier.color, left: -32, top: -1.5 }} />
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold font-mono" style={{ color: tier.color }}>
                          {tier.pointsLabel}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>points</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider with gradient */}
                  <div
                    className="w-full h-px mb-5"
                    style={{
                      background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${tier.color} 40%, transparent), transparent)`,
                    }}
                  />

                  {/* Perks */}
                  <ul className="space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, color-mix(in srgb, ${tier.color} 25%, transparent), color-mix(in srgb, ${tier.color} 10%, transparent))`,
                          }}
                        >
                          <Check className="w-3 h-3" style={{ color: tier.color }} />
                        </div>
                        <span className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {loyaltyFeatures.map((feature, i) => {
            const FIcon = feature.icon;
            return (
              <div
                key={i}
                className="loyalty-feature-pill flex items-center gap-2 px-5 py-2.5 rounded-full text-sm cursor-default"
                style={{
                  background: 'var(--theme-surface)',
                  border: '1px solid var(--theme-surface-border)',
                  color: 'var(--theme-text)',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
                }}
              >
                <FIcon className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
                <span>{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
