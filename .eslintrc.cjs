const path = require("path");
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier'
    ],
    plugins: [
      'react',
      '@typescript-eslint',
      'jsx-a11y',
      'import',
      'prettier'
    ],
    rules: {
      // Các quy tắc tuỳ chỉnh của bạn
      'prettier/prettier': 'error',
      // Các quy tắc khác...
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  