import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { AsciiDonut } from "@/components/ascii-donut";
import { SiteHeader } from "@/components/site-header";
import { education, experience, profile, projects, skills, type Project } from "@/content/site";

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{children}</span>;
}

function SectionHead({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <Kicker>{kicker}</Kicker>
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/** Sade proje kartı: küçük ekran görüntüsü, tek cümle, etiketler ve iki bağlantı. */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project group flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink-faint/60">
      <a href={project.demo ?? project.source} target="_blank" rel="noreferrer" className="shot" aria-label={`${project.title} demosunu aç`}>
        <Image src={project.image} alt={`${project.title} ekran görüntüsü`} width={1440} height={900} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
      </a>
      <div className="flex flex-1 flex-col gap-2 px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="text-sm text-ink-faint">
          {project.category}
          {project.badge && <span className="text-mint"> · {project.badge}</span>}
        </p>
        <p className="text-sm leading-relaxed text-ink-soft">{project.problem}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <span className="font-mono text-xs text-ink-faint">{project.tags.slice(0, 3).join(" · ")}</span>
          <span className="flex gap-4 text-sm">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-accent hover:underline">
                Demo <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
            <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-ink-soft hover:text-ink">
              Kod <ArrowUpRight size={14} aria-hidden />
            </a>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="icerik">
        <section id="top" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center lg:pl-[46%]">
            <AsciiDonut />
          </div>
          <div className="mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 lg:min-h-[36rem]">
            <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-page/70 px-3 py-1 text-sm text-ink-soft backdrop-blur">
              <span aria-hidden className="h-2 w-2 rounded-full bg-mint" />
              Yeni pozisyonlara açığım · {profile.location}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
              {profile.name}
              <span className="block text-ink-faint">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Gerçek kullanıcısı olan web uygulamaları geliştiriyorum: bir eğitim kurumunun veli paneli, öğretmenler için yapay
              zekâlı soru bankası, restoranlar için sipariş ve stok sistemi.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projeler" className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-deep">
                Projeleri gör
              </a>
              <a href={profile.cv} download className="rounded-lg border border-line bg-page/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-ink-faint">
                CV indir
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="hakkimda-baslik" id="hakkimda" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead id="hakkimda-baslik" kicker="Hakkımda" title="Fikirden canlı ürüne kadar" />
              <p className="-mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{profile.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-2xl border border-line bg-line lg:col-span-5">
              {[
                ["8", "canlı demo"],
                ["1", "gerçek müşteri"],
                ["2 yıl", "deneyim (staj dahil)"],
                ["Next.js", "ana yığın"],
              ].map(([value, label]) => (
                <div key={label} className="bg-surface p-5">
                  <dt className="text-sm text-ink-faint">{label}</dt>
                  <dd className="mt-1 font-display text-3xl font-semibold tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="deneyim-baslik" id="deneyim" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead id="deneyim-baslik" kicker="Deneyim" title="Çalıştığım yerler" />
              <ol className="flex flex-col gap-10 border-l border-line pl-6">
                {experience.map((job) => (
                  <li key={`${job.company}-${job.period}`} className="relative">
                    <span aria-hidden className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-page bg-accent" />
                    <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {job.role} <span className="font-normal text-ink-soft">· {job.company}</span>
                    </h3>
                    <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-ink-soft">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-12 lg:col-span-5">
              <div>
                <Kicker>Eğitim</Kicker>
                <p className="mt-3 font-display text-lg font-semibold">{education.degree}</p>
                <p className="text-sm text-ink-soft">
                  {education.school} · {education.period}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{education.languages}</p>
              </div>
              <div>
                <Kicker>Yetenekler</Kicker>
                <dl className="mt-4 flex flex-col gap-5">
                  {skills.map((group) => (
                    <div key={group.group}>
                      <dt className="text-sm font-medium">{group.group}</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs text-ink-soft">
                            {item}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="projeler-baslik" id="projeler" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead id="projeler-baslik" kicker="Projeler" title="Yaptıklarım" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="iletisim-baslik" id="iletisim" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead id="iletisim-baslik" kicker="İletişim" title="Birlikte çalışalım" />
            <p className="-mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Full-stack ya da frontend pozisyonları ve serbest projeler için yazabilirsiniz.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: `mailto:${profile.email}`, label: "E-posta", value: profile.email, Icon: Mail },
                { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Telefon", value: profile.phone, Icon: Phone },
                { href: profile.linkedin, label: "LinkedIn", value: "ahmet-kurt-bm", Icon: Linkedin },
                { href: profile.github, label: "GitHub", value: "ahmetkurtbm", Icon: Github },
              ].map(({ href, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-full items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/60"
                  >
                    <Icon size={18} aria-hidden className="shrink-0 text-accent" />
                    <span className="min-w-0">
                      <span className="block text-xs text-ink-faint">{label}</span>
                      <span className="block truncate text-sm font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 font-mono text-xs text-ink-faint sm:px-6">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Arkadaki simit: donut.c, tarayıcıda gerçek zamanlı 3B</span>
        </div>
      </footer>
    </>
  );
}
