import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact — Get a Quote",
  description:
    "Tell ArambhHai about your website project and get a clear, no-pressure quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative max-w-3xl">
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur sm:p-10">
          <div className="text-center">
            <h1 className="text-[28px] font-bold leading-[1.2] tracking-tight text-text sm:text-[36px]">
              Have an idea? Let&apos;s give it a strong beginning.
            </h1>
            <p className="mt-3 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
              Tell us what you&apos;re looking to build and we&apos;ll get back to
              you with clear next steps. Prefer email? Reach us directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-primary"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
