import Phaser from 'phaser'
import type { TycoonSnapshot } from '../tycoon.types'

export class TycoonScene extends Phaser.Scene {
  private customerSprites: Phaser.GameObjects.Arc[] = []

  constructor() {
    super('tycoon')
  }

  create() {
    this.add.rectangle(640, 360, 1280, 720, 0x0f1b2d)
    this.add.rectangle(640, 360, 1120, 560, 0x18314f).setStrokeStyle(4, 0x7cc6fe)
    this.add.text(60, 55, 'Tycoon District', { fontFamily: 'sans-serif', fontSize: '30px', color: '#eaf6ff' })

    const shops = [
      { label: 'Kios', x: 260, y: 300, color: 0x42b883 },
      { label: 'Arcade', x: 640, y: 250, color: 0xf6bd60 },
      { label: 'Kafe', x: 950, y: 430, color: 0xf28482 },
    ]

    shops.forEach((shop) => {
      this.add.rectangle(shop.x, shop.y, 190, 120, shop.color).setStrokeStyle(3, 0xffffff)
      this.add.text(shop.x - 42, shop.y - 10, shop.label, { fontFamily: 'sans-serif', fontSize: '22px', color: '#10253d' })
    })

    this.cameras.main.setBounds(0, 0, 1280, 720)
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        this.cameras.main.scrollX -= (pointer.x - pointer.prevPosition.x) / this.cameras.main.zoom
        this.cameras.main.scrollY -= (pointer.y - pointer.prevPosition.y) / this.cameras.main.zoom
      }
    })
    this.input.on('wheel', (_: Phaser.Input.Pointer, __: Phaser.GameObjects.GameObject[], ___: number, deltaY: number) => {
      this.cameras.main.setZoom(Phaser.Math.Clamp(this.cameras.main.zoom - deltaY * 0.001, 0.7, 1.6))
    })
  }

  sync(snapshot: TycoonSnapshot) {
    this.customerSprites.forEach((sprite) => sprite.destroy())
    this.customerSprites = Array.from({ length: Math.min(snapshot.customers, 20) }, (_, index) => {
      const sprite = this.add.circle(180 + (index % 8) * 90, 590 + Math.floor(index / 8) * 28, 11, snapshot.isOpen ? 0xeaf6ff : 0x94a3b8)
      this.tweens.add({ targets: sprite, x: sprite.x + 28, duration: 1200 + index * 50, yoyo: true, repeat: -1 })
      return sprite
    })
  }
}
