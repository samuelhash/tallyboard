import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PostHogProvider } from '@/components/PostHogProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tallyboard.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'TallyBoard — Creator Revenue Dashboard',
  description:
    'Track all your creator income in one place. YouTube, TikTok, Twitch, merch, sponsorships — unified dashboard with tax-ready reports.',
  keywords: [
    'content creator finance',
    'creator revenue dashboard',
    'YouTube income tracker',
    'TikTok earnings',
    'Twitch revenue',
    'creator tax prep',
    'sponsorship tracker',
    'merch income',
  ],
  authors: [{ name: 'TallyBoard' }],
  creator: 'TallyBoard',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TallyBoard',
    title: 'TallyBoard — Creator Revenue Dashboard',
    description:
      'Track all your creator income in one place. YouTube, TikTok, Twitch, merch, sponsorships — unified dashboard with tax-ready reports.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TallyBoard — Creator Revenue Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TallyBoard — Creator Revenue Dashboard',
    description:
      'Track all your creator income in one place. YouTube, TikTok, Twitch, merch, sponsorships — unified dashboard with tax-ready reports.',
    images: ['/og-image.png'],
    creator: '@tallyboard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-tb-bg text-white antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
