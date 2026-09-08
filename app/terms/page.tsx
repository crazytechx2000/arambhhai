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
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-muted">
          <p>
            {siteConfig.name} provides website design and development services
            for businesses, professionals, schools, and growing brands. An
            enquiry submitted through this website is a request to discuss a
            project, not a binding contract.
          </p>
          <p>
            Project scope, deliverables, revisions, timelines, fees, payment
            terms, and ownership arrangements will be agreed directly before
            work begins. The final agreement for a project takes priority over
            this general information.
          </p>
          <p>
            Please provide accurate contact and project information. Contact
            {" "}{siteConfig.email} if you have questions about an enquiry or
            prospective project.
          </p>
        </div>
      </Container>
    </section>
  );
}
