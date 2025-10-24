import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Orbitron, Funnel_Display, Space_Grotesk, DM_Sans } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'AImax - Healthcare AI Assistant',
  description: 'Helping with the first and the last mile of the patient! AImax provides intelligent support across the patient care journey for patients, medical personnel, and doctors.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

// AImax Typography System
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const funnelSans = Funnel_Display({ 
  subsets: ['latin'],
  variable: '--font-funnel-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${orbitron.variable} ${funnelSans.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="min-h-[100dvh] bg-gray-50 flex flex-col">
        <SiteHeader />
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            }
          }}
        >
          <main className="flex-1">{children}</main>
        </SWRConfig>
        <SiteFooter />
      </body>
    </html>
  );
}
