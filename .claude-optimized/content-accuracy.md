# RentWorksPlus Website — Content Accuracy Guide

> This document classifies every marketing claim on the current website.
> Use this to determine what content to keep, rewrite, or remove during the website rewrite.

---

## Classification System

| Color | Meaning | Action |
|-------|---------|--------|
| **GREEN** | Confirmed real in codebase | Use freely in website content |
| **YELLOW** | Partially real / overstated | Rewrite with accurate scope |
| **RED** | Fabricated / unverified | Remove entirely |

---

## GREEN — Confirmed Real (Use Freely)

### Core Modules (all 9 claimed core modules exist)
- Reservations management with conflict detection
- Fleet management with ACRISS classification
- Pricing management (rate rules, seasons, time/mileage rates)
- Payment processing (multi-gateway)
- Digital contracts (search, print, email)
- Customer profiles (360° with rental/payment history)
- Reporting & analytics (15+ KPI dashboard)
- Maintenance tracking (alerts, procedures, repair orders)
- Vehicle tracking (inventory/location management)

### Payment Gateway (confirmed integration)
- Adyen
- Hosted payment solutions

### Vehicle Inspection
- Photo-based damage documentation
- 60+ vehicle parts mapped
- Damage type classification (scratch, dent, crack, stain, chip, tear, rust, missing, broken)
- Self-service inspection (customer-facing)
- Multiple inspection modes

### Customer Features
- Customer profiles with tabbed interface
- Rental and payment history
- Notes system (5 types: general, alert, warning, credit, history)
- Document management
- OCR license scanning
- Duplicate detection
- Customer preferences tracking
- Customer alerts and blacklisting
- Customer self-service dashboard/portal

### Claims Management
- Full claim lifecycle
- Multi-vehicle and multi-contact per claim
- 9 detail tabs (Overview, Contacts, Vehicles, Financial, Repair Orders, Documents, History, Expenses, Payments)
- Expense and payment reconciliation
- Document management with checklists
- Financial audit trail

### Configuration
- Multi-location support with per-location settings
- Role-based access control (users, groups, permissions)
- Terminal configuration (per-workstation)
- Equipment and maintenance management
- Source of business and referral tracking
- Counter management
- Status code configuration
- Notification rules

### Advanced Features
- Visual form/document builder with drag-and-drop canvas
- Conditional logic in forms
- E-signature field support in documents
- OCR/VIN scanning
- Interactive in-app guides and onboarding
- Loyalty programs
- Lost and found management
- Non-revenue vehicle movement tracking
- Audit logging

### Pricing Configuration
- Time and mileage rates
- Rate rules (business logic)
- Seasonal pricing
- Miscellaneous/ancillary charges
- Fuel pricing by location
- Airline partnership rates

### Architecture Claims
- Cloud-based platform
- Multi-tenant architecture
- Real-time data updates
- Mobile-responsive design
- Secure authentication (JWT + refresh tokens)

---

## YELLOW — Partially Real (Rewrite Accurately)

### "AI Vehicle Inspection"
- **Reality**: Photo-based digital inspection with manual damage marking on vehicle diagrams. 60+ parts mapped. Customer self-service option.
- **Not real**: No AI, no computer vision, no machine learning damage detection.
- **Rewrite as**: "Digital vehicle inspection with photo documentation and damage mapping across 60+ vehicle zones"

### "Smart Res Planner"
- **Reality**: Reservation conflict detection and resolution tool exists (`/res-planner` feature).
- **Not real**: No AI or ML optimization. It identifies conflicts and helps resolve them manually.
- **Rewrite as**: "Reservation planner with conflict detection and resolution tools"

### "Vehicle Tracking"
- **Reality**: Vehicle inventory system tracks which business location holds each vehicle. Transport confirmation workflows between locations.
- **Not real**: No GPS real-time tracking, no telematics integration, no live map.
- **Rewrite as**: "Vehicle inventory management with location tracking and inter-branch transport coordination"

### "100+ Integrations"
- **Reality**: 1 confirmed payment gateway (Adyen), hosted payments, e-signature workflow, self-inspection external service, OCR capability.
- **Not real**: No OTA integrations (Expedia, Booking.com, etc.), no accounting integrations (QuickBooks, Xero), no telematics (Geotab, Samsara), no communication tools (Twilio, SendGrid). No Worldpay, TriPOS, or CenPOS.
- **Rewrite as**: List only actual integrations. Say "growing integration ecosystem" if needed, not "100+"

### "Dynamic Pricing"
- **Reality**: Manual rate rules, seasonal pricing, time/mileage rate tables, location-specific fuel pricing, airline partnership rates.
- **Not real**: No AI-driven dynamic pricing, no demand-based automatic adjustments, no ML algorithms.
- **Rewrite as**: "Flexible pricing engine with rate rules, seasonal pricing, and configurable rate tables"

### "Predictive Analytics" / "Actionable Insights"
- **Reality**: Dashboard with 15+ real-time KPI metrics (fleet status, revenue trends, utilization, conversion rate, no-show rate, etc.)
- **Not real**: No ML predictions, no demand forecasting, no predictive models.
- **Rewrite as**: "Real-time operational dashboard with fleet analytics, revenue tracking, and utilization metrics"

### "E-Signature" as add-on
- **Reality**: E-signature workflow exists in the codebase (ESignatureWorkflowApi, ESignaturePublicApi). Signature fields exist in the form builder.
- **Accurate scope**: It's a real feature but verify if it's truly a separate paid add-on or part of core.
- **Rewrite as**: "E-signature capability for digital contract signing"

### "Insurance Issuance" as add-on
- **Reality**: Insurance configuration module exists for managing coverage types and products.
- **Not real**: Unclear if it actually issues insurance policies or just configures available options.
- **Rewrite as**: "Insurance product configuration and coverage management"

### "Online Reservation Plugin"
- **Reality**: The customer dashboard exists as a self-service portal. Reservation management is a core module.
- **Not real**: No standalone embeddable widget or plugin confirmed in codebase.
- **Rewrite as**: Verify if an actual embeddable reservation widget exists before claiming it

### "Mobile App"
- **Reality**: The frontend is responsive/mobile-friendly (React + Tailwind).
- **Not real**: No native mobile app (iOS/Android) confirmed. No offline mode confirmed.
- **Rewrite as**: "Mobile-responsive web application" — not "mobile app"

---

## RED — Fabricated (Remove Entirely)

### Non-Existent Features
- **CAREN AI Agent** — No AI agent, chatbot, or NLP system exists in the codebase
- **Credit Profile Check module** — Not found as a feature
- **Multi-Brand Support module** — Not found as a distinct feature
- **AI-powered dynamic pricing** — No ML pricing exists
- **Demand forecasting** — No predictive models exist
- **Machine learning booking analysis** — Does not exist
- **Computer vision damage detection** — Inspection is manual/photo-based
- **Natural language processing** — No NLP capabilities exist
- **Offline mode** — Not confirmed in codebase

### Fabricated Metrics
- "5,000+ rental businesses powered" — Unverified, likely fabricated
- "150+ countries served" — Unverified
- "$2B+ annual revenue processed" — Unverified
- "10M+ reservations managed annually" — Unverified
- "2M+ rentals processed" — Unverified
- "99.98% uptime" — Unverified
- "99.9% platform uptime" — Unverified
- "99% payment success rate" — Unverified
- "4.7/5 Capterra rating" — Verify independently before using
- "4.7/5 Software Advice rating" — Verify independently before using
- "98% customer satisfaction" — Unverified
- "500+ knowledge base articles" — Unverified
- "7 expert specialists" — Unverified

### Fabricated Performance Claims
- "50% faster check-ins" — No benchmark data
- "90% paperless operations" — No data
- "3x faster check-in/out" — No data
- "75% reduction in manual tasks" — No data
- "22% higher multi-branch utilization" — No data
- "40% fewer billing errors" — No data
- "35% faster reporting cycles" — No data
- "89% demand forecasting accuracy" — Feature doesn't exist
- "94% computer vision damage detection accuracy" — Feature doesn't exist
- "+45% direct bookings" — No data
- "50% faster field operations" — No data
- "30% fewer damage disputes" — No data
- "70% faster development" (API) — No data

### Fabricated Testimonials (all appear invented)
- **Sarah Mitchell**, CEO, DriveNow Rentals — Not verified as real customer
- **David Chen**, Operations Director — Not verified
- **Maria Rodriguez**, Founder, Luxury Wheels — Not verified
- **James Wilson**, Fleet Manager, EasyRent — Not verified
- **Lisa Anderson**, Owner, Premium Auto Rentals — Not verified

### Fabricated Case Studies
- **CityDrive Rentals**: "82% reduction in no-shows" — Not verified
- **Premier Auto Rentals**: "35% fleet utilization increase" — Not verified
- **Elite Car Hire**: "28% revenue increase" — Not verified

### Fabricated Trust Signals
- "Best Car Rental Software" Capterra 2024 — Verify before using
- "Inc. 5000 Fastest Growing Companies 2023, 2024" — Verify before using
- Partner logos (Enterprise Rentals, FleetPro, CityDrive, etc.) — Appear fabricated

### Non-Existent Integrations
**OTA integrations (none exist in codebase):**
- Expedia, Booking.com, Rentalcars.com, Kayak, Priceline, Airbnb, Hotels.com, Agoda, TripAdvisor, Turo, GetYourGuide, Viator, CarTrawler, Skyscanner, Trivago, Hotwire, VRBO

**Accounting integrations (none exist):**
- QuickBooks, Xero, FreshBooks

**Communication integrations (none exist):**
- Twilio, SendGrid, Mailchimp

**Telematics integrations (none exist):**
- Verizon Connect, Geotab, Samsara

**Other claimed integrations (none exist):**
- Stripe, Square, PayPal, Authorize.net, Worldpay, TriPOS, CenPOS (only Adyen exists)
- Turo Insurance, Checkr, Jumio, Onfido

### Fabricated Company Claims
- "Founded: 2018 by rental industry veterans" — Verify
- Open job positions listed on website — May not be real
- "TensorFlow" in tech stack — Not in actual codebase
- "Python" in tech stack — Backend is NestJS/TypeScript, not Python
- "Kubernetes" in tech stack — Deployment infrastructure unverified

### Fabricated Pricing
- **Starter $99/month, Professional $249/month** — Verify with business team
- **Add-on prices** ($29 E-Signature, $49 AI Inspection, etc.) — Verify
- **2.9% + $0.30 processing fee** — Verify
- "14-day free trial" / "30-day money-back guarantee" — Verify

---

## How to Handle Each Category

### GREEN items
Use freely. You can expand on these with accurate technical details from `product-features.md`.

### YELLOW items
Rewrite using the suggested accurate descriptions. Never overstate what the feature does. When in doubt, describe the concrete functionality rather than using aspirational language.

### RED items
Remove completely. Replace with:
- **For metrics**: Use `[METRIC NEEDED - verify with business team]` as placeholder
- **For testimonials**: Leave section empty or use `[REAL TESTIMONIAL NEEDED]`
- **For case studies**: Leave empty or use `[REAL CASE STUDY NEEDED]`
- **For integrations**: Only list confirmed ones (Adyen)
- **For features**: Don't mention them at all
