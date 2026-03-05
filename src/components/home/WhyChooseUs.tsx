import { Calendar, CreditCard, Car, Wrench, DollarSign, Users, ClipboardList } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    { icon: Calendar, label: 'Reservations', color: '#007A55' },
    { icon: CreditCard, label: 'Payments', color: '#007A55' },
    { icon: Car, label: 'Fleet Management', color: '#007A55' },
    { icon: Wrench, label: 'Maintenance', color: '#007A55' },
    { icon: DollarSign, label: 'Accounting', color: '#007A55' },
    { icon: Users, label: 'Customer Management', color: '#007A55' },
    { icon: ClipboardList, label: 'Res Planner', color: '#007A55' },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            All-in-One Platform
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4 max-w-4xl mx-auto leading-tight">
            Everything You Need to Run Your Rental Business in One Place
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            RentWorksPlus+ unifies all aspects of your car rental operation—from reservations to
            fleet management—into a single, powerful platform.
          </p>
        </div>

        {/* Circular Features Display */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border border-dashed border-[#007A55]/20"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-[#007A55]/10"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[#007A55]/10"></div>
          </div>

          {/* Center Platform Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="w-32 h-32 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-3xl shadow-2xl flex flex-col items-center justify-center animate-pulse-slow">
              <span className="text-white text-3xl">R+</span>
              <span className="text-white/80 text-xs mt-1 text-[16px]">Platform</span>
            </div>
          </div>

          {/* Orbiting Feature Badges */}
          {features.map((feature, index) => {
            const angle = (index * 360) / features.length - 90; // Start from top
            const radius = 250; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 z-20"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div
                  className="relative group cursor-pointer animate-float-feature"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#007A55] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10 scale-110"></div>

                  {/* Feature Badge */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all min-w-[160px]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 bg-[#007A55]/10 rounded-xl flex items-center justify-center group-hover:bg-[#007A55] transition-all">
                        <Icon className="w-7 h-7 text-[#007A55] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm text-[#081E32] text-center leading-tight">
                        {feature.label}
                      </span>
                    </div>
                  </div>

                  {/* Connecting Line to Center */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: `${Math.abs(radius * 2)}px`,
                      height: `${Math.abs(radius * 2)}px`,
                      transform: `translate(-50%, -50%)`,
                      zIndex: -1,
                    }}
                  >
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% - ${x}px)`}
                      y2={`calc(50% - ${y}px)`}
                      stroke="#007A55"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.2"
                      className="group-hover:opacity-40 transition-opacity"
                    />
                  </svg>
                </div>
              </div>
            );
          })}

          {/* Animated Connection Dots */}
          {features.map((_, index) => {
            const angle = (index * 360) / features.length - 90;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={`dot-${index}`}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#007A55] rounded-full animate-pulse-dot"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDelay: `${index * 0.3}s`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#F4F5F7] rounded-2xl p-6">
            <p className="text-4xl text-[#007A55] mb-2">7 Modules</p>
            <p className="text-gray-600">Integrated Solutions</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-2xl p-6">
            <p className="text-4xl text-[#007A55] mb-2">1 Platform</p>
            <p className="text-gray-600">Unified Experience</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-2xl p-6">
            <p className="text-4xl text-[#007A55] mb-2">100%</p>
            <p className="text-gray-600">Cloud-Based</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-feature {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.95;
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.3;
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5);
          }
        }

        .animate-float-feature {
          animation: float-feature 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
