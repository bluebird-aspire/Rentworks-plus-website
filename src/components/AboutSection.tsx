import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState, useRef } from 'react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ revenue: 0, hours: 0, satisfaction: 0, uptime: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'revenue', value: 25, suffix: '%', label: 'Revenue Growth', prefix: '18–' },
    { key: 'hours', value: 40, suffix: '+ Hours', label: 'Saved Weekly', prefix: '' },
    {
      key: 'satisfaction',
      value: 35,
      suffix: '% Higher',
      label: 'Customer Satisfaction',
      prefix: '',
    },
    { key: 'uptime', value: 99.9, suffix: '%', label: 'Platform Uptime', prefix: '' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [stat.key]: current }));
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633118948215-480c9d78fc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwd29ya2luZyUyMGxhcHRvcHN8ZW58MXx8fHwxNzY0MjQ5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team working together"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 animate-slide-in-down">
                <div className="bg-[#007A55] text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <svg
                    className="w-6 h-6 inline-block mr-2 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-sm uppercase tracking-wide">About the Platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <div className="flex items-center space-x-2 text-sm text-[#081E32] mb-4">
              <span className="animate-wave">∿∿∿</span>
              <span className="uppercase tracking-wide">About RentWorksPlus+</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-6 leading-tight">
              Transforming the Future of Rental Intelligence
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              RentWorksPlus+ is built to empower mobility businesses with AI-driven automation,
              predictive insights, and operational excellence. Designed for speed, accuracy, and
              simplicity.
            </p>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className="bg-[#F4F5F7] rounded-xl p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(0, 122, 85, 0.03) 0%, transparent 70%)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Animated background bar */}
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-[#007A55] transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  />

                  <p className="text-3xl text-[#081E32] mb-2 tabular-nums">
                    {stat.prefix}
                    {stat.key === 'uptime'
                      ? counters[stat.key].toFixed(1)
                      : Math.round(counters[stat.key])}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</p>

                  {/* Hover effect icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-[#007A55] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.2); }
        }
        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }
        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out 0.5s both;
        }
      `}</style>
    </section>
  );
}
