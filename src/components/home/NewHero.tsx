import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BookingStepper } from '../BookingStepper';

export function NewHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white pt-8 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Pill Label */}
            <div className="inline-block">
              <div className="bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm animate-slide-in-left">
                Car Rental Management Software
              </div>
            </div>

            <h1 className="lg:text-6xl text-[#081E32] leading-tight text-[48px]">
              Modern Car Rental Management Software for Growing Fleets
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Run your entire car rental operation from one connected platform. Manage reservations, vehicles, pricing, and customers in real time—with smart automation that reduces manual work and increases revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#007A55] text-white px-8 py-4 rounded-lg hover:bg-[#006644] transition-all transform hover:scale-105 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="flex items-center justify-center text-[#007A55] hover:text-[#006644] transition-colors group border-2 border-[#007A55] px-8 py-4 rounded-lg hover:bg-[#007A55]/5">
                <span className="mr-2">Book a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Card - Vehicles */}
              <BookingStepper />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
      `}</style>
    </section>
  );
}
