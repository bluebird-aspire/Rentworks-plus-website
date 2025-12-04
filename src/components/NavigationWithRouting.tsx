import { useState } from 'react';
import { ChevronDown, Car, Calendar, Cloud, Smartphone, CreditCard, Settings, Building2, Users, Briefcase, Wrench, BookOpen, FileText, Clipboard, Megaphone, Calendar as CalendarIcon, Info, Handshake, UserPlus, Newspaper, HelpCircle, Book, Code, GraduationCap, Phone, Activity, Zap } from 'lucide-react';
import { Link } from './Router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/82b6f4b94e67a09f71951541678541a2738fc1b4.png';

export function NavigationWithRouting() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src={logo} alt="RentWorksPlus+" className="h-12" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('platform')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Platform
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'platform' && <PlatformMegaMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('solutions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Solutions
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'solutions' && <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Resources
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'resources' && <ResourcesMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <Link href="/pricing" className="text-[#081E32] hover:text-[#007A55] transition-colors">
              Pricing
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Company
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'company' && <CompanyMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('support')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Support
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'support' && <SupportMenu onClose={() => setActiveMenu(null)} />}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center">
            <button className="bg-[#007A55] text-white px-6 py-2.5 rounded hover:bg-[#006644] transition-colors">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Demo Card Component (appears on right side of all dropdowns)
function DemoCard() {
  return (
    <div className="bg-[#F4F5F7] rounded-lg p-6">
      <div className="mb-4 rounded-lg overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1563457012475-13cf086fd600?w=400"
          alt="Book a Demo"
          className="w-full h-32 object-cover"
        />
      </div>
      <h4 className="text-[#081E32] mb-2">Book a Demo</h4>
      <p className="text-gray-600 text-sm mb-4">
        See how RentWorksPlus+ transforms your operations.
      </p>
      <button className="w-full bg-[#007A55] text-white px-4 py-2 rounded hover:bg-[#006644] transition-colors text-sm">
        Book Your Demo Now
      </button>
    </div>
  );
}

function PlatformMegaMenu({ onClose }: { onClose: () => void }) {
  const items = [
    {
      icon: <Car className="w-5 h-5" />,
      title: "Auto Rental System",
      description: "End-to-end solution for vehicle and machinery rental operators.",
      link: "/platform/auto-rental-system"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Online Reservation Plugin",
      description: "Let your customers reserve online instantly.",
      link: "/platform/online-reservation"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "RentWorksPlus+ API",
      description: "Build your mobile experience with our developer-friendly API.",
      link: "/platform/api"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile-Responsive Web App",
      description: "Check-out & check-in made simple on any device.",
      link: "/platform/mobile-app"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "RentWorksPlus+ Payments",
      description: "Integrated payment processing with 5 methods.",
      link: "/platform/payments"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Add-on Modules",
      description: "Extend your workflows with powerful rental add-ons.",
      link: "/platform/addons"
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-0 w-[1000px] bg-white border border-gray-200 shadow-xl rounded-lg -ml-64">
      <div className="flex">
        {/* LEFT ZONE - 70% */}
        <div className="w-[70%] p-6 border-r border-gray-200">
          <div className="space-y-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={onClose}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT ZONE - 30% */}
        <div className="w-[30%] p-6">
          <DemoCard />
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  const businessTypes = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Multi-Location & Franchise Operators",
      description: "Centralized control with synchronized branch performance.",
      link: "/solutions/multi-location"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Corporate & Long-Term Fleets",
      description: "Advanced contract, billing, and vehicle lifecycle intelligence.",
      link: "/solutions/corporate-fleets"
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Truck, Van & Commercial Vehicle Rentals",
      description: "Purpose-built tools for commercial and utility fleet operators.",
      link: "/solutions/truck-commercial"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "EV, Scooter & Micro-Mobility Providers",
      description: "Charging-aware intelligence for modern urban and electric fleets.",
      link: "/solutions/ev-micromobility"
    }
  ];

  const roles = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Owners & General Managers",
      description: "Strategic clarity with real-time rental intelligence.",
      link: "/solutions/owners"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Operations & Fleet Managers",
      description: "Optimized fleet health, utilization, and operational efficiency.",
      link: "/solutions/operations"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Front Desk & Rental Agents",
      description: "Fast, intuitive workflows for high-volume customer service.",
      link: "/solutions/front-desk"
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-0 w-[1000px] bg-white border border-gray-200 shadow-xl rounded-lg -ml-32">
      <div className="flex">
        {/* LEFT ZONE - 70% */}
        <div className="w-[70%] p-6 border-r border-gray-200">
          <div className="grid grid-cols-2 gap-x-6">
            {/* By Business Type */}
            <div>
              <h3 className="text-[#007A55] uppercase tracking-wider text-xs mb-4">By Business Type</h3>
              <div className="space-y-2">
                {businessTypes.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={onClose}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#081E32] text-sm group-hover:text-[#007A55] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* By Role */}
            <div>
              <h3 className="text-[#007A55] uppercase tracking-wider text-xs mb-4">By Role</h3>
              <div className="space-y-2">
                {roles.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={onClose}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#081E32] text-sm group-hover:text-[#007A55] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT ZONE - 30% */}
        <div className="w-[30%] p-6">
          <DemoCard />
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu({ onClose }: { onClose: () => void }) {
  const items = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Blog",
      description: "Insights on rental automation, AI, fleet performance & industry trends.",
      link: "/resources/blog"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Guides & Playbooks",
      description: "Step-by-step manuals for scaling rental operations with AI.",
      link: "/resources/guides"
    },
    {
      icon: <Clipboard className="w-5 h-5" />,
      title: "Templates & Checklists",
      description: "Free downloadable tools for inspections, audits & workflows.",
      link: "/resources/templates"
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Product Updates & Release Notes",
      description: "Stay informed on new features, improvements & AI enhancements.",
      link: "/resources/updates"
    },
    {
      icon: <CalendarIcon className="w-5 h-5" />,
      title: "Webinars & Events",
      description: "Live sessions, virtual demos & expert talks for rental operators.",
      link: "/resources/webinars"
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-0 w-[800px] bg-white border border-gray-200 shadow-xl rounded-lg -ml-24">
      <div className="flex">
        {/* LEFT ZONE - 70% */}
        <div className="w-[70%] p-6 border-r border-gray-200">
          <div className="space-y-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={onClose}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT ZONE - 30% */}
        <div className="w-[30%] p-6">
          <DemoCard />
        </div>
      </div>
    </div>
  );
}

function CompanyMenu({ onClose }: { onClose: () => void }) {
  const items = [
    {
      icon: <Info className="w-5 h-5" />,
      title: "About Us",
      description: "The story, mission, and values behind RentWorksPlus+.",
      link: "/company/about"
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: "Partners & Integrations",
      description: "Technology partners and ecosystem connections that power our platform.",
      link: "/company/partners"
    },
    {
      icon: <UserPlus className="w-5 h-5" />,
      title: "Careers",
      description: "Join a global team building the future of intelligent mobility.",
      link: "/company/careers"
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      title: "Press & Media",
      description: "Newsroom, announcements, brand assets, and media kit.",
      link: "/company/press"
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-0 w-[700px] bg-white border border-gray-200 shadow-xl rounded-lg -ml-16">
      <div className="flex">
        {/* LEFT ZONE - 70% */}
        <div className="w-[70%] p-6 border-r border-gray-200">
          <div className="space-y-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={onClose}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT ZONE - 30% */}
        <div className="w-[30%] p-6">
          <DemoCard />
        </div>
      </div>
    </div>
  );
}

function SupportMenu({ onClose }: { onClose: () => void }) {
  const items = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Help Center",
      description: "Browse articles, tutorials & step-by-step guides",
      link: "/support/help-center"
    },
    {
      icon: <Book className="w-5 h-5" />,
      title: "Documentation",
      description: "Technical documentation for workflows & system features",
      link: "/support/documentation"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "API Docs",
      description: "Developer resources for building integrations and apps",
      link: "/support/api-docs"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Training & Onboarding",
      description: "Personalized setup, team training & implementation programs",
      link: "/support/training"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Contact Support",
      description: "Chat, email, phone & priority support options",
      link: "/support/contact"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "System Status",
      description: "Live uptime reports & service health indicators",
      link: "/support/status"
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-0 w-[800px] bg-white border border-gray-200 shadow-xl rounded-lg -ml-16">
      <div className="flex">
        {/* LEFT ZONE - 70% */}
        <div className="w-[70%] p-6 border-r border-gray-200">
          <div className="space-y-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={onClose}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#007A55] group-hover:bg-[#007A55] group-hover:text-white transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT ZONE - 30% */}
        <div className="w-[30%] p-6">
          <DemoCard />
        </div>
      </div>
    </div>
  );
}
