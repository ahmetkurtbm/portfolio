import { ImageResponse } from "next/og";

import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#100f0d",
          color: "#f3ede3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#ff8a3d" }}>{profile.role}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 38, color: "#bcb3a4", maxWidth: 900 }}>
            Gerçek kullanıcısı olan web uygulamaları geliştiriyorum.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a8174" }}>Next.js · TypeScript · PostgreSQL</div>
      </div>
    ),
    size,
  );
}
