import { ArrowRight } from 'lucide-react';

export function Integrations() {
  const integrationCategories = [
    // Row 1
    {
      name: 'Airbnb',
      type: 'svg',
      color: '#FF5A5F',
      svg: (
        <>
          <circle cx="50" cy="50" r="35" fill="#FF5A5F" />
          <path d="M50 30 L35 50 L50 65 L65 50 Z" fill="white" />
        </>
      ),
      icon: '🏠',
    },
    {
      name: 'Stripe',
      type: 'svg',
      color: '#635BFF',
      svg: (
        <>
          <rect x="15" y="35" width="70" height="30" rx="5" fill="#635BFF" />
          <path d="M40 45 L45 50 L55 40" stroke="white" strokeWidth="3" fill="none" />
        </>
      ),
      icon: '$',
    },
    {
      name: 'Booking',
      type: 'svg',
      color: '#003580',
      svg: (
        <>
          <rect x="20" y="20" width="60" height="60" rx="8" fill="#003580" />
          <text x="50" y="58" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">
            B
          </text>
        </>
      ),
      icon: 'B',
    },
    {
      name: 'Expedia',
      type: 'svg',
      color: '#FFD200',
      svg: (
        <>
          <circle cx="50" cy="50" r="30" fill="#FFD200" />
          <path d="M35 45 L50 35 L65 45 L50 55 Z" fill="#003D7A" />
        </>
      ),
      icon: '✈️',
    },
    {
      name: 'App Store',
      type: 'svg',
      color: '#0D96F6',
      svg: (
        <>
          <rect x="20" y="20" width="60" height="60" rx="12" fill="#0D96F6" />
          <path d="M35 35 L50 55 M65 35 L50 55 M40 50 L60 50" stroke="white" strokeWidth="3" />
        </>
      ),
      icon: 'A',
    },

    // Row 2
    {
      name: 'Vrbo',
      type: 'svg',
      color: '#0D87D1',
      svg: (
        <>
          <rect x="20" y="25" width="60" height="50" rx="8" fill="#0D87D1" />
          <path d="M30 40 L40 55 L50 40 L60 55 L70 40" stroke="white" strokeWidth="3" fill="none" />
        </>
      ),
      icon: '🏡',
    },
    {
      name: 'Hotels.com',
      type: 'svg',
      color: '#D32F2F',
      svg: (
        <>
          <rect x="15" y="15" width="70" height="70" rx="10" fill="#D32F2F" />
          <text x="50" y="60" fontSize="28" fill="white" textAnchor="middle" fontWeight="bold">
            H
          </text>
        </>
      ),
      icon: 'H',
    },
    {
      name: 'Agoda',
      type: 'svg',
      color: '#F25C05',
      svg: (
        <>
          <circle cx="50" cy="50" r="32" fill="#F25C05" />
          <path d="M38 45 L50 35 L62 45 L50 60 Z" fill="white" />
        </>
      ),
      icon: '🔶',
    },
    {
      name: 'Kayak',
      type: 'svg',
      color: '#FF6B35',
      svg: (
        <>
          <rect x="20" y="30" width="60" height="40" rx="6" fill="#FF6B35" />
          <path d="M30 45 L45 35 L60 45 L45 55 Z" fill="white" />
        </>
      ),
      icon: '🛶',
    },
    {
      name: 'TripAdvisor',
      type: 'svg',
      color: '#34E0A1',
      svg: (
        <>
          <circle cx="35" cy="50" r="18" fill="#34E0A1" />
          <circle cx="65" cy="50" r="18" fill="#34E0A1" />
          <circle cx="35" cy="50" r="10" fill="white" />
          <circle cx="65" cy="50" r="10" fill="white" />
        </>
      ),
      icon: '🦉',
    },

    // Row 3
    {
      name: 'Priceline',
      type: 'svg',
      color: '#0068EF',
      svg: (
        <>
          <rect x="18" y="18" width="64" height="64" rx="10" fill="#0068EF" />
          <text x="50" y="60" fontSize="26" fill="white" textAnchor="middle" fontWeight="bold">
            P
          </text>
        </>
      ),
      icon: 'P',
    },
    {
      name: 'Turo',
      type: 'svg',
      color: '#121214',
      svg: (
        <>
          <circle cx="50" cy="50" r="32" fill="#121214" />
          <path d="M35 50 L50 40 L65 50 L50 60 Z" fill="white" />
        </>
      ),
      icon: '🚗',
    },
    {
      name: 'Rentalcars',
      type: 'svg',
      color: '#FF6C00',
      svg: (
        <>
          <rect x="20" y="28" width="60" height="44" rx="8" fill="#FF6C00" />
          <circle cx="35" cy="58" r="8" fill="white" />
          <circle cx="65" cy="58" r="8" fill="white" />
        </>
      ),
      icon: '🚙',
    },
    {
      name: 'GetYourGuide',
      type: 'svg',
      color: '#FF6F00',
      svg: (
        <>
          <circle cx="50" cy="50" r="30" fill="#FF6F00" />
          <path d="M50 30 L50 50 L65 50" stroke="white" strokeWidth="4" fill="none" />
        </>
      ),
      icon: '🎫',
    },
    {
      name: 'Viator',
      type: 'svg',
      color: '#00AA6C',
      svg: (
        <>
          <rect x="22" y="22" width="56" height="56" rx="28" fill="#00AA6C" />
          <text x="50" y="60" fontSize="28" fill="white" textAnchor="middle" fontWeight="bold">
            V
          </text>
        </>
      ),
      icon: 'V',
    },

    // Row 4
    {
      name: 'CarTrawler',
      type: 'svg',
      color: '#1A73E8',
      svg: (
        <>
          <rect x="20" y="30" width="60" height="40" rx="6" fill="#1A73E8" />
          <circle cx="35" cy="60" r="6" fill="white" />
          <circle cx="65" cy="60" r="6" fill="white" />
        </>
      ),
      icon: '🚘',
    },
    {
      name: 'Skyscanner',
      type: 'svg',
      color: '#00B2D6',
      svg: (
        <>
          <circle cx="50" cy="50" r="32" fill="#00B2D6" />
          <path d="M30 45 L50 35 L70 45 L50 40 Z" fill="white" />
        </>
      ),
      icon: '✈️',
    },
    {
      name: 'Trivago',
      type: 'svg',
      color: '#EB6424',
      svg: (
        <>
          <rect x="20" y="25" width="60" height="50" rx="8" fill="#EB6424" />
          <text x="50" y="58" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">
            T
          </text>
        </>
      ),
      icon: 'T',
    },
    {
      name: 'Hotwire',
      type: 'svg',
      color: '#E4002B',
      svg: (
        <>
          <circle cx="50" cy="50" r="30" fill="#E4002B" />
          <path d="M40 40 L60 40 L50 60 Z" fill="white" />
        </>
      ),
      icon: '🔥',
    },
    {
      name: 'More',
      type: 'svg',
      color: '#007A55',
      svg: (
        <>
          <rect x="25" y="25" width="50" height="50" rx="25" fill="#007A55" />
          <circle cx="35" cy="45" r="3" fill="white" />
          <circle cx="50" cy="45" r="3" fill="white" />
          <circle cx="65" cy="45" r="3" fill="white" />
        </>
      ),
      icon: '•••',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            OTA & Channel Integrations
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Connect with 100+ booking channels and OTA partners
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description Card */}
          <div className="bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-3xl mb-6">Seamless OTA Integration</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Connect RentWorksPlus+ with over 100 third-party solutions from major OTAs like
              Expedia and Booking.com, to payment gateways, accounting systems, telematics
              providers, and marketing platforms—so your rental operation runs like a well-oiled
              machine.
            </p>
            <button className="bg-white text-[#007A55] px-8 py-4 rounded-lg hover:shadow-xl transition-all inline-flex items-center group">
              <span className="mr-2">View All Integrations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right - OTA Integration Logos Grid */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              {integrationCategories.map((integration, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl transition-all cursor-pointer hover:scale-105 animate-float-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {integration.type === 'text' ? (
                        <div className="text-center">
                          <div className="text-2xl mb-1" style={{ color: integration.color }}>
                            {integration.icon}
                          </div>
                          <p className="text-xs text-gray-600">{integration.name}</p>
                        </div>
                      ) : (
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {integration.svg}
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated connecting dots */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#007A55] rounded-full animate-ping-slow opacity-40"></div>
              <div
                className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#007A55] rounded-full animate-ping-slow opacity-40"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#007A55] rounded-full animate-ping-slow opacity-40"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ping-slow {
            0%, 100% {
              opacity: 0.4;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.5);
            }
          }

          .animate-float-in {
            animation: float-in 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-ping-slow {
            animation: ping-slow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
