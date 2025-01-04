import eslint from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import securityPlugin from 'eslint-plugin-security';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';
import airbnbBasePlugin from 'eslint-config-airbnb-base';
import airbnbTypescriptPlugin from 'eslint-config-airbnb-typescript';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json', // Ensure this points to your TypeScript configuration file
      },
      globals: {
        // Node.js global variables
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',

        // CommonJS global variables
        console: 'readonly',
      },
    },
    plugins: {
      airbnb: airbnbBasePlugin,
      'airbnb-typescript': airbnbTypescriptPlugin,
      security: securityPlugin,
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // Error prevention
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-duplicate-imports': 'error',

      // Security
      'security/detect-object-injection': 'warn',
      'security/detect-possible-timing-attacks': 'warn',
    },
  },
  prettierConfig,
];
