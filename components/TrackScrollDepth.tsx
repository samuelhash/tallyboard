'use client';

import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/posthog';

interface TrackScrollDepthProps {
  /** Passed as the `section` property on the `scroll_depth` PostHog event. */
  section: string;
}

/**
 * Zero-height sentinel element. Place it anywhere inside a section and it fires
 * a `scroll_depth` PostHog event exactly once when the element scrolls into view.
 *
 * Uses `threshold: 0.1` so the event fires as soon as the sentinel is even
 * slightly visible, avoiding false negatives on small viewports.
 */
export default function TrackScrollDepth({ section }: TrackScrollDepthProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Guard against double-firing (React StrictMode, fast scroll, etc.)
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          analytics.scrollDepth(section);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [section]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute w-full"
      style={{ height: 0 }}
    />
  );
}
