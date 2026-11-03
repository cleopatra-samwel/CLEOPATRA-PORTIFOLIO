import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { navLinks, siteConfig } from "../data/siteConfig";

const iconLink =
  "hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/50 transition-colors focus-ring";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)]">
      {/* Layer 1: identity + links */}
      <div className="border-b border-[var(--color-line)]">
        <div className="container-page flex items-center justify-between gap-3 py-3">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3 rounded-lg focus-ring"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-ink)] font-display text-sm font-bold text-white">
              {siteConfig.initials}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-[13px] font-bold uppercase tracking-wide sm:text-sm">
                {siteConfig.name}
              </span>
              <span className="block truncate text-[11px] text-[var(--color-muted)] sm:text-xs">
                {siteConfig.role}
              </span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedinIcon size={16} />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon size={16} />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={iconLink}>
              <Mail size={16} />
            </a>
            <a
              href={siteConfig.cvDownload}
              download
              className="btn-ink !rounded-lg !px-3 !py-2 !text-[13px] sm:!px-4"
            >
              <Download size={14} />
              <span className="hidden min-[420px]:inline">Download CV</span>
              <span className="min-[420px]:hidden">CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: section menu */}
      <nav
        aria-label="Sections"
        className="border-b border-[var(--color-line)] bg-[var(--color-surface-2)]"
      >
        <ul className="container-page no-scrollbar flex gap-6 overflow-x-auto whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block border-b-2 border-transparent py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-cyan)] hover:text-[var(--color-text)] focus-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
