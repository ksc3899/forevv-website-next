module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "forevv-blue": "#4896EF",
        "footer-black": "#303030",
      },
    },
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "1.125rem",
        md: "1.5rem",
        lg: "1rem",
        xl: "1.875rem",
        "2xl": "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
