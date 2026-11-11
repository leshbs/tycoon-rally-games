const teams = Array.from({ length: 15 }, (_, index) => ({ name: `Tim ${index + 1}`, score: 850 - index * 34 }))

export function LeaderboardPage() {
  return <main className="table-page"><h1>Peringkat Live</h1><table><thead><tr><th>#</th><th>Tim</th><th>Nilai</th></tr></thead><tbody>{teams.map((team, index) => <tr key={team.name}><td>{index + 1}</td><td>{team.name}</td><td>Rp {team.score.toLocaleString('id-ID')}</td></tr>)}</tbody></table></main>
}
