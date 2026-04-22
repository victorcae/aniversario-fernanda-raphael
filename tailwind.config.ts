import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#EEF1FB",
          100: "#D5DCF3",
          200: "#A8B4E2",
          300: "#7B8BD1",
          400: "#4E63C0",
          500: "#3A4FB2",
          600: "#2E3A8A",
          700: "#253072",
          800: "#1C255A",
          900: "#131A42"
        },
        paper: {
          50: "#FDFBF5",
          100: "#FBF7EE",
          200: "#F5EFDE",
          300: "#EEE5C8",
          400: "#E3D5A8"
        }
      },
      fontFamily: {
        script: ["var(--font-allura)", "cursive"],
        serif: ["var(--font-cormorant)", "serif"],
        display: ["var(--font-bodoni)", "serif"],
        typewriter: ["var(--font-elite)", "monospace"]
      },
      animation: {
        "fade-in": "fadeIn 1.6s ease-out forwards",
        "fade-in-up": "fadeInUp 1.4s ease-out forwards",
        "float": "float 7s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
