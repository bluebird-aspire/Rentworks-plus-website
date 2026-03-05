import { Activity, TrendingUp, Zap, Cpu } from 'lucide-react';

export function DashboardVisual() {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#081E32]">Fleet Dashboard</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#007A55] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F4F5F7] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Active Rentals</span>
              <TrendingUp className="w-4 h-4 text-[#007A55]" />
            </div>
            <p className="text-2xl text-[#081E32]">247</p>
            <p className="text-xs text-[#007A55]">+12% from last week</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Fleet Utilization</span>
              <Activity className="w-4 h-4 text-[#007A55]" />
            </div>
            <p className="text-2xl text-[#081E32]">87%</p>
            <p className="text-xs text-[#007A55]">Optimal range</p>
          </div>
        </div>

        {/* Vehicle Telemetry Chart */}
        <div className="bg-[#F4F5F7] rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Vehicle Telemetry</span>
            <Zap className="w-4 h-4 text-[#007A55]" />
          </div>
          <div className="space-y-3">
            {[
              { label: 'Engine Status', value: 98, color: '#007A55' },
              { label: 'Fuel Efficiency', value: 85, color: '#007A55' },
              { label: 'Maintenance Due', value: 45, color: '#FFA500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">{item.label}</span>
                  <span className="text-xs text-[#081E32]">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Prediction Card */}
        <div className="bg-gradient-to-r from-[#007A55] to-[#006644] rounded-lg p-4 text-white">
          <div className="flex items-start space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm mb-1">AI Predictive Insight</p>
              <p className="text-xs opacity-90">
                Peak demand expected this weekend. Recommend reducing SUV pricing by 8% to maximize
                utilization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#007A55] opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#081E32] opacity-5 rounded-full blur-2xl"></div>
    </div>
  );
}
