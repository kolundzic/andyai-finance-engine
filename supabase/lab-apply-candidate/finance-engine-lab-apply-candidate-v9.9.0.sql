/* AndyAI Finance Engine v9.9.0 — Lab-Only Apply Candidate
   Target: shared Supabase Free lab only
   Prefix lock: fe_
   Human Attention boundary: protected
   Production: blocked
   Review required before execution
*/

BEGIN;

create table if not exists public.fe_workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_user_id uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.fe_workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  user_id uuid not null,
  role text not null check (role in ('owner', 'admin', 'operator', 'reviewer', 'viewer')),
  created_at timestamptz not null default now(),
  unique (workspace_id, user_id)
);

create table if not exists public.fe_membership_states (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
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

create index if not exists idx_fe_workspace_members_workspace_id
  on public.fe_workspace_members(workspace_id);

create index if not exists idx_fe_membership_states_workspace_id
  on public.fe_membership_states(workspace_id);

create table if not exists public.fe_quota_policies (
  id uuid primary key default gen_random_uuid(),
  membership_state text not null,
  quota_key text not null,
  quota_value integer,
  quota_mode text not null default 'fixed' check (quota_mode in ('fixed', 'custom', 'not_available')),
  created_at timestamptz not null default now(),
  unique (membership_state, quota_key)
);

create table if not exists public.fe_usage_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  quota_key text not null,
  amount integer not null default 1,
  event_ref text,
  created_at timestamptz not null default now()
);

create table if not exists public.fe_quota_windows (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  quota_key text not null,
  window_start timestamptz not null,
  window_end timestamptz not null,
  used_amount integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, quota_key, window_start, window_end)
);

create index if not exists idx_fe_usage_events_workspace_created
  on public.fe_usage_events(workspace_id, created_at);

create index if not exists idx_fe_quota_windows_workspace_key
  on public.fe_quota_windows(workspace_id, quota_key);

create table if not exists public.fe_audit_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  actor_user_id uuid,
  event_type text not null,
  event_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.fe_approval_decisions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  project_ref text,
  model_run_ref text,
  status text not null check (status in ('draft', 'needs_review', 'approved', 'rejected', 'superseded', 'archived')),
  reviewer_user_id uuid,
  decision_note text,
  created_at timestamptz not null default now()
);

create table if not exists public.fe_export_records (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  project_ref text,
  export_type text not null,
  approval_status text not null default 'draft',
  evidence_refs jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.fe_manual_review_queue (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.fe_workspaces(id) on delete cascade,
  reason text not null,
  severity text not null default 'normal' check (severity in ('low', 'normal', 'high', 'critical')),
  status text not null default 'open' check (status in ('open', 'in_review', 'resolved', 'dismissed')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists idx_fe_audit_events_workspace_created
  on public.fe_audit_events(workspace_id, created_at);

create index if not exists idx_fe_approval_decisions_workspace_status
  on public.fe_approval_decisions(workspace_id, status);

create index if not exists idx_fe_export_records_workspace_created
  on public.fe_export_records(workspace_id, created_at);

create index if not exists idx_fe_manual_review_workspace_status
  on public.fe_manual_review_queue(workspace_id, status);

alter table public.fe_workspaces enable row level security;
alter table public.fe_workspace_members enable row level security;
alter table public.fe_membership_states enable row level security;
alter table public.fe_quota_policies enable row level security;
alter table public.fe_usage_events enable row level security;
alter table public.fe_quota_windows enable row level security;
alter table public.fe_audit_events enable row level security;
alter table public.fe_approval_decisions enable row level security;
alter table public.fe_export_records enable row level security;
alter table public.fe_manual_review_queue enable row level security;


COMMIT;
