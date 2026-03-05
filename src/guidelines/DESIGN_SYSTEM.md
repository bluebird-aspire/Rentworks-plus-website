# RentWorksPlus+ Design System

## Brand Colors

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Green | `#007A55` | Primary CTAs, links, highlights, interactive elements |
| Brand Green Hover | `#006644` | Hover/active state for green elements |
| Brand Green Light | `#00A575` | Accent green for lighter contexts |
| Brand Dark | `#081E32` | Main text, headings, dark UI elements |

### Neutral
| Token | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Backgrounds, text on dark |
| Light Gray BG | `#F4F5F7` | Card backgrounds, section backgrounds |
| Light Blue-Gray | `#E8EEF2` | Subtle card backgrounds |
| Medium Gray | `#E8EAF0` | Borders, dividers |
| Dark Navy | `#0a2438` | Testimonial sections |
| Darker Navy | `#0a2640` | Platform page backgrounds |

### Semantic (CSS Variables — defined in globals.css)
| Variable | Light | Dark |
|----------|-------|------|
| `--primary` | `#030213` | `oklch(0.985 0 0)` |
| `--destructive` | `#d4183d` | `oklch(0.396 0.141 25.723)` |
| `--border` | `rgba(0, 0, 0, 0.1)` | `oklch(0.269 0 0)` |
| `--muted` | `#ececf0` | `oklch(0.269 0 0)` |
| `--muted-foreground` | `#717182` | `oklch(0.708 0 0)` |
| `--accent` | `#e9ebef` | `oklch(0.269 0 0)` |

## Typography

### Font Stack
System default (Tailwind sans stack) — no custom font imports.

### Font Weights
- **Normal (400)**: Body text, paragraphs, inputs
- **Medium (500)**: Headings, buttons, labels

### Font Sizes (Component Usage)
| Element | Size | Example |
|---------|------|---------|
| Hero Title | `text-[48px]` / `lg:text-6xl` | "Modern Car Rental..." |
| Section Heading | `text-4xl` / `lg:text-5xl` | Section titles |
| Subsection Heading | `text-2xl` / `text-3xl` | Feature titles |
| Card Title | `text-2xl` | Card headers |
| Body Large | `text-xl` | Intro paragraphs |
| Body | `text-base` | Standard text |
| Small | `text-sm` | Labels, badges |

### Line Height
All typography uses `line-height: 1.5`.

## Spacing

### Section Padding
- Vertical: `py-20` to `py-24` (80–96px)
- Horizontal: `px-4` → `sm:px-6` → `lg:px-8`

### Component Internal Padding
- Small cards: `p-6` (24px)
- Medium cards: `p-8` (32px)
- Large cards: `p-10` / `p-12` (40–48px)

### Gap Scale
- Tight: `gap-1` to `gap-2`
- Standard: `gap-4`
- Medium: `gap-6` to `gap-8`
- Large: `gap-16`

### Container
- Max width: `max-w-7xl mx-auto`

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-full` | 9999px | Badges, pills, avatars |
| `rounded-3xl` | 1.5rem | Large dramatic cards |
| `rounded-2xl` | 1rem | Medium cards, feature blocks |
| `rounded-xl` | 0.75rem | Medium components |
| `rounded-lg` | `var(--radius)` = 0.625rem | Standard cards, buttons, inputs |

## Components

### Buttons
```
Primary:    bg-[#007A55] text-white px-8 py-4 rounded-lg hover:bg-[#006644]
Secondary:  border-2 border-[#007A55] text-[#007A55] px-8 py-4 rounded-lg hover:bg-[#007A55]/5
```

### Cards
```
Standard:   bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all
Light BG:   bg-[#F4F5F7] rounded-2xl p-10 hover:shadow-xl
Gradient:   bg-gradient-to-br from-[#007A55] to-[#006644] rounded-2xl text-white
```

### Badges/Pills
```
Neutral:    bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm
Brand:      bg-[#007A55] text-white px-3 py-1 rounded-full text-sm
Subtle:     bg-[#007A55]/10 text-[#007A55] px-3 py-1 rounded-full
```

### Icon Containers
- Small: `w-8 h-8 rounded-lg`
- Medium: `w-12 h-12 rounded-lg`
- Large: `w-14 h-14 rounded-xl`
- XL: `w-16 h-16 rounded-2xl`

### Shadows
- Default: `shadow-lg`
- Elevated: `shadow-xl`
- Hover: `hover:shadow-2xl`

## Animations

### Framer Motion Standard
```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### CSS Keyframes (Hero)
- `fade-in-left`: translateX(-50px) → 0
- `fade-in-right`: translateX(50px) → 0
- `slide-in-left`: translateX(-30px) → 0

### Hover Transitions
- `transition-colors` for color changes
- `transition-all` for multi-property
- `hover:scale-105` for interactive elements
- `hover:shadow-xl` for card elevation

## Layout Patterns

### Grids
- Two-column: `grid lg:grid-cols-2`
- Three-column: `grid grid-cols-1 lg:grid-cols-3`
- Gap: `gap-8` standard, `gap-16` for major sections

### Decorative Elements
- Gradient circles: `w-96 h-96 bg-gradient-to-br from-[#007A55]/10 rounded-full blur-3xl`
- Absolute positioned with overflow hidden on parent
