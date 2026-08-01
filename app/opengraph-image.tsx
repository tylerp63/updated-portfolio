import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tyler Pham — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const anton = await readFile(join(process.cwd(), "assets/fonts/Anton-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          color: "#1c1c1a",
          padding: "56px 64px",
          fontFamily: "Anton",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, letterSpacing: 5 }}>
          <div style={{ display: "flex" }}>TYLER PHAM</div>
          <div style={{ display: "flex", color: "#6b6a64" }}>PORTFOLIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 230, lineHeight: 0.85 }}>
          <div style={{ display: "flex" }}>TYLER</div>
          <div style={{ display: "flex" }}>PHAM</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 5 }}>
            SOFTWARE ENGINEER — FULL-STACK · AI SYSTEMS · IOS
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", width: 28, height: 28, background: "#cc3900", borderRadius: 6 }} />
            <div style={{ display: "flex", width: 28, height: 28, background: "#2547f4", borderRadius: 6 }} />
            <div style={{ display: "flex", width: 28, height: 28, background: "#f5b301", borderRadius: 6 }} />
            <div style={{ display: "flex", width: 28, height: 28, background: "#0c6b34", borderRadius: 6 }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    }
  );
}
