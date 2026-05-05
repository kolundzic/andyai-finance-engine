-- AndyAI Finance Engine — RLS Policy Draft
-- Review before production. This assumes Supabase Auth and owner_id = auth.uid().

alter table public.afe_projects enable row level security;
alter table public.afe_business_inputs enable row level security;
alter table public.afe_model_runs enable row level security;
alter table public.afe_audit_events enable row level security;
alter table public.afe_approval_decisions enable row level security;
alter table public.afe_export_packages enable row level security;

create policy "projects_owner_select" on public.afe_projects
  for select using (owner_id = auth.uid());

create policy "projects_owner_insert" on public.afe_projects
  for insert with check (owner_id = auth.uid());

create policy "projects_owner_update" on public.afe_projects
  for update using (owner_id = auth.uid());

create policy "child_project_select_business_inputs" on public.afe_business_inputs
  for select using (
    exists (
      select 1 from public.afe_projects p
      where p.id = project_id and p.owner_id = auth.uid()
    )
  );

create policy "child_project_select_model_runs" on public.afe_model_runs
  for select using (
    exists (
      select 1 from public.afe_projects p
      where p.id = project_id and p.owner_id = auth.uid()
    )
  );

create policy "child_project_select_audit_events" on public.afe_audit_events
  for select using (
    exists (
      select 1 from public.afe_projects p
      where p.id = project_id and p.owner_id = auth.uid()
    )
  );

create policy "child_project_select_approval_decisions" on public.afe_approval_decisions
  for select using (
    exists (
      select 1 from public.afe_projects p
      where p.id = project_id and p.owner_id = auth.uid()
    )
  );

create policy "child_project_select_export_packages" on public.afe_export_packages
  for select using (
    exists (
      select 1 from public.afe_projects p
      where p.id = project_id and p.owner_id = auth.uid()
    )
  );
