module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["airbnb-base-typescript-prettier", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["build/**/*", "dist/**/*"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": 2,
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
};
