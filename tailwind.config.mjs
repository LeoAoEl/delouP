/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdc54",
        lightRose: "#df8ef8",
        deepRose: "#e84db5",
        deepPurple: "#7151ee",
        footerBg: "#542c8c",
        footerAcentuate: "#502889",
        par: "#fbf1e5",
        vsColor: "#fef1e6",
        naranja: "#fc7d2e",
      },
      backgroundImage: {
        heroMain:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.0)), url('/src/assets/images/1.webp')",
        waves: " url('/src/assets/images/wave.webp')",
        bottomWave: " url('/src/assets/images/purpleWave.webp')",
      },
      fontFamily: {
        noto: ["Noto Sans Georgian", "sans-serif"],
        comic: ["Comic Neue", "sans-serif"],
        cSoon: ["Coming Soon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
