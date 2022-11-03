module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["testing-library", "use-encapsulation", "jest-dom", "react"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
