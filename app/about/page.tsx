import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About ArambhHai",
  description:
    "Learn how ArambhHai helps businesses, professionals, creators, and growing brands build a practical online presence.",
  alternates: { canonical: "/about" },
};

const approachPoints = [
  "Clean design",
  "Responsive layouts",
  "Clear content",
  "Practical functionality",
  "Easy navigation",
  "Proper testing before launch",
];

const pricing = [
  ["Website", "Starting from ₹799"],
  ["Additional pages", "₹199 per page"],
  ["Deployment services", "Only ₹199"],
  ["Testing preview", "Free temporary testing subdomain"],
  ["Custom domain", "Only the domain provider's charge"],
];

export default function AboutPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
            About ArambhHai
          </p>
          <h1 className="mt-3 text-[32px] font-bold leading-tight text-text sm:text-[46px]">
            A simple, practical start for your digital presence.
          </h1>
          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            <p>
              ArambhHai is a web development and design initiative focused on
              helping businesses, professionals, creators, and growing brands
              build a strong digital presence.
            </p>
            <p>
              We believe a professional online presence should not be
              complicated or unnecessarily expensive. A website should clearly
              represent your work, build trust with your audience, and make it
              easy for people to connect with you.
            </p>
            <p>
              We create websites that are simple, modern, responsive, and
              practical, whether you are starting a new business, building a
              personal brand, or improving an existing online presence.
            </p>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h2 className="text-[24px] font-bold text-text sm:text-[30px]">
              Our approach
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-muted">
              Understand <ArrowRight className="mx-1 inline" size={16} /> Plan
              <ArrowRight className="mx-1 inline" size={16} /> Design
              <ArrowRight className="mx-1 inline" size={16} /> Develop
              <ArrowRight className="mx-1 inline" size={16} /> Test
              <ArrowRight className="mx-1 inline" size={16} /> Launch
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-text-muted">
              We first understand what you need, then plan the website
              structure and user experience. Before final deployment, a free
              temporary testing preview can be provided for a limited period so
              you can review the website, test it across devices, share
              feedback, and approve the final version.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {approachPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-[15px] text-text-muted">
                  <Check size={17} className="shrink-0 text-brand-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h2 className="text-[24px] font-bold text-text sm:text-[30px]">
              Affordable digital presence
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-muted">
              Professional websites starting from ₹799. Final pricing depends
              on website pages, features, and requirements.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pricing.map(([label, value]) => (
                <div key={label} className="rounded-[var(--radius-md)] border border-border bg-surface p-4">
                  <p className="text-sm font-semibold text-text">{label}</p>
                  <p className="mt-1 text-sm text-text-muted">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <Button href="/contact" variant="accent" size="lg">
              Let&apos;s Get Started <ArrowRight size={18} />
            </Button>
            <p className="mt-4 text-sm text-text-muted">
              Questions? Contact {siteConfig.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
