import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { TycoonPage } from '../features/tycoon/TycoonPage'
import { StaffResultPage } from '../features/results/StaffResultPage'
import { LeaderboardPage } from '../features/leaderboard/LeaderboardPage'
import { OrganizerDashboardPage } from '../features/organizer/OrganizerDashboardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'team', element: <TycoonPage /> },
      { path: 'staff', element: <StaffResultPage /> },
      { path: 'organizer', element: <OrganizerDashboardPage /> },
      { path: 'leaderboard', element: <LeaderboardPage /> },
    ],
  },
])

function LandingPage() {
  return <main className="landing"><h1>Rally Tycoon</h1><p>Pos fisik membangun bisnis digital secara real-time.</p></main>
}
