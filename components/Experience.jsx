"use client";

import { usePreferences } from "./Preferences";

import Section from "./Section";
import { experience as baseexperience, education as baseeducation } from "@/data/portfolio";

export default function Experience() {
  const { t } = usePreferences();
  const experience = t(baseexperience);
  const education = t(baseeducation);
  return (
    <Section id="experience" title="Professional experience">
      <ol className="relative space-y-14 border-s border-line ps-8 md:ps-12">
        {experience.map((job) => (
          <li key={job.role + job.company} className="relative">
            <span className="absolute -start-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-brass ring-4 ring-ink md:-start-[3.35rem]" aria-hidden />
            <p className="text-sm text-fog">{job.period}</p>
            <h3 className="mt-1 text-2xl font-medium">{job.role}</h3>
            <p className="mt-1 text-paper/80">{job.company}</p>
            <p className="mt-5 max-w-[65ch] leading-relaxed text-fog">{job.summary}</p>
            <ul className="mt-6 max-w-[70ch] space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 leading-relaxed">
                  <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-brass" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}

        {education.map((e) => (
          <li key={e.degree} className="relative">
            <span className="absolute -start-[2.35rem] top-1.5 h-3 w-3 rounded-full border border-fog bg-ink ring-4 ring-ink md:-start-[3.35rem]" aria-hidden />
            {e.period && <p className="text-sm text-fog">{e.period}</p>}
            <h3 className="mt-1 text-xl font-medium">{e.degree}</h3>
            {e.school && <p className="mt-1 text-paper/80">{e.school}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
