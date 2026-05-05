-- AndyAI Finance Engine — Supabase SaaS Foundation Schema
-- Safe to review before running in Supabase SQL editor.

create extension if not exists "uuid-ossp";

create table if not exists public.afe_projects (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid,
  name text not null,
  description text,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.afe_business_inputs (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.afe_projects(id) on delete cascade,
  input_type text not null default 'business_brief',
  title text not null,
  payload jsonb not null default '{}'::jsonb,
  source_note text,
  created_at timestamptz not null default now()
);

create table if not exists public.afe_model_runs (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.afe_projects(id) on delete cascade,
  business_input_id uuid references public.afe_business_inputs(id) on delete set null,
  run_status text not null default 'created',
  engine_version text not null,
  pricing_output jsonb not null default '{}'::jsonb,
  scenario_output jsonb not null default '{}'::jsonb,
  summary_output jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.afe_audit_events (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.afe_projects(id) on delete cascade,
  model_run_id uuid references public.afe_model_runs(id) on delete cascade,
  event_type text not null,
  severity text not null default 'info',
  message text not null,
  evidence jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.afe_approval_decisions (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.afe_projects(id) on delete cascade,
  model_run_id uuid references public.afe_model_runs(id) on delete cascade,
  reviewer_name text not null,
  decision text not null check (decision in ('approved', 'rejected', 'needs_revision')),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.afe_export_packages (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.afe_projects(id) on delete cascade,
  model_run_id uuid references public.afe_model_runs(id) on delete cascade,
  export_type text not null default 'markdown',
  export_status text not null default 'created',
  storage_path text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_afe_projects_owner_id on public.afe_projects(owner_id);
create index if not exists idx_afe_business_inputs_project_id on public.afe_business_inputs(project_id);
create index if not exists idx_afe_model_runs_project_id on public.afe_model_runs(project_id);
create index if not exists idx_afe_audit_events_model_run_id on public.afe_audit_events(model_run_id);
create index if not exists idx_afe_approval_decisions_model_run_id on public.afe_approval_decisions(model_run_id);
create index if not exists idx_afe_export_packages_model_run_id on public.afe_export_packages(model_run_id);
