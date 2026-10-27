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
          justifyContent: "center",
          padding: "80px",
          background: "#0b1120",
          color: "#f1f5f9",
        }}
      >
        <div style={{ fontSize: 32, color: "#34d399" }}>{profile.role}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 34, color: "#a3b1c6", marginTop: 28 }}>
          Next.js · TypeScript · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
