import { NavLink, Outlet } from 'react-router-dom'

export function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <NavLink to="/">Rally Tycoon</NavLink>
        <NavLink to="/team">Tim</NavLink>
        <NavLink to="/staff">Petugas</NavLink>
        <NavLink to="/organizer">Koordinator</NavLink>
        <NavLink to="/leaderboard">Peringkat</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
