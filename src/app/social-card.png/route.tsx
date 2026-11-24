import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

const mark = `data:image/png;base64,${readFileSync(join(process.cwd(), "src/app/apple-icon.png")).toString("base64")}`;

export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "linear-gradient(125deg, #080b16 38%, #1b2450 100%)", color: "#f8faff", padding: 76, borderTop: "10px solid #54dcfa" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#7be4ff", fontSize: 31, marginBottom: 30 }}>
        {/* ImageResponse embeds the local image without fetching it over HTTP. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={76} height={76} alt="" />
        {profile.name}
      </div>
      <div style={{ fontSize: 90, fontWeight: 700, letterSpacing: "-5px" }}>{profile.role}</div>
      <div style={{ fontSize: 31, color: "#abb8d0", marginTop: 22 }}>{profile.specialization}</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
