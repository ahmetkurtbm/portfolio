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
  slug: string;
  title: string;
  category: string;
  /** Tek cümle: kimin hangi sorununu çözüyor. */
  problem: string;
  /** Yapılan işin somut, ölçülebilir parçaları. */
  highlights: string[];
  tags: string[];
  /** public/projects altındaki ekran görüntüsü. */
  image: string;
  demo: string | null;
  source: string;
  /** Kartın üstünde vurgulanan durum etiketi. */
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "kidsacademy",
    title: "Kids Academy",
    category: "Eğitim kurumu portalı",
    problem:
      "Bir eğitim kurumunun deneme sonuçlarını velilere tek tek mesajla göndermek yerine, her velinin kendi panelinden takip etmesini sağlıyor.",
    highlights: [
      "Sınıfın tamamı için tek ekranda deneme girişi; boş ve net otomatik hesaplanır",
      "Veliye özel panel, gelişim grafiği ve WhatsApp bildirimi",
      "Kurum sahibi ve personel rolleriyle kişisel yönetici hesapları, KVKK metni, şifreli aylık yedek",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Vitest"],
    image: "/projects/kidsacademy.png",
    demo: "https://kids-academy-phi.vercel.app/",
    source: "https://github.com/ahmetkurtbm/kidsacademy",
    badge: "Gerçek bir kurumda kullanılıyor",
  },
  {
    slug: "questiontotest",
    title: "QuestionToTest",
    category: "Yapay zekâ ile soru bankası",
    problem:
      "Öğretmenlerin PDF'lerden soru kesip yaprak test hazırlamasını üç adıma indiriyor: PDF'i aç, soruları yapay zekâya buldur, kontrol edip kaydet.",
    highlights: [
      "Gemini sayfadaki soruları bulur, kırpar; konu, zorluk ve cevap önerir",
      "Konu ve zorluk karışımıyla, cevap anahtarı ve çözümleri içeren test PDF'i",
      "Vercel'de veritabanısız demo (PGlite), yerelde PostgreSQL",
    ],
    tags: ["Next.js", "Gemini", "PostgreSQL", "react-pdf"],
    image: "/projects/questiontotest.png",
    demo: "https://questiontotest.vercel.app/",
    source: "https://github.com/ahmetkurtbm/questiontotest",
    badge: "Yapay zekâ",
  },
  {
    slug: "testmetrix",
    title: "TestMetrix",
    category: "Sınav madde analizi",
    problem:
      "Öğretmenlerin hangi sorunun işe yaramadığını, cevap anahtarında hata olup olmadığını ve çeldiricilerin çalışıp çalışmadığını görmesini sağlıyor.",
    highlights: [
      "Güçlük, ayırt edicilik, KR-20/KR-21 güvenirlik ve çeldirici analizi",
      "Sorunlu maddeleri önem sırasıyla gösteren rapor ve madde haritası",
      "Excel ve grafikli PDF raporları; 2025'ten beri geliştiriliyor",
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    image: "/projects/testmetrix.png",
    demo: "https://testmetrix.vercel.app/",
    source: "https://github.com/ahmetkurtbm/testmetrix",
  },
  {
    slug: "gastroflow",
    title: "GastroFlow",
    category: "Restoran yönetim sistemi",
    problem:
      "Sipariş, mutfak, kasa ve stok için ayrı araçlar kullanan restoranları tek sisteme topluyor; her satış reçeteye göre stoktan düşüyor.",
    highlights: [
      "Çok kiracılı yapı; kiracı izolasyonu PostgreSQL Row Level Security ile veritabanında",
      "QR menü, POS, mutfak ekranı, kasa, satın alma ve denetim kaydı",
      "Bağlantı kopsa da sipariş kaybolmayan offline kuyruk, PWA",
    ],
    tags: ["Next.js", "PostgreSQL", "RLS", "PGlite", "Playwright"],
    image: "/projects/gastroflow.png",
    demo: "https://gastroflow-pied.vercel.app/",
    source: "https://github.com/ahmetkurtbm/gastroflow",
  },
  {
    slug: "diyetgo",
    title: "Diyetgo",
    category: "Diyetisyen paneli",
    problem:
      "Diyetisyenlerin danışan, ölçüm, beslenme planı ve randevularını tek yerde yönetmesini; plan yazarken kaloriyi canlı görmesini sağlıyor.",
    highlights: [
      "Serbest metinden (\"8 yemek kaşığı pilav\") besin ve gram çıkarımı",
      "Aynı test senaryoları tarayıcı demosuna ve gerçek API'ye karşı çalışır",
      "Telefona kurulabilen PWA, çevrimdışı açılış",
    ],
    tags: ["React", "Express", "PostgreSQL", "Drizzle"],
    image: "/projects/diyetgo.png",
    demo: "https://diyetgo-kappa.vercel.app/",
    source: "https://github.com/ahmetkurtbm/diyetgo",
  },
  {
    slug: "receiptflow",
    title: "ReceiptFlow",
    category: "Fiş ve fatura okuma",
    problem: "Fiş ve faturaları yapay zekâyla okuyup muhasebe alanlarına ayırıyor; hesap açmadan tarayıcıda çalışıyor.",
    highlights: [
      "Belgeye göre dinamik alanlar: KDV kırılımı, ürün satırları, masraf türü",
      "Toplu yükleme, düzenlenebilir sonuçlar, JSON dışa aktarma",
    ],
    tags: ["Next.js", "Gemini", "TypeScript"],
    image: "/projects/receiptflow.png",
    demo: "https://receiptflow-ahmetkurt.vercel.app/",
    source: "https://github.com/ahmetkurtbm/receiptflow",
  },
  {
    slug: "gatehub",
    title: "GateHub",
    category: "Merkezi kimlik doğrulama (SSO)",
    problem: "Birden fazla uygulamaya tek hesapla giriş sağlayan OAuth 2.1 / OpenID Connect sağlayıcısı.",
    highlights: [
      "OAuth istemci yönetimi, onay ekranı, iki adımlı doğrulama, oturum yönetimi",
      "ORM yerine düz SQL; demo modunda tarayıcı içi Postgres",
    ],
    tags: ["Next.js", "better-auth", "OIDC", "PostgreSQL"],
    image: "/projects/gatehub.png",
    demo: "https://gatehub-ahmetkurt.vercel.app/",
    source: "https://github.com/ahmetkurtbm/gatehub",
  },
  {
    slug: "controlpanel",
    title: "ControlPanel",
    category: "Gözlemlenebilirlik paneli",
    problem: "Tüm Vercel projelerinin istek, hata, gecikme, log ve trace verisini tek ekranda gösteriyor; girişi GateHub ile.",
    highlights: [
      "Grafana Cloud (Prometheus, Loki, Tempo) verisi kendi arayüzünde",
      "Eşik tabanlı uyarılar, trace şelalesi, özelleştirilebilir panolar",
    ],
    tags: ["Next.js", "OpenTelemetry", "Grafana", "Recharts"],
    image: "/projects/controlpanel.png",
    demo: "https://controlpanel-phi-ten.vercel.app/",
    source: "https://github.com/ahmetkurtbm/controlpanel",
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
