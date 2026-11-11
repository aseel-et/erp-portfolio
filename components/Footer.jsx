"use client";

import { usePreferences } from "./Preferences";

import { profile as baseprofile } from "@/data/portfolio";

export default function Footer() {
  const { t } = usePreferences();
  const profile = t(baseprofile);
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col justify-between gap-2 px-6 py-8 text-sm text-fog sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.roles.join(" | ")}</p>
      </div>
    </footer>
  );
}
