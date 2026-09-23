import { GithubIcon, LinkedinIcon } from "./icons";
import { navLinks, siteConfig } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = navLinks.filter((l) =>
    ["Home", "About", "Projects", "Contact"].includes(l.label)
  );

  return (
    <footer className="border-t border-[var(--color-line)] py-12">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="font-display font-semibold text-lg">
            {siteConfig.name}
          </span>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {siteConfig.role}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--color-text)]">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--color-text)]">
            Connect
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/50 transition-colors focus-ring"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/50 transition-colors focus-ring"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-[var(--color-line)] pt-6 text-center text-xs text-[var(--color-muted)]">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
