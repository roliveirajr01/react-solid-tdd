const { FlatCompat } = require("@eslint/eslintrc");
const { configs: tsConfigs } = require("@typescript-eslint/eslintrc");

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends(
    "standard-with-typescript",
    "plugin:react/recommended"
  ),

  tsConfigs.recommended,
  tsConfigs["recommended-type-checked"],

  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "^_",
          "argsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-unsafe-argument": "off"
    }
  },
  {
    files: ["**/*.spec.ts", "**/*.test.ts"] ,
    rules: {
      "@typescript-eslint/unbound-method": "off"
    }
  }
];
