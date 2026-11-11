# Rally Tycoon

Rally game sekolah untuk maksimal 15 tim. Tim bermain minigame fisik pada 12 pos dan mengelola tycoon real-time melalui HP.

## Arsitektur

- React menangani halaman tim, petugas, koordinator, dashboard, dan data UI.
- Phaser menangani dunia tycoon: customer, kamera drag/zoom, animasi, dan gameplay map.
- Supabase menangani autentikasi, PostgreSQL, aturan ekonomi, serta pembaruan real-time.

## Menjalankan aplikasi

1. Salin `.env.example` menjadi `.env` dan isi kredensial Supabase bila tersedia.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.

Versi awal tetap dapat dibuka tanpa Supabase karena halaman memakai seed UI lokal. Untuk backend, pasang Supabase CLI lalu jalankan migration dan seed dari folder `supabase/`.

## Perintah

- `npm run dev` menjalankan aplikasi lokal.
- `npm test` menjalankan unit test.
- `npm run typecheck` memeriksa TypeScript.
- `npm run build` menghasilkan build produksi.

## Konten awal

Seed database membuat satu event, 15 tim, 12 pos, 15 ronde, tycoon dengan saldo awal Rp100, serta katalog Kios, Arcade, dan Kafe.
