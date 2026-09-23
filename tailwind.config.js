/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: "#C6A3A1",
          deep: "#A9807E",
          tint: "#F3E6E3",
        },
        cream: "#FBF6F3",
        wine: {
          DEFAULT: "#5C1E27",
          soft: "#7A2733",
          deep: "#3D141A",
        },
        ink: {
          DEFAULT: "#34302F",
          soft: "#7A716F",
        },
      },
      fontFamily: {
        display: ["'Cinzel Decorative'", "serif"],
        body: ["'Caviar Dreams'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 45% 55% 45%",
        "blob-alt": "42% 58% 61% 39% / 46% 41% 59% 54%",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeRise: {
          from: { opacity: 0, transform: "translateY(22px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)", opacity: 0.65 },
          "50%": { transform: "translateY(8px)", opacity: 1 },
        },
      },
      animation: {
        floatSlow: "floatY 7s ease-in-out infinite",
        fadeRise: "fadeRise 1s cubic-bezier(.22,.61,.36,1) both",
        bounceArrow: "bounceArrow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
