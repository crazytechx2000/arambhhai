import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const pricing = [
  ["Website", "Starting from ₹799"],
  ["Additional pages", "₹199 per page"],
  ["Deployment", "₹199 total"],
  ["Testing preview", "Free temporary testing subdomain"],
  ["Custom domain", "Actual domain cost + ₹199 setup/service"],
];

export function AffordablePresence() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            title="A professional presence, made accessible"
            description="Start with what you need today and build from there. Final pricing depends on pages, features, and requirements."
          />
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pricing.map(([label, value], index) => (
            <FadeIn key={label} delay={Math.min(index, 4) * 0.04}>
              <div className="h-full rounded-[var(--radius-md)] border border-border bg-background p-5">
                <Check size={18} className="text-brand-primary" />
                <p className="mt-4 text-[15px] font-semibold text-text">{label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-text-muted">{value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
