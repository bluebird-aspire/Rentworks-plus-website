import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FleetTypes() {
  const fleetTypes = [
    {
      title: 'Independent Car Rental Agencies',
      description: 'Ideal for independent or regional brands. Control over pricing, reservations, and customer experience.',
      image: 'https://images.unsplash.com/photo-1744360817433-0d9386ddb9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjYXIlMjByZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzY0Mjc0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Multi-Brand Networks',
      description: 'Operate multiple brands under one platform. Maintain unique branding, policies, and rate structures per brand.',
      image: 'https://images.unsplash.com/photo-1664800529890-68258dc4ccf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZsZWV0JTIwdmVoaWNsZXN8ZW58MXx8fHwxNzY0Mjc0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Scooter & Bike Rental',
      description: 'Track smaller vehicles and micro-mobility fleets. Manage battery cycles, short-term rentals, and quick turnovers.',
      image: 'https://images.unsplash.com/photo-1728039190626-ceea378d0419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlcXVpcG1lbnQlMjByZW50YWx8ZW58MXx8fHwxNzY0Mjc0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Corporate & Long-Term Fleets',
      description: 'Manage long-term contracts and employee vehicles. Automate billing, renewals, and compliance.',
      image: 'https://images.unsplash.com/photo-1585937169521-4428971aaab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2ZWhpY2xlJTIwZmxlZXR8ZW58MXx8fHwxNzY0Mjc0MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Insurance Rental Fleets',
      description: 'Handle replacement rentals during claim periods. Coordinate with insurers and track claim-related rentals.',
      image: 'https://images.unsplash.com/photo-1711921345010-d1147f78db35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc2NDI3NDEwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            Rental Businesses Supported
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Car Rental Software for Every Fleet Type
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetTypes.map((type, index) => (
            <div 
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#007A55] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081E32]/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-[#081E32] mb-3 group-hover:text-[#007A55] transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <button className="inline-flex items-center text-[#007A55] hover:text-[#006644] transition-colors group/link">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
