'use client';

import { useState } from 'react';
import { analytics } from '@/lib/posthog';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistFormProps {
  size?: 'default' | 'large';
  placeholder?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function validateEmail(val: string): string {
  const trimmed = val.trim();
  if (!trimmed) return 'Email is required.';
  if (!EMAIL_RE.test(trimmed)) return 'Please enter a valid email address.';
  return '';
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WaitlistForm({
  size = 'default',
  placeholder = 'Enter your email',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  // Toast state is decoupled from form status so appearance doesn't flicker
  // if a second submission starts while a toast is still animating out.
  const [toast, setToast] = useState<{
    msg: string;
    type: 'success' | 'error';
    visible: boolean;
    exiting: boolean;
  }>({ msg: '', type: 'success', visible: false, exiting: false });

  const clientError = showErrors ? validateEmail(email) : '';

  // ── Toast helpers ──────────────────────────────────────────────────────────

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type, visible: true, exiting: false });
    setTimeout(() => setToast((prev) => ({ ...prev, exiting: true })), 3500);
    setTimeout(
      () => setToast({ msg: '', type: 'success', visible: false, exiting: false }),
      4100,
    );
  };

  // ── Submit ─────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    const err = validateEmail(email);
    if (err || status === 'loading') return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (res.ok) {
        const domain = email.trim().split('@')[1] ?? 'unknown';
        analytics.waitlistSignup(domain);

        setStatus('success');
        setEmail('');
        setShowErrors(false);
        showToast(data.message ?? "You're on the list!", 'success');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        showToast(data.error ?? 'Something went wrong.', 'error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      showToast('Something went wrong. Please try again.', 'error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isLarge = size === 'large';
  const showInputIcon = status === 'loading' || status === 'success';

  // Input border colour reflects validation / submission state
  const inputBorderColor = (() => {
    if (status === 'success') return 'rgba(52,211,153,0.55)';
    if (clientError) return 'rgba(239,68,68,0.45)';
    if (status === 'loading') return 'rgba(52,211,153,0.35)';
    return 'rgba(255,255,255,0.1)';
  })();

  const inputFocusClasses = clientError
    ? 'focus:border-red-500/60 focus:ring-red-500/10'
    : 'focus:border-[rgba(52,211,153,0.55)] focus:bg-[rgba(52,211,153,0.04)] focus:ring-[rgba(52,211,153,0.1)]';

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`flex flex-col gap-2.5 w-full ${isLarge ? 'max-w-lg' : 'max-w-md'}`}
      >
        {/* Input + button row */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Input wrapper — relative so the status icon can be positioned inside */}
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setShowErrors(true)}
              placeholder={placeholder}
              disabled={status === 'loading'}
              aria-describedby={clientError ? 'email-error' : undefined}
              aria-invalid={!!clientError}
              style={{ borderColor: inputBorderColor }}
              className={`w-full bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[rgba(255,255,255,0.35)] outline-none ring-2 ring-transparent transition-all duration-200 disabled:opacity-60 ${inputFocusClasses} ${
                isLarge
                  ? `pl-5 ${showInputIcon ? 'pr-12' : 'pr-5'} py-4 text-base`
                  : `pl-4 ${showInputIcon ? 'pr-10' : 'pr-4'} py-3 text-sm`
              }`}
            />

            {/* Right-side status icon */}
            {status === 'loading' && (
              <span
                className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isLarge ? 'right-4' : 'right-3'}`}
                aria-hidden="true"
              >
                <InputSpinnerIcon />
              </span>
            )}
            {status === 'success' && (
              <span
                className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isLarge ? 'right-4' : 'right-3'}`}
                aria-hidden="true"
              >
                <InputCheckIcon />
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`btn-accent rounded-xl font-semibold whitespace-nowrap disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none transition-all duration-200 ${
              isLarge ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm'
            } ${status === 'loading' ? 'opacity-90' : ''}`}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <ButtonSpinnerIcon />
                Joining…
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center gap-2">
                <ButtonCheckIcon />
                You&rsquo;re in!
              </span>
            ) : (
              'Join the Waitlist'
            )}
          </button>
        </div>

        {/* Animated progress bar — visible only while loading */}
        <div
          className="relative h-px rounded-full overflow-hidden transition-opacity duration-300"
          style={{
            background: 'rgba(255,255,255,0.06)',
            opacity: status === 'loading' ? 1 : 0,
          }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-y-0 left-0 w-full animate-shimmer"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.7) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>

        {/* Client-side validation error message */}
        {clientError && (
          <p
            id="email-error"
            role="alert"
            className="flex items-center gap-1.5 text-red-400 text-xs ml-1 animate-fade-up"
          >
            <InlineErrorIcon />
            {clientError}
          </p>
        )}
      </form>

      {/* ── Toast ── */}
      {toast.visible && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl ${
            toast.type === 'error'
              ? 'bg-[#1a0f0f] border-[rgba(239,68,68,0.3)]'
              : 'bg-[#0c1a14] border-[rgba(52,211,153,0.3)]'
          } ${toast.exiting ? 'animate-toast-out' : 'animate-toast-in'}`}
        >
          {toast.type === 'error' ? <ToastErrorIcon /> : <ToastCheckIcon />}
          <span className="text-sm font-medium text-white">{toast.msg}</span>
        </div>
      )}
    </>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

/** Spinner inside the input field while the request is in-flight */
function InputSpinnerIcon() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      style={{ color: 'rgba(52,211,153,0.7)' }}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity={0.25} />
      <path
        fill="currentColor"
        opacity={0.75}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/** Checkmark inside the input field after a successful submission */
function InputCheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34D399"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Spinner in the submit button while loading */
function ButtonSpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3.5" opacity={0.3} />
      <path
        fill="currentColor"
        opacity={0.85}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/** Check in the submit button after success */
function ButtonCheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Small inline icon next to the validation error text */
function InlineErrorIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function ToastCheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34D399"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ToastErrorIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F87171"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
