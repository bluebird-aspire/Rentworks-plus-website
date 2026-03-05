import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPreview() {
  const posts = [
    {
      title: 'How AI is Transforming Rental Operations',
      date: 'Nov 15, 2024',
      category: 'Technology',
      tags: ['AI', 'Automation'],
      image:
        'https://images.unsplash.com/photo-1683200899447-d398198ed197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjBkaWdpdGFsJTIwc2NyZWVufGVufDF8fHx8MTc2NDI0OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Predictive Maintenance Explained',
      date: 'Nov 10, 2024',
      category: 'Operations',
      tags: ['Maintenance', 'Fleet'],
      image:
        'https://images.unsplash.com/photo-1668172692593-962bce37d539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnNwZWN0aW9uJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzY0MTUyMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Wave Decorator */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-sm text-[#081E32] mb-4">
            <span>∿∿∿</span>
            <span className="uppercase tracking-wide">PREVIEW BLOG LAYOUT</span>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4 leading-tight">
                Check out how the blog displays in RentWorksPlus+
              </h2>
              <p className="text-gray-600">
                You can even choose from multiple blog layouts in theme options or editing templates
                part to your liking. Options are limitless!
              </p>
            </div>
            <button className="hidden md:block border-2 border-[#081E32] text-[#081E32] px-6 py-3 hover:bg-[#081E32] hover:text-white transition-all uppercase tracking-wide">
              See All Posts
            </button>
          </div>
        </div>

        {/* Blog Posts Grid - Josephine Style */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-[#081E32] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-0">
                <h3 className="text-xl text-white px-6 pt-6 pb-4 group-hover:text-[#007A55] transition-colors">
                  {post.title}
                </h3>

                {/* Blue Accent Bar with Date and Category */}
                <div className="bg-[#007A55] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-white text-sm uppercase tracking-wide">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.tags.join(', ')}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <button className="border-2 border-[#081E32] text-[#081E32] px-6 py-3 hover:bg-[#081E32] hover:text-white transition-all uppercase tracking-wide">
            See All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
