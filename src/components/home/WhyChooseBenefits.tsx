import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Smile, Scale, Users } from 'lucide-react';

export function WhyChooseBenefits() {
  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4">
            Why Leading Rental Companies Choose RentWorksPlus+
          </h2>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Benefit 1: Industry-Specific Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Industry-Specific Features
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Designed specifically for car, truck, van, and micro-mobility rentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Supports rental workflows, not generic CRM flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Built around how real rental teams work day-to-day</span>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Benefit 2: Powerful Automation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Powerful Automation
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Cut manual tasks by up to 75% with workflows and auto rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Let the system handle reminders, updates, and follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Spend more time with customers instead of spreadsheets</span>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Benefit 3: Real-Time Insights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Real-Time Insights
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Live dashboards showing revenue, utilization, and RPD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Easy-to-read trends instead of complex reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Forecasts and alerts that highlight where to act</span>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Benefit 4: Easy to Use */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smile className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Easy to Use
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Clean interface that staff can learn in hours, not weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Logical flows for reservations, check-in, and check-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Works in the browser—no complicated installs</span>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Benefit 5: Scalable & Flexible */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Scalable & Flexible
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Start small and expand to multi-brand or multi-location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Customize workflows, rate rules, and user roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Add modules as your business grows</span>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Benefit 6: Expert Support */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-[#081E32] mb-4">
                Expert Support
              </h3>

              <ul className="space-y-3 text-[#081E32]/70 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Support team with real car rental experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Guided onboarding and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007A55] mt-1">•</span>
                  <span>Ongoing help as your needs evolve</span>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#007A55]/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
