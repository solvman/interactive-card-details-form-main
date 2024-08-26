const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        mobile: "url(/images/bg-main-mobile.png)",
        desktop: "url(/images/bg-main-desktop.png)",
        "card-front": "url(/images/bg-card-front.png)",
        "card-back": "url(/images/bg-card-back.png)",
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
        inverted: "hsla(var(--color-site-1-c))",
        secondary: {
          100: "hsla(var(--color-site-2-1))",
          200: "hsla(var(--color-site-2-2))",
        },
        error: "hsla(var(--color-error))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
