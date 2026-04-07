'use client';

import { analytics } from '@/lib/posthog';

interface PricingCTAProps {
  tier: string;
  price: string;
  label: string;
  popular: boolean;
}

/**
 * Client component so it can fire a PostHog event on click.
 * Renders identically to the original <a> — only the onClick is new.
 */
export default function PricingCTA({ tier, price, label, popular }: PricingCTAProps) {
  return (
    <a
      href="#waitlist"
      onClick={() => analytics.pricingCardClick(tier, price)}
      className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        popular
          ? 'btn-accent'
          : 'bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.15)]'
      }`}
    >
      {label}
    </a>
  );
}
