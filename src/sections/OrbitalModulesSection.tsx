import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Car, ClipboardCheck, Users, BarChart3, Shield, Settings, Warehouse, CreditCard, CheckCircle, FileText, Truck, ShieldCheck, DollarSign, FolderOpen, CalendarDays, Scan, Award, Package, Tablet, BookOpen, Bell, FileEdit, Monitor, CarFront } from 'lucide-react';
import CarInspectionIcon from '../components/icons/CarInspectionIcon';

/* ─── Module data ─── */

// Inner ring: 8 core modules (tighter spacing)
const innerRingModules = [
  { id: 'reservations', icon: Calendar, title: 'Reservations', color: '#2EE9A8' },
  { id: 'checkin', icon: CheckCircle, title: 'Check-In', color: '#3B82F6' },
  { id: 'checkout', icon: ClipboardCheck, title: 'Check-Out', color: '#8B5CF6' },
  { id: 'fleet', icon: Car, title: 'Fleet Ops', color: '#EF4444' },
  { id: 'customers', icon: Users, title: 'Customer 360', color: '#EC4899' },
  { id: 'claims', icon: Shield, title: 'Claims', color: '#6366F1' },
  { id: 'payments', icon: CreditCard, title: 'Payments', color: '#84CC16' },
  { id: 'reports', icon: BarChart3, title: 'Analytics', color: '#F97316' },
];

// Outer ring: 18 modules (balanced with the bigger circumference)
const outerRingModules = [
  { id: 'inspection', icon: CarInspectionIcon, title: 'Inspection', color: '#F59E0B' },
  { id: 'vehicles', icon: CarFront, title: 'Vehicles', color: '#14B8A6' },
  { id: 'inventory', icon: Warehouse, title: 'Inventory', color: '#10B981' },
  { id: 'config', icon: Settings, title: 'Config', color: '#06B6D4' },
  { id: 'contracts', icon: FileText, title: 'Contracts', color: '#A78BFA' },
  { id: 'nonrevenue', icon: Truck, title: 'Non-Revenue', color: '#78716C' },
  { id: 'notifications', icon: Bell, title: 'Notifications', color: '#F472B6' },
  { id: 'insurance', icon: ShieldCheck, title: 'Insurance', color: '#34D399' },
  { id: 'marketing', icon: DollarSign, title: 'Pricing', color: '#FBBF24' },
  { id: 'documents', icon: FolderOpen, title: 'Documents', color: '#93C5FD' },
  { id: 'formbuilder', icon: FileEdit, title: 'Form Builder', color: '#94A3B8' },
  { id: 'resplanner', icon: CalendarDays, title: 'Res Planner', color: '#C084FC' },
  { id: 'ocr', icon: Scan, title: 'OCR / VIN', color: '#2DD4BF' },
  { id: 'loyalty', icon: Award, title: 'Loyalty', color: '#F87171' },
  { id: 'lostandfound', icon: Package, title: 'Lost & Found', color: '#A3E635' },
  { id: 'counter', icon: Tablet, title: 'Counter Ops', color: '#38BDF8' },
  { id: 'customerdashboard', icon: Monitor, title: 'Customer Portal', color: '#E879F9' },
  { id: 'guides', icon: BookOpen, title: 'Guides', color: '#38BDF8' },
];

const allModules = [...innerRingModules, ...outerRingModules];

const moduleDetails: Record<string, { title: string; description: string; features: string[] }> = {
  reservations: { title: 'Reservations', description: 'Complete reservation lifecycle management with conflict detection', features: ['Advanced search and filtering', 'Conflict detection and resolution', 'Open reservation tracking', 'Real-time availability checking', 'Cancel and void operations', 'Reservation details view'] },
  checkin: { title: 'Check-In', description: 'Structured vehicle handover process with damage documentation', features: ['Multi-step wizard workflow', 'Interactive vehicle diagram', 'Photo capture with retake', 'Damage type classification', 'Driver license validation', 'Multi-payment entry support'] },
  checkout: { title: 'Check-Out', description: 'End-to-end checkout workflow from reservation to vehicle handover', features: ['Reservation & customer lookup', 'Vehicle selection + availability', 'Rental details + charges', 'Payment processing', 'Vehicle Inspection With Rental Assignment', 'Automated contract delivery'] },
  inspection: { title: 'Vehicle Inspection', description: 'Digital inspection with photo documentation across 60+ vehicle zones', features: ['Photo-based damage docs', '60+ vehicle parts mapped', 'Damage type classification', 'Customer self-service portal', 'Multi-zone coverage', 'Token-based public access'] },
  fleet: { title: 'Fleet Operations', description: 'Fleet-level operational monitoring and vehicle assignment', features: ['Fleet status monitoring', 'Vehicle assignment management', 'Status code integration', 'Real-time fleet overview', 'Operational load tracking', 'Multi-location fleet view'] },
  vehicles: { title: 'Vehicles', description: 'Complete vehicle catalog with ACRISS classification and lifecycle management', features: ['ACRISS vehicle classification', 'Service history tracking', 'Financial data tracking', 'Equipment assignment', 'Vehicle availability checking', 'Advanced search filters'] },
  inventory: { title: 'Vehicle Inventory', description: 'Location tracking and inter-branch transport coordination', features: ['Business location tracking', 'Transport confirmation', 'Inter-branch coordination', 'Inventory flow management', 'Multi-vehicle transfer'] },
  customers: { title: 'Customer 360 View', description: '360° customer profiles with full history, self-service portal, and preferences', features: ['Rental and payment history', 'OCR license scanning', 'Self-service customer portal', 'Customer statistics', 'Blacklist management', 'Duplicate detection'] },
  customerdashboard: { title: 'Customer Portal', description: 'Public-facing customer self-service portal for rental status and account info', features: ['Customer lookup', 'Contract summaries', 'Rental status tracking', 'Customer statistics display', 'Account information', 'Self-service access'] },
  claims: { title: 'Claims Management', description: 'Full insurance claims lifecycle with 9 detail tabs', features: ['Multi-vehicle claim tracking', '9 detail tabs per claim', 'Expense and payment tracking', 'Repair order integration', 'Document checklist', 'Financial audit trail'] },
  reports: { title: 'Reporting & Analytics', description: '15+ real-time KPI metrics for operational insights', features: ['Fleet status monitoring', 'Revenue trend analysis', 'Utilization metrics', 'Conversion rate tracking', 'No-show rate analysis', 'Maintenance dashboard'] },
  payments: { title: 'Payment Processing', description: 'Adyen payment processing with real-time status tracking', features: ['Hosted payment pages', 'Card present payment', 'Cash & check payments', 'Pay by link', 'Real-time status tracking', 'Error handling & recovery'] },
  config: { title: 'Configuration', description: '20+ configurable system areas for enterprise setup', features: ['Multi-location support', 'Role-based access control', 'Terminal configuration', 'Branding settings', 'Security settings', 'Integrations management'] },
  contracts: { title: 'Contracts', description: 'Digital contract management with search, print, and email', features: ['Contract search + filtering', 'Detail views + summaries', 'Print and email', 'Contract card components'] },
  nonrevenue: { title: 'Non-Revenue Movements', description: 'Track vehicle movements that don\'t generate revenue', features: ['Open/close non-revenue records', 'Driver assignment', 'Vehicle movement tracking', 'Fleet status integration'] },
  notifications: { title: 'Notifications', description: 'Configurable notification rules and alert delivery', features: ['Notification templates', 'Event-based triggers', 'Delivery channels', 'Alert management', 'Status notifications', 'Custom rule builder'] },
  insurance: { title: 'Insurance', description: 'Configurable insurance products with coverage types', features: ['Insurance product config', 'Coverage type management', 'Add-on options'] },
  marketing: { title: 'Pricing & Rates', description: 'Flexible pricing engine with rate rules and seasonal pricing', features: ['Time & mileage rates', 'Rate rules (business logic)', 'Seasonal pricing', 'Ancillary charges', 'Fuel pricing by location', 'Airline partnership rates'] },
  documents: { title: 'Documents', description: 'Document upload, storage, and metadata management', features: ['Document upload & storage', 'Document retrieval', 'Metadata tracking'] },
  formbuilder: { title: 'Form Builder', description: 'Visual form and document template engine with drag-and-drop design', features: ['Drag-and-drop canvas', 'Conditional logic engine', 'E-signature fields', 'Custom field creation', 'Print configuration', 'Data source binding'] },
  resplanner: { title: 'Reservation Planner', description: 'Reservation conflict detection and resolution with advanced controls', features: ['Conflict identification', 'Resolution assistance', 'Modify reservations', 'Expand booking duration', 'Booking adjustment tools', 'Advanced controls'] },
  ocr: { title: 'OCR & VIN Scanning', description: 'Built-in VIN scanning with OCR technology', features: ['Text recognition from images', 'VIN code detection', 'Image preprocessing', 'Manual VIN fallback'] },
  loyalty: { title: 'Loyalty Programs', description: 'Customer loyalty with configurable tiers and rewards', features: ['Loyalty program management', 'Settings configuration', 'Point & tier management'] },
  lostandfound: { title: 'Lost & Found', description: 'Track items left in rental vehicles', features: ['Lost item data table', 'Customer association', 'Status tracking'] },
  counter: { title: 'Counter Operations', description: 'Unified counter workspace for front-desk operations', features: ['Counter center page', 'Sidebar navigation', 'Modular layout', 'Landing page for staff'] },
  guides: { title: 'Guides & Onboarding', description: 'Built-in interactive training system', features: ['Guide creation', 'Step-by-step instructions', 'Target highlighting', 'Route-based guides'] },
};

const featureCardColors = ['#2EE9A8', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', '#10B981'];

const INNER_DURATION = 60;
const OUTER_DURATION = 90;

export default function OrbitalModulesSection() {
  const [activeModule, setActiveModule] = useState('reservations');
  const [isHovering, setIsHovering] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const innerOrbitRef = useRef<HTMLDivElement>(null);
  const outerOrbitRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const innerTweenRef = useRef<gsap.core.Tween | null>(null);
  const outerTweenRef = useRef<gsap.core.Tween | null>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);

  const handleModuleSelect = useCallback((id: string) => {
    setActiveModule(id);
    setPanelKey(k => k + 1);
  }, []);

  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.orbital-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.inner-orbit-ring', { scale: 0, rotation: -90 }, {
        scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.outer-orbit-ring', { scale: 0, rotation: 90 }, {
        scale: 1, rotation: 0, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.orbit-node', { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(centerRef.current, { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Continuous rotation (GSAP for rings only) + CSS counter-rotation for nodes ── */
  useEffect(() => {
    // Ring rotation — start paused, only run when section is in view
    if (innerOrbitRef.current) {
      innerTweenRef.current = gsap.to(innerOrbitRef.current, {
        rotation: '+=360', duration: INNER_DURATION, repeat: -1, ease: 'none', paused: true,
      });
    }
    if (outerOrbitRef.current) {
      outerTweenRef.current = gsap.to(outerOrbitRef.current, {
        rotation: '-=360', duration: OUTER_DURATION, repeat: -1, ease: 'none', paused: true,
      });
    }

    const ringTweens = [innerTweenRef.current, outerTweenRef.current].filter(Boolean) as gsap.core.Tween[];

    const setPaused = (paused: boolean) => {
      ringTweens.forEach(t => paused ? t.pause() : t.resume());
      // Toggle CSS animation pause for counter-rotation
      orbitContainerRef.current?.classList.toggle('orbits-paused', paused);
    };

    const visibilityTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => setPaused(false),
      onLeave: () => setPaused(true),
      onEnterBack: () => setPaused(false),
      onLeaveBack: () => setPaused(true),
    });

    return () => {
      visibilityTrigger.kill();
      innerTweenRef.current?.kill();
      outerTweenRef.current?.kill();
    };
  }, []);

  /* ── Pause / resume on hover ── */
  useEffect(() => {
    const ringTweens = [innerTweenRef.current, outerTweenRef.current];
    if (isHovering) {
      ringTweens.forEach(t => t?.pause());
      orbitContainerRef.current?.classList.add('orbits-paused');
    } else {
      ringTweens.forEach(t => t?.resume());
      orbitContainerRef.current?.classList.remove('orbits-paused');
    }
  }, [isHovering]);

  const activeDetail = moduleDetails[activeModule];
  const activeModuleData = allModules.find(m => m.id === activeModule);
  const ActiveIcon = activeModuleData?.icon || Calendar;
  const activeColor = activeModuleData?.color || '#2EE9A8';

  return (
    <section ref={sectionRef} id="modules" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="orbital-header opacity-0 text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            26 Integrated Modules
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
            What Are the 26 Integrated Modules?
          </h2>
          <p className="text-lg max-w-[700px] mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Every aspect of rental operations covered—from reservations to payments,
            fleet management to customer relationships.
          </p>
        </div>

        {/* Main layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Orbital visualization */}
          <div ref={orbitContainerRef} className="relative w-[350px] h-[350px] md:w-[520px] md:h-[520px] flex-shrink-0">

            {/* Outer orbit ring */}
            <div
              ref={outerOrbitRef}
              className="outer-orbit-ring absolute inset-0 rounded-full"
              style={{ border: '2px dashed color-mix(in srgb, var(--theme-accent) 20%, transparent)' }}
            >
              {outerRingModules.map((module, i) => {
                const angle = (i * 360) / outerRingModules.length;
                const radius = 50;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                const isActive = activeModule === module.id;
                return (
                  <button
                    key={module.id}
                    className="orbit-node opacity-0 absolute w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-[background,box-shadow,scale] duration-300"
                    style={{
                      left: `${x}%`, top: `${y}%`,
                      translate: '-50% -50%',
                      background: isActive ? activeColor : 'var(--theme-surface, rgba(255,255,255,0.05))',
                      boxShadow: isActive ? `0 0 30px ${activeColor}80` : 'none',
                      scale: isActive ? '1.25' : '1',
                      zIndex: isActive ? 10 : 1,
                      border: isActive ? 'none' : '1px solid color-mix(in srgb, var(--theme-accent) 15%, transparent)',
                    }}
                    onClick={() => handleModuleSelect(module.id)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    title={module.title}
                  >
                    <module.icon className="orbit-icon w-4 h-4 md:w-5 md:h-5" style={{ color: isActive ? 'var(--theme-accent-fg)' : 'var(--theme-text)' }} />
                  </button>
                );
              })}
            </div>

            {/* Inner orbit ring */}
            <div
              ref={innerOrbitRef}
              className="inner-orbit-ring absolute rounded-full"
              style={{ inset: '20%', border: '2px dashed color-mix(in srgb, var(--theme-accent) 25%, transparent)' }}
            >
              {innerRingModules.map((module, i) => {
                const angle = (i * 360) / innerRingModules.length;
                const radius = 50;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                const isActive = activeModule === module.id;
                return (
                  <button
                    key={module.id}
                    className="orbit-node opacity-0 absolute w-11 h-11 md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center transition-[background,box-shadow,scale] duration-300"
                    style={{
                      left: `${x}%`, top: `${y}%`,
                      translate: '-50% -50%',
                      background: isActive ? activeColor : 'var(--theme-surface, rgba(255,255,255,0.05))',
                      boxShadow: isActive ? `0 0 30px ${activeColor}80` : 'none',
                      scale: isActive ? '1.25' : '1',
                      zIndex: isActive ? 10 : 1,
                      border: isActive ? 'none' : '1px solid color-mix(in srgb, var(--theme-accent) 15%, transparent)',
                    }}
                    onClick={() => handleModuleSelect(module.id)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    title={module.title}
                  >
                    <module.icon className="orbit-icon w-5 h-5 md:w-6 md:h-6" style={{ color: isActive ? 'var(--theme-accent-fg)' : 'var(--theme-text)' }} />
                  </button>
                );
              })}
            </div>

            {/* Decorative inner circles */}
            <div className="absolute rounded-full" style={{ inset: '36%', border: '1px solid color-mix(in srgb, var(--theme-accent) 8%, transparent)' }} />
            <div className="absolute rounded-full" style={{ inset: '44%', border: '1px solid color-mix(in srgb, var(--theme-accent) 6%, transparent)' }} />

            {/* Center hub */}
            <div
              ref={centerRef}
              className="opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--theme-surface, rgba(255,255,255,0.08))',
                backdropFilter: 'blur(12px)',
                border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              }}
            >
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-heading font-bold" style={{ color: 'var(--theme-accent)' }}>26</span>
                <span className="block text-[10px] uppercase tracking-wider" style={{ color: 'var(--theme-text-muted)' }}>Modules</span>
              </div>
            </div>
          </div>

          {/* Feature info panel — redesigned as 2-col grid of mini-cards */}
          <div className="w-full max-w-md">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'var(--theme-surface, rgba(255,255,255,0.05))',
                backdropFilter: 'blur(16px)',
                border: '1px solid color-mix(in srgb, var(--theme-accent) 15%, transparent)',
              }}
            >
              {/* Module header */}
              <div
                key={`header-${panelKey}`}
                className="flex items-start gap-4 mb-6"
                style={{ animation: 'orbitalFadeSlideIn 0.4s ease-out both' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${activeColor}20`, border: `1px solid ${activeColor}30` }}
                >
                  <ActiveIcon className="w-7 h-7" style={{ color: activeColor }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight" style={{ color: 'var(--theme-text)' }}>
                    {activeDetail.title}
                  </h3>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                    {activeDetail.description}
                  </p>
                </div>
              </div>

              {/* Feature grid — 2 columns of mini-cards */}
              <div
                key={`features-${panelKey}`}
                className="grid grid-cols-2 gap-3"
                style={{ animation: 'orbitalFadeSlideIn 0.4s ease-out 0.1s both' }}
              >
                {activeDetail.features.slice(0, 6).map((feature, i) => {
                  const cardColor = featureCardColors[i % featureCardColors.length];
                  return (
                    <div
                      key={i}
                      className="rounded-lg p-3 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: 'var(--theme-navy-800, rgba(15,23,42,0.5))',
                        border: '1px solid color-mix(in srgb, var(--theme-accent) 10%, transparent)',
                        animation: `orbitalFadeSlideIn 0.35s ease-out ${0.06 * i}s both`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mb-2"
                        style={{ backgroundColor: cardColor }}
                      />
                      <span className="text-xs leading-snug" style={{ color: 'var(--theme-text)' }}>
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbitalFadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes counterRotateInner {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes counterRotateOuter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .inner-orbit-ring .orbit-icon {
          animation: counterRotateInner ${INNER_DURATION}s linear infinite;
        }
        .outer-orbit-ring .orbit-icon {
          animation: counterRotateOuter ${OUTER_DURATION}s linear infinite;
        }
        .orbits-paused .orbit-icon {
          animation-play-state: paused;
        }
        .orbit-node:hover {
          border-color: var(--theme-accent) !important;
          box-shadow: 0 0 16px color-mix(in srgb, var(--theme-accent) 25%, transparent) !important;
        }
      `}</style>
    </section>
  );
}