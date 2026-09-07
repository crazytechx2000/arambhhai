import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container className="prose-narrow mx-auto">
        <h1 className="text-[28px] font-bold text-text sm:text-[34px]">
          Terms of Service
        </h1>
        <p className="mt-4 text-[14px] font-medium text-brand-primary">
          Placeholder content — replace with ArambhHai&apos;s actual terms before
          launch.
        </p>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-muted">
          <p>
            This page will outline the terms for engaging {siteConfig.name}{" "}
            for website design and development work: project scope,
            revisions, payment terms, timelines, and intellectual property
            ownership once a project is completed and paid for.
          </p>
          <p>
            Contact {siteConfig.email} with any questions in the meantime.
          </p>
        </div>
      </Container>
    </section>
  );
}
