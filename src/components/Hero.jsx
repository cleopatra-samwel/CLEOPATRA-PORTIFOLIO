import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { projects } from "../data/projects";
import { skillCategories } from "../data/skills";

const technologyCount = new Set(skillCategories.flatMap((c) => c.skills)).size;

const stats = [
  { value: projects.length, label: "Projects built" },
  { value: technologyCount, label: "Technologies used" },
  { value: skillCategories.length, label: "Skill areas" },
  { value: 1, label: "Training placement (NSSF)" },
];

const nowRows = [
  { label: "Project", value: "Medicube skincare e-commerce store" },
  { label: "Features", value: "Cart, online checkout, delivery to the customer's location" },
  { label: "Learning", value: "Computer Systems & Networks" },
  { label: "Hosted on", value: "Vercel" },
];

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "Cleopatra Samwel Andrea",` },
  { indent: 1, text: `role: "Software Developer",` },
  { indent: 1, text: `focus: "Web & Computer Networks",` },
  { indent: 1, text: "stack: [React, Laravel, PostgreSQL]," },
  { indent: 1, text: "curious: true," },
  { indent: 0, text: "};" },
];

const openTo = ["Software Developer", "Network Engineer", "Internship", "Remote"];

export default function Hero() {
  return (
    <section id="home" className="py-14 md:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="eyebrow">
            Software Developer &amp; Computer Networks Enthusiast · Tanzania
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            I build web applications and IoT systems with a networking mindset.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-muted)]">
            I build modern web applications, explore computer networking, and
            develop technology solutions through software, IoT, and real-world
            projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-ink !rounded-lg">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href={siteConfig.cvDownload} download className="btn-secondary !rounded-lg">
              <Download size={16} />
              Download CV
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold">{s.value}</dd>
                <p className="mt-1 text-xs leading-snug text-[var(--color-muted)]" aria-hidden="true">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <aside className="card overflow-hidden" aria-label="Currently working on">
          <div className="flex items-center gap-2.5 bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#34d399]" aria-hidden="true" />
            Currently working on
          </div>
          <dl className="divide-y divide-[var(--color-line)] px-5">
            {nowRows.map((r) => (
              <div key={r.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm">
                <dt className="mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  {r.label}
                </dt>
                <dd className="font-medium">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="m-5 mt-2 rounded-lg bg-[var(--color-surface-2)] p-4">
            <pre className="mono overflow-x-auto text-[12px] leading-6">
              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 1.1}rem` }} className="whitespace-pre text-[#4C1D95]">
                  {line.text}
                </div>
              ))}
            </pre>
          </div>
        </aside>
      </div>

      <div className="container-page mt-10 flex flex-wrap items-center gap-2.5">
        <span className="mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
          Open to:
        </span>
        {openTo.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
