export const personalInfo = {
  name: "Abdul Aziz Hermanto",
  title: "Odoo Programmer & Full-Stack Developer",
  shortAbout: "Berpengalaman dalam pengembangan ekosistem Odoo ERP (v15-v18) dan pengembangan aplikasi web komprehensif menggunakan Laravel dan React. Fokus pada arsitektur sistem yang solid dan penyelesaian masalah bisnis yang efisien.",
};

export const experiences = [
  {
    id: 1,
    role: "Odoo Developer",
    company: "PT. Inamas Sintesis Teknologi",
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
    description: "Sistem manajemen penyewaan alat dan kendaraan yang terintegrasi dengan modul Inventory dan Accounting di Odoo.",
    image: null,
    tags: ["Odoo", "Python", "XML", "PostgreSQL"],
    repoLink: "#",
  },
  {
    id: 2,
    title: "Library Management",
    type: "Web Application",
    description: "Aplikasi manajemen perpustakaan digital untuk memantau sirkulasi peminjaman, pengembalian, dan denda.",
    image: null,
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    repoLink: "#",
  },
  {
    id: 3,
    title: "Inilah My Aisisten",
    type: "AI Platform",
    description: "Platform asisten virtual berbasis kecerdasan buatan untuk membantu operasional administrasi.",
    image: null,
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    repoLink: "#",
  }
];

export const skills = [
  { category: "Backend & ERP", items: ["Odoo (v15-v18)", "Python", "Laravel", "PHP", "PostgreSQL", "MySQL"] },
  { category: "Frontend", items: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"] },
  { category: "Infrastructure & Tools", items: ["Nginx", "Git", "GitHub", "Linux Server"] },
];
