import WaitlistForm from '@/components/WaitlistForm';
import DashboardMockup from '@/components/DashboardMockup';
import AnimateIn from '@/components/AnimateIn';
import PricingCTA from '@/components/PricingCTA';
import TrackScrollDepth from '@/components/TrackScrollDepth';
import FAQSection from '@/components/FAQSection';
import BenefitsSection from '@/components/BenefitsSection';
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

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For creators getting started.',
    popular: false,
    cta: 'Join the waitlist',
    features: [
      'Up to 3 platforms',
      '60-day history',
      'CSV import',
      'Basic dashboard',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    desc: 'Launch offer: $4.99/mo forever for the first 500.',
    popular: true,
    cta: 'Claim my lifetime spot',
    features: [
      'Unlimited platforms',
      'Full history',
      'Tax-ready reports',
      'Invoice tracker',
      'Expense tracking with categories',
      'Email support',
    ],
  },
  {
    name: 'Business',
    price: '$19.99',
    period: '/mo',
    desc: 'For full-time creator businesses.',
    popular: false,
    cta: 'Claim my lifetime spot',
    features: [
      'Everything in Pro',
      '3 team seats',
      'API access',
      'Custom categories',
      'White-label reports',
      'Priority support',
    ],
  },
];

const ANNOTATIONS = [
  {
    color: '#FFFFFF',
    glow: 'rgba(255,255,255,0.4)',
    label: 'Total Revenue',
    desc: 'Every platform combined into one number at the top. No tab-switching required.',
  },
  {
    color: '#34D399',
    glow: 'rgba(52,211,153,0.6)',
    label: '6-Month Trend',
    desc: 'See your income trajectory at a glance. Know instantly whether you are growing.',
  },
  {
    color: '#FF5252',
    glow: 'rgba(255,82,82,0.6)',
    label: 'Platform Breakdown',
    desc: 'YouTube, Twitch, Patreon, sponsors, and merch, each with exact dollar amounts.',
  },
  {
    color: '#F87171',
    glow: 'rgba(248,113,113,0.6)',
    label: 'Expenses and Net Profit',
    desc: 'See what you spend and what you actually keep, updated in real time.',
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
        Lock in $4.99 forever
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

          {/* Launch offer badge — above headline, impossible to miss */}
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#34D399] bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              First 500 signups: lifetime Pro at $4.99/mo forever
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
              YouTube, Twitch, Patreon, sponsors, and merch. One unified view, tax-ready when you are.
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
              First 500 signups get lifetime Pro at $4.99/month. After that, standard pricing applies.
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
      <div className="max-w-3xl mx-auto">
        <AnimateIn className="text-center">
          <p className="text-[rgba(255,255,255,0.3)] text-sm uppercase tracking-widest font-semibold mb-5">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 gradient-text">
            Tax season shouldn&apos;t be a nightmare.
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-xl md:text-2xl leading-relaxed">
            Income from YouTube, Twitch, Patreon, and sponsors lands in five different places.
            Sponsorship invoices disappear into your inbox.
            Come April, you&apos;re chasing CSVs for six hours while your accountant waits.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Product in Action ────────────────────────────────────────────────────────

function ProductInAction() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(52,211,153,0.02)] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-[#34D399] text-sm uppercase tracking-widest font-semibold mb-3">
            The dashboard
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            One view. Everything that matters.
          </h2>
          <p className="text-[rgba(255,255,255,0.45)] text-lg mt-4 max-w-xl mx-auto">
            Here&apos;s what you see the moment you log in.
          </p>
        </AnimateIn>

        {/* Flat dashboard mockup */}
        <AnimateIn delay={80}>
          <div className="max-w-xl mx-auto mb-12">
            <DashboardMockup flat />
          </div>
        </AnimateIn>

        {/* Annotation callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {ANNOTATIONS.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 70}>
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: item.color, boxShadow: `0 0 8px ${item.glow}` }}
                  />
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                </div>
                <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
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

        {/* Launch offer banner */}
        <AnimateIn delay={80}>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2.5 bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)] px-5 py-3 rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse flex-shrink-0" />
              <p className="text-[#34D399] text-sm font-semibold">
                Waitlist members lock in Pro at{' '}
                <span className="text-white">$4.99/mo forever.</span>
                {' '}First 500 only.
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
                Join the waitlist. First 500 signups lock in lifetime Pro at $4.99/month.
                After that, standard pricing applies.
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
              href="https://x.com/TallyBoardhq"
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
            Built by <code>Jack Perice.</code>
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
      <ProductInAction />
      <div className="divider mx-6 md:mx-10" />
      <BenefitsSection />
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
