/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient": "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        "light-glass":
          "var(--light-glass-fill-10-neutral, linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(180deg, rgba(40, 40, 40, 0.10) 0%, rgba(248, 248, 248, 0.10) 100%))",
      },
    },
  },
  plugins: [],
};
