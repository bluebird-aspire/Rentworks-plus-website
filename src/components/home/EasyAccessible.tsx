import { GraduationCap, Globe } from 'lucide-react';

export function EasyAccessible() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Easy to Learn */}
          <div className="bg-[#F4F5F7] rounded-2xl p-10 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#007A55] rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl text-[#081E32] mb-4">Easy to Learn</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              New agents can learn essential tasks in hours, not weeks. Guided flows, smart defaults, and inline tips reduce training time by up to 50%.
            </p>
          </div>

          {/* Accessible Anywhere */}
          <div className="bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl p-10 text-white hover:shadow-xl transition-all relative overflow-hidden">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl mb-4">Access Your Rental Business Anywhere, Anytime</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Full car rental system in your browser. Works on modern desktop and laptop devices. Fully responsive interface on tablets and phones. Perform check-in/check-out and inspections on the go. Real-time updates across all devices.
            </p>

            {/* Device Icons */}
            <div className="flex items-end space-x-4 mt-8">
              {/* Laptop */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <svg className="w-16 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 64 48">
                  <rect x="4" y="4" width="56" height="36" rx="2" strokeWidth="2"/>
                  <line x1="0" y1="44" x2="64" y2="44" strokeWidth="2"/>
                  <rect x="20" y="8" width="24" height="16" rx="1" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              {/* Tablet */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <svg className="w-10 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 40 48">
                  <rect x="4" y="2" width="32" height="44" rx="2" strokeWidth="2"/>
                  <circle cx="20" cy="40" r="2" fill="currentColor"/>
                  <rect x="8" y="6" width="24" height="28" rx="1" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              {/* Phone */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <svg className="w-8 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 32 48">
                  <rect x="4" y="2" width="24" height="44" rx="2" strokeWidth="2"/>
                  <circle cx="16" cy="40" r="2" fill="currentColor"/>
                  <rect x="8" y="6" width="16" height="28" rx="1" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
