import { beforeEach, describe, expect, it } from 'vitest'
import { initialTycoonState, useTycoonStore } from '../../src/features/tycoon/tycoon.store'

describe('tycoon store', () => {
  beforeEach(() => {
    useTycoonStore.setState(initialTycoonState)
  })

  it('replaces the game state with the latest server snapshot', () => {
    useTycoonStore.getState().replaceFromServer({
      money: 240,
      capacity: 20,
      isOpen: false,
      customers: 7,
      shops: [{ id: 'kiosk', name: 'Kios', level: 2, owned: true, upgradeCost: 140 }],
    })

    const state = useTycoonStore.getState()
    expect(state.money).toBe(240)
    expect(state.isOpen).toBe(false)
    expect(state.shops[0]?.level).toBe(2)
  })
})
