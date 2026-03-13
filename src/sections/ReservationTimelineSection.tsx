import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  FileText,
  Clock,
  CheckCircle,
  Car,
  RotateCcw,
  AlertTriangle,
  Layers,
  ClipboardCheck,
  XCircle,
  CalendarCheck,
  FileSignature,
} from 'lucide-react';

const reservationSteps = [
  { id: 'quote', label: 'Quote', icon: FileText, description: 'Initial quote created' },
  { id: 'pending', label: 'Pending', icon: Clock, description: 'Awaiting confirmation' },
  { id: 'confirmed', label: 'Confirmed', icon: CheckCircle, description: 'Reservation confirmed' },
  { id: 'checkout', label: 'Check-Out', icon: Car, description: 'Vehicle handed over' },
  { id: 'on-rent', label: 'On Rent', icon: RotateCcw, description: 'Rental in progress' },
  { id: 'checkin', label: 'Check-In', icon: CheckCircle, description: 'Vehicle returned' },
  { id: 'closed', label: 'Closed', icon: CheckCircle, description: 'Rental completed' },
];

const leftFeatures = [
  { icon: AlertTriangle, title: 'Conflict Detection', description: 'Flag scheduling overlaps automatically.' },
  { icon: Layers, title: 'Multi-step Workflows', description: 'Guided check-out and check-in.' },
  { icon: ClipboardCheck, title: 'Inspection Monitoring', description: 'Photo-based vehicle inspections.' },
];

const rightFeatures = [
  { icon: XCircle, title: 'Cancel / Void', description: 'Cancel at any stage with reasons.' },
  { icon: CalendarCheck, title: 'Real-time Availability', description: 'Live fleet availability instantly.' },
  { icon: FileSignature, title: 'Auto Contracts', description: 'Generate contracts automatically.' },
];

const AUTO_CYCLE_INTERVAL = 1500;

export default function ReservationTimelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % reservationSteps.length);
    }, AUTO_CYCLE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-header',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );

      gsap.fromTo('.timeline-track',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );

      gsap.fromTo('.timeline-step',
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );

      gsap.fromTo('.side-feature-left',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline-center', start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      gsap.fromTo('.side-feature-right',
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline-center', start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const progressPercent = (activeStep / (reservationSteps.length - 1)) * 100;

  const FeatureCard = ({ feature, className }: { feature: typeof leftFeatures[0]; className: string }) => (
    <div
      className={`${className} glass-card rounded-xl p-4 transition-all duration-300 hover:-translate-y-1`}
      style={{ borderLeft: '3px solid var(--theme-accent)' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 12%, transparent)' }}
        >
          <feature.icon className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-0.5" style={{ color: 'var(--theme-text)' }}>
            {feature.title}
          </h4>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="reservations" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="timeline-header text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              borderColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Reservation Lifecycle
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Complete reservation workflow
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            From quote to close — manage every stage of the rental lifecycle with real-time status
            tracking and conflict detection.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="mb-16"
        >
          <div className="relative py-6 md:py-10">
            <div
              className="timeline-track absolute left-[7%] right-[7%] h-[3px] rounded-full origin-left top-[18px] md:top-[28px]"
              style={{ backgroundColor: 'color-mix(in srgb, var(--theme-text-muted) 20%, transparent)' }}
            />
            <div
              className="absolute h-[3px] rounded-full origin-left transition-all duration-700 ease-in-out top-[18px] md:top-[28px]"
              style={{
                left: '7%',
                width: `${progressPercent * 0.86}%`,
                background: 'linear-gradient(90deg, var(--theme-accent), color-mix(in srgb, var(--theme-accent) 60%, #fff))',
              }}
            />
            <div className="relative flex justify-between items-start px-[4%]">
              {reservationSteps.map((step, i) => {
                const isCompleted = i < activeStep;
                const isCurrent = i === activeStep;
                const isUpcoming = i > activeStep;
                return (
                  <button
                    key={step.id}
                    className="timeline-step relative flex flex-col items-center group cursor-pointer"
                    style={{ width: `${100 / reservationSteps.length}%` }}
                    onClick={() => setActiveStep(i)}
                  >
                    {isCurrent && (
                      <div
                        className="absolute -top-4 md:-top-7 left-1/2 -translate-x-1/2 px-1 md:px-3 py-px md:py-0.5 rounded-full text-[6px] md:text-[10px] font-bold tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: 'var(--theme-accent)', color: 'var(--theme-accent-fg)' }}
                      >
                        {step.label.toUpperCase()}
                      </div>
                    )}
                    <div
                      className="relative w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background: isCurrent
                          ? 'var(--theme-accent)'
                          : isCompleted
                            ? 'color-mix(in srgb, var(--theme-accent) 80%, transparent)'
                            : 'color-mix(in srgb, var(--theme-text-muted) 12%, transparent)',
                        border: isCurrent
                          ? '3px solid var(--theme-accent)'
                          : isCompleted
                            ? '2px solid var(--theme-accent)'
                            : '2px solid color-mix(in srgb, var(--theme-text-muted) 25%, transparent)',
                        boxShadow: isCurrent ? '0 0 24px color-mix(in srgb, var(--theme-accent) 40%, transparent)' : 'none',
                        transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      <step.icon
                        className="w-4 h-4 md:w-6 md:h-6 transition-colors duration-300"
                        style={{ color: isCurrent || isCompleted ? 'var(--theme-accent-fg)' : 'var(--theme-text-muted)' }}
                      />
                    </div>
                    <span
                      className="mt-1 md:mt-3 text-[7px] md:text-sm font-medium transition-colors duration-300"
                      style={{ color: isUpcoming ? 'var(--theme-text-muted)' : 'var(--theme-text)' }}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center detail + floating side features */}
        <div className="timeline-center relative">
          {/* 3-column layout: left features | center detail | right features */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
            {/* Left features */}
            <div className="hidden lg:flex flex-col gap-5">
              {leftFeatures.map((feature, i) => (
                <div key={i} style={{ transform: `translateY(${(i - 1) * 12}px)` }}>
                  <FeatureCard feature={feature} className="side-feature-left" />
                </div>
              ))}
            </div>

            {/* Center: active step detail */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                  style={{ backgroundColor: 'var(--theme-accent)' }}
                >
                  {(() => {
                    const Icon = reservationSteps[activeStep].icon;
                    return <Icon className="w-8 h-8" style={{ color: 'var(--theme-accent-fg)' }} />;
                  })()}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold" style={{ color: 'var(--theme-text)' }}>
                    {reservationSteps[activeStep].label}
                  </h3>
                  <p style={{ color: 'var(--theme-text-muted)' }}>
                    {reservationSteps[activeStep].description}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: 'var(--theme-text-muted)' }}>Progress</span>
                  <span style={{ color: 'var(--theme-accent)' }}>
                    {Math.round(((activeStep + 1) / reservationSteps.length) * 100)}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--theme-text-muted) 15%, transparent)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-in-out"
                    style={{
                      width: `${((activeStep + 1) / reservationSteps.length) * 100}%`,
                      background: 'linear-gradient(90deg, var(--theme-accent), color-mix(in srgb, var(--theme-accent) 60%, #fff))',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right features */}
            <div className="hidden lg:flex flex-col gap-5">
              {rightFeatures.map((feature, i) => (
                <div key={i} style={{ transform: `translateY(${(i - 1) * 12}px)` }}>
                  <FeatureCard feature={feature} className="side-feature-right" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: show all features below */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[...leftFeatures, ...rightFeatures].map((feature, i) => (
              <FeatureCard key={i} feature={feature} className="side-feature-left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
