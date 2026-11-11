/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",      // page background: deep ledger blue
        panel: "rgb(var(--panel) / <alpha-value>)",    // raised surfaces
        line: "rgb(var(--line) / <alpha-value>)",     // borders and rules
        fog: "rgb(var(--fog) / <alpha-value>)",      // secondary text
        paper: "rgb(var(--paper) / <alpha-value>)",    // primary text
        brass: "rgb(var(--brass) / <alpha-value>)",    // accent: actions and focus
        posted: "rgb(var(--posted) / <alpha-value>)",   // "Submitted" status green
        draft: "rgb(var(--draft) / <alpha-value>)"     // "Draft" status
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      maxWidth: { page: "72rem" }
    }
  },
  plugins: []
};
