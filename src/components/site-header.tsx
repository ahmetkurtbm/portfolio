"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { id: "projeler", label: "Projeler" },
  { id: "deneyim", label: "Deneyim" },
  { id: "yetenekler", label: "Yetenekler" },
  { id: "iletisim", label: "İletişim" },
];

export function SiteHeader({ name, cv }: { name: string; cv: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:text-fg ${
      active === id ? "text-fg" : "text-fg-muted"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="inline-flex min-h-11 items-center font-mono text-sm font-medium tracking-tight text-fg">
          {name}
          <span className="text-accent">_</span>
        </a>

        <nav aria-label="Bölümler" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={cv}
            download
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-line-strong px-3 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Download size={16} aria-hidden="true" />
            CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-fg-muted hover:text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobil-menu" aria-label="Bölümler" className="border-t border-line px-4 pb-4 md:hidden">
          <ul className="flex flex-col pt-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-fg-muted hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cv}
            download
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center gap-2 rounded-md border border-line-strong text-sm font-medium text-fg"
          >
            <Download size={16} aria-hidden="true" />
            CV indir
          </a>
        </nav>
      ) : null}
    </header>
  );
}
