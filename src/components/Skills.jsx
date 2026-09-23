import {
  Code2,
  Server,
  Database,
  Network,
  Wrench,
  Cpu,
} from "lucide-react";
import Reveal from "./Reveal";
import { skillCategories } from "../data/skills";

const icons = { Code2, Server, Database, Network, Wrench, Cpu };

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--color-surface-2)]">
      <div className="container-page">
        <Reveal>
          <p className="section-label text-center">Skills</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            Technologies I work with
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.id} delay={i * 0.05}>
                <div className="glass-panel h-full rounded-2xl p-6 transition-colors hover:border-[var(--color-cyan)]/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Icon size={20} className="text-[var(--color-cyan)]" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-lg">
                    {cat.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
