-- AndyAI Finance Engine v5.4.0
-- Usage Quota Tables Draft
-- Status: DRAFT ONLY. Do not apply to production without review.

create table if not exists public.quota_policies (
  id uuid primary key default gen_random_uuid(),
  membership_state text not null,
  quota_key text not null,
  quota_value integer,
  quota_mode text not null default 'fixed' check (quota_mode in ('fixed', 'custom', 'not_available')),
  created_at timestamptz not null default now(),
  unique (membership_state, quota_key)
);

create table if not exists public.usage_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  quota_key text not null,
  amount integer not null default 1,
  event_ref text,
  created_at timestamptz not null default now()
);

create table if not exists public.quota_windows (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  quota_key text not null,
  window_start timestamptz not null,
  window_end timestamptz not null,
  used_amount integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, quota_key, window_start, window_end)
);

create index if not exists idx_usage_events_workspace_created
  on public.usage_events(workspace_id, created_at);

create index if not exists idx_quota_windows_workspace_key
  on public.quota_windows(workspace_id, quota_key);
