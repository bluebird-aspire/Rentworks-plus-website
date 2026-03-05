import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductPackages() {
  const packages = [
    {
      title: 'Built for Speed on All Devices',
      letter: 'N',
      subtitle:
        'o coding, no page builders. Build beautifully designed websites faster with native tools.',
      image:
        'https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NDIzODQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Full Site Editing',
        '200+ content patterns',
        '35+ predesigned page layouts',
        'Creative & useful block styles',
        'WooCommerce shop support',
      ],
      cta: 'Get It Now!',
      ctaColor: 'bg-[#007A55]',
      icon: '🚀',
    },
    {
      title: 'Fair Product with No Lock-in Effect',
      letter: 'M',
      subtitle:
        'anage patterns and enable only the ones you need. Speed up the build process, unlock your potential!',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDE0OTc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Fair product & service',
        'SEO optimized',
        'Barrier-less, inclusive',
        'Universal WordPress theme',
        'Privacy compliant',
      ],
      cta: 'Purchase',
      ctaColor: 'bg-[#007A55]',
      icon: '🤝',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#F4F5F7] to-[#E8EAF0] py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#081E32]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Wave Decorator */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-sm text-[#081E32] mb-4">
            <span>∿∿∿</span>
            <span className="uppercase tracking-wide">Packages Example</span>
            <span>∿∿∿</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Create stunning, responsive websites faster with{' '}
            <span className="border-b-4 border-[#007A55]">RentWorksPlus+</span>
          </h2>
        </div>

        <div className="space-y-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-3xl text-[#081E32] mb-4">{pkg.title}</h3>
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 border-2 border-[#081E32] rounded flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-2xl">{pkg.letter}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-2">
                      <span className="text-[#081E32]">{pkg.letter.toLowerCase()}</span>
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Decorative divider */}
                  <div className="border-t border-dashed border-gray-300 my-6" />

                  {/* Icon and Features */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#007A55]/20 to-[#007A55]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl">{pkg.icon}</span>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-[#007A55] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`${pkg.ctaColor} text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all uppercase tracking-wide`}
                  >
                    {pkg.cta}
                  </button>
                </div>

                {/* Right Image/Visual */}
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <ImageWithFallback src={pkg.image} alt={pkg.title} className="w-full h-auto" />
                    {/* Decorative plant overlay like Josephine */}
                    <div className="absolute -bottom-4 -right-4 w-48 h-48 opacity-20">
                      <svg viewBox="0 0 200 200" className="w-full h-full text-[#007A55]">
                        <path
                          fill="currentColor"
                          d="M100,50 Q120,70 100,100 Q80,70 100,50 M100,100 Q130,120 120,150 Q110,130 100,100 M100,100 Q70,120 80,150 Q90,130 100,100"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
