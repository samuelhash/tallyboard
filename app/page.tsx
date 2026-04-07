import WaitlistForm from '@/components/WaitlistForm';
import DashboardMockup from '@/components/DashboardMockup';
import AnimateIn from '@/components/AnimateIn';
import PricingCTA from '@/components/PricingCTA';
import TrackScrollDepth from '@/components/TrackScrollDepth';

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

function IconPuzzle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 012 2v1h3a1 1 0 011 1v3h1a2 2 0 010 4h-1v3a1 1 0 01-1 1h-3v1a2 2 0 01-4 0v-1H7a1 1 0 01-1-1v-3H5a2 2 0 010-4h1V6a1 1 0 011-1h3V4a2 2 0 012-2z"/>
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
    title: 'Revenue scattered across 8 platforms',
    desc: "You're context-switching between dashboards just to answer the most basic question: how much did I make this month?",
  },
  {
    icon: <IconTax />,
    title: 'Tax season is a nightmare',
    desc: 'Chasing down income numbers from eight different platforms while your accountant waits is a special kind of chaos.',
  },
  {
    icon: <IconPuzzle />,
    title: 'No idea which content actually makes money',
    desc: "Views and likes are vanity metrics. Without consolidated revenue data, you can't make smart decisions about what to create.",
  },
];

const features = [
  {
    icon: <IconDashboard />,
    title: 'Unified Dashboard',
    desc: 'All your revenue streams in one clean view. No switching tabs, no mental math.',
  },
  {
    icon: <IconUpload />,
    title: 'CSV Import + Auto-Sync',
    desc: 'Drop in a CSV or connect a platform directly. TallyBoard handles the parsing.',
  },
  {
    icon: <IconReport />,
    title: 'Tax-Ready Reports',
    desc: 'Generate clean, categorized income summaries your accountant will actually appreciate.',
  },
  {
    icon: <IconInvoice />,
    title: 'Invoice Tracker',
    desc: 'Log sponsorships and track payment status so nothing slips through the cracks.',
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
    desc: "Your total revenue, platform breakdown, and income trends — all on a single dashboard that actually makes sense.",
  },
  {
    icon: <IconExport />,
    number: '03',
    title: 'Export for tax season',
    desc: 'Generate a clean, categorized income report in seconds. Your accountant gets the data. You keep your sanity.',
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
      'Manual entry',
      'Basic CSV export',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    desc: 'For serious creators who know their numbers.',
    popular: true,
    cta: 'Join Waitlist',
    features: [
      'Unlimited platforms',
      'Full revenue history',
      'Auto-sync (coming soon)',
      'Tax-ready PDF reports',
      'Invoice tracker',
      'Priority support',
    ],
  },
  {
    name: 'Business',
    price: '$19.99',
    period: 'per month',
    desc: 'For creators running a real business.',
    popular: false,
    cta: 'Join Waitlist',
    features: [
      'Everything in Pro',
      'Team access (3 seats)',
      'Custom categories',
      'API access',
      'Dedicated onboarding',
      'White-label reports',
    ],
  },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,10,0.85)] backdrop-blur-xl">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <LogoMark />
        <span className="text-white font-semibold text-base tracking-tight">TallyBoard</span>
      </a>
      <a
        href="#waitlist"
        className="btn-accent px-4 py-2 text-sm rounded-lg"
      >
        Join Waitlist
      </a>
    </header>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
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
              TallyBoard unifies your YouTube, TikTok, Twitch, merch, and
              sponsorship revenue so you always know your numbers.
            </p>
          </div>

          {/* Form */}
          <div id="waitlist" className="animate-fade-up" style={{ animationDelay: '240ms' }}>
            <WaitlistForm size="large" placeholder="your@email.com" />
            <p className="text-[rgba(255,255,255,0.3)] text-xs mt-3">
              No credit card required. Free tier available at launch.
            </p>
          </div>

          {/* Social proof */}
          <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: '320ms' }}>
            <div className="flex -space-x-2">
              {['#FF4444', '#9146FF', '#34D399', '#FBBF24'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-[9px] font-bold"
                  style={{ backgroundColor: `${c}25`, borderColor: '#0A0A0A', color: c }}
                >
                  {['JK', 'AM', 'SR', 'TL'][i]}
                </div>
              ))}
            </div>
            <p className="text-[rgba(255,255,255,0.4)] text-sm">
              <span className="text-white font-semibold">1,200+</span> creators already waiting
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painCards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 100}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 80}>
              <div className="glass-card rounded-2xl p-7 flex gap-5 items-start group cursor-default h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.15)] flex items-center justify-center text-[#34D399] group-hover:bg-[rgba(52,211,153,0.14)] group-hover:border-[rgba(52,211,153,0.25)] transition-all duration-200">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{f.title}</h3>
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
                {/* Step icon */}
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

function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(52,211,153,0.02)] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-7 flex flex-col gap-6 h-full ${
                  tier.popular
                    ? 'bg-[#111] ring-accent'
                    : 'glass-card'
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

function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <TrackScrollDepth section="final_cta" />
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-3xl border border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.04)] p-10 md:p-16 text-center overflow-hidden">
            {/* Background glow */}
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
                Early members get lifetime Pro pricing locked in.
              </p>

              <div className="flex justify-center">
                <WaitlistForm size="large" placeholder="your@email.com" />
              </div>

              <p className="text-[rgba(255,255,255,0.25)] text-xs mt-4">
                No spam. No credit card. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <LogoMark />
          <span className="text-white font-semibold text-sm tracking-tight">TallyBoard</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Twitter / X', href: '#' },
            { label: 'hello@tallyboard.io', href: 'mailto:hello@tallyboard.io' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[rgba(255,255,255,0.35)] text-sm hover:text-[rgba(255,255,255,0.7)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[rgba(255,255,255,0.2)] text-xs">
          © {new Date().getFullYear()} TallyBoard
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Nav />
      <Hero />
      <div className="divider mx-6 md:mx-10" />
      <PainSection />
      <div className="divider mx-6 md:mx-10" />
      <FeaturesSection />
      <div className="divider mx-6 md:mx-10" />
      <HowItWorks />
      <div className="divider mx-6 md:mx-10" />
      <PricingSection />
      <div className="divider mx-6 md:mx-10" />
      <FinalCTA />
      <Footer />
    </main>
  );
}
