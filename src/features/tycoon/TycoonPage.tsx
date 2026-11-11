import { PhaserGame } from './game/PhaserGame'
import { useTycoonStore } from './tycoon.store'

export function TycoonPage() {
  const state = useTycoonStore()
  return (
    <main className="tycoon-page">
      <header className="tycoon-hud">
        <div><span>Money</span><strong>Rp {state.money.toLocaleString('id-ID')}</strong></div>
        <div><span>Customer</span><strong>{state.customers}/{state.capacity}</strong></div>
        <div><span>Status</span><strong>{state.isOpen ? 'BUKA' : 'TUTUP'}</strong></div>
      </header>
      <PhaserGame />
      <section className="shop-panel" aria-label="Toko dan upgrade">
        {state.shops.map((shop) => (
          <article key={shop.id}>
            <h2>{shop.name}</h2>
            <p>{shop.owned ? `Level ${shop.level}` : 'Belum dimiliki'}</p>
            <button type="button" disabled> {shop.owned ? `Upgrade Rp ${shop.upgradeCost}` : `Beli Rp ${shop.upgradeCost}`}</button>
          </article>
        ))}
      </section>
    </main>
  )
}
