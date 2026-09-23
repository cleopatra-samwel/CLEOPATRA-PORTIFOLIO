import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { siteConfig } from "../data/siteConfig";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "Cleopatra Samwel Andrea",` },
  { indent: 1, text: `role: "Software Developer",` },
  { indent: 1, text: `focus: "Web & Computer Networks",` },
  { indent: 1, text: `location: "Dar es Salaam, TZ",` },
  { indent: 1, text: "stack: [React, Laravel, PostgreSQL]," },
  { indent: 1, text: "curious: true," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <NetworkBackdrop />

      <div className="container-page relative grid gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[15px] font-medium text-[var(--color-muted)]">
            Hi, I'm {siteConfig.name}
          </p>

          <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl leading-[1.1] text-[var(--color-text)]">
            Software Developer{" "}
            <span className="block gradient-text">
              &amp; Computer Networks Enthusiast
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[var(--color-muted)] leading-relaxed">
            I build modern web applications, explore computer networking, and
            develop technology solutions through software, IoT, and
            real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <SocialIcon href={siteConfig.github} label="GitHub">
              <GithubIcon size={18} />
            </SocialIcon>
            <SocialIcon href={siteConfig.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
              <Mail size={18} />
            </SocialIcon>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-panel mx-auto w-full max-w-md rounded-2xl p-5 shadow-2xl shadow-[#1E2A45]/10">
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
              <span className="ml-3 text-xs text-[var(--color-muted)] font-mono">
                profile.js
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-6 overflow-x-auto">
              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 1.1}rem` }}>
                  <span className="text-[var(--color-muted)]">{i + 1}</span>
                  <span className="ml-4 text-[#4C1D95]">{line.text}</span>
                </div>
              ))}
            </pre>
          </div>

          <div className="glass-panel absolute -bottom-6 -left-4 hidden sm:flex items-center gap-2 rounded-xl px-4 py-3 text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
            Available for internships &amp; freelance work
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/50 transition-colors focus-ring"
    >
      {children}
    </a>
  );
}

// Faint animated network of nodes/lines in the background — a nod to
// the "computer networks" half of the brief rather than decoration.
function NetworkBackdrop() {
  const nodes = [
    [40, 60], [180, 30], [320, 90], [460, 40], [560, 110],
    [90, 160], [260, 190], [420, 170], [540, 220], [150, 230],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8],
    [1, 6], [2, 7], [5, 9], [9, 6],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(124,58,237,0.12), transparent), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(236,72,153,0.10), transparent)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 600 260"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} fill="#7C3AED" />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
