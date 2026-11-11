import { describe, expect, it } from 'vitest'
import { buildSchedule } from '../../src/features/rally/schedule'

describe('buildSchedule', () => {
  const schedule = buildSchedule()

  it('creates 15 fully assigned rounds', () => {
    expect(schedule).toHaveLength(15)
    for (const round of schedule) {
      expect(round.solo).toHaveLength(9)
      expect(round.duels).toHaveLength(3)
      expect(round.solo.map((assignment) => assignment.teamId)).toHaveLength(9)
      expect(round.duels.flatMap((duel) => duel.teamIds)).toHaveLength(6)
    }
  })

  it('sends every team to nine solo positions and each duel position twice', () => {
    for (let teamId = 1; teamId <= 15; teamId += 1) {
      const soloAssignments = schedule.flatMap((round) =>
        round.solo.filter((assignment) => assignment.teamId === teamId),
      )
      const duelAssignments = schedule.flatMap((round) =>
        round.duels.filter((duel) => duel.teamIds.includes(teamId)),
      )

      expect(soloAssignments).toHaveLength(9)
      expect(new Set(soloAssignments.map((assignment) => assignment.positionId)).size).toBe(9)
      expect(duelAssignments).toHaveLength(6)
      expect(duelAssignments.filter((duel) => duel.positionId === 10)).toHaveLength(2)
      expect(duelAssignments.filter((duel) => duel.positionId === 11)).toHaveLength(2)
      expect(duelAssignments.filter((duel) => duel.positionId === 12)).toHaveLength(2)
    }
  })
})
