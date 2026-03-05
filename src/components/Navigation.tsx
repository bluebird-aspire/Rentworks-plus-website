import { useState } from 'react';
import { Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/82b6f4b94e67a09f71951541678541a2738fc1b4.png';

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="RentWorksPlus+" className="h-12" />
          </div>

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
              {activeMenu === 'platform' && <PlatformMegaMenu />}
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
              {activeMenu === 'solutions' && <SolutionsMegaMenu />}
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
              {activeMenu === 'resources' && <ResourcesMenu />}
            </div>

            <a href="#pricing" className="text-[#081E32] hover:text-[#007A55] transition-colors">
              Pricing
            </a>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[#081E32] hover:text-[#007A55] transition-colors flex items-center gap-1">
                Company
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'company' && <CompanyMenu />}
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
              {activeMenu === 'support' && <SupportMenu />}
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

function PlatformMegaMenu() {
  return (
    <div className="absolute top-full left-0 mt-0 w-[900px] bg-white border border-gray-200 shadow-xl rounded-lg p-8 -ml-64">
      <div className="grid grid-cols-2 gap-8">
        {/* OPERATIONS */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">Operations</h3>
          <div className="space-y-4">
            <MenuFeature
              title="Auto Rental System"
              description="Complete end-to-end operational management for vehicle and equipment rental businesses."
            />
            <MenuFeature
              title="Check-Out & Check-In System"
              description="Fast, guided workflows for returning, inspecting, and issuing vehicles."
            />
            <MenuFeature
              title="Fleet Management"
              description="Real-time availability, utilization optimization, maintenance tracking."
            />
          </div>
        </div>

        {/* ONLINE & DIGITAL */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">Online & Digital</h3>
          <div className="space-y-4">
            <MenuFeature
              title="Online Reservation Plugin"
              description="Embed a branded, mobile-friendly booking widget directly into your website."
            />
            <MenuFeature
              title="Rentall API"
              description="Build your own mobile app or connect external systems with our developer-friendly REST APIs."
            />
            <MenuFeature
              title="Mobile Web App"
              description="Fully responsive design accessible from any device."
            />
          </div>
        </div>

        {/* FINANCE & PAYMENTS */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">
            Finance & Payments
          </h3>
          <div className="space-y-4">
            <MenuFeature
              title="RENTALL Payments"
              description="5 payment methods: Cash, Card Present, Pay By Link, Direct Debit, Check, Hosted Payment."
            />
            <MenuFeature
              title="Rate Configuration"
              description="Flexible rate tables, dynamic pricing tools, corporate tariffs."
            />
          </div>
        </div>

        {/* INTELLIGENCE & AUTOMATION */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">
            Intelligence & Automation
          </h3>
          <div className="space-y-4">
            <MenuFeature
              title="Reservation Planner"
              description="Visual AI-powered planning calendar for fleet and customer allocations."
            />
            <MenuFeature
              title="Customized Dashboard"
              description="Real-time business KPIs, utilization, revenue trends, performance alerts."
            />
            <MenuFeature
              title="Claims & Damage Management"
              description="Track incidents, collect evidence, generate reports."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu() {
  return (
    <div className="absolute top-full left-0 mt-0 w-[900px] bg-white border border-gray-200 shadow-xl rounded-lg p-8 -ml-32">
      <div className="grid grid-cols-2 gap-8">
        {/* BY BUSINESS TYPE */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">By Business Type</h3>
          <div className="space-y-4">
            <MenuFeature
              title="Car Rental Companies"
              description="Solutions for daily rental operations, fleets, locations & channels."
            />
            <MenuFeature
              title="Equipment & Machinery Rental"
              description="Support for heavy equipment, construction machinery & tools."
            />
            <MenuFeature
              title="Corporate Fleets"
              description="Manage internal vehicle assignments, fuel, travel, and cost allocation."
            />
            <MenuFeature
              title="Dealership Rental Programs"
              description="Loaner rental programs for dealerships and service centers."
            />
          </div>
        </div>

        {/* BY ROLE */}
        <div>
          <h3 className="text-[#007A55] uppercase tracking-wider text-sm mb-4">By Role</h3>
          <div className="space-y-4">
            <MenuFeature
              title="General Managers"
              description="Global visibility, performance dashboards, revenue reporting."
            />
            <MenuFeature
              title="Fleet Managers"
              description="Vehicle lifecycle, maintenance, utilization, and uptime management."
            />
            <MenuFeature
              title="Front Desk & Agents"
              description="Fast check-in/out workflows, reservation creation, upsell tools."
            />
            <MenuFeature
              title="Finance & Accounting Teams"
              description="Payments, invoices, corporate accounts, outstanding balances."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="absolute top-full left-0 mt-0 w-[320px] bg-white border border-gray-200 shadow-xl rounded-lg p-6 -ml-24">
      <div className="space-y-3">
        <MenuLink
          title="Blogs"
          description="Insights on rental automation, fleet utilization, AI enhancements."
        />
        <MenuLink title="News" description="Product announcements, releases, industry trends." />
        <MenuLink
          title="Templates"
          description="Checklists, agreement templates, fleet audit templates."
        />
        <MenuLink
          title="eBooks & Guides"
          description="Deep training documents on optimization, pricing, automation."
        />
      </div>
    </div>
  );
}

function CompanyMenu() {
  return (
    <div className="absolute top-full left-0 mt-0 w-[240px] bg-white border border-gray-200 shadow-xl rounded-lg p-4 -ml-16">
      <div className="space-y-2">
        <a
          href="#about"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          About Us
        </a>
        <a
          href="#careers"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Careers
        </a>
        <a
          href="#press"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Press
        </a>
        <a
          href="#partners"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Partner Program
        </a>
        <a
          href="#contact"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

function SupportMenu() {
  return (
    <div className="absolute top-full left-0 mt-0 w-[240px] bg-white border border-gray-200 shadow-xl rounded-lg p-4 -ml-16">
      <div className="space-y-2">
        <a
          href="#knowledge"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Knowledge Base
        </a>
        <a
          href="#docs"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Documentation
        </a>
        <a
          href="#api"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          API Docs
        </a>
        <a
          href="#support"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          Support Center
        </a>
        <a
          href="#status"
          className="block px-3 py-2 rounded hover:bg-[#F4F5F7] text-[#081E32] transition-colors"
        >
          System Status
        </a>
      </div>
    </div>
  );
}

function MenuFeature({ title, description }: { title: string; description: string }) {
  return (
    <a href="#" className="block group">
      <div className="p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors">
        <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-snug">{description}</p>
      </div>
    </a>
  );
}

function MenuLink({ title, description }: { title: string; description: string }) {
  return (
    <a href="#" className="block group p-3 rounded-lg hover:bg-[#F4F5F7] transition-colors">
      <h4 className="text-[#081E32] group-hover:text-[#007A55] transition-colors mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-snug">{description}</p>
    </a>
  );
}
