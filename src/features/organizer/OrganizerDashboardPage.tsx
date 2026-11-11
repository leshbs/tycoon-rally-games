import { buildSchedule } from '../rally/schedule'

export function OrganizerDashboardPage() {
  const schedule = buildSchedule()
  return <main className="table-page"><h1>Kontrol Acara</h1><p>Ronde 1 dari 15 · 12 pos aktif · 15 tim.</p><button type="button">Mulai ronde berikutnya</button><h2>Penugasan ronde 1</h2><ul>{schedule[0]?.solo.map((item) => <li key={item.positionId}>Pos {item.positionId}: Tim {item.teamId}</li>)}</ul></main>
}
