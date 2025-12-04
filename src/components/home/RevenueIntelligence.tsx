import { Zap, Settings, BarChart3, Calendar } from 'lucide-react';

export function RevenueIntelligence() {
  const features = [
    {
      icon: Zap,
      title: 'Dynamic Pricing Engine',
      description: 'AI-driven pricing that adjusts rates by demand, seasonality, and channel performance.'
    },
    {
      icon: Settings,
      title: 'Rate Configuration Studio',
      description: 'Flexible rate tables for daily, weekly, monthly, corporate, and long-term rentals.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Dashboard KPIs',
      description: 'Real-time dashboards for revenue per vehicle, utilization, occupancy, and branch performance.'
    },
    {
      icon: Calendar,
      title: 'Reservation Planner',
      description: 'A visual planning calendar to balance demand, reduce idle days, and avoid overbooking.'
    }
  ];

  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            Revenue Growth
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            AI Revenue Intelligence & Fleet Visibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools to maximize your revenue potential, control discounts, and keep every vehicle working for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="space-y-6">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Revenue Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#007A55]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center text-xs bg-[#007A55]/10 text-[#007A55] px-2 py-1 rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +12.5%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Revenue</p>
                <p className="text-3xl text-[#081E32] mb-1">$45.2K</p>
                <p className="text-xs text-gray-400">Last 30 days</p>
              </div>

              {/* Utilization Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#007A55]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center text-xs bg-[#007A55]/10 text-[#007A55] px-2 py-1 rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +5.2%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Utilization</p>
                <p className="text-3xl text-[#081E32] mb-1">87%</p>
                <p className="text-xs text-gray-400">Fleet efficiency</p>
              </div>

              {/* Avg Daily Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#007A55]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center text-xs bg-[#007A55]/10 text-[#007A55] px-2 py-1 rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +8.3%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">RPD</p>
                <p className="text-3xl text-[#081E32] mb-1">$89</p>
                <p className="text-xs text-gray-400">Revenue Per Day</p>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-xl text-[#081E32] mb-1">Revenue Analytics</h4>
                  <p className="text-sm text-gray-500">Weekly performance overview</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-[#007A55] text-white rounded-lg text-sm hover:bg-[#006644] transition-colors">
                    This Month
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    Last Month
                  </button>
                </div>
              </div>

              {/* Smooth Line Chart */}
              <div className="space-y-4">
                <div className="flex">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between h-56 pr-4 text-xs text-gray-400">
                    <span>$10k</span>
                    <span>$7.5k</span>
                    <span>$5k</span>
                    <span>$2.5k</span>
                    <span>$0</span>
                  </div>
                  
                  {/* Chart area with smooth lines */}
                  <div className="flex-1 h-56 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-gray-100"></div>
                      ))}
                    </div>

                    {/* SVG Line Chart */}
                    <svg className="w-full h-full" viewBox="0 0 350 224" preserveAspectRatio="none">
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#007A55', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#007A55', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                      
                      {/* Area fill */}
                      <path
                        d="M 0 134 Q 25 110, 50 90 T 100 75 T 150 45 T 200 67 T 250 22 T 300 45 L 300 224 L 0 224 Z"
                        fill="url(#lineGradient)"
                      />
                      
                      {/* Line */}
                      <path
                        d="M 0 134 Q 25 110, 50 90 T 100 75 T 150 45 T 200 67 T 250 22 T 300 45"
                        fill="none"
                        stroke="#007A55"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      
                      {/* Data points */}
                      {[
                        { x: 0, y: 134 },
                        { x: 50, y: 90 },
                        { x: 100, y: 75 },
                        { x: 150, y: 45 },
                        { x: 200, y: 67 },
                        { x: 250, y: 22 },
                        { x: 300, y: 45 }
                      ].map((point, i) => (
                        <g key={i}>
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r="5"
                            fill="white"
                            stroke="#007A55"
                            strokeWidth="3"
                            className="cursor-pointer hover:r-7 transition-all"
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Tooltip indicator */}
                    <div className="absolute top-8 right-12 bg-[#007A55] text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                      <div className="flex items-center space-x-2">
                        <span>$9.3k</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500 ml-12 pl-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#007A55] rounded-full"></div>
                    <span className="text-sm text-gray-600">Daily Revenue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007A55] to-[#00A575] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#081E32] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
