module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'react-hooks'
  ],
  rules: {
  },
  overrides: [
    {
      files: ["*.spec.js"],

      rules: {
        "jest/valid-expect": 0,
        "eslint linebreak-style": ["error", "windows"]
      }
    }
  ]
};
