import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { audiences } from "@/lib/data/audiences";

export function WhoWeBuildFor() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Who we build for" align="center" />
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {audiences.map(({ label, icon: Icon }, i) => (
            <FadeIn key={label} delay={Math.min(i, 4) * 0.04}>
              <div className="flex flex-col items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-6 text-center">
                <Icon size={22} className="text-brand-primary" />
                <span className="text-[14px] font-medium text-text">
                  {label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
