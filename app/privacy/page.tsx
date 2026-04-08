import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — TallyBoard',
  description: 'TallyBoard Privacy Policy — how we collect, use, and protect your data.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
      <div className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] py-24 px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[#34D399] text-sm mb-14 hover:opacity-75 transition-opacity no-underline"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to TallyBoard
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-[rgba(255,255,255,0.35)] text-sm">Last updated: April 2025</p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10 mb-10"
          style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)' }}
        >
          <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
            TallyBoard is committed to protecting your privacy. This policy explains what data we collect, why we collect it, and how it is used. By using TallyBoard, you agree to the practices described here.
          </p>
        </div>

        <Section title="1. Information We Collect">
          <p>
            <strong className="text-white">Waitlist email:</strong> When you join the waitlist, we collect your email address. This is used only to notify you about TallyBoard&apos;s launch and updates.
          </p>
          <p>
            <strong className="text-white">Usage data:</strong> We collect anonymized analytics about how users interact with the site (pages visited, button clicks) to improve the product. We do not collect personally identifiable information through analytics.
          </p>
          <p>
            <strong className="text-white">Financial data (at launch):</strong> When you connect platforms or upload CSVs, we store the financial data you provide. This data is encrypted at rest and in transit.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Notify waitlist members of product updates and launch</li>
            <li>Provide and improve the TallyBoard service</li>
            <li>Respond to support requests</li>
            <li>Generate aggregated, anonymous product analytics</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </Section>

        <Section title="3. Data Storage and Security">
          <p>
            All data is stored on secure infrastructure (Supabase/PostgreSQL with Row Level Security enabled). Financial data is encrypted at rest and in transit using industry-standard TLS. We implement access controls to limit who can access your data internally.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>We use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong className="text-white">Supabase</strong> — database and authentication</li>
            <li><strong className="text-white">PostHog</strong> — anonymized product analytics</li>
            <li><strong className="text-white">Vercel</strong> — hosting and edge infrastructure</li>
          </ul>
          <p>Each of these services has their own privacy policy governing their data use.</p>
        </Section>

        <Section title="5. Cookies">
          <p>
            TallyBoard uses minimal cookies required for basic site functionality and anonymized analytics. We do not use advertising or tracking cookies. You can disable cookies in your browser settings.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Request a copy of the data we hold about you</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Unsubscribe from email communications at any time</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:hello@tallyboard.io" className="text-[#34D399] hover:opacity-75">hello@tallyboard.io</a>.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            Waitlist email addresses are retained until you request removal or TallyBoard ceases operations. At-launch account data is retained for the duration of your account and deleted within 30 days of account deletion.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this privacy policy from time to time. We will notify waitlist members of material changes via email. Continued use of TallyBoard after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about this policy? Email us at{' '}
            <a href="mailto:hello@tallyboard.io" className="text-[#34D399] hover:opacity-75">
              hello@tallyboard.io
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
