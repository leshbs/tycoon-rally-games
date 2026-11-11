export type SoloAssignment = {
  positionId: number
  teamId: number
}

export type DuelAssignment = {
  positionId: number
  teamIds: [number, number]
}

export type RallyRound = {
  roundNumber: number
  solo: SoloAssignment[]
  duels: DuelAssignment[]
}
