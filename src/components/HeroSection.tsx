import { ArrowRight } from 'lucide-react';
import { DashboardVisual } from './DashboardVisual';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F4F5F7] py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[#081E32]/5 to-transparent rounded-full blur-2xl animate-float"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block">
              <div className="flex items-center space-x-2 text-sm text-[#007A55] mb-6 animate-slide-in-left">
                <div className="w-12 h-px bg-[#007A55] animate-expand"></div>
                <span className="uppercase tracking-wide">RentWorksPlus+ AI Platform</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl text-[#081E32] leading-tight">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                AI-POWERED RENTAL
              </span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                MANAGEMENT
              </span>
              <span
                className="block text-[#007A55] animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                REDEFINED BY
              </span>
              <span
                className="block text-[#007A55] animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                INTELLIGENCE
              </span>
            </h1>

            <p
              className="text-lg text-gray-600 max-w-xl animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              Run a smarter, more profitable car rental business with intelligent automation,
              real-time insights, and predictive fleet optimization.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="bg-[#007A55] text-white px-8 py-4 rounded hover:bg-[#006644] transition-all transform hover:scale-105 hover:shadow-xl">
                Book a Demo
              </button>
              <button className="flex items-center justify-center text-[#007A55] hover:text-[#006644] transition-colors group">
                <span className="mr-2">Explore Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Technology Icons */}
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                Technologies Used
              </p>
              <div className="flex items-center space-x-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center hover:border-[#007A55] hover:shadow-lg transition-all transform hover:scale-110 hover:-translate-y-1 animate-bounce-in"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <svg className="w-6 h-6 text-[#081E32]" fill="currentColor" viewBox="0 0 24 24">
                      {index === 0 && (
                        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z" />
                      )}
                      {index === 1 && <rect x="4" y="4" width="7" height="7" rx="1" /> && (
                          <rect x="4" y="13" width="7" height="7" rx="1" />
                        ) && <rect x="13" y="4" width="7" height="7" rx="1" /> && (
                          <rect x="13" y="13" width="7" height="7" rx="1" />
                        )}
                      {index === 2 && <path d="M7 3v18h10V3H7zm8 16H9V5h6v14z" />}
                      {index === 3 && (
                        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                      )}
                      {index === 4 && (
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                      )}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative animate-fade-in-right">
            <DashboardVisual />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 3rem;
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-expand {
          animation: expand 1s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
