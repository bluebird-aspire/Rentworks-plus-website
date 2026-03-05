export function LogoStrip() {
  return (
    <section className="bg-[#F4F5F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
          Powering rental businesses worldwide
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 opacity-50">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-32 h-12 bg-gray-300 rounded-lg flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              <svg className="w-20 h-8 text-gray-400" viewBox="0 0 80 32" fill="currentColor">
                <rect x="10" y="8" width="60" height="16" rx="2" />
                <circle cx="20" cy="16" r="4" fill="white" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
