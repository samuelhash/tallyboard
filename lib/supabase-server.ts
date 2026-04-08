import { createClient } from '@supabase/supabase-js';

// Server-only Supabase client — uses the service role key (bypasses RLS) when
// available. Falls back to the anon key. Never import from a 'use client' file.
// Add SUPABASE_SERVICE_ROLE_KEY to env vars to enable accurate row counting.
export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    '';
  return createClient(url, key, { auth: { persistSession: false } });
}
