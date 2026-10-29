import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: "#FAFAF8",
          card: "#FFFFFF",
          text: "#171717",
          secondary: "#666666",
          muted: "#8A8A8A",
          border: "#E6E6E3",
          accent: "#315BE8",
          "accent-hover": "#2548C9",
          "accent-light": "#EEF2FF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        layout: "1120px",
        article: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
