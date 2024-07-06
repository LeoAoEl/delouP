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
      },
    },
  },
  plugins: [],
};
