import { motion } from 'motion/react';

export function OnboardingSteps() {
  const steps = [
    {
      number: '01',
      title: 'Schedule a 30-minute call with a RentWorksPlus+ specialist.',
      bgColor: 'bg-[#E8EEF2]',
      delay: 0.1,
    },
    {
      number: '02',
      title: 'See a personalized demo of how RentWorksPlus+ streamlines your operations.',
      bgColor: 'bg-[#D4E5E0]',
      delay: 0.2,
    },
    {
      number: '03',
      title: 'Get onboarded quickly with expert support and start optimizing your fleet.',
      bgColor: 'bg-[#B8D9CE]',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#081E32] mb-4">
            Get started with RentWorksPlus+ in
            <br />
            three easy steps
          </h2>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className={`relative ${step.bgColor} rounded-2xl p-8 md:p-10 shadow-lg`}
              style={{
                marginTop: index === 0 ? '0' : index === 1 ? '2rem' : '4rem',
              }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 right-8">
                <div className="bg-[#F4E04D] rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <span className="text-[#081E32]">{step.number}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-8">
                <p className="text-[#081E32] text-lg leading-relaxed">{step.title}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
                <div className="absolute bottom-4 left-4 w-24 h-16 bg-white rounded-lg"></div>
                <div className="absolute bottom-8 left-12 w-20 h-12 bg-white rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#007A55] rounded-3xl p-8 md:p-12 max-w-6xl mx-auto shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-white mb-2">
                Join Hundreds of Rental Companies Powered by RentWorksPlus+
              </h3>
              <p className="text-white/90 text-lg">
                Transform your operations and accelerate growth with intelligent automation
              </p>
            </div>
            <button className="bg-white text-[#007A55] px-8 py-4 rounded-full hover:bg-[#F4F5F7] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
