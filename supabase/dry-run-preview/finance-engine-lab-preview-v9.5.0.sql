BEGIN;
ROLLBACK;


/* SOURCE_FILE: docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql */
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


/* SOURCE_FILE: docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql */
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


/* SOURCE_FILE: docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql */
-- AndyAI Finance Engine v5.5.0
-- Audit and Approval Tables Draft
-- Status: DRAFT ONLY. Do not apply to production without review.

create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  actor_user_id uuid,
  event_type text not null,
  event_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.approval_decisions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  project_ref text,
  model_run_ref text,
  status text not null check (status in ('draft', 'needs_review', 'approved', 'rejected', 'superseded', 'archived')),
  reviewer_user_id uuid,
  decision_note text,
  created_at timestamptz not null default now()
);

create table if not exists public.export_records (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  project_ref text,
  export_type text not null,
  approval_status text not null default 'draft',
  evidence_refs jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.manual_review_queue (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  reason text not null,
  severity text not null default 'normal' check (severity in ('low', 'normal', 'high', 'critical')),
  status text not null default 'open' check (status in ('open', 'in_review', 'resolved', 'dismissed')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists idx_audit_events_workspace_created
  on public.audit_events(workspace_id, created_at);

create index if not exists idx_approval_decisions_workspace_status
  on public.approval_decisions(workspace_id, status);

create index if not exists idx_export_records_workspace_created
  on public.export_records(workspace_id, created_at);

create index if not exists idx_manual_review_workspace_status
  on public.manual_review_queue(workspace_id, status);


/* SOURCE_FILE: docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql */
-- AndyAI Finance Engine v5.6.0
-- RLS Policy Draft
-- Status: DRAFT ONLY. Review before applying.

-- Example helper concept:
-- A user can access a workspace if they are listed in workspace_members.
-- This file is intentionally conservative and should be adapted to the final auth.uid() strategy.

alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.membership_states enable row level security;
alter table public.quota_policies enable row level security;
alter table public.usage_events enable row level security;
alter table public.quota_windows enable row level security;
alter table public.audit_events enable row level security;
alter table public.approval_decisions enable row level security;
alter table public.export_records enable row level security;
alter table public.manual_review_queue enable row level security;

-- Draft policy pattern:
-- create policy "workspace members can read workspace"
-- on public.workspaces
-- for select
-- using (
--   exists (
--     select 1 from public.workspace_members wm
--     where wm.workspace_id = workspaces.id
--     and wm.user_id = auth.uid()
--   )
-- );

-- Draft write policies should separate owner/admin/operator/reviewer permissions.
-- Do not apply without a final role matrix.

