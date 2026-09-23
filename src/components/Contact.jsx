import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { siteConfig } from "../data/siteConfig";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sent"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // NOTE: this form is not connected to a backend or email service yet.
    // Wire it up to something like Formspree, EmailJS, or your own API
    // route before relying on it to actually deliver messages.
    console.log("Contact form submitted (not sent anywhere yet):", form);
    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="section-label text-center">Contact</p>
          <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
            Let's work together
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.05} className="space-y-4">
            <ContactInfo icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactInfo icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} />
            <ContactInfo icon={MapPin} label="Location" value={siteConfig.location} />
            <ContactInfo icon={GithubIcon} label="GitHub" value="View profile" href={siteConfig.github} />
            <ContactInfo icon={LinkedinIcon} label="LinkedIn" value="View profile" href={siteConfig.linkedin} />
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send size={16} />
                Send Message
              </button>

              {status === "sent" && (
                <p className="text-sm text-[var(--color-cyan)]" role="status">
                  Thanks — your message was validated. Connect this form to
                  an email service to actually deliver it (see the note in
                  Contact.jsx).
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, label, value, href }) {
  const content = (
    <div className="glass-panel flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-[var(--color-cyan)]/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
        <Icon size={18} className="text-[var(--color-cyan)]" />
      </div>
      <div>
        <p className="text-xs text-[var(--color-muted)]">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block focus-ring rounded-xl">
      {content}
    </a>
  );
}

function Field({ label, name, type = "text", as = "input", rows, value, onChange, error }) {
  const Tag = as;
  const inputId = `field-${name}`;
  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
        {label}
      </label>
      <Tag
        id={inputId}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className="w-full rounded-lg border border-[var(--color-line)] bg-white/[0.03] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-cyan)]/60"
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-xs text-[#f87171]">
          {error}
        </p>
      )}
    </div>
  );
}
