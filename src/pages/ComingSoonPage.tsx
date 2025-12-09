import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#007A55]/5 via-white to-[#007A55]/5 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Logo/Brand */}
        <div className="relative z-10">
          <div className="inline-block bg-[#007A55] text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-lg">
            RentWorks Plus
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#007A55]" />
            <span>Something Amazing is Coming</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#081E32] leading-tight">
            We're Launching Soon
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
            We're putting the finishing touches on our new website. Stay tuned for updates and be the first to experience the future of car rental management.
          </p>

          {/* Countdown or Info */}
          <div className="flex items-center justify-center gap-2 text-gray-500 mt-8">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Stay tuned for updates</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative z-10 mt-16 flex justify-center gap-4">
          <div className="w-2 h-2 bg-[#007A55] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-[#007A55] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-[#007A55] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}

