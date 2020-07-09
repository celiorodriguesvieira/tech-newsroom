module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
