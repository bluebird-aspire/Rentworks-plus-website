import { motion } from 'motion/react';
import { Sparkles, TrendingUp, LayoutGrid } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Built for Modern Rental Businesses
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pillar 1: Smart Automation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F4F5F7] rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Smart Automation
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Automate pricing rules instead of updating rates manually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Let CAREN suggest better pricing, upgrades, or fleet moves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Optimize fleet usage across branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Trigger emails and SMS messages automatically</span>
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Pillar 2: Real-Time Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#E8EEF2] rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Real-Time Intelligence
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>See live vehicle availability and status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Adjust rates instantly when demand changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Monitor KPIs like utilization, RPD, and revenue per vehicle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Use simple forecasting to plan staffing and fleet levels</span>
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Pillar 3: Seamless Operations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F4F5F7] rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Seamless Operations
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>One platform instead of multiple disconnected systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Designed to work on desktop, tablet, and mobile browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Integrated payments and digital contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Fewer manual steps, fewer errors, happier staff and customers</span>
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
