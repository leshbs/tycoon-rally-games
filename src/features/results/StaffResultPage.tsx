import { useState } from 'react'

export function StaffResultPage() {
  const [saved, setSaved] = useState(false)
  return <main className="form-page"><h1>Input Hasil Pos</h1><p>Ronde 1 · Pos 1 · Solo</p><label>Tim<select defaultValue="1">{Array.from({ length: 15 }, (_, i) => <option key={i + 1}>Tim {i + 1}</option>)}</select></label><label>Hasil<select defaultValue="2"><option value="1">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option></select></label><button type="button" onClick={() => setSaved(true)}>Konfirmasi hasil</button>{saved && <p className="success">Hadiah berhasil dicatat.</p>}</main>
}
