module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier', 'eslint-plugin-import'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        tabWidth: 2,
        printWidth: 100,
      },
    ],
  },
};
