import { skillCategories } from "../data/skills";

// The data file keeps six detailed categories; the section shows them
// grouped into four cards.
const groups = [
  { title: "Frontend", ids: ["frontend"] },
  { title: "Backend & Data", ids: ["backend", "database"] },
  { title: "Networking", ids: ["networking"] },
  { title: "Systems & Tools", ids: ["tools", "iot"] },
].map((g) => ({
  ...g,
  skills: g.ids.flatMap((id) => skillCategories.find((c) => c.id === id)?.skills ?? []),
}));

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="container-page">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Tools I have used to build real work.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card p-6">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="chip !py-1 !text-[13px]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
