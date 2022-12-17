module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "standard",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "use-encapsulation", "testing-library", "jest-dom"],
  rules: { "use-encapsulation/prefer-custom-hooks": 1 },
  settings: {
    react: {
      version: "detect",
    },
  },
};
