"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/app/theme-provider";

export function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (
    pathname === "/" ||
    pathname.startsWith("/work") ||
    pathname === "/contact"
  ) {
    return null;
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        borderColor: isDark ? "rgba(255,255,255,0.12)" : "#e6e8ec",
        backgroundColor: isDark ? "rgba(11,15,25,0.95)" : "rgba(255,255,255,0.95)",
      }}
    >
      <Button href="/contact" variant="accent" size="lg" className="w-full">
        Let&apos;s Get Started
      </Button>
    </div>
  );
}
