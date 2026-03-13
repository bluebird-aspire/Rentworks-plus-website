import type { ReactNode } from 'react';

interface HeroMockupCardProps {
  label: string;
  labelColor: string;
  rotation: number;
  width: number;
  height: number;
  children: ReactNode;
  /** If provided, render a photo background instead of children */
  photoUrl?: string;
  /** Overlay content rendered on top of the photo */
  photoOverlay?: ReactNode;
  className?: string;
  hideLabel?: boolean;
}

export default function HeroMockupCard({
  label,
  labelColor,
  rotation,
  width,
  height,
  children,
  photoUrl,
  photoOverlay,
  className = '',
  hideLabel = false,
}: HeroMockupCardProps) {
  return (
    <div
      className={`hero-card rounded-3xl overflow-hidden cursor-pointer ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        background: 'var(--theme-card-bg)',
        border: '1px solid ' + labelColor + '25',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12), 0 0 20px ' + labelColor + '12',
        willChange: 'transform',
      }}
    >
      {photoUrl ? (
        <>
          <img
            src={photoUrl}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,11,20,0.3) 0%, rgba(5,11,20,0.7) 100%)' }} />
          {photoOverlay && (
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              {photoOverlay}
            </div>
          )}
        </>
      ) : (
        children
      )}
      {/* Label badge */}
      {!hideLabel && <div
        className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg text-[8px] font-semibold"
        style={{
          background: `${labelColor}20`,
          color: labelColor,
          border: `1px solid ${labelColor}30`,
          backdropFilter: 'blur(8px)',
        }}
      >
        {label}
      </div>}
    </div>
  );
}
