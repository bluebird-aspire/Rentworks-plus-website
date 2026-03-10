import { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: LegalSection[];
}

export default function LegalModal({ isOpen, onClose, title, sections }: LegalModalProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and add modal-open class
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Reset section when modal opens
  useEffect(() => {
    if (isOpen) setCurrentSection(0);
  }, [isOpen]);

  // Scroll content to top when section changes
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  if (!isOpen) return null;

  const goTo = (index: number) => {
    if (index >= 0 && index < sections.length) setCurrentSection(index);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      style={{ isolation: 'isolate' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ background: '#ffffff' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid var(--theme-divider-strong)' }}
        >
          <h2 className="text-xl font-heading font-bold" style={{ color: 'var(--theme-text)' }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
            aria-label="Close"
          >
            <X className="w-5 h-5" style={{ color: 'var(--theme-text-muted)' }} />
          </button>
        </div>

        {/* Body: sidebar + content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar (hidden on mobile) */}
          <div
            className="hidden md:flex flex-col w-56 flex-shrink-0 overflow-y-auto py-4 px-3"
            style={{ borderRight: '1px solid var(--theme-divider-strong)' }}
          >
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`text-left text-sm px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${
                  currentSection === index ? 'font-semibold' : ''
                }`}
                style={{
                  color: currentSection === index ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
                  backgroundColor: currentSection === index ? 'color-mix(in srgb, var(--theme-accent) 15%, transparent)' : 'transparent',
                }}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Mobile section selector */}
          <div className="md:hidden px-4 pt-4 flex-shrink-0">
            <select
              value={currentSection}
              onChange={(e) => goTo(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none"
              style={{
                backgroundColor: 'var(--theme-card-bg, #fff)',
                color: 'var(--theme-text)',
                borderColor: 'var(--theme-divider)',
              }}
            >
              {sections.map((section, index) => (
                <option key={index} value={index}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto px-6 py-6"
          >
            <h3 className="text-lg font-heading font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
              {sections[currentSection]?.title}
            </h3>
            <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--theme-text-muted)' }}>
              {sections[currentSection]?.content}
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div
          className="flex items-center justify-between px-6 py-3 flex-shrink-0"
          style={{ borderTop: '1px solid var(--theme-divider-strong)' }}
        >
          <button
            onClick={() => goTo(currentSection - 1)}
            disabled={currentSection === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
            {currentSection + 1} of {sections.length}
          </span>

          <button
            onClick={() => goTo(currentSection + 1)}
            disabled={currentSection === sections.length - 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
