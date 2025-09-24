# AImax Landing Page Project

## Project Overview

**Company:** AImax  
**Project Type:** Healthcare AI Landing Page  
**Tagline:** "Helping with the first and the last mile of the patient!"  
**Template Base:** [Next.js SaaS Starter](https://github.com/nextjs/saas-starter)  

## Project Objectives

Build a professional landing page for AImax, a healthcare AI company that provides intelligent support across the patient care journey. The landing page will showcase AImax's capabilities to three key audiences: patients, medical personnel, and doctors.

## Template Selection Rationale

We chose the [Next.js SaaS Starter template](https://github.com/nextjs/saas-starter) because:
- Modern tech stack (Next.js, TypeScript, shadcn/ui)
- Clean, professional design suitable for healthcare
- Existing landing page structure to build upon
- User management system that can support multiple user types
- Production-ready with proper SEO and performance optimization
- Active maintenance and community support (14.4k GitHub stars)

## Target Audiences

### 1. Patients
- General health questions and symptom assessment
- Severity and urgency calibration of symptoms
- Easy-to-use interface for health inquiries

### 2. Medical Personnel
- Administrative task assistance
- Streamlined workflow support
- Professional healthcare tools

### 3. Doctors
- Diagnostic support through comprehensive cross-checking
- Integration with medical guidelines and literature
- Clinical decision support tools

## Core Value Propositions

Based on the design specifications, AImax is positioned as:
- **Easy to access and even easier to use**
- **Empathetic and friendly**
- **Reliable**

Key messaging: AI assistant that ensures patient satisfaction throughout their care journey with the promise "I cannot deactivate until you are satisfied with your care."

## Landing Page Structure

### Section 1: Hero/Main Value Proposition
- AImax logo and branding
- Main tagline: "Helping with the first and the last mile of the patient!"
- Interactive/animated logo element with satisfaction guarantee message
- Clear call-to-action

### Section 2: Target Audiences & Use Cases
- Three-column layout showcasing:
  - Patient support capabilities
  - Medical personnel assistance
  - Doctor diagnostic support tools

### Section 3: Key Features & Benefits
- Highlight core value propositions:
  - Ease of access and use
  - Empathetic and friendly approach
  - Reliability and trust

### Section 4: Partners & Customers
- Showcase established partnerships:
  - KiZe Maulbronn
  - medi
  - time
  - Additional partners (expandable section)

### Navigation Structure
- Why AImax
- Products
- About us
- Contact

## Technical Specifications

### Base Template Features to Keep
- **Framework:** Next.js with TypeScript
- **UI Library:** shadcn/ui components
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Drizzle ORM (for future contact forms/user data)
- **Authentication:** JWT-based (for future user portal)
- **Deployment:** Vercel-ready configuration
- **SEO:** Built-in Next.js SEO optimization

### Features to Remove/Modify
- **Stripe Integration:** Complete removal of payment processing
- **Pricing Pages:** Remove subscription/pricing functionality
- **Dashboard Pages:** Simplify or remove complex dashboard features
- **Team Management:** Remove team collaboration features
- **Subscription Management:** Remove all subscription-related code
- **Activity Logging:** Simplify to basic contact form tracking only

### Features to Customize
- **Landing Page:** Complete redesign to match AImax branding
- **Authentication:** Simplify to basic contact form or newsletter signup
- **Navigation:** Update to match AImax structure (Why AImax, Products, About us, Contact)
- **Content Management:** Add sections for partners, testimonials, and healthcare-specific content

## Branding Requirements

### Visual Identity
- **Logo:** Medical cross variant with "AIMAX" text
- **Color Scheme:** Red accent borders, clean minimalist design
- **Typography:** Professional, healthcare-appropriate fonts
- **Imagery:** Healthcare and AI-focused visuals

### Content Tone
- Professional yet approachable
- Healthcare-compliant messaging
- Emphasis on trust, reliability, and patient care
- Empathetic and friendly communication style

## Development Phases

### Phase 1: Template Setup & Cleanup ✅ COMPLETED
1. ✅ Clone Next.js SaaS Starter template
2. ✅ Remove unnecessary features (Stripe, pricing, complex dashboards)
3. ✅ Set up basic project structure
4. ✅ Configure development environment

**Status:** Completed on September 23, 2025 - All deliverables achieved. Next.js SaaS Starter template successfully integrated, all Stripe/payment features removed, build and development environment working without errors, AImax metadata and basic branding implemented.

### Phase 2: Content Structure Implementation ✅ COMPLETED
1. ✅ Create four main landing page sections
2. ✅ Implement navigation structure
3. ✅ Add basic responsive layout
4. ✅ Set up content management structure

**Status:** Completed on September 23, 2025 - All four main sections implemented with AImax branding, navigation structure complete, responsive layout foundation established. Hero section with medical cross logo, Target Audiences (Patients/Medical Personnel/Doctors), Key Features (Easy/Empathetic/Reliable), and Partners sections all functional.

### Phase 3: Branding & Styling 🔄 ACTIVE
**Best Practice Implementation Order:**

1. **Foundation Layer (Design Tokens)** ✅ COMPLETED
   - ✅ Define comprehensive brand color palette and semantic colors (#193D44, #07377E, #F7F7F7, #000000)
   - ✅ Establish consistent spacing system (4px-96px scale)
   - ✅ Configure typography scale and font hierarchy (Orbitron + Funnel Sans)
   - ✅ Update Tailwind configuration with all design tokens

2. **Core Components Layer** ✅ COMPLETED
   - ✅ Create button component system (primary, secondary, link) with all states
   - ✅ Upload and integrate official AImax brand logotype
   - ✅ Define icon system and integrate with components
   - ✅ Build foundational UI components

3. **Layout & Visual Layer**
   - Design hero screen background and apply visual treatments
   - Define section backgrounds and implement visual hierarchy
   - Apply typography system and spacing consistently across all content
   - Implement responsive design patterns

4. **Animation & Interaction Layer**
   - Implement hero screen animations and micro-interactions
   - Add smooth transitions and hover effects throughout
   - Create loading states and feedback animations
   - Polish interactive elements

5. **Documentation & System Layer**
   - Prepare Design System documentation page foundation
   - Document component patterns and usage guidelines
   - Create design token documentation
   - Establish maintenance patterns

**Status:** Core Components Layer completed - Comprehensive button system (7 variants, all states), official AImax logotype integration, complete icon system with healthcare and UI icons, and foundational components built. Ready for Layout & Visual Layer implementation.

### Phase 4: Content Integration
1. Add all text content from design specifications
2. Implement partner/customer logos
3. Add interactive elements (animated logo quote)
4. Optimize for healthcare industry messaging

### Phase 5: Optimization & Deployment
1. SEO optimization for healthcare keywords
2. Performance optimization
3. Accessibility compliance (important for healthcare)
4. Production deployment setup

## Future Considerations

### Potential Expansions
- User portal for different user types (patients, medical personnel, doctors)
- Contact form with healthcare-specific fields
- Resource center or knowledge base
- Integration with healthcare APIs
- Compliance features (HIPAA, GDPR)

### Technical Debt Prevention
- Maintain clean separation between landing page and removed SaaS features
- Document all customizations for future development
- Keep template structure for easy updates
- Implement proper error handling and logging

## Success Metrics

- Professional healthcare industry appearance
- Clear value proposition communication
- Effective audience segmentation presentation
- Mobile-responsive design
- Fast loading times (<3 seconds)
- SEO-optimized for healthcare AI keywords
- Accessibility compliance

## Timeline Estimate

- **Phase 1:** 1-2 days ✅ **COMPLETED** (September 23, 2025)
- **Phase 2:** 2-3 days ✅ **COMPLETED** (September 23, 2025)
- **Phase 3:** 3-4 days 🔄 **ACTIVE**
- **Phase 4:** 2-3 days
- **Phase 5:** 1-2 days

**Total Estimated Duration:** 9-14 days
**Current Progress:** Phases 1-2 completed on schedule, ahead of timeline

---

*This document serves as the foundation for the AImax landing page development project and will be updated as requirements evolve.*
