export function TrustedBy() {
  const partners = [
    'Enterprise Rentals',
    'FleetPro',
    'CityDrive',
    'Premium Auto',
    'DriveCity',
    'AutoHub',
    'RentEasy',
    'FleetMaster',
    'CarGo',
    'Mobility Plus'
  ];

  return (
    <section className="bg-[#F4F5F7] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-[#081E32] text-2xl mb-12">
          Clients around the world
        </h3>
        
        {/* Scrolling Animation - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-rtl gap-8">
            {/* First set */}
            {partners.map((partner, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-44 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center px-6">
                  <span className="text-gray-400 uppercase tracking-wide whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-44 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center px-6">
                  <span className="text-gray-400 uppercase tracking-wide whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {partners.map((partner, index) => (
              <div 
                key={`third-${index}`}
                className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-44 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center px-6">
                  <span className="text-gray-400 uppercase tracking-wide whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS - Left to Right */}
      <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
