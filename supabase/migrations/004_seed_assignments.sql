insert into public.round_assignments(round_id, position_id, team_id)
select
  r.id,
  p.id,
  t.id
from public.rounds r
cross join generate_series(0, 14) as slot(slot_number)
join public.positions p on p.event_id = r.event_id and p.position_number = case
  when slot.slot_number <= 8 then slot.slot_number + 1
  when slot.slot_number in (9, 12) then 10
  when slot.slot_number in (10, 14) then 11
  else 12
end
join public.teams t on t.event_id = r.event_id and t.team_number = (((slot.slot_number - 7 * (r.round_number - 1)) % 15 + 15) % 15) + 1;
