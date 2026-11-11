"use client";

import { usePreferences } from "./Preferences";

import Section from "./Section";
import { about as baseabout } from "@/data/portfolio";

export default function About() {
  const { t } = usePreferences();
  const about = t(baseabout);
  return (
    <Section id="about" title="Where business process meets code">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="space-y-5 text-[1.075rem] leading-[1.75] text-paper/85">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="max-w-[65ch]">{p}</p>
          ))}
        </div>
        <dl className="self-start divide-y divide-line border-y border-line">
          {about.facts.map((f) => (
            <div key={f.label} className="py-5">
              <dt className="text-sm text-fog">{f.label}</dt>
              <dd className="mt-1 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
