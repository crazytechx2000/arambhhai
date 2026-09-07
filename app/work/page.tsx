import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A look at the websites ArambhHai has designed and built — portfolios, business sites, school sites, and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Our work"
          description="A mix of client and concept projects, each built with the same mobile-first process."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex h-full flex-col">
              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(15,17,23,0.25)]">
                <div className="flex items-center gap-1.5 border-b border-border bg-[#f4f5f7] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[4/3] sm:aspect-[16/11]">
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
              <div className="mt-4">
                <h2 className="text-[16px] font-semibold text-text">
                  {project.title}
                </h2>
                <p className="mt-1 text-[14px] leading-relaxed text-text-muted">
                  {project.description}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge tone="brand">{project.category}</Badge>
                {project.isConcept && <Badge>Concept Project</Badge>}
              </div>
              {project.tech && (
                <p className="mt-2 text-[13px] text-text-muted">{project.tech}</p>
              )}
              {project.link && (
                <div className="mt-3">
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="w-full"
                  >
                    View Project <ExternalLink size={16} />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="text-[22px] font-bold text-text sm:text-[26px]">
            Want a website like one of these, built for you?
          </h2>
          <Button href="/contact" size="lg">
            Start a Project <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
