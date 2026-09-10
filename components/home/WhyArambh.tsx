import {
  Wand2,
  Smartphone,
  Gauge,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    icon: Wand2,
    title: "Custom, not generic",
    description: "Designed around your goals, never a recycled template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first, everywhere",
    description: "Built for mobile first, then proven on tablet and desktop.",
  },
  {
    icon: Gauge,
    title: "Performance focused",
    description: "Fast-loading pages with optimized images and minimal bloat.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "Honest timelines and simple project updates — no jargon.",
  },
];

export function WhyArambh() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-text sm:text-[32px] md:text-[38px]">
              A strong beginning, done properly.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
              ArambhHai helps businesses, professionals, and growing brands
              build a simple, modern, and effective online presence. We focus
              on clean design, responsive websites, and practical solutions
              that are easy to use.
            </p>
            <Button href="/about" variant="secondary" className="mt-5 w-fit">
              Learn More
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <FadeIn key={reason.title} delay={Math.min(i, 4) * 0.04}>
                  <div className="flex gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-brand-primary/8">
                      <Icon size={18} className="text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-semibold text-text">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-text-muted">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
