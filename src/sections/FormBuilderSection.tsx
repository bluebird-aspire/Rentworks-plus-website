import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Image, Check } from 'lucide-react';

const builderFeatures = [
  'Drag-and-drop canvas designer',
  '20+ UI components',
  'Conditional logic with visibility rules',
  'E-signature field support',
  'Custom field creation',
  'Multiple document sizes',
];

const canvasElements = [
  { type: 'header', x: 10, y: 3, w: 80, h: 10, label: 'Rental Agreement', moveable: false },
  { type: 'text', x: 10, y: 17, w: 38, h: 7, label: 'Customer Name', moveable: true },
  { type: 'text', x: 55, y: 17, w: 35, h: 7, label: 'License Number', moveable: true },
  { type: 'image', x: 10, y: 28, w: 38, h: 28, label: 'Vehicle Photo', moveable: true },
  { type: 'text', x: 55, y: 28, w: 35, h: 7, label: 'Vehicle Model', moveable: true },
  { type: 'text', x: 55, y: 39, w: 35, h: 7, label: 'License Plate', moveable: true },
  { type: 'signature', x: 10, y: 62, w: 38, h: 16, label: 'Customer Signature', moveable: false },
  { type: 'signature', x: 55, y: 62, w: 35, h: 16, label: 'Agent Signature', moveable: false },
];

export default function FormBuilderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragTlRef = useRef<gsap.core.Timeline | null>(null);

  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.formbuilder-header',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
      gsap.fromTo(
        '.formbuilder-canvas',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
      gsap.fromTo(
        '.canvas-element',
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.formbuilder-canvas', start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Looping drag animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const nameEl = canvas.querySelector('.drag-name') as HTMLElement;
    const imageEl = canvas.querySelector('.drag-image') as HTMLElement;
    const cursor = canvas.querySelector('.fake-cursor') as HTMLElement;
    if (!nameEl || !imageEl || !cursor) return;

    // Wait for entrance animations to finish
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        repeat: -1, yoyo: true, repeatDelay: 1.5, paused: true,
        defaults: { ease: 'power2.inOut' },
      });

      // Phase 1: Cursor appears and moves to Customer Name
      tl.fromTo(cursor, { opacity: 0, left: '5%', top: '10%' },
        { opacity: 1, left: '25%', top: '19%', duration: 0.6 });

      // Phase 2: Lift Customer Name (highlight it)
      tl.to(nameEl, {
        boxShadow: '0 4px 20px rgba(46,233,168,0.3)',
        borderColor: 'var(--theme-accent)',
        duration: 0.3,
      });

      // Phase 3: Drag Customer Name to the empty space on the right (below License Plate y:46, above signatures y:62)
      tl.fromTo(nameEl,
        { left: '10%', top: '17%', width: '38%' },
        { left: '55%', top: '49%', width: '35%', duration: 0.8 },
        '<0.1');
      tl.to(cursor, { left: '72%', top: '51%', duration: 0.8 }, '<');

      // Phase 4: Drop it — remove highlight
      tl.to(nameEl, { boxShadow: 'none', borderColor: 'var(--theme-divider-strong)', duration: 0.3 });

      // Phase 5: Cursor moves to top edge of Image element
      tl.to(cursor, { left: '28%', top: '26%', duration: 0.5 });

      // Phase 6: Image expands upward to fill the space vacated by Customer Name
      tl.fromTo(imageEl,
        { top: '28%', height: '28%' },
        { top: '17%', height: '39%', duration: 0.8 });
      tl.to(cursor, { left: '28%', top: '18%', duration: 0.8 }, '<');

      // Phase 7: Cursor fades
      tl.to(cursor, { opacity: 0, duration: 0.4 });

      // Visibility-based pause/resume
      const visTrigger = ScrollTrigger.create({
        trigger: canvas,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => tl.resume(),
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.resume(),
        onLeaveBack: () => tl.pause(),
      });

      tl.play();
      dragTlRef.current = tl;

      // Store visTrigger for cleanup
      (tl as any)._visTrigger = visTrigger;
    }, 1500);

    return () => {
      clearTimeout(timer);
      (dragTlRef.current as any)?._visTrigger?.kill();
      dragTlRef.current?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="formbuilder-header text-center mb-10">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            Document Builder
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Visual form builder
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Create custom documents and forms with drag-and-drop simplicity. Add conditional logic,
            e-signatures, and dynamic data fields.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {builderFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-surface-border)',
                color: 'var(--theme-text)',
              }}
            >
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)' }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: 'var(--theme-accent)' }} />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Full-width canvas */}
        <div className="formbuilder-canvas">
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'var(--theme-surface)',
              border: '1px solid var(--theme-surface-border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Canvas toolbar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }}
                >
                  <FileText className="w-5 h-5" style={{ color: 'var(--theme-accent)' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: 'var(--theme-text)' }}>
                    Form Builder
                  </p>
                  <p className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
                    Drag, drop, and customize
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.5)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234, 179, 8, 0.5)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.5)' }} />
              </div>
            </div>

            {/* Canvas area */}
            <div
              ref={canvasRef}
              className="relative rounded-xl overflow-hidden"
              style={{
                height: '420px',
                backgroundColor: 'var(--theme-navy-800)',
                border: '1px solid var(--theme-divider)',
              }}
            >
              {/* Grid background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(color-mix(in srgb, var(--theme-accent) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--theme-accent) 10%, transparent) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  opacity: 0.2,
                }}
              />

              {/* Fake cursor for drag animation */}
              <div
                className="fake-cursor absolute rounded-full pointer-events-none"
                style={{
                  width: 16, height: 16,
                  background: 'var(--theme-accent)',
                  boxShadow: '0 0 12px rgba(46,233,168,0.5)',
                  opacity: 0,
                  zIndex: 10,
                  left: '5%', top: '10%',
                }}
              />

              {canvasElements.map((el, i) => {
                const dragClass = el.label === 'Customer Name' ? ' drag-name' : el.label === 'Vehicle Photo' ? ' drag-image' : '';
                return (
                <div
                  key={i}
                  className={`canvas-element absolute rounded-lg${dragClass}`}
                  style={{
                    left: `${el.x}%`,
                    top: `${el.y}%`,
                    width: `${el.w}%`,
                    height: `${el.h}%`,
                    border: '1px solid var(--theme-divider-strong)',
                    backgroundColor: 'var(--theme-navy-700)',
                    opacity: 0.8,
                    zIndex: 1,
                  }}
                >
                  {el.type === 'header' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading font-semibold" style={{ color: 'var(--theme-text)' }}>
                        {el.label}
                      </span>
                    </div>
                  )}
                  {el.type === 'signature' && (
                    <div
                      className="w-full h-full flex items-center justify-center rounded"
                      style={{ border: '2px dashed color-mix(in srgb, var(--theme-accent) 30%, transparent)' }}
                    >
                      <span className="text-xs" style={{ color: 'color-mix(in srgb, var(--theme-accent) 60%, transparent)' }}>
                        {el.label}
                      </span>
                    </div>
                  )}
                  {el.type === 'image' && (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--theme-navy-800) 50%, transparent)' }}
                    >
                      <Image className="w-6 h-6" style={{ color: 'var(--theme-text-muted)' }} />
                    </div>
                  )}
                  {el.type === 'text' && (
                    <div className="w-full h-full flex items-center px-3">
                      <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
                        {el.label}
                      </span>
                    </div>
                  )}
                </div>
                );
              })}
            </div>

            {/* Canvas footer */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
                  A4 Portrait
                </span>
                <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
                  &middot;
                </span>
                <span className="text-xs" style={{ color: 'var(--theme-text-muted)' }}>
                  8 elements
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1.5 rounded-lg text-xs"
                  style={{
                    background: 'var(--theme-surface)',
                    border: '1px solid var(--theme-surface-border)',
                    color: 'var(--theme-text)',
                  }}
                >
                  Preview
                </button>
                <button
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--theme-accent)',
                    color: 'var(--theme-accent-fg)',
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
