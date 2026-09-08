import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Websites, built around what you actually need"
            description="Every project starts from your goals, not a fixed package. Here's what ArambhHai currently builds."
          />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} delay={Math.min(i, 4) * 0.05}>
                <div className="group flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(15,17,23,0.2)] sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-primary/8">
                    <Icon size={20} className="text-brand-primary" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-text">
                    {service.name}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
