import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { siteConfig } from "../data/siteConfig";

const onDark =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-ring";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the email is selectable text, so it can still be copied by hand.
    }
  };

  return (
    <section id="contact" className="bg-[var(--color-ink)] py-16 text-white md:py-24">
      <div className="container-page">
        <p className="eyebrow !text-white/80">Let's talk</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Let's build something together
        </h2>
        <p className="mt-4 max-w-xl text-white/85">
          I'm open to software developer, network engineer, internship and remote roles.
        </p>

        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch">
          <p className="mono flex-1 select-all break-all rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-sm">
            {siteConfig.email}
          </p>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90 focus-ring"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className={onDark}>
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className={onDark}>
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={siteConfig.cvDownload} download className={onDark}>
            <Download size={16} /> Download CV
          </a>
        </div>

        <p className="mono mt-8 text-xs text-white/80">
          {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
