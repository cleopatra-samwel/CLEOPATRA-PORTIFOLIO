import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data/education";

export default function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="section-label text-center">Experience &amp; Training</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            Practical experience
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.length === 0 ? (
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-2xl p-8 text-center">
                <Briefcase
                  size={22}
                  className="mx-auto text-[var(--color-cyan)]"
                />
                <p className="mt-4 text-[var(--color-muted)]">
                  Practical training and work experience will be added here
                  as it happens.
                </p>
                <p className="mt-3 text-xs text-[var(--color-muted)]">
                  To add an entry, edit the{" "}
                  <code className="text-[var(--color-cyan)]">experience</code>{" "}
                  array in{" "}
                  <code className="text-[var(--color-cyan)]">
                    src/data/education.js
                  </code>
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-6">
              {experience.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <div className="glass-panel rounded-2xl p-6 sm:p-7">
                    <p className="text-sm font-medium text-[var(--color-cyan)]">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-muted)]">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
