import { ReactNode } from 'react';

interface Metric {
  metric: string;
  label: string;
  icon?: ReactNode;
}

interface AnimatedMetricsBarProps {
  metrics: Metric[];
}

export function AnimatedMetricsBar({ metrics }: AnimatedMetricsBarProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#007A55] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-float-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.icon && (
            <div className="mb-4 text-[#007A55]">{item.icon}</div>
          )}
          <div className="text-4xl font-bold text-[#007A55] mb-2 animate-pulse-slow">
            {item.metric}
          </div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.95;
          }
        }

        .animate-float-in {
          animation: float-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
