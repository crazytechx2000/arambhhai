"use client";

import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";
import Image from "next/image";

const featuredProjects = [...projects]
  .sort((first, second) => Number(Boolean(second.liveUrl)) - Number(Boolean(first.liveUrl)))
  .slice(0, 3);

export function Showcase() {
  const projectsScrollerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  function updateActiveProject() {
    const scroller = projectsScrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-project-card]")
    );
    const scrollPosition = scroller.scrollLeft + 20;
    const nextActiveProject = cards.reduce(
      (closestIndex, card, cardIndex) =>
        Math.abs(card.offsetLeft - scrollPosition) <
        Math.abs(cards[closestIndex].offsetLeft - scrollPosition)
          ? cardIndex
          : closestIndex,
      0
    );
    setActiveProject(nextActiveProject);
  }

  function scrollToProject(projectIndex: number) {
    const scroller = projectsScrollerRef.current;
    const card = scroller?.querySelectorAll<HTMLElement>("[data-project-card]")[
      projectIndex
    ];
    if (!scroller || !card) return;

    scroller.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
    setActiveProject(projectIndex);
  }

  return (
    <section id="work" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div>
            <SectionHeading
              title="A look at our work"
              description="A mix of client and concept projects, each built with the same mobile-first process."
            />
          </div>
        </FadeIn>

        {/* Mobile: horizontal snap-scroll. Desktop: grid. */}
        <div
          ref={projectsScrollerRef}
          onScroll={updateActiveProject}
          className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:grid-cols-4"
        >
          {featuredProjects.map((project, i) => (
            <FadeIn
              key={project.id}
              delay={Math.min(i, 3) * 0.05}
              className="w-[calc(100vw-2.5rem)] min-w-[calc(100vw-2.5rem)] shrink-0 snap-center sm:w-auto sm:min-w-0 sm:snap-start sm:shrink"
            >
              <div data-project-card="true" className="flex h-full min-w-0 flex-col">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(15,17,23,0.25)]">
                  <div className="flex items-center gap-1.5 border-b border-border bg-[#f4f5f7] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="relative aspect-[16/9] bg-[#f4f6f7] sm:aspect-[16/11]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        className="object-contain p-1.5"
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
                <div className="mt-3 flex flex-nowrap items-center justify-between gap-2">
                  <Badge tone="brand" className="max-w-[58%] shrink-0 truncate">{project.category}</Badge>
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="ml-auto h-8 min-h-8 shrink-0 px-2 text-[12px]"
                    >
                      Live <ExternalLink size={13} />
                    </Button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2 sm:hidden" aria-label="Project slides">
          {featuredProjects.map((project, projectIndex) => (
            <button
              key={project.id}
              type="button"
              aria-label={`View ${project.title}`}
              aria-current={activeProject === projectIndex ? "true" : undefined}
              onClick={() => scrollToProject(projectIndex)}
              className={`h-2 rounded-full transition-all ${
                activeProject === projectIndex
                  ? "w-6 bg-brand-primary"
                  : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button href="/work" variant="secondary">
            View More Projects <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
