import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CreditCard, Check, Shield, Zap, Globe, Building2 } from 'lucide-react';

const paymentGateways = [
  { name: 'Adyen', description: 'Global payment platform', icon: Globe, color: '#0ABF53' },
  { name: 'Worldpay', description: 'Enterprise payment processing', icon: CreditCard, color: '#E4002B' },
  { name: 'TriPOS', description: 'Point-of-sale integration', icon: Zap, color: '#FF6B00' },
  { name: 'CenPOS', description: 'Secure payment gateway', icon: Shield, color: '#00A8E8' },
  { name: 'Hosted Payments', description: 'Secure hosted checkout', icon: Globe, color: '#7C3AED' },
  { name: 'Direct Bill', description: 'Corporate account billing', icon: Building2, color: '#F59E0B' },
];

const leftFeatures = [
  'Real-time payment status tracking',
  'Error handling and recovery flows',
  'Multiple payment method support',
];

const rightFeatures = [
  'Hosted payment page options',
  'Corporate account billing (Direct Bill)',
  'Amount calculation and display',
];

function getGatewayPosition(index: number, total: number, radius: number) {
  const angle = (index * 360) / total - 90;
  const rad = (angle * Math.PI) / 180;
  return { x: 200 + radius * Math.cos(rad), y: 200 + radius * Math.sin(rad), angle };
}

function FeatureItem({ text, className }: { text: string; className: string }) {
  return (
    <div
      className={`${className} flex items-center gap-3 p-4 rounded-xl glass-card transition-all duration-300 hover:-translate-y-0.5`}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }}
      >
        <Check className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
      </div>
      <span className="text-sm" style={{ color: 'var(--theme-text)' }}>{text}</span>
    </div>
  );
}

export default function PaymentConstellationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.payment-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(centerRef.current, { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: constellationRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.gateway-node', { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: constellationRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.connection-line', { strokeDashoffset: 200 }, {
        strokeDashoffset: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: constellationRef.current, start: 'top 70%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.pay-feature-left', { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: constellationRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.pay-feature-right', { x: 30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: constellationRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const svgRadius = 140;

  return (
    <section ref={sectionRef} id="payments" className="relative w-full py-24 md:py-32 overflow-hidden">
      <style>{`
        @keyframes center-hub-pulse {
          0%, 100% { box-shadow: 0 0 20px color-mix(in srgb, var(--theme-accent) 30%, transparent), 0 0 40px color-mix(in srgb, var(--theme-accent) 20%, transparent), 0 0 60px color-mix(in srgb, var(--theme-accent) 10%, transparent); }
          50% { box-shadow: 0 0 30px color-mix(in srgb, var(--theme-accent) 50%, transparent), 0 0 60px color-mix(in srgb, var(--theme-accent) 35%, transparent), 0 0 90px color-mix(in srgb, var(--theme-accent) 20%, transparent); }
        }
        .center-hub-glow { animation: center-hub-pulse 2s ease-in-out infinite; }
        .pulse-dot-glow { filter: drop-shadow(0 0 4px var(--theme-accent)) drop-shadow(0 0 8px var(--theme-accent)); }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="payment-header text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              borderWidth: '1px', borderStyle: 'solid',
              borderColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Payment Processing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
            Flexible payment solutions
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Process payments securely with support for multiple gateways.
            Real-time status tracking, error recovery, and hosted payment options.
          </p>
        </div>

        {/* 3-column layout: features | constellation | features */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
          {/* Left features */}
          <div className="hidden lg:flex flex-col gap-4">
            {leftFeatures.map((f, i) => (
              <div key={i} style={{ transform: `translateY(${(i - 1) * 10}px)` }}>
                <FeatureItem text={f} className="pay-feature-left" />
              </div>
            ))}
          </div>

          {/* Center: constellation */}
          <div ref={constellationRef} className="relative h-[400px] md:h-[500px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="pulse-dot-gradient">
                  <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="1" />
                  <stop offset="60%" stopColor="var(--theme-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {paymentGateways.map((_, i) => {
                const { x: x2, y: y2 } = getGatewayPosition(i, paymentGateways.length, svgRadius);
                const pathId = `connection-path-${i}`;
                const pathD = `M200,200 L${x2},${y2}`;
                const animDelay = `${i * 0.4}s`;
                const animDuration = '2.4s';
                return (
                  <g key={i}>
                    <line className="connection-line" x1="200" y1="200" x2={x2} y2={y2}
                      stroke="color-mix(in srgb, var(--theme-accent) 30%, transparent)" strokeWidth="2"
                      strokeDasharray="200" strokeDashoffset="200" />
                    <path id={pathId} d={pathD} fill="none" stroke="none" />
                    <circle r="5" fill="url(#pulse-dot-gradient)" className="pulse-dot-glow" opacity="0.9">
                      <animateMotion dur={animDuration} repeatCount="indefinite" begin={animDelay}>
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                      <animate attributeName="r" values="3;6;3" dur={animDuration} repeatCount="indefinite" begin={animDelay} />
                      <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur={animDuration} repeatCount="indefinite" begin={animDelay} />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Center hub */}
            <div
              ref={centerRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full flex items-center justify-center center-hub-glow"
              style={{ backgroundColor: 'var(--theme-bg)', borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--theme-accent)' }}
            >
              <CreditCard className="w-10 h-10" style={{ color: 'var(--theme-accent)' }} />
            </div>

            {/* Gateway nodes */}
            {paymentGateways.map((gateway, i) => {
              const angle = (i * 360) / paymentGateways.length - 90;
              const radius = 35;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              return (
                <div key={gateway.name} className="gateway-node absolute z-10"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex flex-col items-center justify-center gap-1 hover:scale-110 transition-transform cursor-pointer"
                    style={{ borderColor: `${gateway.color}40` }}>
                    <gateway.icon className="w-6 h-6" style={{ color: gateway.color }} />
                    <span className="text-[10px]" style={{ color: 'var(--theme-text-muted)' }}>{gateway.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right features */}
          <div className="hidden lg:flex flex-col gap-4">
            {rightFeatures.map((f, i) => (
              <div key={i} style={{ transform: `translateY(${(i - 1) * 10}px)` }}>
                <FeatureItem text={f} className="pay-feature-right" />
              </div>
            ))}
            {/* Enterprise security card */}
            <div
              className="pay-feature-right mt-2 p-4 rounded-xl flex items-center gap-3"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--theme-accent) 5%, transparent)',
                border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }}>
                <Shield className="w-5 h-5" style={{ color: 'var(--theme-accent)' }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--theme-text)' }}>Enterprise Security</p>
                <p className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>Secure multi-gateway processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: all features below */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {[...leftFeatures, ...rightFeatures].map((f, i) => (
            <FeatureItem key={i} text={f} className="pay-feature-left" />
          ))}
        </div>
      </div>
    </section>
  );
}
