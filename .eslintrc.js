module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-var': ['error'],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-undef': ['error'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-danger': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': ['error', { ignore: ['children'] }],
    'react/react-in-jsx-scope': ['error'],
    'react/require-render-return': ['error'],
    curly: ['warn', 'multi'],
    'no-only-tests/no-only-tests': 'error',
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/no-empty-interface': 1,
    'no-case-declarations': 1,
    'react/jsx-key': 1,
    'react-hooks/exhaustive-deps': 0,
    'no-prototype-builtins': 1,
  },
};
