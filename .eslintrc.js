module.exports = {
  extends: ['@connehito', 'plugin:import/errors'],
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'sort-imports': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
