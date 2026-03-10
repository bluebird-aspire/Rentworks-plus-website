import type { LucideIcon } from 'lucide-react';

interface HeroStatPillProps {
  icon: LucideIcon;
  text: string;
  color: string;
}

export default function HeroStatPill({ icon: Icon, text, color }: HeroStatPillProps) {
  return (
    <div
      className="stat-pill absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full"
      style={{
        background: 'var(--theme-surface-strong)',
        border: '1px solid var(--theme-surface-strong-border)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        willChange: 'transform',
      }}
    >
      <Icon className="w-3 h-3" style={{ color }} />
      <span className="text-[10px] font-semibold" style={{ color: 'var(--theme-text)' }}>
        {text}
      </span>
    </div>
  );
}
