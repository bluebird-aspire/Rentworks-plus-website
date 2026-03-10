import type { CSSProperties } from 'react';
import iconSrc from '../../assets/car-inspection-icon.png';

interface CarInspectionIconProps {
  className?: string;
  style?: CSSProperties;
}

/** Car inspection icon using PNG with CSS mask so it inherits currentColor. */
export default function CarInspectionIcon({ className = '', style }: CarInspectionIconProps) {
  return (
    <div
      role="img"
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${iconSrc})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(${iconSrc})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        ...style,
      }}
    />
  );
}
