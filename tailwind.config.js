/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "x-mobile": { max: "389px" },
      mobile: { min: "390px", max: "480px" },
      // => @media (min-width: 390px and max-width: 480px) { ... }

      tablet: "481px",
      // => @media (min-width: 481px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      gridTemplateColumns: {
        "category-cols": "repeat(10, 1fr)",
        "category-rows": "1fr",
      },
      boxShadow: {
        navigation:
          "rgb(0 0 0 / 50%) 0px -6px 6px -6px",
        button:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        item: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      shadow: {
        left: "-10px 0px 3px 0px #aaa",
      },
      dropShadow: {
        navigation:
          "rgb(0 0 0 / 50%) 0px -6px 6px -6px",
        top: "0 -10px 20px -5px rgba(115,115,115,0.75)",
        input:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        shadow:
          "rgb(0 0 0 / 18%) 0px 6px 12px 0px",
      },
      colors: {
        red: "#ff424e",
        blue: "#1A94FF",
        "dark-blue": "#0B74E5",
        main: "#242424",
      },
      keyframes: {
        scale: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.25)",
            opacity: "0.5",
          },
        },
      },
      animation: {
        scale: "scale 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
