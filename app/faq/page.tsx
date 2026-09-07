import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with ArambhHai.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading title="Frequently asked questions" />
        <div className="mt-8">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
