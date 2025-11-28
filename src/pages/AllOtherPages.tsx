import { Link } from '../components/Router';
import { ArrowLeft, ArrowRight, Check, Car, Truck, Zap, Users, Wrench, TrendingUp, Building2, Briefcase, BookOpen, Calendar, Download, FileText, Clock, Tag, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect, useState } from 'react';

// Solution Page Template Component
interface SolutionPageProps {
  hero: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    ctaText: string;
    mockupImage: string;
  };
  audienceAlignment: {
    title: string;
    priorities: string[];
  };
  strengths: string[];
  useCases: { title: string; description: string }[];
  intelligence: { title: string; description: string }[];
  metrics: { metric: string; label: string }[];
  closingCTA: string;
}

function SolutionPageTemplate({
  hero,
  audienceAlignment,
  strengths,
  useCases,
  intelligence,
  metrics,
  closingCTA
}: SolutionPageProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#007A55]/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center text-white mb-6">
                {hero.icon}
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl font-semibold">{hero.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {hero.subtitle}
              </p>
              <button className="bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 group">
                {hero.ctaText}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-[#007A55] opacity-20 blur-3xl rounded-3xl" />
                <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <ImageWithFallback
                    src={hero.mockupImage}
                    alt={hero.title}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out;
          }
          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out;
          }
        `}</style>
      </section>

      {/* Audience Alignment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] mb-6 text-3xl lg:text-4xl font-semibold">{audienceAlignment.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceAlignment.priorities.map((priority, index) => (
              <div key={index} className="bg-[#F4F5F7] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#007A55] flex items-center justify-center text-white mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-[#081E32] font-medium">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Advantages Section */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] mb-12 text-3xl lg:text-4xl font-semibold text-center">
            Strengths & Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#007A55] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#007A55] flex items-center justify-center text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Real Scenarios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] mb-12 text-3xl lg:text-4xl font-semibold text-center">
            Use Cases & Real Scenarios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#F4F5F7] rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-[#081E32] mb-3 text-lg font-semibold">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Highlights Section */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] mb-12 text-3xl lg:text-4xl font-semibold text-center">
            Intelligence Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {intelligence.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-[#007A55] shadow-lg">
                <h3 className="text-[#081E32] mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#F4F5F7] rounded-2xl border border-gray-200 hover:border-[#007A55] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-[#007A55] mb-2 animate-pulse-metric">{metric.metric}</div>
                <div className="text-gray-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-metric {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-float-in {
            animation: float-in 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-pulse-metric {
            animation: pulse-metric 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6 text-3xl lg:text-4xl font-semibold">{closingCTA}</h2>
          <p className="text-xl text-gray-300 mb-8">
            See it in action with a personalized demo tailored to your business needs.
          </p>
          <button className="bg-[#007A55] text-white px-10 py-5 rounded-xl hover:bg-[#006644] transition-all duration-300 hover:scale-105 text-lg">
            Schedule Your Demo
          </button>
        </div>
      </section>
    </div>
  );
}

// Simple Page Template (for non-priority pages)
function SimplePage({ title, description, backLink = "/" }: { title: string; description: string; backLink?: string }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={backLink} className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{description}</p>
          <div className="mt-8">
            <button className="bg-[#007A55] text-white px-8 py-4 rounded hover:bg-[#006644] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-gray-600 text-lg">
              This page is part of the complete RentWorksPlus+ navigation structure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ===========================================
// SOLUTIONS PAGES - BY BUSINESS TYPE
// ===========================================

export function MultiLocationPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Building2 className="w-10 h-10" />,
        title: "Scale Your Rental Network with a Unified AI-Powered Platform",
        subtitle: "Franchise and multi-location operators need consistency, visibility, and control. RentWorksPlus+ centralizes operations with synchronized pricing, fleet availability, and performance insights—across every branch.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Consistent customer experience across branches",
          "Unified pricing and policies",
          "Balanced fleet distribution",
          "Central oversight with branch-level flexibility"
        ]
      }}
      strengths={[
        "Unified multi-branch dashboard with real-time visibility across all locations",
        "AI-driven pricing across markets automatically adjusts based on local demand",
        "Cross-location fleet balancing recommendations to maximize utilization",
        "Enterprise permissions & audit logs for franchise compliance and security",
        "Standardized workflows and policies enforced consistently across network",
        "Real-time branch performance comparison with KPI benchmarking",
        "Centralized customer database with cross-location rental history"
      ]}
      useCases={[
        { title: "Fleet Visibility Across Branches", description: "See fleet availability for all branches in one unified view with drag-and-drop allocation." },
        { title: "Auto-Transfer Vehicles", description: "AI recommends vehicle transfers based on demand forecasts and booking patterns." },
        { title: "Align Pricing Across Regions", description: "Set base pricing centrally while allowing local market adjustments within guidelines." },
        { title: "Compare Branch Performance", description: "Revenue, utilization & KPIs per location with actionable improvement recommendations." },
        { title: "Franchise Compliance Monitoring", description: "Track adherence to brand standards, pricing rules, and operational guidelines." },
        { title: "Centralized Customer Service", description: "Handle customer inquiries and reservations for any branch from central operations." }
      ]}
      intelligence={[
        { title: "AI Fleet Transfer Recommendations", description: "Machine learning analyzes booking patterns and suggests optimal vehicle transfers between branches to maximize network-wide utilization." },
        { title: "Dynamic Rate Adjustments Per Market", description: "Smart pricing engine adapts rates based on local competition, seasonality, and demand while maintaining brand consistency." },
        { title: "Franchise-Wide KPI Visualization", description: "Executive dashboards with drill-down capabilities show performance trends, outliers, and opportunities across your entire network." }
      ]}
      metrics={[
        { metric: "22%", label: "Higher Multi-Branch Utilization" },
        { metric: "35%", label: "Faster Reporting Cycles" },
        { metric: "30%", label: "Stronger Branch Consistency" },
        { metric: "100%", label: "Network Visibility" }
      ]}
      closingCTA="See how RentWorksPlus+ keeps your network unified."
    />
  );
}

export function CorporateFleetsPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Briefcase className="w-10 h-10" />,
        title: "Power Smarter Mobility Programs for Corporate & Long-Term Rentals",
        subtitle: "Corporate mobility depends on accuracy, lifecycle visibility, and billing efficiency. RentWorksPlus+ simplifies long-term leases, contract renewals, and cost-center billing with intelligent automation.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Predictable billing and invoicing",
          "Contract lifecycle control",
          "Employee vehicle allocation",
          "Renewal management and retention"
        ]
      }}
      strengths={[
        "Automated long-term agreements with customizable contract templates and clauses",
        "Contract renewal suggestions powered by utilization data and customer behavior",
        "Cost-center billing and invoicing with department-level allocation and reporting",
        "Mileage & service lifecycle tracking with predictive maintenance scheduling",
        "Digital contracts with e-signatures and automated approval workflows",
        "Corporate account profiles with multi-user access and permission controls",
        "Recurring billing automation with flexible payment terms and schedules"
      ]}
      useCases={[
        { title: "Auto-Generate Monthly Invoices", description: "Automated billing based on contract terms with itemized cost center allocation and approval workflows." },
        { title: "Allocate Vehicles to Departments", description: "Assign vehicles to specific departments or employees with usage tracking and cost attribution." },
        { title: "Track High-Mileage Vehicles", description: "Monitor vehicle mileage and service needs with automated maintenance scheduling alerts." },
        { title: "Manage Long-Term Renewals", description: "Proactive renewal notifications with contract performance analytics and optimization suggestions." },
        { title: "Corporate Portal Access", description: "Self-service portal for employees to request vehicles, track usage, and manage bookings." },
        { title: "Fleet Lifecycle Analytics", description: "Total cost of ownership tracking per vehicle with optimal replacement timing recommendations." }
      ]}
      intelligence={[
        { title: "Renewal Likelihood Scoring", description: "AI analyzes utilization patterns, satisfaction indicators, and contract performance to predict renewal probability and suggest retention strategies." },
        { title: "Contract Profitability Insights", description: "Machine learning evaluates contract performance against operational costs to identify profitable segments and optimization opportunities." },
        { title: "Lifecycle Cost Forecasting", description: "Predictive analytics forecast maintenance, depreciation, and operational costs to optimize fleet composition and replacement timing." }
      ]}
      metrics={[
        { metric: "40%", label: "Fewer Billing Errors" },
        { metric: "50%", label: "Faster Renewal Cycles" },
        { metric: "18%", label: "Higher Customer Retention" },
        { metric: "Auto", label: "Recurring Billing" }
      ]}
      closingCTA="Transform long-term rental operations with AI-driven efficiency."
    />
  );
}

export function TruckCommercialPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Truck className="w-10 h-10" />,
        title: "Commercial Rental Operations Built for Durability, Scale & ROI",
        subtitle: "Commercial rentals involve high-mileage vehicles, complex contracts, and increased service demands. RentWorksPlus+ provides precision tools for reliability, turnover speed, and asset profitability.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Durable asset tracking and documentation",
          "Frequent service intervals and maintenance",
          "Multi-unit rental agreements",
          "Photo-based inspections and condition reports"
        ]
      }}
      strengths={[
        "Predictive maintenance based on mileage, hours, and usage patterns for commercial vehicles",
        "Commercial rate structures supporting hourly, daily, weekly, and project-based pricing",
        "AI damage identification comparing pre and post-rental condition photos automatically",
        "Work order automation integrating with service providers and maintenance schedules",
        "Condition history & documentation with photo timelines and detailed inspection reports",
        "Load, mileage & route tracking integration with telematics and GPS systems",
        "Commercial insurance and liability management with automated certificate generation"
      ]}
      useCases={[
        { title: "Track Maintenance for Heavy-Use Vehicles", description: "Schedule service based on engine hours, mileage, and usage intensity with automated vendor coordination." },
        { title: "Create Multi-Vehicle Contracts", description: "Rent entire fleets to commercial customers with volume pricing and coordinated delivery schedules." },
        { title: "Capture High-Resolution Condition Reports", description: "Document vehicle condition with timestamped photos, videos, and damage annotations for dispute resolution." },
        { title: "Apply Use-Based Pricing", description: "Flexible pricing models based on mileage, operating hours, geographic zones, or payload capacity." },
        { title: "Commercial Customer Management", description: "Dedicated portals for commercial accounts with credit terms, purchase orders, and bulk reservations." },
        { title: "Asset Utilization Optimization", description: "Track commercial vehicle ROI with detailed cost per rental hour and profitability analytics." }
      ]}
      intelligence={[
        { title: "Maintenance Cost Forecasting", description: "AI predicts upcoming service needs and costs based on vehicle age, mileage, and historical maintenance patterns to optimize budget planning." },
        { title: "Commercial Fleet Heatmaps", description: "Visualize demand patterns, utilization hotspots, and underperforming assets to guide fleet composition and deployment strategies." },
        { title: "AI Inspection Comparison", description: "Computer vision automatically detects new damage by comparing pre and post-rental photos, reducing disputes and streamlining turnover." }
      ]}
      metrics={[
        { metric: "28%", label: "Fewer Breakdowns" },
        { metric: "35%", label: "Faster Turnaround" },
        { metric: "15%", label: "Higher Revenue Per Vehicle" },
        { metric: "Auto", label: "Damage Detection" }
      ]}
      closingCTA="Optimize every commercial vehicle with intelligent automation."
    />
  );
}

export function EVMicroMobilityPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Zap className="w-10 h-10" />,
        title: "Next-Generation Intelligence for EV & Micro-Mobility Fleets",
        subtitle: "Electric and micro-mobility fleets require charging-aware insights, rapid turnover, and agile operations. RentWorksPlus+ delivers real-time battery intelligence, routing visibility, and AI optimization.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Battery and charging cycle management",
          "High-frequency rapid turnover",
          "Usage-based dynamic pricing",
          "Geo-location accuracy and tracking"
        ]
      }}
      strengths={[
        "Battery-level monitoring integrated with vehicle telematics and charging infrastructure",
        "Charging cycle management with automated scheduling and station availability tracking",
        "Usage-based fee logic supporting per-minute, per-mile, and per-session pricing models",
        "Real-time vehicle distribution mapping with heatmaps showing demand and availability",
        "Identity verification & safety tools including license validation and rider scoring",
        "High-volume rental workflows optimized for rapid check-out and autonomous returns",
        "Integration with charging networks and renewable energy management systems"
      ]}
      useCases={[
        { title: "Notify Staff When Units Need Charging", description: "Automated alerts when battery levels reach thresholds with optimal charging location recommendations." },
        { title: "Track Distribution Hotspots", description: "Real-time heatmaps show where vehicles are being picked up and dropped off to guide rebalancing." },
        { title: "Optimize Vehicle Placement for Demand", description: "AI predicts demand patterns and suggests strategic pre-positioning of vehicles to high-traffic areas." },
        { title: "Support Dynamic Usage-Based Pricing", description: "Pay-per-distance, pay-per-minute, or subscription models with surge pricing during peak demand." },
        { title: "Geo-Fence Management", description: "Define operational zones, parking areas, and restricted zones with automated compliance enforcement." },
        { title: "Sustainability Reporting", description: "Track emissions saved, energy consumed, and environmental impact metrics for ESG reporting." }
      ]}
      intelligence={[
        { title: "Charging-Aware Fleet Allocation", description: "Smart algorithms factor battery levels, charging station locations, and demand forecasts to optimize fleet deployment and prevent service gaps." },
        { title: "Predictive Battery Depletion", description: "Machine learning predicts battery degradation patterns and remaining useful life to optimize replacement timing and maintenance schedules." },
        { title: "Micro-Mobility Usage Forecasting", description: "AI analyzes weather, events, traffic patterns, and historical data to predict demand surges and guide dynamic pricing strategies." }
      ]}
      metrics={[
        { metric: "30%", label: "Fewer Charge-Related Issues" },
        { metric: "50%", label: "Faster Turnover Cycles" },
        { metric: "25%", label: "More Ride Availability" },
        { metric: "Real-time", label: "Battery Monitoring" }
      ]}
      closingCTA="Scale your electric and micro-mobility fleet with AI intelligence."
    />
  );
}

// ===========================================
// SOLUTIONS PAGES - BY ROLE
// ===========================================

export function OwnersPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <TrendingUp className="w-10 h-10" />,
        title: "Total Visibility for Strategic Rental Leaders",
        subtitle: "Executives rely on clarity. RentWorksPlus+ provides real-time insights across revenue, fleet performance, and market demand so leaders can make informed, data-driven decisions.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Profitability visibility and cash flow",
          "Demand forecasting and capacity planning",
          "Branch and asset comparisons",
          "Strategic oversight and business intelligence"
        ]
      }}
      strengths={[
        "Executive KPI dashboards with customizable metrics and real-time business intelligence",
        "Profitability by vehicle, class, and customer segment with detailed margin analysis",
        "Market demand insights powered by competitive intelligence and booking trends",
        "Automated alerts for outliers and anomalies requiring executive attention",
        "Multi-branch analytics with drill-down capabilities and comparative performance views",
        "Forecasting for fleet needs based on historical trends and growth projections",
        "Financial integration with accounting systems and cash flow management tools"
      ]}
      useCases={[
        { title: "Monitor Daily Revenue in One Screen", description: "Real-time revenue dashboard showing bookings, payments, and profitability across all revenue streams." },
        { title: "Identify Underperforming Units Quickly", description: "Automated analysis highlights vehicles with low utilization or negative margins for immediate action." },
        { title: "Forecast Fleet Investment Needs", description: "Predictive models recommend optimal fleet size, composition, and acquisition timing based on demand trends." },
        { title: "Compare Branch Performance", description: "Side-by-side metrics showing revenue, costs, and profitability across locations with best practice identification." },
        { title: "Market Opportunity Analysis", description: "Identify untapped customer segments, underserved markets, and expansion opportunities." },
        { title: "Strategic Planning Tools", description: "Scenario modeling for fleet expansion, pricing changes, and market entry decisions." }
      ]}
      intelligence={[
        { title: "AI Demand Prediction", description: "Machine learning analyzes seasonal patterns, local events, and market trends to forecast demand with 95%+ accuracy for strategic capacity planning." },
        { title: "Revenue Optimization Modeling", description: "Advanced algorithms test pricing scenarios and fleet mix strategies to maximize revenue and profitability across customer segments." },
        { title: "Deep KPI Analytics", description: "Comprehensive business intelligence with leading and lagging indicators, trend analysis, and automated insight generation for strategic decision-making." }
      ]}
      metrics={[
        { metric: "+24%", label: "Revenue Per Vehicle" },
        { metric: "40+", label: "Hours Saved Per Week" },
        { metric: "99.95%", label: "System Uptime" },
        { metric: "Real-time", label: "Business Intelligence" }
      ]}
      closingCTA="Lead your rental business with clarity and intelligence."
    />
  );
}

export function OperationsPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Wrench className="w-10 h-10" />,
        title: "Operational Excellence with Real-Time Fleet Intelligence",
        subtitle: "Fleet managers juggle readiness, maintenance, and utilization. RentWorksPlus+ gives them the intelligence and automation needed to maintain high-performing fleets.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1580981553648-4bf029d3eb5e?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Fleet readiness and availability",
          "Maintenance scheduling optimization",
          "Turnaround management and efficiency",
          "Service documentation and compliance"
        ]
      }}
      strengths={[
        "Real-time fleet health overview showing vehicle status, location, and readiness across entire fleet",
        "Predictive maintenance alerts based on mileage, usage patterns, and historical service data",
        "Drag-and-drop scheduling with visual calendar showing maintenance windows and conflicts",
        "Condition reporting tools with photo capture, damage annotations, and repair tracking",
        "Transfer optimization with route planning and fuel cost calculations",
        "Work order tracking integrated with service vendors and parts inventory",
        "Utilization heatmaps showing which vehicles are most and least profitable"
      ]}
      useCases={[
        { title: "Schedule Service Based on Mileage", description: "Automated maintenance scheduling triggers work orders when vehicles reach service intervals or inspection dates." },
        { title: "Assign Vehicles Instantly", description: "Visual fleet board shows available vehicles with drag-and-drop assignment to reservations and service bays." },
        { title: "Document Condition in the Field", description: "Mobile app allows operations staff to capture photos, notes, and damage reports from any location." },
        { title: "Move Units Based on Peak Demand", description: "AI recommends inter-branch transfers to balance inventory and maximize utilization during demand surges." },
        { title: "Track Service Vendor Performance", description: "Monitor turnaround times, costs, and quality ratings for maintenance and detailing vendors." },
        { title: "Optimize Cleaning and Prep Workflows", description: "Task management system coordinates detailing, inspections, and service readiness processes." }
      ]}
      intelligence={[
        { title: "AI Condition Analysis", description: "Computer vision analyzes vehicle photos to detect damage, wear patterns, and cleanliness issues, automatically prioritizing maintenance needs." },
        { title: "Utilization Heatmaps", description: "Visual analytics show which vehicles, classes, and locations drive profitability, guiding fleet composition and deployment strategies." },
        { title: "Maintenance Forecasting", description: "Predictive models estimate upcoming service costs and timing based on usage patterns, enabling proactive budget planning and vendor scheduling." }
      ]}
      metrics={[
        { metric: "35%", label: "Fewer Service Delays" },
        { metric: "25%", label: "Improved Utilization" },
        { metric: "40%", label: "Fewer Disputes" },
        { metric: "Real-time", label: "Fleet Status" }
      ]}
      closingCTA="Give your operations team the tools to excel."
    />
  );
}

export function FrontDeskPage() {
  return (
    <SolutionPageTemplate
      hero={{
        icon: <Users className="w-10 h-10" />,
        title: "Serve Faster. Work Smarter. Delight Customers.",
        subtitle: "Frontline agents need speed and simplicity. RentWorksPlus+ empowers them with fast reservations, instant payments, digital signatures, and AI-powered support.",
        ctaText: "Book a Demo",
        mockupImage: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800"
      }}
      audienceAlignment={{
        title: "Audience Priorities",
        priorities: [
          "Fast customer handling and throughput",
          "Accurate rental agreements and documentation",
          "Payment speed and security",
          "Upsell opportunities and revenue maximization"
        ]
      }}
      strengths={[
        "One-screen reservation creation with intelligent field auto-population and validation",
        "Digital signatures & ID scans captured on tablet or smartphone for paperless workflows",
        "Payment links and tap-to-pay integration with all major processors and mobile wallets",
        "Customer history & preferences showing rental patterns, vehicle preferences, and special requests",
        "Upsell prompts powered by AI recommendations for insurance, upgrades, and add-ons",
        "Fast vehicle inspection photography with damage tagging and condition comparisons",
        "Alexa AI Operator handles overflow calls, after-hours inquiries, and FAQs automatically"
      ]}
      useCases={[
        { title: "Complete a Reservation in Under 60 Seconds", description: "Streamlined check-out flow with smart defaults and one-click insurance and add-on selections." },
        { title: "Send Instant Payment Requests", description: "Text or email payment links to customers for deposits, balances, or damage charges with instant processing." },
        { title: "Capture Photos Directly from Mobile", description: "Document vehicle condition with timestamped photos synced automatically to customer records and contracts." },
        { title: "Access Customer Rental History", description: "View previous rentals, payment methods, insurance choices, and notes to personalize service." },
        { title: "AI-Powered Upsell Recommendations", description: "Smart suggestions for insurance, vehicle upgrades, or add-ons based on customer profile and rental type." },
        { title: "Handle Walk-In Customers Efficiently", description: "Quick availability check, pricing, and immediate vehicle assignment without complex workflows." }
      ]}
      intelligence={[
        { title: "Alexa AI Operator for Overflow Calls", description: "Conversational AI handles routine inquiries, availability checks, and booking modifications, freeing staff for complex customer needs." },
        { title: "Upsell Recommendation Engine", description: "Machine learning analyzes customer behavior and rental patterns to suggest relevant add-ons with highest conversion probability." },
        { title: "Customer Insight Summaries", description: "AI generates concise customer profiles highlighting preferences, value, loyalty status, and satisfaction indicators for personalized service." }
      ]}
      metrics={[
        { metric: "3×", label: "Faster Check-In/Out" },
        { metric: "18%", label: "More Upsell Acceptance" },
        { metric: "50%", label: "Fewer Customer Issues" },
        { metric: "60sec", label: "Average Transaction Time" }
      ]}
      closingCTA="Empower your front desk team with the speed they deserve."
    />
  );
}

// ===========================================
// LEGACY PAGES (kept for existing routes)
// ===========================================

export function CarRentalAgenciesPage() {
  return <SimplePage title="Solutions for Car Rental Agencies" description="Complete solutions for daily rental operations, fleet management, and customer service excellence." backLink="/" />;
}

export function EquipmentRentalPage() {
  return <SimplePage title="Equipment & Machinery Rental" description="Specialized tools for construction equipment, heavy machinery, and industrial tool rental operations." backLink="/" />;
}

export function DealershipPage() {
  return <SimplePage title="Dealership Loaner & Replacement Fleets" description="Streamlined loaner vehicle management for automotive dealerships and service centers." backLink="/" />;
}

export function FinancePage() {
  return <SimplePage title="Solutions for Finance & Accounting" description="Payment processing, financial reporting, and accounting integration tools." backLink="/" />;
}

export function ITPage() {
  return <SimplePage title="Solutions for IT & Digital Transformation" description="API access, integrations, and technical tools for digital transformation initiatives." backLink="/" />;
}

// ===========================================
// RESOURCES PAGES
// ===========================================

export function BlogPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: "Fleet Management", count: 24, icon: <Car className="w-5 h-5" /> },
    { name: "AI & Automation", count: 18, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Industry Trends", count: 31, icon: <Building2 className="w-5 h-5" /> },
    { name: "Operations", count: 15, icon: <Wrench className="w-5 h-5" /> }
  ];

  const featuredArticles = [
    {
      title: "How AI Demand Prediction Increased Revenue by 22% for Multi-Location Operators",
      category: "AI & Automation",
      date: "November 15, 2025",
      readTime: "6 min read",
      excerpt: "Discover how predictive AI models help rental operators optimize pricing, fleet allocation, and maintenance scheduling for maximum profitability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
      title: "The Complete Guide to Fleet Utilization Optimization",
      category: "Fleet Management",
      date: "November 10, 2025",
      readTime: "8 min read",
      excerpt: "Learn proven strategies to increase vehicle utilization rates, reduce idle time, and maximize ROI across your entire rental fleet.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      title: "EV Rental Operations: Battery Management & Charging Infrastructure",
      category: "Industry Trends",
      date: "November 5, 2025",
      readTime: "7 min read",
      excerpt: "Essential insights for rental operators entering the electric vehicle market, from battery health monitoring to customer charging education.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800"
    },
    {
      title: "Reducing Check-In Time: Best Practices from High-Volume Locations",
      category: "Operations",
      date: "October 28, 2025",
      readTime: "5 min read",
      excerpt: "Airport and downtown locations share their workflows for processing 50+ check-ins per hour with zero customer friction.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
    },
    {
      title: "Predictive Maintenance: Catching Problems Before They Happen",
      category: "Fleet Management",
      date: "October 22, 2025",
      readTime: "6 min read",
      excerpt: "How AI analyzes vehicle telemetry, usage patterns, and maintenance history to predict failures weeks in advance.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    },
    {
      title: "Commercial Fleet Rental Trends: What's Working in 2025",
      category: "Industry Trends",
      date: "October 18, 2025",
      readTime: "9 min read",
      excerpt: "Market analysis of truck and van rental demand, pricing strategies, and technology adoption rates across commercial operators.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-24 overflow-hidden">
        {/* Parallax Background Blob */}
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left">
            <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Blog & Insights</h1>
              <p className="text-xl text-gray-300 mt-2">
                Insights on rental automation, AI, fleet performance & industry trends.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            Stay ahead with expert analysis, operational best practices, and data-driven strategies from the rental industry's leading innovators.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-[#081E32] mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#007A55] hover:shadow-lg transition-all cursor-pointer opacity-0 animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4F5F7] flex items-center justify-center text-[#007A55] mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#081E32] mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count} articles</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16 bg-[#F4F5F7]">
        <h2 className="text-2xl font-bold text-[#081E32] mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer opacity-0 animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#007A55]/10 text-[#007A55] text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#081E32] mb-3 hover:text-[#007A55] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-[#007A55]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-[#081E32] to-[#007A55] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Insight</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to receive weekly updates on rental automation, AI trends, and operational best practices.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-800"
            />
            <button className="px-8 py-3 bg-white text-[#007A55] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GuidesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const guides = [
    {
      title: "The Complete Multi-Location Rental Operations Playbook",
      description: "40-page comprehensive guide covering centralized fleet management, branch performance optimization, and AI-powered transfer recommendations for franchise operators.",
      topics: ["Fleet Distribution", "Branch Analytics", "Transfer Automation", "Franchise Compliance"],
      pages: 40,
      downloadFormat: "PDF",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "AI-Powered Pricing Strategy Framework",
      description: "Step-by-step methodology for implementing dynamic pricing using demand forecasting, competitor analysis, and seasonal trend prediction.",
      topics: ["Demand Prediction", "Dynamic Pricing", "Competitor Intelligence", "Yield Management"],
      pages: 28,
      downloadFormat: "PDF",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Fleet Maintenance Excellence: Predictive Care Playbook",
      description: "Comprehensive guide to reducing downtime and repair costs through AI-powered predictive maintenance, service scheduling, and condition monitoring.",
      topics: ["Predictive Analytics", "Service Scheduling", "Condition Monitoring", "Cost Optimization"],
      pages: 35,
      downloadFormat: "PDF",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Corporate Fleet & Long-Term Contract Management",
      description: "Best practices for managing corporate accounts, recurring billing, contract lifecycle automation, and renewal scoring systems.",
      topics: ["Contract Automation", "Recurring Billing", "Renewal Prediction", "Corporate Relations"],
      pages: 32,
      downloadFormat: "PDF",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Customer Experience Optimization Manual",
      description: "Proven workflows for reducing check-in times, improving customer satisfaction scores, and implementing self-service options for modern renters.",
      topics: ["Check-In Workflows", "Self-Service", "Customer Satisfaction", "Process Optimization"],
      pages: 24,
      downloadFormat: "PDF",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "EV & Micro-Mobility Operations Guide",
      description: "Essential playbook for electric vehicle fleet operators covering battery management, charging infrastructure, range optimization, and customer education.",
      topics: ["Battery Health", "Charging Strategy", "Range Management", "Customer Education"],
      pages: 30,
      downloadFormat: "PDF",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-24 overflow-hidden">
        <div
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left">
            <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Guides & Playbooks</h1>
              <p className="text-xl text-gray-300 mt-2">
                Step-by-step manuals for scaling rental operations with AI.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            Comprehensive operational playbooks created by industry experts to help you implement best practices, optimize workflows, and scale your rental business efficiently.
          </p>
        </div>
      </div>

      {/* Guides Library */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-[#081E32] mb-12">Available Playbooks</h2>

        <div className="space-y-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#007A55] hover:shadow-xl transition-all opacity-0 animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55] flex-shrink-0">
                  {guide.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#081E32] mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-[#F4F5F7] text-[#081E32] text-sm rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {guide.pages} pages
                    </span>
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      {guide.downloadFormat}
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="px-6 py-3 bg-[#007A55] text-white font-semibold rounded-xl hover:bg-[#006644] transition-colors flex items-center gap-2 flex-shrink-0">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#081E32] mb-12 text-center">Why Download Our Playbooks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#081E32] mb-3">Proven Frameworks</h3>
              <p className="text-gray-600">
                Battle-tested strategies used by top-performing rental operators across 12+ countries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#081E32] mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                Step-by-step implementation guidance with KPIs and success metrics for every strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#081E32] mb-3">Always Updated</h3>
              <p className="text-gray-600">
                Regularly refreshed with the latest AI capabilities, market trends, and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-[#081E32] to-[#007A55] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Implementation Support?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team of rental operations experts can help you implement these strategies tailored to your specific business needs.
          </p>
          <button className="px-8 py-4 bg-white text-[#007A55] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export function TemplatesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const templates = [
    {
      category: "Vehicle Inspections",
      items: [
        { name: "Pre-Rental Vehicle Inspection Form", format: "PDF + Excel", icon: <Car className="w-5 h-5" /> },
        { name: "Post-Rental Damage Documentation Checklist", format: "PDF", icon: <Car className="w-5 h-5" /> },
        { name: "Photo-Based Inspection Template (Mobile-Ready)", format: "PDF", icon: <Car className="w-5 h-5" /> }
      ]
    },
    {
      category: "Operations & Workflows",
      items: [
        { name: "Daily Fleet Status Report Template", format: "Excel", icon: <Wrench className="w-5 h-5" /> },
        { name: "Check-In/Check-Out Process Checklist", format: "PDF", icon: <Check className="w-5 h-5" /> },
        { name: "Multi-Location Transfer Request Form", format: "Excel + PDF", icon: <Building2 className="w-5 h-5" /> },
        { name: "Fleet Maintenance Schedule Template", format: "Excel", icon: <Wrench className="w-5 h-5" /> }
      ]
    },
    {
      category: "Customer & Contracts",
      items: [
        { name: "Rental Agreement Template (Customizable)", format: "Word + PDF", icon: <FileText className="w-5 h-5" /> },
        { name: "Corporate Account Setup Checklist", format: "PDF", icon: <Briefcase className="w-5 h-5" /> },
        { name: "Customer Satisfaction Survey Template", format: "PDF + Google Forms", icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      category: "Financial & Reporting",
      items: [
        { name: "Monthly Revenue & Utilization Dashboard", format: "Excel", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Payment Reconciliation Worksheet", format: "Excel", icon: <Check className="w-5 h-5" /> },
        { name: "Branch Performance Comparison Template", format: "Excel", icon: <Building2 className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-24 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left">
            <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center">
              <Download className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Templates & Checklists</h1>
              <p className="text-xl text-gray-300 mt-2">
                Free downloadable tools for inspections, audits & workflows.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            Ready-to-use forms, checklists, and spreadsheet templates designed specifically for rental operations. Download, customize, and implement immediately.
          </p>
        </div>
      </div>

      {/* Templates Library */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="space-y-12">
          {templates.map((category, catIndex) => (
            <div key={catIndex} className="opacity-0 animate-float-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h2 className="text-2xl font-bold text-[#081E32] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#007A55] rounded-full"></span>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#007A55] hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-[#F4F5F7] flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#081E32] mb-2 group-hover:text-[#007A55] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">{item.format}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-[#007A55] text-white rounded-lg hover:bg-[#006644] transition-colors flex items-center gap-2 text-sm flex-shrink-0">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#081E32] mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#081E32] mb-2">100% Free</h3>
              <p className="text-sm text-gray-600">
                No signup required. Instant downloads for all templates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#081E32] mb-2">Fully Customizable</h3>
              <p className="text-sm text-gray-600">
                Edit, brand, and adapt every template to your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#081E32] mb-2">Industry-Tested</h3>
              <p className="text-sm text-gray-600">
                Designed by rental operators for rental operators.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#081E32] mb-2">Always Updated</h3>
              <p className="text-sm text-gray-600">
                Regularly refreshed with new templates and formats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-[#081E32] to-[#007A55] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Templates Integrated Into Your System?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            RentWorksPlus+ includes all these templates built directly into the platform with auto-fill, digital signatures, and instant delivery.
          </p>
          <button className="px-8 py-4 bg-white text-[#007A55] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Explore Platform Features
          </button>
        </div>
      </div>
    </div>
  );
}

export function UpdatesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updates = [
    {
      version: "v3.8.0",
      date: "November 2025",
      category: "Major Release",
      highlights: [
        {
          title: "AI-Powered Demand Forecasting",
          description: "New machine learning models predict rental demand 30-90 days ahead with 89% accuracy, enabling proactive pricing and fleet positioning.",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "Multi-Currency Support",
          description: "Full support for 45+ currencies with automatic exchange rate updates and multi-currency financial reporting.",
          icon: <Check className="w-5 h-5" />
        },
        {
          title: "Advanced Fleet Transfer Engine",
          description: "AI suggests optimal vehicle transfers between locations based on demand prediction, utilization gaps, and transportation costs.",
          icon: <Car className="w-5 h-5" />
        }
      ]
    },
    {
      version: "v3.7.2",
      date: "October 2025",
      category: "Feature Update",
      highlights: [
        {
          title: "EV Battery Health Monitoring",
          description: "Real-time battery condition tracking with degradation alerts, charging cycle optimization, and range prediction.",
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: "Bulk SMS Notifications",
          description: "Send reservation confirmations, pickup reminders, and return notifications via SMS to thousands of customers simultaneously.",
          icon: <Check className="w-5 h-5" />
        }
      ]
    },
    {
      version: "v3.7.0",
      date: "September 2025",
      category: "Major Release",
      highlights: [
        {
          title: "Alexa AI Operator Assistant",
          description: "Voice-powered rental assistant processes reservations, answers customer questions, and handles routine inquiries 24/7.",
          icon: <Users className="w-5 h-5" />
        },
        {
          title: "Mobile App Offline Mode",
          description: "Complete check-in/out workflows work without internet connection and auto-sync when connectivity returns.",
          icon: <Check className="w-5 h-5" />
        },
        {
          title: "Corporate Contract Lifecycle",
          description: "Automated contract renewal scoring, usage tracking, and predictive analytics for long-term corporate accounts.",
          icon: <Briefcase className="w-5 h-5" />
        }
      ]
    },
    {
      version: "v3.6.5",
      date: "August 2025",
      category: "Performance & Fixes",
      highlights: [
        {
          title: "Dashboard Load Time: 60% Faster",
          description: "Optimized queries and caching reduce main dashboard load time from 2.1s to 0.8s average.",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "API Rate Limit Increase",
          description: "Increased API rate limits from 1000/hour to 5000/hour for enterprise accounts.",
          icon: <Check className="w-5 h-5" />
        }
      ]
    },
    {
      version: "v3.6.0",
      date: "July 2025",
      category: "Major Release",
      highlights: [
        {
          title: "Predictive Maintenance Engine",
          description: "AI analyzes mileage, usage patterns, and service history to predict maintenance needs 2-4 weeks in advance.",
          icon: <Wrench className="w-5 h-5" />
        },
        {
          title: "Smart Damage Detection",
          description: "Computer vision automatically compares pre/post rental photos to identify new damage with 94% accuracy.",
          icon: <Car className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-24 overflow-hidden">
        <div
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left">
            <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Product Updates & Release Notes</h1>
              <p className="text-xl text-gray-300 mt-2">
                Stay informed on new features, improvements & AI enhancements.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            Track every improvement to RentWorksPlus+ with detailed release notes, feature launches, and performance enhancements.
          </p>
        </div>
      </div>

      {/* Release Timeline */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {updates.map((update, index) => (
              <div
                key={index}
                className="relative pl-20 opacity-0 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[26px] top-2 w-5 h-5 bg-[#007A55] rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-[#081E32] mb-2">{update.version}</h2>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">{update.date}</span>
                        <span className="px-3 py-1 bg-[#007A55]/10 text-[#007A55] text-sm font-semibold rounded-full">
                          {update.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    {update.highlights.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55] flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#081E32] mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#081E32] mb-12 text-center">Our Commitment to Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#007A55] mb-2">52</div>
              <p className="text-gray-600">Major releases in 2025</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#007A55] mb-2">180+</div>
              <p className="text-gray-600">New features added</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#007A55] mb-2">99.9%</div>
              <p className="text-gray-600">Platform uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#007A55] mb-2">24/7</div>
              <p className="text-gray-600">Support & monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-[#081E32] to-[#007A55] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Notified About New Releases</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to receive instant notifications when new features launch, updates deploy, or improvements are released.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-800"
            />
            <button className="px-8 py-3 bg-white text-[#007A55] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebinarsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const upcomingWebinars = [
    {
      title: "AI-Powered Fleet Optimization: Real-World Results",
      date: "December 12, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Sarah Chen, VP of Product",
      description: "Learn how top rental operators use machine learning to optimize fleet distribution, pricing, and maintenance scheduling.",
      spots: "42 spots remaining",
      type: "Live Webinar",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Multi-Location Operations Masterclass",
      date: "December 18, 2025",
      time: "1:00 PM EST",
      duration: "90 minutes",
      presenter: "Michael Rodriguez, Operations Director",
      description: "Deep dive into centralized management, branch performance analytics, and AI-powered fleet transfer recommendations.",
      spots: "58 spots remaining",
      type: "Live Workshop",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "EV Fleet Management: Battery Health & Charging Strategy",
      date: "January 8, 2026",
      time: "3:00 PM EST",
      duration: "45 minutes",
      presenter: "Dr. Lisa Kumar, EV Technology Lead",
      description: "Essential strategies for managing electric vehicle fleets including battery monitoring, charging optimization, and range prediction.",
      spots: "71 spots remaining",
      type: "Live Webinar",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const onDemandWebinars = [
    {
      title: "Getting Started with RentWorksPlus+",
      duration: "35 minutes",
      views: "2,847 views",
      category: "Platform Basics",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Advanced Pricing Strategies & Dynamic Rates",
      duration: "52 minutes",
      views: "1,634 views",
      category: "Revenue Optimization",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Corporate Fleet & Long-Term Contract Management",
      duration: "48 minutes",
      views: "1,219 views",
      category: "Corporate Solutions",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Mobile Check-In/Out Workflows",
      duration: "28 minutes",
      views: "3,102 views",
      category: "Operations",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Predictive Maintenance Deep Dive",
      duration: "41 minutes",
      views: "987 views",
      category: "Fleet Management",
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: "API Integration Best Practices",
      duration: "55 minutes",
      views: "1,455 views",
      category: "Developer Resources",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-24 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left">
            <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Webinars & Events</h1>
              <p className="text-xl text-gray-300 mt-2">
                Live sessions, virtual demos & expert talks for rental operators.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            Join our expert-led training sessions, live demos, and industry discussions to master rental operations and AI-powered automation.
          </p>
        </div>
      </div>

      {/* Upcoming Webinars */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-[#081E32] mb-12">Upcoming Live Sessions</h2>

        <div className="space-y-6">
          {upcomingWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#007A55] rounded-2xl p-8 hover:shadow-2xl transition-all opacity-0 animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#007A55] text-white flex items-center justify-center flex-shrink-0">
                  {webinar.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-[#007A55]/10 text-[#007A55] text-sm font-semibold rounded-full">
                        {webinar.type}
                      </span>
                      <h3 className="text-2xl font-bold text-[#081E32] mt-3 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date</p>
                      <p className="text-sm font-semibold text-[#081E32]">{webinar.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Time</p>
                      <p className="text-sm font-semibold text-[#081E32]">{webinar.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="text-sm font-semibold text-[#081E32]">{webinar.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Availability</p>
                      <p className="text-sm font-semibold text-[#007A55]">{webinar.spots}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Presented by:</span> {webinar.presenter}
                    </p>
                    <button className="px-6 py-3 bg-[#007A55] text-white font-semibold rounded-xl hover:bg-[#006644] transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On-Demand Library */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#081E32] mb-12">On-Demand Webinar Library</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onDemandWebinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer opacity-0 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55]">
                    {webinar.icon}
                  </div>
                  <div className="flex-1">
                    <span className="px-2 py-1 bg-[#F4F5F7] text-[#081E32] text-xs font-semibold rounded">
                      {webinar.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#081E32] mb-3">{webinar.title}</h3>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{webinar.duration}</span>
                  <span>{webinar.views}</span>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-[#007A55] text-white font-semibold rounded-xl hover:bg-[#006644] transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-[#081E32] to-[#007A55] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want a Private Training Session?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a custom training session tailored to your team's specific needs and workflows.
          </p>
          <button className="px-8 py-4 bg-white text-[#007A55] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Request Private Training
          </button>
        </div>
      </div>
    </div>
  );
}

// ===========================================
// PRICING PAGE
// ===========================================

export function PricingPage() {
  return <SimplePage title="Pricing" description="Simple, transparent pricing based on your fleet size and needs. No hidden fees." backLink="/" />;
}

// ===========================================
// COMPANY PAGES
// ===========================================

export function AboutPage() {
  return <SimplePage title="About RentWorksPlus+" description="Our vision, mission, values, and the team transforming the car rental industry." backLink="/" />;
}

export function PartnersPage() {
  return <SimplePage title="Partners & Integrations" description="Our ecosystem of technology partners and integrations." backLink="/" />;
}

export function CareersPage() {
  return <SimplePage title="Careers at RentWorksPlus+" description="Join our team and help shape the future of rental management technology." backLink="/" />;
}

export function PressPage() {
  return <SimplePage title="Press & Media" description="Press releases, media coverage, and brand assets for journalists and media." backLink="/" />;
}

// ===========================================
// SUPPORT PAGES
// ===========================================

export function HelpCenterPage() {
  return <SimplePage title="Help Center" description="Browse help articles, tutorials, and FAQs to find answers quickly." backLink="/" />;
}

export function DocumentationPage() {
  return <SimplePage title="Documentation" description="Complete technical documentation for administrators and power users." backLink="/" />;
}

export function APIDocsPage() {
  return <SimplePage title="API Documentation" description="Developer resources, API reference, and integration guides." backLink="/" />;
}

export function TrainingPage() {
  return <SimplePage title="Training & Onboarding" description="Comprehensive training programs and onboarding resources for new users." backLink="/" />;
}

export function ContactPage() {
  return <SimplePage title="Contact Support" description="Get help from our expert support team - available 24/7." backLink="/" />;
}

export function StatusPage() {
  return <SimplePage title="System Status" description="Current system status, uptime monitoring, and historical performance data." backLink="/" />;
}
