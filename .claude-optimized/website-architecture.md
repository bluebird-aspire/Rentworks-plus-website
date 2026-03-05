# RentWorksPlus Website — Current Architecture Reference

> Technical reference for the existing website structure.
> Use this to understand what exists before making changes.

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | — | Type safety |
| Vite | 6.4.1 | Build tool (SWC compiler) |
| Tailwind CSS | — | Styling |
| shadcn/ui | — | 60+ pre-built components |
| Radix UI | — | Accessible primitives (dialog, dropdown, tooltip, tabs, etc.) |
| Lucide React | — | Icon library |
| Recharts | — | Data visualization / charts |
| Motion | — | Animations (framer-motion successor) |
| React Hook Form | — | Form state management |
| Sonner | — | Toast notifications |
| next-themes | — | Theme management |
| Vaul | — | Drawer component |

**Dev server**: Port 3000, auto-opens browser
**Build output**: `/build` directory
**Path alias**: `@` = `./src`

---

## File Structure

```
src/
├── pages/
│   ├── HomePage.tsx              # Main landing page (15 sections)
│   ├── AllPlatformPages.tsx      # 6 platform feature pages (14KB)
│   ├── AllOtherPages.tsx         # Solutions, roles, resources (199KB — very large)
│   └── ComingSoonPage.tsx        # Placeholder page
├── components/
│   ├── home/                     # 13 landing page section components
│   │   ├── NewHero.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ExpertSupport.tsx
│   │   ├── CustomerStories.tsx
│   │   ├── Integrations.tsx
│   │   ├── FleetTypes.tsx
│   │   ├── RevenueIntelligence.tsx
│   │   ├── GlobalSupport.tsx
│   │   ├── BigTestimonial.tsx
│   │   ├── OnboardingSteps.tsx
│   │   ├── EasyAccessible.tsx
│   │   └── DailyOperations.tsx
│   ├── platform/                 # Platform feature page components
│   ├── ui/                       # 60+ shadcn/ui components
│   ├── Navigation.tsx            # Site navigation menu
│   ├── Footer.tsx                # Site footer
│   ├── TrustedBy.tsx             # Partner logos section
│   ├── Testimonials.tsx          # Customer quotes (5 testimonials)
│   ├── FeatureCards.tsx          # 3 main feature highlight cards
│   ├── MainFeatures.tsx          # Feature descriptions
│   ├── BlogPreview.tsx           # Blog preview section
│   └── BookingStepper.tsx        # Reservation flow stepper demo
├── guidelines/
│   └── Guidelines.md             # Design standards (2.6KB)
├── styles/
│   ├── globals.css
│   └── index.css                 # Global styles (66KB)
├── assets/                       # Images and icons
├── App.tsx                       # Main app component
├── AppWithRouting.tsx            # Route definitions
├── main.tsx                      # Entry point
└── index.css                     # Root styles
```

---

## All Routes

### Home
| Route | Component | Notes |
|-------|-----------|-------|
| `/` | ComingSoonPage | Currently shows coming soon |
| `/new-website` | ComingSoonPage | Alternative coming soon |
| `/home` | HomePage | Main landing page (reference) |

### Platform Feature Pages (6)
| Route | Feature |
|-------|---------|
| `/platform/auto-rental-system` | Core rental system overview |
| `/platform/online-reservation` | Online reservation plugin |
| `/platform/api` | RentWorksPlus API |
| `/platform/mobile-app` | Mobile-responsive web app |
| `/platform/payments` | Payment processing |
| `/platform/addons` | Add-on modules |

### Solutions — By Business Type (7)
| Route | Audience |
|-------|----------|
| `/solutions/car-rental-agencies` | Independent agencies |
| `/solutions/multi-location` | Multi-location operators |
| `/solutions/corporate-fleets` | Corporate fleet managers |
| `/solutions/truck-commercial` | Truck & commercial vehicles |
| `/solutions/ev-micromobility` | EV & micromobility |
| `/solutions/equipment-rental` | Equipment rental companies |
| `/solutions/dealership` | Dealership rental programs |

### Solutions — By Role (5)
| Route | Audience |
|-------|----------|
| `/solutions/owners` | Business owners |
| `/solutions/operations` | Operations managers |
| `/solutions/front-desk` | Front desk staff |
| `/solutions/finance` | Finance teams |
| `/solutions/it` | IT administrators |

### Resources (5)
| Route | Content |
|-------|---------|
| `/resources/blog` | Blog articles |
| `/resources/guides` | User guides |
| `/resources/templates` | Templates |
| `/resources/updates` | Product updates |
| `/resources/webinars` | Webinars |

### Company (4)
| Route | Content |
|-------|---------|
| `/company/about` | About us |
| `/company/partners` | Partner program |
| `/company/careers` | Job listings |
| `/company/press` | Press/media |

### Support (6)
| Route | Content |
|-------|---------|
| `/support/help-center` | Help center |
| `/support/documentation` | Documentation |
| `/support/api-docs` | API documentation |
| `/support/training` | Training resources |
| `/support/contact` | Contact page |
| `/support/status` | System status |

### Other
| Route | Content |
|-------|---------|
| `/pricing` | Pricing page |

**Total: 30+ routes**

---

## Home Page Structure (15 Sections)

The HomePage renders these components in order:

1. **NewHero** — Main headline, subtext, CTAs (Start Free Trial, Book Demo)
2. **TrustedBy** — 10 partner company logos (fabricated — see content-accuracy.md)
3. **BigTestimonial** — Featured customer quote (fabricated)
4. **WhyChooseUs** — "Everything You Need" value proposition
5. **ValueProposition** — Three pillars: Smart Automation, Real-Time Intelligence, Seamless Operations
6. **WhyChooseBenefits** — Extended benefits breakdown
7. **EasyLearnAccessible** — Usability and onboarding claims
8. **DailyOperationsTabs** — Tabbed operational workflow features
9. **RevenueIntelligence** — Analytics and financial features
10. **FleetTypes** — Vehicle/asset categories and business types
11. **CustomerStories** — 3 case studies (fabricated)
12. **ExpertSupport** — 24/7 support claims
13. **OnboardingSteps** — Implementation process steps
14. **Integrations** — 25+ partner logos (mostly fabricated)
15. **GlobalSupport** — International coverage claims

---

## Platform Feature Page Structure

All 6 platform pages (`AllPlatformPages.tsx`) follow the same template:

```
1. Hero Section
   - Icon + badge
   - Headline + description
   - CTA buttons

2. Pain Points (5)
   - Problems the feature solves

3. Solutions (5)
   - How the feature addresses each pain point

4. Workflow (3 steps)
   - Visual step-by-step process

5. Key Metrics (4)
   - Performance/benefit numbers (mostly fabricated)

6. Mockup Image
   - Screenshot or illustration of the feature
```

---

## Design System Details

### Colors
```css
--primary-green: #007A55;
--secondary-green: #00A575;
--background: #F4F5F7;
```

### Typography
- Base font-size: 14px
- Headings follow standard scale

### Button Variants
- **Primary**: Filled, brand green, bold text
- **Secondary**: Outlined, transparent background, brand green border
- **Tertiary**: Text-only, no borders, underline on hover

### Spacing
- Standard padding: p-4 / p-6 / p-8
- Section gaps: gap-4 / gap-6 / gap-8
- Container max-width with responsive breakpoints

### Layout
- Flexbox and CSS Grid
- Mobile-first responsive design
- Standard breakpoints (sm, md, lg, xl)

### Component Guidelines (from Guidelines.md)
- Date format: "Jun 10"
- Chips: Use in sets of 3+
- Dropdowns: For 3+ options only
- Bottom toolbar: Max 4 items

---

## Key Architecture Notes

### Large Files to Refactor
- **`AllOtherPages.tsx`** (199KB) — Contains ALL solution, role, resource, company, and support pages in a single file. This should be split during the rewrite.
- **`AllPlatformPages.tsx`** (14KB) — Contains all 6 platform pages. Consider splitting.
- **`index.css`** (66KB) — Very large global stylesheet.

### Current Routing
- Uses React Router via `AppWithRouting.tsx`
- Root `/` currently shows ComingSoonPage
- All pages are defined inline (no lazy loading observed in routing file)

### Component Patterns
- Home page uses composition pattern (15 independent section components)
- Platform pages use a shared template pattern
- shadcn/ui components are pre-installed and available
