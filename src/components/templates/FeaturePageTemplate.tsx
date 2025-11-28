import { Check, XCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from '../Router';
import { useEffect, useState } from 'react';

interface FeaturePageProps {
  hero: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
  painPoints: string[];
  solutions: string[];
  howItWorks: { step: number; title: string; description: string }[];
  benefits: { metric: string; label: string }[];
  mockupImage: string;
}

export function FeaturePageTemplate({ hero, painPoints, solutions, howItWorks, benefits, mockupImage }: FeaturePageProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white overflow-hidden">
        {/* Parallax Background Blob */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center text-white mb-6">
                {hero.icon}
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl font-semibold">{hero.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <Link href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 border-2 border-white/20 flex items-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-[#007A55] opacity-20 blur-3xl rounded-3xl" />
                <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <ImageWithFallback
                    src={mockupImage}
                    alt={hero.title}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out;
          }
          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out;
          }
        `}</style>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-[#081E32] mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-600" />
                Current Pain Points
              </h3>
              <div className="space-y-4">
                {painPoints.map((pain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#007A55] shadow-lg">
              <h3 className="text-[#081E32] mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-[#007A55]" />
                How RentWorks Solves This
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#007A55] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#081E32] mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center text-white text-2xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-[#081E32] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200">
                    <ArrowRight className="absolute -right-2 -top-2.5 w-5 h-5 text-[#007A55]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#081E32] mb-4 text-3xl lg:text-4xl font-semibold">Key Benefits</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007A55] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-[#007A55] mb-2 animate-pulse-metric">{benefit.metric}</div>
                <div className="text-gray-700 font-medium">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-metric {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-float-in {
            animation: float-in 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-pulse-metric {
            animation: pulse-metric 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Experience {hero.title}?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See it in action with a personalized demo tailored to your business needs.
          </p>
          <button className="bg-[#007A55] text-white px-10 py-5 rounded hover:bg-[#006644] transition-colors text-lg">
            Schedule Your Demo
          </button>
        </div>
      </section>
    </div>
  );
}
