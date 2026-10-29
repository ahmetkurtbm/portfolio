import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";

import { profile } from "@/content/site";

import "./globals.css";

// Başlıklar karakterli bir grotesk, metin sakin bir sans, simit ve küçük etiketler mono.
const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-display-face", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono-face", display: "swap" });

const title = `${profile.name} · ${profile.role}`;
const description =
  "Next.js, TypeScript ve PostgreSQL ile gerçek kullanıcısı olan web uygulamaları geliştiren full-stack developer. Projeler, deneyim ve iletişim.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmetkurt.vercel.app"),
  title,
  description,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#100f0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
