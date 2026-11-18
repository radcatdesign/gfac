import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';
import { Motion } from '@/components/Motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { StickyCta } from '@/components/StickyCta';

export const metadata: Metadata = {
  title: { default: 'Get Fit Athletic Club | Indianapolis Gym, $1 Enrollment', template: '%s | Get Fit Athletic Club' },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: 'website', locale: 'en_US' },
};

export const viewport: Viewport = { themeColor: '#050b12', colorScheme: 'dark' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: site.name,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7140 E Washington St.',
    addressLocality: 'Indianapolis',
    addressRegion: 'IN',
    postalCode: '46219',
    addressCountry: 'US',
  },
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Marks JS as running before first paint so scroll reveals never flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://i0.wp.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#amenities" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-green focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Motion />
        <Navbar />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
