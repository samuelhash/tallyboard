'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'When does TallyBoard launch?',
    a: "We're targeting launch in 90 days. Waitlist members get first access.",
  },
  {
    q: 'Is this just QuickBooks for creators?',
    a: "No. QuickBooks is built for traditional small businesses. TallyBoard is built for creators — no accounting jargon, no chart of accounts, just the income and expenses you actually deal with.",
  },
  {
    q: 'What platforms will be supported at launch?',
    a: 'YouTube, Twitch, TikTok, Patreon, PayPal, Stripe, and manual entry for everything else. CSV import works with any platform.',
  },
  {
    q: 'Do you file my taxes for me?',
    a: 'No. TallyBoard organizes and exports your financial data in a format your accountant or tax software can actually use.',
  },
  {
    q: 'Is my financial data safe?',
    a: 'Yes. All data is encrypted, stored on secure infrastructure, and never sold or shared. You can delete your account and data anytime.',
  },
  {
    q: "What if I'm just starting out?",
    a: 'The Free tier is forever free. Track up to 2 platforms and get a basic dashboard at no cost.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no cancellation fees. Cancel from your account settings in one click.',
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

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Questions? Answered.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm leading-snug">
                  {faq.q}
                </span>
                <span className="text-[rgba(255,255,255,0.4)]">
                  <ChevronIcon open={open === i} />
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
