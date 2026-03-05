import { Car, Calendar, Cloud, Smartphone, CreditCard, Settings } from 'lucide-react';
import { FeaturePageTemplate } from '../components/templates/FeaturePageTemplate';

// Auto Rental System Page
export function AutoRentalSystemPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Car className="w-10 h-10" />,
        title: 'Auto Rental System',
        subtitle:
          'Complete end-to-end operational management for vehicle and equipment rental businesses with intelligent workflow automation.',
      }}
      painPoints={[
        'Managing reservations across multiple spreadsheets and disconnected systems',
        'Time-consuming manual check-in/out processes with paper agreements',
        'No real-time visibility into fleet availability and utilization',
        'Difficulty tracking maintenance, damage claims, and vehicle history',
        'Limited reporting capabilities and business intelligence',
      ]}
      solutions={[
        'Centralized platform managing all aspects of your rental operations in one place',
        'Digital check-in/out with e-signatures, automated workflows, and photo documentation',
        'Real-time fleet dashboard with availability, status, and utilization metrics',
        'Integrated maintenance tracking, claims management, and complete vehicle lifecycle history',
        'Comprehensive reporting and analytics with customizable KPI dashboards',
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Configure Your Fleet',
          description:
            'Add your vehicles, set pricing rules, define locations, and customize workflows to match your operations.',
        },
        {
          step: 2,
          title: 'Start Processing Rentals',
          description:
            'Create reservations, check-out vehicles, process payments, and manage the entire rental lifecycle digitally.',
        },
        {
          step: 3,
          title: 'Monitor & Optimize',
          description:
            'Track performance metrics, analyze utilization data, and receive AI-powered recommendations for improvement.',
        },
      ]}
      benefits={[
        { metric: '50%', label: 'Faster Check-in' },
        { metric: '90%', label: 'Paperless Operations' },
        { metric: 'Real-time', label: 'Fleet Visibility' },
        { metric: '24/7', label: 'Access Anywhere' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// Online Reservation Plugin Page
export function OnlineReservationPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Calendar className="w-10 h-10" />,
        title: 'Online Reservation Plugin',
        subtitle:
          'Convert website visitors into reservations instantly with a mobile-first booking flow that drives conversions and maximizes direct bookings.',
      }}
      painPoints={[
        'Losing bookings to competitors with better online presence and instant booking capabilities',
        'High dependency on phone calls limiting after-hours and international bookings',
        'Third-party booking platforms taking 15-25% commission on every reservation',
        'No control over customer experience or branding in the booking process',
        "Generic booking widgets that don't match your website design and brand identity",
      ]}
      solutions={[
        'Fully branded booking widget that perfectly matches your website design and colors',
        'Real-time fleet availability synced directly from your inventory system',
        'Zero commission fees - all bookings go directly to your system without middlemen',
        '24/7 online booking capability capturing after-hours and international customers',
        "AI-powered vehicle recommendations showing 'Best Value' and 'Most Popular' options",
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Customize Your Widget',
          description:
            'Configure brand colors, logos, available vehicle categories, and booking rules to match your business perfectly.',
        },
        {
          step: 2,
          title: 'Embed with One Line',
          description:
            'Add a simple code snippet to any website platform - WordPress, Wix, Shopify, or custom sites. Works instantly.',
        },
        {
          step: 3,
          title: 'Start Capturing Bookings',
          description:
            'Go live in minutes. Customers book online, reservations sync automatically, and you receive instant notifications.',
        },
      ]}
      benefits={[
        { metric: '+45%', label: 'Direct Bookings' },
        { metric: '0%', label: 'Commission Fees' },
        { metric: '24/7', label: 'Online Availability' },
        { metric: '<5min', label: 'Setup Time' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    />
  );
}

// RentWorksPlus+ API Page
export function RentallAPIPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Cloud className="w-10 h-10" />,
        title: 'RentWorksPlus+ API',
        subtitle:
          'Build your own rental experience with powerful APIs. Full endpoints for reservations, fleet, pricing, customers, and enterprise-grade scalability.',
      }}
      painPoints={[
        'Vendor lock-in with no ability to customize or extend functionality for your needs',
        'Cannot integrate with existing CRM, accounting, or telematics systems',
        'No way to build custom mobile apps or unique customer-facing experiences',
        "Limited by vendor's feature roadmap - can't innovate independently",
        'Difficulty accessing your own rental data for custom analysis or reporting',
      ]}
      solutions={[
        'Complete REST API access to all platform features and your rental data',
        'OAuth 2.0 secure authentication with granular permission controls',
        'Webhook support for real-time notifications on bookings, vehicle events, and payments',
        'Comprehensive documentation with code examples in Python, JavaScript, PHP, and Ruby',
        'Sandbox environment for rapid prototyping and testing without affecting live operations',
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Generate API Keys',
          description:
            'Create secure API credentials from your dashboard and explore our interactive API documentation with live examples.',
        },
        {
          step: 2,
          title: 'Test in Sandbox',
          description:
            'Build and test your integration in our isolated sandbox environment without affecting live data or operations.',
        },
        {
          step: 3,
          title: 'Deploy & Scale',
          description:
            'Launch to production, monitor API usage and performance in real-time, and scale as your business grows.',
        },
      ]}
      benefits={[
        { metric: '100+', label: 'Ready Integrations' },
        { metric: '70%', label: 'Faster Development' },
        { metric: '99.9%', label: 'Uptime SLA' },
        { metric: 'REST', label: 'Modern API' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
    />
  );
}

// Mobile-Responsive Web App Page
export function MobileApplicationPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Smartphone className="w-10 h-10" />,
        title: 'Mobile-Responsive Web App',
        subtitle:
          'Manage your rental operations from anywhere. Full check-in/out workflows, damage capture, and live fleet visibility perfect for curbside, delivery, and airport operations.',
      }}
      painPoints={[
        'Staff tied to desktop computers at the office limiting flexibility and service speed',
        'Cannot process rentals at customer locations, events, or delivery sites',
        'Difficult vehicle inspections without proper photo capture and documentation tools',
        'Poor mobile browser experience with desktop-only rental software interfaces',
        'Lost productivity when team members are away from the office or at remote locations',
      ]}
      solutions={[
        'Fully responsive web interface optimized for smartphones and tablets - no app download needed',
        'Complete check-in/out workflows on any device with touch-optimized controls',
        'Built-in camera integration for instant damage photos, ID capture, and signature collection',
        'Offline mode works in areas with poor connectivity - syncs automatically when online',
        'Perfect for curbside pickup, delivery operations, airport locations, and remote branch offices',
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Open Your Browser',
          description:
            'Access RentWorksPlus+ on any smartphone or tablet browser - no app store downloads, updates, or installation required. Works instantly.',
        },
        {
          step: 2,
          title: 'Process Complete Rentals',
          description:
            'Handle full check-out and check-in workflows on-site with customers using touch-friendly interface, camera, and e-signature capture.',
        },
        {
          step: 3,
          title: 'Auto-Sync Everything',
          description:
            'All changes sync instantly to your main system. Offline mode captures data locally and syncs automatically when connection returns.',
        },
      ]}
      benefits={[
        { metric: '50%', label: 'Faster Field Operations' },
        { metric: '30%', label: 'Fewer Damage Disputes' },
        { metric: '100%', label: 'Mobile-Ready Staff' },
        { metric: 'Offline', label: 'Mode Included' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
    />
  );
}

// RentWorksPlus+ Payments Page
export function PaymentsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <CreditCard className="w-10 h-10" />,
        title: 'RentWorksPlus+ Payments',
        subtitle:
          'Integrated payment processing with 5 supported methods: Cash, Card Present, Pay By Link, Direct Debit, and Check. Unified payment ledger across all locations.',
      }}
      painPoints={[
        "Using separate payment terminals that don't integrate with your rental software",
        'Manual reconciliation between payment systems and rental transactions taking hours daily',
        'Limited payment methods frustrating customers who prefer specific payment options',
        'High payment processing fees (3.5%+) eating into your profit margins',
        'Security concerns and liability when handling card information manually',
      ]}
      solutions={[
        '5 fully integrated payment methods: Cash tracking, Card Present, Pay By Link, Direct Debit, and Check processing',
        'Automatic reconciliation - payments instantly matched to rental contracts with zero manual work',
        'Competitive 2.9% processing rate with transparent pricing and no hidden fees',
        'PCI-compliant card handling with tokenization, fraud protection, and secure data storage',
        'Unified payment ledger across all locations with real-time reporting and accounting exports',
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Activate Payment Types',
          description:
            'Choose which of the 5 payment methods to enable. Connect your merchant account or use our integrated payment processor with competitive rates.',
        },
        {
          step: 2,
          title: 'Accept Payments Everywhere',
          description:
            'Process payments at check-out, send secure payment links via email/SMS, or set up recurring auto-billing for long-term corporate rentals.',
        },
        {
          step: 3,
          title: 'Auto-Match & Report',
          description:
            'Every payment automatically matches to its rental contract. Generate detailed reports and export to QuickBooks, Xero, or your accounting system.',
        },
      ]}
      benefits={[
        { metric: '99%', label: 'Payment Success Rate' },
        { metric: '40%', label: 'Less Reconciliation' },
        { metric: '5', label: 'Payment Methods' },
        { metric: '2.9%', label: 'Processing Rate' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800"
    />
  );
}

// Add-on Modules Page
export function AddOnsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Settings className="w-10 h-10" />,
        title: 'Add-on Modules',
        subtitle:
          'Extend your platform with powerful rental modules: Reservation Planner, Rate Configuration Studio, Customer Portfolio, Corporate Management, Fleet Maintenance, Lost & Found, and Claims & Damage Management.',
      }}
      painPoints={[
        "One-size-fits-all rental software that doesn't match your specific business workflows",
        "Paying for bloated software with features you'll never use or need",
        'Missing specialized tools for your industry (equipment vs cars vs events)',
        'Cannot add corporate billing, advanced pricing, or maintenance tracking without switching platforms',
        'Rigid systems that force you to adapt your business instead of software adapting to you',
      ]}
      solutions={[
        'Modular architecture - start with core platform and add only what you need when you need it',
        '7+ specialized modules: Reservation Planner, Rate Studio, Customer Portfolio, Corporate Management, Fleet Maintenance, Lost & Found, Claims Management',
        'One-click activation from dashboard - modules integrate instantly with existing workflows',
        'Pay-per-module pricing - only pay for features your business actually uses',
        'Seamless integration - modules share data and work together as unified system',
      ]}
      howItWorks={[
        {
          step: 1,
          title: 'Browse Module Library',
          description:
            'Review 7+ specialized add-on modules with detailed descriptions, feature lists, pricing, and ROI calculators showing potential business impact.',
        },
        {
          step: 2,
          title: 'Activate with One Click',
          description:
            'Enable any module instantly from your dashboard - no complex installation, configuration files, or IT support required. Goes live immediately.',
        },
        {
          step: 3,
          title: 'Customize & Automate',
          description:
            'Configure each module to match your workflows. Modules integrate seamlessly with core platform and each other for unified operations.',
        },
      ]}
      benefits={[
        { metric: '22%', label: 'More Revenue' },
        { metric: '35%', label: 'Fewer Errors' },
        { metric: '7+', label: 'Specialized Modules' },
        { metric: '100%', label: 'Unified Experience' },
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}
