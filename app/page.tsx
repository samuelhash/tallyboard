import WaitlistForm from '@/components/WaitlistForm';
import DashboardMockup from '@/components/DashboardMockup';
import AnimateIn from '@/components/AnimateIn';
import PricingCTA from '@/components/PricingCTA';
import TrackScrollDepth from '@/components/TrackScrollDepth';
import FAQSection from '@/components/FAQSection';
import { createServerSupabase } from '@/lib/supabase-server';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

// ─── Waitlist count (server-side) ─────────────────────────────────────────────

async function getWaitlistCount(): Promise<number> {
  const client = createServerSupabase();
  const { count, error } = await client
    .from('waitlist')
    .select('*', { count: 'exact', head: true });
  console.log('[waitlist] count:', count, '| error:', error);
  if (error) return 0;
  return count ?? 0;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconScatter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/>
      <circle cx="12" cy="18" r="2"/><circle cx="5" cy="18" r="2"/>
      <circle cx="19" cy="18" r="2"/><circle cx="12" cy="6" r="2"/>
      <line x1="7" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="17" y2="6"/>
      <line x1="5" y1="8" x2="5" y2="16"/><line x1="19" y1="8" x2="19" y2="16"/>
      <line x1="7" y1="18" x2="10" y2="18"/>
    </svg>
  );
}

function IconTax() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="8" y1="7" x2="16" y2="7"/>
      <line x1="8" y1="11" x2="16" y2="11"/>
      <line x1="8" y1="15" x2="12" y2="15"/>
      <path d="M14 16l1.5 1.5L18 14"/>
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="9" height="9" rx="1.5"/>
      <rect x="13" y="2" width="9" height="9" rx="1.5"/>
      <rect x="2" y="13" width="9" height="9" rx="1.5"/>
      <rect x="13" y="13" width="9" height="9" rx="1.5"/>
    </svg>
  );
}

function IconUpload() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="13" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function IconInvoice() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}

function IconExpense() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  );
}

function IconConnect() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconExport() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#34D399"/>
      <rect x="7" y="14" width="3.5" height="8" rx="1" fill="#0A0A0A"/>
      <rect x="12.25" y="10" width="3.5" height="12" rx="1" fill="#0A0A0A"/>
      <rect x="17.5" y="6" width="3.5" height="16" rx="1" fill="#0A0A0A"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const painCards = [
  {
    icon: <IconScatter />,
    title: 'Your income lives on 8 different dashboards',
    desc: "You're context-switching between platforms just to answer the most basic question: how much did I make this month?",
  },
  {
    icon: <IconTax />,
    title: 'Tax season means 6 hours of CSV downloads',
    desc: 'Chasing down income numbers from eight platforms while your accountant waits is a special kind of chaos.',
  },
  {
    icon: <IconBarChart />,
    title: 'You have no idea which platform actually pays',
    desc: "Views and likes are vanity metrics. Without consolidated revenue data, you can't make smart decisions about what to create.",
  },
  {
    icon: <IconMail />,
    title: 'Sponsorship invoices? Lost in your inbox.',
    desc: "Deals get missed, payments get delayed, and you have no single source of truth for what you're owed.",
  },
];

const features = [
  {
    icon: <IconDashboard />,
    title: 'Unified Dashboard',
    desc: 'All revenue streams in one clean view.',
    comingSoon: false,
  },
  {
    icon: <IconUpload />,
    title: 'CSV Import',
    desc: 'Drop in exports from YouTube, PayPal, Stripe.',
    comingSoon: false,
  },
  {
    icon: <IconExpense />,
    title: 'Expense Tracking',
    desc: 'Log equipment, software, travel by category.',
    comingSoon: false,
  },
  {
    icon: <IconInvoice />,
    title: 'Invoice Tracker',
    desc: 'Never lose a sponsorship payment again.',
    comingSoon: false,
  },
  {
    icon: <IconReport />,
    title: 'Tax-Ready Reports',
    desc: 'Clean summaries your accountant will love.',
    comingSoon: true,
  },
  {
    icon: <IconBarChart />,
    title: 'Platform Breakdown',
    desc: 'See exactly which platforms pay the most.',
    comingSoon: false,
  },
];

const steps = [
  {
    icon: <IconConnect />,
    number: '01',
    title: 'Connect your platforms',
    desc: 'Link YouTube, TikTok, Twitch, Patreon, and more — or upload a CSV to get started instantly.',
  },
  {
    icon: <IconEye />,
    number: '02',
    title: 'See everything in one place',
    desc: 'All your revenue, platform breakdown, and income trends on a single dashboard.',
  },
  {
    icon: <IconExport />,
    number: '03',
    title: 'Export tax-ready reports',
    desc: 'Generate a clean, categorized income report in seconds and hand it to your accountant.',
  },
];

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For creators just getting started.',
    popular: false,
    cta: 'Get Started',
    features: [
      'Up to 3 platforms',
      '30-day revenue history',
      'Manual income entry',
      'Basic CSV export',
      'Basic dashboard view',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    desc: 'For serious creators who know their numbers.',
    popular: true,
    cta: 'Claim your lifetime spot',
    features: [
      'Unlimited platforms',
      'Full revenue history',
      'CSV import from any platform',
      'Expense tracking by category',
      'Invoice tracker',
      'Tax-ready PDF reports (coming soon)',
    ],
  },
  {
    name: 'Business',
    price: '$19.99',
    period: 'per month',
    desc: 'For creators running a real business.',
    popular: false,
    cta: 'Claim your lifetime spot',
    features: [
      'Everything in Pro',
      'Team access (3 seats)',
      'Custom expense categories',
      'API access',
      'Dedicated onboarding',
      'White-label reports',
    ],
  },
];

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,10,0.85)] backdrop-blur-xl">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <LogoMark />
        <span className="text-white font-semibold text-base tracking-tight">TallyBoard</span>
      </a>
      <a href="#waitlist" className="btn-accent px-4 py-2 text-sm rounded-lg">
        Join Waitlist
      </a>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

interface HeroProps {
  waitlistCount: number;
  spotsCount: number;
  allClaimed: boolean;
}

function Hero({ waitlistCount, spotsCount, allClaimed }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[rgba(52,211,153,0.03)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#34D399] bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              Now accepting waitlist
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Every dollar you earn.{' '}
              <span className="accent-gradient-text">One dashboard.</span>
            </h1>
          </div>

          {/* Subline */}
          <div className="animate-fade-up" style={{ animationDelay: '160ms' }}>
            <p className="text-[rgba(255,255,255,0.55)] text-lg md:text-xl leading-relaxed max-w-xl">
              Stop downloading CSVs from 8 platforms at tax time.
            </p>
          </div>

          {/* Scarcity counter */}
          <div className="animate-fade-up" style={{ animationDelay: '210ms' }}>
            {allClaimed ? (
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-2.5 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] flex-shrink-0" />
                All 500 lifetime spots claimed. Join the standard waitlist.
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.7)] bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.18)] px-4 py-2.5 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] flex-shrink-0" />
                <span>
                  <span className="text-white font-bold font-num">{spotsCount}</span>
                  {' '}of 500 lifetime Pro spots claimed at{' '}
                  <span className="text-[#34D399] font-semibold">$4.99/mo forever</span>
                  .
                </span>
              </div>
            )}
          </div>

          {/* Form */}
          <div id="waitlist" className="animate-fade-up" style={{ animationDelay: '240ms' }}>
            <WaitlistForm size="large" placeholder="your@email.com" />
            <p className="text-[rgba(255,255,255,0.35)] text-xs mt-3">
              Join{' '}
              <span className="text-[rgba(255,255,255,0.7)] font-semibold font-num">
                {waitlistCount > 0 ? waitlistCount.toLocaleString() : 'hundreds of'}
              </span>{' '}
              creators on the waitlist
            </p>
          </div>
        </div>

        {/* Right — Dashboard Mockup */}
        <div className="animate-fade-up lg:animate-none" style={{ animationDelay: '200ms' }}>
          <DashboardMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}

// ─── Pain Section ─────────────────────────────────────────────────────────────

function PainSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-[rgba(255,255,255,0.3)] text-sm uppercase tracking-widest font-semibold mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
            The content creator money problem.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {painCards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 80}>
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5 cursor-default group">
                <div className="w-11 h-11 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.5)] group-hover:text-[#34D399] group-hover:border-[rgba(52,211,153,0.3)] group-hover:bg-[rgba(52,211,153,0.08)] transition-all duration-200">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <p className="text-[rgba(255,255,255,0.3)] text-sm uppercase tracking-widest font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Up and running in minutes.
          </h2>
        </AnimateIn>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-[rgba(52,211,153,0.3)] via-[rgba(52,211,153,0.5)] to-[rgba(52,211,153,0.3)]" />

          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center gap-5">
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#111] border border-[rgba(52,211,153,0.25)] flex flex-col items-center justify-center gap-1 shadow-lg">
                  <span className="text-[#34D399] text-xs font-bold font-num tracking-widest opacity-60">
                    {step.number}
                  </span>
                  <span className="text-[#34D399]">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(52,211,153,0.025)] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for the way you work.
          </h2>
          <p className="text-[rgba(255,255,255,0.45)] text-lg mt-4 max-w-xl mx-auto">
            Everything you need to understand your income. Nothing you don&apos;t.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 70}>
              <div className="glass-card rounded-2xl p-7 flex gap-5 items-start group cursor-default h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.15)] flex items-center justify-center text-[#34D399] group-hover:bg-[rgba(52,211,153,0.14)] group-hover:border-[rgba(52,211,153,0.25)] transition-all duration-200">
                  {f.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-white font-semibold text-base">{f.title}</h3>
                    {f.comingSoon && (
                      <span className="text-[10px] font-semibold text-[#34D399] bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mid-page CTA ─────────────────────────────────────────────────────────────

function MidPageCTA({ waitlistCount }: { waitlistCount: number }) {
  return (
    <section className="py-16 px-6 md:px-10">
      <TrackScrollDepth section="mid_cta" />
      <AnimateIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[rgba(255,255,255,0.4)] text-sm mb-6">
            Join{' '}
            <span className="text-white font-semibold font-num">
              {waitlistCount > 0 ? waitlistCount.toLocaleString() : 'hundreds of'}
            </span>{' '}
            creators already on the waitlist
          </p>
          <div className="flex justify-center">
            <WaitlistForm size="large" placeholder="your@email.com" />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

// ─── Built By Creator ─────────────────────────────────────────────────────────

function BuiltByCreator() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-[rgba(255,255,255,0.3)] text-sm uppercase tracking-widest font-semibold mb-3">
            Why we built this
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built by a creator, for creators.
          </h2>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Subtle accent line on left */}
            <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-[#34D399] to-transparent opacity-40" />

            <div className="pl-6 md:pl-8">
              <p className="text-[rgba(255,255,255,0.65)] text-base md:text-lg leading-relaxed mb-4">
                I&apos;ve been creating content for years and every tax season felt like a second job. Downloading CSVs from eight platforms, reconciling spreadsheets, and still not knowing which platform actually paid the most.
              </p>
              <p className="text-[rgba(255,255,255,0.65)] text-base md:text-lg leading-relaxed mb-4">
                I looked for a tool that understood the creator income stack. Nothing existed. So I built TallyBoard.
              </p>
              <p className="text-[rgba(255,255,255,0.65)] text-base md:text-lg leading-relaxed mb-4">
                No accounting background required. No chart of accounts. No jargon. Just a clean view of your money across every platform you work with.
              </p>
              <p className="text-[rgba(255,255,255,0.65)] text-base md:text-lg leading-relaxed mb-8">
                This is the tool I wish existed when I started.
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(52,211,153,0.12)',
                    border: '1px solid rgba(52,211,153,0.25)',
                  }}
                >
                  <span className="text-[#34D399] text-xs font-bold">J</span>
                </div>
                <p className="text-[rgba(255,255,255,0.5)] text-sm font-medium">
                  Jack Perice, Founder, TallyBoard
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────

function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(52,211,153,0.02)] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-10">
          <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-[rgba(255,255,255,0.45)] text-lg mt-4 max-w-lg mx-auto">
            Start free. Upgrade when your income grows.
          </p>
        </AnimateIn>

        {/* Waitlist banner */}
        <AnimateIn delay={80}>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2.5 bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)] px-5 py-3 rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse flex-shrink-0" />
              <p className="text-[#34D399] text-sm font-semibold">
                Waitlist members lock in Pro at{' '}
                <span className="text-white">$4.99/mo forever.</span>
              </p>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-7 flex flex-col gap-6 h-full ${
                  tier.popular ? 'bg-[#111] ring-accent' : 'glass-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#34D399] text-[#0A0A0A] text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <p className="text-[rgba(255,255,255,0.5)] text-sm font-medium mb-3">{tier.name}</p>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-white text-4xl font-bold tracking-tight font-num">
                      {tier.price}
                    </span>
                    <span className="text-[rgba(255,255,255,0.35)] text-sm mb-1.5">{tier.period}</span>
                  </div>
                  <p className="text-[rgba(255,255,255,0.4)] text-sm">{tier.desc}</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 mt-0.5 text-[#34D399]">
                        <IconCheck />
                      </span>
                      <span className="text-[rgba(255,255,255,0.6)] text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <PricingCTA
                  tier={tier.name}
                  price={tier.price}
                  label={tier.cta}
                  popular={tier.popular}
                />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA({ waitlistCount }: { waitlistCount: number }) {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <TrackScrollDepth section="final_cta" />
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-3xl border border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.04)] p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(52,211,153,0.1),transparent)] pointer-events-none" />

            <div className="relative">
              <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-5">
                Get early access
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Stop guessing.{' '}
                <span className="accent-gradient-text">Start tallying.</span>
              </h2>
              <p className="text-[rgba(255,255,255,0.5)] text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Join the waitlist and be first to know when TallyBoard launches.
                Waitlist members lock in Pro at $4.99/mo forever.
              </p>

              <div className="flex justify-center">
                <WaitlistForm size="large" placeholder="your@email.com" />
              </div>

              <p className="text-[rgba(255,255,255,0.3)] text-xs mt-4">
                Join{' '}
                <span className="text-[rgba(255,255,255,0.55)] font-semibold font-num">
                  {waitlistCount > 0 ? waitlistCount.toLocaleString() : 'hundreds of'}
                </span>{' '}
                creators on the waitlist. No spam. No credit card.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <LogoMark />
            <span className="text-white font-semibold text-sm tracking-tight">TallyBoard</span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap">
            <a
              href="https://twitter.com/tallyboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(255,255,255,0.35)] text-sm hover:text-[rgba(255,255,255,0.7)] transition-colors duration-150"
            >
              Twitter / X
            </a>
            <a
              href="mailto:hello@tallyboard.io"
              className="text-[rgba(255,255,255,0.35)] text-sm hover:text-[rgba(255,255,255,0.7)] transition-colors duration-150"
            >
              hello@tallyboard.io
            </a>
            <a
              href="/privacy"
              className="text-[rgba(255,255,255,0.35)] text-sm hover:text-[rgba(255,255,255,0.7)] transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[rgba(255,255,255,0.35)] text-sm hover:text-[rgba(255,255,255,0.7)] transition-colors duration-150"
            >
              Terms of Service
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[rgba(255,255,255,0.2)] text-xs">
            © {new Date().getFullYear()} TallyBoard. All rights reserved.
          </p>
          <p className="text-[rgba(255,255,255,0.2)] text-xs">
            Built by Twin
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function Home() {
  const waitlistCount = await getWaitlistCount();
  const spotsCount = Math.min(waitlistCount, 500);
  const allClaimed = waitlistCount >= 500;

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Nav />
      <Hero waitlistCount={waitlistCount} spotsCount={spotsCount} allClaimed={allClaimed} />
      <div className="divider mx-6 md:mx-10" />
      <PainSection />
      <div className="divider mx-6 md:mx-10" />
      <HowItWorks />
      <div className="divider mx-6 md:mx-10" />
      <FeaturesSection />
      <MidPageCTA waitlistCount={waitlistCount} />
      <div className="divider mx-6 md:mx-10" />
      <BuiltByCreator />
      <div className="divider mx-6 md:mx-10" />
      <PricingSection />
      <div className="divider mx-6 md:mx-10" />
      <FAQSection />
      <FinalCTA waitlistCount={waitlistCount} />
      <Footer />
    </main>
  );
}
