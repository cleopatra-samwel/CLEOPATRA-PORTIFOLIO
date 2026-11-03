import { services } from "../data/services";

export default function Services() {
  return (
    <section className="section-block">
      <div className="container-page">
        <p className="eyebrow">Services</p>
        <h2 className="section-title">What I can help with</h2>
        <p className="section-sub">Areas where I can take on practical work.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card p-6">
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
