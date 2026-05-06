# Blueprint Arsitektur Portofolio React JS

Dokumen ini adalah *blueprint* komprehensif untuk struktur folder, komponen, dan pengelolaan aset pada website portofolio Abdul Aziz Hermanto.

## 1. Struktur Folder (Direktori)
Kita akan memisahkan komponen, data, dan aset (termasuk foto) agar rapi dan mudah di-*scale*.

```text
/src
|-- /assets
|   |-- /images          <-- Folder khusus foto/gambar
|   |   |-- profile.png
|   |   |-- project-rent.png
|   |   |-- project-library.png
|   |   |-- project-aisisten.png
|   |-- /icons           <-- (Opsional) SVG custom jika tidak pakai Lucide
|
|-- /components          <-- Reusable UI Components
|   |-- /ui              <-- Komponen kecil (Button, Card, Badge)
|   |-- Navbar.jsx
|   |-- Footer.jsx
|
|-- /sections            <-- Main Page Sections
|   |-- Hero.jsx
|   |-- About.jsx
|   |-- Experience.jsx
|   |-- Projects.jsx
|   |-- Skills.jsx
|
|-- /data
|   |-- portfolioData.js <-- Single source of truth untuk teks & konten
|
|-- App.jsx              <-- Root component
|-- index.css            <-- Global CSS & Tailwind directives
|-- main.jsx             <-- React DOM entry point
```

## 2. Rencana Penggunaan Aset (Foto)
Folder `/assets/images` akan diakses oleh file `portfolioData.js`. 

**Contoh Mapping di `portfolioData.js`:**
```javascript
import rentImg from '../assets/images/project-rent.png';
import libraryImg from '../assets/images/project-library.png';
import aisistenImg from '../assets/images/project-aisisten.png';

export const projects = [
  {
    title: "Rent Management System",
    image: rentImg, // <-- Foto dipanggil di sini
    type: "Odoo Custom Module",
    // ... detail lainnya
  }
];
```

## 3. Rincian Komponen (Component Tree)
*   **`<App />`**: Mengimpor semua komponen *section* secara berurutan dan membungkusnya dalam kontainer utama.
*   **`<Navbar />`**: Memiliki menu navigasi *anchor* (`#experience`, `#projects`) yang akan *scroll* mulus (*smooth scroll*) ke bagian yang dituju.
*   **`<Hero />`**: Menampilkan foto profil utama (`/assets/images/profile.png`) di satu sisi, dan teks perkenalan (Odoo Programmer & Full-Stack Developer) di sisi lain.
*   **`<Experience />`**: Melakukan pemetaan (`map`) dari array data pengalaman untuk membuat struktur *timeline* vertikal.
*   **`<Projects />`**: Merender komponen `<ProjectCard />` yang menerima *props* berupa data proyek (termasuk foto *thumbnail*).

## 4. Konfigurasi Tailwind CSS
Pastikan file `tailwind.config.js` diatur untuk membaca semua file dalam folder `/src`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Contoh: Odoo/Navy Blue
        secondary: "#f8fafc",
      }
    },
  },
  plugins: [],
}
```
