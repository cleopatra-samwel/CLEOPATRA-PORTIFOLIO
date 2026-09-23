import { Globe, Server, Database, Network, Cpu } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/services";

const icons = { Globe, Server, Database, Network, Cpu };

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-2)]">
      <div className="container-page">
        <Reveal>
          <p className="section-label text-center">Services</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            What I can help with
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Globe;
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <div className="glass-panel h-full rounded-2xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                    <Icon size={20} className="text-[var(--color-cyan)]" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
