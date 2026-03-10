import { AlertTriangle } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const bookings = [
  { start: 0, span: 3, color: '#007A55', label: 'SUV-042' },
  { start: 2, span: 4, color: '#3B82F6', label: 'SED-118' },
  { start: 5, span: 2, color: '#8B5CF6', label: 'VAN-007' },
];

export default function ReservationMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold" style={{ color: 'var(--theme-text)' }}>
          Reservation Planner
        </span>
        <span className="text-[8px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,122,85,0.15)', color: '#007A55' }}>
          This Week
        </span>
      </div>
      <div className="flex gap-[2px]">
        {days.map((d) => (
          <div key={d} className="flex-1 text-center text-[7px]" style={{ color: 'var(--theme-text-muted)' }}>
            {d}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-1.5 relative">
        {bookings.map((b, i) => (
          <div
            key={i}
            className="h-5 rounded-md flex items-center px-1.5 text-[7px] font-medium absolute"
            style={{
              left: `${(b.start / 7) * 100}%`,
              width: `${(b.span / 7) * 100}%`,
              top: `${i * 22}px`,
              background: `${b.color}25`,
              border: `1px solid ${b.color}50`,
              color: b.color,
            }}
          >
            {b.label}
          </div>
        ))}
        {/* Conflict indicator */}
        <div
          className="absolute flex items-center gap-0.5 px-1 py-0.5 rounded text-[6px]"
          style={{ top: '12px', left: `${(2.5 / 7) * 100}%`, background: '#EF444430', color: '#EF4444' }}
        >
          <AlertTriangle className="w-2 h-2" />
          Conflict
        </div>
      </div>
    </div>
  );
}
