import { Car, Calendar, Users, BarChart3 } from 'lucide-react';

export function MainFeatures() {
  const features = [
    {
      icon: Car,
      title: 'Fleet Management',
      description:
        'AI-optimized fleet tracking, maintenance forecasting, and utilization analytics.',
      accent: '#007A55',
    },
    {
      icon: Calendar,
      title: 'Smart Booking',
      description: 'Intelligent booking engine with dynamic pricing and demand prediction.',
      accent: '#007A55',
    },
    {
      icon: Users,
      title: 'Customer Portal',
      description: 'Personalized customer experience, multi-language support, digital agreements.',
      accent: '#007A55',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Predictive analytics, market trends, operational dashboards.',
      accent: '#007A55',
    },
  ];

  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Wave Decorator */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-sm text-[#081E32] mb-4">
            <span>∿∿∿</span>
            <span className="uppercase tracking-wide">Main Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4 max-w-4xl mx-auto leading-tight">
            Premium multi-purpose full site editing block theme for car rental businesses.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-[#007A55]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#007A55] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#081E32] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
