import { ImageWithFallback } from './figma/ImageWithFallback';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FeatureGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const previews = [
    {
      title: 'Dashboard UI',
      description: 'Real-time analytics and fleet monitoring',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDE0OTc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Mobile App',
      description: 'Manage rentals on the go',
      image:
        'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MjQ1MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'AI Vehicle Inspection',
      description: 'Automated damage detection',
      image:
        'https://images.unsplash.com/photo-1668172692593-962bce37d539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnNwZWN0aW9uJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzY0MTUyMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Real-time Fleet Tracking',
      description: 'GPS monitoring and route optimization',
      image:
        'https://images.unsplash.com/photo-1562993610-121a6b465200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncHMlMjBtYXAlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc2NDI0OTkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= previews.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, previews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= previews.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? previews.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-[#081E32] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-sm text-[#007A55] mb-4">
            <span className="animate-wave">∿∿∿</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Feature Previews</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore the AI-powered tools that help you automate, optimize, and scale your rental
            operations.
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {previews.map((preview, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="group relative overflow-hidden aspect-[16/9] cursor-pointer">
                  <ImageWithFallback
                    src={preview.image}
                    alt={preview.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E32] via-[#081E32]/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

                  {/* Hover Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <div className="w-16 h-16 bg-[#007A55] rounded-full flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-3xl mb-2">{preview.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {preview.description}
                    </p>
                  </div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 border-4 border-[#007A55] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {previews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#007A55] w-8' : 'bg-gray-600 hover:bg-[#007A55]/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
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
        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}
