import { Link } from '../components/Router';
import { ArrowLeft, ArrowRight, Check, Car, Truck, Zap, Users, Wrench, TrendingUp, Building2, Briefcase, BookOpen, Calendar, Download, FileText, Clock, Tag, ExternalLink, Target, Eye, Heart, Lightbulb, Globe, Award, Handshake, Code, Mail, MapPin, Newspaper, Settings, Search, RefreshCw, UserPlus, Video, MessageCircle, CheckCircle, AlertCircle, Shield, CreditCard, Phone, Smartphone, Activity } from 'lucide-react';
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
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    country: '',
    jobTitle: '',
    companyName: '',
    fleetSize: '',
    numberOfLocations: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          phone: '',
          country: '',
          jobTitle: '',
          companyName: '',
          fleetSize: '',
          numberOfLocations: ''
        });
      }, 3000);
    }, 1500);
  };

  const featureCards = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "All-in-One AI-Powered Platform",
      description: "Eliminate the cost and complexity of multiple vendors with a unified system covering fleet, reservations, pricing, payments & maintenance."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Trusted by Operators Worldwide",
      description: "Used by rental companies in 40+ countries, processing 2M+ rentals with industry-leading retention."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Rental-Focused Support",
      description: "Get real-time help from specialists who understand mobility, fleets, and rental operations."
    }
  ];

  const benefitCards = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Driven Efficiency",
      description: "Automate reservations, pricing, maintenance, and check-in/out workflows with intelligent tools built for car rental operations."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fleet Intelligence That Drives Revenue",
      description: "Monitor utilization, demand, battery/charging (EV), and maintenance needs in real-time — improving profitability per vehicle."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Simple, Transparent, Scalable Pricing",
      description: "Only pay for what you need — modules scale as your fleet grows across new locations, vehicle types, and rental programs."
    }
  ];

  const fleetSizeOptions = [
    "1–25 vehicles",
    "26–75 vehicles",
    "76–150 vehicles",
    "151–300 vehicles",
    "300+ vehicles"
  ];

  const jobTitleOptions = [
    "Owner / General Manager",
    "Fleet Manager",
    "Operations Manager",
    "Front Desk",
    "IT & Integrations",
    "Other"
  ];

  const countryOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Belgium",
    "Mexico",
    "Brazil",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes glow-pulse-fade {
          0% { opacity: 0; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
          50% { opacity: 0.7; text-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { opacity: 1; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
        }
        @keyframes light-drop-up {
          0% { opacity: 0; transform: translateY(15px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slide-blur-reveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes soft-scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .glow-pulse { animation: glow-pulse-fade 0.7s ease-out; }
        .light-drop-up { animation: light-drop-up 0.6s ease-out forwards; opacity: 0; }
        .slide-blur { animation: slide-blur-reveal 0.8s ease-out forwards; opacity: 0; }
        .soft-scale-in { animation: soft-scale-in 0.5s ease-out forwards; opacity: 0; }
        .magnetic-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-hover:hover { transform: scale(1.02) translateY(-2px); box-shadow: 0 8px 25px rgba(0, 122, 85, 0.3); }
        .magnetic-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-cta:hover { transform: scale(1.02); box-shadow: 0 0 25px rgba(0, 122, 85, 0.5); }
      `}</style>

      {/* Badge Label */}
      <section className="pt-12 pb-6 text-center">
        <div className="soft-scale-in inline-block px-4 py-2 bg-[#007A55] bg-opacity-10 rounded-full border border-[#007A55] border-opacity-30">
          <span className="text-[#007A55] font-semibold text-sm">Get a Quote</span>
        </div>
      </section>

      {/* Two-Column Hero Section */}
      <section className="relative py-12 px-8 overflow-hidden">
        {/* Background Blobs with Parallax */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-[#007A55] opacity-5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#081E32] opacity-5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#081E32] mb-6 glow-pulse leading-tight">
                RentWorksPlus+ Pricing
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed slide-blur" style={{ animationDelay: '0.1s' }}>
                Our pricing scales with your fleet size, locations, and operational needs — no paying for features you don't use. Tell us about your rental operation, and we'll prepare a personalized quote that includes the exact modules and capabilities your business requires.
              </p>

              <h2 className="text-2xl font-bold text-[#081E32] mb-8">What makes RentWorksPlus+ the smart choice?</h2>

              <div className="space-y-6">
                {featureCards.map((feature, index) => (
                  <div
                    key={index}
                    className="light-drop-up flex gap-4 bg-[#F4F5F7] rounded-xl p-6 hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#007A55] bg-opacity-10 rounded-lg flex items-center justify-center text-[#007A55]">
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

            {/* Right Column - Quote Request Form */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="slide-blur bg-white rounded-2xl p-8 shadow-xl border border-gray-200" style={{ animationDelay: '0.2s' }}>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <Check className="w-16 h-16 text-[#007A55] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#081E32] mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll be in touch shortly with your personalized quote.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-[#081E32] mb-6">Request Your Quote</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#081E32] mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#081E32] mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange('workEmail', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                        placeholder="john.smith@company.com"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Country</label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all bg-white"
                      >
                        <option value="">Select Country</option>
                        {countryOptions.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Select Job Title</label>
                      <select
                        required
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all bg-white"
                      >
                        <option value="">Select Job Title</option>
                        {jobTitleOptions.map((title, index) => (
                          <option key={index} value={title}>{title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                        placeholder="Your Company LLC"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Fleet Size</label>
                      <select
                        required
                        value={formData.fleetSize}
                        onChange={(e) => handleInputChange('fleetSize', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all bg-white"
                      >
                        <option value="">Select Fleet Size</option>
                        {fleetSizeOptions.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-[#081E32] mb-2">Number of Locations (optional)</label>
                      <input
                        type="number"
                        min="1"
                        value={formData.numberOfLocations}
                        onChange={(e) => handleInputChange('numberOfLocations', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#007A55] focus:ring-2 focus:ring-[#007A55] focus:ring-opacity-20 outline-none transition-all"
                        placeholder="e.g., 3"
                      />
                    </div>

                    <p className="text-xs text-gray-500 mb-6">
                      By clicking 'Get Pricing,' you agree to our Terms of Service and Privacy Policy.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="magnetic-cta w-full bg-[#007A55] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#006644] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Get Pricing
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rental Operators Choose RentWorksPlus+ Section */}
      <section className="py-20 px-8 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Why Rental Operators Choose RentWorksPlus+</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by operators worldwide for intelligent, scalable, and transparent rental management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefitCards.map((benefit, index) => (
              <div
                key={index}
                className="light-drop-up bg-white rounded-2xl p-8 hover:shadow-xl transition-all text-center magnetic-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007A55] bg-opacity-10 rounded-full mb-6">
                  <div className="text-[#007A55]">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#081E32] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Statement */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#081E32]">No setup fees.</span> <span className="font-semibold text-[#081E32]">No hidden charges.</span> Flexible modules that grow with your business.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#007A55]" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#007A55]" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#007A55]" />
              <span>40+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#081E32] to-[#0a2740] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 glow-pulse">Ready to See RentWorksPlus+ in Action?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get a custom quote and tailored walkthrough for your operations. See exactly how RentWorksPlus+ can transform your rental business.
          </p>
          <button className="magnetic-cta bg-[#007A55] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#006644] inline-flex items-center gap-3">
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-400 mt-6">
            Join 500+ rental operators using RentWorksPlus+ worldwide
          </p>
        </div>
      </section>
    </div>
  );
}

// ===========================================
// COMPANY PAGES
// ===========================================

export function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { year: "2010", title: "Founded", description: "Started with a vision to modernize rental operations" },
    { year: "2015", title: "Cloud Platform Launch", description: "Transitioned from desktop to cloud-based SaaS solution" },
    { year: "2018", title: "AI Integration", description: "Introduced machine learning for demand forecasting" },
    { year: "2021", title: "Global Expansion", description: "Reached 25+ countries with multilingual support" },
    { year: "2023", title: "Alexa AI Release", description: "Launched conversational AI operator assistant" },
    { year: "2025", title: "500+ Customers", description: "Processing 2M+ rentals monthly across 40+ countries" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously pushing boundaries with AI-driven automation and intelligent workflows"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Simplicity",
      description: "Complex problems solved through intuitive design and frictionless user experiences"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and 99.9% uptime"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Intelligence",
      description: "Transforming data into actionable insights that drive better business decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes glow-pulse-fade {
          0% { opacity: 0; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
          50% { opacity: 0.7; text-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { opacity: 1; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
        }
        @keyframes slide-blur-reveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes soft-rise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .glow-pulse { animation: glow-pulse-fade 0.7s ease-out; }
        .slide-blur { animation: slide-blur-reveal 0.8s ease-out forwards; opacity: 0; }
        .soft-rise { animation: soft-rise 0.6s ease-out forwards; opacity: 0; }
        .magnetic-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-cta:hover { transform: scale(1.02); box-shadow: 0 0 25px rgba(0, 122, 85, 0.5); }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-32 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-6xl font-bold mb-6 glow-pulse">
            Reimagining Rental Operations Through Intelligence
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            RentWorksPlus+ is built on decades of rental experience combined with next-generation AI innovation. Our mission is to transform mobility businesses with automation, insight, and simplicity.
          </p>
          <button className="mt-10 px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Learn More About Our Mission
          </button>
        </div>
      </div>

      {/* Our Evolution Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Our Evolution</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="slide-blur" style={{ animationDelay: '0.1s' }}>
            <div className="p-8 bg-[#F4F5F7] rounded-2xl hover:shadow-xl transition-all duration-300">
              <ArrowRight className="w-12 h-12 text-[#007A55] mb-4" />
              <h3 className="text-xl font-bold text-[#081E32] mb-3">From Legacy Processes</h3>
              <p className="text-gray-600">Manual spreadsheets and disconnected systems → intelligent automation</p>
            </div>
          </div>
          <div className="slide-blur" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 bg-[#F4F5F7] rounded-2xl hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#007A55] mb-4" />
              <h3 className="text-xl font-bold text-[#081E32] mb-3">To AI-Driven Optimization</h3>
              <p className="text-gray-600">Manual workflows → predictive intelligence and proactive recommendations</p>
            </div>
          </div>
          <div className="slide-blur" style={{ animationDelay: '0.3s' }}>
            <div className="p-8 bg-[#F4F5F7] rounded-2xl hover:shadow-xl transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#007A55] mb-4" />
              <h3 className="text-xl font-bold text-[#081E32] mb-3">Unified Rental Ecosystem</h3>
              <p className="text-gray-600">Isolated tools → comprehensive platform with seamless integrations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-blur" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#081E32] mb-4">Mission</h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    "To empower mobility businesses with intelligent software that simplifies operations and converts data into insights."
                  </p>
                </div>
              </div>
            </div>
            <div className="slide-blur" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#081E32] mb-4">Vision</h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    "A future where every rental decision is driven by intelligence—not guesswork."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="slide-blur"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#007A55] hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#081E32] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#081E32] mb-16 text-center glow-pulse">Major Milestones</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#007A55]/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-20 soft-rise"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="absolute left-[26px] top-2 w-5 h-5 bg-[#007A55] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-[#007A55] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-[#081E32] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Footprint */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Global Footprint</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center slide-blur" style={{ animationDelay: '0.1s' }}>
            <div className="text-6xl font-bold text-[#007A55] mb-2">500+</div>
            <p className="text-xl text-gray-700">Customers Worldwide</p>
          </div>
          <div className="text-center slide-blur" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl font-bold text-[#007A55] mb-2">40+</div>
            <p className="text-xl text-gray-700">Countries Served</p>
          </div>
          <div className="text-center slide-blur" style={{ animationDelay: '0.3s' }}>
            <div className="text-6xl font-bold text-[#007A55] mb-2">2M+</div>
            <p className="text-xl text-gray-700">Rentals Processed Monthly</p>
          </div>
        </div>
      </div>

      {/* Leadership Philosophy */}
      <div className="bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-[#007A55]" />
          <h2 className="text-4xl font-bold mb-6">Built by Rental Experts for Rental Teams</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Our team brings decades of hands-on rental experience combined with cutting-edge technology expertise. We don't just build software—we solve real operational challenges that we've lived ourselves.
          </p>
          <button className="px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Discover the Story Behind RentWorksPlus+
          </button>
        </div>
      </div>
    </div>
  );
}

export function PartnersPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partnerCategories = [
    {
      title: "Payment Gateways",
      icon: <CreditCard className="w-6 h-6" />,
      partners: ["Stripe", "PayPal", "Square", "Adyen", "Braintree"]
    },
    {
      title: "Communications",
      icon: <Mail className="w-6 h-6" />,
      partners: ["Twilio", "SendGrid", "WhatsApp API", "Slack", "Microsoft Teams"]
    },
    {
      title: "ERP & Accounting",
      icon: <Building2 className="w-6 h-6" />,
      partners: ["SAP", "Oracle", "QuickBooks", "Xero", "NetSuite"]
    },
    {
      title: "Telematics & GPS",
      icon: <MapPin className="w-6 h-6" />,
      partners: ["Geotab", "Verizon Connect", "Samsara", "Fleet Complete", "50+ providers"]
    },
    {
      title: "Maps & Location",
      icon: <Globe className="w-6 h-6" />,
      partners: ["Google Maps", "Mapbox", "HERE Maps", "TomTom", "OpenStreetMap"]
    },
    {
      title: "Developer Tools",
      icon: <Code className="w-6 h-6" />,
      partners: ["GitHub", "GitLab", "Jira", "Postman", "AWS"]
    }
  ];

  const integrationBenefits = [
    {
      title: "Unified Workflows",
      description: "Connect all your tools for seamless data flow across systems",
      icon: <Check className="w-6 h-6" />
    },
    {
      title: "Automated Data Sync",
      description: "Real-time synchronization eliminates manual data entry errors",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Reduced Manual Entry",
      description: "Save hours daily with automated information transfer between platforms",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Tech Ecosystem",
      description: "Add new tools as you grow without disrupting existing workflows",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes glow-pulse-fade {
          0% { opacity: 0; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
          50% { opacity: 0.7; text-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { opacity: 1; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
        }
        @keyframes slide-blur-reveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes micro-drop {
          0% { opacity: 0; transform: translateY(-10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .glow-pulse { animation: glow-pulse-fade 0.7s ease-out; }
        .slide-blur { animation: slide-blur-reveal 0.8s ease-out forwards; opacity: 0; }
        .micro-drop { animation: micro-drop 0.5s ease-out forwards; opacity: 0; }
        .magnetic-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-cta:hover { transform: scale(1.02); box-shadow: 0 0 25px rgba(0, 122, 85, 0.5); }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-32 overflow-hidden">
        <div
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-6xl font-bold mb-6 glow-pulse">
            A Connected Ecosystem That Accelerates Your Rental Operations
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            RentWorksPlus+ integrates seamlessly with the tools and platforms that modern mobility businesses rely on—from payments and telematics to CRM, mapping, and ERP systems.
          </p>
          <button className="mt-10 px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Explore Our Integration Ecosystem
          </button>
        </div>
      </div>

      {/* Why Integrations Matter */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Why Integrations Matter</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationBenefits.map((benefit, index) => (
            <div
              key={index}
              className="slide-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 bg-[#F4F5F7] rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#007A55] text-white flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#081E32] mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Categories */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#081E32] mb-16 text-center glow-pulse">Our Integration Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="slide-blur"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl hover:border-[#007A55] border-2 border-transparent transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#081E32] mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="micro-drop"
                        style={{ animationDelay: `${(index * 0.12) + (partnerIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center gap-2 text-gray-600 hover:text-[#007A55] transition-colors cursor-pointer">
                          <Check className="w-4 h-4 text-[#007A55]" />
                          <span>{partner}</span>
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

      {/* API-First Architecture */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-blur">
            <h2 className="text-4xl font-bold text-[#081E32] mb-6 glow-pulse">API-First Architecture</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              RentWorksPlus+ is built on a modern, RESTful API that gives you complete programmatic access to all platform features.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#007A55] flex-shrink-0 mt-1" />
                <span className="text-gray-700">OAuth 2.0 secure authentication with granular permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#007A55] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Comprehensive API documentation with interactive examples</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#007A55] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Webhook support for real-time event notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#007A55] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Sandbox environment for testing and development</span>
              </li>
            </ul>
          </div>
          <div className="slide-blur" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#081E32] rounded-2xl p-8 text-white">
              <Code className="w-12 h-12 text-[#007A55] mb-4" />
              <div className="font-mono text-sm">
                <div className="text-[#007A55]">POST /api/v1/reservations</div>
                <div className="text-gray-400 mt-2">Authorization: Bearer token</div>
                <div className="text-gray-400">Content-Type: application/json</div>
                <div className="mt-4 text-gray-300">{`{`}</div>
                <div className="ml-4 text-gray-300">"customer_id": "cust_123"</div>
                <div className="ml-4 text-gray-300">"vehicle_id": "veh_456"</div>
                <div className="ml-4 text-gray-300">"start_date": "2025-12-01"</div>
                <div className="text-gray-300">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 100+ Connectors Highlight */}
      <div className="bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="text-8xl font-bold text-[#007A55] mb-4">100+</div>
          <h2 className="text-4xl font-bold mb-6">Pre-Built Connectors & Growing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our integration library expands monthly with new partners and protocols, ensuring you can connect RentWorksPlus+ to virtually any business system.
          </p>
          <button className="px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Build Your Ecosystem
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-[#F4F5F7] rounded-3xl p-12 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6 text-[#007A55]" />
          <h2 className="text-3xl font-bold text-[#081E32] mb-4">Become an Integration Partner</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our growing ecosystem and make your solution available to hundreds of rental operators worldwide.
          </p>
          <button className="px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}

export function CareersPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roleCategories = [
    {
      title: "Product & Engineering",
      icon: <Code className="w-6 h-6" />,
      description: "Build the next generation of AI-powered rental intelligence"
    },
    {
      title: "Customer Success",
      icon: <Users className="w-6 h-6" />,
      description: "Help rental operators unlock maximum value from our platform"
    },
    {
      title: "Sales & Growth",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Connect mobility businesses with transformative solutions"
    },
    {
      title: "Implementation & Onboarding",
      icon: <Check className="w-6 h-6" />,
      description: "Guide customers through seamless platform adoption"
    },
    {
      title: "Data & AI",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Develop machine learning models that power our intelligence engine"
    }
  ];

  const culturePillars = [
    {
      title: "Remote-Friendly Culture",
      description: "Work from anywhere with flexible hours and global collaboration",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Clear Growth Paths",
      description: "Structured career progression with mentorship and learning opportunities",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Autonomous Teamwork",
      description: "Ownership and trust with minimal micromanagement",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Impact-Driven Roles",
      description: "See your work directly influence global rental operations",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const perks = [
    "Comprehensive health insurance (medical, dental, vision)",
    "Annual learning & development budget ($2,500)",
    "Remote work flexibility with home office stipend",
    "Flexible PTO policy with encouraged time off",
    "401(k) matching program",
    "Annual company retreats and team gatherings",
    "Latest equipment and tools for your role",
    "Stock options for all employees"
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes glow-pulse-fade {
          0% { opacity: 0; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
          50% { opacity: 0.7; text-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { opacity: 1; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
        }
        @keyframes slide-blur-reveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes spotlight-hover {
          0% { transform: scale(1); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          100% { transform: scale(1.02); box-shadow: 0 10px 30px rgba(0,122,85,0.2); }
        }
        .glow-pulse { animation: glow-pulse-fade 0.7s ease-out; }
        .slide-blur { animation: slide-blur-reveal 0.8s ease-out forwards; opacity: 0; }
        .spotlight-card { transition: all 0.3s ease-out; }
        .spotlight-card:hover { animation: spotlight-hover 0.3s forwards; }
        .magnetic-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-cta:hover { transform: scale(1.02); box-shadow: 0 0 25px rgba(0, 122, 85, 0.5); }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#081E32] via-[#0a2640] to-[#081E32] text-white py-32 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007A55] rounded-full opacity-10 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-6xl font-bold mb-6 glow-pulse">
            Join the Team Building the Future of Mobility Intelligence
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            We're hiring innovators, creators, and problem-solvers who are passionate about transforming the global car rental industry with AI-driven solutions.
          </p>
          <button className="mt-10 px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Explore Open Roles
          </button>
        </div>
      </div>

      {/* Life at RentWorksPlus+ */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Life at RentWorksPlus+</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturePillars.map((pillar, index) => (
            <div
              key={index}
              className="slide-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-2xl spotlight-card h-full">
                <div className="w-12 h-12 rounded-xl bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#081E32] mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-600">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Categories */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#081E32] mb-16 text-center glow-pulse">Open Positions by Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleCategories.map((role, index) => (
              <div
                key={index}
                className="slide-blur"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="bg-white rounded-2xl p-8 spotlight-card cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#007A55] text-white flex items-center justify-center mb-4">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#081E32] mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  <button className="text-[#007A55] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Openings
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="slide-blur" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white rounded-2xl p-8 spotlight-card cursor-pointer h-full border-2 border-[#007A55]">
                <div className="w-14 h-14 rounded-2xl bg-[#007A55]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#007A55]" />
                </div>
                <h3 className="text-xl font-bold text-[#081E32] mb-3">Don't See Your Role?</h3>
                <p className="text-gray-600 mb-6">We're always looking for exceptional talent. Send us your resume and tell us why you'd be a great fit.</p>
                <button className="text-[#007A55] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Spotlight */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Meet The Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Chen", role: "VP of Product", quote: "We're solving real problems for an industry that's ready for transformation." },
            { name: "Marcus Johnson", role: "Head of Engineering", quote: "Our tech stack combines cutting-edge AI with battle-tested reliability." },
            { name: "Ana Rodriguez", role: "Director of Customer Success", quote: "Seeing our customers succeed is what drives everything we do." }
          ].map((member, index) => (
            <div
              key={index}
              className="slide-blur"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-2xl p-8 spotlight-card border border-gray-200">
                <div className="w-20 h-20 rounded-full bg-[#007A55]/10 mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#007A55]" />
                </div>
                <h3 className="text-xl font-bold text-[#081E32] mb-1">{member.name}</h3>
                <p className="text-[#007A55] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="bg-[#F4F5F7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#081E32] mb-12 text-center glow-pulse">Perks & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="slide-blur"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition-shadow">
                  <Check className="w-6 h-6 text-[#007A55] flex-shrink-0" />
                  <span className="text-gray-700">{perk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diversity & Inclusion */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-white rounded-3xl p-12 border border-gray-200 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-[#007A55]" />
          <h2 className="text-3xl font-bold text-[#081E32] mb-6">Diversity & Inclusion</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're committed to building a diverse team that reflects the global customers we serve. All qualified applicants receive equal consideration regardless of race, color, religion, gender, sexual orientation, national origin, disability, or veteran status.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a global team that's revolutionizing how the world thinks about rental operations.
          </p>
          <button className="px-10 py-4 bg-[#007A55] text-white font-semibold rounded-xl magnetic-cta">
            Explore Open Roles and Join Our Mission
          </button>
        </div>
      </div>
    </div>
  );
}

export function PressPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pressReleases = [
    {
      date: "November 15, 2024",
      title: "RentWorksPlus+ launches AI-powered Dynamic Pricing Engine",
      excerpt: "New intelligent pricing algorithm increases revenue by up to 22% through real-time market analysis and demand forecasting.",
      link: "#"
    },
    {
      date: "September 3, 2024",
      title: "New Alexa AI Operator handles 24/7 rental inquiries",
      excerpt: "Advanced conversational AI responds to customer questions, processes bookings, and provides instant support around the clock.",
      link: "#"
    },
    {
      date: "June 20, 2024",
      title: "RentWorksPlus+ expands to 40+ countries",
      excerpt: "Global expansion brings intelligent rental operations platform to Asia-Pacific, EMEA, and Latin American markets.",
      link: "#"
    }
  ];

  const mediaEssentials = [
    { icon: <FileText className="w-6 h-6" />, label: "Brand Guidelines", description: "Logo usage, colors, typography" },
    { icon: <Award className="w-6 h-6" />, label: "Logos & Icons", description: "SVG, PNG, and vector formats" },
    { icon: <Calendar className="w-6 h-6" />, label: "Product Screenshots", description: "High-resolution platform images" },
    { icon: <Users className="w-6 h-6" />, label: "Executive Bios", description: "Leadership team profiles" }
  ];

  const latestCoverage = [
    {
      publication: "TechCrunch",
      title: "How RentWorksPlus+ is Disrupting Traditional Rental Software",
      date: "October 2024",
      link: "#"
    },
    {
      publication: "Forbes",
      title: "The Future of Fleet Management: AI Meets Mobility",
      date: "September 2024",
      link: "#"
    },
    {
      publication: "VentureBeat",
      title: "RentWorksPlus+ Raises $50M Series B for Global Expansion",
      date: "August 2024",
      link: "#"
    }
  ];

  const productTimeline = [
    { year: "2025", milestone: "Alexa AI Operator & Dynamic Pricing Engine launched" },
    { year: "2023", milestone: "Mobile-responsive web app and Payments module released" },
    { year: "2021", milestone: "Online Reservation Plugin reaches 1M+ bookings" },
    { year: "2019", milestone: "RentWorksPlus+ API ecosystem opens to developers" },
    { year: "2015", milestone: "Multi-location support and corporate fleet management" },
    { year: "2010", milestone: "RentWorksPlus+ platform founded" }
  ];

  const mediaKitContents = [
    "Company logos (SVG, PNG, white/color variants)",
    "Product screenshots (dashboard, mobile, booking widget)",
    "CEO and CMO executive bios with headshots",
    "Brand guidelines PDF (colors, typography, logo usage)",
    "Fact sheet with company statistics and milestones",
    "Press release templates and boilerplate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <style>{`
        @keyframes glow-pulse-fade {
          0% { opacity: 0; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
          50% { opacity: 0.7; text-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { opacity: 1; text-shadow: 0 0 0px rgba(0, 122, 85, 0); }
        }
        @keyframes slide-blur-reveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes soft-rise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes magnetic-cta {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 122, 85, 0); }
          100% { transform: scale(1.02); box-shadow: 0 0 25px rgba(0, 122, 85, 0.5); }
        }
        .glow-pulse { animation: glow-pulse-fade 0.7s ease-out; }
        .slide-blur { animation: slide-blur-reveal 0.8s ease-out forwards; opacity: 0; }
        .soft-rise { animation: soft-rise 0.6s ease-out forwards; opacity: 0; }
        .magnetic-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .magnetic-cta:hover { animation: magnetic-cta 0.3s forwards; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        {/* Background Blobs with Parallax */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-[#007A55] opacity-5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#081E32] opacity-5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-12 h-12 text-[#007A55]" />
            <div className="h-12 w-1 bg-[#007A55]"></div>
            <span className="text-[#007A55] font-semibold text-lg tracking-wide">PRESS & MEDIA</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-[#081E32] mb-6 glow-pulse max-w-4xl leading-tight">
            RentWorksPlus+ in the News
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Find press releases, brand guidelines, leadership quotes, and official media assets for coverage, partnerships, and publications.
          </p>

          <button className="magnetic-cta bg-[#007A55] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#006644] flex items-center gap-2">
            Download Media Kit
            <Download className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Media Essentials */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Media Essentials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to tell the RentWorksPlus+ story accurately and compellingly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaEssentials.map((item, index) => (
              <div
                key={index}
                className="slide-blur bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007A55] bg-opacity-10 rounded-full mb-4">
                  <div className="text-[#007A55]">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-[#081E32] mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Release Highlights */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Press Release Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest announcements and major milestones from RentWorksPlus+.
            </p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="soft-rise bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border-l-4 border-[#007A55]"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-sm text-[#007A55] font-semibold mb-2">{release.date}</div>
                    <h3 className="text-2xl font-bold text-[#081E32] mb-3">{release.title}</h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <a href={release.link} className="text-[#007A55] font-semibold flex items-center gap-2 hover:underline">
                      Read full release
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <Newspaper className="w-12 h-12 text-[#007A55] opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Coverage */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Latest Coverage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Featured articles and mentions from leading tech and business publications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestCoverage.map((article, index) => (
              <div
                key={index}
                className="slide-blur bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[#007A55] font-bold text-sm mb-3">{article.publication}</div>
                <h3 className="text-xl font-bold text-[#081E32] mb-3 leading-snug">{article.title}</h3>
                <div className="text-gray-500 text-sm mb-4">{article.date}</div>
                <a href={article.link} className="text-[#007A55] font-semibold flex items-center gap-2 hover:underline">
                  Read article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Evolution Timeline */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Product Evolution Timeline</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in the RentWorksPlus+ journey from 2010 to today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007A55] to-transparent"></div>

            <div className="space-y-8">
              {productTimeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-20 soft-rise"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-[18px] top-2 w-5 h-5 bg-[#007A55] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-[#007A55] mb-2">{item.year}</div>
                    <p className="text-lg text-gray-700">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Contacts */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081E32] mb-4 glow-pulse">Press Contacts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              For media inquiries, interviews, and partnership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="slide-blur bg-white rounded-xl p-8 shadow-md text-center" style={{ animationDelay: '0s' }}>
              <Mail className="w-12 h-12 text-[#007A55] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081E32] mb-2">Media Inquiries</h3>
              <p className="text-gray-600 mb-4">For press releases, interviews, and media coverage</p>
              <a href="mailto:press@rentworksplus.com" className="text-[#007A55] font-semibold hover:underline">
                press@rentworksplus.com
              </a>
            </div>

            <div className="slide-blur bg-white rounded-xl p-8 shadow-md text-center" style={{ animationDelay: '0.1s' }}>
              <Handshake className="w-12 h-12 text-[#007A55] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081E32] mb-2">Partnership Inquiries</h3>
              <p className="text-gray-600 mb-4">For technology partnerships and integrations</p>
              <a href="mailto:partnerships@rentworksplus.com" className="text-[#007A55] font-semibold hover:underline">
                partnerships@rentworksplus.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit Download CTA */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#081E32] to-[#0a2740] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Download className="w-16 h-16 text-[#007A55] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 glow-pulse">Download the Official Media Kit</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Everything you need in one ZIP file - logos, screenshots, executive bios, brand guidelines, and fact sheet.
          </p>

          <div className="bg-white bg-opacity-10 rounded-xl p-8 mb-10 text-left backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-[#007A55]">Media Kit Contents:</h3>
            <ul className="space-y-2">
              {mediaKitContents.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#007A55] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="magnetic-cta bg-[#007A55] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#006644] inline-flex items-center gap-3">
            Download Media Kit (ZIP)
            <Download className="w-5 h-5" />
          </button>

          <p className="text-sm text-gray-400 mt-6">
            Updated November 2024 • 12.5 MB • All assets licensed for editorial use
          </p>
        </div>
      </section>
    </div>
  );
}

// ===========================================
// SUPPORT PAGES
// ===========================================

export function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">Help Center</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Your complete knowledge base for everything RentWorksPlus+. Search articles, how-tos, feature explanations, and operational best practices.
            </p>
            <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644]">
              Search Help Articles
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            Designed for rental teams of all sizes, our Help Center offers step-by-step guidance for using RentWorksPlus+ across reservations, fleet operations, payments, reporting, and more. Everything is organized, searchable, and constantly updated.
          </p>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">Popular Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: "Getting Started with RentWorksPlus+", articles: "24 articles" },
              { icon: <Calendar className="w-6 h-6" />, title: "Reservations & Agreements", articles: "32 articles" },
              { icon: <Car className="w-6 h-6" />, title: "Fleet Management & Maintenance", articles: "28 articles" },
              { icon: <CreditCard className="w-6 h-6" />, title: "Pricing & Payments", articles: "19 articles" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Reports & Intelligence", articles: "22 articles" },
              { icon: <Settings className="w-6 h-6" />, title: "Account Settings & Permissions", articles: "15 articles" }
            ].map((category, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-6 hover:shadow-lg transition-all animate-slide-diagonal-delay-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                  {category.icon}
                </div>
                <h3 className="text-[#081E32] text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.articles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { title: "How to Create Digital Agreements in Under 60 Seconds", time: "5 min read" },
              { title: "Setting Up Dynamic Pricing in RentWorksPlus+", time: "8 min read" },
              { title: "Managing Vehicles Across Multiple Locations", time: "6 min read" },
              { title: "Capturing Photos & Digital Signatures from Any Device", time: "4 min read" }
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#007A55] transition-all animate-slide-diagonal-delay-2"
              >
                <h3 className="text-[#081E32] text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#007A55] to-[#006644] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="text-lg mb-6">Our support team is ready to help you 24/7</p>
          <button className="lift-ease-cta bg-white text-[#007A55] px-8 py-3 rounded-xl hover:bg-gray-100 font-semibold">
            Contact Support Team
          </button>
        </div>
      </section>
    </div>
  );
}

export function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">Product Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Deep feature documentation for teams who need precise, detailed explanations of how the RentWorksPlus+ platform works.
            </p>
            <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644]">
              Browse Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            From configuration steps to operational flows, the RentWorksPlus+ Documentation Hub provides clarity on every feature. Clear diagrams, walkthroughs, rules, and admin-level details help your team stay productive and informed.
          </p>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">Platform Overview</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: <Car className="w-6 h-6" />, title: "Reservation Lifecycle Documentation", description: "Complete guide to reservations, contracts, pricing, and customer workflows.", pages: "45 pages" },
              { icon: <Wrench className="w-6 h-6" />, title: "Fleet Lifecycle Documentation", description: "Vehicle tracking, inspection protocols, maintenance schedules, and lifecycle management.", pages: "32 pages" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Pricing Engine Rules", description: "Custom reports, KPI dashboards, utilization metrics, and revenue intelligence.", pages: "28 pages" },
              { icon: <Settings className="w-6 h-6" />, title: "Payments & Billing Workflows", description: "User permissions, branch setup, rate structures, and admin settings.", pages: "38 pages" },
              { icon: <CreditCard className="w-6 h-6" />, title: "User Roles & Access Permissions", description: "Gateway integration, refund handling, deposit management, and billing cycles.", pages: "22 pages" },
              { icon: <Smartphone className="w-6 h-6" />, title: "Customization & Settings", description: "Mobile features, responsive design, offline mode, and customer portals.", pages: "19 pages" }
            ].map((section, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-6 hover:shadow-xl transition-all animate-slide-diagonal-delay-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                  {section.icon}
                </div>
                <h3 className="text-[#081E32] text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-3">{section.description}</p>
                <p className="text-[#007A55] text-sm font-medium">{section.pages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Strengths */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-12 text-center">Why Our Documentation Stands Out</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Search className="w-6 h-6" />, label: "Written for rental operators", desc: "Industry-specific guidance" },
              { icon: <BookOpen className="w-6 h-6" />, label: "Clear diagrams for workflows", desc: "Visual learning aids" },
              { icon: <Download className="w-6 h-6" />, label: "Constantly updated", desc: "Platform changes reflected" },
              { icon: <RefreshCw className="w-6 h-6" />, label: "Matches the real UI exactly", desc: "No confusion" }
            ].map((strength, index) => (
              <div key={index} className="text-center animate-slide-diagonal-delay-2">
                <div className={`w-16 h-16 rounded-full bg-[#007A55] flex items-center justify-center text-white mb-4 mx-auto animate-micro-bounce-delay-${index % 3}`}>
                  {strength.icon}
                </div>
                <h4 className="text-[#081E32] font-semibold mb-1">{strength.label}</h4>
                <p className="text-gray-600 text-sm">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">View Full Documentation Library</h3>
          <p className="text-lg mb-6">Access comprehensive guides for every feature</p>
          <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-3 rounded-xl hover:bg-[#006644] font-semibold">
            Explore Documentation
          </button>
        </div>
      </section>
    </div>
  );
}

export function APIDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">Developer API Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Build integrations, apps, partner workflows, or mobile tools powered by RentWorksPlus+ using our secure, modern API platform.
            </p>
            <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644]">
              Get API Key
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our API Docs provide clear, developer-ready references for authentication, endpoints, payloads, and webhook events. Developers can explore examples, try live calls, and build quickly using our sandbox environment.
          </p>
        </div>
      </section>

      {/* API Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">API Endpoints</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { method: "POST", endpoint: "Authentication (OAuth)", desc: "Secure token-based auth" },
              { method: "GET", endpoint: "Reservations API", desc: "Create and manage bookings" },
              { method: "PATCH", endpoint: "Customers API", desc: "Customer data management" },
              { method: "GET", endpoint: "Fleet & Vehicle API", desc: "Vehicle inventory access" },
              { method: "POST", endpoint: "Pricing & Rate API", desc: "Dynamic pricing engine" },
              { method: "GET", endpoint: "Payments API", desc: "Process transactions" },
              { method: "POST", endpoint: "Webhooks", desc: "Real-time event notifications" },
              { method: "GET", endpoint: "SDKs & Code Samples", desc: "Ready-to-use libraries" }
            ].map((endpoint, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-5 hover:shadow-lg transition-all animate-slide-diagonal-delay-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  } animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                    {endpoint.method}
                  </span>
                </div>
                <h3 className="text-[#081E32] font-semibold mb-1">{endpoint.endpoint}</h3>
                <p className="text-gray-600 text-sm">{endpoint.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Highlights */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-12 text-center">Developer Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "RESTful architecture", desc: "Modern API design" },
              { icon: <Zap className="w-6 h-6" />, title: "Sandbox for testing", desc: "Safe development environment" },
              { icon: <Code className="w-6 h-6" />, title: "High-performance design", desc: "Low-latency responses" },
              { icon: <FileText className="w-6 h-6" />, title: "100+ integration use cases", desc: "Proven at scale" }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 border border-gray-200 animate-slide-diagonal-delay-2">
                <div className={`w-16 h-16 rounded-full bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 mx-auto animate-micro-bounce-delay-${index % 3}`}>
                  {feature.icon}
                </div>
                <h4 className="text-[#081E32] font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#007A55] to-[#006644] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Explore the Developer Portal</h3>
          <p className="text-lg mb-6">Start building with our comprehensive API</p>
          <button className="lift-ease-cta bg-white text-[#007A55] px-8 py-3 rounded-xl hover:bg-gray-100 font-semibold">
            Access Developer Portal
          </button>
        </div>
      </section>
    </div>
  );
}

export function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">Training & Onboarding</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Get your entire team fully trained — fast. Personalized onboarding ensures you launch RentWorksPlus+ with confidence and operational excellence.
            </p>
            <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644]">
              Start Training
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our onboarding specialists work directly with your team to configure your fleet, pricing, workflows, and integrations. With structured training programs, your staff becomes proficient on day one.
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">Programs</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <UserPlus className="w-6 h-6" />,
                title: "Personalized Onboarding Setup",
                description: "Dedicated specialist configures your system and trains your team"
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "Staff Training Sessions (Live)",
                description: "Interactive sessions covering all features and workflows"
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "RentWorksPlus+ Academy",
                description: "Self-paced video tutorials and certification programs"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certification for Managers",
                description: "Official credentials for fleet and operations managers"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Multi-location Rollout",
                description: "Strategic planning for enterprise deployments"
              }
            ].map((program, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-6 hover:shadow-xl transition-all animate-slide-diagonal-delay-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                  {program.icon}
                </div>
                <h3 className="text-[#081E32] text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Launch in days, not months", desc: "Fast deployment" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Reduced ramp-up time", desc: "Quick proficiency" },
              { icon: <Target className="w-6 h-6" />, title: "Tailored for every role", desc: "Personalized training" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "Long-term adoption", desc: "Best practices built-in" }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 border border-gray-200 animate-slide-diagonal-delay-2">
                <div className={`w-16 h-16 rounded-full bg-[#007A55] flex items-center justify-center text-white mb-4 mx-auto animate-micro-bounce-delay-${index % 3}`}>
                  {benefit.icon}
                </div>
                <h4 className="text-[#081E32] font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Onboarding Journey</h3>
          <p className="text-lg mb-6">Schedule your personalized training session today</p>
          <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-3 rounded-xl hover:bg-[#006644] font-semibold">
            Book Training Session
          </button>
        </div>
      </section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">Contact Support</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Get help from real rental technology specialists — 24/7. Choose the best channel for your team.
            </p>
            <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-4 rounded-xl hover:bg-[#006644]">
              Open Support Ticket
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our support team understands rental operations deeply. Whether you need help with setup, daily workflows, API integration, or billing — we're here around the clock.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">Support Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <MessageCircle className="w-6 h-6" />, title: "Live Chat", availability: "24/7", responseTime: "< 2 minutes" },
              { icon: <Phone className="w-6 h-6" />, title: "Phone Support", availability: "24/7", responseTime: "Immediate" },
              { icon: <Mail className="w-6 h-6" />, title: "Email Support", availability: "24/7", responseTime: "< 4 hours" },
              { icon: <Video className="w-6 h-6" />, title: "Screen Sharing", availability: "Business Hours", responseTime: "Scheduled" },
              { icon: <FileText className="w-6 h-6" />, title: "Support Portal", availability: "Always", responseTime: "Self-Service" },
              { icon: <Users className="w-6 h-6" />, title: "Account Manager", availability: "Enterprise", responseTime: "Priority" }
            ].map((channel, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-6 hover:shadow-xl transition-all animate-slide-diagonal-delay-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                  {channel.icon}
                </div>
                <h3 className="text-[#081E32] text-xl font-semibold mb-3">{channel.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Availability:</span> {channel.availability}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Response:</span> {channel.responseTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-12 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: "Knowledge Base Access", desc: "Self-service articles and guides" },
              { icon: <Lightbulb className="w-6 h-6" />, title: "Feature Requests Portal", desc: "Submit and vote on new features" },
              { icon: <Calendar className="w-6 h-6" />, title: "Scheduled Training", desc: "Book personalized sessions" }
            ].map((extra, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 border border-gray-200 animate-slide-diagonal-delay-2">
                <div className={`w-16 h-16 rounded-full bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 mx-auto animate-micro-bounce-delay-${index}`}>
                  {extra.icon}
                </div>
                <h4 className="text-[#081E32] font-semibold mb-2">{extra.title}</h4>
                <p className="text-gray-600 text-sm">{extra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#007A55] to-[#006644] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact the Support Team</h3>
          <p className="text-lg mb-6">We're here to help you succeed</p>
          <button className="lift-ease-cta bg-white text-[#007A55] px-8 py-3 rounded-xl hover:bg-gray-100 font-semibold">
            Start Live Chat
          </button>
        </div>
      </section>
    </div>
  );
}

export function StatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInDiagonal {
          from { opacity: 0; transform: translate(-30px, 30px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes glowBorderReveal {
          0% { box-shadow: 0 0 0 rgba(0, 122, 85, 0); border-color: transparent; }
          50% { box-shadow: 0 0 20px rgba(0, 122, 85, 0.4); }
          100% { box-shadow: 0 0 15px rgba(0, 122, 85, 0.3); border-color: rgba(0, 122, 85, 0.5); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseLine {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }
        .animate-slide-diagonal { animation: slideInDiagonal 0.8s ease-out forwards; }
        .animate-slide-diagonal-delay-1 { animation: slideInDiagonal 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-diagonal-delay-2 { animation: slideInDiagonal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glow-border-card { border: 2px solid transparent; transition: all 0.3s ease; }
        .glow-border-card:hover { animation: glowBorderReveal 0.6s ease-out forwards; }
        .animate-micro-bounce { animation: microBounce 0.6s ease-in-out; }
        .animate-micro-bounce-delay-1 { animation: microBounce 0.6s ease-in-out 0.1s; }
        .animate-micro-bounce-delay-2 { animation: microBounce 0.6s ease-in-out 0.2s; }
        .pulse-line-divider { position: relative; padding-bottom: 12px; }
        .pulse-line-divider::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #007A55, transparent); animation: pulseLine 1.5s ease-out forwards; }
        .lift-ease-cta { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .lift-ease-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(0, 122, 85, 0.3); }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="animate-slide-diagonal">
            <h1 className="text-white mb-6 text-5xl font-bold">System Status & Uptime</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Check live system performance, uptime history, scheduled maintenance, and real-time service alerts.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg animate-micro-bounce">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-diagonal-delay-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            RentWorksPlus+ delivers enterprise-grade reliability with global hosting infrastructure. Our transparent status page keeps your team informed of uptime, maintenance windows, or disruptions.
          </p>
        </div>
      </section>

      {/* Live System Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-3 pulse-line-divider">System Components</h2>
          <div className="space-y-4 mt-12">
            {[
              { name: "Core Rental Platform", status: "operational", uptime: "99.99%" },
              { name: "API Services", status: "operational", uptime: "99.98%" },
              { name: "Online Booking Plugin", status: "operational", uptime: "99.97%" },
              { name: "Mobile App Backend", status: "operational", uptime: "99.99%" },
              { name: "Payment Processing", status: "operational", uptime: "99.96%" },
              { name: "Reporting & Analytics", status: "operational", uptime: "99.95%" }
            ].map((component, index) => (
              <div
                key={index}
                className="glow-border-card bg-white rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-all animate-slide-diagonal-delay-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center animate-micro-bounce-delay-${Math.min(index % 3, 2)}`}>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-[#081E32] text-lg font-semibold">{component.name}</h3>
                    <p className="text-sm text-green-600 font-medium">Operational</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">30-Day Uptime</p>
                  <p className="text-2xl font-bold text-[#007A55]">{component.uptime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#081E32] text-3xl font-bold mb-12 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "99.95%", label: "Overall Uptime", icon: <TrendingUp className="w-6 h-6" /> },
              { metric: "24/7", label: "Monitoring", icon: <Activity className="w-6 h-6" /> },
              { metric: "0", label: "Active Incidents", icon: <AlertCircle className="w-6 h-6" /> },
              { metric: "Full", label: "Redundancy", icon: <Shield className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-8 border border-gray-200 hover:border-[#007A55] hover:shadow-lg transition-all animate-slide-diagonal-delay-2"
              >
                <div className={`w-16 h-16 rounded-full bg-[#007A55]/10 flex items-center justify-center text-[#007A55] mb-4 mx-auto animate-micro-bounce-delay-${index % 3}`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#007A55] mb-2">{stat.metric}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-12 bg-gradient-to-r from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">View Full Status Dashboard</h3>
          <p className="text-lg mb-6">Subscribe to real-time status updates</p>
          <button className="lift-ease-cta bg-[#007A55] text-white px-8 py-3 rounded-xl hover:bg-[#006644] font-semibold">
            Subscribe to Updates
          </button>
        </div>
      </section>
    </div>
  );
}
