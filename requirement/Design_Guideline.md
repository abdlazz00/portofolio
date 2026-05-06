# Design Guideline: Portofolio Minimalis & Profesional

## 1. Filosofi Desain
**"Code as Craft"** - Desain harus mencerminkan cara penulisan kode yang bersih (*clean code*). Hindari animasi berlebihan, gunakan banyak *white space* (ruang kosong) agar mata tidak lelah, dan buat hierarki informasi yang sangat jelas.

## 2. Palet Warna (Color Palette)
Warna dipilih untuk memancarkan kepercayaan, profesionalisme korporat (ERP), dan teknologi modern.

- **Primary (Dominan):** `#1e3a8a` (Navy Blue) - Merepresentasikan stabilitas, ekosistem ERP/Odoo.
- **Background (Utama):** `#ffffff` (Clean White) - Latar belakang utama untuk bagian konten.
- **Background (Sekunder):** `#f8fafc` (Slate 50) - Latar belakang alternatif untuk membedakan *section* (misalnya bagian *Experience*).
- **Text (Heading):** `#0f172a` (Slate 900) - Hitam pekat kebiruan untuk judul.
- **Text (Body):** `#475569` (Slate 600) - Abu-abu gelap untuk paragraf agar nyaman dibaca.
- **Accent (Highlight):** `#3b82f6` (Blue 500) - Untuk elemen interaktif (tombol hover, tautan teks).

## 3. Tipografi (Typography)
- **Font Family Utama:** `Inter`, `Roboto`, atau sistem *sans-serif* bawaan (`Segoe UI`, `San Francisco`).
- **Heading (H1, H2, H3):** *Font weight* Bold (700) atau Semi-Bold (600), *letter-spacing* agak rapat (tight).
- **Body Text:** *Font weight* Regular (400), *line-height* santai (1.6) untuk *readability* optimal.

## 4. Gaya Komponen (Component Styles)

### A. Tombol (Buttons)
- **Primary Button:** Latar belakang Navy Blue (`bg-blue-900`), teks putih, sudut agak membulat (`rounded-md`). Saat di-*hover*, warna sedikit lebih terang.
- **Secondary / Outline Button:** Latar belakang transparan, garis pinggir Navy Blue (`border border-blue-900`), teks Navy Blue. Digunakan untuk opsi sekunder seperti "Lihat Repositori".

### B. Kartu Proyek (Project Cards)
- **Container:** Latar belakang putih (`bg-white`), sudut membulat (`rounded-lg`), batas luar tipis (`border border-slate-200`).
- **Shadow:** Bayangan sangat halus (`shadow-sm`) yang membesar sedikit saat di-*hover* (`hover:shadow-md`) untuk indikasi interaktivitas.
- **Tech Tags (Pills):** Latar abu-abu sangat terang (`bg-slate-100`), teks abu-abu gelap, ukuran font kecil (`text-xs`), membulat penuh (`rounded-full`).

### C. About Me Section
- Harus didesain dalam blok yang *clean* dan ringkas. Gunakan satu paragraf utama dengan *font size* sedikit lebih besar (`text-lg`) agar langsung menarik perhatian tanpa perlu teks berparagraf-paragraf panjang.

## 5. Tata Letak & Spasi (Layout & Spacing)
- **Grid System:** Gunakan kelipatan 8px (misal: `p-4` untuk 16px, `mt-8` untuk 32px) bawaan Tailwind untuk menjaga konsistensi proporsi.
- **Mobile First:** Pastikan semua bagian (`navbar`, `grid` kartu proyek) dirancang bertumpuk (*stack vertically*) di layar *mobile*, dan melebar menjadi 2 atau 3 kolom di layar *desktop*.
