import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Antrasit (kömür grisi) — kurumsal, lacivert değil
        ink: {
          DEFAULT: "#1e2128",
          light: "#2b2f39",
          dark: "#141519",
        },
        // Altın vurgu
        gold: {
          DEFAULT: "#bf9b30",
          light: "#d9b54a",
          dark: "#9c7d1f",
        },
        // Sıcak açık zemin
        cream: "#f7f4ee",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
