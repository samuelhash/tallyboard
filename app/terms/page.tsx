import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — TallyBoard',
  description: 'TallyBoard Terms of Service — the rules and guidelines for using our platform.',
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

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-[rgba(255,255,255,0.35)] text-sm">Last updated: April 2025</p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10 mb-10"
          style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)' }}
        >
          <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
            By accessing or using TallyBoard, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree, do not use TallyBoard.
          </p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of TallyBoard (&ldquo;Service&rdquo;), operated by TallyBoard (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By creating an account or joining the waitlist, you agree to these Terms.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            TallyBoard is a creator finance dashboard that aggregates income data from multiple platforms and provides reporting tools. The Service is currently in pre-launch. Features, pricing, and availability are subject to change before and after launch.
          </p>
        </Section>

        <Section title="3. Waitlist">
          <p>
            By joining the waitlist, you provide your email address to receive updates about TallyBoard. Waitlist participation does not guarantee access to the Service or any specific pricing. We reserve the right to modify waitlist terms at any time.
          </p>
          <p>
            Lifetime pricing offered to waitlist members is contingent on the terms communicated at the time of that offer and subject to the conditions specified at signup.
          </p>
        </Section>

        <Section title="4. User Responsibilities">
          <p>You agree to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Provide accurate information when signing up or using the Service</li>
            <li>Keep your account credentials secure and not share them</li>
            <li>Use the Service only for lawful purposes</li>
            <li>Not attempt to reverse-engineer, scrape, or abuse the Service</li>
            <li>Comply with all applicable laws regarding your financial data</li>
          </ul>
        </Section>

        <Section title="5. Financial Data Disclaimer">
          <p>
            TallyBoard provides tools to organize and display financial data. We are not a licensed financial advisor, tax professional, or accounting firm. Nothing in the Service constitutes financial, tax, or legal advice. Always consult a qualified professional for tax filing and financial decisions.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content, design, logos, and code that make up TallyBoard are the property of TallyBoard and protected by copyright law. You may not reproduce, distribute, or create derivative works without express written permission.
          </p>
          <p>
            You retain ownership of all financial data you upload or connect to the Service.
          </p>
        </Section>

        <Section title="7. Payments and Cancellation">
          <p>
            Paid plans (Pro, Business) will be billed monthly. You may cancel at any time from your account settings. Cancellation takes effect at the end of your current billing period. No refunds are issued for partial billing periods unless required by law.
          </p>
          <p>
            Lifetime pricing for waitlist members is locked for the duration of continuous subscription. Cancellation forfeits the lifetime rate.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We reserve the right to suspend or terminate your account at our discretion if you violate these Terms. You may delete your account at any time by contacting us at hello@tallyboard.io. Upon deletion, your data will be removed within 30 days.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            TallyBoard is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from use of the Service, including but not limited to data loss or errors in financial reporting.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            We may update these Terms at any time. We will notify users of material changes via email. Continued use of the Service after changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms? Email us at{' '}
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
