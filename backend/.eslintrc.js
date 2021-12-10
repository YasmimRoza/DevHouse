module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
