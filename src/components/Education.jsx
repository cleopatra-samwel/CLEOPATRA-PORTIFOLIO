import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[var(--color-surface-2)]">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="section-label text-center">Education</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            Academic background
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="glass-panel flex gap-5 rounded-2xl p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                  <GraduationCap size={22} className="text-[var(--color-cyan)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-cyan)]">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {item.degree}
                  </h3>
                  <p className="text-[var(--color-muted)]">{item.institution}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
