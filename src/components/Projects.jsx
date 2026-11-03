import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import { projects } from "../data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web apps" },
  { id: "iot", label: "IoT & Embedded" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const featured = projects.find((p) => p.featured);
  const visible = projects.filter((p) => active === "all" || p.type === active);

  return (
    <section id="projects" className="section-block">
      <div className="container-page">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Web applications and IoT systems I have designed and built.</p>

        {featured && <CaseStudy project={featured} />}

        <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-ring ${
                active === f.id
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)]/40 hover:text-[var(--color-text)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ project }) {
  const f = project.features;
  const columns = [
    { step: "01 · Design", items: [f[0], f[1], f[2]] },
    { step: "02 · Build", items: [project.technologies.slice(0, 5).join(", "), project.technologies.slice(5).join(", ")].filter(Boolean) },
    { step: "03 · Deploy", items: [f[3], f[4], f[5]] },
  ];
  const arch = [
    { title: "Frontend", sub: "React · Vite · Ant Design" },
    { title: "API", sub: "Laravel · Sanctum" },
    { title: "Database", sub: "PostgreSQL" },
  ];

  return (
    <div className="card mt-10 overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-[var(--color-line)] p-3 sm:p-5 lg:border-b-0 lg:border-r">
          {/* browser frame */}
          <div className="overflow-hidden rounded-lg border border-[var(--color-line)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#f87171]" />
              <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
              <span className="h-2 w-2 rounded-full bg-[#34d399]" />
              <span className="mono ml-2 truncate rounded bg-[var(--color-surface)] px-2 py-0.5 text-[10px] text-[var(--color-muted)]">
                project-management-system
              </span>
            </div>
            <ProjectGallery images={project.images} alt={project.name} heightClass="aspect-video" />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="eyebrow">Featured project · Case study</p>
          <h3 className="mt-2 font-display text-2xl font-bold">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm" aria-label="Architecture">
            {arch.map((a, i) => (
              <div key={a.title} className="flex items-center gap-2">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-2">
                  <p className="font-semibold">{a.title}</p>
                  <p className="mono text-[10px] text-[var(--color-muted)]">{a.sub}</p>
                </div>
                {i < arch.length - 1 && <ArrowRight size={14} className="text-[var(--color-muted)]" />}
              </div>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded text-sm font-semibold text-[var(--color-cyan)] hover:underline focus-ring"
            >
              View source on GitHub ↗
            </a>
          )}
        </div>
      </div>

      <div className="grid border-t border-[var(--color-line)] md:grid-cols-3 md:divide-x md:divide-[var(--color-line)]">
        {columns.map((c) => (
          <div key={c.step} className="border-b border-[var(--color-line)] p-6 last:border-b-0 md:border-b-0">
            <p className="eyebrow">{c.step}</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-cyan)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const shown = project.technologies.slice(0, 5);
  const extra = project.technologies.length - shown.length;

  return (
    <article className="card project-card flex flex-col overflow-hidden">
      <div className="relative">
        <ProjectGallery images={project.images} alt={project.name} heightClass="aspect-video" />
        {project.demo && (
          <span className="mono absolute left-3 top-3 rounded bg-[var(--color-ink)] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white">
            LIVE
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{project.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {shown.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {extra > 0 && <span className="tag">+{extra}</span>}
        </div>
        <div className="mt-auto flex gap-4 pt-5 text-sm font-semibold">
          <CardLink href={project.demo} label="Live site ↗" />
          <CardLink href={project.github} label="Code" />
        </div>
      </div>
    </article>
  );
}

function CardLink({ href, label }) {
  if (!href) {
    return (
      <span className="cursor-not-allowed text-[var(--color-muted)]/50" title="Link coming soon" aria-disabled="true">
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded text-[var(--color-cyan)] hover:underline focus-ring"
    >
      {label}
    </a>
  );
}
