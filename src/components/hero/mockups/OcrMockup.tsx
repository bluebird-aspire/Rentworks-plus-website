import { Scan, Camera } from 'lucide-react';

export default function OcrMockup() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3 relative">
      {/* Camera viewfinder corners */}
      <div className="absolute inset-3 pointer-events-none">
        {/* Top-left */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: '#007A55' }} />
        {/* Top-right */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: '#007A55' }} />
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: '#007A55' }} />
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: '#007A55' }} />
      </div>

      <div className="text-[9px] font-semibold mb-1" style={{ color: 'var(--theme-text)' }}>OCR & Scanning</div>
      <Camera className="w-5 h-5" style={{ color: 'var(--theme-text-muted)' }} />

      {/* VIN code with scan highlight */}
      <div className="relative">
        <span
          className="text-[10px] font-mono font-bold tracking-wider"
          style={{ color: 'var(--theme-text)' }}
        >
          1HG<span style={{ color: '#007A55', textDecoration: 'underline', textUnderlineOffset: '2px' }}>BH41</span>JXMN
        </span>
        {/* Scan line animation */}
        <div
          className="absolute left-0 right-0 h-[1px]"
          style={{
            bottom: '-2px',
            background: 'linear-gradient(90deg, transparent, #007A55, transparent)',
            animation: 'scanLine 2s ease-in-out infinite',
          }}
        />
      </div>

      <div className="flex items-center gap-1">
        <Scan className="w-2.5 h-2.5" style={{ color: '#007A55' }} />
        <span className="text-[7px] font-medium" style={{ color: '#007A55' }}>
          Scanning...
        </span>
      </div>

      <style>{`
        @keyframes scanLine {
          0%, 100% { opacity: 0.3; transform: scaleX(0.5); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
