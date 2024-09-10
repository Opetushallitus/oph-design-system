import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tsEslint.config(
  {
    ignores: [
      '**/.next',
      '**/*.mjs',
      'coverage',
      'dist',
      'example',
      'lcov',
      'storybook-static',
    ],
  },
  js.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-negated-condition': 'error',
      'no-implicit-coercion': 'error',
      'no-var': 'error',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'error',
      'react/prop-types': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@mui/*/*/*'],
        },
      ],
    },
  },
);
