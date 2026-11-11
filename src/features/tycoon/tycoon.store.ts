import { create } from 'zustand'
import type { TycoonSnapshot } from './tycoon.types'

type TycoonStore = TycoonSnapshot & {
  replaceFromServer: (snapshot: TycoonSnapshot) => void
}

export const initialTycoonState: TycoonSnapshot = {
  money: 100,
  capacity: 12,
  customers: 0,
  isOpen: true,
  shops: [
    { id: 'kiosk', name: 'Kios', level: 1, owned: true, upgradeCost: 80 },
    { id: 'arcade', name: 'Arcade', level: 0, owned: false, upgradeCost: 120 },
    { id: 'cafe', name: 'Kafe', level: 0, owned: false, upgradeCost: 200 },
  ],
}

export const useTycoonStore = create<TycoonStore>((set) => ({
  ...initialTycoonState,
  replaceFromServer: (snapshot) => set(snapshot),
}))
