# AImax Landing Page Changelog

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
