import type { DuelAssignment, RallyRound, SoloAssignment } from './rally.types'

const TEAM_COUNT = 15
const SOLO_POSITION_IDS = Array.from({ length: 9 }, (_, index) => index + 1)
const DUEL_POSITION_PAIRS: ReadonlyArray<readonly [number, number]> = [
  [9, 12],
  [10, 14],
  [11, 13],
]

function teamAtSlot(roundIndex: number, slot: number): number {
  return (((slot - 7 * roundIndex) % TEAM_COUNT + TEAM_COUNT) % TEAM_COUNT) + 1
}

export function buildSchedule(): RallyRound[] {
  return Array.from({ length: TEAM_COUNT }, (_, roundIndex) => {
    const solo: SoloAssignment[] = SOLO_POSITION_IDS.map((positionId, slot) => ({
      positionId,
      teamId: teamAtSlot(roundIndex, slot),
    }))

    const duels: DuelAssignment[] = DUEL_POSITION_PAIRS.map(([firstSlot, secondSlot], index) => ({
      positionId: 10 + index,
      teamIds: [teamAtSlot(roundIndex, firstSlot), teamAtSlot(roundIndex, secondSlot)],
    }))

    return { roundNumber: roundIndex + 1, solo, duels }
  })
}
