import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqs } from "@/lib/data/faq";

export function FaqPreview() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container className="max-w-3xl">
        <FadeIn>
          <SectionHeading title="Common questions" align="center" />
        </FadeIn>

        <FadeIn className="mt-8">
          <FaqAccordion items={faqs.slice(0, 4)} />
        </FadeIn>

        <FadeIn className="mt-6 flex justify-center">
          <Link
            href="/faq"
            className="flex items-center gap-1 text-[14.5px] font-medium text-brand-primary"
          >
            View all questions <ArrowRight size={15} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
