import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Postgres unique-violation error code
const PG_UNIQUE_VIOLATION = '23505';

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  let email: string;

  try {
    const body = (await req.json()) as { email?: unknown };
    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }
    email = body.email.trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const { error } = await supabase.from('waitlist').insert({ email });

  if (error) {
    if (error.code === PG_UNIQUE_VIOLATION) {
      // Unique constraint on email column — treat as soft success, not an error
      return NextResponse.json(
        { message: "You're already on the waitlist — we'll be in touch soon!" },
        { status: 200 }
      );
    }

    console.error('[waitlist] Supabase insert error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "You're on the list! We'll be in touch when TallyBoard launches." },
    { status: 201 }
  );
}
