module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      // ====================================> custom colors
      colors: {
        'bgBlack': '#111',
        'softBlack': '#333',
      },
      flex: {
        '3': '3 3 0%'
      }
    },
  },
  plugins: [],
};