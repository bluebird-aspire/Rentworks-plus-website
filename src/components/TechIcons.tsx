import { Brain, Cloud, Radio, Boxes } from 'lucide-react';

export function TechIcons() {
  const features = [
    {
      icon: Brain,
      title: 'AI Intelligence',
      description:
        'Machine learning algorithms optimize pricing and fleet management automatically.',
      link: 'Learn More →',
    },
    {
      icon: Cloud,
      title: 'Cloud-based',
      description: 'Access your rental business from anywhere with secure cloud infrastructure.',
      link: 'View Infrastructure →',
    },
    {
      icon: Radio,
      title: 'IoT-ready',
      description: 'Connect with vehicle sensors and telematics for real-time fleet monitoring.',
      link: 'Explore IoT →',
    },
    {
      icon: Boxes,
      title: 'API-first',
      description: 'Seamlessly integrate with your existing tools and third-party services.',
      link: 'API Documentation →',
    },
  ];

  return (
    <section className="bg-[#081E32] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007A55] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <a
                  href="#"
                  className="text-[#007A55] text-sm hover:text-[#00A575] transition-colors"
                >
                  {feature.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
