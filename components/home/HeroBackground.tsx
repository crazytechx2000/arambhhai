"use client";

import { useTheme } from "@/app/theme-provider";

export function HeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {isDark ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,255,255,0) 0%, rgba(0,114,255,0.08) 60%, rgba(79,46,229,0.12) 100%)",
            }}
          />
          <div
            className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full opacity-[0.45] blur-[100px]"
            style={{ background: "var(--brand-primary-light)" }}
          />
          <div
            className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-[0.35] blur-[100px]"
            style={{ background: "var(--brand-indigo)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.85]"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="1">
              <line x1="760" y1="120" x2="920" y2="200" />
              <line x1="920" y1="200" x2="1080" y2="150" />
              <line x1="920" y1="200" x2="960" y2="360" />
              <line x1="960" y1="360" x2="1120" y2="420" />
              <line x1="960" y1="360" x2="820" y2="450" />
              <line x1="820" y1="450" x2="880" y2="600" />
              <line x1="1080" y1="150" x2="1150" y2="280" />
            </g>
            <g fill="#93c5fd">
              <circle cx="760" cy="120" r="3.5" />
              <circle cx="920" cy="200" r="4.5" />
              <circle cx="1080" cy="150" r="3" />
              <circle cx="960" cy="360" r="4.5" />
              <circle cx="1120" cy="420" r="3" />
              <circle cx="820" cy="450" r="3.5" />
              <circle cx="880" cy="600" r="3" />
              <circle cx="1150" cy="280" r="3" />
            </g>
          </svg>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,255,255,0) 0%, rgba(0,114,255,0.06) 60%, rgba(79,46,229,0.10) 100%)",
            }}
          />
          <div
            className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full opacity-[0.55] blur-[100px]"
            style={{ background: "var(--brand-primary-light)" }}
          />
          <div
            className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-[0.45] blur-[100px]"
            style={{ background: "var(--brand-indigo)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,0.14) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.85]"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#3b82f6" strokeOpacity="0.55" strokeWidth="1">
              <line x1="760" y1="120" x2="920" y2="200" />
              <line x1="920" y1="200" x2="1080" y2="150" />
              <line x1="920" y1="200" x2="960" y2="360" />
              <line x1="960" y1="360" x2="1120" y2="420" />
              <line x1="960" y1="360" x2="820" y2="450" />
              <line x1="820" y1="450" x2="880" y2="600" />
              <line x1="1080" y1="150" x2="1150" y2="280" />
            </g>
            <g fill="#60a5fa">
              <circle cx="760" cy="120" r="3.5" />
              <circle cx="920" cy="200" r="4.5" />
              <circle cx="1080" cy="150" r="3" />
              <circle cx="960" cy="360" r="4.5" />
              <circle cx="1120" cy="420" r="3" />
              <circle cx="820" cy="450" r="3.5" />
              <circle cx="880" cy="600" r="3" />
              <circle cx="1150" cy="280" r="3" />
            </g>
          </svg>
        </>
      )}
    </div>
  );
}
