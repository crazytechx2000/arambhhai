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
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <p className={`text-xs ${isDark ? "text-text-on-dark-muted" : "text-text-muted"}`}>
            © {year} ArambhHai. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className={`flex items-center gap-2 text-sm font-semibold ${isDark ? "text-white" : "text-text"}`}>
              <Mail size={16} className={isDark ? "text-brand-primary-light" : "text-brand-primary"} />
              Connect
            </div>
            <div className="flex flex-col items-center gap-1">
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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:justify-end">
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
      </Container>
    </footer>
  );
}
