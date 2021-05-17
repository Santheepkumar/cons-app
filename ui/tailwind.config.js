module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",
        light: "#C9D1D9"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
