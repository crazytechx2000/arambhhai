"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import { ArambhLogo } from "@/components/brand/ArambhLogo";
import { Container } from "@/components/ui/Container";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/theme-provider";

const COMPACT_ENTER = 72;
const COMPACT_EXIT = 24;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-8 w-14 rounded-full bg-border transition-colors duration-300 hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
    >
      <span
        className={cn(
          "absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-md transition-all duration-300",
          isDark ? "left-7" : "left-1"
        )}
      >
        {isDark ? (
          <Sun size={14} className="text-amber-500" />
        ) : (
          <Moon size={14} className="text-brand-indigo" />
        )}
      </span>
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    let ticking = false;

    function evaluate() {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > COMPACT_ENTER) return true;
        if (prev && y < COMPACT_EXIT) return false;
        return prev;
      });
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    }

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        id="top"
        className={cn(
          "dark-surface sticky top-0 z-40 h-[80px] w-full border-b transition-colors duration-300",
          theme === "dark"
            ? "bg-surface-dark/95 backdrop-blur"
            : "bg-surface/80 backdrop-blur",
          scrolled
            ? theme === "dark"
              ? "border-border-dark shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
              : "border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
            : "border-transparent shadow-none"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link
            href="/#top"
            aria-label="ArambhHai home"
            className={cn("flex items-center", isDark ? "text-white" : "text-text")}
          >
            <ArambhLogo size="md" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium transition-colors hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-md border transition-colors",
                isDark ? "border-border-dark" : "border-border",
                isDark ? "text-white" : "text-text"
              )}
            >
              <Menu size={23} strokeWidth={2.25} />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
