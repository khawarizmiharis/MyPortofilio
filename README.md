# Portfolio Website — Frontend

Website portofolio developer, dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa build step).

## Struktur Folder

```
portfolio-website/
├── index.html          # Halaman utama (semua section: hero, about, skills, projects, dll)
├── css/
│   └── style.css       # Semua styling + design tokens (warna, font, spacing)
├── js/
│   └── script.js       # Interaktivitas: menu mobile, efek mengetik, form, scroll reveal
├── assets/
│   └── images/         # Taruh foto profil & screenshot proyek di sini
└── README.md
```

## Cara Menjalankan

Karena tidak ada build step, cukup buka `index.html` langsung di browser. Atau, untuk local server (disarankan agar path relatif berjalan mulus):

```bash
# Dengan Python
python3 -m http.server 8000

# Dengan Node (npx)
npx serve .
```

Lalu buka `http://localhost:8000`.

## Yang Perlu Diedit

1. **Nama & bio** — ganti "Rangga Pratama" dan teks bio di `index.html` (section `#home` dan `#about`).
2. **Foto/gambar proyek** — ganti `background: linear-gradient(...)` pada `.project-card__media` dengan gambar asli. Taruh file gambar di `assets/images/` lalu ubah ke:
   ```html
   <img src="assets/images/nama-proyek.jpg" alt="Screenshot proyek" class="project-card__media" />
   ```
3. **Link sosial media & email** — di section `#contact`, ganti `href="mailto:..."`, GitHub, dan LinkedIn dengan milik kamu.
4. **Form kontak** — saat ini form hanya berjalan di sisi frontend (belum terkirim ke mana pun). Untuk membuat form benar-benar mengirim pesan, sambungkan ke:
   - Backend/API sendiri, atau
   - Layanan pihak ketiga seperti [Formspree](https://formspree.io) atau [EmailJS](https://www.emailjs.com) (tidak perlu backend sendiri).
5. **Resume/CV** — link "resume → download.pdf" di section contact, arahkan ke file PDF CV kamu.

## Desain

- **Warna** — palet minimalis (`#FAFAF9` background, aksen biru `#2D5BFF`), didefinisikan sebagai CSS variables di `:root` pada `style.css` supaya mudah diubah.
- **Font** — Space Grotesk (judul), Inter (body), JetBrains Mono (label & kode) — dimuat dari Google Fonts.
- **Motif** — label section bergaya command line (`$ about`, `$ projects`) sebagai identitas visual developer.
- Responsif penuh sampai ukuran mobile, dan menghormati preferensi `prefers-reduced-motion`.
