# AImax Landing Page Changelog

## [v0.5.0] - 2025-01-27

### Added - Component Architecture Refactor & Design System

- **Modular Component Structure**
  - New reusable Hero component with assistant image integration
  - ValueProposition component with tabbed interface for core values
  - AudienceCards component for three target audiences (Patients, Medical Personnel, Doctors)
  - ContactCta component for call-to-action sections
  - Supporting components: ValueCard, AudienceCard, FeatureCard, Badge
  - Dynamic wave canvas background component for enhanced visual effects

- **Design System Page**
  - Complete design system documentation page at `/design-system`
  - Comprehensive color palette documentation with swatches
  - Typography scale showcase
  - Spacing and radius system visualization
  - Component examples and usage guidelines
  - Responsive layout examples

- **UI Component Enhancements**
  - Enhanced button component with multiple variants (primary, secondary, outline, ghost, link, destructive)
  - Updated card components with improved styling
  - Improved badge component with solid and outline variants
  - Site header navigation improvements with better mobile support

- **Visual Assets**
  - Added AI assistant images (assistant_1.png, assistant_1_light.png, assistant_1_nobackgrond.png)
  - Added audience-specific images (pacjencui.png, lekarze.png, personel.png)
  - Improved hero section with AI assistant visualization

- **Test/Development Tools**
  - Test hero page with configurable background colors
  - Test hero component for design exploration
  - Enhanced development workflow with visual testing pages

### Updated

- **Landing Page Architecture**
  - Refactored main homepage (`app/(dashboard)/page.tsx`) to use modular components
  - Simplified page structure with component composition
  - Improved code maintainability and reusability
  - Enhanced separation of concerns

- **Styling System**
  - Updated global CSS with new design tokens
  - Improved color system with Next.js design system integration
  - Enhanced typography system with additional font families
  - Added new utility classes for improved design consistency
  - Integration with shadcn/ui design system

- **Site Header**
  - Improved navigation structure
  - Better responsive behavior
  - Enhanced accessibility features

### Technical

- **Dependencies**
  - Added `@radix-ui/react-slot` for button composition
  - Updated package dependencies
  - Added shadcn/ui component integration
  - Improved build stability

- **Code Quality**
  - Modularized component architecture for better maintainability
  - Improved TypeScript types and interfaces
  - Enhanced component prop interfaces for flexibility
  - Better separation of concerns between components and pages

- **Design System**
  - Comprehensive design system documentation
  - Visual design token library
  - Reusable component patterns
  - Improved consistency across the application

## [v0.4.2] - 2025-10-17

### Updated - Code Formatting & Documentation

- Careers page code formatting improved with proper file ending
- Tech Lead job descriptions (German and English) formatting standardized
- Minor code cleanup and consistency improvements

### Technical

- Enhanced code maintainability with consistent formatting standards
- Improved file structure consistency across documentation files

## [v0.4.1] - 2025-10-17

### Updated - Contact Form & Hero Screen Improvements

- Contact form layout redesigned to use more browser space with responsive grid layout
- Contact form enhanced with larger form elements, better spacing, and professional card design
- Contact form subtitle text width optimized to prevent awkward line breaks
- Hero screen height adjusted from full viewport to 70% for better scroll indication
- AImax signet.svg integrated into hero screen right column with white color styling
- Signet size increased to 320x320px for better visual impact
- Removed placeholder container styling for cleaner hero presentation

### Technical

- Responsive design improvements for better space utilization across screen sizes
- Enhanced visual hierarchy with proper form element sizing and spacing
- Improved user experience with clear scroll indication on large monitors

## [v0.4.0] - 2025-10-02

### Added - Phase 4.5 Site Pages Setup

- New top-level pages: Why AImax (`/why-aimax`), Products (`/products`), About us (`/about`), Contact (`/contact`)
- Legal pages placeholders: Privacy Policy (`/privacy`), Terms of Service (`/terms`)
- Global site header and footer integrated into root layout with active nav states
- Per-page SEO metadata for new pages
- About page sections implemented:
  - Founders: 1 row of cards + group photo placeholder
  - Advisory Board: 2 rows of cards
  - AImax in the Press: highlight cards with image/title/summary placeholders
- Products page structured list per wireframe: subbrand block left, description right
- Product subbrand theme tokens added to Tailwind config (`product-*` fg/bg) for easy rebranding

### Updated

- Root layout now includes global `SiteHeader` and `SiteFooter`
- `(dashboard)` layout simplified to avoid duplicate headers
- About page subtitle set to full container width
- `PROJECT_SCOPE.md` updated: Phase 4 paused; new Phase 4.5 active with tasks and timeline

### Technical

- Tailwind v4 theme variables extended with product subbrand tokens
- Navigation uses accessible `aria-current` and tokenized colors
- Lint check passed for modified files

## [v0.3.0] - 2025-09-24

### Added - Phase 3.1 Foundation Layer

- **Complete AImax Typography System**
  - Google Fonts integration: Orbitron (display) and Funnel Sans (body)
  - Typography scale from 12px to 128px with proper line heights
  - Font weight scale (100-900) and line height variations
- **Comprehensive Brand Color Palette**
  - Primary: #193D44 (teal-green) with full 50-900 HSL scale
  - Secondary: #07377E (blue) with full 50-900 HSL scale
  - Light: #F7F7F7, Dark: #000000, Neutral grays 50-900
- **Design System Foundation**
  - Consistent spacing system (4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px)
  - Complete Tailwind CSS v4 theme configuration with design tokens
  - CSS custom properties for maintainable design system

### Updated

- Landing page hero section with new Orbitron/Funnel Sans typography
- Navigation and buttons using AImax brand colors
- Enhanced visual hierarchy with proper font families
- Optimized font loading with display: 'swap'

### Technical

- Tailwind CSS v4 @theme syntax implementation
- CSS custom properties for design tokens
- Font optimization and performance improvements
- Design system ready for component development

## [v0.2.0] - 2025-09-23

### Added

- Complete AImax landing page structure with four main sections
- Hero section with AImax branding, medical cross logo, and animated elements
- Target Audiences section showcasing Patients, Medical Personnel, and Doctors
- Key Features section highlighting core values (Easy to use, Empathetic, Reliable)
- Partners & Customers section with KiZe Maulbronn, medi, and time
- AImax navigation structure (Why AImax, Products, About us, Contact)
- Responsive layout foundation with mobile-first design
- Healthcare-appropriate color scheme with red accent branding

### Updated

- Complete redesign from SaaS template to healthcare AI landing page
- Navigation header with AImax logo and medical cross icon
- Professional healthcare messaging and copy throughout
- Interactive elements with hover effects and transitions

### Technical Details

- Fully responsive grid layouts using Tailwind CSS
- Semantic HTML structure for accessibility
- Healthcare industry-compliant design patterns
- All content aligned with PROJECT_SCOPE.md requirements

## [v0.1.0] - 2025-09-23

### Added

- Initial project setup based on Next.js SaaS Starter template
- Set up basic project structure for AImax healthcare AI landing page
- Established development environment configuration
- Updated project metadata for AImax branding
- Simplified database schema for landing page use

### Removed

- Stripe payment integration and API routes
- Pricing pages and subscription management
- Complex dashboard features
- All payment-related database fields and functions

### Fixed

- Build compilation issues by removing all Stripe dependencies
- Updated login actions to remove checkout redirects
- Cleaned up database queries and seed files
- Replaced SaaS content with AImax healthcare messaging

### Technical Details

- Base framework: Next.js with TypeScript
- UI library: shadcn/ui components
- Styling: Tailwind CSS
- Database: PostgreSQL with Drizzle ORM (for future contact forms)
- Authentication: JWT-based (simplified for landing page)

---

*This changelog follows the project development phases outlined in PROJECT_SCOPE.md*
