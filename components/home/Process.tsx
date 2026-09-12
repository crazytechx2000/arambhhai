import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            title="A clear path from idea to launch"
            description="A simple, visible process that keeps your project moving with confidence."
          />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-5 sm:gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.05}>
              <div
                className={`relative py-5 sm:py-0 ${
                  i !== processSteps.length - 1
                    ? "border-b border-border sm:border-b-0 sm:border-r sm:pr-6"
                    : ""
                }`}
              >
                <span className="text-[13px] font-semibold text-brand-primary">
                  {step.step}
                </span>
                <h3 className="mt-2 text-[17px] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
