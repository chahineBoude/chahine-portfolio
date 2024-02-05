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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Kufi: ["Reem Kufi Fun", "sans-serif"],
        SF: ["Sixtyfour", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        noto: ["Noto", "sans-serif"],
      },
      colors: {
        background: "#2a2438",
        scrollbar: "#6c5fa7",
        btnColor1: "#363b4e",
        btnColor2: "#fffc3a",
        textHighlight: "#8983f3",
        card: "#40355e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
