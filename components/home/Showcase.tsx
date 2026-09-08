import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";
import Image from "next/image";

export function Showcase() {
  return (
    <section id="work" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              title="A look at our work"
              description="A mix of client and concept projects, each built with the same mobile-first process."
            />
            <Button href="/contact" variant="secondary" className="hidden sm:inline-flex">
              Get a Quote
            </Button>
          </div>
        </FadeIn>

        {/* Mobile: horizontal snap-scroll. Desktop: grid. */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn
              key={project.id}
              delay={Math.min(i, 3) * 0.05}
              className="min-w-[62%] shrink-0 snap-start sm:min-w-0 sm:shrink"
            >
              <div className="flex h-full flex-col">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(15,17,23,0.25)]">
                  <div className="flex items-center gap-1.5 border-b border-border bg-[#f4f5f7] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="relative aspect-[16/9] sm:aspect-[16/11]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-primary/10 via-brand-indigo/10 to-brand-accent/10">
                        <div className="h-8 w-8 rounded-md bg-brand-primary/20" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[16px] font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-text-muted">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Badge tone="brand">{project.category}</Badge>
                  {project.isConcept && <Badge>Concept Project</Badge>}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-[13.5px] font-medium text-brand-primary"
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                ) : (
                  <button className="mt-3 flex items-center gap-1 text-[13.5px] font-medium text-brand-primary">
                    View Project <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
