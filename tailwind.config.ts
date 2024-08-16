import { error } from "console";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1":
          "linear-gradient(90deg, var(--bg-site-gradient-from), var(--bg-site-gradient-to))",
      },
      backgroundColor: {
        primary: "hsla(var(--color-site-1-c))",
        inverted: "hsla(var(--color-site-1))",
      },
      colors: {
        background: "hsla(var(--color-site-1-c))",
        primary: "hsla(var(--color-site-1))",
        secondary: {
          100: "hsla(var(--color-site-2-1))",
          200: "hsla(var(--color-site-2-2))",
        },
        error: "hsla(var(--color-site-error))",
      },
    },
  },
  plugins: [],
};
export default config;
