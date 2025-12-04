import { useState, useEffect } from 'react';
import { BarChart3, Camera, Calendar, Brain, Check, TrendingUp, AlertCircle } from 'lucide-react';

export function BookingStepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const products = [
    {
      id: 1,
      name: 'Smart Dashboard Overview',
      icon: BarChart3,
      color: '#007A55'
    },
    {
      id: 2,
      name: 'Vehicle Inspection Card',
      icon: Camera,
      color: '#007A55'
    },
    {
      id: 3,
      name: 'Reservation Creation Screen',
      icon: Calendar,
      color: '#007A55'
    },
    {
      id: 4,
      name: 'AI Insights Widget',
      icon: Brain,
      color: '#007A55'
    }
  ];

  // Auto-advance animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 4) return 1;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else setCurrentStep(1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else setCurrentStep(4);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10 h-[580px] flex flex-col">
      {/* Product Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((step) => {
          const product = products[step - 1];
          const Icon = product.icon;
          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${
                    currentStep === step
                      ? 'bg-[#007A55] text-white ring-4 ring-[#007A55]/20'
                      : 'bg-[#F4F5F7] text-gray-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs mt-2 text-center transition-colors duration-700 ${currentStep === step ? 'text-[#007A55]' : 'text-gray-400'}`}>
                  {product.name.split(' ')[0]}
                </span>
              </div>
              {step < 4 && (
                <div
                  className={`h-1 flex-1 mx-2 transition-all duration-700 ${
                    currentStep > step ? 'bg-[#007A55]' : 'bg-[#F4F5F7]'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Product Content - Fixed Height */}
      <div className="flex-1 relative overflow-hidden">
        {/* Screen 1: Smart Dashboard Overview */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">Smart Dashboard Overview</h3>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Revenue</span>
                  <TrendingUp className="w-4 h-4 text-[#007A55]" />
                </div>
                <p className="text-2xl text-[#081E32]">$45.2K</p>
                <p className="text-xs text-[#007A55] mt-1">+12.5% ↑</p>
              </div>
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Utilization</span>
                  <BarChart3 className="w-4 h-4 text-[#007A55]" />
                </div>
                <p className="text-2xl text-[#081E32]">87%</p>
                <p className="text-xs text-[#007A55] mt-1">+5.2% ↑</p>
              </div>
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">RPD</span>
                  <TrendingUp className="w-4 h-4 text-[#007A55]" />
                </div>
                <p className="text-2xl text-[#081E32]">$89</p>
                <p className="text-xs text-[#007A55] mt-1">+8.3% ↑</p>
              </div>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-5 flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Fleet Status</span>
                <span className="text-xs bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full">Live</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Available</span>
                  <span className="text-[#007A55] font-medium">23 vehicles</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">On Rental</span>
                  <span className="text-[#081E32] font-medium">47 vehicles</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Maintenance</span>
                  <span className="text-orange-600 font-medium">5 vehicles</span>
                </div>
              </div>
            </div>

            <div className="bg-[#007A55]/10 rounded-lg p-3">
              <p className="text-sm text-[#007A55]">
                💡 Real-time insights across all locations
              </p>
            </div>
          </div>
        </div>

        {/* Screen 2: Vehicle Inspection Card */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">Vehicle Inspection Card</h3>

            <div className="bg-[#F4F5F7] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-[#081E32] font-medium">2024 Toyota RAV4</h4>
                  <p className="text-sm text-gray-500">VIN: JM1BK32F781234567</p>
                </div>
                <span className="bg-[#007A55] text-white text-xs px-3 py-1 rounded-full">Check-In</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-lg p-3 text-center">
                  <Camera className="w-6 h-6 text-[#007A55] mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Front</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <Camera className="w-6 h-6 text-[#007A55] mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Left</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <Camera className="w-6 h-6 text-[#007A55] mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Right</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4 text-[#007A55]" />
                  <span className="text-gray-700">Exterior condition verified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4 text-[#007A55]" />
                  <span className="text-gray-700">Fuel level: Full tank</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4 text-[#007A55]" />
                  <span className="text-gray-700">Mileage: 45,230 miles</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#007A55] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Inspection Status</span>
                <span className="text-[#007A55] font-medium">Complete ✓</span>
              </div>
            </div>

            <div className="bg-[#007A55]/10 rounded-lg p-3">
              <p className="text-sm text-[#007A55]">
                📸 Digital photo capture with damage AI detection
              </p>
            </div>
          </div>
        </div>

        {/* Screen 3: Reservation Creation Screen */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">Reservation Creation</h3>

            <div className="space-y-3">
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Customer</span>
                  <span className="text-xs bg-[#007A55]/10 text-[#007A55] px-2 py-1 rounded-full">Verified</span>
                </div>
                <p className="text-[#081E32] font-medium">John Smith</p>
                <p className="text-sm text-gray-500">john.smith@email.com</p>
              </div>

              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <span className="text-sm text-gray-600 block mb-2">Vehicle Selection</span>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#081E32] font-medium">2024 Honda CR-V</p>
                    <p className="text-sm text-gray-500">Compact SUV</p>
                  </div>
                  <span className="text-lg text-[#007A55]">$69/day</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F4F5F7] rounded-xl p-3">
                  <span className="text-xs text-gray-600 block mb-1">Pick-up</span>
                  <p className="text-[#081E32] text-sm">Dec 15, 2024</p>
                  <p className="text-xs text-gray-500">10:00 AM</p>
                </div>
                <div className="bg-[#F4F5F7] rounded-xl p-3">
                  <span className="text-xs text-gray-600 block mb-1">Return</span>
                  <p className="text-[#081E32] text-sm">Dec 18, 2024</p>
                  <p className="text-xs text-gray-500">10:00 AM</p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#007A55] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total (3 days)</span>
                  <span className="text-2xl text-[#007A55]">$207</span>
                </div>
                <button className="w-full bg-[#007A55] text-white py-2 rounded-lg hover:bg-[#006644] transition-all text-sm">
                  Create Reservation
                </button>
              </div>
            </div>

            <div className="bg-[#007A55]/10 rounded-lg p-3">
              <p className="text-sm text-[#007A55]">
                ⚡ Instant availability check across all branches
              </p>
            </div>
          </div>
        </div>

        {/* Screen 4: AI Insights Widget */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">AI Insights Widget</h3>

            <div className="bg-gradient-to-br from-[#007A55] to-[#006644] rounded-xl p-5 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Brain className="w-6 h-6" />
                <span className="font-medium">CAREN AI Recommendations</span>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Based on current demand and your fleet performance
              </p>
              <div className="space-y-2">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm">🚗 Increase SUV rates by 12% this weekend</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm">💰 Expected revenue impact: +$2,340</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-700 font-medium">Utilization Alert</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                5 vehicles idle for 3+ days. Consider promotional pricing.
              </p>
              <button className="text-sm text-[#007A55] hover:underline">
                View recommendations →
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">AI Accuracy</span>
                <span className="text-[#007A55] font-medium">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#007A55] h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>

            <div className="bg-[#007A55]/10 rounded-lg p-3">
              <p className="text-sm text-[#007A55]">
                🧠 AI-powered pricing and fleet optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <button
          onClick={handleBack}
          className="px-6 py-2 rounded-lg transition-all duration-300 text-[#007A55] hover:bg-[#007A55]/10"
        >
          Back
        </button>

        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                currentStep === step ? 'bg-[#007A55] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 bg-[#007A55] text-white hover:bg-[#006644]"
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}
