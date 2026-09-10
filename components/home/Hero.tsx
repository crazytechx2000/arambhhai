"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/home/HeroBackground";
import { useTheme } from "@/app/theme-provider";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={
        isDark
          ? "relative isolate flex min-h-[560px] items-center overflow-hidden bg-surface-dark py-20 sm:min-h-[620px] sm:py-24 lg:min-h-[680px]"
          : "relative isolate flex min-h-[560px] items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 py-20 sm:min-h-[620px] sm:py-24 lg:min-h-[680px]"
      }
    >
      <HeroBackground />

      <Container className="relative">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-primary/70" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
              ArambhHai — Web Development Studio
            </span>
          </div>

          <h1 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-text sm:text-[46px] lg:text-[58px]">
            A strong beginning for your digital presence.
          </h1>

          <p className="mt-5 text-[16px] leading-relaxed text-text-muted sm:text-[18px]">
            Custom, responsive websites for businesses, professionals,
            schools, and growing brands.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg" className="sm:w-auto w-full">
              Let&apos;s Get Started
            </Button>
            <Button
              href="/#work"
              variant="secondary"
              size="lg"
              className="sm:w-auto w-full"
            >
              View Our Work <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
