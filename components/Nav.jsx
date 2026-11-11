"use client";

import { usePreferences, PreferenceControls } from "./Preferences";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile as baseprofile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const { t } = usePreferences();
  const profile = t(baseprofile);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between gap-3 px-4" aria-label={t("Main")}>
        <a href="#top" dir="ltr" className="min-w-0 font-medium tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-4 text-sm text-fog lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-paper">{t(l.label)}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`} className="rounded-lg border border-line px-4 py-2 text-paper transition hover:border-brass">{t("Email me")}</a>
          </li>
        </ul>

        <PreferenceControls />
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={t(open ? "Close menu" : "Open menu")}
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-6 lg:hidden"
          >
            {[...links, { href: `mailto:${profile.email}`, label: "Email me" }].map((l) => (
              <li key={l.href} className="border-t border-line">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-lg">
                  {t(l.label)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
