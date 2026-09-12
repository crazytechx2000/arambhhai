"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import styles from "./ArambhLogo.module.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
});

type LogoSize = "sm" | "md" | "lg";

const SIZE_MAP: Record<LogoSize, number> = {
  sm: 44, // mobile drawer
  md: 64, // header
  lg: 176, // footer, on a dark surface
};

const WORDMARK_SIZE: Record<LogoSize, string> = {
  sm: "15px",
  md: "21px",
  lg: "34px",
};

// The provided artwork is authored at a 390px intrinsic size; every
// requested size is achieved by scaling that fixed box, so the
// animation geometry never has to be recalculated per instance.
const INTRINSIC_SIZE = 390;

export function ArambhLogo({
  size = "md",
  className,
}: {
  size?: LogoSize;
  className?: string;
}) {
  const uid = useId();
  const id = (name: string) => `arambh-${name}-${uid}`;

  const target = SIZE_MAP[size];
  const scale = target / INTRINSIC_SIZE;

  const groupRef = useRef<HTMLDivElement>(null);
  const [flash, setFlash] = useState(false);
  const flashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    const isSmallLogo = size === "md";

    if (prefersReducedMotion || !isPointerFine || isSmallLogo) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = group!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 5;
      const rotateX = ((y - centerY) / centerY) * -5;
      group!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }

    function handleMouseLeave() {
      group!.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
    }

    group.addEventListener("mousemove", handleMouseMove);
    group.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      group.removeEventListener("mousemove", handleMouseMove);
      group.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [size]);

  function handleClick() {
    setFlash(true);
    if (flashTimeout.current) clearTimeout(flashTimeout.current);
    flashTimeout.current = setTimeout(() => setFlash(false), 350);
  }

  useEffect(() => {
    return () => {
      if (flashTimeout.current) clearTimeout(flashTimeout.current);
    };
  }, []);

  return (
    <div
      className={cn(cormorant.variable, "flex items-center gap-3", className)}
    >
      <div
        style={{
          width: target,
          height: target,
          position: "relative",
          perspective: 1000,
        }}
        role="img"
        aria-label="ArambhHai"
      >
          <div
            className={cn(styles.badgeWrapper, size !== "md" && styles.floatWrapper)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: INTRINSIC_SIZE,
              height: INTRINSIC_SIZE,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div
              ref={groupRef}
              className={cn(styles.tiltGroup, size === "md" && "transform-none")}
              onClick={handleClick}
              style={
                flash && size !== "md"
                  ? {
                      filter:
                        "brightness(1.2) drop-shadow(0 0 25px rgba(0,180,255,0.30))",
                    }
                  : undefined
              }
            >
              <svg
                className={styles.logoSvg}
                shapeRendering="geometricPrecision"
                viewBox="0 0 390 390"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={id("metal")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="18%" stopColor="#8796a8" />
                    <stop offset="45%" stopColor="#e7edf3" />
                    <stop offset="65%" stopColor="#536477" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>

                  <linearGradient id={id("rim")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="25%" stopColor="#0077c8" />
                    <stop offset="50%" stopColor="#dce6ef" />
                    <stop offset="72%" stopColor="#007acb" />
                    <stop offset="100%" stopColor="#00d9ff" />
                  </linearGradient>

                  <linearGradient id={id("highlight")} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
                    <stop offset="45%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="55%" stopColor="#00d9ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
                  </linearGradient>

                  <radialGradient id={id("center")}>
                    <stop offset="0%" stopColor="#0c4d70" />
                    <stop offset="55%" stopColor="#061626" />
                    <stop offset="100%" stopColor="#02060c" />
                  </radialGradient>

                  <linearGradient id={id("aMetal")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="20%" stopColor="#b7c5d2" />
                    <stop offset="43%" stopColor="#f8fbfd" />
                    <stop offset="65%" stopColor="#718295" />
                    <stop offset="85%" stopColor="#dce5ec" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>

                  <linearGradient id={id("aEdge")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#00cfff" />
                    <stop offset="100%" stopColor="#006eff" />
                  </linearGradient>

                  <linearGradient id={id("aGlass")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#071a2a" />
                    <stop offset="40%" stopColor="#06182a" />
                    <stop offset="70%" stopColor="#03101e" />
                    <stop offset="100%" stopColor="#020810" />
                  </linearGradient>

                  <linearGradient id={id("liquid")} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0646a5" />
                    <stop offset="28%" stopColor="#0077ff" />
                    <stop offset="50%" stopColor="#00d9ff" />
                    <stop offset="72%" stopColor="#176cff" />
                    <stop offset="100%" stopColor="#142a91" />
                  </linearGradient>

                  <linearGradient id={id("liquidSecondary")} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#071c4f" />
                    <stop offset="45%" stopColor="#315fff" />
                    <stop offset="70%" stopColor="#00bce8" />
                    <stop offset="100%" stopColor="#111c66" />
                  </linearGradient>

                  <radialGradient id={id("liquidGlow")}>
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                    <stop offset="55%" stopColor="#0077ff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#001a44" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id={id("sweep")} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="42%" stopColor="#ffffff" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="58%" stopColor="#9defff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
                  </linearGradient>

                  <path
                    id={id("letterA")}
                    fillRule="evenodd"
                    d="M 195 65 L 287 285 L 242 285 L 222 230 L 168 230 L 148 285 L 103 285 Z M 195 124 L 179 196 L 211 196 Z"
                  />

                  <clipPath id={id("aClip")}>
                    <use href={`#${id("letterA")}`} />
                  </clipPath>
                </defs>

                {/* Solid outer badge */}
                <circle cx="195" cy="195" r="174" className={styles.circleBody} />
                <circle
                  cx="195"
                  cy="195"
                  r="161"
                  className={styles.circleInnerBorder}
                  style={{ stroke: `url(#${id("metal")})` }}
                />

                {/* Center panel */}
                <circle cx="195" cy="195" r="153" className={styles.innerPanel} />
                <circle
                  cx="195"
                  cy="180"
                  r="120"
                  className={styles.centerGlow}
                  style={{ fill: `url(#${id("center")})` }}
                />

                {/* Outer rim */}
                <circle
                  cx="195"
                  cy="195"
                  r="174"
                  className={styles.circleRim}
                  style={{ stroke: `url(#${id("rim")})` }}
                />
                <circle
                  cx="195"
                  cy="195"
                  r="174"
                  className={styles.circleHighlight}
                  style={{ stroke: `url(#${id("highlight")})` }}
                />

                {/* A shadow */}
                <use href={`#${id("letterA")}`} className={styles.aShadow} />

                {/* Main metallic A */}
                <use
                  href={`#${id("letterA")}`}
                  className={styles.aMetal}
                  style={{
                    fill: `url(#${id("aMetal")})`,
                    stroke: `url(#${id("aEdge")})`,
                  }}
                />

                {/* A inner glass + liquid */}
                <g clipPath={`url(#${id("aClip")})`}>
                  <rect
                    x="80"
                    y="55"
                    width="230"
                    height="240"
                    className={styles.aGlass}
                    style={{ fill: `url(#${id("aGlass")})` }}
                  />

                  <ellipse
                    cx="195"
                    cy="195"
                    rx="110"
                    ry="85"
                    className={styles.aLiquidGlow}
                    style={{ fill: `url(#${id("liquidGlow")})` }}
                  />

                  <g className={styles.aLiquid}>
                    <path
                      className={styles.aLiquidWave}
                      fill={`url(#${id("liquid")})`}
                      d="M 50 220 C 80 195, 105 182, 135 195 C 165 208, 180 226, 210 216 C 240 205, 255 178, 285 188 C 315 198, 335 220, 355 207 L 355 300 L 50 300 Z"
                    />
                    <path
                      className={styles.aLiquidWave2}
                      fill={`url(#${id("liquidSecondary")})`}
                      opacity="0.72"
                      d="M 40 235 C 75 210, 105 205, 135 220 C 165 236, 185 240, 215 224 C 245 208, 270 195, 300 210 C 325 222, 340 236, 360 225 L 360 300 L 40 300 Z"
                    />
                  </g>

                  <rect
                    x="85"
                    y="70"
                    width="220"
                    height="210"
                    className={styles.aLightSweep}
                    style={{ fill: `url(#${id("sweep")})` }}
                  />

                  <path
                    className={styles.aLiquidLine}
                    d="M 75 210 C 110 188, 130 190, 160 207 C 190 224, 210 224, 240 202 C 265 184, 290 190, 320 210"
                  />
                </g>
              </svg>
            </div>
          </div>
      </div>

      <span
        className={styles.wordmark}
        style={{ fontSize: WORDMARK_SIZE[size] }}
      >
        ArambhHai
      </span>
    </div>
  );
}
