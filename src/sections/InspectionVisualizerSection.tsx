import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Camera, Check, Search } from 'lucide-react';
import inspectionScreenshot from '../assets/inspection-screenshot.png';

const damageTypes = [
  { name: 'Scratch', color: '#EAB308' },
  { name: 'Dent', color: '#F97316' },
  { name: 'Missing', color: '#EF4444' },
];

const inspectionFeatures = [
  { title: 'Photo Documentation', description: 'Capture high-quality photos of vehicle condition at check-in and check-out.', icon: Camera },
  { title: 'Vehicle Zones', description: 'Comprehensive mapping of vehicle parts for precise damage location.', icon: Search },
  { title: 'Manual Inspection', description: 'Staff can complete detailed inspections with guided workflows.', icon: Check },
];

export default function InspectionVisualizerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.inspection-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo('.vehicle-diagram',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vehicle-diagram',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo('.damage-type',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.damage-types',
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo('.inspection-feature',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.inspection-features',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="inspection" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="inspection-header text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              borderColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Vehicle Inspection
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Digital inspection system
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Photo-based vehicle inspection with damage mapping across 60+ vehicle zones.
            Customers can complete self-service inspections via the portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="vehicle-diagram relative">
            <div
              className="rounded-3xl overflow-hidden border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--theme-accent) 5%, transparent)',
                borderColor: 'color-mix(in srgb, var(--theme-accent) 15%, transparent)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src={inspectionScreenshot}
                alt="RentWorksPlus vehicle inspection system screenshot"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>

          <div>
            <div className="damage-types mb-8">
              <h3 className="font-heading text-lg font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
                Damage Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {damageTypes.map((type) => (
                  <div
                    key={type.name}
                    className="damage-type flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{
                      backgroundColor: `${type.color}15`,
                      border: `1px solid ${type.color}30`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }} />
                    <span className="text-sm font-medium" style={{ color: type.color }}>{type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="inspection-features space-y-4">
              {inspectionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="inspection-feature flex items-start gap-4 p-4 rounded-xl glass-card hover:border-mint/30 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-colors"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
                    }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: 'var(--theme-accent)' }} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{ color: 'var(--theme-text)' }}>{feature.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
