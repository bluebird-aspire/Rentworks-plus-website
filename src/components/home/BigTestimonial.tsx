import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function BigTestimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "RentWorksPlus+ completely changed how we manage our rental branches. The automation and smart tools save us more than 15 hours every week, and our revenue grew by 28% in just six months.",
      name: "Sarah Mitchell",
      role: "Owner",
      company: "Premier Rentals",
      image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    },
    {
      quote: "The AI pricing engine alone has increased our revenue per vehicle by 18%. Combined with the automated workflows, we've cut our admin time in half while growing our fleet.",
      name: "Marcus Chen",
      role: "CEO",
      company: "FleetPro Rentals",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    }
  ];

  const reviews = [
    {
      platform: 'Capterra',
      rating: 4.7,
      total: 5,
      logo: '/capterra-logo.png'
    },
    {
      platform: 'Software Advice',
      rating: 4.7,
      total: 5,
      logo: '/software-advice-logo.png'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Carousel */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-[#007A55] to-[#006644] rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

            {/* Quote Icon - Top Right */}
            <div className="absolute top-8 right-8">
              <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            <div className="relative">
              <div className="flex transition-opacity duration-500">
                <div className="w-full">
                  <p className="text-white text-2xl md:text-3xl leading-relaxed mb-12 max-w-4xl">
                    {testimonials[currentSlide].quote}
                  </p>
                  
                  {/* Reviewer Info with Profile Picture */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-lg object-cover ring-2 ring-white/30"
                    />
                    <div className="text-white">
                      <p className="text-xl mb-1">{testimonials[currentSlide].name}</p>
                      <p className="text-white/80 text-sm">{testimonials[currentSlide].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-white' : 'w-8 bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <div className="absolute bottom-8 right-8 flex space-x-3">
                <button
                  onClick={() => setCurrentSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="w-12 h-12 bg-[#081E32] hover:bg-[#0a2438] rounded-lg flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setCurrentSlide(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                  className="w-12 h-12 bg-[#081E32] hover:bg-[#0a2438] rounded-lg flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Review Badges - Modern Design */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#007A55]/30 group"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Platform Logo */}
                <div className="flex items-center justify-center h-16 w-full">
                  <img
                    src={review.logo}
                    alt={review.platform}
                    className="max-h-12 max-w-[180px] object-contain transition-transform group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<p class="text-[#081E32] text-xl font-semibold">${review.platform}</p>`;
                    }}
                  />
                </div>

                {/* Rating Score - Large and Prominent */}
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-bold text-[#007A55] mb-2">{review.rating}</p>
                  <p className="text-sm text-gray-500 mb-3">out of {review.total}</p>
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 transition-all ${
                        i < Math.floor(review.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 fill-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
