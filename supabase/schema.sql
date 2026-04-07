-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/cjeckxelezsbgayayfhp/sql

-- ─── Table ────────────────────────────────────────────────────────────────────

create table if not exists public.waitlist (
  id         uuid        primary key default gen_random_uuid(),
  email      text        not null,
  created_at timestamptz not null default now(),

  constraint waitlist_email_key unique (email)
);

comment on table public.waitlist is
  'TallyBoard pre-launch waitlist signups.';

-- ─── Row Level Security ───────────────────────────────────────────────────────
-- Enable RLS so the anon key can only insert — never read or modify.

alter table public.waitlist enable row level security;

-- Allow anyone (including unauthenticated visitors) to add their email.
create policy "allow_insert" on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policies → the anon key cannot enumerate emails.
-- Only the service-role key (server-side admin) can read the full list.

-- ─── Optional: index for fast duplicate checks ────────────────────────────────
-- Postgres enforces the unique constraint with a btree index automatically,
-- so this is already handled. No extra index needed.
