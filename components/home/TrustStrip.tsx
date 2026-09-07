import { ShieldCheck, Smartphone, PenTool, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";

const points = [
  { icon: Smartphone, label: "Built mobile-first" },
  { icon: PenTool, label: "Custom design, not templates" },
  { icon: ShieldCheck, label: "Clear, honest communication" },
  { icon: Clock, label: "Realistic project timelines" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-8">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {points.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={18} className="shrink-0 text-brand-primary" />
              <span className="text-[13px] font-medium leading-tight text-text-muted sm:text-[14px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
