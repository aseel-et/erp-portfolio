"use client";

import { usePreferences } from "./Preferences";

import Section from "./Section";
import { skills as baseskills, modules as basemodules, implementation as baseimplementation } from "@/data/portfolio";

export default function Expertise() {
  const { t } = usePreferences();
  const skills = t(baseskills);
  const modules = t(basemodules);
  const implementation = t(baseimplementation);
  return (
    <Section
      id="expertise"
      title="Technical expertise"
      lead="The tools I build with, the ERPNext modules I work across, and how I take a system from requirements to go-live."
    >
      {/* Skills as a definition table */}
      <dl className="border-t border-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 border-b border-line py-5 md:grid-cols-[14rem_1fr] md:gap-8">
            <dt className="text-fog">{s.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="rounded-md bg-panel px-3 py-1.5 text-sm ring-1 ring-inset ring-line">
                  {it}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      {/* ERP modules */}
      <div className="mt-20">
        <h3 className="text-xl font-medium">{t("ERPNext modules")}</h3>
        <p className="mt-2 text-fog">{t("Modules I’ve configured, customized or supported in real projects.")}</p>
        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line sm:grid-cols-3">
          {modules.map((m) => (
            <li key={m} className="flex items-center gap-3 bg-ink px-5 py-5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
              <span className="font-medium">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Implementation process: a real sequence, so it is numbered */}
      <div className="mt-20">
        <h3 className="text-xl font-medium">{t("How I run an implementation")}</h3>
        <p className="mt-2 text-fog">{t("The stages I work through on every project, in order.")}</p>
        <ol className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {implementation.map((s, i) => (
            <li key={s.step} className="border-t border-line pt-4">
              <span className="font-mono text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-medium">{s.step}</p>
              <p className="mt-1 text-sm leading-relaxed text-fog">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
