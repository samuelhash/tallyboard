'use client';

import { useState } from 'react';

const BENEFITS = [
  {
    headline: 'See every revenue source in one number.',
    detail:
      'Import CSVs from YouTube, Patreon, Stripe, and PayPal. TallyBoard auto-detects the format and combines everything into a single total revenue view.',
  },
  {
    headline: 'Stop hunting for sponsorship invoices in Gmail.',
    detail:
      'Log sponsor deals, set expected payment dates, and track status in one place. No more searching your inbox when a brand payment is overdue.',
  },
  {
    headline: 'Know which platform actually pays the most.',
    detail:
      'Platform breakdown shows exactly how much YouTube, Twitch, Patreon, sponsors, and merch contribute each month. See what to lean into.',
  },
  {
    headline: 'Walk into tax season with clean data your CPA can use.',
    detail:
      'Export a categorized income and expense summary. Tax-ready, not tax filing. Hand it to your accountant and you\'re done.',
  },
  {
    headline: 'Track what you spend without a spreadsheet.',
    detail:
      'Log equipment, software, editing tools, and travel by category. See net profit update in real time as you add expenses.',
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.2s ease',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function BenefitsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-3">
            What you get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for the way creators earn.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {BENEFITS.map((benefit, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-white font-semibold text-base leading-snug">
                  {benefit.headline}
                </span>
                <span className="text-[rgba(255,255,255,0.4)]">
                  <ChevronIcon open={open === i} />
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '160px' : '0px', opacity: open === i ? 1 : 0 }}
              >
                <div className="px-6 pb-5">
                  <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
