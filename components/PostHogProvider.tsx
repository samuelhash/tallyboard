'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// ─── Page-view tracker ────────────────────────────────────────────────────────
// Separated into its own component so `useSearchParams` is inside a Suspense
// boundary, which Next.js 14 App Router requires for static page generation.

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // posthog-js queues events before init and flushes after; this is safe
    // even if PostHog hasn't finished initializing yet.
    posthog.capture('$pageview', { $current_url: window.location.href });
  }, [pathname, searchParams]);

  return null;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) {
      // No key in this environment — analytics silently disabled.
      // Set NEXT_PUBLIC_POSTHOG_KEY in .env.local to enable.
      return;
    }

    posthog.init(key, {
      api_host: 'https://us.i.posthog.com',
      // Page views are fired manually in PageViewTracker so we get accurate
      // SPA-style tracking on every route change, not just initial load.
      capture_pageview: false,
      capture_pageleave: true,
      // We fire deliberate named events — no automatic click/input capture.
      autocapture: false,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      {/*
       * Suspense is required here: useSearchParams opts the page out of
       * static generation, so we isolate it to avoid that cost on the root.
       */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
