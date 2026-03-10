import { TrendingUp } from 'lucide-react';

const kpis = [
  { label: 'Utilization', value: '—%', color: '#007A55' },
  { label: 'Conversion', value: '—%', color: '#3B82F6' },
  { label: 'Revenue', value: '$—k', color: '#F59E0B' },
  { label: 'No-Shows', value: '—%', color: '#EF4444' },
];

const barHeights = [60, 85, 45, 95, 70, 55, 80];

export default function AnalyticsMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="flex items-center gap-1.5">
        <TrendingUp className="w-3 h-3" style={{ color: '#007A55' }} />
        <span className="text-[9px] font-semibold" style={{ color: 'var(--theme-text)' }}>
          Dashboard
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded px-1.5 py-1"
            style={{ background: 'var(--theme-navy-800)' }}
          >
            <div className="text-[6px]" style={{ color: 'var(--theme-text-muted)' }}>{kpi.label}</div>
            <div className="text-[10px] font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="flex-1 flex items-end gap-[3px] px-1">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all"
            style={{
              height: `${h}%`,
              background: i === 3 ? '#007A55' : '#007A5530',
            }}
          />
        ))}
      </div>
    </div>
  );
}
