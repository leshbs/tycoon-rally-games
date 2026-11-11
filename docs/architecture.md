# Arsitektur Rally Tycoon

React adalah lapisan aplikasi untuk navigasi, UI, hasil pos, dan papan peringkat. Phaser berada di dalam halaman tim dan hanya merender dunia tycoon. State ekonomi berasal dari Supabase dan disinkronkan ke React store lalu ke Phaser scene.

`Supabase → service → Zustand store → React HUD + Phaser scene`

Hasil pos, pembelian toko, upgrade, status buka/tutup, dan pendapatan harus divalidasi di database function atau Edge Function. Client tidak boleh menghitung hadiah atau menyimpan saldo sebagai sumber kebenaran.
