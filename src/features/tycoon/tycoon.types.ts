export type Shop = {
  id: 'kiosk' | 'arcade' | 'cafe'
  name: string
  level: number
  owned: boolean
  upgradeCost: number
}

export type TycoonSnapshot = {
  money: number
  capacity: number
  customers: number
  isOpen: boolean
  shops: Shop[]
}
