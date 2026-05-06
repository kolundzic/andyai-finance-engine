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
