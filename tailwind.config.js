/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

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
        blue: "#1A94FF",
        "dark-blue": "#0B74E5",
      },
    },
  },
  plugins: [],
};
