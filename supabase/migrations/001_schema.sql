create type public.app_role as enum ('team', 'staff', 'organizer');
create type public.position_kind as enum ('solo', 'duel');
create type public.result_level as enum ('level_1', 'level_2', 'level_3', 'win', 'draw', 'loss');

create table public.events (
  id uuid primary key default gen_random_uuid(), name text not null, status text not null default 'draft', current_round integer not null default 0, created_at timestamptz not null default now()
);
create table public.teams (id uuid primary key default gen_random_uuid(), event_id uuid not null references public.events(id) on delete cascade, team_number integer not null check (team_number between 1 and 15), name text not null, unique(event_id, team_number));
create table public.positions (id uuid primary key default gen_random_uuid(), event_id uuid not null references public.events(id) on delete cascade, position_number integer not null check (position_number between 1 and 12), name text not null, kind public.position_kind not null, unique(event_id, position_number));
create table public.rounds (id uuid primary key default gen_random_uuid(), event_id uuid not null references public.events(id) on delete cascade, round_number integer not null check (round_number between 1 and 15), unique(event_id, round_number));
create table public.round_assignments (id uuid primary key default gen_random_uuid(), round_id uuid not null references public.rounds(id) on delete cascade, position_id uuid not null references public.positions(id) on delete cascade, team_id uuid not null references public.teams(id) on delete cascade, unique(round_id, team_id));
create table public.tycoons (team_id uuid primary key references public.teams(id) on delete cascade, money integer not null default 100 check (money >= 0), customer_count integer not null default 0 check (customer_count >= 0), capacity integer not null default 12 check (capacity >= 1), is_open boolean not null default true, updated_at timestamptz not null default now());
create table public.shop_catalog (id text primary key, name text not null, purchase_cost integer not null, upgrade_costs integer[] not null, income_by_level integer[] not null);
create table public.team_shops (team_id uuid not null references public.teams(id) on delete cascade, shop_id text not null references public.shop_catalog(id), level integer not null default 0 check (level between 0 and 3), primary key(team_id, shop_id));
create table public.position_results (id uuid primary key default gen_random_uuid(), round_id uuid not null references public.rounds(id) on delete cascade, position_id uuid not null references public.positions(id), team_id uuid not null references public.teams(id), level public.result_level not null, money_award integer not null, customer_award integer not null, created_at timestamptz not null default now(), unique(round_id, position_id, team_id));
create table public.economy_transactions (id uuid primary key default gen_random_uuid(), team_id uuid not null references public.teams(id), kind text not null, amount integer not null, metadata jsonb not null default '{}'::jsonb, created_at timestamptz not null default now());
