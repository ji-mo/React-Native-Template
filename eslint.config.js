// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  expoConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig, // 关闭与 Prettier 冲突的规则
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: {}, // 让 ESLint 读取 tsconfig.json
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['./src', './'],
          alias: {
            '~': './',
            '@': './src',
          },
        },
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn'
    },
  },
  {
    ignores: ['dist/*', 'node_modules/*', 'eslint.config.js'],
  },
]);
