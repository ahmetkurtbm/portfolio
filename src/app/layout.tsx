import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

import { profile } from "@/content/site";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${profile.name} · ${profile.role}`;
const description =
  "Next.js, TypeScript ve PostgreSQL ile uçtan uca web uygulamaları geliştiren full-stack developer. Projeler, deneyim ve iletişim.";

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
  themeColor: "#0b1120",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${plexSans.variable} ${jetbrainsMono.variable}`}>
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
