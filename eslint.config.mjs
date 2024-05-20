import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tsEslint.config(
  {
    ignores: ['!.storybook', 'storybook-static', '.next', '*.mjs', 'dist'],
  },
  js.configs.recommended,
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ),
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
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
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            object: false,
          },
          extendDefaults: true,
        },
      ],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-negated-condition': 'error',
      'no-implicit-coercion': 'error',
      'no-var': 'error',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'error',
      'react/prop-types': 'off',
      "no-restricted-imports": [
        "error",
        {
          "patterns": ["@mui/*/*/*"]
        }
      ]
    },
  },
);
