import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#F4F6EE",
          100: "#E6EBD8",
          200: "#CFD8B4",
          300: "#B4C18A",
          400: "#8A9A5F",
          500: "#6B7B45",
          600: "#5A6B3E",
          700: "#4A5832",
          800: "#3A4A2E",
          900: "#2B3622"
        },
        sky: {
          watercolor: "#D8E4EC",
          soft: "#B8C8D8",
          deep: "#94ADC2"
        },
        cream: {
          50: "#FBF9F4",
          100: "#F5EFE4",
          200: "#E8DCC8",
          300: "#D9C7A8",
          400: "#C2A97E"
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        smallcaps: ["var(--font-cormorant-sc)", "serif"],
        script: ["var(--font-pinyon)", "cursive"],
        body: ["var(--font-lora)", "serif"]
      },
      backgroundImage: {
        "watercolor-sky":
          "radial-gradient(ellipse at top, #EEF4F7 0%, #D8E4EC 40%, #B8C8D8 100%)",
        "watercolor-soft":
          "radial-gradient(ellipse at center, #FBF9F4 0%, #E8E8DC 60%, #D8E4EC 100%)"
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "fade-in-up": "fadeInUp 1.2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "ink-spread": "inkSpread 2s ease-out forwards",
        "shimmer": "shimmer 8s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" }
        },
        inkSpread: {
          "0%": { transform: "scale(0.8)", opacity: "0", filter: "blur(10px)" },
          "100%": { transform: "scale(1)", opacity: "1", filter: "blur(0)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" }
        }
      }
    }
  },
  plugins: []
};

export default config;
