"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/config";
import { useTheme } from "@/app/theme-provider";

export function FinalCta() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "bg-surface-dark py-16 sm:py-24" : "bg-background py-16 sm:py-24"}>
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-text sm:text-[36px]">
            Ready to give your idea a strong start?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            Tell us about your project and we&apos;ll get back to you with clear
            next steps — no pressure, no jargon.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
              Let&apos;s Get Started
            </Button>
            <Button
              href={siteConfig.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Hire ArambhHai on Fiverr
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
