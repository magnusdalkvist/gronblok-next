/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "3px",
      DEFAULT: "6px",
      lg: "12px",
      full: "9999px",
    },
    colors: {
      darkGreen: "#12471e",
      lightBeige: "#f9f4e8",
      lightGreen: "#84b85c",
      yellowAccent: "#e8ff8e",
      orangeAccent: "#ff8c00",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
