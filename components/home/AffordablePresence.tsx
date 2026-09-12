import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const pricing = [
  ["Website", "Starting from ₹799"],
  ["Additional pages", "₹199 per page"],
  ["Deployment services", "Only ₹199"],
  ["Testing preview", "Free temporary testing subdomain"],
  ["Custom domain", "Only the domain provider's charge"],
];

export function AffordablePresence() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Affordable websites, thoughtfully built"
            description="Start with what you need today and grow with confidence. Final pricing depends on pages, features, and requirements."
          />
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pricing.map(([label, value], index) => (
            <FadeIn key={label} delay={Math.min(index, 4) * 0.04}>
              <div className="h-full rounded-[var(--radius-md)] border border-border bg-background p-5">
                <p className="text-[15px] font-semibold text-text">{label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-text-muted">{value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
