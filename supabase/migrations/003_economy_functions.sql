create or replace function public.award_position_result(p_team_id uuid, p_round_id uuid, p_position_id uuid, p_level public.result_level)
returns void language plpgsql security definer set search_path = '' as $$
declare v_money integer; v_customers integer;
begin
  select case p_level when 'level_1' then 30 when 'level_2' then 50 when 'level_3' then 70 when 'win' then 50 when 'draw' then 35 else 20 end,
         case p_level when 'level_1' then 4 when 'level_2' then 6 when 'level_3' then 8 when 'win' then 6 when 'draw' then 4 else 3 end into v_money, v_customers;
  insert into public.position_results(round_id, position_id, team_id, level, money_award, customer_award) values (p_round_id, p_position_id, p_team_id, p_level, v_money, v_customers);
  update public.tycoons set money = money + v_money, customer_count = least(capacity, customer_count + v_customers), updated_at = now() where team_id = p_team_id;
  insert into public.economy_transactions(team_id, kind, amount, metadata) values (p_team_id, 'position_award', v_money, jsonb_build_object('customers', v_customers));
end; $$;

revoke all on function public.award_position_result(uuid, uuid, uuid, public.result_level) from public;
grant execute on function public.award_position_result(uuid, uuid, uuid, public.result_level) to authenticated;
