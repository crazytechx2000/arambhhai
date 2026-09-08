import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container className="prose-narrow mx-auto">
        <h1 className="text-[28px] font-bold text-text sm:text-[34px]">
          Privacy Policy
        </h1>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-muted">
          <p>
            {siteConfig.name} collects the information you submit through the
            contact form, including your name, email address, phone number,
            selected service, optional budget and timeline, and project
            message.
          </p>
          <p>
            We use these details to review and respond to your enquiry. The
            form is processed through Resend to send the enquiry to our team
            and to send a confirmation to the email address you provide.
          </p>
          <p>
            Enquiry details are not stored in a database by this website. Do
            not submit passwords, payment details, or other sensitive
            information through the form.
          </p>
          <p>
            For privacy questions about an enquiry, contact {siteConfig.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
