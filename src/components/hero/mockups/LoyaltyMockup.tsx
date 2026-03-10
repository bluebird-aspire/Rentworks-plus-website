import { Star, Crown, Trophy } from 'lucide-react';

const tiers = [
  { name: 'Silver', icon: Star, color: '#94A3B8', bg: '#94A3B815' },
  { name: 'Gold', icon: Crown, color: '#F59E0B', bg: '#F59E0B15' },
  { name: 'Platinum', icon: Trophy, color: '#A78BFA', bg: '#A78BFA15' },
];

export default function LoyaltyMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <span className="text-[9px] font-semibold" style={{ color: 'var(--theme-text)' }}>
        Loyalty Program
      </span>
      <div className="flex flex-col gap-1.5">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md"
            style={{ background: tier.bg, border: `1px solid ${tier.color}25` }}
          >
            <tier.icon className="w-3 h-3" style={{ color: tier.color }} />
            <span className="text-[8px] font-medium flex-1" style={{ color: tier.color }}>
              {tier.name}
            </span>
            {i === 1 && (
              <span className="text-[6px] px-1 py-0.5 rounded-full font-medium" style={{ background: `${tier.color}30`, color: tier.color }}>
                Current
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="mt-auto">
        <div className="flex justify-between text-[6px] mb-1" style={{ color: 'var(--theme-text-muted)' }}>
          <span>Points: ---</span>
          <span>Next tier</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--theme-navy-800)' }}>
          <div className="h-full rounded-full w-[65%]" style={{ background: 'linear-gradient(90deg, #F59E0B, #A78BFA)' }} />
        </div>
      </div>
    </div>
  );
}
