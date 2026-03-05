# RentWorksPlus Marketing Website — Claude Code Guidelines

Marketing website for the **RentWorksPlus** car rental management platform by Bluebird Auto Rental Systems.

> **GOLDEN RULE**: Never write marketing content that isn't backed by actual product capabilities.
> Before describing any feature, check `.claude-optimized/product-features.md`.
> Before using any metric or claim, check `.claude-optimized/content-accuracy.md`.

---

## Quick Reference

```bash
npm run dev           # Start dev server (port 3000)
npm run build         # Production build (output: /build)
npm run lint          # ESLint
npm run typecheck     # TypeScript checking
```

---

## Tech Stack

- **Framework**: React 18.3.1 + TypeScript
- **Build**: Vite 6.4.1 with React SWC
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (60+ components) + Radix UI primitives
- **Animations**: Motion (framer-motion successor)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Path alias**: `@` = `./src`

---

## Project Structure

```
src/
├── pages/              # Route page components
│   ├── HomePage.tsx     # Main landing page (15 sections)
│   ├── AllPlatformPages.tsx  # 6 platform feature pages
│   ├── AllOtherPages.tsx     # Solutions, roles, resources, company pages
│   └── ComingSoonPage.tsx
├── components/
│   ├── home/           # Landing page section components (13 files)
│   ├── platform/       # Platform feature page components
│   └── ui/             # shadcn/ui component library
├── guidelines/         # Design standards
├── styles/             # Global CSS
└── assets/             # Images and icons
```

---

## Design System

### Brand Colors
- **Primary green**: `#007A55`
- **Secondary green**: `#00A575`
- **Background**: `#F4F5F7`

### Button Variants
- **Primary**: Filled, bold, brand color
- **Secondary**: Outlined, transparent background
- **Tertiary**: Text-only, no borders

### Standards
- Base font-size: 14px
- Responsive layouts (flexbox/grid)
- Tailwind classes only — no inline styles, no custom CSS files
- Date format: "Jun 10"

---

## Content Writing Rules

### DO
- Describe features based on what the product actually does (see `product-features.md`)
- Use accurate, specific language ("multi-gateway payment processing" not "AI-powered everything")
- Reference real integrations only (Adyen, Worldpay, TriPOS, CenPOS)
- Describe the inspection system as "photo-based digital inspection" (not "AI computer vision")
- Use placeholder text like `[METRIC NEEDED]` when real data isn't available yet

### DO NOT
- Fabricate customer testimonials or case studies
- Invent performance metrics (no "82% reduction" or "35% increase" without real data)
- Claim features that don't exist (no CAREN AI Agent, no ML-based pricing, no GPS tracking)
- List integrations that aren't built (no Expedia, Booking.com, QuickBooks, Xero, Geotab)
- Use unverified scale claims (no "5,000+ businesses", "150+ countries", "$2B+ revenue")

### Tone
- Professional yet approachable
- Confident but honest — let real features speak for themselves
- Clear and straightforward — no buzzword soup
- Focus on concrete capabilities, not vague AI promises

---

## Knowledge Base

Consult these before writing ANY content:

- **`.claude-optimized/product-features.md`** — Complete accurate feature inventory (26 modules)
- **`.claude-optimized/content-accuracy.md`** — GREEN/YELLOW/RED claim classification
- **`.claude-optimized/website-architecture.md`** — Current site routes, components, design system

---

## The Actual Product

RentWorksPlus is a **cloud-based, multi-tenant car rental management platform** built with:
- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: NestJS + Prisma + PostgreSQL
- **Auth**: JWT with auto-refresh, role-based access control

It has **26 real feature modules** including:
- Full rental lifecycle (reservations, check-in, check-out, contracts)
- Customer management with OCR license scanning
- Fleet management with ACRISS coding
- Multi-gateway payments (Adyen, Worldpay, TriPOS, CenPOS)
- Comprehensive claims management
- Photo-based vehicle inspection (60+ vehicle parts)
- Form/document builder with conditional logic
- Dashboard analytics with 15+ KPIs
- Multi-location configuration
- Loyalty programs, lost & found, and more

See `product-features.md` for the complete breakdown.

---

## Checklist Before Submitting

- [ ] All feature descriptions match `product-features.md`
- [ ] No fabricated metrics, testimonials, or case studies
- [ ] No claims about features that don't exist (check `content-accuracy.md` RED list)
- [ ] YELLOW claims rewritten with accurate scope
- [ ] Responsive design tested
- [ ] Tailwind classes only, semantic class names used
- [ ] TypeScript types properly defined

---

*Version 1.0.0 | Created March 2026*
