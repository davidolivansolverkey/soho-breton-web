import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SOHO ★ | El Pub de Logroño";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            width: 680,
            height: 680,
            borderRadius: 9999,
            left: -140,
            top: -160,
            background: "rgba(255,0,128,0.22)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 9999,
            right: -120,
            top: 120,
            background: "rgba(0,191,255,0.18)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            left: 320,
            bottom: -220,
            background: "rgba(155,89,182,0.16)",
            filter: "blur(90px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 86,
              letterSpacing: 2,
              color: "#ffffff",
              textShadow:
                "0 0 18px rgba(255,0,128,0.35), 0 0 22px rgba(0,191,255,0.25)",
            }}
          >
            SOHO ★
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.92)" }}>
            El Pub de Logroño
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)" }}>
            Hits del momento + temazos del recuerdo · Bretón de los Herreros 28
          </div>
        </div>
      </div>
    ),
    size
  );
}

