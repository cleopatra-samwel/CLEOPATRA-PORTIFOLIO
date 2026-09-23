import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import Reveal from "./Reveal";
import ProjectGallery from "./ProjectGallery";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="section-label text-center">Featured Projects</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            Things I've built
          </h2>
        </Reveal>

        {featured && (
          <Reveal delay={0.1} className="mt-14">
            <FeaturedCard project={featured} />
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }) {
  return (
    <div className="glass-panel grid overflow-hidden rounded-2xl md:grid-cols-2 group transition-shadow hover:shadow-2xl hover:shadow-purple-500/10">
      <ProjectGallery
        images={project.images}
        alt={project.name}
        heightClass="h-64 md:h-full md:min-h-[22rem]"
      />
      <div className="p-7 sm:p-8 flex flex-col">
        <span className="section-label">Featured Project</span>
        <h3 className="mt-2 font-display text-2xl font-semibold">
          {project.name}
        </h3>
        <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[var(--color-muted)]">
          {project.features.slice(0, 6).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-cyan)]" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <ProjectLinkButton href={project.github} icon={GithubIcon} label="GitHub" />
          <ProjectLinkButton href={project.demo} icon={ExternalLink} label="Live Demo" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="glass-panel flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--color-cyan)]/40">
      <ProjectGallery
        images={project.images}
        alt={project.name}
        heightClass="h-56"
      />
      <div className="flex flex-1 flex-col p-6">
        {project.category && (
          <span className="section-label">{project.category}</span>
        )}
        <h3 className="mt-1 font-display text-lg font-semibold">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 text-[11px] text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3 pt-5">
          <ProjectLinkButton href={project.github} icon={GithubIcon} label="GitHub" small />
          <ProjectLinkButton href={project.demo} icon={ExternalLink} label="Live Demo" small />
        </div>
      </div>
    </div>
  );
}

function ProjectLinkButton({ href, icon: Icon, label, small }) {
  const base = `inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] font-medium transition-colors focus-ring ${
    small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
  }`;

  if (!href) {
    return (
      <span
        className={`${base} cursor-not-allowed text-[var(--color-muted)]/50`}
        title="Link coming soon"
        aria-disabled="true"
      >
        <Icon size={small ? 14 : 16} />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} text-[var(--color-text)] hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan)]`}
    >
      <Icon size={small ? 14 : 16} />
      {label}
    </a>
  );
}
