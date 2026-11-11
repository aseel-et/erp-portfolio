import "./globals.css";
import { PreferencesProvider } from "@/components/Preferences";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
    type: "website"
  }
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-theme="light" suppressHydrationWarning>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brass focus:px-4 focus:py-2 focus:text-ink">
          انتقل إلى المحتوى
        </a>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
