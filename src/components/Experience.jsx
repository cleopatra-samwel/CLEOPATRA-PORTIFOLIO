import { education, experience } from "../data/education";

// Experience first, then education, in one vertical timeline.
const items = [
  ...experience.map((e) => ({
    id: e.id,
    period: e.period,
    title: e.title,
    org: e.organization,
    description: e.description,
  })),
  ...education.map((e) => ({
    id: e.id,
    period: e.period,
    title: e.degree,
    org: e.institution,
    description: e.description,
  })),
];

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="container-page">
        <p className="eyebrow">Background</p>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-sub">Practical training and academic study.</p>

        <ol className="relative mt-10 max-w-3xl border-l border-[var(--color-line)] pl-8">
          {items.map((item) => (
            <li key={item.id} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-2 border-[var(--color-cyan)] bg-[var(--color-surface)]"
                aria-hidden="true"
              />
              <p className="mono text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="font-medium text-[var(--color-cyan)]">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
