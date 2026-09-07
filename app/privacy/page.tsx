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
        <p className="mt-4 text-[14px] font-medium text-brand-primary">
          Placeholder content — replace with ArambhHai&apos;s actual privacy policy
          before launch.
        </p>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-muted">
          <p>
            This page will describe what information {siteConfig.name}{" "}
            collects through the contact form (name, email, phone, and
            project details), how it is used to respond to enquiries, and
            how long it is retained.
          </p>
          <p>
            It will also cover: whether any third-party services (such as
            the email provider used to send notifications) process this
            data, cookie usage if analytics are added later, and how
            visitors can request their information be deleted.
          </p>
          <p>
            Contact {siteConfig.email} with any privacy-related questions in
            the meantime.
          </p>
        </div>
      </Container>
    </section>
  );
}
