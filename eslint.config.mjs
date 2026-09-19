import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/**',
      'allure-results/**',
      'allure-report/**',
      'test-results/**',
      'playwright-report/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.js'],
  },
  eslintConfigPrettier,
];
