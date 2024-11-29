import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const colors = {
  //base
  white: "#fff",
  black: "#000",
  transparent: "transparent",

  //purple
  "main-purple": "#51397d",
  "light-purple": "#7452b3",

  //error
  "main-error": "#D32F2F",
};

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
