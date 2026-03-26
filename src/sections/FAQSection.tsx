import { useEffect, useRef, useState, type ComponentType } from 'react';
import { gsap } from 'gsap';
import {
  ChevronDown,
  Building2,
  CreditCard,
  Camera,
  MapPin,
  BarChart3,
  Shield,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type IconComponent = ComponentType<LucideProps>;

const faqs: { question: string; answer: string; icon: IconComponent }[] = [
  {
    question: 'What is RentWorksPlus and who is it for?',
    answer:
      'RentWorksPlus is a cloud-based car rental management platform built by Bluebird Auto Rental Systems. It provides 26 integrated modules that cover the full rental lifecycle — from reservations and check-in through vehicle inspection, payment processing, and check-out. The platform is designed for car rental agencies, dealerships with rental departments, and fleet operators who need a unified system to manage daily operations. With multi-tenant architecture and role-based access control, RentWorksPlus supports single-location operators and multi-branch enterprises alike, allowing each location to maintain its own configuration for rates, vehicles, and business rules.',
    icon: Building2,
  },
  {
    question: 'What payment gateways does RentWorksPlus support?',
    answer:
      'RentWorksPlus integrates with Adyen for payment gateway processing, plus hosted payment solutions and direct billing. The system provides real-time payment status tracking, automatic error recovery, and support for multiple payment methods per transaction including card-present, card-not-present, hosted payment pages, checks, and cash.',
    icon: CreditCard,
  },
  {
    question: 'How does the digital vehicle inspection work?',
    answer:
      'The RentWorksPlus inspection system uses photo-based documentation across 60+ mapped vehicle zones. At check-in and check-out, staff use the visual vehicle diagram to mark damage locations, classify damage types (scratch, dent, crack, stain, chip, tear, rust, missing, or broken), and attach timestamped photos as evidence. The system also offers a customer self-service inspection option, allowing renters to document vehicle condition independently using their own device before and after the rental period. All inspection data is stored digitally alongside the rental contract, creating a complete audit trail for claims and dispute resolution.',
    icon: Camera,
  },
  {
    question: 'Can RentWorksPlus manage multiple rental locations?',
    answer:
      'Yes. RentWorksPlus is built on a multi-tenant, multi-location architecture. Each location can have its own configuration for vehicle categories, fuel pricing, rate rules, seasonal pricing, notification preferences, counter positions, and staff roles. The system also supports vehicle inventory tracking across locations with inter-branch transport coordination, so operators always know which vehicles are at which branch. Enterprise-level features include 20+ configurable system areas, terminal-specific settings for each workstation, and centralized user management with role-based permissions that can vary by location.',
    icon: MapPin,
  },
  {
    question: 'What analytics and reporting does RentWorksPlus provide?',
    answer:
      'The RentWorksPlus dashboard provides 15+ real-time KPIs covering fleet status, operational load, class availability, agreement status, conversion rates, equipment usage, maintenance alerts, no-show rates, revenue trends, top add-ons, revenue by vehicle class, top revenue vehicles, and revenue pipeline. These metrics update in real time, giving managers immediate visibility into fleet utilization, revenue performance, and operational efficiency. The analytics are based on current and historical operational data, helping operators identify patterns and make informed decisions about fleet sizing, pricing, and resource allocation.',
    icon: BarChart3,
  },
  {
    question: 'How does RentWorksPlus handle claims management?',
    answer:
      'RentWorksPlus provides end-to-end claims management with a detailed nine-tab interface covering overview, contacts, vehicles, financial summary, repair orders, documents, history, expenses, and payments. Each claim can track multiple vehicles and multiple contacts, making it suitable for complex incidents. The system includes expense tracking with mark-as-paid workflow, payment tracking with received and void capabilities, repair order creation with status updates, and document management with upload and checklist features. A full audit trail records every change to the claim, and the financial summary tab consolidates all costs for quick review.',
    icon: Shield,
  },
];

function FAQItem({
  question,
  answer,
  icon: Icon,
  isOpen,
  onToggle,
  isLast,
}: {
  question: string;
  answer: string;
  icon: IconComponent;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  return (
    <div
      className="faq-item transition-colors duration-200"
      style={{
        borderLeft: isOpen
          ? '2px solid var(--theme-accent)'
          : '2px solid transparent',
        background: isOpen
          ? 'color-mix(in srgb, var(--theme-accent) 5%, transparent)'
          : 'transparent',
        borderBottom: isLast
          ? 'none'
          : '1px solid color-mix(in srgb, var(--theme-divider) 80%, transparent)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200 group"
        style={{ cursor: 'pointer' }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.parentElement!.style.background =
              'color-mix(in srgb, var(--theme-accent) 3%, transparent)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.parentElement!.style.background = 'transparent';
          }
        }}
        aria-expanded={isOpen}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen
              ? 'color-mix(in srgb, var(--theme-accent) 15%, transparent)'
              : 'color-mix(in srgb, var(--theme-accent) 8%, transparent)',
            border: isOpen
              ? '1px solid color-mix(in srgb, var(--theme-accent) 25%, transparent)'
              : '1px solid transparent',
          }}
        >
          <Icon
            className="w-4 h-4 transition-colors duration-200"
            style={{
              color: isOpen ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
            }}
          />
        </div>
        <h3
          className="font-heading text-[15px] md:text-base font-semibold flex-1 pr-2 transition-colors duration-200"
          style={{
            color: isOpen ? 'var(--theme-accent)' : 'var(--theme-text)',
          }}
        >
          {question}
        </h3>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen
              ? 'color-mix(in srgb, var(--theme-accent) 15%, transparent)'
              : 'color-mix(in srgb, var(--theme-text-muted) 8%, transparent)',
          }}
        >
          <ChevronDown
            className="w-3.5 h-3.5 transition-transform duration-300"
            style={{
              color: isOpen ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p
          className="pl-[3.25rem] pr-5 pb-4 text-sm leading-relaxed"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      const items = listRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--theme-accent) 6%, transparent) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-10 opacity-0">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--theme-accent) 20%, transparent)',
              color: 'var(--theme-accent)',
            }}
          >
            FAQ
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold mb-3"
            style={{ color: 'var(--theme-text)' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-sm md:text-base max-w-[560px] mx-auto"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Common questions about RentWorksPlus and how it helps rental businesses operate more efficiently.
          </p>
        </div>

        <div
          ref={listRef}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
