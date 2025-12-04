import { Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CustomerStories() {
  const mainStory = {
    title: '82% reduction in no-shows and much more predictable revenue',
    stats: ['CityDrive Rentals', 'Automated reminders', 'Forecasting engine'],
    image: 'https://images.unsplash.com/photo-1633118948215-480c9d78fc24?w=800'
  };

  const secondaryStories = [
    {
      title: '35% increase in fleet utilization and significantly faster daily operations',
      company: 'Premier Auto Rentals',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
    },
    {
      title: '28% uplift in rental revenue and better control of margins',
      company: 'Elite Car Hire',
      image: 'https://images.unsplash.com/photo-1683200899447-d398198ed197?w=600'
    }
  ];

  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Our customers say it the best
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story - Large Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src={mainStory.image}
                alt={mainStory.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081E32]/80 via-[#081E32]/40 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-all transform hover:scale-110 shadow-xl">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {mainStory.stats.map((stat, i) => (
                    <span key={i} className="bg-[#007A55] text-white px-3 py-1 rounded-full text-sm">
                      {stat}
                    </span>
                  ))}
                </div>
                <h3 className="text-white text-2xl leading-tight">
                  {mainStory.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Secondary Stories */}
          <div className="space-y-8">
            {secondaryStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E32]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/80 text-sm mb-2">{story.company}</p>
                    <h4 className="text-white leading-tight">
                      {story.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
