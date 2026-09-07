import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectsManager } from "@/components/admin/ProjectsManager";

export const metadata: Metadata = {
  title: "Manage Projects",
  description: "Add, edit, or remove projects from the portfolio.",
  robots: { index: false, follow: false },
};

export default function AdminProjectsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-text sm:text-[36px]">
            Manage Projects
          </h1>
          <p className="mt-2 text-[15px] text-text-muted">
            Update project details, images, and links. Changes are saved locally in this demo.
          </p>
        </div>
        <ProjectsManager />
      </Container>
    </section>
  );
}
