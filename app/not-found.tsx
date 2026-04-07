import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | TallyBoard',
  description: 'This page does not exist.',
  robots: { index: false, follow: false },
};

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#34D399" />
      <rect x="7" y="14" width="4" height="9" rx="1.5" fill="#0A0A0A" />
      <rect x="12.25" y="10" width="4" height="13" rx="1.5" fill="#0A0A0A" />
      <rect x="17.5" y="6" width="4" height="16" rx="1.5" fill="#0A0A0A" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M5 12l7 7M5 12l7-7" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 overflow-hidden select-none">

      {/* Ambient glow — matches hero style */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(52,211,153,0.1), transparent)',
        }}
      />

      {/* Grid lines — subtle depth texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-lg gap-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <LogoMark />
          <span className="text-white font-semibold text-base tracking-tight">
            TallyBoard
          </span>
        </Link>

        {/* 404 number */}
        <div className="flex flex-col items-center gap-3">
          <span
            className="font-bold font-num leading-none"
            style={{
              fontSize: 'clamp(80px, 20vw, 140px)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </span>

          {/* Accent divider */}
          <div
            className="h-px w-16"
            style={{
              background:
                'linear-gradient(90deg, transparent, #34D399, transparent)',
            }}
          />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            This page isn&rsquo;t tracked.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Looks like you&rsquo;ve navigated somewhere outside the dashboard.
            The URL you followed doesn&rsquo;t exist.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link
            href="/"
            className="btn-accent flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            <ArrowLeft />
            Back to TallyBoard
          </Link>

          <Link
            href="/#waitlist"
            className="text-sm font-medium transition-colors duration-150 text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.75)]"
          >
            Join the waitlist →
          </Link>
        </div>

        {/* Error code chip */}
        <p
          className="text-[10px] font-mono tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.18)' }}
        >
          Error 404 &mdash; Not Found
        </p>
      </div>
    </main>
  );
}
