"use client";

import { usePreferences } from "./Preferences";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { projects as baseprojects } from "@/data/portfolio";

function ProjectRow({ p, open, onToggle, index }) {
  const { t } = usePreferences();
  const panelId = `project-${index}`;
  return (
    <li className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[1fr_auto] items-center gap-6 py-7 text-start md:grid-cols-[9rem_1fr_auto]"
      >
        <span className="hidden text-sm text-fog md:block">{p.type}</span>
        <span>
          <span className="block text-xl font-medium transition group-hover:text-brass md:text-2xl">{p.title}</span>
          <span className="mt-2 block text-sm text-fog md:hidden">{p.type}</span>
          {p.client && <span className="mt-1 block text-sm text-fog">{p.client}</span>}
        </span>
        <span
          className={`grid h-9 w-9 place-items-center rounded-full border border-line transition-transform duration-300 ${
            open ? "rotate-45 border-brass text-brass" : ""
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-9 md:grid-cols-[9rem_1fr]">
              <div className="hidden md:block" />
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr_14rem]">
                <div>
                  <h4 className="text-sm text-fog">{t("The problem")}</h4>
                  <p className="mt-2 leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm text-fog">{t("What I built")}</h4>
                  <p className="mt-2 leading-relaxed">{p.solution}</p>
                  {p.outcome && (
                    <p className="mt-4 border-s-2 border-posted ps-4 leading-relaxed text-posted">{p.outcome}</p>
                  )}
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm text-fog">{t("Modules")}</h4>
                    <p className="mt-2">{p.modules.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-fog">{t("Stack")}</h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-md bg-panel px-2.5 py-1 text-sm ring-1 ring-inset ring-line">{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Projects() {
  const { t } = usePreferences();
  const projects = t(baseprojects);
  const [open, setOpen] = useState(0);
  return (
    <Section
      id="projects"
      title="Real-world projects"
      lead="Work delivered for real businesses: implementations, custom apps, automations, integrations and reports. Open any project to see the problem and what I built."
    >
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} p={p} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </ul>
    </Section>
  );
}
