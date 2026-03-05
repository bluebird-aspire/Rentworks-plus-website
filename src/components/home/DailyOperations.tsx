import { Car, MessageSquare, CreditCard, Smartphone, Check } from 'lucide-react';
import { useState } from 'react';

export function DailyOperations() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      icon: Car,
      title: 'Auto Rental System',
      description: 'End-to-end workflows for reservations, agreements, extensions, and returns.',
    },
    {
      icon: MessageSquare,
      title: 'Alexa (AI Operator)',
      description:
        'Your AI assistant that answers calls, handles chats, and creates bookings 24/7.',
    },
    {
      icon: CreditCard,
      title: 'RENTALL Payments',
      description:
        'Integrated payments supporting cash, card present, pay by link, direct debit, check, and hosted payment flows.',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Experience',
      description:
        'A responsive web application so customers and staff can use RentWorksPlus+ from any device.',
    },
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
            Essential tools that streamline your day-to-day operations while delivering exceptional
            customer experiences.
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
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? 'bg-white/20' : 'bg-white'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#007A55]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl mb-2 ${isActive ? 'text-white' : 'text-[#081E32]'}`}>
                        {item.title}
                      </h3>
                      {isActive && (
                        <p className="text-white/90 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Visual */}
          <div className="bg-[#F4F5F7] rounded-2xl p-8 shadow-xl">
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

              {/* Floating Tags */}
              <div className="flex flex-wrap gap-2">
                {['Digital signature', 'Damage photos', 'Insurance verified'].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full text-sm"
                  >
                    <Check className="w-4 h-4" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
