import { ArrowRight, Zap, Cog, TrendingUp } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function FeatureCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Efficiency',
      description:
        'Intelligent algorithms optimize fleet usage, predict maintenance, and reduce downtime.',
      link: 'Learn more',
      href: '#',
      color: 'from-[#007A55] to-[#00A575]',
    },
    {
      icon: Cog,
      title: 'Complete Automation',
      description:
        'Automate bookings, payments, agreements, check-in/out, and rental workflows end-to-end.',
      link: 'Explore automation',
      href: '#',
      color: 'from-[#007A55] to-[#006644]',
    },
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description:
        'Real-time dashboards and predictive analytics that drive smarter decisions and higher revenue.',
      link: 'View insights',
      href: '#',
      color: 'from-[#00A575] to-[#007A55]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#007A55] to-[#006644] py-20 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <Icon
                    className="w-7 h-7 text-white animate-icon-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </div>
                <h3 className="text-[#081E32] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <a
                  href={feature.href}
                  className="inline-flex items-center text-[#007A55] hover:text-[#006644] transition-colors group"
                >
                  <span className="mr-2 relative">
                    {feature.link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007A55] group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
