import { ImageResponse } from "next/og";
import { person } from "@/lib/site";

export const dynamic = "force-static";

const ink = "#18273A";
const paper = "#F2F4F1";
const amber = "#C98A00";
const muted = "#536173";

function Node({ label, live }: { label: string; live?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "14px 22px",
        borderRadius: 6,
        border: `${live ? 3 : 2}px ${live ? "solid" : "dashed"} ${live ? amber : "#9AA3AD"}`,
        background: paper,
        color: live ? ink : muted,
        fontSize: 26,
      }}
    >
      {label}
    </div>
  );
}

function Link({ live }: { live?: boolean }) {
  return <div style={{ display: "flex", width: 56, height: live ? 5 : 3, background: live ? amber : "#9AA3AD" }} />;
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          padding: "64px 72px",
          color: ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 30, color: muted }}>
            {person.name}, {person.title}, {person.city}
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, maxWidth: 900 }}>
            I modernise the systems businesses can’t afford to break.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Node label="Customer portal" live />
          <Link live />
          <Node label="AWS Lambda" live />
          <Link live />
          <Node label="PostgreSQL on RDS" live />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
