const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
});
