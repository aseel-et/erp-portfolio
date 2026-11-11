"use client";

import { usePreferences } from "./Preferences";

// Shared section shell: a heading column on the left, content on the right.
export default function Section({ id, title, lead, children, className = "" }) {
  const { t } = usePreferences();
  return (
    <section id={id} className={`border-t border-line py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-page px-6">
        <div className="mb-12 max-w-[60ch] md:mb-16">
          <h2 className="text-3xl font-medium tracking-[-0.015em] md:text-[2.5rem] md:leading-tight">{t(title)}</h2>
          {lead && <p className="mt-4 text-lg leading-relaxed text-fog">{t(lead)}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
