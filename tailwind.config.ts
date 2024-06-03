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
      backgroundColor: {
        pointColor: "#7353EA",
        hoverColor: "#613DD6",
      },
      // keyframes: {
      //   infiniteSlideOriginal: {
      //     "0%": { transform: "translateX(0)" },
      //     "50%": { transform: "translateX(-100%)" },
      //     "50.1%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(0)" },
      //   },
      //   infiniteSlideCopy: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-200%)" },
      //   },
      //   infiniteSlide: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-50%)" },
      //   },
      // },
      // animation: {
      //   infiniteSlideOriginal: "infiniteSlideOriginal 10s linear infinite",
      //   infiniteSlideCopy: "infiniteSlideCopy 10s linear infinite",
      //   infiniteSlide: "infiniteSlide 10s linear infinite",
      // },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "loop-reverse": {
          // loop-reverse 애니메이션을 정의합니다.
          "0%": { transform: "translateX(-50%)" }, // 애니메이션의 시작은 -50%에서 시작합니다.
          "100%": { transform: "translateX(0)" }, // 애니메이션의 끝은 원래 위치로 돌아갑니다.
        },
      },
      animation: {
        loop: "loop 8s linear infinite",
        "loop-reverse": "loop-reverse 8s linear infinite", // loop-reverse 애니메이션을 적용합니다.
      },
    },
  },
  plugins: [],
};
export default config;
