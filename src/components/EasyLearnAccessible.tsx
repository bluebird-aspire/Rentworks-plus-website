export function EasyLearnAccessible() {
  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Easy to Learn */}
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl text-[#081E32] mb-4 leading-tight">
              Easy to Learn
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Our system is so easy to use that staff can learn essential functions in hours, not
              weeks, reducing training time by up to 50%.
            </p>

            {/* Visual - Training Cards */}
            <div className="relative space-y-4">
              {/* Save 50% Badge */}
              <div className="absolute -top-6 right-8 bg-[#007A55] text-white px-4 py-2 rounded-full text-sm shadow-lg z-20 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Save 50% Training Time</span>
              </div>

              {/* Training Card 1 */}
              <div className="bg-[#F4F5F7] rounded-xl p-4 transform hover:-translate-y-1 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#007A55]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#007A55]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#081E32] truncate">Guide to RentWorksPlus+ Platform</p>
                    <p className="text-sm text-gray-500">📚 30 minutes</p>
                  </div>
                </div>
                <div className="w-full bg-white rounded-full h-2 mt-3">
                  <div
                    className="bg-[#007A55] h-2 rounded-full transition-all duration-500"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>

              {/* Training Card 2 - With Stats */}
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[#007A55]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#007A55]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#081E32]">Channel Manager</p>
                    <p className="text-sm text-gray-500">📚 34 minutes</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <p className="text-xs text-gray-500 mb-2">Avg. Training Time per Employee</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-3xl text-[#007A55]">2h 30m</p>
                    <span className="text-xs bg-[#007A55]/10 text-[#007A55] px-2 py-1 rounded">
                      -50%
                    </span>
                  </div>
                </div>
              </div>

              {/* Training Card 3 */}
              <div className="bg-[#F4F5F7] rounded-xl p-4 transform hover:-translate-y-1 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#007A55]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#007A55]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#081E32]">Payments & Processes</p>
                    <p className="text-sm text-gray-500">📚 24 minutes</p>
                  </div>
                </div>
                <div className="w-full bg-white rounded-full h-2 mt-3">
                  <div
                    className="bg-[#007A55] h-2 rounded-full transition-all duration-500"
                    style={{ width: '40%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessible Anywhere, Anytime */}
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl text-[#081E32] mb-4 leading-tight">
              Accessible Anywhere, Anytime
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Access your property management system securely from anywhere, on any device. All
              updates and backups happen automatically with 99.95% uptime guaranteed.
            </p>

            {/* Visual - Multi Device */}
            <div className="relative h-80 lg:h-96">
              {/* Access Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#007A55] text-white px-4 py-2 rounded-full text-sm shadow-lg z-30 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Access on Any Device</span>
              </div>

              {/* Desktop mockup */}
              <div className="absolute top-8 right-0 w-64 lg:w-80 bg-[#081E32] rounded-lg shadow-2xl overflow-hidden border-4 border-[#081E32]">
                <div className="bg-[#1a1a1a] h-5 flex items-center justify-center">
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-white h-40 lg:h-48 p-3">
                  {/* Calendar interface mockup */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-2 bg-gray-300 rounded w-20"></div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-300 rounded"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex space-x-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="flex-1 h-2 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex space-x-1">
                        {[...Array(7)].map((_, j) => (
                          <div
                            key={j}
                            className={`flex-1 h-6 rounded ${
                              i === 2 && j === 3
                                ? 'bg-[#007A55]/30'
                                : i === 1 && j === 5
                                  ? 'bg-[#007A55]/20'
                                  : 'bg-gray-100'
                            }`}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-200 h-3"></div>
              </div>

              {/* Tablet mockup */}
              <div className="absolute top-24 left-12 lg:left-20 w-48 lg:w-56 bg-[#081E32] rounded-xl shadow-2xl overflow-hidden p-2 z-10 border-2 border-[#081E32]">
                <div className="bg-white h-56 lg:h-64 rounded-lg overflow-hidden">
                  <div className="bg-[#F4F5F7] h-8 flex items-center justify-between px-3">
                    <div className="h-2 bg-gray-300 rounded w-12"></div>
                    <div className="h-2 bg-gray-300 rounded w-8"></div>
                  </div>
                  <div className="p-2 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1 h-8 bg-[#007A55]/40 rounded"></div>
                        <div
                          className={`flex-1 h-8 rounded ${
                            i === 2 ? 'bg-[#007A55]/30' : 'bg-gray-100'
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute bottom-0 left-0 w-32 lg:w-36 bg-[#081E32] rounded-2xl shadow-2xl overflow-hidden p-1.5 z-20 border-2 border-[#081E32]">
                <div className="bg-gray-900 h-4 rounded-t-xl flex items-center justify-center">
                  <div className="w-10 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="bg-white h-56 lg:h-64 rounded-b-xl overflow-hidden">
                  <div className="bg-[#F4F5F7] h-6 flex items-center justify-between px-2">
                    <div className="h-1.5 bg-gray-300 rounded w-8"></div>
                    <div className="h-1.5 bg-gray-300 rounded w-4"></div>
                  </div>
                  <div className="p-2 space-y-1.5">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <div
                          className={`w-1 h-6 rounded ${
                            i === 3 ? 'bg-[#007A55]' : 'bg-[#007A55]/20'
                          }`}
                        ></div>
                        <div
                          className={`flex-1 h-6 rounded ${
                            i === 3 ? 'bg-[#007A55]/30' : 'bg-gray-100'
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
