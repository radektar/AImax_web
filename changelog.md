# AImax Landing Page Changelog

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
