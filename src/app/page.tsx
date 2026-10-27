import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { education, experience, profile, projects, skills, type Project } from "@/content/site";

function SectionHeading({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // İlk proje öne çıkan proje olarak iki sütuna yayılır; yedi kartlık ızgara böylece boşluksuz kapanır.
  return (
    <article className={`group flex flex-col rounded-xl ${index === 0 ? "md:col-span-2" : ""} border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong hover:bg-surface-hover`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-fg-muted">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-fg-muted">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-line px-2 py-1 font-mono text-xs text-fg-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm font-medium">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-accent transition-colors hover:text-accent-strong"
          >
            Canlı demo
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">({project.title}, yeni sekmede açılır)</span>
          </a>
        ) : null}
        <a
          href={project.source}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
        >
          <Github size={16} aria-hidden="true" />
          Kaynak kod
          <span className="sr-only">({project.title}, yeni sekmede açılır)</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteHeader name={profile.name} cv={profile.cv} />

      <main id="icerik" className="mx-auto max-w-5xl px-4 sm:px-6">
        <section aria-labelledby="hero-baslik" className="pb-24 pt-20 sm:pt-28">
          <p className="rise font-mono text-sm text-accent">
            {profile.role} · {profile.location}
          </p>
          <h1
            id="hero-baslik"
            className="rise mt-4 text-4xl font-semibold tracking-tight text-fg [animation-delay:60ms] sm:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted [animation-delay:120ms]">
            {profile.summary}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
            <a
              href="#projeler"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-strong"
            >
              Projeleri incele
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong px-5 text-sm font-medium text-fg transition-colors duration-200 hover:border-fg-muted"
            >
              <Download size={16} aria-hidden="true" />
              CV indir
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profili"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-fg-muted transition-colors hover:text-fg"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profili"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-fg-muted transition-colors hover:text-fg"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="E-posta gönder"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-fg-muted transition-colors hover:text-fg"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="rise mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8 [animation-delay:240ms]">
            <div>
              <dt className="text-sm text-fg-muted">Profesyonel deneyim</dt>
              <dd className="mt-1 text-2xl font-semibold text-fg">1+ yıl</dd>
            </div>
            <div>
              <dt className="text-sm text-fg-muted">Açık kaynak proje</dt>
              <dd className="mt-1 text-2xl font-semibold text-fg">{projects.length}</dd>
            </div>
            <div>
              <dt className="text-sm text-fg-muted">Ana yığın</dt>
              <dd className="mt-1 text-2xl font-semibold text-fg">React · Next.js</dd>
            </div>
          </dl>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik" className="scroll-mt-20 py-16">
          <SectionHeading index="01" title="Projeler" id="projeler-baslik" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="deneyim" aria-labelledby="deneyim-baslik" className="scroll-mt-20 py-16">
          <SectionHeading index="02" title="Deneyim" id="deneyim-baslik" />
          <ol className="divide-y divide-line border-y border-line">
            {experience.map((item) => (
              <li key={`${item.company}-${item.period}`} className="grid gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                <p className="font-mono text-sm text-fg-muted">{item.period}</p>
                <div>
                  <h3 className="font-semibold text-fg">{item.role}</h3>
                  <p className="mt-0.5 text-sm text-accent">{item.company}</p>
                  <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 leading-relaxed text-fg-muted marker:text-line-strong">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-8">
            <p className="font-mono text-sm text-fg-muted">Eğitim</p>
            <div>
              <h3 className="font-semibold text-fg">{education.degree}</h3>
              <p className="mt-0.5 text-sm text-accent">
                {education.school} · {education.period}
              </p>
              <p className="mt-3 text-fg-muted">{education.languages}</p>
            </div>
          </div>
        </section>

        <section id="yetenekler" aria-labelledby="yetenekler-baslik" className="scroll-mt-20 py-16">
          <SectionHeading index="03" title="Yetenekler" id="yetenekler-baslik" />
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group}>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">{skill.group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-md bg-surface px-3 py-1.5 text-sm text-fg ring-1 ring-line">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-20 py-16">
          <SectionHeading index="04" title="İletişim" id="iletisim-baslik" />
          <div className="rounded-xl border border-line bg-surface p-8 sm:p-10">
            <p className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl">
              Yeni bir proje ya da pozisyon için konuşmak isterseniz yazın.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-strong"
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-fg-muted">
              <li className="inline-flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center hover:text-fg">
                  {profile.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </li>
              <li className="inline-flex items-center gap-2">
                <Linkedin size={16} aria-hidden="true" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:text-fg">
                  LinkedIn
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Github size={16} aria-hidden="true" />
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:text-fg">
                  github.com/ahmetkurtbm
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 border-t border-line py-6 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}
          </p>
          <a href="#" className="inline-flex min-h-11 items-center hover:text-fg">
            Başa dön ↑
          </a>
        </div>
      </footer>
    </>
  );
}
