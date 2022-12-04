/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
