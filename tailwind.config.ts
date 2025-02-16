import { heroui } from "@heroui/react";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ABFEA",
        hoverColor: "#00AEE5",
        secondary: "#EBF0F4",
        sectionbg: "#F3F1F0",
        black: "#000000",
        white: "#FFFFFF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "2rem",
          "2xl": "1rem",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
