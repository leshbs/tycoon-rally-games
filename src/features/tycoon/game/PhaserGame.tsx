import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { TycoonScene } from './TycoonScene'
import { useTycoonStore } from '../tycoon.store'

export function PhaserGame() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<Phaser.Game | null>(null)
  const snapshot = useTycoonStore((state) => ({
    money: state.money,
    capacity: state.capacity,
    customers: state.customers,
    isOpen: state.isOpen,
    shops: state.shops,
  }))

  useEffect(() => {
    if (!containerRef.current || gameRef.current) return
    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: 1280,
      height: 720,
      backgroundColor: '#0f1b2d',
      scene: [TycoonScene],
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    })
    return () => {
      gameRef.current?.destroy(true)
      gameRef.current = null
    }
  }, [])

  useEffect(() => {
    const scene = gameRef.current?.scene.getScene('tycoon') as TycoonScene | undefined
    scene?.sync(snapshot)
  }, [snapshot])

  return <div className="game-canvas" ref={containerRef} aria-label="Peta tycoon interaktif" />
}
