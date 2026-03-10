import { CreditCard, Check } from 'lucide-react';

const methods = [
  { name: 'Adyen', color: '#3B82F6' },
  { name: 'Direct Bill', color: '#A78BFA' },
  { name: 'Promo Code', color: '#F59E0B' },
  { name: 'Cash', color: '#007A55' },
];

export default function PaymentsMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="flex items-center gap-1.5">
        <CreditCard className="w-3 h-3" style={{ color: '#007A55' }} />
        <span className="text-[9px] font-semibold" style={{ color: 'var(--theme-text)' }}>
          Payments
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {methods.map((m) => (
          <span
            key={m.name}
            className="text-[7px] font-medium px-1.5 py-0.5 rounded-full"
            style={{ background: `${m.color}20`, color: m.color, border: `1px solid ${m.color}30` }}
          >
            {m.name}
          </span>
        ))}
      </div>
      <div
        className="rounded-md p-2 flex items-center justify-between"
        style={{ background: 'var(--theme-navy-800)' }}
      >
        <span className="text-[8px]" style={{ color: 'var(--theme-text-muted)' }}>Amount</span>
        <span className="text-[11px] font-bold" style={{ color: 'var(--theme-text)' }}>$----.--</span>
      </div>
      <div
        className="flex items-center gap-1 px-2 py-1 rounded-md mt-auto"
        style={{ background: '#007A5520' }}
      >
        <Check className="w-2.5 h-2.5" style={{ color: '#007A55' }} />
        <span className="text-[8px] font-medium" style={{ color: '#007A55' }}>Payment Successful</span>
      </div>
    </div>
  );
}
