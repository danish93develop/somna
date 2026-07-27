import { ImageResponse } from "next/og";

export const alt = "Somna — the bedside companion that understands your sleep";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(180deg,#241f4e 0%,#5b3a68 62%,#e8935f 130%)",
          color: "#f4f1ea",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* stars */}
        {[
          [140, 90, 3],
          [320, 150, 2],
          [540, 70, 3],
          [760, 130, 2],
          [980, 80, 3],
          [1100, 180, 2],
          [420, 220, 2],
          [880, 240, 2],
        ].map(([x, y, r], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: r,
              height: r,
              borderRadius: 999,
              background: "#f7e8c9",
              display: "flex",
            }}
          />
        ))}

        {/* moon */}
        <div
          style={{
            position: "absolute",
            right: 96,
            top: 76,
            width: 84,
            height: 84,
            borderRadius: 999,
            background: "#eef0f6",
            boxShadow: "0 0 80px 20px rgba(238,240,246,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 122,
            top: 66,
            width: 78,
            height: 78,
            borderRadius: 999,
            background: "#3f3060",
            display: "flex",
          }}
        />

        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 44, display: "flex" }}>☾</div>
          <div style={{ fontSize: 44, fontWeight: 500, display: "flex" }}>somna</div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: -1,
              maxWidth: 980,
              display: "flex",
            }}
          >
            Fall asleep to nothing on your mind.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(244,241,234,0.75)",
              marginTop: 26,
              maxWidth: 900,
              display: "flex",
            }}
          >
            A contactless bedside companion — and a page that scrolls from dusk to dawn.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {["No wearable", "On-device", "30-night trial"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "rgba(244,241,234,0.8)",
                  border: "1px solid rgba(244,241,234,0.3)",
                  borderRadius: 999,
                  padding: "8px 18px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#f7e8c9" }}>
            Designed &amp; built by Danish Suri
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
