module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["standard-with-typescript", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
  },
  ignorePatterns: ["build/**/*"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
};
