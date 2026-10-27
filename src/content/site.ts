export const profile = {
  name: "Ahmet Kurt",
  role: "Full-Stack Developer",
  location: "İstanbul",
  email: "ahmetkurtk2@gmail.com",
  phone: "+90 551 106 52 27",
  github: "https://github.com/ahmetkurtbm",
  linkedin: "https://www.linkedin.com/in/ahmet-kurt-bm/",
  cv: "/cv.pdf",
  summary:
    "Bilgisayar mühendisiyim. React, Next.js, TypeScript ve .NET Web API ile kurumsal bankacılık uygulamaları geliştirdim; kişisel projelerimde çok kiracılı SaaS sistemleri, kimlik doğrulama ve veri yoğun araçlar üzerinde çalışıyorum.",
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  demo: string | null;
  source: string;
};

export const projects: Project[] = [
  {
    title: "GastroFlow",
    category: "Restoran yönetim sistemi",
    description:
      "Çok kiracılı ve rol bazlı restoran yönetimi: QR menüden sipariş, offline çalışabilen POS, mutfak ekranı, reçeteye göre stok düşümü ve satın alma. Erişim kontrolü veritabanında Row Level Security ile zorunlu.",
    tags: ["Next.js", "PostgreSQL", "RLS", "Docker", "PWA"],
    demo: "https://gastroflow-pied.vercel.app/",
    source: "https://github.com/ahmetkurtbm/gastroflow",
  },
  {
    title: "TestMetrix",
    category: "Sınav madde analizi",
    description:
      "Öğretmenler için Excel'den yüklenen cevaplarla madde güçlüğü, ayırt edicilik, KR-20/KR-21 güvenirlik ve çeldirici analizi yapan; Excel ve PDF rapor üreten uygulama.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    demo: "https://testmetrix.vercel.app/",
    source: "https://github.com/ahmetkurtbm/testmetrix",
  },
  {
    title: "ReceiptFlow",
    category: "Fiş ve fatura okuma",
    description:
      "Fiş ve fatura görsellerini yapay zekâ ile okuyup alanları düzenlenebilir hâle getiren ve kayıtları tek yerde toplayan finans asistanı.",
    tags: ["Next.js", "AI", "OCR", "PostgreSQL"],
    demo: "https://receiptflow-eta.vercel.app/",
    source: "https://github.com/ahmetkurtbm/receiptflow",
  },
  {
    title: "GateHub",
    category: "Merkezi kimlik doğrulama (SSO)",
    description:
      "Birden fazla uygulama için ortak giriş, OAuth istemci yönetimi, onay ekranı ve güvenli oturum akışı sunan SSO platformu.",
    tags: ["Next.js", "OAuth 2.1", "OpenID Connect"],
    demo: "https://gatehub-orcin.vercel.app/",
    source: "https://github.com/ahmetkurtbm/gatehub",
  },
  {
    title: "Diyetgo",
    category: "Diyetisyen paneli",
    description:
      "Danışan, ölçüm, besin, beslenme planı, randevu ve hedef yönetimi. Demo tarayıcıda çalışır; yerelde Express ve PostgreSQL API'siyle aynı arayüz kullanılır.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
    demo: "https://diyetgo-kappa.vercel.app/",
    source: "https://github.com/ahmetkurtbm/diyetgo",
  },
  {
    title: "Question to Test",
    category: "Soru bankası ve test üretimi",
    description:
      "Fotoğraf ve PDF'ten soru bankası oluşturup istenen konu ve zorluk karışımında test PDF'i üreten uygulama. Girişler GateHub SSO ile korunur.",
    tags: ["Next.js", "NextAuth", "PostgreSQL", "Vercel Blob"],
    demo: "https://tahsinaslanf.vercel.app/",
    source: "https://github.com/ahmetkurtbm/questiontotest",
  },
  {
    title: "Kids Academy",
    category: "Eğitim kurumu portalı",
    description:
      "Yönetim panelinden duyuru, etkinlik ve sınav yönetimi; velilerin çocuklarının sınav sonuçlarını takip ettiği veli portalı.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    demo: "https://kids-academy-phi.vercel.app/",
    source: "https://github.com/ahmetkurtbm/kidsacademy",
  },
];

export const experience = [
  {
    period: "Nis 2025 — Tem 2026",
    role: "Software Developer",
    company: "Sinergy IT",
    points: [
      "React, TypeScript ve .NET Web API ile kurumsal bankacılık web uygulamaları geliştirdim ve bakımını yaptım.",
      "Frontend ile backend arasındaki iletişim için RESTful API'ler tasarlayıp entegre ettim.",
      "PostgreSQL ve Microsoft SQL Server ile veri modelleme, sorgu ve veri işlemleri yaptım.",
      "Uygulama sağlığını ve performansını Prometheus ve Grafana ile izledim.",
      "Nisan–Temmuz 2026 arasında Vakıf Katılım'da müşteri tarafında görev aldım.",
    ],
  },
  {
    period: "Tem 2024 — Oca 2025",
    role: "Software Developer Stajyeri",
    company: "İstanalytics",
    points: [
      "React, Next.js ve TypeScript ile yeniden kullanılabilir, duyarlı arayüz bileşenleri geliştirdim.",
      ".NET Web API ile PostgreSQL ve Microsoft SQL Server üzerinde çalışan REST API'ler geliştirdim.",
      "Rol bazlı yetkilendirme (RBAC) ile kullanıcı yönetimi ve Excel yükleme/işleme özellikleri geliştirdim.",
    ],
  },
  {
    period: "Tem 2023 — Ağu 2023",
    role: "Backend Developer Stajyeri",
    company: "ArtPro Teknoloji",
    points: [
      "Spring Boot, Spring Data JPA ve PostgreSQL ile RESTful API'ler geliştirdim.",
      "Excel dosyası yükleme ve işleme özelliği geliştirdim.",
    ],
  },
];

export const education = {
  degree: "Bilgisayar Mühendisliği (Lisans)",
  school: "Marmara Üniversitesi",
  period: "Eki 2021 — Haz 2025",
  languages: "Türkçe (ana dil) · İngilizce (B1)",
};

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Backend ve API", items: ["Node.js", "Express", ".NET Web API", "Spring Boot", "REST", "OAuth 2.1 / OIDC"] },
  { group: "Veritabanı", items: ["PostgreSQL", "Microsoft SQL Server", "Prisma", "Supabase", "Row Level Security"] },
  { group: "Araçlar ve izleme", items: ["Docker", "Git", "Prometheus", "Grafana", "Playwright", "Agile / Scrum"] },
];
