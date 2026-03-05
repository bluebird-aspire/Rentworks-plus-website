import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      rating: 5,
      quote:
        "I don't know what could be done better. The design is awesome, the demo import is much better than any other theme, the FSE support including WooCommerce. The ease of setup and the whole experience makes it so much fun to work with. And of course the astonishing & very human. This is a truly outstanding experience!",
      author: 'Sarah Mitchell',
      role: 'CEO, DriveNow Rentals',
    },
    {
      rating: 5,
      quote:
        "Great hybrid theme which gives the developer plenty of options. As I've seen on other WebMan Design themes, I can confirm that the support and bug fixing is fast and gives me the feeling it's done with a personal touch. Also well written documentation. Top product!",
      author: 'David Chen',
      role: 'Operations Director',
    },
    {
      rating: 5,
      quote:
        'Customer support is more than excellent. Five-star rating also for the theme quality, customizability and documentation quality.',
      author: 'Maria Rodriguez',
      role: 'Founder, Luxury Wheels',
    },
    {
      rating: 5,
      quote:
        'A complete transformation of our rental operations. Automation alone saves us 30 hours weekly. The AI predictions are incredibly accurate.',
      author: 'James Wilson',
      role: 'Fleet Manager, EasyRent',
    },
    {
      rating: 5,
      quote:
        "Fleet optimization and pricing recommendations increased our revenue by 22%. Best investment we've made in our business.",
      author: 'Lisa Anderson',
      role: 'Owner, Premium Auto Rentals',
    },
  ];

  const itemsPerSlide = 3;
  const maxSlide = Math.ceil(testimonials.length / itemsPerSlide) - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1668900016730-75a72135f96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NjQyNDA1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/90" />

      {/* Animated decorative spheres */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#007A55] to-[#00A575] rounded-full opacity-60 blur-sm animate-float" />
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-gradient-to-br from-[#007A55] to-[#00A575] rounded-full opacity-40 blur-sm animate-float-delayed" />
      <div className="absolute top-40 left-1/3 w-48 h-48 bg-gradient-to-br from-[#007A55] to-[#00A575] rounded-full opacity-30 blur-xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-sm text-[#081E32] mb-4">
            <span className="animate-wave">∿∿∿</span>
            <span className="uppercase tracking-wide">What Customers Say</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Enough of bragging! Let's hear what <span className="text-[#007A55]">users</span> of
            RentWorksPlus+ have to say...
          </h2>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#007A55] fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <span className="text-6xl text-gray-300 leading-none">"</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{testimonial.quote}</p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[#081E32]">• {testimonial.author.toUpperCase()}</p>
                    {testimonial.role && (
                      <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#007A55] w-8' : 'bg-gray-300 hover:bg-[#007A55]/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes wave {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.2); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
