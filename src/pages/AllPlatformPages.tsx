import { Car, Calendar, Cloud, Smartphone, CreditCard, Settings } from 'lucide-react';
import { FeaturePageTemplate } from '../components/templates/FeaturePageTemplate';

// Auto Rental System Page
export function AutoRentalSystemPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Car className="w-10 h-10" />,
        title: "Auto Rental System",
        subtitle: "Complete end-to-end operational management for vehicle and equipment rental businesses with intelligent workflow automation."
      }}
      painPoints={[
        "Managing reservations across multiple spreadsheets and disconnected systems",
        "Time-consuming manual check-in/out processes with paper agreements",
        "No real-time visibility into fleet availability and utilization",
        "Difficulty tracking maintenance, damage claims, and vehicle history",
        "Limited reporting capabilities and business intelligence"
      ]}
      solutions={[
        "Centralized platform managing all aspects of your rental operations in one place",
        "Digital check-in/out with e-signatures, automated workflows, and photo documentation",
        "Real-time fleet dashboard with availability, status, and utilization metrics",
        "Integrated maintenance tracking, claims management, and complete vehicle lifecycle history",
        "Comprehensive reporting and analytics with customizable KPI dashboards"
      ]}
      howItWorks={[
        { step: 1, title: "Configure Your Fleet", description: "Add your vehicles, set pricing rules, define locations, and customize workflows to match your operations." },
        { step: 2, title: "Start Processing Rentals", description: "Create reservations, check-out vehicles, process payments, and manage the entire rental lifecycle digitally." },
        { step: 3, title: "Monitor & Optimize", description: "Track performance metrics, analyze utilization data, and receive AI-powered recommendations for improvement." }
      ]}
      benefits={[
        { metric: "50%", label: "Faster Check-in" },
        { metric: "90%", label: "Paperless Operations" },
        { metric: "Real-time", label: "Fleet Visibility" },
        { metric: "24/7", label: "Access Anywhere" }
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
        title: "Online Reservation Plugin",
        subtitle: "Convert website visitors into reservations instantly with a mobile-first booking flow that drives conversions and maximizes direct bookings."
      }}
      painPoints={[
        "Manual processes slow down booking operations and reduce efficiency",
        "Poor online booking experience that reduces conversions and loses customers",
        "Disconnected systems that require double entry and manual reconciliation",
        "No predictive intelligence for pricing or availability optimization",
        "Legacy booking systems that can't compete with modern OTA experiences"
      ]}
      solutions={[
        "Real-time fleet availability and pricing with instant booking confirmation",
        "Mobile-first booking flow optimized for conversions on all devices",
        "Intelligent upsells: insurance, extras, promo codes automatically applied",
        "AI-powered recommendations showing 'Best choice' and 'Save 15%' options",
        "Fully branded experience across all devices that builds customer trust"
      ]}
      howItWorks={[
        { step: 1, title: "Configure Your Booking Flow", description: "Customize the booking widget with your branding, set pricing rules, define vehicle categories, and configure upsell options." },
        { step: 2, title: "Embed on Your Website", description: "Add a simple code snippet to any website platform - integrates seamlessly with WordPress, Wix, Shopify, or custom sites." },
        { step: 3, title: "Optimize & Track Conversions", description: "Monitor booking analytics, track conversion rates, and receive AI-powered recommendations to maximize direct reservations." }
      ]}
      benefits={[
        { metric: "+45%", label: "Direct Bookings" },
        { metric: "60%", label: "Fewer Reservation Errors" },
        { metric: "+20%", label: "Conversion from AI" },
        { metric: "24/7", label: "Online Availability" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// RentWorksPlus+ API Page
export function RentallAPIPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Cloud className="w-10 h-10" />,
        title: "RentWorksPlus+ API",
        subtitle: "Build your own rental experience with powerful APIs. Full endpoints for reservations, fleet, pricing, customers, and enterprise-grade scalability."
      }}
      painPoints={[
        "Manual processes slow down booking operations and reduce efficiency",
        "Poor online booking experience that reduces conversions and loses customers",
        "Disconnected systems that require double entry and manual reconciliation",
        "No predictive intelligence for pricing or availability optimization",
        "Difficult mobile workflows for staff in the field"
      ]}
      solutions={[
        "Full endpoints for reservations, fleet management, pricing, and customer data",
        "Webhooks for booking events and real-time vehicle status updates",
        "OAuth-secured developer access with comprehensive API documentation",
        "Perfect for mobile apps, partner integrations, kiosks, and custom experiences",
        "Sandbox environment for rapid prototyping and testing without affecting live data"
      ]}
      howItWorks={[
        { step: 1, title: "Get API Credentials", description: "Generate your secure API keys from the dashboard and explore comprehensive documentation with code examples in multiple languages." },
        { step: 2, title: "Build & Test in Sandbox", description: "Use our sandbox environment to develop and test your integration without affecting live data - perfect for rapid prototyping." },
        { step: 3, title: "Deploy & Monitor", description: "Move to production with confidence, monitor API usage in real-time, and scale your integration as your business grows." }
      ]}
      benefits={[
        { metric: "100+", label: "Ready Connectors" },
        { metric: "70%", label: "Faster Integration" },
        { metric: "REST", label: "Modern API" },
        { metric: "99.9%", label: "Enterprise Uptime" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// Mobile-Responsive Web App Page
export function MobileApplicationPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Smartphone className="w-10 h-10" />,
        title: "Mobile-Responsive Web App",
        subtitle: "Manage your rental operations from anywhere. Full check-in/out workflows, damage capture, and live fleet visibility perfect for curbside, delivery, and airport operations."
      }}
      painPoints={[
        "Manual processes slow down booking operations and reduce efficiency",
        "Poor online booking experience that reduces conversions and loses customers",
        "Disconnected systems that require double entry and manual reconciliation",
        "No predictive intelligence for pricing or availability optimization",
        "Difficult mobile workflows for staff in the field"
      ]}
      solutions={[
        "Full check-in/out workflows accessible from any mobile device",
        "Capture damage photos, signatures, and IDs directly within the app",
        "Live fleet availability and real-time vehicle assignments",
        "Perfect for curbside pickup, delivery operations, and airport locations",
        "Offline-friendly mode for poor connectivity locations with automatic sync"
      ]}
      howItWorks={[
        { step: 1, title: "Access from Any Device", description: "Simply open your browser on any smartphone or tablet - no app store downloads required, works instantly." },
        { step: 2, title: "Complete Mobile Check-Out/In", description: "Process full rental workflows on-site with customers using touch-optimized interface, camera integration, and e-signatures." },
        { step: 3, title: "Sync & Track in Real-Time", description: "All actions sync instantly to your main system with offline support for spotty connections and automatic reconciliation." }
      ]}
      benefits={[
        { metric: "50%", label: "Faster Check-in/Out" },
        { metric: "30%", label: "Fewer Disputes" },
        { metric: "100%", label: "Mobile-Ready Staff" },
        { metric: "Offline", label: "Mode Supported" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// RentWorksPlus+ Payments Page
export function PaymentsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <CreditCard className="w-10 h-10" />,
        title: "RentWorksPlus+ Payments",
        subtitle: "Integrated payment processing with 5 supported methods: Cash, Card Present, Pay By Link, Direct Debit, and Check. Unified payment ledger across all locations."
      }}
      painPoints={[
        "Manual processes slow down booking operations and reduce efficiency",
        "Poor online booking experience that reduces conversions and loses customers",
        "Disconnected systems that require double entry and manual reconciliation",
        "Limited payment support and reconciliation issues across locations",
        "Add-ons not unified or automated in the payment workflow"
      ]}
      solutions={[
        "Cash, card present, and pay by link for flexible payment acceptance",
        "Direct debit for corporate billing and recurring rental agreements",
        "Check processing with hosted payment link for remote transactions",
        "Automatic reconciliation and unified reporting across all payment methods",
        "Fraud protection with tokenization and PCI-compliant security"
      ]}
      howItWorks={[
        { step: 1, title: "Activate Payment Methods", description: "Choose which of the 5 payment types to enable and connect your merchant account or use our integrated processor." },
        { step: 2, title: "Process Payments Seamlessly", description: "Accept payments during check-out, send secure payment links via email, or set up auto-billing for long-term and corporate rentals." },
        { step: 3, title: "Auto-Reconcile & Report", description: "All transactions automatically match to rentals with detailed reports, unified ledger, and one-click accounting system exports." }
      ]}
      benefits={[
        { metric: "99%", label: "Payment Success Rate" },
        { metric: "40%", label: "Less Reconciliation Time" },
        { metric: "5", label: "Payment Methods" },
        { metric: "Unified", label: "Payment Ledger" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1703206814593-b54decff15cd?w=800"
    />
  );
}

// Add-on Modules Page
export function AddOnsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Settings className="w-10 h-10" />,
        title: "Add-on Modules",
        subtitle: "Extend your platform with powerful rental modules: Reservation Planner, Rate Configuration Studio, Customer Portfolio, Corporate Management, Fleet Maintenance, Lost & Found, and Claims & Damage Management."
      }}
      painPoints={[
        "Manual processes slow down booking operations and reduce efficiency",
        "Poor online booking experience that reduces conversions and loses customers",
        "Disconnected systems that require double entry and manual reconciliation",
        "No predictive intelligence for pricing or availability optimization",
        "Add-ons not unified or automated across rental workflows"
      ]}
      solutions={[
        "Reservation Planner with calendar view and drag-and-drop scheduling",
        "Rate Configuration Studio for dynamic pricing and seasonal rate management",
        "Customer Portfolio for tracking loyalty, preferences, and rental history",
        "Corporate Management for enterprise accounts and billing workflows",
        "Fleet Maintenance scheduler, Lost & Found tracker, and Claims & Damage Management",
        "22% more revenue opportunities captured through automated upsells",
        "35% fewer operational errors with unified rental experience"
      ]}
      howItWorks={[
        { step: 1, title: "Browse Module Library", description: "Review 7+ specialized add-on modules with detailed descriptions of features, use cases, and ROI projections." },
        { step: 2, title: "Activate Instantly", description: "Enable modules with one click from your dashboard - no complex installation, configuration, or IT support required." },
        { step: 3, title: "Customize & Automate", description: "Configure each module to your needs and integrate seamlessly with existing workflows for unified rental operations." }
      ]}
      benefits={[
        { metric: "22%", label: "More Revenue" },
        { metric: "35%", label: "Fewer Errors" },
        { metric: "7+", label: "Specialized Modules" },
        { metric: "100%", label: "Unified Experience" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}
