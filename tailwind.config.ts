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
        "bg-primary": "#F5F2EE",
        "bg-secondary": "#EDEAE4",
        "brand-primary": "#2C1A0E",
        accent: "#A0522D",
        whatsapp: "#25D366",
        "text-primary": "#1A1008",
        "text-secondary": "#6B5744",
        "text-on-dark": "#F5F2EE",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.35", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.85" }],
        cta: ["18px", { lineHeight: "1.4", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
export default config;
