import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alumniSans: ['"Alumni Sans"', "sans-serif"],
        wireOne: ['"Wire One"', "sans-serif"],
      },
      colors: {
        backWhite: "#F5F5F5",
        oranges: "#FF5733",
        backCream: "#FFF3E0",
      },
    },
  },
  plugins: [],
} satisfies Config;
