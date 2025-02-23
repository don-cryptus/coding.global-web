export default {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:import/typescript",
    "plugin:drizzle/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  plugins: ["@typescript-eslint", "solid", "tailwindcss", "import", "drizzle"],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
    "drizzle/enforce-delete-with-where": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "solid/reactivity": "off",
  },
};
