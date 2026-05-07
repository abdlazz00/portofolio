export const personalInfo = {
  name: "Abdul Aziz Hermanto",
  title: "Odoo Programmer & Full-Stack Developer",
  shortAbout: "Berpengalaman dalam pengembangan ekosistem Odoo ERP (v15-v18) dan pengembangan aplikasi web komprehensif menggunakan Laravel dan React. Fokus pada arsitektur sistem yang solid dan penyelesaian masalah bisnis yang efisien.",
};

export const experiences = [
  {
    id: 1,
    role: "Odoo Developer",
    company: "Central Group",
    period: "2023 - Sekarang",
    description: [
    "Merancang dan mengeksekusi kustomisasi modul inti Odoo (Purchase, CRM, Sales, HRM, Accounting) menggunakan Python dan XML agar presisi dengan alur bisnis perusahaan.",
    "Mengelola arsitektur data dan melakukan optimalisasi pada database PostgreSQL untuk menjaga performa sistem ERP.",
    "Berkolaborasi menangani deployment modul kustom, pembaruan sistem (patching), dan integrasi API dengan layanan pihak ketiga.",
    "Menyelesaikan masalah (troubleshooting) secara cepat dan menyusun dokumentasi teknis yang komprehensif untuk memudahkan end-user."
  ],
  },
  // {
  //   id: 2,
  //   role: "Full-Stack Web Developer",
  //   company: "Freelance",
  //   period: "2020 - 2022",
  //   description: "Membangun berbagai aplikasi berbasis web (SPA) menggunakan Laravel dan React, memastikan antarmuka yang interaktif, responsif, serta API yang tangguh.",
  // }
];

export const projects = [
  {
    id: 1,
    title: "Rent Management System",
    type: "Odoo Custom Module",
    description: "Sistem manajemen penyewaan kendaraan berbasis Odoo ERP untuk mendigitalisasi operasional bisnis rental. Mengelola armada secara real-time, siklus pemesanan, dokumen jaminan, dan pembayaran. Dilengkapi pencatatan pemeliharaan dan dashboard analitik interaktif (OWL & Chart.js) untuk memantau performa finansial.",
    icon: "car",
    tags: ["Odoo", "Python", "XML", "PostgreSQL", "JavaScript"],
    repoLink: "https://github.com/abdlazz00/Rent-management.git",
  },
  {
    id: 2,
    title: "Library Management",
    type: "Odoo Custom Module",
    description: "Sistem manajemen perpustakaan digital berbasis Odoo ERP untuk menyederhanakan alur sirkulasi literatur. Mengelola katalog buku secara terpusat serta melacak proses peminjaman dan tenggat waktu pengembalian. Dilengkapi fitur kalkulasi denda otomatis dan pembatasan hak akses antara anggota dan staf pengelola.",
    icon: "library",
    tags: ["Odoo", "Python", "XML", "PostgreSQL"],
    repoLink: "https://github.com/abdlazz00/Rent-management.git",
  },
  {
    id: 3,
    title: "Inilah My Aisisten",
    type: "Web Application + AI Platform",
    description: "Platform asisten virtual berbasis kecerdasan buatan untuk membantu operasional administrasi.",
    icon: "bot",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    repoLink: "https://github.com/abdlazz00/inilah-my-aisisten.git",
  }
];

export const skills = [
  { category: "Backend & ERP", items: ["Odoo (v15-v18)", "Python", "Laravel", "PHP", "PostgreSQL", "MySQL"] },
  { category: "Frontend", items: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"] },
  { category: "Infrastructure & Tools", items: ["Nginx", "Git", "GitHub", "Linux Server"] },
];
