# RentWorksPlus+ Website - Project Documentation

## Project Overview

**RentWorksPlus+** is a comprehensive marketing website for a car rental management software platform. This is a frontend-only React application designed to showcase the platform's features, solutions, and benefits to potential customers.

**Original Design:** Generated from a Figma design available at https://www.figma.com/design/UpBbxOtg2JnDB3SIbkIdOu/Design-Hero-Screen

## Tech Stack

### Core Framework
- **React 18.3.1** - Modern React with TypeScript/TSX
- **TypeScript** - Type-safe JavaScript development
- **Vite 6.4.1** - Lightning-fast build tool with Hot Module Replacement
- **@vitejs/plugin-react-swc** - Fast Refresh using SWC compiler

### Styling & UI
- **Tailwind CSS v4.1.3** - Utility-first CSS framework
- **shadcn/ui** - High-quality accessible component library (50+ components)
- **Radix UI** - Comprehensive set of accessible primitive components:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Hover Card, Label, Menubar, Navigation Menu, Popover, Progress
  - Radio Group, Scroll Area, Select, Separator, Slider, Switch
  - Tabs, Toast, Tooltip, and more (23+ primitives)
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Smart utility class composition

### UI Components & Features
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React (v0.487.0)** - Beautiful icon library
- **embla-carousel-react** - Smooth carousel functionality
- **react-day-picker** - Date selection component
- **react-hook-form** - Performant form management
- **recharts** - Data visualization library
- **sonner** - Toast notification system
- **next-themes** - Theme switching support
- **cmdk** - Command palette component
- **vaul** - Drawer component
- **react-resizable-panels** - Resizable panel layouts

### Routing
- **Custom client-side routing** - History API-based navigation
- No external routing library - custom implementation in [Router.tsx](src/components/Router.tsx)
- Context-based navigation state management

## Project Structure

```
c:\Github\Website\
├── .git/                          # Git repository
├── .gitignore                     # Git ignore rules
├── .claude/                       # Claude Code documentation
│   └── claude.md                  # This file
├── node_modules/                  # Dependencies (169 packages)
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Locked dependency versions
├── vite.config.ts                 # Vite configuration with custom aliases
├── index.html                     # Application entry point
├── README.md                      # Setup instructions
├── Design Hero Screen (1).zip     # Original Figma design assets
└── src/
    ├── main.tsx                   # React app bootstrap
    ├── App.tsx                    # Root component wrapper
    ├── AppWithRouting.tsx         # Main routing configuration
    ├── index.css                  # Tailwind CSS output
    ├── Attributions.md            # Credits for shadcn/ui and Unsplash
    ├── assets/                    # Static images
    │   └── 82b6f4b94e67a09f71951541678541a2738fc1b4.png
    ├── components/
    │   ├── Router.tsx             # Custom routing implementation
    │   ├── NavigationWithRouting.tsx  # Main navigation with mega menus
    │   ├── Footer.tsx             # Site footer
    │   ├── home/                  # Homepage components (14 files)
    │   │   ├── NewHero.tsx        # Hero section
    │   │   ├── ValueProposition.tsx
    │   │   ├── DailyOperations.tsx
    │   │   ├── WhyChooseUs.tsx
    │   │   ├── CustomerStories.tsx
    │   │   ├── FleetTypes.tsx
    │   │   ├── RevenueIntelligence.tsx
    │   │   ├── EasyAccessible.tsx
    │   │   ├── GlobalSupport.tsx
    │   │   ├── Integrations.tsx
    │   │   ├── ExpertSupport.tsx
    │   │   ├── LogoStrip.tsx
    │   │   └── BigTestimonial.tsx
    │   ├── templates/             # Reusable page templates
    │   │   └── FeaturePageTemplate.tsx
    │   ├── figma/                 # Figma utilities
    │   │   └── ImageWithFallback.tsx
    │   └── ui/                    # shadcn/ui components (50+ components)
    ├── pages/
    │   ├── HomePage.tsx           # Home page composition
    │   ├── AllPlatformPages.tsx   # Platform feature pages
    │   └── AllOtherPages.tsx      # Solutions, resources, company pages
    ├── guidelines/
    │   └── Guidelines.md          # Empty template for AI guidelines
    └── styles/
        └── globals.css            # Additional global styles
```

## Architecture & Design Patterns

### Custom Routing System
The application uses a custom client-side routing implementation instead of React Router:
- **Location**: [src/components/Router.tsx](src/components/Router.tsx)
- **Features**:
  - History API-based navigation (pushState/popState)
  - Context-based state management
  - Link component with automatic active state
  - 30+ defined routes

### Route Structure
```typescript
Routes organized by category:
- / (Home)
- /platform/* (6 feature pages)
- /solutions/by-business/* (5 business types)
- /solutions/by-role/* (5 roles)
- /resources/* (5 resource types)
- /company/* (4 company pages)
- /support/* (6 support pages)
- /pricing
```

### Component Architecture
- **Template Pattern**: Reusable page templates in [src/components/templates/](src/components/templates/)
- **Composition**: Pages composed from smaller, focused components
- **Mega Menus**: Complex dropdown navigation with hover interactions
- **Accessibility First**: Built on Radix UI primitives for WCAG compliance

### Styling Approach
- **Tailwind v4**: Utility-first CSS with custom configuration
- **Component Variants**: Using class-variance-authority for consistent variants
- **Theme Support**: next-themes integration for light/dark mode
- **Responsive Design**: Mobile-first responsive design patterns

## Key Files Reference

### Configuration Files
- [vite.config.ts](vite.config.ts) - Vite build configuration with custom aliases
- [index.html](index.html) - HTML entry point
- [package.json](package.json) - Dependencies and scripts

### Core Application
- [src/main.tsx](src/main.tsx) - React app bootstrap
- [src/App.tsx](src/App.tsx) - Root component
- [src/AppWithRouting.tsx](src/AppWithRouting.tsx) - Routing setup

### Navigation
- [src/components/NavigationWithRouting.tsx](src/components/NavigationWithRouting.tsx) - Main navigation
- [src/components/Router.tsx](src/components/Router.tsx) - Custom router implementation
- [src/components/Footer.tsx](src/components/Footer.tsx) - Site footer

### Pages
- [src/pages/HomePage.tsx](src/pages/HomePage.tsx) - Homepage composition
- [src/pages/AllPlatformPages.tsx](src/pages/AllPlatformPages.tsx) - Platform features
- [src/pages/AllOtherPages.tsx](src/pages/AllOtherPages.tsx) - All other pages

### Styles
- [src/index.css](src/index.css) - Tailwind CSS imports
- [src/styles/globals.css](src/styles/globals.css) - Global styles

## Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
- Runs on http://localhost:3000
- Auto-opens in default browser
- Hot Module Replacement enabled
- Fast Refresh with SWC compiler

### Production Build
```bash
npm run build
```
- Output directory: `build/`
- Target: esnext
- Optimized for modern browsers

### Preview Production Build
```bash
npm run preview
```

## Available Routes

### Platform Features (6 pages)
- `/platform/fleet-management`
- `/platform/reservations-booking`
- `/platform/customer-management`
- `/platform/billing-payments`
- `/platform/reports-analytics`
- `/platform/integrations`

### Solutions by Business Type (5 pages)
- `/solutions/by-business/car-rental-agencies`
- `/solutions/by-business/dealerships`
- `/solutions/by-business/equipment-rental`
- `/solutions/by-business/peer-to-peer`
- `/solutions/by-business/corporate-fleet`

### Solutions by Role (5 pages)
- `/solutions/by-role/business-owners`
- `/solutions/by-role/operations-managers`
- `/solutions/by-role/front-desk`
- `/solutions/by-role/finance-teams`
- `/solutions/by-role/it-administrators`

### Resources (5 pages)
- `/resources/blog`
- `/resources/case-studies`
- `/resources/guides`
- `/resources/webinars`
- `/resources/documentation`

### Company (4 pages)
- `/company/about`
- `/company/careers`
- `/company/partners`
- `/company/press`

### Support (6 pages)
- `/support/help-center`
- `/support/contact`
- `/support/training`
- `/support/community`
- `/support/system-status`
- `/support/api-docs`

### Other
- `/pricing` - Pricing information
- `/` - Homepage

## Vite Configuration Highlights

### Custom Aliasing System
The project uses extensive path aliases for all dependencies with version numbers:
```typescript
'@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion'
'@radix-ui/react-alert-dialog@1.1.4': '@radix-ui/react-alert-dialog'
// ... and many more
```

### Special Aliases
- `@` → `./src` (absolute imports from src)
- `figma-asset-82b6f4b9` → Direct path to Figma PNG asset

### Dev Server Settings
- Port: 3000
- Open: true (auto-opens browser)
- Host: localhost

### Build Settings
- Output directory: `build/`
- Target: esnext
- Minification: enabled

## Common Tasks

### Adding a New Page
1. Create page component in [src/pages/](src/pages/)
2. Add route in [src/components/Router.tsx](src/components/Router.tsx)
3. Update navigation in [src/components/NavigationWithRouting.tsx](src/components/NavigationWithRouting.tsx)

### Adding a New UI Component
1. Use shadcn/ui CLI or copy from [src/components/ui/](src/components/ui/)
2. Import and use in your page/component
3. All shadcn components use Radix UI primitives

### Modifying Styles
1. Use Tailwind utility classes directly in components
2. For global styles, edit [src/styles/globals.css](src/styles/globals.css)
3. For theme variables, check Tailwind configuration

### Working with Icons
```typescript
import { IconName } from 'lucide-react'

<IconName className="w-4 h-4" />
```

### Using Forms
```typescript
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form'
```

## Dependencies Overview

### Production Dependencies (42 packages)
- **UI Components**: 23 Radix UI primitives, shadcn/ui components
- **Icons**: lucide-react (0.487.0)
- **Forms**: react-hook-form
- **Charts**: recharts
- **Animations**: framer-motion
- **Carousel**: embla-carousel-react
- **Date Picker**: react-day-picker
- **Notifications**: sonner
- **Theme**: next-themes
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Development Dependencies (9 packages)
- **React**: react@18.3.1, react-dom@18.3.1
- **TypeScript**: @types/react, @types/react-dom, @types/node
- **Build**: vite@6.4.1, @vitejs/plugin-react-swc@3.11.0
- **Styling**: tailwindcss@4.1.3

### Total Package Count
- **169 packages** installed (including transitive dependencies)
- **No security vulnerabilities** (as of last audit)

## Special Notes

### No Backend Integration
- This is a frontend-only static website
- No API calls or backend services
- All content is hardcoded in components

### Browser Support
- Modern browsers with ES2015+ support
- Tailwind CSS v4 compatibility
- Vite's esnext target

### Performance
- Fast build times with Vite + SWC
- Hot Module Replacement for instant updates
- Optimized production builds

### Accessibility
- Built on Radix UI primitives (WCAG compliant)
- Keyboard navigation support
- Screen reader friendly
- Focus management

## Troubleshooting

### Port 3000 Already in Use
Change port in [vite.config.ts](vite.config.ts):
```typescript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Build Errors
1. Clear node_modules: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Clear Vite cache: `rm -rf node_modules/.vite`

### TypeScript Errors
- No tsconfig.json present (using Vite defaults)
- Consider adding tsconfig.json for stricter type checking

### Styling Not Working
1. Check Tailwind v4 syntax
2. Verify imports in [src/index.css](src/index.css)
3. Clear build cache

## Git Repository

### Branches
- **main** - Primary development branch

### Current Status
- ✅ Git initialized
- ✅ .gitignore configured
- ✅ Initial commit completed
- ✅ Dependencies installed and updated
- ✅ Security vulnerabilities fixed

## Future Enhancements

### Recommended Additions
1. **TypeScript Configuration**: Add tsconfig.json for stricter type checking
2. **Testing**: Add Vitest or Jest for unit/integration tests
3. **E2E Testing**: Consider Playwright or Cypress
4. **CI/CD**: GitHub Actions for automated testing/deployment
5. **React Router**: Consider migrating to React Router for better maintainability
6. **ESLint & Prettier**: Code quality and formatting tools
7. **Environment Variables**: Add .env support for configuration
8. **Backend Integration**: Add API client for dynamic content
9. **SEO**: Add react-helmet or similar for meta tags
10. **Analytics**: Integrate Google Analytics or similar

### Potential Upgrades
- Upgrade to React 19 (when stable)
- Upgrade to Vite 7 (when available)
- Update outdated packages:
  - @types/node: 20.19.25 → 24.10.1
  - @vitejs/plugin-react-swc: 3.11.0 → 4.2.2
  - lucide-react: 0.487.0 → 0.555.0
  - react-day-picker: 8.10.1 → 9.11.2
  - react-resizable-panels: 2.1.9 → 3.0.6
  - recharts: 2.15.4 → 3.5.1

## Contact & Support

For questions about this project structure or development workflow, refer to:
- [README.md](README.md) - Basic setup instructions
- [package.json](package.json) - Available scripts
- [vite.config.ts](vite.config.ts) - Build configuration

---

**Last Updated**: 2025-11-28
**Project Version**: 1.0.0
**Node Version Required**: >=14.0.0
**Package Manager**: npm
