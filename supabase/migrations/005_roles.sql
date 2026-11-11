create table public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role public.app_role not null,
  team_id uuid references public.teams(id) on delete set null
);

alter table public.user_roles enable row level security;
create policy "users may read own role" on public.user_roles for select to authenticated using (user_id = auth.uid());

revoke all on function public.award_position_result(uuid, uuid, uuid, public.result_level) from public;
