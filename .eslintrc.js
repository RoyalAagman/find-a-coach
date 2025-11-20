module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  // Make sure Prettier is last (but we disable its errors below)
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: ['vue', 'prettier'],

  rules: {
    // Disable console/debugger only in production
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Disable ALL indentation/formatting rules
    indent: 'off',
    'vue/script-indent': 'off',
    'vue/html-indent': 'off',

    // Disable ALL prettier errors & warnings
    'prettier/prettier': 'off',

    // Vue optional rule
    'vue/multi-word-component-names': 'off',
  },
};
