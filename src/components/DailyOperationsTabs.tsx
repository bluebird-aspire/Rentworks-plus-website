import { Car, MessageSquare, CreditCard, Smartphone, Check } from 'lucide-react';
import { useState } from 'react';

export function DailyOperationsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      icon: Car,
      title: 'Auto Rental System',
      description: 'Streamline your entire rental workflow—from first quote to vehicle return—using one car rental management system.',
      visual: 'rental'
    },
    {
      icon: MessageSquare,
      title: 'CAREN (AI Operator)',
      description: 'Your always-on digital assistant for rental operations and customer support.',
      visual: 'ai'
    },
    {
      icon: CreditCard,
      title: 'Payments',
      description: 'Secure, flexible payment processing designed for vehicle rental businesses.',
      visual: 'payments'
    },
    {
      icon: Smartphone,
      title: 'Smart Res Planner',
      description: 'A visual reservation planner that lets you manage bookings and vehicles in a calendar timeline.',
      visual: 'mobile'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            Day-to-Day Essentials
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Daily Operations & Customer Experience Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential tools that streamline your day-to-day operations while delivering exceptional customer experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Tabbed List */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#007A55] text-white shadow-xl' 
                      : 'bg-[#F4F5F7] text-[#081E32] hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive ? 'bg-white/20' : 'bg-white'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#007A55]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl mb-2 ${isActive ? 'text-white' : 'text-[#081E32]'}`}>
                        {item.title}
                      </h3>
                      {isActive && (
                        <p className="text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Visual based on active tab */}
          <div className="bg-[#F4F5F7] rounded-2xl p-8 shadow-xl">
            {/* Auto Rental System Visual */}
            {activeTab === 0 && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[#081E32]">Vehicle Agreement</h4>
                  <span className="text-sm bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-[#F4F5F7] rounded-lg">
                    <span className="text-gray-700">2024 Toyota RAV4</span>
                    <span className="text-[#007A55]">$89/day</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#F4F5F7] rounded-lg">
                    <span className="text-gray-700">Customer: John Smith</span>
                    <span className="text-gray-500">3 days</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button className="bg-[#007A55] text-white py-3 px-6 rounded-lg hover:bg-[#006644] transition-all">
                    Check In
                  </button>
                  <button className="border-2 border-[#007A55] text-[#007A55] py-3 px-6 rounded-lg hover:bg-[#007A55]/5 transition-all">
                    Check Out
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Digital signature', 'Damage photos', 'Insurance verified'].map((tag, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full text-sm">
                      <Check className="w-4 h-4" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Alexa AI Visual */}
            {activeTab === 1 && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {/* Top Section - AI Status */}
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[#081E32]">AI Phone Operator</h4>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#007A55] rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Active 24/7</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Left - Voice Operator Card */}
                  <div className="bg-gradient-to-br from-[#D4E5E0] to-[#B8D9CE] rounded-2xl p-6 relative h-48">
                    {/* Waveform Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg width="100%" height="60" viewBox="0 0 300 60" className="w-full">
                        {[...Array(30)].map((_, i) => {
                          const height = Math.random() * 40 + 10;
                          const y = (60 - height) / 2;
                          return (
                            <rect
                              key={i}
                              x={i * 10}
                              y={y}
                              width="5"
                              height={height}
                              fill="#007A55"
                              rx="2"
                              className="animate-pulse"
                              style={{
                                animationDelay: `${i * 0.05}s`,
                                animationDuration: '1.5s'
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>

                    {/* Operator Icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                        <svg className="w-8 h-8 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <span className="text-[#081E32] text-sm">CAREN AI</span>
                      <span className="text-xs text-[#081E32]/60">Handling calls</span>
                    </div>
                  </div>

                  {/* Right - Analytics Compact */}
                  <div className="bg-[#F4F5F7] rounded-2xl p-6 h-48">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">Bookings Analytics</span>
                      <button className="text-xs px-2 py-1 rounded bg-white text-[#081E32] border border-gray-200">
                        Week ▼
                      </button>
                    </div>

                    {/* Mini Chart */}
                    <div className="relative h-24 mb-3">
                      <svg viewBox="0 0 300 80" className="w-full h-full">
                        {/* Area under curve */}
                        <path
                          d="M 0 60 Q 40 55, 75 45 T 150 30 T 225 35 T 300 25 L 300 80 L 0 80 Z"
                          fill="#007A55"
                          opacity="0.1"
                        />
                        {/* Main line */}
                        <path
                          d="M 0 60 Q 40 55, 75 45 T 150 30 T 225 35 T 300 25"
                          stroke="#007A55"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Data point */}
                        <circle cx="150" cy="30" r="4" fill="#007A55" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl text-[#007A55]">234</div>
                        <div className="text-xs text-gray-500">Total Bookings</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#007A55] bg-[#007A55]/10 px-2 py-1 rounded">+18%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#F4F5F7] rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Calls Today</div>
                    <div className="text-2xl text-[#081E32]">127</div>
                  </div>
                  <div className="bg-[#F4F5F7] rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Avg. Duration</div>
                    <div className="text-2xl text-[#081E32]">3.2m</div>
                  </div>
                  <div className="bg-[#F4F5F7] rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Success Rate</div>
                    <div className="text-2xl text-[#007A55]">94%</div>
                  </div>
                  <div className="bg-[#F4F5F7] rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Bookings Made</div>
                    <div className="text-2xl text-[#007A55]">89</div>
                  </div>
                </div>
              </div>
            )}

            {/* Payments Visual */}
            {activeTab === 2 && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[#081E32]">Payment Processing</h4>
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    PCI-Compliant & Secure
                  </span>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4 mb-6">
                  <div className="border-2 border-[#007A55] rounded-lg p-4 bg-[#007A55]/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-[#007A55]" />
                        <span className="text-[#081E32]">Card Payment</span>
                      </div>
                      <Check className="w-5 h-5 text-[#007A55]" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {['Visa', 'Mastercard', 'Amex', 'Discover'].map((card) => (
                        <div key={card} className="bg-white rounded p-2 text-center text-xs text-gray-600 border border-gray-200">
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#007A55] transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <span className="text-[#081E32]">Direct Debit</span>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#007A55] transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <span className="text-[#081E32]">Pay by Link</span>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#007A55] transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <span className="text-[#081E32]">Cash / Check</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4F5F7] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Transaction Fee</span>
                    <span className="text-[#081E32]">$2.50</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Processing Time</span>
                    <span className="text-[#007A55]">Instant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Security</span>
                    <span className="text-green-600">PCI DSS Compliant</span>
                  </div>
                </div>
              </div>
            )}

            {/* Smart Res Planner Visual */}
            {activeTab === 3 && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[#081E32]">Reservation Planner</h4>
                  <span className="text-sm bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full">
                    Calendar View
                  </span>
                </div>

                {/* Calendar Grid Mockup - Compact */}
                <div className="bg-[#F4F5F7] rounded-lg p-3 mb-4">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-5 gap-1 mb-2">
                    <div className="text-[8px] text-gray-500 font-medium">Vehicle</div>
                    <div className="text-[8px] text-gray-600 text-center">12/2</div>
                    <div className="text-[8px] text-gray-600 text-center">12/3</div>
                    <div className="text-[8px] text-gray-600 text-center">12/4</div>
                    <div className="text-[8px] text-gray-600 text-center">12/5</div>
                  </div>

                  {/* Vehicle Rows - Only 3 rows to keep compact */}
                  <div className="space-y-1">
                    {/* A-101 */}
                    <div className="grid grid-cols-5 gap-1 items-center">
                      <div className="bg-white rounded px-1.5 py-1">
                        <p className="text-[8px] text-[#081E32] font-medium">A-101</p>
                      </div>
                      <div className="col-span-2 bg-[#007A55] rounded px-1.5 py-1">
                        <p className="text-[7px] text-white font-medium">RES-001</p>
                      </div>
                      <div className="col-span-2"></div>
                    </div>

                    {/* A-102 */}
                    <div className="grid grid-cols-5 gap-1 items-center">
                      <div className="bg-white rounded px-1.5 py-1">
                        <p className="text-[8px] text-[#081E32] font-medium">A-102</p>
                      </div>
                      <div></div>
                      <div className="col-span-2 bg-blue-500 rounded px-1.5 py-1">
                        <p className="text-[7px] text-white font-medium">RA-245</p>
                      </div>
                      <div></div>
                    </div>

                    {/* A-103 */}
                    <div className="grid grid-cols-5 gap-1 items-center">
                      <div className="bg-white rounded px-1.5 py-1">
                        <p className="text-[8px] text-[#081E32] font-medium">A-103</p>
                      </div>
                      <div className="bg-red-500 rounded px-1.5 py-1">
                        <p className="text-[7px] text-white font-medium">RA-189</p>
                      </div>
                      <div className="col-span-3"></div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className="flex items-center justify-center gap-2 bg-[#007A55] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#006644] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Reservation
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#007A55] to-[#00A575] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI Auto-Assign
                  </button>
                </div>

                {/* Stats */}
                <div className="bg-[#F4F5F7] rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xl text-[#007A55]">24</p>
                      <p className="text-xs text-gray-600">Active</p>
                    </div>
                    <div>
                      <p className="text-xl text-orange-600">2</p>
                      <p className="text-xs text-gray-600">Unassigned</p>
                    </div>
                    <div>
                      <p className="text-xl text-red-600">1</p>
                      <p className="text-xs text-gray-600">Conflicts</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
