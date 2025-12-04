import { TrendingUp, Users, Globe, Brain } from 'lucide-react';

export function GlobalSupport() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Identity Block with KPIs and AI Capability */}
        <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2438] to-[#081E32] rounded-2xl overflow-hidden p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl text-white mb-3">
                RentWorksPlus+
              </h2>
              <p className="text-white/70 text-lg">
                Modern car rental software, powered by intelligent automation
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 bg-[#007A55]/20 rounded-lg mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-[#007A55]" />
                </div>
                <p className="text-3xl text-white text-center mb-2">99.9%</p>
                <p className="text-white/60 text-sm text-center">Platform Uptime</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 bg-[#007A55]/20 rounded-lg mb-4 mx-auto">
                  <Users className="w-6 h-6 text-[#007A55]" />
                </div>
                <p className="text-3xl text-white text-center mb-2">24/7</p>
                <p className="text-white/60 text-sm text-center">Customer Support</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 bg-[#007A55]/20 rounded-lg mb-4 mx-auto">
                  <Globe className="w-6 h-6 text-[#007A55]" />
                </div>
                <p className="text-3xl text-white text-center mb-2">100+</p>
                <p className="text-white/60 text-sm text-center">Integrations</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 bg-[#007A55]/20 rounded-lg mb-4 mx-auto">
                  <Brain className="w-6 h-6 text-[#007A55]" />
                </div>
                <p className="text-3xl text-white text-center mb-2">AI</p>
                <p className="text-white/60 text-sm text-center">CAREN Assistant</p>
              </div>
            </div>

            {/* Optional CTA */}
            <div className="text-center mt-10">
              <button className="bg-[#007A55] text-white px-8 py-3 rounded-lg hover:bg-[#006644] transition-all shadow-lg">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
