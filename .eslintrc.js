module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  plugins: [],
  rules: {
    camelcase: 'off',
    'no-unused-expressions': 'off',
  },
};
