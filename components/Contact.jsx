"use client";

import { usePreferences } from "./Preferences";

import { profile as baseprofile } from "@/data/portfolio";

const channels = [
  { label: "Email", value: baseprofile.email, href: `mailto:${baseprofile.email}` },
  { label: "LinkedIn", value: baseprofile.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: baseprofile.linkedin },
  { label: "GitHub", value: baseprofile.github.replace(/^https?:\/\/(www\.)?/, ""), href: baseprofile.github }
];

export default function Contact() {
  const { t } = usePreferences();
  const profile = t(baseprofile);
  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-page gap-14 px-6 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <h2 className="max-w-[18ch] text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">{t("Building an ERPNext team or rolling out a new system?")}</h2>
          <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-fog">{t("I’m looking for roles where I can keep growing as an ERP developer: implementation teams, Frappe development teams and consulting companies, on-site or remote. I’d be glad to hear about yours.")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${baseprofile.email}`} className="rounded-lg bg-brass px-5 py-3 font-medium text-ink transition hover:brightness-110">{t("Email me")}</a>
            <a href={profile.cv} download className="rounded-lg border border-line px-5 py-3 font-medium transition hover:border-fog">{t("Download CV")}</a>
          </div>
        </div>

        <ul className="self-end divide-y divide-line border-y border-line">
          {channels.map((c) => (
            <li key={t(c.label)}>
              <a
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span>
                  <span className="block text-sm text-fog">{t(c.label)}</span>
                  <span dir="ltr" className="mt-0.5 block break-all font-medium transition group-hover:text-brass">{c.value}</span>
                </span>
                <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-fog transition group-hover:text-brass" aria-hidden>
                  <path d="M5 11l6-6M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
