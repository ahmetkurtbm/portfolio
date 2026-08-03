"use client";

import React, { useState } from 'react';
import { Progress } from 'antd';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Briefcase, 
  ExternalLink, 
  Github,
  Sparkles,
  Rocket,
  Zap,
  Database,
  Globe,
  Cpu,
  Layout,
  Terminal,
  Cloud
} from 'lucide-react';

export default function MainContent() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Projeler verisi
  const projects = [
    {
      id: 4,
      title: "ReceiptFlow",
      description: "Fiş ve fatura görsellerini yükleyip AI ile okuyan, alanları düzenlenebilir hale getiren ve kayıtları tek yerde toplayan modern bir finans asistanı uygulaması.",
      tags: ["Next.js", "AI", "OCR", "PostgreSQL"],
      link: "https://receiptflow-eta.vercel.app/",
      github: "https://github.com/ahmetkurtbm/receiptflow",
      gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)"
    },
    {
      id: 5,
      title: "GateHub",
      description: "Birden fazla uygulama için ortak giriş, OAuth istemci yönetimi, consent ekranı ve güvenli oturum akışı sunan merkezi SSO platformu.",
      tags: ["Next.js", "SSO", "OAuth 2.1", "OpenID Connect"],
      link: "https://gatehub-orcin.vercel.app/",
      github: "https://github.com/ahmetkurtbm/gatehub",
      gradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)"
    },
    {
      id: 1,
      title: "KIDS ACADEMY",
      description: "Bir eğitim kurumu için admin panelinden yönetilen duyuru/etkinlik/sınav sistemi ile velilerin çocuklarının sınav sonuçlarını takip edebildiği veli portalı.",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      link: "https://kids-academy-phi.vercel.app/",
      github: "https://github.com/ahmetkurtbm/kidsacademy",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)"
    },
    {
      id: 2,
      title: "Question to Test App",
      description: "Fotoğraf ve PDF'ten soru bankası oluşturup istenen konu/zorluk karışımında test PDF'i üreten uygulama. Girişler GateHub SSO ile korunur.",
      tags: ["Next.js", "NextAuth", "PostgreSQL", "Vercel Blob"],
      link: "https://tahsinaslanf.vercel.app/",
      github: "https://github.com/ahmetkurtbm/questiontotest",
      gradient: "linear-gradient(135deg, #0ea5a4 0%, #0b8387 100%)"
    },
    {
      id: 3,
      title: "Car Renting",
      description: "5 dilde çok dilli araç kiralama sitesi. Veritabanı destekli filo, rezervasyon sistemi ve GateHub ile korunan yönetim paneli içerir.",
      tags: ["Next.js", "Supabase", "i18n"],
      link: "https://vercel-carrenting.vercel.app/",
      github: "https://github.com/ahmetkurtbm/carrenting",
      gradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)"
    },
    {
      id: 6,
      title: "TestMetrix",
      description: "TÜBİTAK proje ve soru bankalarını klasörler halinde organize eden, Excel ile toplu veri aktarımı yapan ve sonuçları grafik/PDF raporlarına dönüştüren uygulama.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Excel"],
      link: "https://tubitak-lake.vercel.app/",
      github: "https://github.com/ahmetkurtbm/testmetrix",
      gradient: "linear-gradient(135deg, #db2777 0%, #831843 100%)"
    },
    {
      id: 7,
      title: "GastroFlow",
      description: "Çok kiracılı, rol bazlı bir restoran yönetim sistemi: offline-first sipariş alma, mutfak ekranı, reçeteye dayalı stok düşümü, satın alma ve patron mobil paneli. Güvenlik veritabanı seviyesinde Row Level Security ile zorunlu kılınıyor.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "RLS", "PWA"],
      link: null,
      github: "https://github.com/ahmetkurtbm/gastroflow",
      gradient: "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)"
    },
  ];

  // Yetenekler verisi
  // Updated skill list: distinct colors per skill + added .NET and Proxmox
  // Assumptions: user requested .NET at 40; Proxmox added at 50 (adjustable on request)
  const skills = [
    { name: "React / Next.js", level: 90, icon: <Layout size={20} />, color: "#61dafb" },
    { name: "TypeScript", level: 90, icon: <Code2 size={20} />, color: "#3178c6" },
    { name: "Node.js", level: 75, icon: <Terminal size={20} />, color: "#3fb43f" },
    { name: "Python", level: 50, icon: <Cpu size={20} />, color: "#f59e0b" },
    { name: "MongoDB", level: 50, icon: <Database size={20} />, color: "#47a248" },
    { name: "AWS / Cloud", level: 40, icon: <Cloud size={20} />, color: "#ff9900" },
    { name: "SQL", level: 50, icon: <Database size={20} />, color: "#2563eb" },
    { name: "Docker", level: 40, icon: <Globe size={20} />, color: "#2496ed" },
    { name: ".NET", level: 40, icon: <Code2 size={20} />, color: "#512bd4" },
    { name: "Proxmox", level: 50, icon: <Database size={20} />, color: "#0ea5a4" }
  ];

  // Deneyimler verisi
  const experiences = [
    {
      year: "2025 Nisan - 2026 Haziran",
      title: "Full Stack Junior Developer",
      company: "Sinergyit - Vakıf Katılım (Outsource)",
      description: "React , Next.js ve .Net ile enterprise düzeyde web uygulamaları geliştirme. Sunucu yönetimi ve analitik süreçler. Vakıf Katılım Bünyesinde BOA uygulaması geliştirme ve bakım süreçlerinde aktif rol alma."
    },
    {
      year: "2024 - 2025 (6 aylık staj)",
      title: "Full Stack Junior Developer",
      company: "İstanalitics",
      description: "React , Next.js ve .Net ile enterprise düzeyde web uygulamaları geliştirme."
    },
    {
      year: "2024 (2 aylık staj)",
      title: "Junior Developer",
      company: "İstanalitics",
      description: ".Net ve React ile web uygulamaları geliştirme."
    },
    {
      year: "2023 (2 aylık staj)",
      title: "Junior Developer",
      company: "ArtPro Teknoloji",
      description: "Frontend geliştirme, kod review, agile metodolojileri ile çalışma."
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

        body {
          background: #0f0f0f;
          color: #e5e7eb;
        }

        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 48px 80px;
          font-family: 'Outfit', sans-serif;
          background: #0f0f0f;
        }

        /* HAKKIMDA SECTION */
        .about-section {
          margin-bottom: 120px;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .section-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 1px solid #292929;
        }

        .section-icon:hover {
          transform: rotate(10deg) scale(1.1);
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.3);
          border-color: #dc2626;
        }

        .section-icon .sparkle-icon {
          position: absolute;
          top: -6px;
          right: -6px;
          color: #fbbf24;
          opacity: 0;
          transform: scale(0.5) rotate(-45deg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .section-icon:hover .sparkle-icon {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 42px;
          font-weight: 700;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .about-text {
          font-size: 18px;
          line-height: 1.8;
          color: #d1d5db;
        }

        .about-text h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          color: #f9fafb;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .experience-timeline {
          position: relative;
          padding-left: 32px;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
        }

        .experience-item {
          position: relative;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(220, 38, 38, 0.05);
          border-radius: 12px;
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
          border: 1px solid #292929;
        }

        .experience-item:hover {
          background: rgba(220, 38, 38, 0.1);
          border-left-color: #dc2626;
          transform: translateX(8px);
          border-color: #404040;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -44px;
          top: 24px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dc2626;
          border: 3px solid #0f0f0f;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
        }

        .experience-year {
          font-size: 13px;
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .experience-title {
          font-size: 18px;
          font-weight: 600;
          color: #f9fafb;
          margin-bottom: 4px;
        }

        .experience-company {
          font-size: 15px;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .experience-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #d1d5db;
        }

        /* PROJELER SECTION */
        .projects-section {
          margin-bottom: 120px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #292929;
          background: #1a1a1a;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(220, 38, 38, 0.1);
          border-color: #404040;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card-body {
          padding: 32px;
        }

        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #f9fafb;
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 15px;
          line-height: 1.7;
          color: #d1d5db;
          margin-bottom: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-tag {
          padding: 6px 14px;
          background: #292929;
          border: 1px solid #404040;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #d1d5db;
          transition: all 0.3s ease;
        }

        .project-tag:hover {
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border-color: #dc2626;
          transform: scale(1.05);
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-link {
          flex: 1;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
        }

        .project-link.primary {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
        }

        .project-link.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
        }

        .project-link.secondary {
          background: #292929;
          color: #d1d5db;
          border: 1px solid #404040;
        }

        .project-link.secondary:hover {
          background: #404040;
          color: white;
          border-color: #525252;
        }

        /* YETENEKLER SECTION */
        .skills-section {
          margin-bottom: 80px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .skill-card {
          padding: 24px;
          background: #1a1a1a;
          border-radius: 16px;
          border: 1px solid #292929;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(220, 38, 38, 0.1);
          border-color: #404040;
        }

        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .skill-name {
          font-weight: 600;
          font-size: 16px;
          color: #f9fafb;
        }

        .skill-level {
          font-size: 14px;
          font-weight: 600;
          color: #dc2626;
        }

        .ant-progress-line {
          margin-bottom: 0;
        }

        /* Make the progress track transparent so the filled bar is visible on dark cards */
        .ant-progress-inner {
          background: transparent;
        }

      /* Ensure the filled bar is visible; height and rounding set here.
        Individual skill color is applied via the Progress strokeColor prop,
        so we avoid forcing a single global background color. */
        .ant-progress-line .ant-progress-bg {
          height: 8px !important;
          border-radius: 999px !important;
        }

        /* Track (unfilled) styling for better contrast on dark cards */
        .ant-progress-line .ant-progress-outer {
          background: rgba(255,255,255,0.03);
          height: 8px;
          border-radius: 999px;
        }

        @media (max-width: 992px) {
          .main-content {
            padding: 100px 24px 60px;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .section-title {
            font-size: 36px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          }
        }

        @media (max-width: 576px) {
          .main-content {
            padding: 90px 16px 40px;
          }

          .section-title {
            font-size: 28px;
          }

          .section-icon {
            width: 48px;
            height: 48px;
          }

          .about-text {
            font-size: 16px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="main-content">
        {/* HAKKIMDA & DENEYİMLER */}
        <motion.section
          id="about"
          className="about-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Sparkles size={28} />
              <Sparkles className="sparkle-icon" size={18} />
            </div>
            <h2 className="section-title">Hakkımda & Deneyimlerim</h2>
          </div>

          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-text">
                <h3>Selam! 👋</h3>
                <p>
                  Ben Ahmet Kurt, 1+ yıllık deneyime sahip bir full-stack yazılım geliştiriciyim. 
                  Modern web teknolojileri ile ölçeklenebilir ve kullanıcı dostu uygulamalar 
                  geliştirmeyi seviyorum.
                </p>
                <p>
                  React, Next.js ve Node.js ekosisteminde uzmanlaştım. Performans optimizasyonu, 
                  clean code prensipleri ve kullanıcı deneyimi odaklı çalışmayı benimsiyorum.
                </p>
                <p>
                  Yeni teknolojileri öğrenmeye ve toplulukla bilgi paylaşımına meraklıyım. 
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="experience-item"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="experience-year">{exp.year}</div>
                    <div className="experience-title">{exp.title}</div>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-desc">{exp.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJELER */}
        <motion.section
          id="projects"
          className="projects-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Rocket size={28} />
              <Sparkles className="sparkle-icon" size={18} />
            </div>
            <h2 className="section-title">Projelerim</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div 
                  className="project-card"
                >
                  <div 
                    style={{ 
                      background: project.gradient,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '6px',
                      opacity: hoveredProject === project.id ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                  <div className="project-card-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.link && (
                        <a
                          className="project-link primary"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ background: project.gradient, color: 'white' }}
                        >
                          <ExternalLink size={16} />
                          Canlı Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          className="project-link secondary"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* YETENEKLER */}
        <motion.section
          id="skills"
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Zap size={28} />
              <Sparkles className="sparkle-icon" size={18} />
            </div>
            <h2 className="section-title">Yeteneklerim</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              >
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <div 
                        className="skill-icon"
                        style={{ 
                          background: `${skill.color}15`,
                          color: skill.color 
                        }}
                      >
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <Progress
                    type="line"
                    percent={skill.level}
                    strokeColor={skill.color}
                    showInfo={false}
                    strokeWidth={8}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* İLETİŞİM */}
        <motion.section
          id="contact"
          className="contact-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ 
            padding: '80px 0',
            textAlign: 'center',
            background: 'transparent',
            marginBottom: '40px'
          }}
        >
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-icon">
              <Briefcase size={28} />
              <Sparkles className="sparkle-icon" size={18} />
            </div>
            <h2 className="section-title">İletişim</h2>
          </motion.div>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Birlikte çalışmak veya projelerim hakkında konuşmak isterseniz, 
            benimle iletişime geçmekten çekinmeyin!
          </p>

          {/* İletişim Bilgileri */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, #292929 0%, #404040 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #525252',
                minWidth: '200px'
              }}
            >
              <div style={{ color: '#dc2626', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
                📧 E-posta
              </div>
              <div style={{ color: '#f9fafb', fontSize: '14px' }}>
                ahmetkurtk2@gmail.com
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #292929 0%, #404040 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #525252',
                minWidth: '200px'
              }}
            >
              <div style={{ color: '#dc2626', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
                📱 Telefon
              </div>
              <div style={{ color: '#f9fafb', fontSize: '14px' }}>
                +90 551 106 52 27
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, #292929 0%, #404040 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #525252',
                minWidth: '200px'
              }}
            >
              <div style={{ color: '#dc2626', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
                📍 Konum
              </div>
              <div style={{ color: '#f9fafb', fontSize: '14px' }}>
                İstanbul/Maltepe
              </div>
            </motion.div>
          </div>

          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}
            onClick={() => window.location.href = 'mailto:ahmetkurtk2@gmail.com'}
          >
            E-posta Gönder
          </motion.button>
        </motion.section>
      </div>
    </>
  );
}