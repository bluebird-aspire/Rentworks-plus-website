# RentWorksPlus — Accurate Product Feature Inventory

> Source: Direct codebase analysis of the Bluebird solution (React 19 + NestJS).
> Last verified: March 2026.

This document lists **only features confirmed to exist** in the actual codebase. Use this as the single source of truth when writing website content.

---

## Overview

- **26 feature modules** confirmed in `src/features/`
- **35+ API service clients** in `src/api/`
- **100+ pages/routes** across all features
- **Multi-tenant architecture** with role-based access control
- **Tech stack**: React 19 + TypeScript + Vite (frontend), NestJS + Prisma + PostgreSQL (backend)

---

## 1. CORE RENTAL OPERATIONS

### 1.1 Reservations (`/reservations`)
**What it does**: Full reservation lifecycle management.
- Reservation list with search, filtering, and pagination
- Reservation details view
- Open reservations tracking
- Conflict booking detection and handling
- Data table with sortable columns

**Marketable as**: "Streamlined reservation management with real-time availability and conflict detection."

### 1.2 Check-In (`/checkin`)
**What it does**: Vehicle handover process at rental start.
- Check-in workflow with step-by-step flow
- Vehicle inspection forms
- Damage assessment documentation
- Contract validation (locked contract handling)
- Dedicated Zustand store for state management

**Marketable as**: "Structured check-in process with vehicle inspection and damage documentation."

### 1.3 Check-Out (`/checkout`)
**What it does**: Vehicle return, final charges, and invoice generation.
- Multi-step checkout flow
- Vehicle inspection at return
- Payment processing integration
- Damage collection and review
- Completion tracking and confirmation
- Self-inspection option (customer-facing)

**Marketable as**: "Complete check-out workflow with inspection, payment processing, and automated invoicing."

### 1.4 Vehicle Inspection (`/inspection`)
**What it does**: Photo-based vehicle condition documentation system.
- Visual damage marking on vehicle diagrams
- **60+ vehicle parts** mapped for detection
- Photo capture and processing
- Damage type classification (scratch, dent, crack, stain, chip, tear, rust, missing, broken, other)
- Self-service inspection (public-facing, customer can complete)
- Multiple inspection modes
- Image masking and preprocessing utilities

**Marketable as**: "Comprehensive digital vehicle inspection with photo documentation, damage mapping across 60+ vehicle zones, and customer self-service capability."

**NOT marketable as**: "AI-powered" or "computer vision" — there is no ML model for damage detection. It's a manual photo-documentation system.

### 1.5 Contracts (`/contracts`)
**What it does**: Rental agreement management.
- Contract search with filtering
- Contract detail views with summaries
- Print and email functionality
- Contract card components for display

**Marketable as**: "Digital contract management with search, print, and email capabilities."

### 1.6 Non-Revenue Movements (`/nonrevenue`)
**What it does**: Track vehicle movements that don't generate revenue.
- Open and close non-revenue records
- Driver assignment (employee picker)
- Vehicle movement tracking
- Fleet status integration

**Marketable as**: "Non-revenue vehicle movement tracking for internal transfers, maintenance runs, and operational logistics."

---

## 2. CUSTOMER MANAGEMENT

### 2.1 Customer Profiles (`/customers`)
**What it does**: Complete customer lifecycle management.
- Customer CRUD (create, read, update, delete)
- Profile header with key stats
- **Tabbed interface**: Basic Info, Addresses, Rental History, Payment History, Notes, Documents, Audit Log
- Rental history with pagination
- Payment history tracking
- **Notes system**: General, Alert, Warning, Credit, History note types
- Document management and uploads
- **Statistics**: Total rentals, revenue, lifetime value
- **Preferences**: Vehicle class, insurance preferences, frequent flyer info
- **Duplicate detection** across customer records
- **License scanning with OCR** integration
- Customer alerts and blacklisting

**Marketable as**: "360-degree customer profiles with rental history, payment tracking, document management, OCR license scanning, duplicate detection, and configurable alert system."

### 2.2 Customer Dashboard (`/customerdashboard`)
**What it does**: Public-facing customer self-service portal.
- Customer lookup by identifier
- Contract summaries
- Rental status tracking
- Customer statistics display

**Marketable as**: "Customer self-service portal for viewing rental status, contracts, and account information."

---

## 3. FLEET & VEHICLE MANAGEMENT

### 3.1 Vehicles (`/vehicles`)
**What it does**: Complete vehicle catalog and lifecycle management.
- Vehicle CRUD with full catalog
- Vehicle profile with tabbed interface (General, Service, Finance)
- **ACRISS code** handling (industry-standard vehicle classification)
- Vehicle classes and categories
- Service history tracking
- Financial data (cost, depreciation)
- Fleet status overview dashboard
- Vehicle availability checking
- Equipment assignment per vehicle
- Fuel type tracking
- Vehicle search with advanced filters

**Marketable as**: "Comprehensive fleet catalog with ACRISS classification, service tracking, financial data, equipment assignment, and real-time availability."

### 3.2 Fleet Operations (`/fleet`)
**What it does**: Fleet-level operational monitoring.
- Fleet status monitoring
- Vehicle assignment management
- Status code service integration

**Marketable as**: "Fleet operations dashboard for real-time status monitoring and vehicle assignment."

### 3.3 Vehicle Inventory (`/vehicleinventory`)
**What it does**: Vehicle location and transport management.
- Vehicle location tracking (which location holds which vehicle)
- Transport confirmation workflows
- Inventory flow coordination
- Vehicle search within inventory

**Marketable as**: "Vehicle inventory management with location tracking and inter-branch transport coordination."

**NOT marketable as**: "GPS tracking" — this tracks which business location a vehicle is at, not real-time GPS coordinates.

---

## 4. PAYMENT & BILLING

### 4.1 Payments (`/payments`)
**What it does**: Multi-gateway payment processing.
- **Payment gateways**: Adyen, Worldpay, TriPOS, CenPOS, Hosted Payments
- Payment method selection interface
- Real-time payment status tracking
- Error handling and recovery flows
- Amount calculation and display
- Payment progress indicators
- Dedicated hooks per gateway (useAdyenPayment, useWorldpayPayment)

**Marketable as**: "Flexible payment processing with support for Adyen, Worldpay, TriPOS, CenPOS, and hosted payment solutions. Real-time status tracking and error recovery."

**Confirmed integrations to list**: Adyen, Worldpay, TriPOS, CenPOS. Do NOT list Stripe, PayPal, Square, or Authorize.net — these are not in the codebase.

---

## 5. CLAIMS MANAGEMENT

### 5.1 Claims (`/claims`)
**What it does**: Full insurance/damage claims lifecycle.
- Claims list with filtering and search
- Claim creation form
- Claim detail view with **9 tabs**:
  - Overview, Contacts, Vehicles, Financial, Repair Orders, Documents, History, Expenses, Payments
- **Multi-vehicle** tracking per claim
- **Multi-contact** management per claim
- Expense tracking with mark-as-paid workflow
- Payment tracking with received/void workflow
- Repair order creation and status updates
- Document management with upload and checklist
- Financial summary per claim
- Full audit trail (claim history)
- Claim number tracking

**Marketable as**: "End-to-end claims management with multi-vehicle tracking, expense reconciliation, repair order integration, document management, and complete financial audit trail."

---

## 6. INSURANCE

### 6.1 Insurance Configuration (`/insurance`)
**What it does**: Insurance product setup and management.
- Insurance product configuration
- Coverage type management
- Add-on options

**Marketable as**: "Configurable insurance products with coverage types and add-on options."

---

## 7. CONFIGURATION & SETTINGS

### 7.1 System Configuration (`/configuration-settings`)
**What it does**: Comprehensive system administration hub with 20+ configuration areas.

**User Management**: Users, groups, roles, permissions
**Location Management**: Multi-location setup with:
- Positions and counters per location
- Notification rules per location
- Fuel types and pricing per location
- Vehicle categories and classes per location
- Source of business and referral tracking per location
- Location-specific financial settings

**Vehicle Configuration**:
- Vehicle product settings
- Vehicle catalog management
- Equipment types and statuses
- Fuel type definitions

**Operations Configuration**:
- Status codes and check-in settings
- Drivers management
- Transaction number sequences
- Maintenance alerts and procedures
- Repair order setup
- Claims setup

**System Configuration**:
- Terminal settings (per-workstation setup)
- Credit card control settings
- Integrations management
- Security settings
- Notification rules
- Branding/white-label settings
- Database management
- Reports configuration

**Marketable as**: "Enterprise-grade configuration with multi-location support, role-based access control, per-location settings, terminal management, and 20+ configurable areas."

### 7.2 Marketing & Revenue Settings (`/marketing-settings`)
**What it does**: Revenue optimization configuration.
- **Miscellaneous charges**: Ancillary products and add-on charges
- **Time & mileage rates**: Rate table configuration
- **Rate rules**: Business logic for rate application
- **Rate seasons**: Seasonal pricing periods
- **Fuel pricing**: Location-specific fuel rates
- **Airlines**: Airline partnership management
- **Rental reasons**: Reason code tracking

**Marketable as**: "Flexible pricing engine with time/mileage rates, seasonal pricing, rate rules, ancillary charges, and airline partnership management."

**NOT marketable as**: "AI-driven dynamic pricing" or "demand-based pricing" — the system uses manual rate rules and seasons, not ML algorithms.

---

## 8. ANALYTICS & REPORTING

### 8.1 Dashboard (`/dashboard`)
**What it does**: Operational analytics and KPI tracking.
- **15+ analytics metrics** via dedicated query keys:
  - Fleet status
  - Operational load (overall + detailed breakdown)
  - Class availability
  - Agreements status
  - Conversion rate
  - Equipment usage
  - Maintenance alerts
  - No-show rate
  - Revenue trends
  - Top add-ons
  - Revenue by class
  - Top revenue vehicles
  - Revenue pipeline

**Marketable as**: "Real-time operational dashboard with fleet status, revenue analytics, utilization metrics, conversion tracking, and maintenance alerts."

**NOT marketable as**: "Predictive analytics" or "demand forecasting" — the dashboard shows current/historical data, not ML predictions.

---

## 9. DOCUMENT MANAGEMENT

### 9.1 Documents (`/documents`)
**What it does**: File storage and management.
- Document upload and storage
- Document retrieval
- Metadata tracking

### 9.2 PDF/Form Builder (`/pdf-builder`)
**What it does**: Visual form and document template engine.
- **Drag-and-drop canvas** designer
- **Field types**: Static text, data fields, boxes, RTF content, signatures, images
- **Conditional logic engine** with operators
- **Visibility rules** per field
- Custom field creation
- Transaction allocation
- Print configuration (multiple document sizes, margins)
- Field categories and organization
- Form template management (create, edit, duplicate)
- Data source binding
- **20+ UI components** for the builder

**Marketable as**: "Visual form builder with drag-and-drop design, conditional logic, e-signature fields, and custom document templates."

---

## 10. SPECIALIZED FEATURES

### 10.1 Reservation Planner (`/res-planner`)
**What it does**: Reservation conflict resolution tool.
- Conflict booking identification
- Resolution assistance
- Booking adjustment tools

**Marketable as**: "Smart reservation planner with conflict detection and resolution tools."

### 10.2 OCR & VIN Scanning (`/ocr`)
**What it does**: Optical character recognition for vehicle identification.
- Text recognition from images
- VIN code detection and extraction
- Image masking and preprocessing
- Validation indicators
- Model preloading for performance
- Manual VIN validation fallback

**Marketable as**: "Built-in VIN scanning with OCR technology for fast, accurate vehicle identification."

### 10.3 Loyalty Programs (`/loyalty`)
**What it does**: Customer loyalty and rewards.
- Loyalty program page
- Loyalty settings configuration
- Point tracking and tier management

**Marketable as**: "Customer loyalty program with configurable tiers, points, and rewards."

### 10.4 Lost and Found (`/lost-and-found`)
**What it does**: Track items left in rental vehicles.
- Lost item data table
- Customer association
- Status tracking

**Marketable as**: "Lost and found management for tracking and returning items left in vehicles."

### 10.5 Counter Operations (`/counter`)
**What it does**: Unified counter/desk workspace.
- Counter center page
- Sidebar navigation between counter operations
- Modular layout for multiple operational tasks
- Landing page for counter staff

**Marketable as**: "Unified counter workspace for front-desk staff to manage all rental operations from one screen."

### 10.6 Guides & Onboarding (`/guides`, `/onboarding`)
**What it does**: Interactive in-app training system.
- Guide creation and management (admin)
- Step-by-step interactive instructions
- Target element highlighting (points to specific UI elements)
- Permission-based access (super admin, admin)
- Route-based guides (different guides for different pages)
- Tour provider for guided onboarding

**Marketable as**: "Built-in interactive training system with step-by-step guides and in-app onboarding tours."

---

## 11. INFRASTRUCTURE & CROSS-CUTTING

### Authentication & Security
- JWT access tokens (memory + localStorage) with automatic refresh
- HttpOnly refresh token cookies
- Request queuing during token refresh
- Role-based access control
- User impersonation (super admin)
- Cross-tab logout synchronization
- Session expiry handling

### Shared UI Components (40+)
- Full shadcn/ui library
- Barcode scanner
- License scanner (driver's license)
- Scannable input fields
- Fuel level slider
- Company selector
- Contract cards
- Driver's license scanner with consistency display
- Session expiry dialog
- Password requirements display

### API Architecture
- Centralized typed API client (GET, POST, PUT, PATCH, DELETE)
- Consistent error handling with ApiError class
- TanStack Query integration for caching
- 35+ auto-generated API clients for backend endpoints
- FormData and JSON payload support

---

## SUMMARY: What to Market

| Category | Module Count | Key Selling Points |
|----------|-------------|-------------------|
| Core Rental Ops | 6 | Full lifecycle: reserve → check-in → inspect → check-out → contract |
| Customer Mgmt | 2 | 360° profiles, OCR scanning, self-service portal |
| Fleet & Vehicles | 3 | ACRISS coding, availability, inventory tracking |
| Payments | 1 | 4 payment gateways, real-time status |
| Claims | 1 | Full lifecycle with 9 detail tabs |
| Insurance | 1 | Configurable products and coverage |
| Config & Settings | 2 | 20+ config areas, multi-location |
| Analytics | 1 | 15+ KPI metrics, real-time dashboard |
| Documents | 2 | Visual form builder, conditional logic |
| Specialized | 6 | OCR, loyalty, lost & found, counter ops, guides |
| **Total** | **26** | |
