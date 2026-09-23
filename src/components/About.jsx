import { Download, GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "../data/siteConfig";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="glass-panel aspect-[4/5] rounded-2xl flex flex-col items-center justify-center gap-3 text-center p-6">
              {/*
                PLACEHOLDER PHOTO —
                Replace this block with a real <img> once you have a photo:
                1. Add your file to: src/assets/images/profile.jpg
                2. Import it at the top of this file:
                     import profile from "../assets/images/profile.jpg";
                3. Replace the block below with:
                     <img src={profile} alt={siteConfig.name} className="h-full w-full object-cover rounded-2xl" />
              */}
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-display text-2xl font-bold text-[#050810]">
                {siteConfig.initials}
              </span>
              <p className="text-sm text-[var(--color-muted)]">
                Profile photo placeholder
              </p>
            </div>
            <div className="glass-panel absolute -bottom-5 -right-5 rounded-xl px-4 py-3 flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-[var(--color-cyan)]" />
              {siteConfig.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-label">About Me</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Building with software, curious about networks
          </h2>

          <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              I'm a Computer Systems and Networks student at Ardhi University,
              interested in software development, networking, and building
              practical technology solutions.
            </p>
            <p>
              I'm developing hands-on experience by building real projects
              using modern web technologies alongside networking and IoT
              concepts — from queue management systems to IoT monitoring
              tools.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--color-muted)]">
            <GraduationCap size={18} className="text-[var(--color-cyan)]" />
            Bachelor of Computer Systems and Networks — Ardhi University
          </div>

          <a
            href={siteConfig.cvPath}
            download
            className="btn-primary mt-8 inline-flex"
          >
            <Download size={16} />
            Download CV
          </a>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Placeholder link — add your CV file at{" "}
            <code className="text-[var(--color-cyan)]">
              public/cv/Cleopatra_Samwel_Andrea_CV.pdf
            </code>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
