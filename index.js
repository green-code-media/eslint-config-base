module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["standard-with-typescript", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["build/**/*"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
};
