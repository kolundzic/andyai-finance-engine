-- AndyAI Finance Engine v5.3.0
-- Membership Tables Draft
-- Status: DRAFT ONLY. Do not apply to production without review.

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_user_id uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null,
  role text not null check (role in ('owner', 'admin', 'operator', 'reviewer', 'viewer')),
  created_at timestamptz not null default now(),
  unique (workspace_id, user_id)
);

create table if not exists public.membership_states (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  state text not null check (state in (
    'free_preview',
    'professional',
    'business_team',
    'enterprise_custom',
    'manual_review',
    'suspended'
  )),
  provider text not null default 'none',
  provider_customer_ref text,
  provider_subscription_ref text,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_workspace_members_workspace_id
  on public.workspace_members(workspace_id);

create index if not exists idx_membership_states_workspace_id
  on public.membership_states(workspace_id);
