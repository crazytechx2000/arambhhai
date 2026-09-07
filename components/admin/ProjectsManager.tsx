"use client";

import { useEffect, useState } from "react";
import { projects as initialProjects } from "@/lib/data/projects";
import type { Project } from "@/lib/data/projects";

const STORAGE_KEY = "arambh-admin-projects";

function loadProjects(): Project[] {
  if (typeof window === "undefined") return initialProjects;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Project[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return initialProjects;
}

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>(() => loadProjects());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Project>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects]);

  function resetForm() {
    setForm({});
    setEditingId(null);
  }

  function startEdit(project: Project) {
    setForm({ ...project });
    setEditingId(project.id);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.category || !form.description) return;

    if (editingId) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editingId ? { ...p, ...form } as Project : p))
      );
    } else {
      const newProject: Project = {
        id: form.id || `project-${Date.now()}`,
        title: form.title,
        category: form.category,
        description: form.description,
        image: form.image || "",
        link: form.link || "",
        tech: form.tech || "",
        isConcept: form.isConcept ?? false,
      };
      setProjects((prev) => [...prev, newProject]);
    }
    resetForm();
  }

  function handleDelete(id: string) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    if (editingId === id) resetForm();
  }

  function handleExport() {
    const blob = new Blob([`export const projects = ${JSON.stringify(projects, null, 2)};`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.ts";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-[18px] font-semibold text-text">
          {editingId ? "Edit Project" : "Add New Project"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-[14px] font-medium text-text">Title</label>
            <input
              type="text"
              required
              value={form.title || ""}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
              placeholder="Project title"
            />
          </div>

          <div>
            <label className="mb-1 block text-[14px] font-medium text-text">Category</label>
            <select
              required
              value={form.category || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, category: e.target.value as Project["category"] }))
              }
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
            >
              <option value="">Select category</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Business">Business</option>
              <option value="Education">Education</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Small Business">Small Business</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-[14px] font-medium text-text">Tech / Stack</label>
            <input
              type="text"
              value={form.tech || ""}
              onChange={(e) => setForm((f) => ({ ...f, tech: e.target.value }))}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
              placeholder="Next.js, Tailwind CSS"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-[14px] font-medium text-text">Description</label>
            <textarea
              required
              rows={3}
              value={form.description || ""}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
              placeholder="Short project description"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-[14px] font-medium text-text">Cloudinary Image URL</label>
            <input
              type="url"
              value={form.image || ""}
              onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
              placeholder="https://res.cloudinary.com/your-cloud/image/upload/..."
            />
            <p className="mt-1 text-[12px] text-text-muted">
              Upload image to Cloudinary and paste the secure URL here.
            </p>
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-[14px] font-medium text-text">Project Link</label>
            <input
              type="url"
              value={form.link || ""}
              onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15"
              placeholder="https://example.com/project"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="isConcept"
              type="checkbox"
              checked={form.isConcept ?? false}
              onChange={(e) => setForm((f) => ({ ...f, isConcept: e.target.checked }))}
              className="h-4 w-4 rounded border-border text-brand-primary focus:ring-brand-primary"
            />
            <label htmlFor="isConcept" className="text-[14px] text-text">
              Concept project
            </label>
          </div>

          <div className="flex items-center gap-3 sm:col-span-2">
            <button
              type="submit"
              className="rounded-[var(--radius-sm)] bg-brand-primary px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:brightness-110"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-[var(--radius-sm)] border border-border px-5 py-2.5 text-[15px] font-medium text-text transition-colors hover:bg-black/[0.03]"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-text">Projects</h2>
          <button
            type="button"
            onClick={handleExport}
            className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-medium text-text transition-colors hover:bg-black/[0.03]"
          >
            Export projects.ts
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-3 rounded-[var(--radius-sm)] border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-[15px] font-semibold text-text">{project.title}</p>
                <p className="text-[13px] text-text-muted">{project.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => startEdit(project)}
                  className="rounded-[var(--radius-sm)] border border-border px-3 py-1.5 text-[13px] font-medium text-text transition-colors hover:bg-black/[0.03]"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(project.id)}
                  className="rounded-[var(--radius-sm)] border border-red-200 px-3 py-1.5 text-[13px] font-medium text-red-700 transition-colors hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-[14px] text-text-muted">No projects yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
