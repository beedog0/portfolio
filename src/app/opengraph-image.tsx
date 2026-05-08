import { ImageResponse } from "next/og";

export const alt = "Bryan Nguyen — Developer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fafafa",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#737373",
            fontWeight: 500,
          }}
        >
          Developer · Builder
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#171717",
              lineHeight: 1,
            }}
          >
            Bryan Nguyen
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#525252",
              maxWidth: 880,
              lineHeight: 1.3,
            }}
          >
            Real-time apps, automated trading tools, and multiplayer
            experiences.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#a3a3a3",
          }}
        >
          <span style={{ display: "flex", color: "#171717", fontWeight: 600 }}>
            bryan.
          </span>
          <span style={{ display: "flex" }}>typingarena.us · github.com/beedog0</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
