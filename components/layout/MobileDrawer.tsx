"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { useTheme } from "@/app/theme-provider";

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col md:hidden ${isDark ? "bg-surface-dark" : "bg-surface"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex items-center justify-between px-5 pt-4">
        <span className={`text-lg font-bold ${isDark ? "text-white" : "text-text"}`}>Menu</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`flex h-11 w-11 items-center justify-center rounded-full ${isDark ? "text-white" : "text-text"}`}
        >
          <X size={26} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`py-3 text-[22px] font-semibold transition-colors hover:text-brand-primary ${isDark ? "text-white" : "text-text"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 pb-8 pt-4">
        <Button href="/contact" size="lg" className="w-full" onClick={onClose}>
          Bring Your Idea to Life
        </Button>
      </div>
    </div>
  );
}
