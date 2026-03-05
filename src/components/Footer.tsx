import { MapPin, Mail, Phone, Search, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import logo from 'figma:asset/82b6f4b94e67a09f71951541678541a2738fc1b4.png';

export function Footer() {
  const links = {
    services: [
      { label: 'First service', href: '#' },
      { label: 'Next service', href: '#' },
      { label: 'Another service', href: '#' },
      { label: 'Last service', href: '#' },
    ],
    themeInfo: [
      { label: 'Get the theme', href: '#' },
      { label: 'WebMan Design', href: '#' },
      { label: 'Support Forum', href: '#' },
      { label: 'User manual', href: '#' },
    ],
  };

  const locations = [
    { city: 'London, GB', address: '123 Street Name, Cityname', zip: '56789, COUNTRY' },
    { city: 'New York, USA', address: '123 Street Name, Cityname', zip: '56789, COUNTRY' },
  ];

  return (
    <footer className="bg-[#F4F5F7] pt-16 pb-8">
      {/* Scrolling Text Banner */}
      <div className="bg-[#081E32] text-white py-8 mb-16 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block text-4xl md:text-6xl tracking-wider px-8">
            Driven by experience. Redefined by intelligence. * Driven by experience. Redefined by
            intelligence. *
          </span>
          <span className="inline-block text-4xl md:text-6xl tracking-wider px-8">
            Driven by experience. Redefined by intelligence. * Driven by experience. Redefined by
            intelligence. *
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <img src={logo} alt="RentWorksPlus+" className="h-12 mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              RentWorksPlus+ is accessibility ready multi-purpose website builder. No coding
              required!
            </p>
            <button className="bg-[#007A55] text-white px-6 py-3 rounded hover:bg-[#006644] transition-colors uppercase tracking-wide">
              Contact
            </button>
          </div>

          {/* Search Bar */}
          <div className="md:col-span-4 flex items-start justify-center">
            <div className="w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded focus:outline-none focus:border-[#007A55]"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-[#007A55] text-white rounded-r hover:bg-[#006644] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:col-span-4 flex items-start justify-end">
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#007A55] rounded-full flex items-center justify-center text-white hover:bg-[#006644] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007A55] rounded-full flex items-center justify-center text-white hover:bg-[#006644] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007A55] rounded-full flex items-center justify-center text-white hover:bg-[#006644] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007A55] rounded-full flex items-center justify-center text-white hover:bg-[#006644] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Links and Locations Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pt-12 border-t border-gray-300">
          {/* Services */}
          <div>
            <h4 className="text-[#081E32] mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#007A55] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Info */}
          <div>
            <h4 className="text-[#081E32] mb-6 uppercase tracking-wide">Theme Info</h4>
            <ul className="space-y-3">
              {links.themeInfo.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#007A55] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h4 className="text-[#081E32] mb-6 uppercase tracking-wide">Locations</h4>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="text-gray-600">
                  <p className="text-[#081E32] mb-1">{location.city}</p>
                  <p className="text-sm">{location.address}</p>
                  <p className="text-sm">{location.zip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-[#081E32] rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs">©</span>
            </div>
            <p className="text-gray-600 text-sm">
              Copyright © 2025 •{' '}
              <a href="#" className="text-[#007A55] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CSS for scrolling animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
      `}</style>
    </footer>
  );
}
