module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mdx/recommended',
  ],
  settings: {
    'mdx/code-blocks': true,
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
