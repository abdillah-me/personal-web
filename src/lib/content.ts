// Hardcoded, statically-typed content for the portfolio.
// Every piece of copy is bilingual (Indonesian / English) via the `L<T>` pair type.

export type Lang = "id" | "en";
export type Theme = "light" | "dark";

/** Supported locales and the default. Used for routing and SEO. */
export const LOCALES: Lang[] = ["id", "en"];
export const DEFAULT_LOCALE: Lang = "id";

/** Narrow an unknown string to a supported locale, falling back to default. */
export function toLocale(value: string | undefined): Lang {
  return value === "en" || value === "id" ? value : DEFAULT_LOCALE;
}

/**
 * Public site URL, used for canonical links, Open Graph, and the sitemap.
 * Override at build/deploy time with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://abdillah.me"
).replace(/\/$/, "");

/** Per-locale SEO copy for <title> and meta description. */
export const SEO: Record<Lang, { title: string; description: string }> = {
  id: {
    title: "Muhammad Abdillah — Software Engineer",
    description:
      "Muhammad Abdillah, software engineer di Jakarta yang membangun aplikasi web untuk industri keuangan. Rasa penasaran, diubah jadi kode.",
  },
  en: {
    title: "Muhammad Abdillah — Software Engineer",
    description:
      "Muhammad Abdillah, a software engineer in Jakarta building web applications for the financial industry. Curiosity, turned into code.",
  },
};

/** A value in both languages. */
export type L<T = string> = { id: T; en: T };

/** Pick the active-language value from an `L<T>`. */
export function pick<T>(v: L<T>, lang: Lang): T {
  return lang === "en" ? v.en : v.id;
}

/* ── Navigation ───────────────────────────────────────────── */
export type NavIcon = "home" | "about" | "work" | "journey" | "contact";

export const NAV: { id: string; label: L; icon: NavIcon }[] = [
  { id: "beranda", label: { id: "Beranda", en: "Home" }, icon: "home" },
  { id: "tentang", label: { id: "Tentang", en: "About" }, icon: "about" },
  { id: "karya", label: { id: "Karya", en: "Work" }, icon: "work" },
  { id: "perjalanan", label: { id: "Perjalanan", en: "Journey" }, icon: "journey" },
  { id: "kontak", label: { id: "Kontak", en: "Contact" }, icon: "contact" },
];

/* ── UI strings ───────────────────────────────────────────── */
export const T = {
  themeAria: { id: "Ganti mode tampilan", en: "Toggle theme" },
  status: {
    id: "Terbuka untuk diskusi dan kolaborasi",
    en: "Open to conversations and collaboration",
  },
  h1a: { id: "Rasa penasaran,", en: "Curiosity," },
  h1b: { id: "diubah jadi kode.", en: "turned into code." },
  intro: {
    id: "Saya Abdillah, software engineer di Jakarta. Perjalanan saya ke dunia IT dimulai dari rasa penasaran yang tidak pernah padam. Kini saya membangun aplikasi web untuk industri keuangan, dan masih belajar setiap hari.",
    en: "I'm Abdillah, a software engineer in Jakarta. My path into tech began with a curiosity that never faded. Today I build web applications for the financial industry, and I'm still learning every day.",
  },
  cv: { id: "Unduh CV", en: "Download CV" },
  sayHi: { id: "Sapa saya", en: "Say hello" },
  cvPdf: { id: "Unduh CV (PDF)", en: "Download CV (PDF)" },
  loc: { id: "Jakarta Selatan, Indonesia", en: "South Jakarta, Indonesia" },
  nowLabel: { id: "Belakangan ini saya sedang…", en: "Lately I've been…" },
  careerLabel: { id: "Perjalanan karier", en: "Career path" },
  now: { id: "kini", en: "now" },
  careerNote: {
    id: "Lumajang, Batam, Pekanbaru, Jakarta. Empat kota, satu arah.",
    en: "Lumajang, Batam, Pekanbaru, Jakarta. Four cities, one direction.",
  },
  dailyLabel: { id: "Keseharian", en: "Day to day" },
  daily: {
    id: "React, TypeScript, Node.js, dan Java Spring Boot.",
    en: "React, TypeScript, Node.js, and Java Spring Boot.",
  },
  dailyNote: {
    id: "Di sela waktu: bereksperimen dengan AI dan otomatisasi.",
    en: "On the side: experimenting with AI and automation.",
  },
  aboutTag: { id: "01 / tentang", en: "01 / about" },
  aboutTitle: {
    id: "Jalan memutar yang ternyata tepat.",
    en: "A detour that turned out right.",
  },
  storyA: {
    id: "Lahir di Padang dan besar di Lumajang, saya jatuh hati pada IT sejak SMA, meski duduk di jurusan IPS. Keterbatasan biaya membuat saya memilih bekerja di Batam, lalu kuliah di Pekanbaru. Saat pandemi merumahkan kampus, satu kalimat menyadarkan saya:",
    en: "Born in Padang and raised in Lumajang, I fell for tech in high school, even though I was on the social studies track. With college out of reach financially, I went to work in Batam, then studied in Pekanbaru. When the pandemic sent students home, one line woke me up:",
  },
  quote: {
    id: "Jangan membunuh mimpi, karena mimpi tak pernah mati. Dia hanya akan pingsan dan bangun lagi ketika kamu sudah tua dalam bentuk penyesalan.",
    en: "Don't kill your dreams, because dreams never die. They only faint, and wake again when you are old, in the form of regret.",
  },
  storyB: {
    id: "Saya kembali belajar IT, bekerja di proyek web pertama, lalu ke Jakarta untuk bootcamp Fullstack JavaScript di Hacktiv8. Kini saya bekerja sebagai software engineer sambil menempuh S1 Teknologi Informasi di BINUS, karena belajar tidak pernah selesai.",
    en: "I went back to learning tech, took on my first web projects, then moved to Jakarta for Hacktiv8's Fullstack JavaScript bootcamp. Today I work as a software engineer while pursuing a bachelor's in Information Technology at BINUS, because learning never really ends.",
  },
  workTag: { id: "02 / karya", en: "02 / work" },
  workTitle: { id: "Hal-hal yang pernah saya bangun.", en: "Things I've built." },
  shot: { id: "tangkapan layar proyek", en: "project screenshot" },
  myRole: { id: "Peran saya:", en: "My role:" },
  journeyTag: { id: "03 / perjalanan", en: "03 / journey" },
  journeyTitle: { id: "Empat kota, empat babak.", en: "Four cities, four chapters." },
  chapter: { id: "Babak", en: "Chapter" },
  kitTag: { id: "04 / bekal", en: "04 / toolkit" },
  kitTitle: {
    id: "Yang saya bawa ke setiap proyek.",
    en: "What I bring to every project.",
  },
  edu: { id: "Pendidikan", en: "Education" },
  langLabel: { id: "Bahasa", en: "Languages" },
  langId: { id: "Bahasa Indonesia", en: "Indonesian" },
  langIdLvl: { id: "Bahasa ibu", en: "Native" },
  langEn: { id: "Bahasa Inggris", en: "English" },
  langEnLvl: {
    id: "Profesional · EF SET B2 Upper Intermediate",
    en: "Professional · EF SET B2 Upper Intermediate",
  },
  certTitle: { id: "Lisensi & sertifikasi", en: "Licenses & certifications" },
  contactTag: { id: "05 / kontak", en: "05 / contact" },
  contactTitle: {
    id: "Punya cerita, ide, atau pertanyaan? Saya senang mendengarnya.",
    en: "Have a story, an idea, or a question? I'd love to hear it.",
  },
  contactNote: {
    id: "Obrolan soal teknologi, perpindahan karier, atau sekadar berkenalan. Semuanya boleh.",
    en: "Tech, career changes, or simply saying hello. All are welcome.",
  },
  footer: {
    id: "Dibuat dengan kopi di Jakarta Selatan",
    en: "Made with coffee in South Jakarta",
  },
} satisfies Record<string, L>;

/* ── "Lately I've been…" rotating lines ───────────────────── */
export const NOW_LIST: L[] = [
  {
    id: "Membangun aplikasi perbankan digital untuk nasabah bisnis.",
    en: "Building digital banking apps for business customers.",
  },
  {
    id: "Mendalami Java Spring Boot untuk sistem skala enterprise.",
    en: "Going deeper into Java Spring Boot for enterprise systems.",
  },
  {
    id: "Menerapkan ilmu dari AI Engineer Bootcamp Ruangguru: Python dan RAG.",
    en: "Applying Ruangguru's AI Engineer Bootcamp: Python and RAG.",
  },
];

/* ── Principles ───────────────────────────────────────────── */
export const PRINCIPLES: { n: string; title: L; desc: L }[] = [
  {
    n: "01",
    title: { id: "Pahami masalahnya dulu", en: "Understand the problem first" },
    desc: {
      id: "Teknologi hanya alat. Saya memulai dari kebutuhan pengguna dan bisnis, baru memilih solusinya.",
      en: "Technology is just a tool. I start from what users and the business need, then choose the solution.",
    },
  },
  {
    n: "02",
    title: { id: "Kode untuk tim berikutnya", en: "Code for the next team" },
    desc: {
      id: "Saya menulis kode yang mudah dibaca dan dirawat, karena aplikasi yang baik hidup lebih lama dari satu sprint.",
      en: "I write code that is easy to read and maintain, because good software outlives a single sprint.",
    },
  },
  {
    n: "03",
    title: { id: "Tidak berhenti belajar", en: "Never stop learning" },
    desc: {
      id: "Dari non-IT ke JavaScript, lalu ke Java dan AI. Rasa penasaran adalah bagian dari pekerjaan saya.",
      en: "From a non-tech start to JavaScript, then Java and AI. Curiosity is part of the job.",
    },
  },
];

/* ── Projects (Karya) ─────────────────────────────────────── */
export type ProjectCategory = "ent" | "web" | "ai";

export const CATEGORY_LABELS: Record<ProjectCategory | "all", L> = {
  all: { id: "Semua", en: "All" },
  ent: { id: "Enterprise", en: "Enterprise" },
  web: { id: "Web", en: "Web" },
  ai: { id: "AI & otomasi", en: "AI & automation" },
};

export interface Project {
  cat: ProjectCategory;
  client: L;
  year: L;
  title: L;
  desc: L;
  role: L;
  points: L<string[]>;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    cat: "ent",
    client: { id: "Industri perbankan", en: "Banking industry" },
    year: { id: "2024–kini", en: "2024–now" },
    title: {
      id: "Platform perbankan digital untuk bisnis",
      en: "Digital banking platform for businesses",
    },
    desc: {
      id: "Aplikasi web yang membantu nasabah bisnis mengelola transaksi dengan lebih mudah.",
      en: "A web app that helps business customers manage transactions with less friction.",
    },
    role: { id: "Software Engineer Specialist", en: "Software Engineer Specialist" },
    points: {
      id: [
        "Membangun antarmuka web yang responsif dan mudah dipahami",
        "Memantau dan menelusuri isu produksi agar layanan tetap stabil",
        "Mulai terlibat di backend untuk memahami alur data dan integrasi sistem",
      ],
      en: [
        "Built responsive, easy-to-understand web interfaces",
        "Monitored and traced production issues to keep the service stable",
        "Started working on the backend to understand data flows and integrations",
      ],
    },
    stack: ["React", "TypeScript", "Java"],
  },
  {
    cat: "ai",
    client: { id: "Proyek pribadi", en: "Personal project" },
    year: { id: "2025", en: "2025" },
    title: {
      id: "Eksperimen otomasi berbasis AI",
      en: "AI-powered automation experiments",
    },
    desc: {
      id: "Mencari cara agar pekerjaan berulang dalam proses bisnis bisa berjalan sendiri.",
      en: "Finding ways for repetitive business tasks to run on their own.",
    },
    role: { id: "Perancang dan pengembang", en: "Designer and developer" },
    points: {
      id: [
        "Merangkai alur kerja yang menghubungkan layanan AI dengan aplikasi sehari-hari",
        "Menulis skrip Python untuk kebutuhan yang tidak tersedia di n8n",
      ],
      en: [
        "Built workflows connecting AI services with everyday apps",
        "Wrote Python scripts for needs n8n could not cover",
      ],
    },
    stack: ["n8n", "Python"],
  },
  {
    cat: "ent",
    client: { id: "Industri pembiayaan", en: "Consumer finance" },
    year: { id: "2025–2026", en: "2025–2026" },
    title: {
      id: "Aplikasi web layanan pembiayaan",
      en: "Web app for financing services",
    },
    desc: {
      id: "Pengalaman pertama saya memegang frontend dan backend sekaligus di perusahaan pembiayaan.",
      en: "My first role owning both frontend and backend at a financing company.",
    },
    role: { id: "Software Engineer Specialist", en: "Software Engineer Specialist" },
    points: {
      id: ["Mengembangkan fitur di sisi antarmuka maupun server"],
      en: ["Developed features on both the interface and the server"],
    },
    stack: ["JavaScript", "Node.js"],
  },
  {
    cat: "web",
    client: { id: "Sprout Digital Labs", en: "Sprout Digital Labs" },
    year: { id: "2023–2024", en: "2023–2024" },
    title: {
      id: "Aplikasi web untuk klien agensi",
      en: "Web apps for agency clients",
    },
    desc: {
      id: "Tempat saya naik dari junior dan belajar memecah masalah teknis yang rumit bersama tim.",
      en: "Where I grew from junior and learned to break down complex technical problems with a team.",
    },
    role: {
      id: "Junior lalu Software Engineer",
      en: "Junior, then Software Engineer",
    },
    points: {
      id: [
        "Mengembangkan aplikasi web untuk berbagai klien",
        "Menyelesaikan tantangan teknis lintas proyek",
      ],
      en: [
        "Developed web applications for a range of clients",
        "Solved technical challenges across projects",
      ],
    },
    stack: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    cat: "web",
    client: { id: "LKP Sahabat Prestasi", en: "LKP Sahabat Prestasi" },
    year: { id: "2020–2022", en: "2020–2022" },
    title: {
      id: "Platform belajar lembaga kursus",
      en: "Learning platform for a course institute",
    },
    desc: {
      id: "Mengelola platform edukasi dan materi multimedia untuk peserta kursus.",
      en: "Managed the education platform and multimedia materials for students.",
    },
    role: { id: "Multimedia Specialist", en: "Multimedia Specialist" },
    points: {
      id: ["Mengelola platform pembelajaran dan kontennya"],
      en: ["Managed the learning platform and its content"],
    },
    stack: ["Web", "Multimedia"],
  },
  {
    cat: "web",
    client: { id: "agori", en: "agori" },
    year: { id: "2021–2022", en: "2021–2022" },
    title: { id: "Situs WordPress untuk klien", en: "WordPress sites for clients" },
    desc: {
      id: "Proyek-proyek awal yang membuat saya jatuh hati pada pengembangan web.",
      en: "Early projects that made me fall for web development.",
    },
    role: { id: "WordPress Developer", en: "WordPress Developer" },
    points: {
      id: ["Membangun dan merawat situs sesuai kebutuhan bisnis klien"],
      en: ["Built and maintained sites around each client's business needs"],
    },
    stack: ["WordPress", "HTML/CSS"],
  },
];

/* ── Journey chapters (Perjalanan) ────────────────────────── */
export interface Role {
  role: L;
  company: string;
  period: L;
  desc: L;
}

export interface Chapter {
  years: L;
  place: string;
  title: L;
  note: L;
  roles: Role[];
}

export const CHAPTERS: Chapter[] = [
  {
    years: { id: "s.d. 2017", en: "to 2017" },
    place: "Lumajang",
    title: { id: "Awal rasa penasaran", en: "Where curiosity began" },
    note: {
      id: "Lahir di Padang, Sumatera Barat, saya tumbuh besar dan menamatkan SD, SMP, hingga SMA di Kabupaten Lumajang, Jawa Timur. Di SMA saya mulai jatuh hati pada dunia IT, meski saat itu saya duduk di jurusan IPS.",
      en: "Born in Padang, West Sumatra, I grew up and finished elementary through high school in Lumajang, East Java. In high school I fell for tech, even though I was on the social studies track.",
    },
    roles: [
      {
        role: { id: "Siswa jurusan IPS", en: "Social studies student" },
        company: "SMA 2 Lumajang",
        period: { id: "Lulus 2017", en: "Graduated 2017" },
        desc: {
          id: "Pertama kali mengenal dan menyukai IT. Kuliah belum memungkinkan karena keterbatasan biaya, jadi saya memilih langsung bekerja.",
          en: "First discovered tech. College was not yet affordable, so I went straight to work.",
        },
      },
    ],
  },
  {
    years: { id: "2017 – 2019", en: "2017 – 2019" },
    place: "Batam",
    title: { id: "Bekerja selepas SMA", en: "Working after high school" },
    note: {
      id: "Selepas SMA saya merantau ke Batam. Di sana saya belajar cara bisnis berjalan dari dekat.",
      en: "After high school I moved to Batam, where I saw up close how a business runs.",
    },
    roles: [
      {
        role: { id: "Tax Accountant", en: "Tax Accountant" },
        company: "PT. Trio Infotek Batam",
        period: { id: "Jan 2018 – Mei 2019", en: "Jan 2018 – May 2019" },
        desc: {
          id: "Menangani administrasi keuangan perusahaan.",
          en: "Handled company financial administration.",
        },
      },
      {
        role: { id: "Office Administrator", en: "Office Administrator" },
        company: "CV Hanna Filia Pilindo",
        period: { id: "Sep 2017 – Mei 2019", en: "Sep 2017 – May 2019" },
        desc: {
          id: "Mengelola administrasi operasional kantor.",
          en: "Managed day-to-day office administration.",
        },
      },
    ],
  },
  {
    years: { id: "2019 – 2022", en: "2019 – 2022" },
    place: "Pekanbaru",
    title: {
      id: "Kuliah, pandemi, dan kembali ke IT",
      en: "College, the pandemic, and back to tech",
    },
    note: {
      id: "Saya pindah ke Pekanbaru untuk kuliah D3 Akuntansi di Universitas Riau. Sembilan bulan kemudian pandemi datang dan perkuliahan berpindah ke rumah. Waktu itu saya gunakan untuk membangunkan kembali mimpi lama: belajar IT. Dari sana datang kepercayaan untuk bekerja di bidang teknologi.",
      en: "I moved to Pekanbaru for a diploma at Universitas Riau. Nine months in, the pandemic moved classes home. I used that time to wake an old dream: learning tech. That led to my first jobs in the field.",
    },
    roles: [
      {
        role: { id: "Mahasiswa D3 Akuntansi", en: "Diploma student, Accounting" },
        company: "Universitas Riau",
        period: { id: "2019 – 2022", en: "2019 – 2022" },
        desc: {
          id: "Menyelesaikan kuliah sambil bekerja.",
          en: "Finished my studies while working.",
        },
      },
      {
        role: { id: "Multimedia Specialist", en: "Multimedia Specialist" },
        company: "CV. LKP Sahabat Prestasi",
        period: { id: "Jan 2020 – Des 2022", en: "Jan 2020 – Dec 2022" },
        desc: {
          id: "Mengelola platform edukasi dan materi pembelajaran.",
          en: "Managed the education platform and learning materials.",
        },
      },
      {
        role: { id: "WordPress Developer", en: "WordPress Developer" },
        company: "agori",
        period: { id: "Agu 2021 – Des 2022", en: "Aug 2021 – Dec 2022" },
        desc: {
          id: "Menyelesaikan kebutuhan klien dengan solusi berbasis web.",
          en: "Solved client needs with web-based solutions.",
        },
      },
      {
        role: { id: "Web Developer", en: "Web Developer" },
        company: "Kebizz",
        period: { id: "Okt 2021 – Mar 2022", en: "Oct 2021 – Mar 2022" },
        desc: {
          id: "Pengembangan situs dan aplikasi web.",
          en: "Built websites and web apps.",
        },
      },
    ],
  },
  {
    years: { id: "2023 – kini", en: "2023 – now" },
    place: "Jakarta",
    title: { id: "Menjadi software engineer", en: "Becoming a software engineer" },
    note: {
      id: "Setelah lulus D3, saya sadar butuh bekal yang diakui industri. Saya berangkat ke Jakarta untuk mengikuti bootcamp Fullstack JavaScript di Hacktiv8. Dari sanalah karier saya sebagai software engineer benar-benar dimulai.",
      en: "After graduating, I knew I needed credentials the industry would recognize. I moved to Jakarta for the Fullstack JavaScript bootcamp at Hacktiv8, and that is where my career as a software engineer truly began.",
    },
    roles: [
      {
        role: {
          id: "Mahasiswa S1 Teknologi Informasi",
          en: "Bachelor's student, Information Technology",
        },
        company: "BINUS University",
        period: { id: "Sedang berjalan", en: "Ongoing" },
        desc: {
          id: "Kuliah sambil bekerja untuk memperdalam dasar ilmu komputer.",
          en: "Studying while working to strengthen my computer science foundations.",
        },
      },
      {
        role: { id: "Software Engineer Specialist", en: "Software Engineer Specialist" },
        company: "CIMB Niaga",
        period: { id: "Mei 2026 – kini", en: "May 2026 – now" },
        desc: {
          id: "Pengembangan aplikasi web perbankan digital.",
          en: "Developing digital banking web applications.",
        },
      },
      {
        role: { id: "Software Engineer Specialist", en: "Software Engineer Specialist" },
        company: "Home Credit Indonesia",
        period: { id: "Sep 2025 – Mei 2026", en: "Sep 2025 – May 2026" },
        desc: {
          id: "Pengembangan aplikasi web di sisi frontend dan backend.",
          en: "Web application development across frontend and backend.",
        },
      },
      {
        role: { id: "Software Engineer", en: "Software Engineer" },
        company: "CIMB Niaga",
        period: { id: "Jul 2024 – Agu 2025", en: "Jul 2024 – Aug 2025" },
        desc: {
          id: "Ditempatkan melalui konsultan TI untuk pengembangan aplikasi web.",
          en: "Placed through an IT consultancy for web application development.",
        },
      },
      {
        role: { id: "Software Engineer", en: "Software Engineer" },
        company: "Sprout Digital Labs",
        period: { id: "Jun 2023 – Jul 2024", en: "Jun 2023 – Jul 2024" },
        desc: {
          id: "Memulai sebagai Junior Software Engineer, lalu dipercaya menangani tantangan teknis yang lebih kompleks.",
          en: "Started as a Junior Software Engineer and grew into more complex technical work.",
        },
      },
      {
        role: {
          id: "Peserta FullStack JavaScript Immersive",
          en: "FullStack JavaScript Immersive participant",
        },
        company: "Hacktiv8 Indonesia",
        period: { id: "Lulus Mei 2023", en: "Graduated May 2023" },
        desc: {
          id: "Bootcamp intensif yang menjadi pintu masuk saya ke industri.",
          en: "The intensive bootcamp that opened the door to the industry.",
        },
      },
    ],
  },
];

/* ── Toolkit: tech stack ──────────────────────────────────── */
export const STACK: { label: L; items: string[] }[] = [
  {
    label: { id: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Redux", "Tailwind CSS", "React Native"],
  },
  {
    label: { id: "Backend", en: "Backend" },
    items: ["Node.js", "Express.js", "Java", "Spring Boot", "REST API", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: { id: "AI & otomasi", en: "AI & automation" },
    items: ["Python", "LLM", "RAG", "FastAPI", "Hugging Face", "n8n"],
  },
  {
    label: { id: "Tools & cloud", en: "Tools & cloud" },
    items: ["Git", "Bitbucket", "AWS", "Firebase", "Figma"],
  },
];

/* ── Education ────────────────────────────────────────────── */
export const EDUCATION: { school: string; field: L }[] = [
  {
    school: "BINUS University",
    field: {
      id: "S1 Teknologi Informasi · sedang berjalan",
      en: "Bachelor's, Information Technology · ongoing",
    },
  },
  {
    school: "Universitas Riau",
    field: { id: "D3 Akuntansi", en: "Diploma, Accounting" },
  },
  {
    school: "Hacktiv8 Indonesia",
    field: { id: "FullStack JavaScript Immersive", en: "FullStack JavaScript Immersive" },
  },
  {
    school: "SMA 2 Lumajang",
    field: { id: "Ilmu Pengetahuan Sosial", en: "Social Studies" },
  },
];

/* ── Languages spoken ─────────────────────────────────────── */
// Rendered inline in the Toolkit section via T.langId/langEn.

/* ── Certifications ───────────────────────────────────────── */
export type CertCategory = "bootcamp" | "tech" | "other";

export const CERT_LABELS: Record<CertCategory | "all", L> = {
  all: { id: "Semua", en: "All" },
  bootcamp: { id: "Bootcamp", en: "Bootcamp" },
  tech: { id: "Teknologi", en: "Technology" },
  other: { id: "Lainnya", en: "Other" },
};

export interface Cert {
  cat: CertCategory;
  name: string;
  issuer: string;
  date: L;
}

export const CERTS: Cert[] = [
  { cat: "bootcamp", name: "AI Engineer Bootcamp", issuer: "Ruangguru", date: { id: "Sep 2026", en: "Sep 2026" } },
  { cat: "bootcamp", name: "FullStack JavaScript Immersive", issuer: "Hacktiv8 Indonesia", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "bootcamp", name: "Frontend Bootcamp", issuer: "Binar Academy", date: { id: "", en: "" } },
  { cat: "other", name: "EF English Certificate (B2 Upper Intermediate)", issuer: "EF SET", date: { id: "Feb 2025", en: "Feb 2025" } },
  { cat: "tech", name: "TypeScript Essential Training", issuer: "LinkedIn", date: { id: "Agu 2024", en: "Aug 2024" } },
  { cat: "tech", name: "Using Python for Automation", issuer: "LinkedIn", date: { id: "Agu 2024", en: "Aug 2024" } },
  { cat: "tech", name: "PostgreSQL Essential Training", issuer: "LinkedIn", date: { id: "Agu 2024", en: "Aug 2024" } },
  { cat: "tech", name: "Learning Next.js (2022)", issuer: "LinkedIn", date: { id: "Agu 2024", en: "Aug 2024" } },
  { cat: "tech", name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "React (Basic) Certificate", issuer: "HackerRank", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "Node (Basic) Certificate", issuer: "HackerRank", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "SQL (Intermediate) Certificate", issuer: "HackerRank", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "SQL (Basic) Certificate", issuer: "HackerRank", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "JavaScript (Basic) Certificate", issuer: "HackerRank", date: { id: "Mei 2023", en: "May 2023" } },
  { cat: "tech", name: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", date: { id: "Sep 2022", en: "Sep 2022" } },
  { cat: "other", name: "Certified Tax Technician", issuer: "Asosiasi Teknisi Perpajakan Indonesia (ATPI)", date: { id: "Mar 2022", en: "Mar 2022" } },
  { cat: "other", name: "Certified Accurate Profesional", issuer: "PT Cipta Piranti Sejahtera (CPSSoft)", date: { id: "Jun 2021", en: "Jun 2021" } },
  { cat: "other", name: "Brevet Pajak A & B", issuer: "LKP Sahabat Prestasi", date: { id: "Nov 2020", en: "Nov 2020" } },
];

export const certCount = (n: number): L => ({
  id: `${n} sertifikat dari bootcamp, kursus, dan asosiasi profesi`,
  en: `${n} certificates from bootcamps, courses, and professional bodies`,
});

/* ── Contact & profile constants ──────────────────────────── */
export const PROFILE = {
  name: "Muhammad Abdillah",
  role: "software engineer",
  email: "muh8abdillah@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdillah-me",
  instagram: "https://instagram.com/abdillah.me",
  instagramHandle: "@abdillah.me",
  cvUrl: "/CV-Muhammad-Abdillah.pdf",
  photo: "/profile.jpg",
  careerStart: "2017",
};
