import { ReactNode, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '../Router';

interface PlatformHeroProps {
  icon: ReactNode;
  badge?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  mockupImage?: string;
  mockupAlt?: string;
}

export function PlatformHero({
  icon,
  badge,
  title,
  subtitle,
  ctaText = "Book a Demo",
  ctaLink = "#",
  mockupImage,
  mockupAlt = "Platform mockup"
}: PlatformHeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white overflow-hidden">
      {/* Parallax Background Blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Animated */}
          <div className="animate-fade-in-left">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007A55] rounded-2xl mb-6">
              {icon}
            </div>

            {/* Optional Badge */}
            {badge && (
              <div className="inline-block mb-4 animate-slide-in-left">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  {badge}
                </div>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#007A55] hover:bg-[#006644] rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl font-medium transition-all duration-300 border-2 border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Visual - Animated */}
          {mockupImage && (
            <div className="animate-fade-in-right">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#007A55] opacity-20 blur-3xl rounded-3xl" />

                {/* Mockup Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl">
                  <img
                    src={mockupImage}
                    alt={mockupAlt}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
