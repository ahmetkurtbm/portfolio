import { Download } from "lucide-react";

import { profile } from "@/content/site";

const NAV = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-page/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Ana menü" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:text-ink sm:inline-block"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Download size={15} aria-hidden />
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
