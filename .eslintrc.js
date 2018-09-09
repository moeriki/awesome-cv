module.exports = {
  env: { node: true },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  parserOptions: { parser: 'babel-eslint' },
  root: true,
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
