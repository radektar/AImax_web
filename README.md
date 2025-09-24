# AImax Landing Page

This is the official landing page for AImax, a healthcare AI company focused on helping with the first and the last mile of the patient journey.

**Company**: AImax  
**Tagline**: "Helping with the first and the last mile of the patient!"  
**Target Audiences**: Patients, Medical Personnel, Doctors

## Features

- Professional healthcare AI landing page
- Responsive design optimized for all devices
- Four main sections: Hero, Target Audiences, Key Features, Partners & Customers
- AImax brand identity with medical cross logo and professional color scheme
- Healthcare-appropriate messaging and design patterns
- Accessibility-compliant design for medical industry standards

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Typography**: Google Fonts (Orbitron + Funnel Sans)
- **Icons**: Custom AImax medical iconography
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/) (for future contact forms)

## Getting Started

```bash
git clone https://github.com/radektar/AImax_web.git
cd AImax_web
npm install
```

## Running Locally

Set up your environment variables in `.env.local`:

```bash
POSTGRES_URL="your_postgres_connection_string"
AUTH_SECRET="your_auth_secret_key"
BASE_URL="http://localhost:3000"
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the AImax landing page.

## Project Structure

The landing page includes four main sections:

1. **Hero Section**: AImax branding, value proposition, and call-to-action
2. **Target Audiences**: Patients, Medical Personnel, and Doctors
3. **Key Features**: Easy to use, Empathetic & friendly, Reliable
4. **Partners & Customers**: KiZe Maulbronn, medi, and time

## Design System

AImax uses a comprehensive design system with:

- **Typography**: Orbitron (display) and Funnel Sans (body text)
- **Colors**: Primary teal-green (#193D44), Secondary blue (#07377E)
- **Spacing**: Consistent 8px grid system
- **Components**: Healthcare-focused UI components

## Development Phases

This project follows a phased development approach as outlined in `PROJECT_SCOPE.md`:

- **Phase 1**: Template setup and cleanup ✅
- **Phase 2**: Content structure implementation ✅
- **Phase 3**: Design system and components ✅
- **Phase 4**: Advanced features and optimization (upcoming)

## Contributing

This is a private project for AImax. Please refer to the project scope document and maintain healthcare industry standards in all implementations.

## License

© 2025 AImax. All rights reserved.
