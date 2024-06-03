import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "elice-pubble": "#7353ea",
        "login-button-color": "#f5f5f5",
        "button-header": "#343e4b",
      },
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-945px)",
          },
        },
      },
      animation: {
        slider: "slider 5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
