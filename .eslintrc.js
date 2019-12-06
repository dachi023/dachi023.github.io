module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    ga: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      'jsx': true
    }
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        semi: false,
        singleQuote: true
      }
    ]
  },
  overrides: [
    {
      env: {
        jest: true
      },
      files: ['*.test.ts', '*.test.tsx']
    }
  ]
}
