"use client";

import { usePreferences } from "./Preferences";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile as baseprofile } from "@/data/portfolio";

// An illustrative sales cycle, the way it moves through ERPNext
const flow = [
  { doctype: "Quotation", id: "SAL-QTN-2026-00118", party: "Customer order request" },
  { doctype: "Sales Order", id: "SAL-ORD-2026-00094", party: "Confirmed by customer" },
  { doctype: "Delivery Note", id: "MAT-DN-2026-00087", party: "Stock leaves warehouse" },
  { doctype: "Sales Invoice", id: "ACC-SINV-2026-00142", party: "Posted to the ledger" },
  { doctype: "Payment Entry", id: "ACC-PAY-2026-00131", party: "Receivable cleared" }
];

function DocumentFlow() {
  const { t } = usePreferences();
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce ? flow.length : 0);

  useEffect(() => {
    if (reduce) { setDone(flow.length); return; }
    if (done >= flow.length) return;
    const t = setTimeout(() => setDone((d) => d + 1), done === 0 ? 900 : 650);
    return () => clearTimeout(t);
  }, [done, reduce]);

  const replay = () => setDone(0);

  return (
    <figure className="relative">
      <div className="rounded-xl border border-line bg-panel/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="text-sm text-fog">{t("Sales cycle")}</span>
          <span className="text-sm text-fog">
            {done}/{flow.length} {t("submitted")}
          </span>
        </div>

        <div className="px-5 py-4">
        <ol className="relative">
          {/* connector rail between the first and last status dots */}
          <span aria-hidden className="absolute start-[0.6rem] top-7 bottom-7 w-px bg-line">
            <motion.span
              className="absolute inset-0 origin-top bg-posted"
              initial={false}
              animate={{ scaleY: Math.max(done - 1, 0) / (flow.length - 1) }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </span>
          {flow.map((doc, i) => {
            const submitted = i < done;
            return (
              <li key={doc.id} className="relative flex h-14 items-center gap-4">
                <span
                  className={`relative z-10 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
                    submitted ? "border-posted bg-posted" : "border-line bg-ink"
                  }`}
                >
                  {submitted && (
                    <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink" aria-hidden>
                      <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-tight">{t(doc.doctype)}</p>
                  <p className="truncate font-mono text-xs text-fog">{doc.id}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors duration-500 ${
                    submitted ? "bg-posted/15 text-posted" : "bg-draft/15 text-draft"
                  }`}
                >
                  {t(submitted ? "Submitted" : "Draft")}
                </span>
              </li>
            );
          })}
        </ol>
        </div>

        <div className="flex items-center justify-between border-t border-line px-5 py-3 text-sm">
          <span className="text-fog">{t(done >= flow.length ? "Cycle complete, ledger balanced" : "Processing…")}</span>
          <button
            onClick={replay}
            disabled={done < flow.length}
            className="text-brass hover:underline disabled:opacity-0"
          >{t("Replay")}</button>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-fog">{t("One order, five linked documents. This is the kind of flow I configure and connect.")}</figcaption>
    </figure>
  );
}

export default function Hero() {
  const { t } = usePreferences();
  const profile = t(baseprofile);
  const reduce = useReducedMotion();
  const enter = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="ledger-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-page items-center gap-14 px-6 md:grid-cols-[1.15fr_1fr] md:gap-16">
        <div>
          <motion.p {...enter(0)} className="mb-6 inline-flex items-center gap-2 text-sm text-fog">
            <span className="h-2 w-2 rounded-full bg-posted" aria-hidden />
            {profile.availability}
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="max-w-[16ch] text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]"
          >
            {profile.headline}
          </motion.h1>

          <motion.p {...enter(0.16)} className="mt-6 text-lg text-paper/90">
            {profile.name}
            <span className="text-fog">, {profile.role}</span>
          </motion.p>

          <motion.p {...enter(0.22)} className="mt-3 max-w-[60ch] leading-relaxed text-fog">
            {profile.intro}
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-brass px-5 py-3 font-medium text-ink transition hover:brightness-110"
            >{t("See my projects")}</a>
            <a
              href={profile.cv}
              download
              className="rounded-lg border border-line px-5 py-3 font-medium transition hover:border-fog"
            >{t("Download CV")}</a>
          </motion.div>
        </div>

        <motion.div {...enter(0.2)}>
          <DocumentFlow />
        </motion.div>
      </div>
    </section>
  );
}
