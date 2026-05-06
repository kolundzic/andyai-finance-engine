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
