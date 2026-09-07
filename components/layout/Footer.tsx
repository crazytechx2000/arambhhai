"use client";

import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";
import { useTheme } from "@/app/theme-provider";

export function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={
        isDark
          ? "dark-surface border-t border-border-dark bg-surface-dark text-text-on-dark-muted"
          : "border-t border-border bg-surface text-text-muted"
      }
    >
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Mail size={16} className={isDark ? "text-brand-primary-light" : "text-brand-primary"} />
              Connect
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm transition-colors hover:text-brand-primary"
              >
                <span className={isDark ? "text-text-on-dark-muted" : "text-text-muted"}>
                  {siteConfig.email}
                </span>
              </a>
              <a
                href={siteConfig.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-brand-primary"
              >
                <span>Hire ArambhHai on Fiverr</span>
                <ExternalLink size={14} className={isDark ? "text-text-on-dark-muted" : "text-text-muted"} />
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className={isDark ? "text-text-on-dark-muted" : "text-text-muted"}>
              © {year} ArambhHai. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className={`transition-colors hover:text-brand-primary ${isDark ? "text-text-on-dark-muted" : "text-text-muted"}`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`transition-colors hover:text-brand-primary ${isDark ? "text-text-on-dark-muted" : "text-text-muted"}`}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
